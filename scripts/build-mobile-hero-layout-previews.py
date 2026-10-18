"""Clone the current homepage for five isolated mobile layout studies."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / 'index.html').read_text()
html = re.sub(r'<title>.*?</title>', '<title>Mobile Hero Layout Study | VNW Media Preview</title>', html, count=1)
html = html.replace('</head>', '<meta name="robots" content="noindex,nofollow">\n</head>')
html = html.replace('<link rel="stylesheet" href="site-buttons.css', '<link rel="stylesheet" href="mobile-hero-layout-preview.css?v=1">\n<link rel="stylesheet" href="site-buttons.css')
html = html.replace('data-motion-mode="slideshow"', 'data-motion-mode="slideshow" data-layout-option="focal"')
html = re.sub(r'<form\b', '<form data-preview-form', html)
html = re.sub(r'<script src="home-hero-motion\.js[^\"]*"></script>', '<script defer src="mobile-hero-layout-preview.js?v=1"></script>', html)
controls = '''
<details class="layout-preview-controls">
  <summary>Mobile preview · Homepage unchanged</summary>
  <label for="layout-preview-option">Compare layouts</label>
  <select id="layout-preview-option">
    <option value="focal">1. Adjust the focal point</option>
    <option value="fit">2. Fit the full photo</option>
    <option value="separate">3. Separate photo section</option>
    <option value="portrait">4. Mobile portrait photo</option>
    <option value="form-below">5. Form below the hero</option>
  </select>
  <p role="status" id="layout-preview-status">Preview only. Forms do not send.</p>
  <a href="mobile-hero-options-preview.html">View all five together ↗</a>
</details>
'''
html = html.replace('</body>', controls + '\n</body>')
(ROOT / 'mobile-hero-layout-preview.html').write_text('\n'.join(line.rstrip() for line in html.splitlines()) + '\n')
print('Built mobile-hero-layout-preview.html; live homepage unchanged.')
