<?php
if (!defined('ABSPATH')) exit;
function vnw_records() {
 static $records;
 if ($records === null) $records = json_decode(file_get_contents(__DIR__.'/content/pages.json'), true);
 return $records;
}
function vnw_expand($html) {
 return str_replace(['{{HOME}}','{{THEME}}','{{FORM_ACTION}}'], [trailingslashit(home_url()),trailingslashit(get_template_directory_uri()),admin_url('admin-post.php')], $html);
}
function vnw_record() {
 $source = get_post_meta(get_queried_object_id(), '_vnw_source', true);
 foreach (vnw_records() as $record) if ($record['source'] === $source) return $record;
 if(is_singular('post')){foreach(vnw_records() as $record)if($record['type']==='post' && str_contains($record['html'],'{{POST_CONTENT}}')){$record['source']='native-post';$record['document_title']=get_the_title().' | VNW Media';$record['description']=get_the_excerpt();$record['schemas']=[];return $record;}}
 return null;
}
add_action('after_setup_theme', function(){add_theme_support('title-tag');add_theme_support('post-thumbnails');add_theme_support('html5',['search-form','gallery','caption','style','script']);});
add_action('init', function(){
 foreach (vnw_records() as $record) {
  if ($record['type']==='redirect') continue;
  add_rewrite_rule('^'.preg_quote($record['source'],'#').'/?$', 'index.php?vnw_source='.$record['source'], 'top');
 }
});
add_filter('query_vars',function($vars){$vars[]='vnw_source';return $vars;});
add_action('pre_get_posts',function($query){
 if (is_admin() || !$query->is_main_query() || !$query->get('vnw_source')) return;
 $ids=get_posts(['post_type'=>['page','post'],'post_status'=>'publish','meta_key'=>'_vnw_source','meta_value'=>$query->get('vnw_source'),'fields'=>'ids','numberposts'=>1]);
 if ($ids) {$query->set('post_type','any');$query->set('p',$ids[0]);$query->is_home=false;$query->is_singular=true;}
});
function vnw_permalink($url,$post) { $source=get_post_meta($post->ID,'_vnw_source',true); return $source?home_url('/'.($source==='index.html'?'':$source)):$url; }
add_filter('post_link','vnw_permalink',10,2);add_filter('page_link',function($url,$id){return vnw_permalink($url,get_post($id));},10,2);
add_filter('redirect_canonical',function($url){return get_query_var('vnw_source')?false:$url;});
add_action('template_redirect',function(){
 $path=ltrim(parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH),'/');
 $base=trim(parse_url(home_url(),PHP_URL_PATH)??'','/');if($base && str_starts_with($path,$base.'/'))$path=substr($path,strlen($base)+1);
 foreach(vnw_records() as $r)if($r['type']==='redirect' && $path===$r['source']){wp_safe_redirect(home_url('/'.$r['target']),301);exit;}
});
add_action('wp_enqueue_scripts',function(){
 $r=vnw_record();if(!$r)$r=vnw_records()[0];
 foreach($r['styles'] as $i=>$url)wp_enqueue_style('vnw-'.$i,vnw_expand($url),[],null);
 foreach($r['inline_styles'] as $css)wp_add_inline_style('vnw-'.(count($r['styles'])-1),vnw_expand($css));
 wp_enqueue_script('vnw-catalog',get_template_directory_uri().'/service-catalog.js',[],null,true);
 wp_enqueue_script('vnw-interactions',get_template_directory_uri().'/interactions.js',['vnw-catalog'],null,true);
 wp_add_inline_script('vnw-interactions','window.vnwSite='.wp_json_encode(['home'=>trailingslashit(home_url()),'theme'=>trailingslashit(get_template_directory_uri())]).';','before');
 wp_enqueue_script('vnw-tickers',get_template_directory_uri().'/tickers.js',['vnw-interactions'],null,true);
 wp_enqueue_script('vnw-resources',get_template_directory_uri().'/resources-live.js',['vnw-interactions'],null,true);
});
function vnw_import() {
 $count=0;$home=0;
 foreach(vnw_records() as $i=>$r){
  if($r['type']==='redirect')continue;
  $found=get_posts(['post_type'=>['page','post'],'post_status'=>'any','meta_key'=>'_vnw_source','meta_value'=>$r['source'],'numberposts'=>1]);
  // Never overwrite existing imported edits when running setup again.
  if($found){if($r['source']==='index.html')$home=$found[0]->ID;continue;}
  $post=['post_type'=>$r['type'],'post_status'=>'publish','post_title'=>$r['title'],'post_name'=>basename($r['source'],'.html'),'post_content'=>$r['post_content']??$r['html'],'post_excerpt'=>$r['description'],'menu_order'=>$i];
  // Trusted bundled HTML contains forms and SVG; preserve it during this explicit admin import.
  kses_remove_filters();
  try {$id=wp_insert_post(wp_slash($post),true);} finally {kses_init_filters();}
  if(is_wp_error($id))throw new RuntimeException($id->get_error_message());
  update_post_meta($id,'_vnw_source',$r['source']);
  if($r['type']==='post'){ $term=term_exists($r['category'],'category'); if(!$term)$term=wp_insert_term($r['category'],'category'); if(!is_wp_error($term))wp_set_post_terms($id,[(int)(is_array($term)?$term['term_id']:$term)],'category'); }
  if($r['source']==='index.html')$home=$id;
  $count++;
 }
 if($home){update_option('show_on_front','page');update_option('page_on_front',$home);}
 flush_rewrite_rules();return $count;
}
add_action('admin_menu',function(){add_theme_page('VNW Media Setup','VNW Media Setup','manage_options','vnw-setup',function(){
 if(!current_user_can('manage_options'))return;
 echo '<div class="wrap"><h1>VNW Media staging setup</h1><p>Import the approved pages and articles. Existing content is not deleted. Imported pages already present are not overwritten.</p><p>Only use on redesign.vnwmedia.net until the conversion has passed review.</p>';
 if(isset($_POST['vnw_import'])){check_admin_referer('vnw_import');$host=wp_parse_url(home_url(),PHP_URL_HOST);if(!in_array($host,['redesign.vnwmedia.net','localhost','127.0.0.1'],true)){echo '<p>Import blocked: this is not the approved staging host.</p>';}else{echo '<p>Imported '.esc_html(vnw_import()).' items.</p>';}}
 echo '<form method="post">';wp_nonce_field('vnw_import');submit_button('Import approved website','primary','vnw_import');echo '</form></div>';
});});
function vnw_grid(){
 $html='';$posts=get_posts(['post_type'=>'post','post_status'=>'publish','numberposts'=>-1,'meta_query'=>['relation'=>'OR',['key'=>'_vnw_source','compare'=>'EXISTS'],['key'=>'_vnw_resource','value'=>'1']],'orderby'=>'menu_order date','order'=>'ASC']);
 $order=[];foreach(vnw_records() as $item)if($item['source']==='resources.html'){$original=json_decode(file_get_contents(__DIR__.'/content/export.json'),true);foreach($original['records'] as $row)if($row['source']==='resources.html'){preg_match_all('~class="story-photo" href="([^"]+)~',$row['html'],$matches);$order=array_flip($matches[1]);}}
 usort($posts,function($a,$b)use($order){return ($order[get_post_meta($a->ID,'_vnw_source',true)]??-1)<=>($order[get_post_meta($b->ID,'_vnw_source',true)]??-1);});
 foreach($posts as $p){
  $source=get_post_meta($p->ID,'_vnw_source',true);$r=null;foreach(vnw_records() as $item)if($item['source']===$source)$r=$item;
  if($r && !str_contains($r['html'],'{{POST_CONTENT}}'))continue;
  $cat=get_the_category($p->ID);$category=$cat?$cat[0]->name:'Strategy';$image=get_the_post_thumbnail_url($p->ID,'large')?:vnw_expand($r['image']??'');
  $url=esc_url(get_permalink($p));$title=esc_html(get_the_title($p));
  $html.='<article class="story" data-category="'.esc_attr($category).'"><a class="story-photo" href="'.$url.'">';
  if($image)$html.='<img src="'.esc_url($image).'" alt="'.esc_attr($r['image_alt']??'').'" loading="lazy">';
  $html.='</a><div class="story-copy"><span class="meta">'.esc_html($category).' <span class="dot">/</span> '.max(1,ceil(str_word_count(wp_strip_all_tags($p->post_content))/220)).' min read</span><h3><a href="'.$url.'">'.$title.'</a></h3><p>'.esc_html(get_the_excerpt($p)).'</p><a class="read-link" href="'.$url.'">Read article <span aria-hidden="true">↗</span></a></div></article>';
 }return $html;
}
function vnw_prepare_forms($html){
 return preg_replace_callback('/<form\b[^>]*data-vnw-form[^>]*>/i',function($match){
  $fields='<input type="hidden" name="action" value="vnw_contact">'.wp_nonce_field('vnw_contact','vnw_nonce',true,false);
  $fields.='<input type="hidden" name="return_to" value="'.esc_url(get_permalink()).'">';
  $fields.='<div style="position:absolute;left:-10000px" aria-hidden="true"><label>Leave empty<input name="vnw_company_url" tabindex="-1" autocomplete="off"></label></div>';
  if(isset($_GET['inquiry']))$fields.='<p class="form-status" role="status">'.esc_html($_GET['inquiry']==='sent'?'Thank you. Your inquiry has been submitted.':'Your inquiry could not be sent. Please email contactus@vnwmedia.com or call (732) 820-0609.').'</p>';
  return $match[0].$fields;
 },$html);
}
function vnw_contact(){
 $return=wp_validate_redirect(esc_url_raw(wp_unslash($_POST['return_to']??'')),home_url('/contact.html'));
 $finish=function($status)use($return){wp_safe_redirect(add_query_arg('inquiry',$status,$return));exit;};
 if($_SERVER['REQUEST_METHOD']!=='POST'||!wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['vnw_nonce']??'')),'vnw_contact'))$finish('error');
 if(!empty($_POST['vnw_company_url']))$finish('error');
 $email=sanitize_email(wp_unslash($_POST['email']??''));$name=sanitize_text_field(wp_unslash($_POST['name']??''));
 if(!$name||!is_email($email))$finish('error');
 $key='vnw_rate_'.hash_hmac('sha256',$_SERVER['REMOTE_ADDR']??'',wp_salt());$count=(int)get_transient($key);
 if($count>=5)$finish('error');set_transient($key,$count+1,10*MINUTE_IN_SECONDS);
 $body='';foreach(['name','email','phone','company','website','interest','message'] as $field){$value=sanitize_textarea_field(wp_unslash($_POST[$field]??''));$body.=ucfirst($field).': '.substr($value,0,5000)."\n\n";}
 $sent=wp_mail('contactus@vnwmedia.com','VNW Media website inquiry',$body,['Reply-To: '.$email]);$finish($sent?'sent':'error');
}
add_action('admin_post_nopriv_vnw_contact','vnw_contact');add_action('admin_post_vnw_contact','vnw_contact');

add_filter('pre_get_document_title',function($title){$r=vnw_record();return $r?($r['document_title']?:$r['title'].' | VNW Media'):$title;});
add_action('wp_head',function(){
 $r=vnw_record();if(!$r)return;
 echo '<meta name="description" content="'.esc_attr($r['description']).'">';
 foreach($r['schemas'] as $schema){$object=json_decode(vnw_expand($schema),true);if($object)echo '<script type="application/ld+json">'.wp_json_encode($object,JSON_HEX_TAG|JSON_HEX_AMP).'</script>';}
});

add_action('save_post_post',function($id,$post,$update){if(!$update && !wp_is_post_revision($id))update_post_meta($id,'_vnw_resource','1');},10,3);

require_once __DIR__.'/elementor/integration.php';
