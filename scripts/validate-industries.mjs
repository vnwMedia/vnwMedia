import {readFile, stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {industries} from './industry-content.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const expected=[path.join(root,'industries','index.html')];
for(const industry of industries){
  const dir=path.join(root,'industries',industry.slug);
  expected.push(path.join(dir,'index.html'));
  const services=['seo',industry.secondSlug,'google-business-profile','ppc','reputation-management','website-design','case-studies'];
  for(const service of services) expected.push(path.join(dir,service,'index.html'));
}
const problems=[];
const titles=new Set();
for(const file of expected){
  let html;
  try{html=await readFile(file,'utf8')}catch{problems.push(`Missing page: ${file}`);continue}
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];
  if(!title) problems.push(`Missing title: ${file}`);
  else if(titles.has(title)) problems.push(`Duplicate title: ${title}`);
  else titles.add(title);
  for(const needle of ['<main','<h1','<link rel="canonical"','name="description"','ind-faq','testimonial-ticker-section','site-footer.js','site-buttons.js']){
    if(!html.includes(needle)) problems.push(`Missing ${needle}: ${file}`);
  }
  for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    if(url.startsWith('#')||/^(?:https?:|tel:|mailto:|data:)/.test(url))continue;
    const clean=url.split(/[?#]/)[0];
    const target=path.resolve(path.dirname(file),clean);
    if(!target.startsWith(root+path.sep)) {problems.push(`Link escapes site: ${file} -> ${url}`);continue}
    try{const info=await stat(target);if(info.isDirectory())await stat(path.join(target,'index.html'))}
    catch{problems.push(`Broken local link: ${file} -> ${url}`)}
  }
}
for(const industry of industries){
  try{await stat(path.join(root,'assets','industry-heroes',industry.image))}
  catch{problems.push(`Missing industry photo: ${industry.image}`)}
}
try{await stat(path.join(root,'assets','industry-heroes','industry-directory.png'))}
catch{problems.push('Missing industry directory photo')}
if(problems.length){console.error(problems.join('\n'));process.exitCode=1}
else console.log(`Validated ${expected.length} industry pages, unique titles, local links, shared sections, and all ${industries.length+1} new photos.`);
