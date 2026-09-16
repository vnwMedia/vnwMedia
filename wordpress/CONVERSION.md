# VNW Media WordPress conversion

## Status
Preparation only. The separate working copy and source inventory are created. No WordPress theme has been completed or installed. No hosting changes have been made.

## Protected baseline
The static website remains on main. WordPress work stays on wordpress/conversion until staging acceptance. The September 16 backup is preserved. Do not deploy this branch to GitHub Pages or overwrite an existing Hostinger website.

## Required outcome
Preserve the approved website one to one: typography, spacing, imagery, header/dropdown, footer, responsive layouts, service and review tickers, filters, FAQs, links, and animations. Do not replace it with a stock theme or page-builder approximation.

## Implementation approach
- Custom WordPress theme using the existing design assets and styling.
- Import published page content into WordPress pages and blog articles into posts, with dedicated templates for each content family.
- Resolve JavaScript-generated content into template/content structures; do not rely on empty WordPress pages that only launch the old static application.
- Preserve legacy .html URLs or define tested permanent redirects, including the existing redirect stubs.
- Exclude design-option review pages from public production navigation; preserve their sources in this version.
- Keep navigation, footer, categories, blog listing, and internal links connected to WordPress content.
- No frontend email credentials. Use a server-side form handler with validation, spam protection, and configured authenticated mail delivery to contactus@vnwmedia.com.
- FormSubmit is NOT approved. Its proposed integration was blocked and must not be applied without explicit authorization.

## Hosting requirements
Hostinger staging or a separate WordPress installation, with a supplied URL and authorized access. Do not assume staging is included in the account plan. No DNS, billing, production replacement, or email configuration changes without explicit approval.

## Acceptance checks
- Actual WordPress runtime testing, not only PHP source inspection or a static mockup.
- Side-by-side screenshots at desktop, tablet, and mobile widths against baseline.
- Navigation, services menus, blog filtering, accordion interactions, ticker behavior, and footer checks.
- No broken assets, links, duplicate IDs, console errors, or mobile overflow.
- Actual form delivery confirmed at the destination inbox before claiming it works.
- Installable package, database/content import, restoration steps, and rollback instructions.

## Current dependencies
Hosting URL and access have not been supplied. PHP, WordPress CLI, and Docker were not found on the current shell PATH. Provision a verified local WordPress runtime or authorized staging installation before runtime acceptance.
