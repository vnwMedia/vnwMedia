from pathlib import Path
from bs4 import BeautifulSoup
import json,shutil,re,posixpath,os
from urllib.parse import urlsplit,urlunsplit
root=Path(__file__).resolve().parents[2]
theme=root/'wordpress/theme/vnw-media'
source_root=Path(os.environ.get('VNW_SOURCE_ROOT',root))
data=json.loads((theme/'content/export.json').read_text())

def url(v,source):
 if v.startswith('{{THEME}}'):v=v.replace('{{THEME}}','');source='index.html'
 elif v.startswith('{{HOME}}'):v=v.replace('{{HOME}}','');source='index.html'
 elif v.startswith(('http:','https:','data:','mailto:','tel:','#','//')):return v
 parts=urlsplit(v)
 path=posixpath.normpath(posixpath.join(posixpath.dirname(source),parts.path))
 if parts.path.endswith('/'):path=path.rstrip('/')+'/'
 is_page=path.endswith('.html') or (source_root/path/'index.html').is_file()
 return ('{{HOME}}' if is_page else '{{THEME}}')+urlunsplit(('', '',path,parts.query,parts.fragment))

def bridge_css(css):
 # Elementor adds wrappers. :where keeps the original main selector specificity.
 return re.sub(r'\bmain\s*>', ':is(main, main :where(.elementor > .elementor-element), main :where(.elementor > .elementor-element > .elementor-widget-container)) >',css)

def fix(html,source,clean=True):
 soup=BeautifulSoup(html,'html.parser')
 for el in soup.find_all(True):
  for attr in ('src','data-src','href','poster','action'):
   if el.get(attr):el[attr]=url(el[attr],source)
  for attr in ('srcset','data-srcset'):
   if el.get(attr):el[attr]=', '.join(url(part.strip().split()[0],source)+' '+ ' '.join(part.strip().split()[1:]) for part in el[attr].split(',') if part.strip())
  if el.get('style'):
   el['style']=re.sub(r'url\([\"\']?([^\)\"\']+)[\"\']?\)',lambda m:'url("'+url(m[1],source)+'")',el['style'])
 if clean:
  for el in soup.select('script, footer.footer, footer.review-footer, footer.review-foot'):el.decompose()
 for form in soup.select('form'):
  form['data-vnw-form']='';form['method']='post';form['action']='{{FORM_ACTION}}'
 return str(soup)

manifest=[]
for r in data['records']:
 if r['type']=='redirect':
  manifest.append({'source':r['source'],'type':'redirect','target':posixpath.normpath(posixpath.join(posixpath.dirname(r['source']),r['redirect'].split('url=')[1]))});continue
 html=fix(r['html'],r['source']);soup=BeautifulSoup(html,'html.parser')
 r['category']='Strategy';r['image']='';r['image_alt']=''
 if r['type']=='post':
  article=soup.select_one('.article-body')
  if article:
   r['post_content']=article.decode_contents();article.clear();article.append('{{POST_CONTENT}}')
   meta=soup.select_one('.article-heading .meta')
   if meta:r['category']=meta.get_text().split('/')[0].strip()
  else:r['post_content']=html
  img=soup.select_one('.article-hero img, .page-hero img, img')
  if img:r['image']=img.get('src','');r['image_alt']=img.get('alt','')
  h=soup.select_one('h1')
  if h:h.clear();h.append('{{POST_TITLE}}')
 if r['source']=='resources.html':
  cards=soup.select('.browse-section .story')
  if cards:
   container=cards[0].parent;container.clear();container.append('{{POST_GRID}}')
 r['html']=str(soup)
 r['styles']=[url(v,r['source']) for v in r['styles']]
 r['inline_styles']=[re.sub(r'url\([\"\']?([^\)\"\']+)[\"\']?\)',lambda m:'url("'+url(m[1],r['source'])+'")',v) for v in r['inline_styles']]
 r['inline_styles']=[bridge_css(v) for v in r['inline_styles']]
 r['schemas']=[v.replace('https://vnwmedia.github.io/vnwMedia/','{{HOME}}') for v in r['schemas']]
 r['header']=fix(r['header'],r['source'])
 # Keep shared footer rather than removing it with the main-content cleanup.
 r['footer']=fix(r['footer'],r['source'],clean=False)
 manifest.append(r)
(theme/'content/pages.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
home=manifest[0]
(theme/'content/header.html').write_text(home['header'])
(theme/'content/footer.html').write_text(home['footer'])
# Copy design assets only, never the old page-generation application.
shutil.copytree(source_root/'assets',theme/'assets',dirs_exist_ok=True,ignore=shutil.ignore_patterns('.DS_Store','job.json'))
for file in source_root.glob('*.css'):(theme/file.name).write_text(bridge_css(file.read_text()))
for name in ['service-catalog.js','tickers.js','resources-live.js','site-buttons.js','home-hero-motion.js','favicon.ico']:
 shutil.copy2(source_root/name,theme/name)
script=(source_root/'script.js').read_text()
a=script.index('const siteHeaderElement');b=script.index('function markCurrentPrimaryNavigation')
script=script[:a]+'''const siteHeaderElement = document.querySelector('.site-header');
const navRoot = window.vnwSite.home;
'''+script[b:]
if 'forms.forEach((form) => {' in script:
 a=script.index('forms.forEach((form) => {');b=script.index('\n});',a)+4
 script=script[:a]+script[b:]
script=script.replace('while (testimonialTickerTrack.scrollWidth < minimumLoopWidth) appendReviewSet();', '''for (let copies = 0; copies < 16 && testimonialTickerTrack.scrollWidth < minimumLoopWidth; copies++) {
      const previousWidth = testimonialTickerTrack.scrollWidth;
      appendReviewSet();
      if (testimonialTickerTrack.scrollWidth <= previousWidth) break;
    }''')
script=script.replace('${navRoot}assets/', '${window.vnwSite.theme}assets/')
(theme/'interactions.js').write_text(script)
print('Prepared',len(manifest),'routes and original assets')

# Keep normalization away from the WordPress admin toolbar.
p=theme/'site-buttons.js'
buttons=p.read_text().replace("document.querySelectorAll(ctas).forEach(link => {", "document.querySelectorAll(ctas).forEach(link => {\n      if (link.closest('#wpadminbar')) return;").replace("document.querySelectorAll(controls).forEach(control => {", "document.querySelectorAll(controls).forEach(control => {\n      if (control.closest('#wpadminbar')) return;")
# WordPress staging also uses noindex; it is not an HTML design-study page.
buttons=buttons.replace("const isPreview = document.querySelector('meta[name=\"robots\"][content*=\"noindex\"]') &&\n      !/\\/thank-you\\.html$/.test(location.pathname);", "const isPreview = document.body.classList.contains('elementor-editor-active');")
p.write_text(buttons)

# Retain attribution formatting, but WordPress owns submission and confirmation.
lead=(source_root/'lead-attribution.js').read_text()
lead=re.sub(r"const root = new URL\([^;]+;", "const root = new URL(window.vnwSite.home);",lead,count=1)
lead=lead.replace("document.addEventListener('submit', handleSubmit);",'')
(theme/'lead-attribution.js').write_text(lead)
