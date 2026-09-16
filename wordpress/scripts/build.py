from pathlib import Path
from bs4 import BeautifulSoup
import json,shutil,re,posixpath
root=Path(__file__).resolve().parents[2]
theme=root/'wordpress/theme/vnw-media'
data=json.loads((theme/'content/export.json').read_text())

def url(v,source):
 if v.startswith('{{THEME}}'):v=v.replace('{{THEME}}',''); source='index.html'
 elif v.startswith('{{HOME}}'):v=v.replace('{{HOME}}','');source='index.html'
 elif v.startswith(('http:','https:','data:','mailto:','tel:','#','//')):return v
 v=posixpath.normpath(posixpath.join(posixpath.dirname(source),v))
 return ('{{HOME}}' if '.html' in v else '{{THEME}}')+v

def fix(html,source):
 soup=BeautifulSoup(html,'html.parser')
 for el in soup.find_all(True):
  for attr in ('src','href','poster','action'):
   if el.get(attr):el[attr]=url(el[attr],source)
  if el.get('style'):
   el['style']=re.sub(r'url\([\"\']?([^\)\"\']+)[\"\']?\)',lambda m:'url("'+url(m[1],source)+'")',el['style'])
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
 r['schemas']=[v.replace('https://vnwmedia.github.io/vnwMedia/','{{HOME}}') for v in r['schemas']]
 r['header']=fix(r['header'],r['source'])
 # Keep shared footer rather than removing it with the main-content cleanup.
 r['footer']=r['footer'].replace('{{THEME}}assets/','{{THEME}}assets/')
 r['footer']=re.sub(r'\{\{THEME\}\}([^"\s<>]*\.html)',r'{{HOME}}\1',r['footer'])
 manifest.append(r)
(theme/'content/pages.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
home=manifest[0]
(theme/'content/header.html').write_text(home['header'])
(theme/'content/footer.html').write_text(home['footer'])
# Copy design assets only, never the old page-generation application.
shutil.copytree(root/'assets',theme/'assets',dirs_exist_ok=True,ignore=shutil.ignore_patterns('.DS_Store'))
for file in root.glob('*.css'):shutil.copy2(file,theme/file.name)
for name in ['service-catalog.js','tickers.js','resources-live.js','site-buttons.js','favicon.ico']:
 shutil.copy2(root/name,theme/name)
script=(root/'script.js').read_text()
a=script.index('const siteHeaderElement');b=script.index('function markCurrentPrimaryNavigation')
script=script[:a]+'''const siteHeaderElement = document.querySelector('.site-header');
const navRoot = window.vnwSite.home;
'''+script[b:]
a=script.index('forms.forEach((form) => {');b=script.index('\n});',a)+4
script=script[:a]+script[b:]
script=script.replace('${navRoot}assets/', '${window.vnwSite.theme}assets/')
(theme/'interactions.js').write_text(script)
print('Prepared',len(manifest),'routes and original assets')
