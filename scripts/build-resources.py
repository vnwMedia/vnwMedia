"""Build Resources and its complete article pages from local editorial content."""
from pathlib import Path
from html import escape as e
import json
ROOT=Path(__file__).resolve().parents[1]
POSTS=json.loads((ROOT/'resources/articles.json').read_text())
BASE='https://vnwmedia.github.io/vnwMedia/'
def nav(prefix=''):
 return '<header class="site-header"></header>'
def footer(prefix=''):
 return f'<section class="closing wrap tone-band tone-light"><p class="eyebrow">Make the next move count</p><h2>Good ideas deserve<br>a clear plan.</h2><a href="{prefix}contact.html" class="cta">Talk about your business</a></section>'
def pic(p,prefix='',loading='lazy'):
 return f'<img src="{prefix}{p["photo"]}" alt="{e(p["alt"])}" loading="{loading}" width="2000" height="1333">'
def url(p,prefix=''):return prefix+'resources/'+p['slug']+'.html'
def meta(p):return f'<span class="meta">{e(p["category"])} <span class="dot">/</span> {p["minutes"]} min read</span>'
def card(p,prefix=''):
 return f'<article class="story" data-category="{e(p["category"])}" data-search="{e((p["title"]+" "+p["summary"]+" "+p["category"]).lower(),quote=True)}"><a class="story-photo" href="{url(p,prefix)}">{pic(p,prefix)}</a><div class="story-copy">{meta(p)}<h3><a href="{url(p,prefix)}">{e(p["title"])}</a></h3><p>{e(p["summary"])}</p><a class="read-link" href="{url(p,prefix)}">Read article</a></div></article>'
def shell(title,description,body,path,photo,prefix='',schema=None,ticker=False):
 schema=f'<script type="application/ld+json">{json.dumps(schema).replace("<","&lt;")}</script>' if schema else ''
 return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{e(title)} | VNW Media</title><meta name="description" content="{e(description,quote=True)}"><link rel="canonical" href="{BASE+path}"><meta property="og:title" content="{e(title,quote=True)}"><meta property="og:description" content="{e(description,quote=True)}"><meta property="og:type" content="{'article' if prefix else 'website'}"><meta property="og:url" content="{BASE+path}"><meta property="og:image" content="{BASE+photo}"><link rel="icon" href="{prefix}favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="{prefix}styles.css?v=226"><link rel="stylesheet" href="{prefix}resources-content.css?v=4"><script defer src="{prefix}service-catalog.js?v=20260914-heroes"></script><script defer src="{prefix}script.js?v=142"></script><script defer src="{prefix}resources-live.js?v=2"></script>{('<link rel="stylesheet" href="tickers.css?v=1"><script defer src="tickers.js?v=2"></script>' if ticker else '')}{schema}<link rel="stylesheet" href="{prefix}site-footer.css?v=1"><script defer src="{prefix}site-footer.js?v=1"></script></head><body class="resources-live {'article-page' if prefix else 'concept-5'}">{nav(prefix)}<main id="top">{body}{footer(prefix)}</main></body></html>'''
hero='<section class="cover-five" data-nav-theme="dark"><img src="assets/resources/resources-editorial-hero-v2.jpg" alt="Marketing editors researching an article with a desktop screen, printed notes, and magazines" width="2000" height="1333" fetchpriority="high"><div class="wrap"><p class="eyebrow">Resources</p><h1>Behind every<br>better business,<br><em>a better question.</em></h1><a class="cta" href="#articles">Explore the articles</a></div><p class="cover-caption">VNW Media / Ideas, insights & practical guidance</p></section>'
ticker='<section class="trust-strip" aria-label="VNW Media capabilities"><div class="trust-track"><span>Web Design & Development</span><span>SEO</span><span>PPC Advertising</span><span>Google Business Profile</span><span>Social Media Management</span><span>Reputation Management</span></div></section>'
features='<section class="long-features wrap tone-band tone-light"><p class="eyebrow">Featured perspectives</p>'+''.join(f'<article><div><a href="{url(POSTS[i])}">{pic(POSTS[i])}</a></div><div><span class="number">0{n+1}</span>{meta(POSTS[i])}<h2><a href="{url(POSTS[i])}">{e(POSTS[i]["title"])}</a></h2><p>{e(POSTS[i]["summary"])}</p><a class="read-link" href="{url(POSTS[i])}">Read article</a></div></article>' for n,i in enumerate([7,5,1]))+'</section>'
categories=['All','Websites','Search','Advertising','Social Media','Strategy']
library='<section class="browse-section wrap tone-band tone-dark" id="articles"><div class="section-heading"><div><p class="eyebrow">Articles & insights</p><h2>Find your next good read.</h2></div><p>Practical thinking for your website, visibility, campaigns, and customer experience.</p></div><div class="browse-controls"><div class="filters" role="group" aria-label="Filter articles">'+''.join(f'<button data-filter="{x}" aria-pressed="{str(i==0).lower()}">{x}</button>' for i,x in enumerate(categories))+'</div></div><div class="library">'+''.join(card(p) for p in POSTS)+'</div><p class="empty" hidden>No articles in this category. Try another topic.</p><p class="result-count" aria-live="polite">10 articles</p></section>'
(ROOT/'resources.html').write_text(shell('Resources','Explore VNW Media articles on website design, SEO, PPC advertising, social media, and digital marketing.',hero+ticker+features+library,'resources.html','assets/resources/resources-editorial-hero-v2.jpg',ticker=True,schema={'@context':'https://schema.org','@type':'Blog','name':'VNW Media Resources','url':BASE+'resources.html','blogPost':[{'@type':'BlogPosting','headline':p['title'],'url':BASE+url(p)} for p in POSTS]}))
for p in POSTS:
 import re
 headings=[]
 def heading(m):
  label=re.sub('<[^>]+>','',m[1]);id='section-'+str(len(headings)+1);headings.append((id,label));return f'<h2 id="{id}">{m[1]}</h2>'
 content=re.sub(r'<h2>(.*?)</h2>',heading,p['html'],flags=re.S)
 toc='<aside class="article-toc"><p class="eyebrow">In this article</p><nav aria-label="Article contents">'+''.join(f'<a href="#{id}">{label}</a>' for id,label in headings)+'</nav><a class="read-link" href="../resources.html#articles">All articles</a></aside>'
 header=f'<section class="article-hero" data-nav-theme="dark">{pic(p,"../","eager")}<div class="article-heading wrap"><a class="breadcrumb" href="../resources.html">Resources</a>{meta(p)}<h1>{e(p["title"])}</h1><p>{e(p["summary"])}</p><div class="byline">VNW Media <span>Published {p["date"]}</span></div></div></section>'
 body=f'<section class="article-layout wrap">{toc}<article class="article-body">{content}<p class="article-source">Adapted and expanded from the <a href="{p["url"]}">VNW Media blog</a>.</p><div class="article-contact"><h2>Put the next step into practice.</h2><p>Tell us what you want your website and marketing to help your business achieve.</p><a class="cta" href="../contact.html">Discuss your project</a></div></article></section>'
 related=sorted([x for x in POSTS if x['slug']!=p['slug']],key=lambda x:x['category']!=p['category'])[:3]
 body+='<section class="related wrap tone-band tone-dark"><p class="eyebrow">Keep exploring</p><h2>More useful perspectives.</h2><div class="library">'+''.join(card(x,'../') for x in related)+'</div></section>'
 schema={'@context':'https://schema.org','@type':'BlogPosting','headline':p['title'],'description':p['summary'],'image':BASE+p['photo'],'datePublished':p['date'],'author':{'@type':'Organization','name':'VNW Media','url':BASE},'publisher':{'@type':'Organization','name':'VNW Media'},'mainEntityOfPage':BASE+url(p)}
 (ROOT/'resources'/f'{p["slug"]}.html').write_text(shell(p['title'],p['summary'],header+body,'resources/'+p['slug']+'.html',p['photo'],'../',schema))
print('Built Resources and 10 complete article pages.')
