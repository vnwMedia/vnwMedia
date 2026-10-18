"""Inventory published VNW hero photographs, including rendered templates."""
from pathlib import Path
from collections import defaultdict
from bs4 import BeautifulSoup
import json, re, subprocess, shutil

ROOT=Path(__file__).resolve().parents[1]
NODE=shutil.which('node') or str(Path.home()/'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node')
EXCLUDED={'.git','Liquid Soldier','ai-intake-system-wordpress-upload','assets','reports','node_modules'}
SELECTOR='main .hero,main .inner-hero,main .csp-hero,main .indl-hero,main .scm-ms-hero,main .sd-hero,main .cinema-hero,main .cover-five,main .article-hero,main .cs-live-hero'

def published_pages():
    for p in sorted(ROOT.rglob('*.html')):
        if EXCLUDED.intersection(p.relative_to(ROOT).parts): continue
        source=p.read_text(errors='replace')
        soup=BeautifulSoup(source,'html.parser')
        if not soup.find('link',href=re.compile(r'site-buttons\.css')): continue
        robots=soup.find('meta',attrs={'name':'robots'})
        if robots and 'noindex' in robots.get('content',''): continue
        if soup.find('meta',attrs={'http-equiv':re.compile('refresh',re.I)}): continue
        yield p,soup

def inventory():
    groups=defaultdict(set)
    pages=list(published_pages());live={str(p.relative_to(ROOT)) for p,_ in pages}
    def add(asset,page):
        if not asset or any(token in asset for token in ['logo.svg','logo-white','logo-646','client-logos']):return
        if not asset.startswith('http'):
            if 'assets/' in asset:asset='assets/'+asset.split('assets/',1)[1]
            else:return
        groups[asset.split('?')[0]].add(page)
    for p,soup in pages:
        page=str(p.relative_to(ROOT));hero=soup.select_one(SELECTOR)
        if hero:
            for el in [hero]+list(hero.select('img,[style]')):
                if el.name=='img':add(el.get('src') or el.get('data-src',''),page)
                for asset in re.findall(r'url\([\s\'\"]*([^\)\'\"]+)',el.get('style','')):add(asset,page)
        if page=='index.html':
            for image in soup.select('.hero-bg img'):add(image.get('data-src') or image.get('src'),page)
    config=json.loads(subprocess.check_output([NODE,str(ROOT/'scripts/inventory-hero-configs.cjs')],text=True))
    for kind in ['services','clients','additional','portfolio','resources']:
        for item in config[kind]:
            if item['page'] in live:add(item['image'],item['page'])
    ids={soup.body.get('data-page'):str(p.relative_to(ROOT)) for p,soup in pages if soup.body}
    for item in config['top']:
        if item['id'] in ids and item['id'] not in ['cases-hub','industries','resources']:
            add(item['image'],ids[item['id']])
    for match in re.findall(r'image:\s*"([^"/]+\.(?:jpg|png|webp))"',(ROOT/'location-pages.js').read_text()):
        add('assets/location-heroes/'+match,'locations/* (rendered)')
    for asset,page in [('assets/brooklyn-motors-banner.jpg','case-studies/brooklyn-motors.html'),('assets/case-studies-hero-larosa-logo.jpg','case-studies.html'),('assets/industry-concepts/business-neighborhood-hero-v1.jpg','industries.html')]:add(asset,page)
    return {'page_count':len(pages),'pages':sorted(live),'assets':[{'asset':a,'pages':sorted(p)} for a,p in sorted(groups.items())]}

if __name__=='__main__':
    import argparse
    parser=argparse.ArgumentParser();parser.add_argument('--write-audit',action='store_true');args=parser.parse_args()
    data=inventory()
    if args.write_audit:
        # Keep the machine-readable audit without recreating retired public
        # photo-review/option pages during routine maintenance.
        (ROOT/'reports/mobile-hero-image-inventory.json').write_text(json.dumps(data,indent=2)+'\n')
    print(json.dumps(data,indent=2))
