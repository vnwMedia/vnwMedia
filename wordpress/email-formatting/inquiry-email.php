<?php
/** One plain-text inquiry summary. Delivery and validation stay in vnw_contact(). */
if (!defined('ABSPATH')) exit;

function vnw_inquiry_email_value(array $submission, string $key, int $limit = 5000): string {
    $value = $submission[$key] ?? '';
    if (!is_scalar($value)) return '';
    return substr(trim(sanitize_textarea_field(wp_unslash((string) $value))), 0, $limit);
}

function vnw_inquiry_email_body(array $submission): string {
    $context = vnw_inquiry_email_value($submission, 'lead_context', 10000);
    $single_line = static fn(string $value): string => trim(preg_replace('/[\r\n\t]+/', ' ', $value));
    $name = $single_line(vnw_inquiry_email_value($submission, 'name', 220));
    $email = $single_line(vnw_inquiry_email_value($submission, 'email', 220));
    $lines = preg_split('/\r?\n/', $context);

    // The browser already supplies the concise summary, including page, form,
    // device and campaign attribution. Use it once, not after a second field list.
    // A missing, stale or malformed summary falls back to the submitted fields.
    if (str_starts_with($context, "NEW WEBSITE INQUIRY\n")
        && $name !== '' && $email !== ''
        && in_array('Name: '.$name, $lines, true)
        && in_array('Email: '.$email, $lines, true)
        && preg_match('/^Page: https?:\/\/[^\r\n]+$/m', $context)
        && preg_match('/^Form: [^\r\n]+$/m', $context)) {
        return $context."\n";
    }

    $body = ['NEW WEBSITE INQUIRY', ''];
    foreach (['name'=>'Name', 'company'=>'Business', 'phone'=>'Phone', 'email'=>'Email', 'website'=>'Website', 'interest'=>'Service'] as $key=>$label) {
        $value = $single_line(vnw_inquiry_email_value($submission, $key, 220));
        if ($value !== '') $body[] = $label.': '.$value;
    }
    $message = vnw_inquiry_email_value($submission, 'message');
    if ($message !== '') array_push($body, '', 'Message:', $message);
    $details = [];
    foreach (['source_title'=>'From', 'source_page'=>'Page', 'form_name'=>'Form'] as $key=>$label) {
        $value = $single_line(vnw_inquiry_email_value($submission, $key, 500));
        if ($key === 'source_title') $value = preg_replace('/\s*\|\s*VNW Media.*$/i', '', $value);
        if ($value !== '') $details[] = $label.': '.$value;
    }
    if ($details) array_push($body, '', ...$details);
    return implode("\n", $body)."\n";
}
