# Clean URLs and the Our Work ticker — preview first

Status: prepared and tested locally. **WordPress publishing is on hold at the user's explicit request. Do not send this migration to the publishing chat or apply it to the live site until the user approves after reviewing GitHub.**

## GitHub preview

- All 211 approved pages, articles and the confirmation page have unique extension-free directory addresses. The homepage stays at the site root.
- 127 source pages already had directory indexes. The build creates the other 84 directory indexes and retains their original asset bases, content, form handlers and styles. These are generated route outputs, not design alternatives.
- `site-clean-urls.js` updates desktop/mobile navigation, late-rendered links and the shared footer. Old `.html` preview addresses forward in the browser, retaining campaign queries and fragments. GitHub Pages cannot supply theme-controlled HTTP 301s; the WordPress implementation below uses actual server-side 301 redirects.
- Canonicals, Open Graph addresses, structured-data page URLs and the preview sitemap use clean addresses.
- The Our Work page retains its Selected Client Work ticker. Shared ticker initialization no longer creates a capabilities ticker there and removes a stale capabilities strip if present. Other pages retain their capabilities tickers and existing resize/animation safeguards. The separate client reviews section is unchanged.
- Edit the original source files, then run `node scripts/build-clean-url-preview.cjs`. Do not hand-edit generated directory copies. See `reports/clean-url-preview-build.json` for the inventory.

## Five distinct industry page pairs

The directory pages and the original `.html` landing pages contain different content. They must not be overwritten or merged merely to remove an extension:

| Original source | Clean public path |
| --- | --- |
| `industries.html` | `/industries/overview/` |
| `industries/healthcare.html` | `/industries/healthcare/overview/` |
| `industries/legal-professional-services.html` | `/industries/legal-professional-services/overview/` |
| `industries/real-estate.html` | `/industries/real-estate/overview/` |
| `industries/retail-ecommerce.html` | `/industries/retail-ecommerce/overview/` |

The existing corresponding folder addresses, such as `/industries/` and `/industries/healthcare/`, stay associated with their original folder index pages. No content is deleted.

## Prepared WordPress patch — not installed

`wordpress-clean-urls.patch` was checked against the publishing checkout identified in `route-manifest.json`. It adds the two route helpers and the legacy alias map, includes the PHP helper from the theme functions, and updates only the ticker setup and clean Contact attribution handling in existing scripts.

- Public permalink filters and rewrite rules cover all 211 imported pages/posts without renaming source identifiers or database pages.
- 230 old source/alias addresses permanently redirect directly to their clean destinations. Existing clean folder paths are not redirected to different content. Query strings and fragments are preserved where supplied; browser fragments are not sent to the server and remain in the browser on normal redirects.
- WordPress render-time processing handles existing saved content, shared navigation/footer, canonical/Open Graph tags and JSON-LD using WordPress's HTML processor. Dynamic menu/contact-sheet links are normalized too. External client URLs, assets, admin form endpoints and nonce fields are preserved.
- Native WordPress sitemaps inherit the clean permalinks. `sitemap.xml` in this folder is the clean production-domain counterpart of the preview sitemap; if hosting has a physical root sitemap, the publisher must replace that file and verify robots.txt's sitemap destination.
- A one-time soft rewrite flush works after a theme-file replacement. No manual page reimport is required, and no saved Elementor edits, source IDs, email delivery settings or plugins are changed.

Only after approval: apply the patch to the current conversion source, reconcile intervening edits, package through that chat's normal release workflow, clear the relevant caches, verify real production 200/301 responses, clean menus/sitemap/metadata, and desktop/mobile forms. Do not install test blueprints or test mail interceptors on production.

## Verification

- `tests/clean-url-routes.cjs`: all 211 unique page destinations, exact generated content, local references, domain/subdirectory support, old-link forwarding with query/hash preservation, native form endpoint protection, and Work-only ticker behavior.
- Full existing regression suite, including isolated PHP 8.2/8.5 inquiry-formatting safeguards; no actual email submissions.
- `tests/wordpress-clean-urls.php` ran in a fresh local WordPress 7.1.3 / PHP 8.5.10 installation with the current theme copied to a disposable directory. It imported all 211 pages/posts, verified idempotency, WordPress rewrite targets and permalinks, all 230 permanent redirects, the five collision pairs, real HTML/JSON-LD processing, native sitemap URLs, and unchanged saved content. Report: `reports/clean-url-wordpress-2026-10-19.json`.
- Browser checks at 1280px and 390px covered Home, Work, PPC, both industry hub pages, a nested location page, a case study, Resources, Contact and Thank You. Each had a heading, one header/footer, no internal `.html` navigation links, and no horizontal overflow. Work had one client ticker. Legacy campaign/hash forwarding and the mobile menu-to-email interaction passed without submission. Report: `reports/clean-url-browser-checks-2026-10-19.json`.

To refresh the patch against a changed WordPress checkout (read-only), run:

```sh
node scripts/prepare-wordpress-clean-urls.cjs /absolute/path/to/vnwMedia-wordpress
node scripts/build-clean-url-preview.cjs
```

The preparation command reports a disposable theme and blueprint. Mount only that copied theme into WordPress Playground, mount this repository's `tests` as `/checks` and `reports` as `/reports`, and run the reported blueprint. Never point the tests at the live website.
