# Latest HTML export — VNW Media 0.3.0

Source: GitHub main c03d1fc52d45610f6db6dd42926fa6429116443b. Published homepage bytes matched the local source before conversion.

## Install on existing staging
1. On redesign.vnwmedia.net only, upload vnw-media-wordpress-elementor-0.3.0.zip under Appearance → Themes → Add New → Upload Theme. Choose Replace active with uploaded.
2. Keep the updated Elementor version that solved the previous loading issue. Do not enable Safe Mode or install Pro just for this theme.
3. Open Appearance → VNW Latest HTML Update. Click Apply latest HTML to unchanged pages. Keep the tab open until Finished.
4. Review results. Existing manual text/title/description or Elementor settings cause a skip for manual review. Do not delete edits to force an update. Existing widget definitions remain available. Shared styling is updated globally, so review skipped pages too.
5. Open Pages → Edit with Elementor and check the updated pages, including desktop and mobile. Editing remains section-based as in the previous version. Shared navigation/header/footer remain theme-managed, not native Elementor Theme Builder templates.
6. Verify a real form submission reaches contactus@vnwmedia.com. Then review before approving production deployment.

For a fresh installation, the same update button imports the pages and enables Elementor editing. No theme activation automatically overwrites content. No other hosted sites are changed.

## Changes
Latest source imagery, copy, layout, CTA styles, Case Studies section, thank-you page, and ticker behavior. 57 content pages/articles and 3 redirects. Existing nonce validation, input sanitization, honeypot, rate limiting and contactus@vnwmedia.com recipient retained. Successful submissions redirect to thank-you.html; errors remain visible on the originating form page.

Equivalent Unicode entity comparison is retained. Content-derived widget identifiers keep old Elementor field mappings available instead of silently replacing them. Numeric-only widget identifiers are explicitly cast to strings to prevent PHP constructor errors.

An explicit staging-only sequential update checks the previous baseline, protects manual changes, retains a per-page recovery snapshot before replacement, and is safe to rerun. This supports the previous 0.2.1 imported baseline; unrelated pages are not updated. Pages with saved settings are conservatively skipped even when those settings may match defaults.

## Local verification
- All 60 routes returned 200 after redirects, with one header/footer, no detected JavaScript errors or unresolved content placeholders.
- Eight representative pages at 1440px and 390px had identical main-content heights to the latest HTML, no broken images and no horizontal overflow. External fonts/requests were blocked equally; this is not exhaustive pixel-parity verification.
- FAQ, Services dropdown, Resources filtering, mobile menu and ticker movement during hover passed.
- Elementor 4.2.4 on the PHP 8.2 local runtime: actual headline editing and background-image upload, save and reload passed; homepage form nonces remained present.
- Upgrade fixture replaced all 56 previous pages, preserved simulated manual content and Elementor edits, retained recovery snapshots, and passed repeated-run checks.
- All 11 forms passed action/method/nonce checks. An intercepted successful submission targeted contactus@vnwmedia.com and redirected to thank-you.html. Form checks use a test-only intercepted mail transport. This does not establish delivery on Hostinger.

No authenticated hosting access was used. This ZIP has not been installed or published by the assistant. No plugins were updated remotely. GitHub publication is separate from this local deliverable.
