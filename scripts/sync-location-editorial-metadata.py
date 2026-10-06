"""Sync location-page descriptions and script versions with the editorial copy.

The visible page text is authored in location-pages.js. This keeps the static
HTML description in each thin location shell aligned with its distinct lead.
Only locations/**/index.html files are changed; unrelated previews are ignored.
"""

from html import escape
from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
SOURCE = (ROOT / "location-pages.js").read_text(encoding="utf-8")
VERSION = "20261006-unique-location-copy-v1"
NEW_JERSEY = {"monmouth-county", "middletown", "morganville"}
AREA_START = re.compile(r'^    (?P<slug>"[^"]+"|[a-z][a-z-]*): \{$', re.M)
SERVICE_START = re.compile(r'^      (?P<key>"[^"]+"|[a-z][a-z-]*): \[$', re.M)


def entries(section, start_pattern):
    matches = list(start_pattern.finditer(section))
    for index, match in enumerate(matches):
        slug = match.group("slug" if start_pattern is AREA_START else "key").strip('"')
        end = matches[index + 1].start() if index + 1 < len(matches) else len(section)
        yield slug, section[match.end():end]


editorial_section = SOURCE.split("  const areaEditorial = {", 1)[1].split("\n  };", 1)[0]
lenses_section = SOURCE.split("  const marketLenses = {", 1)[1].split("\n  };", 1)[0]
descriptions = {}
for slug, area_block in entries(editorial_section, AREA_START):
    region = "new-jersey" if slug in NEW_JERSEY else "new-york"
    for service, service_block in entries(area_block, SERVICE_START):
        fields = re.findall(r'^\s*`([^`]*)`', service_block, re.M)
        if len(fields) != 6:
            raise ValueError(f"Expected six editorial fields for {slug}/{service}, got {len(fields)}")
        page = ROOT / "locations" / region / slug / f"{service}-{slug}" / "index.html"
        descriptions[page] = fields[1]

for slug, area_block in entries(lenses_section, AREA_START):
    region = "new-jersey" if slug in NEW_JERSEY else "new-york"
    match = re.search(r'guideIntro: `([^`]*)`', area_block)
    if not match:
        raise ValueError(f"Missing guide intro for {slug}")
    page = ROOT / "locations" / region / slug / "index.html"
    descriptions[page] = match.group(1)

if len(descriptions) != 50 or len(set(descriptions.values())) != 50:
    raise ValueError(f"Expected 50 pages with unique descriptions, got {len(descriptions)}")

changed = 0
for page in (ROOT / "locations").rglob("index.html"):
    original = page.read_text(encoding="utf-8")
    updated = re.sub(r'location-pages\.js\?v=[^"\s]+', f"location-pages.js?v={VERSION}", original)
    if page in descriptions:
        description = escape(descriptions[page], quote=True)
        for meta in ('name="description"', 'property="og:description"'):
            pattern = rf'(<meta {meta} content=")[^"]*(")'
            updated, count = re.subn(pattern, lambda match: match.group(1) + description + match.group(2), updated, count=1)
            if count != 1:
                raise ValueError(f"Missing {meta} in {page}")
    if updated != original:
        changed += 1
        if "--check" not in sys.argv:
            page.write_text(updated, encoding="utf-8")

if "--check" in sys.argv and changed:
    raise SystemExit(f"{changed} location shells need metadata or version updates")
print(f"Verified 50 unique descriptions; {'updated' if '--check' not in sys.argv else 'checked'} {changed} shells")
