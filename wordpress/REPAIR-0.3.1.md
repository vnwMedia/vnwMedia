# VNW Media WordPress repair 0.3.1

The HTML website and its images/content have not been changed. This is a WordPress compatibility repair.

## Install on redesign.vnwmedia.net only
1. Upload vnw-media-wordpress-elementor-0.3.1.zip under Appearance → Themes → Add New → Upload Theme. Choose Replace active with uploaded.
2. Open Appearance → VNW Latest HTML Update and apply the latest HTML to unchanged pages. This imports the thank-you page and updates old imported layouts. Manually edited pages are intentionally skipped; keep their results for review rather than deleting edits.
3. Clear the staging website cache and reload. Review Our Story, Case Studies, and mobile navigation against the HTML site.
4. Submit a real inquiry and confirm both the thank-you page and delivery to contactus@vnwmedia.com. A successful server mail handoff is not proof of inbox delivery.

## Repairs
- Original stylesheet order restored after Elementor defaults; original image heights preserved.
- Original Case Studies hero height restored despite Elementor's more-specific image reset.
- Updated asset URLs avoid reusing cached older theme styles.
- WordPress toolbar excluded from site-button normalization.
- Original bundled thank-you page renders even when its WordPress database page has not yet been imported. The importer subsequently makes it editable normally. No existing page content is overwritten by this fallback.

## Verification and remaining limits
- Seven representative pages checked at 1440, 768, and 390 pixels: original corresponding image widths/heights/object-fit matched, including all Our Story portraits and the Case Studies hero. No horizontal overflow detected. Homepage/Work contain extra animated ticker copies; this is not a screenshot/pixel identity assertion.
- All 11 form instances have valid action, POST method, and nonce wiring.
- In an isolated WordPress test with the thank-you database page deliberately deleted, successful intercepted mail targeted contactus@vnwmedia.com, redirected to /thank-you.html, and returned HTTP 200 rather than Page not found.
- Invalid submission returned to the contact page with an error. Mobile menu, FAQ, Services menu, resource filtering, and ticker movement passed.
- No hosting changes were made. Actual Hostinger inbox delivery, edited/skipped pages, and exhaustive visual parity across every page still require staging verification.
