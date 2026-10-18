"""Build an isolated homepage crop study; never rewrite the live homepage."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / 'index.html').read_text()
html = re.sub(r'<title>.*?</title>', '<title>Option 1 · Mobile Focal Points | VNW Media Preview</title>', html, count=1)
html = html.replace('</head>', '<meta name="robots" content="noindex,nofollow">\n</head>')
html = html.replace('<link rel="stylesheet" href="site-buttons.css', '<link rel="stylesheet" href="mobile-hero-focal-preview.css?v=1">\n<link rel="stylesheet" href="site-buttons.css')
html = html.replace('data-motion-mode="slideshow"', 'data-motion-mode="slideshow" data-focal-mode="adjusted"')
html = re.sub(r'<form\b', '<form data-preview-form', html)
html = re.sub(r'<script src="home-hero-motion\.js[^\"]*"></script>', '<script defer src="mobile-hero-focal-preview.js?v=1"></script>', html)
controls = '''
<details class="focal-preview-controls" open>
  <summary>Option 1 preview · Homepage unchanged</summary>
  <div class="focal-preview-options">
    <label for="focal-preview-scene">Photo</label>
    <select id="focal-preview-scene">
      <option value="healthcare">Healthcare</option>
      <option value="restaurants-hospitality">Restaurants &amp; hospitality</option>
      <option value="home-services">Home services</option>
      <option value="automotive">Automotive</option>
      <option value="daycare-education">Daycare &amp; education</option>
      <option value="legal-professional-services">Legal &amp; professional</option>
      <option value="real-estate">Real estate</option>
      <option value="retail-ecommerce">Retail &amp; eCommerce</option>
    </select>
    <div class="focal-preview-compare" role="group" aria-label="Compare mobile crop">
      <button type="button" data-focal-choice="current" aria-pressed="false">Current crop</button>
      <button type="button" data-focal-choice="adjusted" aria-pressed="true">Option 1</button>
    </div>
    <p role="status" id="focal-preview-status">Same image size and shade. Adjusted focal point.</p>
  </div>
</details>
'''
html = html.replace('</body>', controls + '\n</body>')
(ROOT / 'mobile-hero-focal-preview.html').write_text('\n'.join(line.rstrip() for line in html.splitlines()) + '\n')
print('Built mobile-hero-focal-preview.html; index.html unchanged.')
