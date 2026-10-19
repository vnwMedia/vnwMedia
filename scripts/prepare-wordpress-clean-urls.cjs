// Prepare an auditable patch and an isolated WordPress test copy; never edit the publishing checkout.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),cp=require('node:child_process'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),checkout=process.argv[2];
assert(checkout,'Pass the read-only WordPress publishing checkout path.');
const theme=path.join(checkout,'wordpress/theme/vnw-media'),out=path.join(root,'wordpress/clean-urls');
const records=JSON.parse(fs.readFileSync(path.join(theme,'content/pages.json'),'utf8'));
const fixture=records.map(({source,type,target})=>({source,type,...(target?{target}:{})}));
const aliases={};
const inventory=cp.execFileSync('git',['ls-files','*.html'],{cwd:root,encoding:'utf8'}).trim().split('\n');
for(const file of inventory){
 if(/^(?:assets|reports|Liquid Soldier|ai-intake-system-wordpress-upload)\//.test(file))continue;
 const html=fs.readFileSync(path.join(root,file),'utf8'),match=html.match(/http-equiv="refresh" content="0;url=([^"?]+)[^"]*"/i);
 if(!match)continue;
 const [target,fragment]=match[1].split('#');
 aliases[file]=path.posix.normalize(path.posix.join(path.posix.dirname(file),target))+(fragment?'#'+fragment:'');
}
const overviews=new Set(['industries.html','industries/healthcare.html','industries/legal-professional-services.html','industries/real-estate.html','industries/retail-ecommerce.html']);
const routes=fixture.filter(r=>r.type!=='redirect').map(r=>({source:r.source,path:r.source==='index.html'?'':overviews.has(r.source)?r.source.slice(0,-5)+'/overview/':r.source.endsWith('/index.html')?r.source.slice(0,-10):r.source.slice(0,-5)+'/'}));
assert.equal(new Set(routes.map(r=>r.path)).size,routes.length,'every page must have a distinct destination');
fs.writeFileSync(path.join(out,'clean-url-aliases.json'),JSON.stringify(aliases,null,2)+'\n');
fs.writeFileSync(path.join(out,'route-manifest.json'),JSON.stringify({wordpress_source_commit:cp.execFileSync('git',['rev-parse','HEAD'],{cwd:checkout,encoding:'utf8'}).trim(),records:fixture,routes,aliases},null,2)+'\n');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const mapping=new Map(routes.map(r=>[r.source,r.path]));
const xml=sitemap.replace(/<loc>https:\/\/vnwmedia\.github\.io\/vnwMedia\/([^<]*)<\/loc>/g,(whole,source)=>{
 if(routes.some(r=>r.path===source))return '<loc>https://vnwmedia.net/'+source+'</loc>';
 source=source?source.endsWith('/')?source+'index.html':source:'index.html';assert(mapping.has(source),'sitemap route exists: '+source);return '<loc>https://vnwmedia.net/'+mapping.get(source)+'</loc>';
});
assert(!/<loc>[^<]*\.html(?:[?#<])/.test(xml));
fs.writeFileSync(path.join(out,'sitemap.xml'),xml);
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'vnw-clean-urls-')),copy=path.join(temp,'wordpress/theme/vnw-media');
fs.cpSync(theme,copy,{recursive:true,filter:file=>path.relative(theme,file).split(path.sep)[0]!=='assets'});
const changed=[];
function edit(file,mutate){const before=fs.readFileSync(path.join(theme,file),'utf8'),after=mutate(before);if(before===after)return;changed.push({file,before,after});fs.writeFileSync(path.join(copy,file),after);}
edit('functions.php',source=>{
 const needle='require_once __DIR__."/latest-update.php";';assert(source.includes(needle));
 assert(!source.includes("require_once __DIR__.'/clean-urls.php'"));
 return source.replace(needle,needle+"\nrequire_once __DIR__.'/clean-urls.php';").replace("wp_enqueue_script('vnw-tickers',get_template_directory_uri().'/tickers.js',['vnw-interactions'],null,true);","wp_enqueue_script('vnw-tickers',get_template_directory_uri().'/tickers.js',['vnw-interactions'],'20261019-work-client-only',true);");
});
edit('tickers.js',source=>{
 const before="    // Portfolio heroes use the exact same catalog, labels, and pace as Home.\n    const page = document.body.dataset.page || '';\n    if (page === 'work' || page === 'cases-hub' || page.startsWith('case-')) {";
 const after="    // Our Work keeps its selected-client ticker, not a second capabilities strip.\n    const page = document.body.dataset.page || '';\n    if (page === 'work') {\n      document.querySelectorAll('main .trust-strip[aria-label=\"VNW Media capabilities\"]').forEach(strip => strip.remove());\n    }\n    // Case-study heroes retain the shared capabilities catalog and pace.\n    if (page === 'cases-hub' || page.startsWith('case-')) {";
 assert(source.includes(before));return source.replace(before,after);
});
edit('site-buttons.js',source=>source.replace('!/\\/thank-you\\.html$/.test(location.pathname)','!/\\/thank-you(?:\\.html)?\\/?$/.test(location.pathname)'));
edit('lead-attribution.js',source=>source.replace("pagePath === '/contact.html' ? 'Contact page'","/^\\/contact(?:\\.html)?\\/?$/.test(pagePath) ? 'Contact page'"));
let patch='';
for(const {file,before,after}of changed){
 const a=path.join(temp,'before'),b=path.join(temp,'after');fs.writeFileSync(a,before);fs.writeFileSync(b,after);
 const name='wordpress/theme/vnw-media/'+file;
 const result=cp.spawnSync('diff',['-u','--label','a/'+name,'--label','b/'+name,a,b],{encoding:'utf8'});assert.equal(result.status,1,result.stderr);
 patch+='diff --git a/'+name+' b/'+name+'\n'+result.stdout;
}
for(const file of ['clean-urls.php','clean-urls.js','clean-url-aliases.json']){
 const contents=fs.readFileSync(path.join(out,file),'utf8'),lines=contents.replace(/\n$/,'').split('\n'),name='wordpress/theme/vnw-media/'+file;
 fs.writeFileSync(path.join(copy,file),contents);
 patch+='diff --git a/'+name+' b/'+name+'\nnew file mode 100644\n--- /dev/null\n+++ b/'+name+'\n@@ -0,0 +1,'+lines.length+' @@\n'+lines.map(line=>'+'+line+'\n').join('');
}
fs.writeFileSync(path.join(out,'wordpress-clean-urls.patch'),patch);
const checked=cp.spawnSync('git',['apply','--check',path.join(out,'wordpress-clean-urls.patch')],{cwd:checkout,encoding:'utf8'});assert.equal(checked.status,0,checked.stderr);
const blueprint={preferredVersions:{php:'8.5',wp:'7.1.3'},steps:[{step:'activateTheme',themeFolderName:'vnw-media'},{step:'runPHP',code:"<?php require '/checks/wordpress-clean-urls.php';"}]};
fs.writeFileSync(path.join(temp,'blueprint.json'),JSON.stringify(blueprint,null,2)+'\n');
console.log(JSON.stringify({temporary_root:temp,temporary_theme:copy,blueprint:path.join(temp,'blueprint.json'),pages:routes.length,aliases:Object.keys(aliases).length,patch_check:'passed',publishing_checkout:'read only; not changed'},null,2));
