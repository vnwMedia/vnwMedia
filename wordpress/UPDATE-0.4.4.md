# VNW Media 0.4.4 — full updated theme

This is the complete theme upload, including all 211 approved pages/articles, two compatibility redirects, the latest thank-you page with the services strip and 22 client reviews, the shared light client-feedback styling, the bare-website-address field fix, and a single concise inquiry email summary.

Approved website source: `487711cbd6785c6e92e255d4f92f3e3e2d092d1a`.

## Replace the current theme

1. Keep the old theme ZIP and take a Hostinger files/database backup before updating.
2. In WordPress, open **Appearance → Themes → Add New Theme → Upload Theme**. Choose **vnw-media-wordpress-elementor-0.4.4.zip** and keep it zipped.
3. Click **Install Now**, then **Replace current with uploaded**. Leave Elementor active. Do not delete the theme, reset WordPress, or install a mail plugin.
4. Open **Appearance → VNW Latest HTML Update** and click **Apply latest HTML to unchanged pages**. Keep the tab open until it finishes. This step makes the updated thank-you content appear; replacing the theme alone does not replace saved WordPress page content.
5. Review any **Skipped** or **FAILED** rows. Saved manual edits are protected and need review rather than being erased. Clear the Hostinger/site cache and reload in a fresh private window.
6. Submit a clearly labelled test inquiry and confirm both the new thank-you page and actual receipt at **contactus@vnwmedia.com**.

## Unchanged delivery and editing

- The current WordPress/Hostinger PHP mail route, recipient, subject, visitor Reply-To, spam checks and success/error redirects remain unchanged. No Gmail connection, SMTP plugin, DNS change or paid license is needed for this update. It does not promise inbox placement.
- Inquiry details are included once. Browser line endings are normalized so mobile, page and campaign context are retained. Empty optional details are omitted.
- The optional Website field still accepts bare domains such as `aol.com` or `www.aol.com`; Email still requires a valid email address.
- Existing Elementor widgets are retained, including older section definitions needed by manually edited pages. The updater only replaces supported unchanged imports. Shared styles also apply to edited pages, so review them visually.
- Updated pages retain a `_vnw_before_044` recovery snapshot. Keep the complete database backup: uploading an older theme ZIP does not undo database changes.

## Verification

See the accompanying local QA reports. Testing uses a disposable WordPress installation and intercepted mail; it does not establish real Hostinger or inbox delivery. No live website changes were made during this build.

Verified locally: all 213 routes rendered, all 144 page forms were wired, 3,186 asset references resolved, the 0.4.3 upgrade protected saved edits, fresh imports remained editable without duplicates, desktop/mobile email summaries retained campaign context without duplication, and Elementor saved text and an uploaded image. PHP 8.2/8.5 formatter tests passed. Elementor 4.3.5 emitted an existing PHP 8.5 deprecation; no theme warnings or browser JavaScript errors were observed.
