<?php
/** Public WordPress routes only. Source identifiers and saved Elementor edits stay intact. */
if (!defined('ABSPATH')) exit;

function vnw_clean_route_data() {
 static $data;
 if ($data !== null) return $data;
 $records = vnw_records(); $sources = []; $owners = []; $redirects = [];
 // These .html pages and folder/index.html pages contain different approved content.
 $overviews = ['industries.html','industries/healthcare.html','industries/legal-professional-services.html','industries/real-estate.html','industries/retail-ecommerce.html'];
 foreach ($records as $record) {
  $source = $record['source'];
  if ($record['type'] === 'redirect') { $redirects[$source] = $record['target']; continue; }
  if ($source === 'index.html') $path = '';
  elseif (in_array($source, $overviews, true)) $path = substr($source, 0, -5).'/overview/';
  elseif (str_ends_with($source, '/index.html')) $path = substr($source, 0, -10);
  else $path = preg_replace('/\.html$/', '', $source).'/';
  if (isset($owners[$path])) throw new RuntimeException('Conflicting VNW public route: '.$path);
  $sources[$source] = $path; $owners[$path] = $source;
 }
 $alias_file = __DIR__.'/clean-url-aliases.json';
 if (is_file($alias_file)) $redirects += json_decode(file_get_contents($alias_file), true) ?: [];
 $routes = $sources;
 foreach ($redirects as $source => $target) {
  $seen = [$source => true]; $fragment = '';
  while (true) {
   $parts = explode('#', $target, 2); $target = $parts[0];
   if (isset($parts[1]) && $fragment === '') $fragment = '#'.$parts[1];
   if (isset($sources[$target])) { $routes[$source] = $sources[$target].$fragment; break; }
   if (isset($seen[$target]) || !isset($redirects[$target])) break;
   $seen[$target] = true; $target = $redirects[$target];
  }
 }
 $lookup = [];
 foreach ($routes as $source => $path) {
  $lookup[$source] = $path;
  $clean = $source === 'index.html' ? '' : (str_ends_with($source, '/index.html') ? substr($source, 0, -10) : preg_replace('/\.html$/', '', $source).'/');
  // Existing clean folder routes take priority over conflicting legacy filenames.
  if (!isset($owners[$clean])) $lookup[rtrim($clean, '/')] = $path;
 }
 foreach ($owners as $path => $source) $lookup[rtrim($path, '/')] = $path;
 return $data = ['sources' => $sources, 'routes' => $routes, 'lookup' => $lookup];
}

function vnw_clean_normalize_path($path) {
 $parts = [];
 foreach (explode('/', $path) as $part) {
  if ($part === '' || $part === '.') continue;
  if ($part === '..') array_pop($parts); else $parts[] = $part;
 }
 return '/'.implode('/', $parts).(str_ends_with($path, '/') && $parts ? '/' : '');
}

function vnw_clean_url($url) {
 if (!is_string($url) || $url === '' || preg_match('/^(?:#|mailto:|tel:|data:|javascript:)/i', $url)) return $url;
 $parts = wp_parse_url(html_entity_decode($url, ENT_QUOTES | ENT_HTML5, 'UTF-8'));
 $home = wp_parse_url(trailingslashit(home_url()));
 if ($parts === false || (isset($parts['scheme']) && !in_array(strtolower($parts['scheme']), ['http','https'], true))) return $url;
 if (isset($parts['host']) && (strcasecmp($parts['host'], $home['host']) !== 0 || ($parts['port'] ?? null) !== ($home['port'] ?? null))) return $url;
 if (isset($parts['user']) || isset($parts['pass'])) return $url;
 $path = $parts['path'] ?? '';
 if ($path === '') return $url;
 if ($path[0] !== '/') {
  $request_path = wp_parse_url($_SERVER['REQUEST_URI'] ?? ($home['path'] ?? '/'), PHP_URL_PATH) ?: '/';
  $path = (str_ends_with($request_path, '/') ? $request_path : dirname($request_path).'/').$path;
 }
 $path = vnw_clean_normalize_path($path);
 $base = trailingslashit($home['path'] ?? '/');
 if (!str_starts_with($path, $base)) return $url;
 $relative = substr($path, strlen($base));
 $lookup = vnw_clean_route_data()['lookup'];
 $key = rtrim($relative, '/');
 if (!array_key_exists($key, $lookup)) return $url;
 $destination = $lookup[$key];
 $target_parts = explode('#', $destination, 2);
 return trailingslashit(home_url()).$target_parts[0].(isset($parts['query']) ? '?'.$parts['query'] : '').(isset($parts['fragment']) ? '#'.$parts['fragment'] : (isset($target_parts[1]) ? '#'.$target_parts[1] : ''));
}

function vnw_clean_schema_urls($value) {
 if (is_string($value)) return vnw_clean_url($value);
 if (is_array($value)) foreach ($value as &$item) $item = vnw_clean_schema_urls($item);
 return $value;
}

function vnw_clean_public_document($html) {
 // Never rewrite source IDs, asset URLs, email text, scripts, or external client links.
 $tags = new WP_HTML_Tag_Processor($html);
 while ($tags->next_tag()) {
  foreach (['href','action'] as $attribute) {
   $url = $tags->get_attribute($attribute);
   if (is_string($url) && ($clean = vnw_clean_url($url)) !== $url) $tags->set_attribute($attribute, $clean);
  }
  if ($tags->get_tag() === 'META' && in_array(strtolower($tags->get_attribute('property') ?? $tags->get_attribute('name') ?? ''), ['og:url','twitter:url'], true)) {
   $url = $tags->get_attribute('content');
   if (is_string($url)) $tags->set_attribute('content', vnw_clean_url($url));
  }
 }
 $html = $tags->get_updated_html();
 return preg_replace_callback('~(<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>)(.*?)(</script>)~is', function($match) {
  $schema = json_decode($match[2], true);
  return is_array($schema) ? $match[1].wp_json_encode(vnw_clean_schema_urls($schema), JSON_HEX_TAG | JSON_HEX_AMP | JSON_UNESCAPED_SLASHES).$match[3] : $match[0];
 }, $html);
}

add_action('init', function() {
 $sources = vnw_clean_route_data()['sources'];
 foreach ($sources as $source => $path) if ($path !== '') add_rewrite_rule('^'.preg_quote(rtrim($path, '/'), '#').'/?$', 'index.php?vnw_source='.$source, 'top');
 // Theme replacement does not trigger after_switch_theme. Flush once, not on every visit.
 $version = '20261019-'.md5(wp_json_encode($sources));
 if (get_option('vnw_clean_routes_version') !== $version) { flush_rewrite_rules(false); update_option('vnw_clean_routes_version', $version, false); }
}, 99);

add_filter('page_link', 'vnw_clean_url', 20);
add_filter('post_link', 'vnw_clean_url', 20);
add_filter('wp_redirect', 'vnw_clean_url', 20);

add_action('template_redirect', function() {
 if (is_admin() || is_preview() || !in_array($_SERVER['REQUEST_METHOD'] ?? 'GET', ['GET','HEAD'], true)) return;
 $request = $_SERVER['REQUEST_URI'] ?? '/';
 $path = wp_parse_url($request, PHP_URL_PATH) ?: '/';
 $url = home_url(); $home_path = wp_parse_url($url, PHP_URL_PATH) ?: '';
 // REQUEST_URI already includes a possible WordPress subdirectory.
 $origin = substr($url, 0, strlen($url) - strlen($home_path));
 $current = $origin.$request; $clean = vnw_clean_url($current);
 if ($clean !== $current) { wp_safe_redirect($clean, 301); exit; }
 if (is_404() && untrailingslashit($path) === untrailingslashit(wp_parse_url(home_url('/thank-you/'), PHP_URL_PATH))) {
  $GLOBALS['vnw_bundled_thank_you'] = true; $GLOBALS['wp_query']->is_404 = false; status_header(200);
 }
}, 0);

add_action('template_redirect', function() {
 if (!is_admin() && !is_feed() && !is_robots() && !is_trackback() && !wp_is_json_request() && !get_query_var('sitemap') && !get_query_var('sitemap-stylesheet')) ob_start('vnw_clean_public_document');
}, 5);

add_action('wp_enqueue_scripts', function() {
 $config = ['home' => trailingslashit(home_url()), 'routes' => vnw_clean_route_data()['lookup']];
 wp_enqueue_script('vnw-clean-urls', get_template_directory_uri().'/clean-urls.js', ['vnw-interactions','vnw-buttons','vnw-form-bridge'], '20261019-clean-urls', true);
 wp_add_inline_script('vnw-clean-urls', 'window.vnwCleanRoutes='.wp_json_encode($config).';', 'before');
}, 101);
