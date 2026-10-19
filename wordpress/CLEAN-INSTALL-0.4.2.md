# VNW Media 0.4.2 — clean installation with PHP 8.5

Use `vnw-media-wordpress-elementor-0.4.2.zip`. This replaces the earlier 0.4.1 upload package. The HTML design, assets and page content are unchanged. The correction skips historical redirect entries without page content when checking import baselines, preventing setup warnings on newer PHP.

## Continue the fresh installation

1. Complete the Hostinger WordPress installation for https://vnwmedia.net with the subdirectory blank, a new database and new administrator/database passwords. PHP 8.5 is verified with this release. Use English and minor-version automatic WordPress updates. No old-site backup is required by this requested workflow.
2. Open https://vnwmedia.net/wp-admin/. Skip AI site generation, starter templates and demo imports. Remove the default sample page/post if present.
3. In Plugins → Add New Plugin, install and activate Elementor Website Builder by Elementor.com. Elementor Pro is not required for the custom VNW section widgets.
4. In Appearance → Themes → Add New Theme → Upload Theme, select the 0.4.2 ZIP while it is still zipped. Click Install Now, then Activate VNW Media.
5. Open Appearance → VNW Latest HTML Update. Click Install all pages and enable Elementor editing. Keep the tab open until Finished. All 211 pages/articles should import and convert. Report FAILED or Skipped rows before continuing.
6. Open Settings → Permalinks, select Post name, and Save Changes. Clear the Hostinger cache.
7. In Elementor → System Info, check the WordPress memory allowance. Local tests used 512 MB; Elementor specifies a 256 MB minimum for Elementor alone and recommends 512 MB. Raise a lower allowance before editing. Reference: https://elementor.com/help/requirements/
8. Open a page with Edit with Elementor and verify that text and images can be changed. The custom widgets edit existing sections; retain their layout to preserve the design. Header and footer remain theme-managed.
9. Review desktop/mobile pages and navigation. Submit a labelled test inquiry, verify the thank-you page, and confirm receipt at contactus@vnwmedia.com. Local mail tests intercept delivery; they do not establish Hostinger or inbox delivery. Configure authenticated outgoing mail if needed.

## PHP 8.5 verification

Tested locally with PHP 8.5.10, WordPress 7.1.3, Elementor 4.3.5 and theme 0.4.2. All five theme PHP files parsed; 211 pages/articles imported and became editable without duplicates or recovery copies; all 213 routes loaded; all 144 static forms had their server actions and nonces. Desktop/mobile submissions, campaign attribution, invalid-nonce rejection and thank-you redirects passed. Elementor loaded without Safe Mode and saved a changed heading and an uploaded image that persisted after reload. No theme PHP warnings/errors, fatal errors or browser JavaScript errors were found in these checks.

Elementor 4.3.5 itself logs one distinct nullable-parameter deprecation notice in Atomic_Global_Styles::get_cache_root_key(). The tested editing and saving operations still passed. This third-party notice is not fixed by editing the theme; keep Elementor updated. Debug output should not be displayed to public visitors.

The local runtime uses WordPress Playground and SQLite, not Hostinger's LiteSpeed/MariaDB environment. Verify the hosted installation and actual email delivery after upload. PHP compatibility testing does not constitute a new pixel comparison of every page.

Requires PHP: 8.2 in the theme header is the minimum requirement; it does not prevent using PHP 8.5.
