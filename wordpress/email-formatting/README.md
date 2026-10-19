# WordPress inquiry email correction

Prepared for the **Connect Wordpress to project** publishing workflow. This does
not install or change anything on the live site by itself.

The current VNW Media 0.4.3 handler prints the individual form fields and then
prints `lead_context`, which already contains the complete concise inquiry.
The correction uses that sanitized summary once. If it is unavailable, malformed,
or belongs to a different name/email, it builds one summary from the submitted
fields instead. Empty optional fields are omitted. Page/form attribution remains.

## Apply in the WordPress source repository

`fix-email-format.patch` contains both the new `inquiry-email.php` helper and the
small change to `wordpress/theme/vnw-media/functions.php`. Check it with
`git apply --check` before applying it. It targets the verified 0.4.3 handler; if
the handler has changed, reconcile the patch rather than replacing the whole theme.

Include both updated files in the next WordPress publishing package. Do not
replace pages, reimport content, install mail plugins, or change SMTP settings.
The recipient, subject, Reply-To header, nonce check, honeypot, rate limit and
success/error redirects are unchanged. No new submission listener is added.

## Verification

Run `node --test --test-force-exit tests/wordpress-email-formatting.cjs` from the HTML project.
It applies the patch to an isolated handler fixture and exercises the actual PHP
formatter and handler with delivery mocked, so no emails are sent. PHP 8.2 and
8.5 can be run with the existing WordPress Playground runtime, or native PHP can
be selected using `PHP_BINARY`. Set `VNW_PHP_WASM_ROOT` to a directory containing
the Playground `node_modules` when its runtime is elsewhere.

Live delivery has not been tested or changed from this development chat.

Prepared and checked on October 19, 2026 against the WordPress conversion
repository's 0.4.3 handler (commit `3880277` on `wordpress/conversion`). The patch
passes `git apply --check` against that source without modifying it. The isolated
tests pass on PHP 8.2.33 and 8.5.10; all 16 HTML-project regression checks pass.
The test reproduces the original repeated details and verifies the corrected
desktop, mobile and contact-form messages, including multiline messages and
campaign/previous-page attribution. Delivery is mocked throughout.
