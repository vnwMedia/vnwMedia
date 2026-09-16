# VNW Media WordPress conversion

## Current status — September 16, 2026
First custom-theme build is running in an isolated WordPress Playground installation (WordPress 6.7.2 / PHP 8.2, matching the staging screenshot). It has NOT been installed on Hostinger and is NOT approved for production deployment.

## Scope and protection
- Static main website remains unchanged, with its previously verified backup preserved.
- Work is on wordpress/conversion only.
- User created redesign.vnwmedia.net in Hostinger; only screenshots have been provided, not authenticated tool access.
- User declined a backup of the old vnwmedia.net site. Do not request or create that backup.
- Eventually replace vnwmedia.net only. Never touch the other hosted sites.

## Implemented
- Custom theme retaining original CSS, imagery, header, footer, responsive layouts and interactions.
- Explicit staging-only admin importer: 43 pages and 13 native posts; 3 legacy redirects.
- Server-rendered content, not an iframe or an empty page depending on the old page-generation app.
- Original .html routes; native WordPress links for imported posts/pages.
- Native post/category query for Resources, preserving its original ten-card selection/order; unrelated pre-existing posts are excluded. New posts created with this theme use a matching article template.
- Imported posts with article-body markup can be edited through WordPress; the three older guide pages retain full-layout HTML content. Imported marketing pages use custom HTML content. This is not an Elementor rebuild and does not provide visual block controls for every section.
- Form handler sends through WordPress wp_mail to contactus@vnwmedia.com, with nonce validation, input sanitization, honeypot and rate limit. No third-party form processor or frontend credentials.
- Repeated imports skip previously imported content, preserving edits; they do not delete old content.

## Verified locally
- All 59 source routes loaded, one shared header/footer each, no JavaScript errors in first complete route audit.
- 8 representative pages compared at 1440px and 390px: matching main-content heights, no horizontal overflow or broken images. External requests/fonts were blocked equally for comparison. This is not a claim of exhaustive pixel-perfect verification.
- FAQs, Services dropdown, mobile menu/logo, category filtering, ticker movement while hovered.
- Both homepage forms preserved, POST action and nonce present; invalid submissions rejected without sending mail.
- See qa/ for captured machine-readable reports.

## Remaining acceptance work
- Staging security cleanup/review of cloned old theme and plugins before activation. The existing installation reported many vulnerabilities; do not publish that legacy stack unchanged.
- Staging visual checks with production fonts and actual hosting/cache/plugins, including tablet sizes and every content family.
- Test editing a native page and creating/publishing an article in the staging admin.
- Configure authenticated hosting mail, verify legitimate submission reaches contactus@vnwmedia.com, and verify spam/error behavior. wp_mail success only means accepted for sending, not inbox delivery.
- Validate new-post presentation and featured-image workflow with user content.
- Final redirect, SEO, accessibility, and security review before publishing to vnwmedia.net.

## Build/test
- scripts/export.cjs captures the approved static content before ticker cloning and interaction setup.
- scripts/build.py normalizes content and copies original design assets. Rerun it after source edits; handwritten PHP files remain intact.
- test-blueprint.json creates a disposable local WordPress fixture and verifies import counts/idempotency. Never upload the test blueprint to hosting.
- Official @wp-playground/cli 3.1.54 was installed under /private/tmp/vnw-wp-runtime for local testing. No global runtime or live hosting changes were made.
- Package only theme/vnw-media as the vnw-media directory inside the ZIP.
