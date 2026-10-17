"""Wire the shared attribution handler into VNW pages, never separate client sites."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
VERSION = '20261016-lead-source'
updated_count = 0
for page in ROOT.rglob('*.html'):
    if any(part in page.parts for part in ['.git', 'assets', 'Liquid Soldier', 'ai-intake-system-wordpress-upload']):
        continue
    before = page.read_text()
    shared = re.search(r'<script\b[^>]*src=["\']((?:\.\./)*)site-buttons\.js(?:\?[^"\']*)?["\'][^>]*>\s*</script>', before)
    if not shared:
        continue
    after = before
    if 'src="' + shared[1] + 'lead-attribution.js' not in after:
        after = after[:shared.start()] + f'<script defer src="{shared[1]}lead-attribution.js?v={VERSION}"></script>' + after[shared.start():]
    after = re.sub(r'(src=["\'](?:\.\./)*(?:script|site-buttons|lead-attribution)\.js)(?:\?[^"\']*)?(["\'])', r'\1?v=' + VERSION + r'\2', after)
    if after != before:
        page.write_text(after)
        updated_count += 1
print(f'Updated {updated_count} shared-site pages.')
