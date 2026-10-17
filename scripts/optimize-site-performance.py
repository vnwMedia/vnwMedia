"""Rebuild responsive assets and mechanically update shared font/image references.

Run from any directory with Python 3 and Pillow. Originals are retained.
"""
from pathlib import Path
import re
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
VERSION = '20261016-performance'
FONT_URL = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400&family=Inter:wght@400;500;600&display=swap'

def save_variant(source, target, width, quality=82, lossless=False):
    with Image.open(ROOT / source) as image:
        image.thumbnail((width, width))
        image.save(ROOT / target, 'WEBP', quality=quality, method=6, lossless=lossless)
    print(f'{target}: {(ROOT / target).stat().st_size:,} bytes')

for width in [480, 960]:
    save_variant('assets/home-team-circle-option-3.webp', f'assets/home-team-circle-option-3-{width}.webp', width)
for width in [646]:
    save_variant('assets/vnwMedia-LogoBlk.png', f'assets/vnw-media-logo-{width}.webp', width, lossless=True)

changed = 0
for page in ROOT.rglob('*.html'):
    if '.git' in page.parts:
        continue
    original = page.read_text()
    # Only pages using this site's root stylesheet; never touch separate client sites.
    if not re.search(r'href=[\"\'](?:\.\./)*styles\.css(?:\?|[\"\'])', original):
        continue
    updated = re.sub(r'<link\b[^>]*href=[\"\']' + re.escape(FONT_URL) + r'[\"\'][^>]*>\s*', '', original)
    updated = re.sub(r'<link\b[^>]*rel=[\"\']preconnect[\"\'][^>]*href=[\"\']https://fonts\.(?:googleapis|gstatic)\.com[\"\'][^>]*>\s*', '', updated)
    updated = re.sub(r'(href=[\"\'](?:\.\./)*styles\.css)(?:\?[^\"\']*)?([\"\'])', r'\1?v=' + VERSION + r'\2', updated)
    updated = re.sub(r'(src=[\"\'](?:\.\./)*site-footer\.js)(?:\?[^\"\']*)?([\"\'])', r'\1?v=' + VERSION + r'\2', updated)
    updated = re.sub(r'(src=[\"\'](?:\.\./)*script\.js)(?:\?[^\"\']*)?([\"\'])', r'\1?v=' + VERSION + r'\2', updated)
    if updated != original:
        page.write_text(updated)
        changed += 1
print(f'Updated {changed} shared-site HTML pages.')
