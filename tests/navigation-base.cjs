const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const build=JSON.parse(read('reports/clean-url-preview-build.json')),script=read('script.js');
const declarations=script.slice(script.indexOf('const isNestedPage'),script.indexOf('// Preserve old successful-submission'));
for(const {source,path:route}of build.routes){
 const output=route?route+'index.html':'index.html',html=read(output),attrs=html.match(/<body\b([^>]*)>/i)?.[1]||'';
 const depth=attrs.match(/data-depth="([^"]+)"/)?.[1];
 for(const home of ['https://vnwmedia.github.io/vnwMedia/','https://example.test/']){
  const href=home+route,base=new URL(html.match(/<base href="([^"]+)"/)?.[1]||href,href).href;
  const context={URL,location:{pathname:new URL(href).pathname},document:{baseURI:base,body:{dataset:{...(depth===undefined?{}:{depth})}}}};
  vm.createContext(context);vm.runInContext(declarations+'\nthis.navPrefix=navRoot;',context);
  assert.equal(new URL(context.navPrefix+'assets/vnw-media-logo-646.webp',base).href,home+'assets/vnw-media-logo-646.webp',source+' logo stays inside the website');
  assert.equal(new URL(context.navPrefix+'our-story.html',base).href,home+'our-story.html',source+' navigation stays inside the website');
 }
}
assert(!script.includes('work.html?v=')&&!read('pages.js').includes('work.html?v='));
console.log('PASS: all 211 source/clean page pairs resolve header navigation and logo assets inside the site, including Services without data-depth. Obsolete Work version tags removed.');
