// Isolated menu comparison. No changes to the shared website navigation.
const panel = document.querySelector('#preview-menu');
const trigger = document.querySelector('#menu-trigger');
const sizeLabel = document.querySelector('#menu-size');
const selector = document.querySelector('.option-selector');
const escapeText = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
const shortNames = {
  'web-design':'Web Design & Development','ecommerce':'eCommerce','website-maintenance':'Website Maintenance',
  'brand-strategy':'Brand & Strategy','graphic-design':'Graphic Design','seo':'SEO','yelp-seo':'Yelp SEO & Visibility',
  'google-business-profile':'Google Business Profile','geo':'AI Visibility & GEO','content-writing':'Content Writing',
  'lead-generation':'Lead Generation','google-ppc':'PPC Advertising','paid-social':'Paid Social Ads',
  'crm-automation':'CRM & Automation','video-editing':'Video & Ad Creative','social-media':'Social Media Management',
  'reputation-management':'Reputation Management','email-marketing':'Email Marketing','text-marketing':'SMS Marketing'
};
const descriptions = {
  1:'01 / The closest to your current menu: two groups above, two below, with tighter spacing and no oversized introduction.',
  2:'02 / Every group becomes one compact row. All services are visible, with subtle separators to keep the list readable.',
  3:'03 / The smallest fixed panel. Choose a category on the left to see its services on the right.',
  4:'04 / Four expandable categories. Only one opens at a time, so the menu stays short.',
  5:'05 / The tight 2 × 2 service grid, with a compact Full Service promotional card on the left.',
  6:'06 / The same 35:32:32 promotional card and tight service grid, without the bottom link bar.',
  7:'07 / Option 1’s services take priority, with distinct additions in the Create / Connect / Convert breakdown. Overlapping entries and content creation are excluded.'
};
// Share the selected service list with the site navigation.
const pillarGroups = SERVICE_MENU_PILLARS;
function expandedGroupsMarkup(){
  return `<div class="pillar-layout">${pillarGroups.map((pillar,i)=>`<section class="service-pillar" aria-labelledby="pillar-${i}"><header class="pillar-heading"><h2 id="pillar-${i}">${escapeText(pillar.name)}</h2><p>${escapeText(pillar.description)}</p></header>${pillar.groups.map(group=>`<section class="pillar-group"><h3>${escapeText(group.name)}</h3><div class="service-links">${group.links.map(([name,href])=>`<a href="${escapeText(href)}" title="${escapeText(name)}"><span>${escapeText(name)}</span><b aria-hidden="true">↗</b></a>`).join('')}</div></section>`).join('')}</section>`).join('')}</div>${footerMarkup()}`;
}
function linksMarkup(links) {
  return links.map(([name, slug]) => `<a href="services/${slug}.html" title="${escapeText(name)}"><span>${escapeText(shortNames[slug] || name)}</span><b aria-hidden="true">↗</b></a>`).join('');
}
function footerMarkup(){return '<div class="menu-footer"><a href="services.html#all-services">View all services <span aria-hidden="true">↗</span></a><a href="contact.html">Not sure? Let’s talk <span aria-hidden="true">↗</span></a></div>';}
function setOpen(open){panel.hidden=!open;trigger.setAttribute('aria-expanded',String(open));updateSize();}
function updateSize(){
  if(panel.hidden){sizeLabel.textContent='Menu closed';return;}
  const rect=panel.getBoundingClientRect();sizeLabel.textContent=`${Math.round(rect.width)} × ${Math.round(rect.height)} px`;
}
function activateTab(index, focus=false){
  panel.querySelectorAll('[role="tab"]').forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;if(focus&&i===index)tab.focus();});
  panel.querySelectorAll('[role="tabpanel"]').forEach((section,i)=>section.hidden=i!==index);
  updateSize();
}
function renderOption(option){
  panel.dataset.variant=String(option);
  selector.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.option)===option)));
  document.querySelector('#option-description').textContent=descriptions[option];
  if(option===1 || option===2 || option===5 || option===6){
    const groups=`<div class="group-layout">${SERVICE_GROUPS.map(([name,links])=>`<section class="menu-group"><h3>${escapeText(name)}</h3><div class="service-links">${linksMarkup(links)}</div></section>`).join('')}</div>`;
    panel.innerHTML=(option===5 || option===6)
      ? `<div class="promo-grid-layout"><aside class="compact-promo" aria-label="Full service marketing"><p class="promo-label">Full Service</p><h2>Everything needed to attract, convert, and retain better leads.</h2><p class="promo-copy">From web design and SEO to paid ads, AI visibility, reputation, content, and tracking.</p><a href="services.html#all-services">${option===6?"View all services":"Explore Services"} <span aria-hidden="true">↗</span></a></aside>${groups}</div>${option===6?"":footerMarkup()}`
      : `${groups}${footerMarkup()}`;
  }else if(option===7){
    panel.innerHTML=expandedGroupsMarkup();
  }else if(option===3){
    panel.innerHTML=`<div class="tab-layout"><div class="category-tabs" role="tablist" aria-label="Service categories" aria-orientation="vertical">${SERVICE_GROUPS.map(([name],i)=>`<button role="tab" id="category-tab-${i}" aria-controls="category-panel-${i}" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-category="${i}">${escapeText(name)}<span aria-hidden="true">→</span></button>`).join('')}</div><div class="tab-content">${SERVICE_GROUPS.map(([name,links],i)=>`<section role="tabpanel" id="category-panel-${i}" aria-labelledby="category-tab-${i}" ${i===0?'':'hidden'}><p class="category-caption">${links.length} SERVICES</p><div class="service-links">${linksMarkup(links)}</div></section>`).join('')}</div></div>${footerMarkup()}`;
  }else{
    panel.innerHTML=`<div class="accordion-layout">${SERVICE_GROUPS.map(([name,links],i)=>`<details name="service-preview" ${i===0?'open':''}><summary>${escapeText(name)}<span class="count">${links.length}</span><span class="chevron" aria-hidden="true">+</span></summary><div class="service-links">${linksMarkup(links)}</div></details>`).join('')}</div>${footerMarkup()}`;
  }
  setOpen(true);
  history.replaceState(null,'',`#option-${option}`);
}
selector.addEventListener('click',event=>{const button=event.target.closest('[data-option]');if(button)renderOption(Number(button.dataset.option));});
trigger.addEventListener('click',()=>setOpen(panel.hidden));
panel.addEventListener('click',event=>{const tab=event.target.closest('[role="tab"]');if(tab)activateTab(Number(tab.dataset.category));});
panel.addEventListener('keydown',event=>{
  const tab=event.target.closest('[role="tab"]');if(!tab)return;
  let index=Number(tab.dataset.category);
  if(event.key==='ArrowDown')index=(index+1)%SERVICE_GROUPS.length;
  else if(event.key==='ArrowUp')index=(index+SERVICE_GROUPS.length-1)%SERVICE_GROUPS.length;
  else if(event.key==='Home')index=0;
  else if(event.key==='End')index=SERVICE_GROUPS.length-1;
  else return;
  event.preventDefault();activateTab(index,true);
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden){setOpen(false);trigger.focus();}});
document.addEventListener('click',event=>{if(!panel.contains(event.target)&&!trigger.contains(event.target)&&!selector.contains(event.target))setOpen(false);});
new ResizeObserver(updateSize).observe(panel);
const initialOption=Number(location.hash.match(/^#option-([1-7])$/)?.[1]||1);
renderOption(initialOption);
