"""Build isolated mobile simplification studies without editing the live homepage."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / 'index.html').read_text()
html = re.sub(r'<title>.*?</title>', '<title>Simplified Mobile Homepage | VNW Media Preview</title>', html, count=1)
html = html.replace('</head>', '<meta name="robots" content="noindex,nofollow">\n</head>')
html = html.replace('<link rel="stylesheet" href="site-buttons.css', '<link rel="stylesheet" href="mobile-home-simplified-preview.css?v=1">\n<link rel="stylesheet" href="site-buttons.css')
html = html.replace('data-motion-mode="slideshow"', 'data-motion-mode="slideshow" data-simplify-option="light"')
html = re.sub(r'<form\b', '<form data-preview-form', html)
html = html.replace('<div class="hero-actions">', '<p class="simplify-mobile-lede">Websites, search visibility, and campaigns that help your business grow.</p>\n            <div class="hero-actions">', 1)
html = html.replace('class="pill pill-orange pill-large" href="contact.html">Free Marketing Strategy &amp; Score <span>↗</span>', 'class="pill pill-orange pill-large" href="#simplify-form" data-simplify-cta><span class="simplify-original-action">Free Marketing Strategy &amp; Score</span><span class="simplify-short-action">Let’s Get Started</span> <span aria-hidden="true">↗</span>', 1)
html = html.replace('<form data-preview-form class="hero-form reveal"', '<form data-preview-form id="simplify-form" class="hero-form reveal"', 1)
html = re.sub(r'<script src="home-hero-motion\.js[^\"]*"></script>', '', html)
# Execute preview rendering before the shared button/contact enhancements.
html = html.replace('<script defer src="site-buttons.js', '<script defer src="mobile-home-simplified-preview.js?v=1"></script><script defer src="site-buttons.js', 1)
controls = '''
<details class="simplify-preview-controls">
  <summary>Mobile preview · Homepage unchanged</summary>
  <label for="simplify-preview-option">Compare simplified options</label>
  <select id="simplify-preview-option">
    <option value="light">1. Light declutter</option>
    <option value="focused">2. A focused first impression</option>
    <option value="minimal">3. The essentials only</option>
  </select>
  <p role="status" id="simplify-preview-status">Preview only. Forms do not send.</p>
  <a href="mobile-home-simplified-options.html">View all three together ↗</a>
</details>
'''
html = html.replace('</body>', controls + '\n</body>')
(ROOT / 'mobile-home-simplified-preview.html').write_text('\n'.join(line.rstrip() for line in html.splitlines()) + '\n')
print('Built mobile-home-simplified-preview.html; live homepage unchanged.')
