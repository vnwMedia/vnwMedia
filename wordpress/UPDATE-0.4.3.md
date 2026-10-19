# VNW Media 0.4.3 — website address field correction

This update accepts `www.aol.com`, `aol.com`, `https://www.aol.com`, or `http://www.aol.com` in the optional **Website** field. The separate **Email** field still requires an email address such as `name@aol.com`.

It applies to existing imported pages and Elementor sections at display time, and to the mobile contact sheet. It does not change stored page content, design assets, recipient settings, or the thank-you redirect. No page import is required.

## Update the installed theme

1. In WordPress, open **Appearance → Themes → Add New Theme → Upload Theme**.
2. Choose **vnw-media-wordpress-elementor-0.4.3.zip** from the Desktop. Keep it zipped.
3. Click **Install Now**, then **Replace current with uploaded** when WordPress detects the existing VNW Media theme.
4. Do not delete WordPress, delete the current theme, reset the site, or rerun the page importer. Leave Elementor active.
5. Clear the Hostinger/site cache and reload the page in a fresh private window.
6. Test the healthcare PPC form with `www.aol.com` in Website and a valid address in Email. Verify the thank-you page and actual receipt at contactus@vnwmedia.com.

The package checksum is in the adjacent .zip.sha256 file. Local tests use intercepted mail and do not establish actual Hostinger/inbox delivery.
