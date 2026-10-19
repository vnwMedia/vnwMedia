<?php
// Verified VNW Media 0.4.3 contact handler, retained only as a regression fixture.
function vnw_contact(){
 $return=wp_validate_redirect(esc_url_raw(wp_unslash($_POST['return_to']??'')),home_url('/contact.html'));
 $finish=function($status)use($return){wp_safe_redirect($status==='sent'?home_url('/thank-you.html'):add_query_arg('inquiry',$status,$return));exit;};
 if($_SERVER['REQUEST_METHOD']!=='POST'||!wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['vnw_nonce']??'')),'vnw_contact'))$finish('error');
 if(!empty($_POST['vnw_company_url']))$finish('error');
 $email=sanitize_email(wp_unslash($_POST['email']??''));$name=sanitize_text_field(wp_unslash($_POST['name']??''));
 if(!$name||!is_email($email))$finish('error');
 $key='vnw_rate_'.hash_hmac('sha256',$_SERVER['REMOTE_ADDR']??'',wp_salt());$count=(int)get_transient($key);
 if($count>=5)$finish('error');set_transient($key,$count+1,10*MINUTE_IN_SECONDS);
 $body='';foreach(['name','email','phone','company','website','interest','message','source_page','source_title','form_name','lead_context'] as $field){$value=sanitize_textarea_field(wp_unslash($_POST[$field]??''));$body.=ucfirst($field).': '.substr($value,0,5000)."\n\n";}
 $sent=wp_mail('contactus@vnwmedia.com','VNW Media website inquiry',$body,['Reply-To: '.$email]);$finish($sent?'sent':'error');
}
