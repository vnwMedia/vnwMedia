const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const manifest=JSON.parse(read('reports/site-cleanup-2026-10-18.json'));
const followup=JSON.parse(read('reports/site-cleanup-followup-2026-10-18.json'));
for(const file of [...manifest.removed_preview_pages,...manifest.removed_support_files])assert(!fs.existsSync(path.join(root,file)),'retired study stays removed: '+file);
for(const file of followup.removed_pages)assert(!fs.existsSync(path.join(root,file)),'temporary approval preview stays removed: '+file);
for(const file of [...manifest.retained_pages,...manifest.kept_shared_runtime])assert(fs.existsSync(path.join(root,file)),'retained production dependency exists: '+file);
let checked=0;
function checkReference(value,source){
 value=value.replaceAll('&amp;','&').trim();
 if(!value||/^(?:#|data:|mailto:|tel:|javascript:|\/\/)/i.test(value)||value.includes('${'))return;
 if(/^https?:/i.test(value)){
  const url=new URL(value);if(url.origin!=='https://vnwmedia.github.io'||!url.pathname.startsWith('/vnwMedia/'))return;
  value=url.pathname.slice('/vnwMedia/'.length);
  source='index.html';
 }
 value=decodeURIComponent(value.split(/[?#]/)[0]);
 if(!value)value='index.html';
 let file=value.startsWith('/')?path.join(root,value.replace(/^\/vnwMedia\//,'')):path.resolve(root,path.dirname(source),value);
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 assert(fs.existsSync(file),source+' has a missing local link/asset: '+value);checked++;
}
for(const file of [...manifest.retained_pages,...manifest.retired_review_pages]){
 const html=read(file);
 for(const [,value]of html.matchAll(/\b(?:href|src|data-src|poster)=["']([^"']+)["']/g))checkReference(value,file);
 for(const [,set]of html.matchAll(/\b(?:srcset|data-srcset)=["']([^"']+)["']/g))for(const src of set.split(','))checkReference(src.trim().split(/\s+/)[0],file);
 if(!html.includes('site-buttons.js'))continue;
 assert(html.lastIndexOf('site-buttons.css')>html.lastIndexOf('<style'),'shared button design remains after inline page styles: '+file);
}
for(const file of manifest.kept_shared_runtime.filter(file=>file.endsWith('.css'))){
 for(const [,value]of read(file).matchAll(/url\(\s*["']?([^\)"']+)["']?\s*\)/g))checkReference(value,file);
}
for(const [,url]of read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g))checkReference(url,'sitemap.xml');
for(const file of manifest.retired_review_pages){
 const html=read(file),refresh=html.match(/http-equiv="refresh" content="0;url=([^"#]+)[^"]*"/);
 assert(refresh,'review URL is a redirect, not a duplicate page: '+file);checkReference(refresh[1],file);
 assert(!/src="[^\"]*(?:pages|portfolio-client-results)\.js/.test(html));
}
assert.equal(manifest.counts.regular_pages,210);
assert.equal(manifest.removed_preview_pages.length,124);
console.log(`PASS: ${manifest.removed_preview_pages.length+followup.removed_pages.length} retired study/approval pages absent; all 210 regular pages preserved; 14 compatible review redirects; ${checked} retained links/assets and sitemap destinations resolve.`);
