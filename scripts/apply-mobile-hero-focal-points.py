"""Build CSS-only mobile crop settings and add it to published VNW pages."""
from pathlib import Path
import json,re,runpy

ROOT=Path(__file__).resolve().parents[1]
published_pages=runpy.run_path(str(ROOT/'scripts/audit-mobile-hero-images.py'))['published_pages']
VERSION='20261017-reviewed-focal-points'
config=json.loads((ROOT/'mobile-hero-focal-points.json').read_text())
css='''/* Generated from mobile-hero-focal-points.json. Focal positions only; no layout,
   zoom, contrast, asset, form, or desktop changes. No runtime JavaScript needed. */
@media(max-width:760px){
  html body main :is(.hero-bg,.inner-hero-bg,.csp-hero-media,.indl-hero-media,.scm-ms-hero-bg){
    background-position:var(--mobile-hero-x,50%) var(--mobile-hero-y,0%)!important;
  }
  html body main :is(.hero-bg,.inner-hero-bg,.csp-hero-media,.indl-hero-media,.scm-ms-hero-bg) :is(img,video):is([src],[data-src]),
  html body main :is(.sd-hero,.cinema-hero,.cover-five,.cs-live-hero)>img[src],
  html body main :is(.article-hero,.ind-hero) img[src]{
    object-position:var(--mobile-hero-x,50%) var(--mobile-hero-y,0%)!important;
  }
'''
for fragment,x,y,subject in config['photos']:
    assert 0<=x<=100 and 0<=y<=100
    css+=f'  /* {subject} */\n  html body main :is([src*="{fragment}"],[data-src*="{fragment}"],[style*="{fragment}"]){{--mobile-hero-x:{x}%;--mobile-hero-y:{y}%}}\n'
css+='}\n'
(ROOT/'mobile-hero-focal-points.css').write_text(css)
changed=[]
for p,_ in published_pages():
    source=p.read_text()
    if 'mobile-hero-focal-points.css' in source:continue
    pattern=r'(<link\b[^>]*href="([^"<>]*?)site-buttons\.css[^"<>]*"[^>]*>)'
    updated=re.sub(pattern,lambda m:f'<link rel="stylesheet" href="{m[2]}mobile-hero-focal-points.css?v={VERSION}">'+m[1],source,count=1)
    assert updated!=source,f'Cannot place shared stylesheet on {p}'
    p.write_text(updated);changed.append(str(p.relative_to(ROOT)))
for generator in ['scripts/build-industries.mjs','scripts/generate-nyc-borough-location-pages.py']:
    p=ROOT/generator;source=p.read_text()
    if 'mobile-hero-focal-points.css' not in source:
        source=re.sub(r'(<link rel="stylesheet" href="([^"<>]*?)site-buttons\.css[^"<>]*">)',lambda m:f'<link rel="stylesheet" href="{m[2]}mobile-hero-focal-points.css?v={VERSION}">'+m[1],source,count=1)
        p.write_text(source)
print(f'Built {len(config["photos"])} photo focal points; linked {len(changed)} published pages. Desktop and isolated design previews untouched.')
