# Approved mobile hero focal-point rollout

The user selected Option 1: retain the existing design, photos, image sizes, overlays and form placement; adjust each photo's focal point on mobile. No new portrait image or other layout option was applied.

## Coverage

- 210 published VNW Media pages load one shared, versioned focal-point stylesheet.
- 102 asset-specific focal settings, including all eight approved homepage slideshow positions.
- Coverage includes all 28 service landing pages, all 26 client case studies, industry pages and industry/service combinations, location directories and landing pages, resources and main pages.
- The focal map applies to both image elements and CSS background photographs, including dynamically rendered pages and responsive/lazy image layers.
- Isolated noindex design studies and separate client projects were not changed.
- The industry and borough/location generators now include the stylesheet. The two hero-preview builders exclude it so archived design comparisons remain valid.

## Validation

- All 15 test files passed.
- An automated browser check visited every published page at 390px: 210/210 hero media elements found, mapped and showing the assigned position. No hero image exceeded the viewport width.
- The same 210-page check at 320px found no unmapped hero and no hero extending beyond the viewport.
- The same 210-page check at 1280px found the new mobile focal variables inactive on every page. Desktop rules are unchanged.
- The eight homepage positions match the approved Option 1 values: restaurant 68%, home services 72%, healthcare 78%, automotive 74%, daycare 62%, legal 58%, real estate 75%, retail 65%, each aligned to the top.
- Visual source-photo review sheets are saved alongside the inventory. Actual mobile screenshots include the homepage, web-design landing page, Harlem case study and a location page.
- Source comparison confirmed the only modification to each existing published HTML page is the additional stylesheet link. No text, form fields, actions, images, animation or layout markup changed.
- The stylesheet changes only background/object positioning and its own custom properties, inside `max-width:760px`. No extra runtime JavaScript or image downloads were introduced.
- Whole-page overflow was flagged on 28 existing page layouts during the mobile sweep; none came from a hero image. This crop-only change does not modify those layouts.

## Files

- Configuration: `mobile-hero-focal-points.json`
- Generated stylesheet: `mobile-hero-focal-points.css`
- Page and source-image inventory: `reports/mobile-hero-image-inventory.json`
- Homepage screenshot: `reports/mobile-hero-focal-homepage.jpg`
- Web-design screenshot: `reports/mobile-hero-focal-web-design.jpg`
- Harlem screenshot: `reports/mobile-hero-focal-harlem.jpg`
- Location screenshot: `reports/mobile-hero-focal-location.jpg`

Focal-point changes improve which part of a landscape photo stays in view. They do not eliminate the substantial crop required by tall mobile hero sections.
