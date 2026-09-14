# Resources photography and editorial provenance

Resources uses the selected cover-story layout as the production Resources page. The ten article pages are adapted and expanded from the owner's published VNW Media blog, with local service links and practical next steps. Original article URLs and publication dates are preserved in resources/articles.json.

The original blog's icon-heavy promotional graphics were not imported. These eleven distinct photographic assets were downloaded from Unsplash for the ten articles and the Resources hero. Source URLs and the Unsplash license are recorded in photo-sources.json. They are editorial stock photographs, not presented as photos of VNW Media employees or clients.

Regenerate Resources and the article HTML using scripts/build-resources.py after editing resources/articles.json. Article text is static HTML for direct access and indexing. Search/filter behavior is in resources-live.js. The services ticker reuses the homepage's service catalogue and ticker implementation.

Validation: Resources and all ten articles tested at 1920, 1440, 768, and 390 pixels; image loading, local links, content length, heading structure, table-of-contents navigation, search/filter/empty states, ticker placement and animation, and absence of draft/option labels verified.
