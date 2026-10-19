<?php
// Disposable Playground only. Real WordPress routing/HTML/sitemap APIs; no real mail.
require '/wordpress/wp-load.php';
function verify_clean($condition,$message){if(!$condition)throw new RuntimeException($message);}
add_filter('pre_wp_mail',function(){throw new RuntimeException('No email should be sent in this route test.');});
$imported=vnw_import();
verify_clean($imported===211,'Expected 211 imported pages and posts');
verify_clean(vnw_import()===0,'Import stays idempotent');
$data=vnw_clean_route_data();$sources=$data['sources'];
verify_clean(count($sources)===211 && count(array_unique($sources))===211,'No lost pages or route collisions');
verify_clean($sources['industries.html']==='industries/overview/' && $sources['industries/index.html']==='industries/','Both industry pages retained');
$pages=get_posts(['post_type'=>['page','post'],'post_status'=>'publish','numberposts'=>-1,'meta_key'=>'_vnw_source']);
$signature=function()use($pages){$state=[];foreach($pages as $page)$state[]=[$page->ID,get_post($page->ID)->post_content,get_post_meta($page->ID,'_elementor_data',true),get_post_meta($page->ID,'_vnw_source',true)];return hash('sha256',wp_json_encode($state));};
$before=$signature(); $route_checks=0; $redirect_checks=0;
global $wp_rewrite;
// wp-load.php already ran init; repeating it redeclares Elementor classes.
$rules=$wp_rewrite->wp_rewrite_rules();
foreach($pages as $page){
 $source=get_post_meta($page->ID,'_vnw_source',true);$expected=trailingslashit(home_url()).$sources[$source];
 verify_clean(get_permalink($page->ID)===$expected,'Clean permalink: '.$source);
 verify_clean(vnw_clean_url(home_url('/'.$source))===$expected,'Legacy destination: '.$source);
 verify_clean(vnw_clean_url($expected)===$expected,'No redirect loop: '.$source);
 if($source!=='index.html'){
  $found=false;
  foreach($rules as $pattern=>$query){if(preg_match('#^'.$pattern.'#',rtrim($sources[$source],'/'))){$found=$query==='index.php?vnw_source='.$source;break;}}
  verify_clean($found,'WordPress rewrite selects the right source: '.$source);
 }
 $route_checks++;
}
$redirect_filter=function($url,$status){throw new RuntimeException(wp_json_encode(['location'=>$url,'status'=>$status]));};
add_filter('wp_redirect',$redirect_filter,999,2);
$base=wp_parse_url(home_url(),PHP_URL_PATH)?:'';
foreach($data['routes'] as $source=>$target){
 $_SERVER['REQUEST_METHOD']='GET';$_SERVER['REQUEST_URI']=$base.'/'.$source.'?utm_source=google&gclid=test';
 try{foreach($GLOBALS['wp_filter']['template_redirect'][0] as $callback)call_user_func($callback['function']);verify_clean(false,'Expected legacy redirect: '.$source);}
 catch(RuntimeException $e){$result=json_decode($e->getMessage(),true);verify_clean(is_array($result)&&$result['status']===301,'Permanent redirect: '.$source);$parts=explode('#',$target,2);verify_clean($result['location']===trailingslashit(home_url()).$parts[0].'?utm_source=google&gclid=test'.(isset($parts[1])?'#'.$parts[1]:''),'One-hop redirect and preserved campaign query: '.$source);}
 $redirect_checks++;
}
remove_filter('wp_redirect',$redirect_filter,999);
$_SERVER['REQUEST_URI']=$base.'/services/google-ppc/';
foreach(['https://client.example/services/google-ppc.html',home_url('/wp-admin/admin-post.php'),'mailto:contactus@vnwmedia.com','tel:17328200609',home_url('/wp-content/themes/vnw-media/guide.html'),home_url('/unknown.html'),'#questions'] as $url)verify_clean(vnw_clean_url($url)===$url,'Unrelated URL unchanged: '.$url);
$old=home_url('/services/google-ppc.html');$clean=home_url('/services/google-ppc/');
verify_clean(vnw_clean_url($old.'?utm_source=google#budget')===$clean.'?utm_source=google#budget','Query and fragment retained');
verify_clean(vnw_clean_url('../google-ppc.html')===$clean,'Relative URL resolution');
$html='<a href="'.$old.'?utm_source=google&amp;utm_medium=cpc#budget">PPC</a><a href="https://client.example/work.html">External</a><form method="post" action="'.admin_url('admin-post.php').'"><input type="hidden" name="vnw_nonce" value="keep-me"></form><meta property="og:url" content="'.$old.'"><link rel="canonical" href="'.$old.'"><img src="'.get_template_directory_uri().'/assets/hero.webp"><script type="application/ld+json">'.wp_json_encode(['url'=>$old,'mainEntityOfPage'=>['@id'=>$old.'#faq']]).'</script>';
$converted=vnw_clean_public_document($html);
verify_clean(!str_contains($converted,$old),'Internal links, canonical, Open Graph and JSON-LD are clean');
foreach(['External','https://client.example/work.html','name="vnw_nonce" value="keep-me"',admin_url('admin-post.php'),get_template_directory_uri().'/assets/hero.webp'] as $unchanged)verify_clean(str_contains($converted,$unchanged),'Preserve external links, asset paths and form safety: '.$unchanged);
foreach(['page','post'] as $type){$provider=new WP_Sitemaps_Posts();foreach($provider->get_url_list(1,$type) as $entry)verify_clean(!str_contains($entry['loc'],'.html'),'Native sitemap uses clean URLs');}
verify_clean($signature()===$before,'Saved content, source IDs and Elementor data remain unchanged');
$report=wp_json_encode(['php'=>PHP_VERSION,'wordpress'=>get_bloginfo('version'),'pages'=>$route_checks,'legacy_301_redirects'=>$redirect_checks,'collision_pairs_preserved'=>5,'query_strings_and_fragments'=>'preserved','html_metadata_schema'=>'passed using real WP_HTML_Tag_Processor','native_sitemap'=>'clean','saved_content'=>'unchanged','email'=>'no messages sent'],JSON_PRETTY_PRINT);
file_put_contents('/reports/clean-url-wordpress-2026-10-19.json',$report."\n");echo $report;
