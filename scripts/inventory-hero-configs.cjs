// Read the actual rendered-page configuration without booting or changing pages.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const context={document:{body:{dataset:{depth:'1'}},querySelector:()=>null,createElement:()=>({dataset:{}}),head:{appendChild:()=>{}}}};
vm.createContext(context);
for(const file of ['service-catalog.js','create-service-content.js','service-story-content.js','client-projects.js','portfolio-client-additions.js','pages.js']){
 let source=fs.readFileSync(path.join(root,file),'utf8');
 if(file==='pages.js')source=source.replace(/bootPages\(\);\s*$/,'');
 vm.runInContext(source,context,{filename:file});
}
const data=vm.runInContext(`({
 services:SERVICE_CATALOG.map(s=>({page:'services/'+s.slug+'.html',image:(CREATE_SERVICE_PAGES[s.slug]||{}).hero||s.image})),
 clients:Object.entries(CLIENT_CASE_STUDIES).map(([slug,c])=>({page:'case-studies/'+slug+'.html',image:c.hero})),
 additional:ADDITIONAL_CLIENT_PROJECTS.map(p=>({page:'case-studies/'+p.slug+'.html',image:p.hero})),
 portfolio:PORTFOLIO_CLIENT_ADDITIONS.map(p=>({page:'case-studies/'+p.slug+'.html',image:p.heroImage||p.coverImage||p.desktop})),
 top:Object.entries(topPages).map(([id,p])=>({id,image:p[3]})),
 resources:DATA.resources.map(p=>({page:'resources/'+p[1]+'.html',image:p[3]}))
})`,context);
console.log(JSON.stringify(data));
