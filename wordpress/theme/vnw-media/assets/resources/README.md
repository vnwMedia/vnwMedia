# Resources photography and editorial provenance

Resources uses the selected cover-story layout as the production Resources page. The ten article pages are adapted and expanded from the owner's published VNW Media blog, with local service links and practical next steps. Original article URLs and publication dates are preserved in resources/articles.json.

The original blog's icon-heavy promotional graphics were not imported. These eleven distinct photographic assets were downloaded from Unsplash for the ten articles and the Resources hero. Source URLs and the Unsplash license are recorded in photo-sources.json. They are editorial stock photographs, not presented as photos of VNW Media employees or clients.

Regenerate Resources and the article HTML using scripts/build-resources.py after editing resources/articles.json. Article text is static HTML for direct access and indexing. Search/filter behavior is in resources-live.js. The services ticker reuses the homepage's service catalogue and ticker implementation.

Validation: Resources and all ten articles tested at 1920, 1440, 768, and 390 pixels; image loading, local links, content length, heading structure, table-of-contents navigation, search/filter/empty states, ticker placement and animation, and absence of draft/option labels verified.

Resources now uses the shared site navigation and stylesheet. Its editorial styles are scoped to main in resources-content.css to protect the shared desktop and mobile menus. The replacement resources-editorial-hero-v2.jpg is an illustrative photorealistic editorial scene created with the built-in image generation tool; its exact prompt is in hero-prompt.txt. It is not a documentary photograph of VNW Media staff. The ten article photographs remain the licensed stock photos listed above.
