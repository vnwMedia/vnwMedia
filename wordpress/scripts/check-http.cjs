// Read-only HTTP audit. Never submits forms or sends mail.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),base=process.env.VNW_AUDIT_URL||'http://127.0.0.1:9432';
if(!['127.0.0.1','localhost','vnwmedia.net'].includes(new URL(base).hostname))throw Error('Unexpected audit destination');
const manifest=JSON.parse(fs.readFileSync(root+'/qa/clean-url-manifest.json'));
const routes=new Map(manifest.routes.map(r=>[r.source,r.path])),assets=new Set(),results=[],issues=[];
const output=process.env.VNW_AUDIT_REPORT||root+'/qa/http-local.json';
let completed=0;
async function pool(items,fn){let index=0;await Promise.all(Array.from({length:3},async()=>{while(index<items.length){const item=items[index++];try{await fn(item)}catch(e){issues.push({item,error:e.message})}if(++completed%100===0)console.log('Checked',completed);}}));}
async function request(path,method='GET'){
 const r=await fetch(new URL(path,base),{method,redirect:'manual',headers:new URL(base).hostname==='vnwmedia.net'?{}:{Cookie:'playground_auto_login_already_happened=1'},signal:AbortSignal.timeout(60000)});
 return {status:r.status,location:r.headers.get('location'),body:method==='GET'?await r.text():''};
}
(async()=>{
 await pool(manifest.routes,async route=>{
  const r=await request('/'+route.path);results.push({path:route.path,status:r.status});
  if(r.status!==200)throw Error('Expected 200, got '+r.status+' '+r.location);
  if(!/<h1\b/i.test(r.body)||/Fatal error|Uncaught Error/.test(r.body))throw Error('Missing page or PHP error');
  const canonical=r.body.match(/<link\b(?=[^>]*rel=["']canonical["'])[^>]*href=["']([^"']+)/i)?.[1];
  if(canonical!==base+'/'+route.path)throw Error('Wrong canonical '+canonical);
  for(const m of r.body.matchAll(/\b(?:href|src|data-src|poster)=["']([^"']+)["']/g)){
   const u=new URL(m[1].replaceAll('&amp;','&'),base+'/'+route.path);
   if(u.origin!==new URL(base).origin)continue;
   if(u.pathname.startsWith('/wp-content/'))assets.add(u.origin+u.pathname+u.search);
   else if(u.pathname.endsWith('.html'))throw Error('Legacy link in server HTML '+u.href);
  }
 });
 const redirects=manifest.records.filter(r=>r.type==='redirect').map(r=>[r.source,r.target]);
 const aliases={...Object.fromEntries(redirects),...manifest.aliases};
 function resolve(source){let value=source,seen=new Set();while(!routes.has(value)){if(seen.has(value)||!aliases[value])throw Error('Bad alias '+source);seen.add(value);value=aliases[value].split('#')[0];}return routes.get(value);}
 const legacy=[...manifest.routes.map(r=>r.source),...Object.keys(aliases)].filter((s,i,a)=>a.indexOf(s)===i);
 await pool(legacy,async source=>{
  const r=await request('/'+source+'?utm_source=release-audit');
  const expected=base+'/'+resolve(source)+'?utm_source=release-audit';
  if(r.status!==301||r.location?.split('#')[0]!==expected)throw Error('Expected one-hop 301 to '+expected+', got '+r.status+' '+r.location);
 });
 await pool([...assets],async url=>{const r=await request(url,'HEAD');if(r.status!==200)throw Error('Missing asset '+r.status+' '+url);});
 const index=await request('/wp-sitemap.xml');const sitemapPages=[];
 for(const m of index.body.matchAll(/<loc>([^<]+)<\/loc>/g)){
  const u=new URL(m[1]);if(u.origin!==new URL(base).origin)throw Error('External sitemap');
  if(!/wp-sitemap-posts-(?:page|post)-/.test(u.pathname))continue;
  const r=await request(u.href);if(r.status!==200)throw Error('Sitemap failed '+u.href);
  for(const x of r.body.matchAll(/<loc>([^<]+)<\/loc>/g))sitemapPages.push(x[1]);
 }
 if(!sitemapPages.length||sitemapPages.some(u=>new URL(u).pathname.endsWith('.html')))issues.push({error:'Missing or legacy native sitemap URLs'});
 const report={base,pages:results.length,legacyRedirects:legacy.length,assets:assets.size,sitemapPageUrls:sitemapPages.length,results,issues,verifiedAt:new Date().toISOString(),emailSent:false};
 fs.writeFileSync(output,JSON.stringify(report,null,2));console.log(JSON.stringify({...report,results:undefined}));if(issues.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
