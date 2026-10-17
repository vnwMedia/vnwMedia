"""Refresh the shared menu/sheet scripts without modifying page content."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
VERSION = '20261017-menu-contact-sheet'
count = 0
for page in ROOT.rglob('*.html'):
    if any(part in page.parts for part in ['.git', 'assets', 'Liquid Soldier', 'ai-intake-system-wordpress-upload']):
        continue
    before = page.read_text()
    if not re.search(r'src=["\'](?:\.\./)*site-buttons\.js', before):
        continue
    after = re.sub(r'(src=["\'](?:\.\./)*(?:script|site-buttons)\.js)(?:\?[^"\']*)?(["\'])', r'\1?v=' + VERSION + r'\2', before)
    if after != before:
        page.write_text(after)
        count += 1
print(f'Updated shared menu/contact scripts on {count} pages.')
