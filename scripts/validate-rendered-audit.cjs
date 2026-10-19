// Validate the DOM addresses collected through the browser against exact-case files.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),origin='http://127.0.0.1:8765',prefix='/vnwMedia/';
const read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const routes=read('wordpress/clean-urls/route-manifest.json').routes;
const rows=['desktop','mobile'].flatMap(device=>read('reports/navigation-images-'+device+'-2026-10-19.json'));
const pages=new Map(rows.map(r=>[new URL(r.url).pathname,r]));
const issues=[],targets=new Map(),external=new Set();let linkCount=0,imageCount=0;
function add(value,base,kind,page){
 if(!value||/^(?:data:|blob:|javascript:|mailto:|tel:)/i.test(value))return;
 let url;try{url=new URL(value,base);}catch{issues.push({kind:'invalid-url',value,page});return;}
 if(!/^https?:$/.test(url.protocol))return;
 if(url.origin!==origin){external.add(url.href);return;}
 if(!url.pathname.startsWith(prefix)){issues.push({kind:'escaped-project',url:url.href,page});return;}
 if(kind==='link'){
  linkCount++;
  if(/\.html$/.test(url.pathname))issues.push({kind:'legacy-navigation',url:url.href,page});
  if(url.searchParams.has('v'))issues.push({kind:'page-version-query',url:url.href,page});
  if(url.hash&&url.hash!=='#top'){
   const target=pages.get(url.pathname),id=decodeURIComponent(url.hash.slice(1));
   if(target&&!target.ids.includes(id))issues.push({kind:'missing-anchor',url:url.href,page});
  }
 }else if(kind==='image')imageCount++;
 const key=url.origin+url.pathname;
 if(!targets.has(key))targets.set(key,{url:key,kinds:new Set(),pages:new Set()});
 targets.get(key).kinds.add(kind);targets.get(key).pages.add(page);
}
function srcset(value,base,page){for(const part of (value||'').split(',')){const src=part.trim().split(/\s+/)[0];if(src)add(src,base,'image',page);}}
for(const row of rows){
 const base=new URL(row.base||row.url,row.url).href;
 if(!row.title)issues.push({kind:'missing-title',page:row.route});
 for(const a of [...row.links,...Object.values(row.menuCategories||{}).flat()])add(a.href,base,'link',row.route);
 for(const img of row.images){for(const s of [img.src,img.current,img.lazySrc])add(s,base,'image',row.route);srcset(img.srcset,base,row.route);srcset(img.lazySrcset,base,row.route);}
 for(const asset of row.assets||[]){add(asset.src,base,'asset',row.route);srcset(asset.srcset,base,row.route);}
 for(const bg of row.backgrounds||[])for(const m of bg.matchAll(/url\(["']?([^"')]+)["']?\)/g))add(m[1],base,'image',row.route);
}
// Deferred slideshow frames and responsive candidates must exist before activation too.
for(const route of routes){
 const html=fs.readFileSync(path.join(root,route.source),'utf8'),base=origin+prefix+route.source;
 for(const match of html.matchAll(/<(?:img|source|video)\b([^>]*)>/gi)){
  for(const attr of match[1].matchAll(/\b(src|data-src|poster|srcset|data-srcset)=["']([^"']*)["']/g)){
   if(attr[1].endsWith('srcset'))srcset(attr[2],base,route.path);else add(attr[2],base,'image',route.path);
  }
 }
}
// Include CSS dependencies: fonts and alternate/background images may not be painted at both sizes.
const cssQueue=[...targets.values()].filter(t=>t.url.endsWith('.css'));
for(let n=0;n<cssQueue.length;n++){
 const item=cssQueue[n],file=path.join(root,decodeURIComponent(new URL(item.url).pathname.slice(prefix.length)));
 if(!fs.existsSync(file))continue;
 const css=fs.readFileSync(file,'utf8');
 for(const m of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)){const value=m[1].trim();add(value,item.url,'css-asset','stylesheet');}
}
function exactExists(relative){let current=root;for(const segment of relative.split('/').filter(Boolean)){if(!fs.existsSync(current)||!fs.statSync(current).isDirectory()||!fs.readdirSync(current).includes(segment))return false;current=path.join(current,segment);}return fs.existsSync(current)&&fs.statSync(current).isFile();}
for(const t of targets.values()){
 let file=decodeURIComponent(new URL(t.url).pathname.slice(prefix.length));if(!file||file.endsWith('/'))file+='index.html';
 if(!exactExists(file))issues.push({kind:'missing-file-or-wrong-case',file,url:t.url,pages:[...t.pages].slice(0,4)});
}
const uniqueIssues=[...new Map(issues.map(i=>[JSON.stringify(i),i])).values()];
const report={date:'2026-10-19',routes:routes.length,desktop_pages:rows.filter(r=>r.viewport===1280).length,mobile_pages:rows.filter(r=>r.viewport===390).length,link_instances:linkCount,image_instances:imageCount,unique_internal_targets:targets.size,external_destinations_not_submitted:[...external],issues:uniqueIssues,targets:[...targets.values()].map(t=>({url:t.url,kinds:[...t.kinds]}))};
fs.writeFileSync(path.join(root,'reports/navigation-images-validation-2026-10-19.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,targets:undefined,external_destinations_not_submitted:external.size},null,2));
if(uniqueIssues.length)process.exitCode=1;
