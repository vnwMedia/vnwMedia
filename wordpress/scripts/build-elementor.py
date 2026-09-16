"""Create real Elementor section widgets with rich-text, image and link controls."""
from pathlib import Path
from bs4 import BeautifulSoup,Tag
import json,hashlib,re
root=Path(__file__).resolve().parents[1]/'theme/vnw-media'
backgrounds=json.loads((root/'elementor/backgrounds.json').read_text())
records=json.loads((root/'content/pages.json').read_text()); sections={}; pages={}
def widget(node,seed):
 key=hashlib.sha256((seed+':'+str(node)).encode()).hexdigest()[:12];fields={}
 title=node.select_one('h1,h2,h3')
 label=(title.get_text(' ',strip=True) if title else node.get('id') or ' '.join(node.get('class',[])) or node.name)[:90]
 def field(typ,value,label):
  name='field_'+str(len(fields));fields[name]={'type':typ,'value':value,'label':label[:80]};return '{{'+name+'}}'
 for el in [node,*node.find_all(True)]:
  if el.name=='img' and el.get('src'):
   el['src']=field('media',el['src'],'Image: '+(el.get('alt') or 'Section image'))
   el['alt']=field('text',el.get('alt',''),'Image description')
   el.attrs.pop('srcset',None)
  if el.get('style'):
   el['style']=re.sub(r'url\([\"\']?([^\)\"\']+)[\"\']?\)',lambda m:'url('+field('media',m[1],'Background image')+')',el['style'])
  if el.name=='a' and el.get('href') and not el.find_parent('form'):
   el['href']=field('url',el['href'],'Link: '+el.get_text(' ',strip=True))
  if el.get('placeholder'):el['placeholder']=field('text',el['placeholder'],'Field placeholder')
 # Rich text controls retain inline formatting without exposing layout HTML.
 for el in list(node.select('h1,h2,h3,h4,h5,h6,p,summary,a,button,label,li,figcaption,span,strong')):
  if el.parent is None or el.find(['img','svg','input','select','textarea','p','div','h1','h2','h3','h4','h5','h6','a','button','ul','ol','li']):continue
  if not el.get_text(strip=True) or '{{' in el.decode_contents():continue
  value=el.decode_contents();typ='rich'
  token=field(typ,value,('Heading: ' if el.name.startswith('h') else 'Text: ')+el.get_text(' ',strip=True))
  el.clear();el.append(token)
 sections[key]={'title':label,'html':str(node),'fields':fields}
 return key
for r in records:
 if r['type']=='redirect':continue
 html=r['html'].replace('{{POST_CONTENT}}',r.get('post_content','')).replace('{{POST_TITLE}}',r['title'])
 soup=BeautifulSoup(html,'html.parser');main=soup.find('main')
 if not main:raise ValueError(r['source'])
 for background in backgrounds.get(r['source'],[]):
  target=main
  try:
   for index in background['path']:target=[n for n in target.children if isinstance(n,Tag)][index]
  except IndexError:raise ValueError('Background path mismatch: '+r['source'])
  if target.name!=background['tag'] or ' '.join(target.get('class',[]))!=background['classes']:raise ValueError('Background element mismatch: '+r['source'])
  if 'url(' not in target.get('style',''):target['style']=target.get('style','')+';background-image:'+background['image']

 keys=[widget(n,r['source']+':'+str(i)) for i,n in enumerate(list(main.children)) if isinstance(n,Tag)]
 pages[r['source']]={'sections':keys,'main_attributes':main.attrs}
previous=json.loads((root/'elementor/previous-sections.json').read_text())
sections={**previous['sections'],**sections}
(root/'elementor/sections.json').write_text(json.dumps({'sections':sections,'pages':pages},ensure_ascii=False))
print(len(pages),'pages;',len(sections),'editable section widgets;',sum(len(s['fields']) for s in sections.values()),'controls')
