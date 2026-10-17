const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),css=fs.readFileSync(path.join(root,'styles.css'),'utf8');
const marker='/* Mobile feature photos reach both screen edges; copy keeps the shared gutters. */';
const rule=css.slice(css.indexOf(marker),css.indexOf('/* Keep all three care specialties',css.indexOf(marker)));
assert(rule.startsWith(marker+'\n@media(max-width:800px){'),'photo breakout is mobile-only');
assert(rule.includes('.industry-landing .indl-showcase .shell.indl-showcase-grid{width:100%;max-width:none;margin-inline:0;padding-inline:0}'));
assert(rule.includes('.industry-landing .indl-showcase-media{width:100%;margin-inline:0;padding-inline:0}'));
assert(rule.includes('.industry-landing .indl-showcase-copy{width:var(--shell);margin-inline:auto}'),'copy retains its original mobile width and gutters');
assert(!/100vw|!important|csp-hero|site-header/.test(rule),'no viewport overflow workaround or unrelated hero/header changes');
assert(css.includes('.csp-scope .csp-scope-grid{display:grid;width:100%;max-width:none;margin:0;'),'service detail photos retain their existing full-width layout');
let pages=0,locations=0,industries=0,services=0;
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','assets','Liquid Soldier','ai-intake-system-wordpress-upload'].includes(item.name))continue;const file=path.join(dir,item.name);if(item.isDirectory())walk(file);else if(item.name.endsWith('.html')){const html=fs.readFileSync(file,'utf8');if(!/href=["'](?:\.\.\/)*styles\.css/.test(html))continue;assert(/href=["'](?:\.\.\/)*styles\.css\?v=20261017-mobile-review-pause["']/.test(html),file+' refreshes the current shared styles');pages++;const relative=path.relative(root,file);if(relative.startsWith('locations/'))locations++;if(relative.startsWith('industries/'))industries++;if(relative.startsWith('services/'))services++;}}}
walk(root);assert(pages>=319);assert(locations>=60);assert(industries>=70);assert(services>=28);
console.log(`PASS: ${pages} pages refresh mobile-only feature photo styles (${locations} location, ${industries} industry and ${services} service pages); text gutters and existing service full-bleed layouts preserved.`);
