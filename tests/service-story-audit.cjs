const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const schemas=[];
const context={document:{body:{dataset:{depth:'1'}},querySelector:()=>null,createElement:()=>({dataset:{}}),head:{appendChild:x=>schemas.push(JSON.parse(x.textContent))}}};
vm.createContext(context);
for(const file of ['service-catalog.js','create-service-content.js','service-story-content.js','pages.js']){
  let source=fs.readFileSync(path.join(root,file),'utf8');
  if(file==='pages.js')source=source.replace(/bootPages\(\);\s*$/,'');
  vm.runInContext(source,context,{filename:file});
}
vm.runInContext('globalThis.services=SERVICE_CATALOG;globalThis.story=SERVICE_STORY_CONTENT;globalThis.config=CREATE_SERVICE_PAGES;globalThis.render=(s)=>createServiceDetail(s,CREATE_SERVICE_PAGES[s.slug]||serviceStoryFallback(s));',context);
const titles=new Set(),descriptions=new Set(),results=[];
for(const service of context.services){
  const file=path.join(root,'services',service.slug+'.html'),source=fs.readFileSync(file,'utf8');
  const story=context.story[service.slug];
  assert(story,service.slug+' missing story');
  assert.equal(story[1].length,3);assert.equal(story[2].length,4);
  assert(source.includes('service-story-content.js?v=20261014-preparation-cards'));
  assert(!source.includes('service-preparation.css'));
  assert(!source.includes('service-preparation.js'));
  assert(source.includes('pages.js?v=20261014-remove-preparation'));
  const title=source.match(/<title>(.*?)<\/title>/s)?.[1];
  const description=source.match(/name="description" content="([^"]+)"/)?.[1];
  assert(title&&description,service.slug+' missing metadata');
  assert(!titles.has(title),'duplicate title');titles.add(title);
  assert(!descriptions.has(description),'duplicate description');descriptions.add(description);
  assert(source.includes('rel="canonical" href="https://vnwmedia.github.io/vnwMedia/services/'+service.slug+'.html"'));
  const html=context.render(service);
  assert(!html.includes('undefined'),service.slug+' undefined content');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
  assert(!html.includes('id="service-diagnostic"'));
  assert(!html.includes('SEO, PPC &amp; AI visibility'));
  assert(!html.includes('id="prepare-for-engagement"'),service.slug+' preparation section still present');
  assert(!html.includes('Before we begin'),service.slug+' preparation label still present');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size,service.slug+' duplicate IDs');
  const blocks=[...html.matchAll(/<p(?:\s[^>]*)?>(.*?)<\/p>/gs)].map(x=>x[1].replace(/<[^>]*>/g,'').trim()).filter(x=>x.length>80);
  assert.equal(blocks.length,new Set(blocks).size,service.slug+' duplicate paragraphs');
  for(const [,href]of html.matchAll(/href="([^"]+)"/g)){
    if(href.startsWith('#'))assert(ids.includes(href.slice(1)),service.slug+' broken anchor '+href);
    else if(!/^(https?:|mailto:|tel:)/.test(href))assert(fs.existsSync(path.resolve(root,'services',href.split('#')[0])),service.slug+' broken local link '+href);
  }
  for(const [,src]of html.matchAll(/<img[^>]*src="([^"]+)"/g))if(!/^https?:/.test(src))assert(fs.existsSync(path.resolve(root,'services',src)),service.slug+' missing image '+src);
  const faq=schemas.at(-1)['@graph'].find(x=>x['@type']==='FAQPage');
  assert.equal(faq.mainEntity.length,(html.match(/<details[ >]/g)||[]).length);
results.push(service.slug+': PASS — unique metadata, 1 H1, 4 gates, preparation section removed, '+faq.mainEntity.length+' matching FAQs; links/assets valid');
}
assert.equal(results.length,28);
console.log(results.join('\n'));
console.log('All 28 service landing pages passed.');
