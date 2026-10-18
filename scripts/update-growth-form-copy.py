"""Apply approved copy only to the five-field hero inquiry form and its templates."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
VERSION = '20261018-growth-title-lines'
FORM = re.compile(r'<form\b(?=[^>]*\bclass=["\'][^"\']*\bhero-form\b)[^>]*>.*?</form>', re.S)
heading = '<h2><span class="hero-form-title-line">Let’s Grow Your</span> <span class="hero-form-title-line">Business Together</span></h2>'
button = 'Let’s Get Started'

def update_form(match):
    form = re.sub(r'^(<form\b[^>]*\baria-label=["\'])[^"\']*(["\'])', lambda m: m[1] + 'Let’s Grow Your Business Together' + m[2], match[0], count=1)
    form = re.sub(r'<h2\b[^>]*>.*?</h2>', lambda _: heading, form, count=1, flags=re.S)
    return re.sub(r'(<button\b[^>]*\btype=["\']submit["\'][^>]*>).*?(</button>)', lambda m: m[1] + button + m[2], form, count=1, flags=re.S)

forms = pages = 0
for file in [*ROOT.rglob('*.html'), ROOT / 'pages.js', ROOT / 'location-pages.js', ROOT / 'scripts/build-industries.mjs', ROOT / 'scripts/generate-nyc-borough-location-pages.py']:
    if any(part in file.parts for part in ['.git', 'assets', 'Liquid Soldier', 'ai-intake-system-wordpress-upload']):
        continue
    before = file.read_text()
    forms += len(FORM.findall(before))
    after = FORM.sub(update_form, before)
    after = re.sub(r'(site-buttons\.css)(?:\?[^"\'\s<>]*)?', lambda m: m[1] + '?v=' + VERSION, after)
    if file.suffix == '.html':
        after = re.sub(r'(src=["\'](?:\.\./)*(?:pages|location-pages)\.js)(?:\?[^"\']*)?(["\'])', lambda m: m[1] + '?v=' + VERSION + m[2], after)
    if after != before:
        file.write_text(after)
        pages += 1
print(f'Updated {forms} hero form source blocks and refreshed templates in {pages} files.')
