<?php
if (!defined('ABSPATH')) exit;
function vnw_elementor_catalog() {
 static $catalog;
 if ($catalog === null) $catalog = json_decode(file_get_contents(__DIR__.'/sections.json'), true);
 return $catalog;
}
add_action('elementor/widgets/register', function($manager) {
 require_once __DIR__.'/section-widget.php';
 // Only load this document's section controls when its ID is available.
 // Registering every section of a large site makes Elementor's editor payload huge.
 $id=absint($_GET['elementor-preview']??$_GET['post']??$_POST['editor_post_id']??get_queried_object_id());
 $catalog=vnw_elementor_catalog();$keys=null;
 if($id && ($source=get_post_meta($id,'_vnw_source',true)) && isset($catalog['pages'][$source])){
  $keys=$catalog['pages'][$source]['sections'];
  $saved=json_decode(get_post_meta($id,'_elementor_data',true)?:'[]',true);
  $collect=function($elements)use(&$collect,&$keys){foreach((array)$elements as $element){$type=$element['widgetType']??'';if(str_starts_with($type,'vnw-section-'))$keys[]=substr($type,12);if(!empty($element['elements']))$collect($element['elements']);}};
  $collect($saved);$keys=array_unique($keys);
 }
 foreach($keys??array_keys($catalog['sections']) as $key)if(isset($catalog['sections'][$key]))$manager->register(new VNW_Section_Widget((string)$key));
});
function vnw_elementor_enabled($id) {
 return did_action('elementor/loaded') && get_post_meta($id, '_vnw_elementor', true) && get_post_meta($id, '_elementor_edit_mode', true) === 'builder';
}
/** Normalize only equivalent non-ASCII numeric character references.
 * Do not decode ASCII entities: &lt; and < can represent different markup.
 * Keep whitespace, attributes and element structure intact to protect real edits.
 */
function vnw_elementor_import_signature($html) {
 return trim(preg_replace_callback('/&#(?:x[0-9a-f]+|[0-9]+);/i', function($match) {
  $entity=$match[0];
  $point=strtolower($entity[2])==='x'?hexdec(substr($entity,3,-1)):(int)substr($entity,2,-1);
  return $point>=128?html_entity_decode($entity,ENT_QUOTES|ENT_HTML5,'UTF-8'):$entity;
 },$html));
}
function vnw_elementor_convert($id) {
 if (!did_action('elementor/loaded')) throw new RuntimeException('Activate Elementor before converting pages.');
 if (get_post_meta($id, '_elementor_data', true)) return 'Already editable; left unchanged';
 $post = get_post($id);
 $source = get_post_meta($id, '_vnw_source', true);
 $page = vnw_elementor_catalog()['pages'][$source] ?? null;
 if (!$page) throw new RuntimeException('This is not an imported VNW page.');
 $record = null;
 foreach (vnw_records() as $r) if ($r['source'] === $source) $record = $r;
 // Do not replace content edited since import with the bundled design.
 $baseline = $record['post_content'] ?? $record['html'];
 if (vnw_elementor_import_signature($post->post_content) !== vnw_elementor_import_signature($baseline)) throw new RuntimeException('This page has content changes since import. It was left unchanged for manual review.');
 $elements = [];
 foreach ($page['sections'] as $key) {
  $elements[] = ['id'=>substr($key,0,7), 'elType'=>'widget', 'widgetType'=>'vnw-section-'.$key, 'settings'=>[], 'elements'=>[]];
 }
 update_post_meta($id, '_elementor_data', wp_slash(wp_json_encode($elements)));
 update_post_meta($id, '_elementor_edit_mode', 'builder');
 update_post_meta($id, '_elementor_version', ELEMENTOR_VERSION);
 update_post_meta($id, '_vnw_elementor', 1);
 // Original post_content remains untouched for fallback if Elementor is deactivated.
 return 'Converted successfully';
}
add_action('admin_menu', function() {
 add_theme_page('VNW Visual Editing','VNW Visual Editing','manage_options','vnw-visual-editing',function() {
  if (!current_user_can('manage_options')) return;
  echo '<div class="wrap"><h1>VNW visual editing</h1><p>Convert one imported page at a time to editable Elementor sections. Original content is retained. Pages already using Elementor or changed since import are not overwritten.</p>';
  if (isset($_POST['vnw_convert'])) {
   check_admin_referer('vnw_convert');
   try {
    if (!vnw_setup_host_allowed()) throw new RuntimeException('Conversion is restricted to approved VNW Media addresses.');
    $id=absint($_POST['vnw_page'] ?? 0);
    if (!current_user_can('edit_post',$id)) throw new RuntimeException('You cannot edit this page.');
    echo '<div class="notice notice-success"><p>'.esc_html(vnw_elementor_convert($id)).'</p></div>';
   } catch (Throwable $e) { echo '<div class="notice notice-error"><p>'.esc_html($e->getMessage()).'</p></div>'; }
  }
  if (!did_action('elementor/loaded')) { echo '<p>Activate the Elementor plugin first.</p></div>'; return; }
  echo '<form method="post">';wp_nonce_field('vnw_convert');echo '<select name="vnw_page">';
  foreach (get_posts(['post_type'=>['page','post'],'numberposts'=>-1,'meta_key'=>'_vnw_source','orderby'=>'title','order'=>'ASC']) as $post) echo '<option value="'.esc_attr($post->ID).'">'.esc_html($post->post_title).(get_post_meta($post->ID,'_vnw_elementor',true)?' (editable)':'').'</option>';
  echo '</select>';submit_button('Enable visual editing for selected page','primary','vnw_convert');echo '</form><button type="button" class="button" id="vnw-convert-all" data-nonce="'.esc_attr(wp_create_nonce('vnw_visual_convert')).'">Enable visual editing for all unchanged imported pages</button><pre id="vnw-convert-status" style="white-space:pre-wrap"></pre><script src="'.esc_url(get_template_directory_uri().'/elementor/setup.js').'"></script><p>Then open Pages → Edit with Elementor. Select a section to edit its text, images and links. Keep the existing section layout to preserve the design.</p></div>';
 });
});
add_action('wp_enqueue_scripts', function() {
 if (!vnw_elementor_enabled(get_queried_object_id())) return;
 wp_enqueue_style('vnw-elementor', get_template_directory_uri().'/elementor/editor.css',[], '0.4.3');
 if (\Elementor\Plugin::$instance->editor->is_edit_mode()) wp_enqueue_script('vnw-elementor-preview',get_template_directory_uri().'/elementor/preview.js',[], '0.4.3',true);
}, 100);

add_action('wp_ajax_vnw_visual_convert',function() {
 if(!current_user_can('manage_options'))wp_send_json_error('Not authorized',403);
 check_ajax_referer('vnw_visual_convert');
 try {
  if(!vnw_setup_host_allowed())throw new RuntimeException('Conversion is restricted to approved VNW Media addresses.');
  $id=absint($_POST['page_id']??0);
  if(!current_user_can('edit_post',$id))throw new RuntimeException('You cannot edit this page.');
  wp_send_json_success(vnw_elementor_convert($id));
 }catch(Throwable $e){wp_send_json_error($e->getMessage(),400);}
});
