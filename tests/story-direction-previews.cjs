const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const script=fs.readFileSync(path.join(root,'story-direction-previews.js'),'utf8');
for(let option=1;option<=3;option++){
  const html=fs.readFileSync(path.join(root,`our-story-direction-${option}.html`),'utf8');
  assert(html.includes('noindex,nofollow'));
  assert(html.includes(`data-story-direction="${option}"`));
  assert(html.indexOf('story-direction-previews.css')<html.indexOf('site-buttons.css'));
  assert(html.indexOf('story-direction-previews.js')<html.indexOf('site-buttons.js'));
  const section={setAttribute(){},innerHTML:''};
  vm.runInNewContext(script,{document:{body:{dataset:{storyDirection:String(option)}},querySelector:selector=>{assert.equal(selector,'#approach');return section;}}});
  assert(section.className.includes(`sdp-option-${option}`));
  assert(section.innerHTML.includes('id="story-direction-title"'));
  assert.equal((section.innerHTML.match(/aria-current="page"/g)||[]).length,1);
  assert(!section.innerHTML.includes('undefined'));
  for(const match of section.innerHTML.matchAll(/(?:src|href)="([^"]+)"/g)){
    const file=match[1].split('#')[0];
    assert(fs.existsSync(path.join(root,file)),`Missing preview destination or asset: ${file}`);
  }
  console.log(`Our Story direction ${option}: PASS — isolated section, comparison links, assets, button order, noindex`);
}
