// Mechanical cache refresh for the corrected shared navigation, including future generators.
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'..');
for(const folder of ['scripts','tests'])for(const entry of fs.readdirSync(path.join(root,folder),{withFileTypes:true})){
 if(!entry.isFile()||!/(?:\.cjs|\.js|\.mjs|\.py)$/.test(entry.name)||entry.name==='refresh-navigation-audit.cjs')continue;
 const file=path.join(root,folder,entry.name),before=fs.readFileSync(file,'utf8');
 const after=before.replaceAll('20261017-review-hold','20261019-nav-base');
 if(before!==after)fs.writeFileSync(file,after);
}
console.log('Refreshed current navigation versions in generators and regression assertions; historical reports left unchanged.');
