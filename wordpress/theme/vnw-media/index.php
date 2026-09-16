<?php if(!defined('ABSPATH'))exit; $r=vnw_record(); ?>
<!doctype html><html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo('charset'); ?>"><meta name="viewport" content="width=device-width,initial-scale=1"><?php wp_head(); ?></head>
<body <?php
$attrs=$r['body_attributes']??[];
body_class($attrs['class']??[]);echo ' ';
foreach($attrs as $name=>$value)if($name==='id'||str_starts_with($name,'data-'))echo esc_attr($name).'="'.esc_attr(is_array($value)?implode(' ',$value):$value).'" ';
?>><?php wp_body_open(); echo vnw_expand(file_get_contents(__DIR__.'/content/header.html')); ?>
<?php
if(have_posts()):while(have_posts()):the_post();
 if($r && vnw_elementor_enabled(get_the_ID())) {
  $page=vnw_elementor_catalog()['pages'][$r['source']];
  echo '<main';
  foreach($page['main_attributes'] as $name=>$value) if($name==='id'||$name==='class'||str_starts_with($name,'data-')) echo ' '.esc_attr($name).'="'.esc_attr(is_array($value)?implode(' ',$value):$value).'"';
  echo '>';the_content();echo '</main>';
 }elseif($r){
 $html=$r['type']==='post' && str_contains($r['html'],'{{POST_CONTENT}}')?$r['html']:get_the_content();
 $html=str_replace(['{{POST_CONTENT}}','{{POST_TITLE}}','{{POST_GRID}}'],[get_the_content(),esc_html(get_the_title()),$r['source']==='resources.html'?vnw_grid():''],$html);
 if($r['source']==='native-post'){
 $image=get_the_post_thumbnail_url(get_the_ID(),'full');
 $hero_image=$image?'<img src="'.esc_url($image).'" alt="" loading="eager">':'';
 $html='<main id="top"><section class="article-hero" data-nav-theme="dark">'.$hero_image.'<div class="article-heading wrap"><a class="breadcrumb" href="'.esc_url(home_url('/resources.html')).'">Resources</a><h1>'.esc_html(get_the_title()).'</h1><p>'.esc_html(get_the_excerpt()).'</p><div class="byline">VNW Media <span>Published '.esc_html(get_the_date('Y-m-d')).'</span></div></div></section><section class="article-layout wrap"><aside class="article-toc"><a class="read-link" href="'.esc_url(home_url('/resources.html#articles')).'">All articles</a></aside><article class="article-body">'.apply_filters('the_content',get_the_content()).'</article></section></main>';
 }
 echo vnw_prepare_forms(vnw_expand($html));
 }else{echo '<main class="shell section"><h1>'.esc_html(get_the_title()).'</h1>';the_content();echo '</main>';}
endwhile;else:echo '<main class="shell section"><h1>Page not found</h1><a href="'.esc_url(home_url()).'">Return home</a></main>';endif;
echo vnw_expand(file_get_contents(__DIR__.'/content/footer.html'));wp_footer();?></body></html>
