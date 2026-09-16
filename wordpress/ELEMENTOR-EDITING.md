# VNW Media visual editing — theme 0.2.0

## Install on staging only
1. In redesign.vnwmedia.net, open Appearance → Themes → Add New → Upload Theme.
2. Upload `vnw-media-wordpress-elementor-0.2.0.zip`. Choose **Replace active with uploaded**. Do not upload the static website backup ZIP.
3. Leave the existing Elementor plugin active. This ZIP does not install, upgrade, or downgrade plugins.
4. Open Appearance → VNW Visual Editing. Start with the homepage, or use **Enable visual editing for all unchanged imported pages**. Keep the tab open until finished.
5. Pages already using Elementor are skipped. Pages changed since the original import are also skipped for manual review; their edits are not overwritten.
6. Open Pages → the desired page → **Edit with Elementor**.

## Edit content
- Click a section's text or image in the preview. Its content fields open in the left panel.
- Expand Content 1, Content 2, etc. to find the text or image you want.
- Text uses a visual text editor. Pictures and background photos use Choose Image: upload a replacement or select one from the Media Library.
- Link fields change button and text-link destinations.
- Save/Update/Publish in Elementor, then inspect the page in another tab on desktop and mobile.
- The original section layouts are preserved. These are custom Elementor section widgets, not a reconstruction into individually draggable standard heading/image widgets.
- The shared header, footer, and navigation remain theme-managed; they are not part of each page's section editor. Resource listing cards are generated from WordPress articles rather than edited in the listing widget.
- After conversion, use Elementor for that page, not Gutenberg. Original imported content remains as a fallback, but it does not receive subsequent Elementor edits. Deactivating Elementor will show that original fallback.

## Scope and checks
56 imported pages/articles are supported, with 174 section widgets. Three legacy URLs remain redirects. No production or hosting changes are performed by the ZIP itself. Conversion is restricted to redesign.vnwmedia.net or localhost.

Local tests covered loading all 59 routes; comparison of eight representative pages at desktop and mobile sizes; FAQ, navigation, ticker, category filter and mobile menu; and actual text/image editing, saving and reloading. The layout comparisons used equally blocked external fonts and are not exhaustive pixel-parity certification.

A disposable compatibility test used WordPress 6.7.2 / PHP 8.2 / Elementor 3.32.5. A separate current-version local test also passed text and image saving. The older plugin is a test fixture only, not bundled or recommended for installation. Existing hosting plugins, caching, fonts, and exact Elementor version still require a staging review.

Forms retain the existing WordPress handler addressed to contactus@vnwmedia.com. Email inbox delivery is still awaiting confirmation; a successful submission is not proof of delivery. Do not publish staging to vnwmedia.net until visual and functional review is complete.
