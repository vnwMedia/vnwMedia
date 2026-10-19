const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const build=JSON.parse(read('reports/clean-url-preview-build.json')),manifest=JSON.parse(read('wordpress/clean-urls/route-manifest.json'));
assert.equal(build.routes.length,211);assert.equal(new Set(build.routes.map(r=>r.path)).size,211);
let references=0;
for(const {source,path:route}of build.routes){
 const file=route?route+'index.html':'index.html',html=read(file);
 assert(html.includes('site-clean-urls.js?v=20261019-route-audit'),file+' loads shared clean-link handling');
 assert(html.includes('rel="canonical" href="https://vnwmedia.github.io/vnwMedia/'+route+'"'),file+' clean canonical');
 const base=html.match(/<base href="([^"]+)"/)?.[1]||'';
 for(const [,ref]of html.replace(/<base\b[^>]*>/gi,'').matchAll(/\b(?:src|href|data-src|poster)=["']([^"']+)["']/g)){
  if(/^(?:https?:|\/\/|data:|#|mailto:|tel:|javascript:)/.test(ref))continue;
  const target=decodeURIComponent(ref.split(/[?#]/)[0]);if(!target)continue;
  const absolute=path.resolve(path.dirname(path.join(root,file)),base,target);
  assert(absolute.startsWith(root+path.sep)||absolute===root,'reference stays inside project: '+file);
  assert(fs.existsSync(absolute),file+' resolves '+ref+' with its asset base');references++;
 }
 assert(fs.existsSync(path.join(root,source)),'old compatibility source remains available');
}
for(const {source,output,base}of build.generated){
 const expected=read(source).replace(/(<head\b[^>]*>)/i,`$1<base href="${base}"><meta name="vnw-clean-source" content="${source}">`);
 assert.equal(read(output),expected,'generated page retains original source markup/content: '+source);
}
const moduleSource=read('wordpress/clean-urls/clean-urls.js');
function client(home,current,redirectLegacy=false){
 const document={readyState:'complete',body:{},querySelectorAll:()=>[],querySelector:()=>null};
 const location={href:current,pathname:new URL(current).pathname,replace:value=>{location.redirect=value;}};
 const c={URL,Element:class{},MutationObserver:class{observe(){}},document,location,window:{vnwCleanRoutes:{home,routes:build.lookup,redirectLegacy}}};
 vm.createContext(c);vm.runInContext(moduleSource,c);return c;
}
for(const home of ['https://vnwmedia.github.io/vnwMedia/','https://vnwmedia.net/','https://example.test/staging/']){
 const c=client(home,home+'services/google-ppc/'),clean=c.window.VNWCleanUrls.clean;
 for(const {source,path:route}of build.routes)assert.equal(clean(home+source+'?utm_source=google#details'),home+route+'?utm_source=google#details');
 assert.equal(clean('https://client.test/service.html'),'https://client.test/service.html');
 assert.equal(clean(home+'wp-admin/admin-post.php'),home+'wp-admin/admin-post.php');
 assert.equal(clean(home+'assets/guide.html'),home+'assets/guide.html');
 assert.equal(clean('#details'),'#details');
 assert.equal(clean(home+'resources.html#faq'),home+'our-story/#faq','FAQ shortcut points to the existing general FAQ section');
 assert.equal(clean(home+'contact.html#audit'),home+'contact/#page-content','audit shortcut reaches the contact form section');
 assert.equal(clean(home+'work/?v=31&utm_source=google#cases'),home+'work/?utm_source=google#cases','only the obsolete page version parameter is removed');
 const origin=new URL(home).origin;
 assert.equal(clean(origin+'/our-story.html'),home+'our-story/','known misplaced page links are contained in the project');
 assert.equal(clean(origin+'/unrelated-project/unknown.html'),origin+'/unrelated-project/unknown.html','unrelated same-host projects are not rewritten');
 const old=client(home,home+'services/google-ppc.html?utm_campaign=test#details',true);
 assert.equal(old.location.redirect,home+'services/google-ppc/?utm_campaign=test#details');
 assert(!client(home,home+'services/google-ppc/',true).location.redirect,'clean page has no redirect loop');
}
assert(!/<loc>[^<]*\.html/.test(read('sitemap.xml')),'preview sitemap has only clean URLs');
assert(read('site-clean-urls.js').endsWith(moduleSource),'preview and WordPress share the exact link normalizer');
const tickers=read('tickers.js'),start=tickers.indexOf('    // Our Work keeps'),end=tickers.indexOf('    // Service details',start),setup=tickers.slice(start,end);
for(const page of ['work','cases-hub','case-nycadsco']){
 const calls=[],clientTicker={matches:()=>true,dataset:{},setAttribute(){}};const hero={nextElementSibling:clientTicker,after:()=>calls.push('insert')};
 const c={document:{body:{dataset:{page}},querySelectorAll:()=>[{remove:()=>calls.push('remove-capabilities')}],querySelector:()=>hero,createElement:()=>({setAttribute(){}})}};
 vm.createContext(c);vm.runInContext(setup,c);
 if(page==='work')assert.deepEqual(calls,['remove-capabilities'],'Work never creates or overwrites its client ticker');
 else assert(!calls.includes('remove-capabilities'),'other portfolio capabilities stay intact');
}
assert.equal(manifest.routes.length,211);
console.log(`PASS: 211 unique clean pages, ${build.generated.length} exact generated copies, ${references} local references, canonical/sitemap coverage, legacy/query/hash forwarding, domain/subdirectory support, preserved assets/form endpoints, and one client ticker on Our Work.`);
