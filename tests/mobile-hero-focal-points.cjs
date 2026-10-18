const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const config=JSON.parse(read('mobile-hero-focal-points.json')),inventory=JSON.parse(read('reports/mobile-hero-image-inventory.json')),css=read('mobile-hero-focal-points.css');
assert.equal(config.breakpoint,760);assert.equal(config.photos.length,102);
assert.equal(new Set(config.photos.map(x=>x[0])).size,config.photos.length);
for(const asset of inventory.assets){
 const matches=config.photos.filter(p=>asset.asset.includes(p[0]));
 assert.equal(matches.length,1,`exactly one reviewed focal point for ${asset.asset}`);
}
assert(css.includes('@media(max-width:760px){'));
assert(!/[{;]\s*(?:width|height|padding|margin|object-fit|background-size|transform|filter|font-size|opacity)\s*:/.test(css),'focal stylesheet never changes layout, zoom, shading, or typography');
const mediaStart=css.indexOf('@media'),firstOpen=css.indexOf('{',mediaStart);
// Count braces explicitly; every declaration must stay inside the mobile query.
let balance=0,closedAt=-1;for(let i=firstOpen;i<css.length;i++){if(css[i]==='{')balance++;if(css[i]==='}')balance--;if(balance===0){closedAt=i;break;}}
assert.equal(css.slice(closedAt+1).trim(),'','no desktop rules after mobile query');
assert(css.includes('.cs-live-hero')&&css.includes('.article-hero')&&css.includes('.ind-hero'),'specialized main, resource, and directory heroes are covered');
for(const page of inventory.pages){
 const html=read(page),links=[...html.matchAll(/<link\b[^>]*href="([^"]*mobile-hero-focal-points\.css[^\"]*)"[^>]*>/g)];
 assert.equal(links.length,1,page+' loads one focal stylesheet');
 assert.equal(path.resolve(root,path.dirname(page),links[0][1].split('?')[0]),path.join(root,'mobile-hero-focal-points.css'));
 assert(html.indexOf('mobile-hero-focal-points.css')<html.indexOf('site-buttons.css'),page+' shared buttons remain last');
 const previous=cp.execFileSync('git',['show','HEAD:'+page],{cwd:root,encoding:'utf8'});
 if(!previous.includes('mobile-hero-focal-points.css'))assert.equal(html.replace(links[0][0],''),previous,page+' changes only the dedicated stylesheet link');
}
const homepage=Object.fromEntries(config.photos.filter(x=>x[0].includes('industry-motion/')).map(x=>[x[0].split('/').at(-1),x[1]]));
assert.deepEqual(homepage,{'automotive':74,'daycare-education':62,'healthcare':78,'home-services':72,'legal-professional-services':58,'real-estate':75,'restaurants-hospitality':68,'retail-ecommerce':65});
for(const file of ['scripts/build-industries.mjs','scripts/generate-nyc-borough-location-pages.py'])assert(read(file).includes('mobile-hero-focal-points.css'),'future generated pages retain focal-point stylesheet');
for(const file of ['mobile-hero-focal-preview.html','mobile-hero-layout-preview.html','mobile-hero-options-preview.html'])assert(!read(file).includes('mobile-hero-focal-points.css'),'isolated design studies unchanged');
console.log(`PASS: ${inventory.pages.length} published pages, ${config.photos.length} individually mapped hero assets, approved 8-photo homepage framing, mobile-only CSS, correct paths/order, unchanged desktop/layout/forms/content and preview studies.`);
