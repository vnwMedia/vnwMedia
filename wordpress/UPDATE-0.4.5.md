# VNW Media 0.4.5 — latest GitHub homepage changes

Source: `7d8392c91a49ed2c8091609a35b375c9452c343d` (October 19, 2026).

Includes the shorter **Built to convert** Web Design subtext and equal visible desktop gaps between the four homepage service groups. The approved two-column mobile layout remains. All 211 pages/articles, two redirects, existing form fixes and updated thank-you page are included.

## Applying the release

1. Keep the previous theme ZIP and a hosting/database backup. Upload `vnw-media-wordpress-elementor-0.4.5.zip` through Appearance → Themes → Add Theme → Upload Theme, and choose **Replace current with uploaded**. Leave Elementor active.
2. Open Appearance → VNW Latest HTML Update → **Apply latest HTML to unchanged pages**. Review any skipped or failed rows; saved manual edits are not overwritten. The update is repeatable and keeps a `_vnw_before_045` recovery snapshot for changed pages.
3. Open Elementor → Editor → Tools → General → **Clear Files & Data** to remove old rendered HTML, then Hostinger → Tools → **Clear cache** to clear the website/CDN copies.
4. Verify the public homepage on desktop and mobile and recheck `/thank-you.html`. Check actual receipt if submitting a real test inquiry.

No mail plugin, SMTP/Gmail connection, DNS, recipient, Reply-To, spam control or redirect settings change. Local form tests intercept delivery and do not establish real inbox placement.

## Local checks

The source website's 16 existing checks pass. The exact theme archive passes the 0.4.4 upgrade with manual-edit protection, 211-page fresh import, duplicate prevention, 144 website/email field checks, PHP 8.2/8.5 inquiry formatter safeguards, all 213 routes, desktop/mobile forms and thank-you reviews, and homepage geometry comparison with the approved source. The desktop service gaps are equal and mobile retains two columns. The previous 1,405 widget definitions are retained for saved edits.

Run the homepage comparison with VNW_SOURCE_ROOT pointing to the approved HTML checkout, VNW_TEST_URL pointing to a disposable localhost WordPress installation, and optionally VNW_QA_DIR pointing to an output directory. Never run form tests against production.

## Live deployment

Applied to https://vnwmedia.net/ on October 19, 2026. The safe updater finished and reported the homepage updated to the latest design. Elementor and Hostinger caches were cleared. Anonymous public checks confirm version 0.4.5, the new homepage copy, equal desktop service gaps, the mobile two-column layout without horizontal overflow, and the thank-you capabilities strip with all 22 unique reviews. Email settings were not changed; no real test email was sent. Proof is saved in `qa/live-0.4.5/`.

The upgrade blueprint and homepage check are for a disposable local Playground only. Do not install test MU plugins on the live site.
