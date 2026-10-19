<?php
// Isolated formatter/handler test. This file never loads WordPress or sends mail.
define('ABSPATH', __DIR__.'/');
define('MINUTE_IN_SECONDS', 60);
class VNWTestRedirect extends Exception {}
function wp_unslash($value) {return is_array($value) ? array_map('wp_unslash', $value) : stripslashes((string) $value);}
function sanitize_textarea_field($value) {return trim(str_replace(["\r\n", "\r"], "\n", strip_tags((string) $value)));}
function sanitize_text_field($value) {return trim(preg_replace('/\s+/', ' ', strip_tags((string) $value)));}
function sanitize_email($value) {return filter_var($value, FILTER_SANITIZE_EMAIL);}
function is_email($value) {return filter_var($value, FILTER_VALIDATE_EMAIL);}
function esc_url_raw($value) {return $value;}
function home_url($path='') {return 'https://vnwmedia.net'.$path;}
function wp_validate_redirect($value, $fallback) {return str_starts_with($value, home_url('/')) ? $value : $fallback;}
function wp_verify_nonce($value, $action) {return $value === 'test-valid-nonce' && $action === 'vnw_contact';}
function wp_salt() {return 'isolated-test-salt';}
function get_transient($key) {return $GLOBALS['rate_count'];}
function set_transient($key, $value, $expiry) {$GLOBALS['rate_writes'][] = [$key, $value, $expiry];}
function add_query_arg($key, $value, $url) {return $url.'?'.urlencode($key).'='.urlencode($value);}
function wp_safe_redirect($url) {throw new VNWTestRedirect($url);}
function wp_mail($recipient, $subject, $body, $headers) {
    $GLOBALS['mails'][] = compact('recipient', 'subject', 'body', 'headers');
    return $GLOBALS['mail_success'];
}
function vnw_test_slash($value) {return is_array($value) ? array_map('vnw_test_slash', $value) : addslashes((string) $value);}
function vnw_test_run($handler, $fields, $rate=0, $success=true, $method='POST') {
    $_POST = vnw_test_slash($fields);
    $_SERVER['REQUEST_METHOD'] = $method;
    $_SERVER['REMOTE_ADDR'] = '192.0.2.1';
    $GLOBALS['rate_count'] = $rate;
    $GLOBALS['rate_writes'] = [];
    $GLOBALS['mails'] = [];
    $GLOBALS['mail_success'] = $success;
    $redirect = null;
    try {$handler();} catch (VNWTestRedirect $exception) {$redirect = $exception->getMessage();}
    return ['mails'=>$GLOBALS['mails'], 'redirect'=>$redirect, 'rate_writes'=>$GLOBALS['rate_writes']];
}
$input = json_decode(file_get_contents(__DIR__.'/input.json'), true, 512, JSON_THROW_ON_ERROR);
$base = $input['fields'];
require __DIR__.'/before.php';
require __DIR__.'/functions.php';
require_once __DIR__.'/inquiry-email.php';
$results = [];
$results['before'] = vnw_test_run('vnw_contact_before_fix', $base);
$results['hero'] = vnw_test_run('vnw_contact', $base);
$mobile = $base;
$mobile['lead_context'] = str_replace('Hero strategy form (Desktop)', 'Mobile quick-contact form (Mobile)', $base['lead_context']);
$results['mobile'] = vnw_test_run('vnw_contact', $mobile);
$contact = $base;
$contact['message'] = "Need a \"fresh\" website.\nO'Brien & café ✓";
$contact['lead_context'] = str_replace("\n\nFrom:", "\n\nMessage:\n".$contact['message']."\n\nFrom:", $base['lead_context']);
$contact['lead_context'] = str_replace('Hero strategy form (Desktop)', 'Page contact form (Desktop)', $contact['lead_context']);
$contact['lead_context'] = str_replace("\nCampaign:", "\nCame from: SEO — https://vnwmedia.net/services/seo.html\nCampaign:", $contact['lead_context']);
$results['contact'] = vnw_test_run('vnw_contact', $contact);
$fallback = $base;
unset($fallback['lead_context']);
$fallback['message'] = "Please help us.\nWe need a clearer website.";
$results['fallback'] = vnw_test_run('vnw_contact', $fallback);
$bad = $base;
$bad['lead_context'] = 'not a valid formatted summary';
$results['malformed'] = vnw_test_run('vnw_contact', $bad);
$mismatch = $base;
$mismatch['lead_context'] = str_replace('Name: Alex Morgan', 'Name: Someone Else', $base['lead_context']);
$results['mismatch'] = vnw_test_run('vnw_contact', $mismatch);
$minimal = $base;
foreach (['company','phone','website','interest','message','lead_context'] as $field) $minimal[$field] = '';
$results['minimal'] = vnw_test_run('vnw_contact', $minimal);
$results['invalid_nonce'] = vnw_test_run('vnw_contact', array_replace($base, ['vnw_nonce'=>'invalid']));
$results['honeypot'] = vnw_test_run('vnw_contact', array_replace($base, ['vnw_company_url'=>'spam']));
$results['invalid_email'] = vnw_test_run('vnw_contact', array_replace($base, ['email'=>'not-an-email']));
$results['rate_limit'] = vnw_test_run('vnw_contact', $base, 5);
$results['get_request'] = vnw_test_run('vnw_contact', $base, 0, true, 'GET');
$results['failed_delivery'] = vnw_test_run('vnw_contact', $base, 0, false);
$arrays = $minimal;
$arrays['lead_context'] = ['unexpected'];
$arrays['message'] = ['unexpected'];
$results['arrays'] = vnw_inquiry_email_body(vnw_test_slash($arrays));
$html = $base;
$html['lead_context'] = '<script>bad()</script>'.$base['lead_context'];
$html['message'] = '<b>Hello</b>';
$results['sanitized'] = vnw_inquiry_email_body(vnw_test_slash($html));
$long = $fallback;
$long['message'] = str_repeat('x', 15000);
$results['bounded'] = vnw_inquiry_email_body(vnw_test_slash($long));
echo json_encode(['php_version'=>PHP_VERSION, 'results'=>$results], JSON_THROW_ON_ERROR);
