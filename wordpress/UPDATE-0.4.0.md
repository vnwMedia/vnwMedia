# VNW Media WordPress update 0.4.0

Source: GitHub main revision a7a4c4db7dd3f443b460a48e96d128e7e0040d9e (October 18, 2026).
Includes the latest “Let’s Grow Your / Business Together” form title and styling.

## Update staging safely

1. Take a Hostinger backup of staging files and database before replacing the theme. Keep the previous ZIP.
2. On redesign.vnwmedia.net, open Appearance → Themes → Add New → Upload Theme. Upload `vnw-media-wordpress-elementor-0.4.0.zip` and choose **Replace active with uploaded**. Do not upload the GitHub source ZIP.
3. Open **Appearance → VNW Latest HTML Update**. Click **Apply latest HTML to unchanged pages**, and keep the tab open until it finishes. This imports missing pages and refreshes unchanged older imports; uploading the ZIP alone does not update database content.
4. Save the output. Any **Skipped** pages have changes that need review; they are not overwritten. Any **FAILED** pages must be resolved before launch. Do not delete their content or force a re-import.
5. Clear the staging cache, then check desktop and mobile pages, menu links, Our Story images, new location/industry pages, and Resources.
6. Submit a clearly labelled real test inquiry. Confirm both the thank-you page and receipt at **contactus@vnwmedia.com**. Local tests intercept mail; they do not prove Hostinger or inbox delivery. Configure authenticated mail if needed.
7. Keep staging out of search engines. Do not publish to production until review is complete.

## Content and editing

- 211 pages/articles and two compatibility redirects. Existing content outside the imported collection is not deleted.
- Original HTML assets, CSS, fonts, layouts, and responsive image choices are retained. No redesign was applied to the HTML source.
- Pages use custom Elementor section widgets with text, image, responsive-image, background, and link controls. They are not a wholesale reconstruction into individual native Elementor widgets. Header/footer remain theme-managed.
- Open Pages → choose a page → Edit with Elementor. Select the existing section and edit its content controls. Retain the section layout for visual consistency. Responsive images may have separate size controls.
- Previously edited pages are protected, but shared stylesheet changes can still affect them: review skipped pages visually.
- Forms retain WordPress server delivery, validation, spam controls, source/campaign context, and the thank-you redirect. The static HTML email-draft behavior is not used for WordPress submissions.

## Recovery

Keep the complete pre-update database backup: replacing a ZIP does not undo imported database changes. Updated pages also retain a `_vnw_before_040` recovery snapshot for technical assistance. No production or hosted staging changes were made during this build.

## Verified locally

- All 213 route targets rendered successfully. All 144 page forms had POST actions and nonces. Three temporary local-server timeouts passed on retry.
- A mobile submission preserved page/campaign context, targeted the correct recipient, and reached the thank-you page; invalid nonce was rejected. Outgoing email was intercepted locally.
- Elementor 4.3.5 opened a new location page without Safe Mode; text and an uploaded image saved and persisted on reload.
- Thirteen page families at desktop (1440px) and mobile (390px) matched original image geometry, headline font size, and main section height after the wrapper compatibility fix. This is not an exhaustive pixel comparison of every page.
- The Queens Google Ads source page itself has horizontal overflow at 390px; the converted page retains that same behavior. No redesign was made to hide it.
- Upgrade fixtures passed for both earlier supported baselines, including edit protection and duplicate prevention.

Package size is approximately 287 MiB; the hosting upload limit must allow it.
