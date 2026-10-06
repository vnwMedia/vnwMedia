"""Create thin HTML shells for the five NYC borough location guides.

Page content lives in location-pages.js, like the existing location pages. This
script creates only missing shells and never overwrites an existing page.
"""

from html import escape
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "locations" / "new-york"
VERSION = "20261006-unique-location-copy-v1"
BOROUGHS = {
    "manhattan": ("Manhattan, NY", "New York County"),
    "brooklyn": ("Brooklyn, NY", "Kings County"),
    "queens": ("Queens, NY", "Queens County"),
    "bronx": ("the Bronx, NY", "Bronx County"),
    "staten-island": ("Staten Island, NY", "Richmond County"),
}
SERVICES = {
    "digital-marketing": ("Digital Marketing", "ny-digital-marketing.jpg", "Coordinate website, search, paid media, and lead follow-up for businesses serving {market} ({county})."),
    "web-design": ("Web Design", "ny-web-design.jpg", "Responsive web design for businesses serving {market} ({county}), with clear services, local context, and next steps."),
    "seo": ("SEO", "ny-seo.jpg", "Technical, content, and local SEO for businesses serving {market} ({county}), aligned with real service coverage."),
    "ppc": ("PPC", "ny-ppc.jpg", "PPC planning for businesses serving {market} ({county}), focused on search intent, campaign geography, and lead quality."),
    "google-ads": ("Google Ads", "ny-ppc.jpg", "Google Ads campaign planning and management for businesses serving {market} ({county}), with relevant landing pages and measurement."),
}


def shell(slug, market, county, service_key=None):
    is_service = service_key is not None
    depth = 4 if is_service else 3
    rel = "../" * depth
    subpath = f"{slug}/{service_key}-{slug}/" if is_service else f"{slug}/"
    canonical = f"https://www.vnwmedia.com/locations/new-york/{subpath}"
    if is_service:
        service, image, description = SERVICES[service_key]
        title = f"{service} in {market} | VNW Media"
        description = description.format(market=market, county=county)
        body = f'data-page="location-area-service" data-depth="4" data-location-area="{slug}" data-location-service="{service_key}"'
        body_class = "industry-landing industry-location industry-mockup-04"
    else:
        image = "ny-digital-marketing.jpg"
        title = f"Digital Marketing Services in {market} | VNW Media"
        description = f"Explore digital marketing, web design, SEO, PPC, and Google Ads for businesses serving {market} ({county}), with pages grounded in actual local coverage."
        body = f'data-page="location-area-directory" data-depth="3" data-location-area="{slug}"'
        body_class = "industry-landing location-directory-page location-area-directory-page"
    title, description = escape(title), escape(description)
    css = f'<link rel="stylesheet" href="{rel}styles.css?v=20260930-footer-company-contact-v4"><link rel="stylesheet" href="{rel}location-pages.css?v={VERSION}">'
    scripts = f'<script defer src="{rel}service-catalog.js?v=20260930-seo-subservices"></script><script defer src="{rel}location-pages.js?v={VERSION}"></script><script defer src="{rel}script.js?v=20261005-review-speed-v1"></script>'
    ticker = f'<link rel="stylesheet" href="{rel}tickers.css?v=20260927-full-width-scroll"><script defer src="{rel}tickers.js?v=20260930-ai-visibility"></script>'
    extras = f'<meta name="theme-color" content="#000000"><link rel="icon" type="image/x-icon" href="{rel}favicon.ico?v=1"><link rel="apple-touch-icon" sizes="180x180" href="{rel}apple-touch-icon.png?v=1"><link rel="stylesheet" href="{rel}site-footer.css?v=20261002-mobile-compact-v3"><script defer src="{rel}site-footer.js?v=20261002-mobile-compact-v3"></script><link rel="stylesheet" href="{rel}section-labels.css?v=20260928-hero-blue"><link rel="stylesheet" href="{rel}hero-layout.css?v=20260928-aligned-entry"><link rel="stylesheet" href="{rel}site-buttons.css?v=20261004-mobile-email-send-label-v1"><script defer src="{rel}site-buttons.js?v=20261004-mobile-business-field-v1"></script>'
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title><meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta property="og:type" content="website"><meta property="og:title" content="{title}"><meta property="og:description" content="{description}"><meta property="og:url" content="{canonical}"><meta property="og:image" content="https://vnwmedia.github.io/vnwMedia/assets/location-heroes/{image}"><meta name="twitter:card" content="summary_large_image">
{css}{scripts}{ticker}{extras}
</head>
<body class="{body_class}" {body}>
<header class="site-header"></header><div id="app"></div>
</body>
</html>
'''


created = []
for slug, (market, county) in BOROUGHS.items():
    keys = [None, *SERVICES]
    for key in keys:
        target = BASE / slug / (f"{key}-{slug}" if key else "") / "index.html"
        if target.exists():
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(shell(slug, market, county, key), encoding="utf-8")
        created.append(target.relative_to(ROOT))

print(f"Created {len(created)} borough pages:")
for path in created:
    print(path)
