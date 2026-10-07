#!/usr/bin/env python3
"""Keep public GitHub Pages metadata aligned with the URL actually serving each page.

Run this after adding pages, and switch SITE_BASE when the new site moves to
vnwmedia.com. The separate Liquid Soldier project is intentionally excluded.
"""

from __future__ import annotations

import html
import re
from pathlib import Path

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
SITE_BASE = "https://vnwmedia.github.io/vnwMedia/"
TOP_LEVEL = {
    "index.html", "our-story.html", "services.html", "work.html",
    "case-studies.html", "clients.html", "industries.html", "resources.html",
    "contact.html", "thank-you.html",
}
STATIC_TITLES = {
    "industries.html": "Industries We Serve | VNW Media",
    "contact.html": "Contact VNW Media | Plan Your Digital Strategy",
    "clients.html": "Client Reviews & Partners | VNW Media",
    "work.html": "Our Work & Client Case Studies | VNW Media",
    "our-story.html": "About VNW Media | Our Story & Process",
}
ALIASES = {
    "industries/home-services-contractors.html": "industries/home-services/",
    "industries/legal-professional-services.html": "industries/legal-professional-services/",
    "industries/day-care.html": "industries/daycare-education/",
    "industries/real-estate.html": "industries/real-estate/",
    "industries/auto-repair.html": "industries/automotive/",
    "industries/healthcare.html": "industries/healthcare/",
    "industries/restaurant.html": "industries/restaurants-hospitality/",
    "industries/retail-ecommerce.html": "industries/retail-ecommerce/",
    "case-studies/rices-collision.html": "work.html",
    "case-studies/south-carolina-motors.html": "work.html",
}


def public_page(relative: str) -> bool:
    if relative in TOP_LEVEL:
        return True
    top = relative.split("/", 1)[0]
    if top in {"services", "resources"}:
        return True
    return top in {"case-studies", "industries", "locations"} and not any(
        word in relative for word in ("preview", "options")
    )


def canonical_path(relative: str) -> str:
    if relative in ALIASES:
        return ALIASES[relative]
    if relative == "index.html":
        return ""
    return relative.removesuffix("index.html") if relative.endswith("/index.html") else relative


def replace_tag(head: str, pattern: str, replacement: str) -> tuple[str, bool]:
    updated, count = re.subn(pattern, replacement, head, count=1, flags=re.I)
    return updated, bool(count)


def main() -> None:
    changed: list[str] = []
    for path in sorted(ROOT.rglob("*.html")):
        relative = path.relative_to(ROOT).as_posix()
        if relative.startswith("Liquid Soldier/"):
            continue
        source = path.read_text(encoding="utf-8")
        if "</head>" not in source.lower():
            continue
        head, tail = re.split(r"</head>", source, maxsplit=1, flags=re.I)
        soup = BeautifulSoup(head, "html.parser")

        if not public_page(relative):
            # Design studies and demos must not compete with finished pages.
            robots = soup.find("meta", attrs={"name": "robots"})
            if not robots or "noindex" not in robots.get("content", "").lower():
                head += '<meta name="robots" content="noindex,follow">'
        else:
            canonical = SITE_BASE + canonical_path(relative)
            existing_title = soup.title.get_text(" ", strip=True) if soup.title else ""
            title = existing_title or STATIC_TITLES.get(relative, "")
            if not title:
                raise ValueError(f"Missing title and no approved title: {relative}")
            if not existing_title:
                head += f"<title>{html.escape(title)}</title>"

            description_tag = soup.find("meta", attrs={"name": "description"})
            description = description_tag.get("content", "") if description_tag else ""
            if not description and relative not in ALIASES:
                raise ValueError(f"Missing description: {relative}")

            canonical_tag = f'<link rel="canonical" href="{html.escape(canonical, quote=True)}">'
            head, found = replace_tag(
                head, r'<link\b(?=[^>]*\brel=["\']canonical["\'])[^>]*>', canonical_tag
            )
            if not found:
                head += canonical_tag

            if relative not in ALIASES:
                for prop, content in (
                    ("og:type", "website"),
                    ("og:title", title),
                    ("og:description", description),
                    ("og:url", canonical),
                ):
                    if prop != "og:url" and soup.find("meta", attrs={"property": prop}):
                        continue
                    tag = f'<meta property="{prop}" content="{html.escape(content, quote=True)}">'
                    head, found = replace_tag(
                        head, rf'<meta\b(?=[^>]*\bproperty=["\']{re.escape(prop)}["\'])[^>]*>', tag
                    )
                    if not found:
                        head += tag

        output = head + "</head>" + tail
        if output != source:
            path.write_text(output, encoding="utf-8")
            changed.append(relative)

    urls = []
    for path in sorted(ROOT.rglob("*.html")):
        relative = path.relative_to(ROOT).as_posix()
        if not public_page(relative) or relative in ALIASES or relative == "thank-you.html":
            continue
        soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
        robots = soup.find("meta", attrs={"name": "robots"})
        if robots and "noindex" in robots.get("content", "").lower():
            continue
        urls.append(SITE_BASE + canonical_path(relative))

    sitemap = "\n".join([
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        *(f"  <url><loc>{html.escape(url)}</loc></url>" for url in sorted(urls)),
        '</urlset>',
        '',
    ])
    sitemap_path = ROOT / "sitemap.xml"
    if not sitemap_path.exists() or sitemap_path.read_text(encoding="utf-8") != sitemap:
        sitemap_path.write_text(sitemap, encoding="utf-8")

    print(f"Synchronized metadata on {len(changed)} pages")
    print(f"Sitemap includes {len(urls)} canonical pages")
    for relative in changed:
        print(relative)


if __name__ == "__main__":
    main()
