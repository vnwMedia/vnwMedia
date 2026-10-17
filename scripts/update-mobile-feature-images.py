"""Refresh the shared stylesheet for mobile full-width feature photos."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
VERSION = '20261017-mobile-feature-images'
count = 0
for page in ROOT.rglob('*.html'):
    if any(part in page.parts for part in ['.git', 'assets', 'Liquid Soldier', 'ai-intake-system-wordpress-upload']):
        continue
    before = page.read_text()
    after = re.sub(r'(href=["\'](?:\.\./)*styles\.css)(?:\?[^"\']*)?(["\'])', r'\1?v=' + VERSION + r'\2', before)
    if after != before:
        page.write_text(after)
        count += 1
print(f'Refreshed the shared stylesheet on {count} VNW pages.')
