# Five mobile hero layout previews

Preview only. No existing homepage, shared stylesheet, shared script, or desktop design was changed.

- Comparison: `mobile-hero-options-preview.html`
- Individual preview: `mobile-hero-layout-preview.html?option=focal|fit|separate|portrait|form-below`
- Overview: `reports/mobile-hero-five-options-overview.jpg`
- Same headline, CTAs, proof points, approved five-field form title and button across all options.
- Four options use the same existing healthcare still; option 4 demonstrates new portrait photography.
- Full-photo options preserve the existing landscape photo's 16:9 aspect ratio. The portrait is shown uncropped at its native 2:3 ratio, with dark space continuing below it.
- Noindex on both preview pages. Preview form submission is intercepted and cannot send an inquiry.
- Shared button/arrow conventions retained. Embedded previews resize to include the complete form, without an internal vertical scroll area.

## Validation

- All 14 automated test files passed.
- All five mobile layouts loaded correctly at 390px frame width.
- No horizontal overflow in the comparison at 320px and 390px; no horizontal overflow in any of the five embedded layouts at 284px frame width.
- Desktop 1280px: every mode retains the original 750px/332px columns, 654px hero height, cover fit, centered photo, and form inside the original hero grid. Portrait substitution and form relocation apply only at or below 760px.
- Mobile form-below: one form only, outside the photo hero; submitted fictional test values yielded “Preview only—no message has been sent.” No inquiry was sent.
- Screenshot visually reviewed: all five full mobile layouts and form buttons visible.

## Portrait concept asset

Final saved image: [mobile-portrait-healthcare-preview.jpg](../assets/home-hero-options/mobile-portrait-healthcare-preview.jpg).

Generated with the built-in image generation tool, then converted to a compressed JPEG for this isolated preview. This is a generic concept, not a real client's location. The photo is not used on the live homepage.

Final generation prompt:

> Use case: photorealistic-natural. Asset type: portrait mobile website hero photography, preview concept for a digital marketing agency serving local healthcare businesses. Create a natural editorial photograph inside a bright modern neighborhood healthcare reception in New Jersey. A friendly female receptionist at a modest reception counter warmly helping an adult woman visitor, with a male clinician in a white coat standing nearby in the background. Compose specifically for a very narrow tall mobile screen: vertical 2:3 portrait image, show the meaningful healthcare interaction and recognizable reception context in the lower half, with calm uncluttered pale teal wall, soft window light and a leafy plant in the upper half that can sit behind a large headline. People should be centered horizontally and visible together, not clipped at the sides. Realistic proportions, natural candid expressions, crisp contemporary commercial photography, professional but human, no staged handshake. No text, logos, lettering, watermark, medical procedures, needles or readable documents. This is a generic conceptual stock-style scene, not an actual client's office.
