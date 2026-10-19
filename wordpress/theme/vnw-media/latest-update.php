<?php
if (!defined('ABSPATH')) exit;
/** Explicit website update. No activation-time writes; edited pages are skipped. */
function vnw_refresh_latest($id) {
 $post=get_post($id);if(!$post)throw new RuntimeException('Page not found.');$source=get_post_meta($id,'_vnw_source',true);
 $old=null;$new=null;$prior=null;
 foreach(vnw_records() as $r)if($r['source']===$source)$new=$r;
 foreach([['content/previous-043-pages.json','elementor/previous-043-sections.json'],['content/previous-031-pages.json','elementor/previous-031-sections.json'],['content/previous-pages.json','elementor/previous-sections.json']] as $files){
  foreach(json_decode(file_get_contents(__DIR__.'/'.$files[0]),true) as $r){
   $baseline=$r['post_content']??$r['html']??null;
   if(!is_string($baseline))continue;
   if($r['source']===$source && vnw_elementor_import_signature($post->post_content)===vnw_elementor_import_signature($baseline)){
    $old=$r;$prior=json_decode(file_get_contents(__DIR__.'/'.$files[1]),true);break 2;
   }
  }
 }
 if(!$new||!$post)throw new RuntimeException('Imported page not found.');
 $newContent=$new['post_content']??$new['html'];
 $signature=vnw_elementor_import_signature($post->post_content);
 $current=vnw_elementor_catalog()['pages'][$source]['sections'];
 $raw=get_post_meta($id,'_elementor_data',true);$data=$raw?json_decode($raw,true):[];
 if($raw&&!is_array($data))return 'Skipped: unrecognized Elementor data';
 $expected=array_map(fn($key)=>'vnw-section-'.$key,$current);
 if($signature===vnw_elementor_import_signature($newContent)&&array_column($data,'widgetType')===$expected)return 'Already current; edits retained';
 // Freshly imported current content needs conversion only, even when it matches an older baseline.
 if(!$raw&&$signature===vnw_elementor_import_signature($newContent))return vnw_elementor_convert($id);
 if(!$old){if($signature===vnw_elementor_import_signature($newContent))return vnw_elementor_convert($id);return 'Skipped: page content does not match a supported baseline';}
 if($signature!==vnw_elementor_import_signature($old['post_content']??$old['html']))return 'Skipped: page content was edited';
 if($post->post_title!==$old['title']||$post->post_excerpt!==$old['description'])return 'Skipped: page title or description was edited';
 if($data){
  $keys=$prior['pages'][$source]['sections']??[];
  if(count($data)!==count($keys))return 'Skipped: Elementor structure was edited';
  foreach($data as $i=>$el){
   if(($el['widgetType']??'')!=='vnw-section-'.$keys[$i]||!empty($el['elements']))return 'Skipped: Elementor content was edited';
   foreach(($el['settings']??[]) as $name=>$value){
    if($value===''||$value===[]||$value===null)continue;
    $field=$prior['sections'][$keys[$i]]['fields'][$name]??null;
    if(!$field)return 'Skipped: Elementor layout settings were edited';
    $actual=is_array($value)?($value['url']??null):$value;
    if($actual!==vnw_expand($field['value']))return 'Skipped: Elementor content was edited';
   }
  }
 }
 // Keep the prior page and builder content for manual recovery.
 update_post_meta($id,'_vnw_before_044',wp_slash(wp_json_encode(['post_content'=>$post->post_content,'post_title'=>$post->post_title,'post_excerpt'=>$post->post_excerpt,'elementor_data'=>$raw])));
 kses_remove_filters();
 try{$result=wp_update_post(wp_slash(['ID'=>$id,'post_content'=>$newContent,'post_title'=>$new['title'],'post_excerpt'=>$new['description']]),true);}finally{kses_init_filters();}
 if(is_wp_error($result))throw new RuntimeException($result->get_error_message());
 delete_post_meta($id,'_elementor_data');
 try{vnw_elementor_convert($id);}catch(Throwable $e){
  kses_remove_filters();try{wp_update_post(wp_slash(['ID'=>$id,'post_content'=>$post->post_content,'post_title'=>$post->post_title,'post_excerpt'=>$post->post_excerpt]));}finally{kses_init_filters();}
  if($raw)update_post_meta($id,'_elementor_data',wp_slash($raw));
  throw $e;
 }
 delete_post_meta($id,'_elementor_css');
 clean_post_cache($id);
 return 'Updated to latest design';
}
add_action('admin_menu',function(){add_theme_page('Latest HTML Update','VNW Latest HTML Update','manage_options','vnw-latest-update',function(){
 if(!current_user_can('manage_options'))return;
 echo '<div class="wrap"><h1>VNW latest HTML update — 0.4.4</h1><p>Refresh unchanged imported pages and enable Elementor editing. Pages with saved Elementor settings or other edits are left for manual review. Keep this tab open.</p>';
 if(!did_action('elementor/loaded')){echo '<p>Activate an up-to-date compatible Elementor version first.</p></div>';return;}
 $has_imported=get_posts(['post_type'=>['page','post'],'post_status'=>'any','meta_key'=>'_vnw_source','fields'=>'ids','numberposts'=>1]);
 $button_label=$has_imported?'Apply latest HTML to unchanged pages':'Install all pages and enable Elementor editing';
 echo '<button class="button button-primary" id="vnw-latest-start" data-nonce="'.esc_attr(wp_create_nonce('vnw_latest_update')).'">'.esc_html($button_label).'</button><pre id="vnw-latest-status" style="white-space:pre-wrap"></pre><script src="'.esc_url(get_template_directory_uri().'/latest-update.js?ver=0.4.4').'"></script></div>';
});});
add_action('wp_ajax_vnw_latest_update',function(){
 if(!current_user_can('manage_options'))wp_send_json_error('Not authorized',403);
 check_ajax_referer('vnw_latest_update');
 try{
  if(!vnw_setup_host_allowed())throw new RuntimeException('Setup is restricted to approved VNW Media addresses.');
  if(!did_action('elementor/loaded'))throw new RuntimeException('Activate Elementor first.');
  $id=absint($_POST['page_id']??0);
  if(!$id){vnw_import();$items=get_posts(['post_type'=>['page','post'],'numberposts'=>-1,'meta_key'=>'_vnw_source']);wp_send_json_success(array_map(fn($p)=>['id'=>$p->ID,'title'=>$p->post_title],$items));}
  if(!current_user_can('edit_post',$id))throw new RuntimeException('Not authorized for this page.');
  wp_send_json_success(vnw_refresh_latest($id));
 }catch(Throwable $e){wp_send_json_error($e->getMessage(),400);}
});
