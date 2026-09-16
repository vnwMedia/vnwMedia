<?php
if (!defined('ABSPATH')) exit;
class VNW_Section_Widget extends \Elementor\Widget_Base {
 private $section_key;
 public function __construct($data=[], $args=null) {
  $this->section_key=is_string($data)?$data:substr($data['widgetType'] ?? '',12);
  if(is_string($data))$data=[];
  parent::__construct($data,$args);
 }
 public function get_name() { return 'vnw-section-'.$this->section_key; }
 public function get_title() { return vnw_elementor_catalog()['sections'][$this->section_key]['title']; }
 protected function is_dynamic_content(): bool { return true; }
 public function show_in_panel() { return false; }
 public function get_icon() { return 'eicon-editor-paragraph'; }
 public function get_categories() { return ['general']; }
 protected function register_controls() {
  $fields=vnw_elementor_catalog()['sections'][$this->section_key]['fields'];
  foreach (array_chunk($fields,15,true) as $i=>$group) {
   $this->start_controls_section('content_'.$i,['label'=>'Content '.($i+1),'tab'=>\Elementor\Controls_Manager::TAB_CONTENT]);
   foreach($group as $name=>$field) {
    $control=['label'=>$field['label'],'label_block'=>true];
    $value=vnw_expand($field['value']);
    switch($field['type']) {
     case 'media':$control+=['type'=>\Elementor\Controls_Manager::MEDIA,'default'=>['url'=>$value]];break;
     case 'url':$control+=['type'=>\Elementor\Controls_Manager::URL,'default'=>['url'=>$value],'options'=>['url']];break;
     case 'rich':$control+=['type'=>\Elementor\Controls_Manager::WYSIWYG,'default'=>$value];break;
     default:$control+=['type'=>\Elementor\Controls_Manager::TEXT,'default'=>$value];
    }
    $this->add_control($name,$control);
   }
   $this->end_controls_section();
  }
 }
 protected function render() {
  $section=vnw_elementor_catalog()['sections'][$this->section_key];
  $settings=$this->get_settings_for_display();$replace=[];
  foreach($section['fields'] as $name=>$field) {
   $value=$settings[$name] ?? vnw_expand($field['value']);
   switch($field['type']) {
    case 'media': case 'url': $value=esc_url(is_array($value)?($value['url']??''):$value);break;
    case 'rich':
     $value=wp_kses_post($value);
     // WYSIWYG paragraphs must not introduce nested paragraphs/headings.
     $value=preg_replace('~</p>\s*<p[^>]*>~i','<br><br>',$value);
     $value=preg_replace('~</?p(?:\s[^>]*)?>~i','',$value);break;
    default:$value=esc_attr($value);
   }
   $replace['{{'.$name.'}}']=$value;
  }
  $html=strtr($section['html'],$replace);
  if(str_contains($html,'{{POST_GRID}}'))$html=str_replace('{{POST_GRID}}',vnw_grid(),$html);
  echo vnw_prepare_forms(vnw_expand($html));
 }
}
