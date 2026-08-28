(() => {
'use strict';
// Isolated prototypes: no changes to the website's current navigation.
const concepts = [
  {id:1,name:'The right-hand drawer',short:'Right drawer',hint:'88% width · layered accordions',title:'Familiar, with room to breathe.',description:'A warm, light drawer glides in from the right. The page stays visible at the edge. Services expand into Create, Connect, and Convert, with a fixed contact button below.',tags:['Right → left','88% of screen','Nested accordions'],try:'Open Services, expand a different service group, then tap a service. Reopen the menu and tap the shaded edge to close it.',motion:'Right → left · 88% width',instruction:'Tap Menu, the shaded edge, or ×. Swipe right on the drawer to close.'},
  {id:2,name:'The wide left drawer',short:'90% left drawer',hint:'90% width · compact service tabs',title:'Less panel. More focus.',description:'A dark panel slides in from the left and covers 90% of the screen. The main links stay compact; three service tabs keep the long list manageable.',tags:['Left → right','90% of screen','Service tabs'],try:'Switch between Create, Connect, and Convert. Notice how the panel stays in place while each service list changes.',motion:'Left → right · 90% width',instruction:'Switch service tabs. Swipe left on the drawer or tap outside to close.'},
  {id:'2A',name:'The searchable right drawer',short:'90% drawer + search',hint:'Right drawer with service search',title:'Your preferred menu, with a shortcut.',description:'The selected 90% drawer now opens from the right, with your logo, phone button, heading, service tabs, and larger service text. Search across Create, Connect, and Convert.',tags:['Right → left · 90%','Search all 21 services','Original Option 02 preserved'],try:'Choose Convert, then search for SEO. Clear the search to return to Convert. Try “website” or “email” for a direct route.',motion:'Right → left · 90% width · search + tabs',instruction:'Search for a service or browse the tabs. Clear restores your previous category. Swipe right to close.'},
  {id:3,name:'The full-screen journey',short:'Full-screen journey',hint:'100% width · one decision at a time',title:'Give every choice its own space.',description:'A full-screen panel opens from the right. Choose Services, then a category, then a service. Forward and back animations make the hierarchy easy to follow without a long accordion.',tags:['Full screen','Three levels','Animated back / next'],try:'Tap Services → Connect → SEO. Reopen and try the back arrows. Only the current level is on screen.',motion:'Right → left · full screen',instruction:'Services → category → service. Use Back or swipe right to step back.'},
  {id:4,name:'The bottom sheet',short:'Searchable sheet',hint:'92% height · service search',title:'Everything within thumb’s reach.',description:'A rounded sheet rises from the bottom. Quick links sit above searchable services. Type a service name for a direct route, or browse the three expandable categories.',tags:['Bottom → top','92% of screen height','Instant service search'],try:'Search for “SEO” or “website.” Clear the search to browse categories. Drag the top handle down to dismiss.',motion:'Bottom → top · 92% height',instruction:'Search by service name. Swipe down from the handle or tap × to close.'},
  {id:5,name:'The split canvas',short:'Split canvas',hint:'88% width · persistent category rail',title:'A menu with a different rhythm.',description:'The website shifts aside as a blue category rail and dark panel enter from the left. Explore handles site navigation; Create, Connect, and Convert reveal their services in place.',tags:['Page pushes right','88% of screen','Persistent category rail'],try:'Use the blue rail to jump between Explore and the three service areas. The page remains visible as a small reminder of where you came from.',motion:'Left → right · page pushes aside',instruction:'Use the category rail. Swipe left or tap the page edge to close.'},
  {id:6,name:'The minimal card',short:'Minimal card',hint:'Floating panel · just the essentials',title:'Small footprint. Clear choices.',description:'A compact dark card settles below the header. No introduction, no oversized headings: just navigation, one contact link, and a separate service view. More of your website stays in sight.',tags:['Drops in gently','Content-sized card','Minimal'],try:'Open the menu, then Services. Choose a category and use Back to return. The card grows only when it needs to.',motion:'Top → down · floating card',instruction:'Tap Services to browse. Tap Back, ×, or outside the card to return.'},
  {id:7,name:'The agency index',short:'Agency index',hint:'Full screen · numbered editorial links',title:'Confident. Recognizably VNW.',description:'A full-screen curtain reveals numbered navigation in the website’s serif type, with quiet blue accents and a soft glow. Services unfold into the same Create, Connect, Convert structure as your desktop menu.',tags:['Curtain reveal','Full screen','Agency style'],try:'Open Services, then expand Connect or Convert. Use Back to return to the numbered index. Replay to see the curtain reveal.',motion:'Top → down · full-screen curtain',instruction:'Open Services to see the breakdown. Back returns to the main index.'},
  {id:8,name:'The slim switch',short:'Slim switch',hint:'78% width · two clear views',title:'A smaller menu, neatly organized.',description:'A slim right-hand drawer separates the website from its services with two simple controls. Service categories switch in place, so the panel stays calm even with a larger offering.',tags:['Right → left','78% of screen','Site / services switch'],try:'Switch from Explore to Services, then between Create, Connect, and Convert. Your selected service category stays in place when you switch views.',motion:'Right → left · 78% width',instruction:'Switch Explore / Services. Swipe right or tap the shaded edge to close.'},
  {id:9,name:'The thumb dock',short:'Thumb dock',hint:'65% height · bottom navigation',title:'Keep the next step close.',description:'A dark sheet rises only two-thirds of the screen. A fixed bottom dock puts Explore and the three service areas near your thumb. The content changes above it, with the page still visible behind.',tags:['Bottom → top','65% of screen height','Fixed category dock'],try:'Tap Create, Connect, and Convert in the bottom dock. Scroll a service list: the dock stays put. Pull the top handle down to close.',motion:'Bottom → top · 65% height',instruction:'Use the bottom dock to browse. Swipe the handle down or tap outside to close.'},
  {id:10,name:'The quick finder',short:'Quick finder',hint:'Floating search · browse or type',title:'Straight to what you need.',description:'A clean dark search panel finds pages and services as you type. Prefer browsing? Use Create, Connect, or Convert to see the relevant services. It is the most direct route for visitors who know what they want.',tags:['Subtle zoom / fade','Floating panel','Search + category filters'],try:'Type “SEO” or “work.” Clear the search, then select a category to browse. Try a phrase with no matches to see the empty state.',motion:'Fade + scale · floating finder',instruction:'Search pages or services, or browse a category. Tap Clear to reset the search.'} ,
  {id:11,name:'The pinned-tab drawer',short:'Pinned tabs',hint:'Option 02 refined · always-visible tabs',title:'Keep the controls. Move the list.',description:'The closest refinement of Option 2. A smaller introduction gives services more room, while the website links, category tabs, and contact button stay in place. Only the service list scrolls.',tags:['Left → right · 90%','Pinned category tabs','Closest to Option 02'],try:'Switch to Connect, then scroll its services. The main navigation and all three category tabs stay available.',motion:'Left → right · 90% width · pinned tabs',instruction:'Switch tabs or scroll the services. Swipe left or tap the page edge to close.'},
  {id:12,name:'The stacked-category drawer',short:'Category stack',hint:'Same drawer · expandable service groups',title:'See the structure at a glance.',description:'Keep the same left drawer, but replace the tabs with three clearly labeled service groups. Each opens in place. Opening another group closes the previous one, keeping the list manageable.',tags:['Left → right · 90%','Expandable categories','One group open at a time'],try:'Open Connect, then Convert. Notice how the previous group closes. Scroll to reach every service without leaving the menu.',motion:'Left → right · 90% width · stacked groups',instruction:'Tap a category to expand it. Swipe left or tap outside to close.'},
  {id:13,name:'The thumb-tab drawer',short:'Thumb tabs',hint:'Same drawer · category controls below',title:'The same approach, closer to your thumb.',description:'Option 2’s service tabs move below the list, just above the contact button. Main website links remain at the top. Change categories from the lower part of the screen while services update above.',tags:['Left → right · 90%','Bottom service tabs','Independent list scrolling'],try:'Use the lower Create, Connect, and Convert tabs. Scroll the services and check that the tabs and contact button stay within reach.',motion:'Left → right · 90% width · lower tabs',instruction:'Browse with the bottom tabs. Swipe left or tap the shaded page to close.'},
  {id:14,name:'The focused-category drawer',short:'Focused categories',hint:'Same drawer · choose, then browse',title:'One category. One clear list.',description:'The same compact website links sit above three service category cards. Choose a category to replace the cards with its services. A clear Back to categories control keeps the hierarchy simple.',tags:['Left → right · 90%','Category → services','Animated forward / back'],try:'Choose Connect, browse its services, then tap Back to categories. The main website links remain in place throughout.',motion:'Left → right · 90% width · two service levels',instruction:'Choose a category; use Back to categories to return. Swipe left to close.'},
  {id:15,name:'The searchable-tab drawer',short:'Search + tabs',hint:'Same drawer · search all 21 services',title:'Browse when you want. Search when you know.',description:'Option 2 gains a compact service search. Browse with the familiar tabs, or type to search all 21 services at once. Clear the search to return to the category you were browsing.',tags:['Left → right · 90%','Service search + tabs','Remembers your category'],try:'Select Convert, then search for SEO. Clear the search to return to Convert. Search also handles phrases with no matches.',motion:'Left → right · 90% width · service search',instruction:'Type a service name or use the tabs. Clear restores your previous category.'}

];
const mainLinks=[['Our Story','our-story.html'],['Work','work.html'],['Industries','industries.html'],['Case Studies','case-studies.html'],['Resources','resources.html']];
const allServices=SERVICE_MENU_PILLARS.flatMap(p=>p.groups.flatMap(g=>g.links));
const screen=document.querySelector('#phone-screen');
const panel=document.querySelector('#mobile-panel');
const overlay=document.querySelector('#menu-overlay');
const sitePreview=document.querySelector('#site-preview');
const trigger=document.querySelector('#open-menu');
const destination=document.querySelector('#destination');
const safe=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const normalizeConceptId=id=>String(id).toUpperCase()==='2A'?'2A':Number(id);
const readConceptHash=()=>normalizeConceptId(location.hash.match(/^#option-(2a|1[0-5]|[1-9])$/i)?.[1]||11);
let selected=readConceptHash();
let isOpen=false;
let replayTimer=0;
let closeTimer=0;
let receiptTimer=0;
let openFrame=0;
let openFocusTimer=0;
let journeyLevel='home';
let journeyPillar=0;
let tabIndex=0;
let railIndex=0;
let modernView='main';
let modernPillar=0;
let finderFilter=-1;
let refineTab=0;
let refineLevel=-1;
let swipeStart=null;
let suppressClickUntil=0;
const twoAArrow='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
const link=([label,href],className='')=>`<a class="${className}" href="${safe(href)}" data-demo-link="${safe(label)}"><span>${safe(label)}</span><span class="arrow" aria-hidden="true">${selected==='2A'?twoAArrow:'↗'}</span></a>`;
const groupsMarkup=pillar=>pillar.groups.map(g=>`<section class="service-group"><h3>${safe(g.name)}</h3>${g.links.map(item=>link(item)).join('')}</section>`).join('');
const allServicesLink=()=>link(['View all services','services.html#all-services'],'all-services');
const footer=()=>`<footer class="drawer-footer">${link(['Let’s talk about your project','contact.html'],'cta')}<p class="footer-note">One team. Your next stage of growth.</p></footer>`;
const top=(back=false,showBrand=true)=>`<header class="drawer-top">${back?'<button class="back-button" data-back><span aria-hidden="true">←</span> Back</button>':showBrand?'<a class="wordmark" href="index.html" data-demo-link="Home">VNW<b>MEDIA</b></a>':''}<button class="close-menu" data-close aria-label="Close mobile menu">×</button></header>`;
const compactNav=className=>`<nav class="${className}" aria-label="Main navigation">${[...mainLinks,['Contact','contact.html']].map(item=>link(item)).join('')}</nav>`;
function accordions(name){
  return SERVICE_MENU_PILLARS.map((p,i)=>`<details class="service-accordion" name="${name}" ${i===0?'open':''}><summary>${safe(p.name)}<span class="count">${p.groups.flatMap(g=>g.links).length}</span><span class="plus" aria-hidden="true">+</span></summary>${groupsMarkup(p)}</details>`).join('');
}
function rootNav(serviceButton){
  return `<nav class="nav-list" aria-label="Main navigation">${mainLinks.slice(0,2).map(item=>link(item)).join('')}${serviceButton}${mainLinks.slice(2).map(item=>link(item)).join('')}</nav>`;
}
function journeyMarkup(backwards=false){
  if(journeyLevel==='home')return `<div class="journey-view ${backwards?'backwards':''}"><p class="menu-kicker">WHERE TO NEXT?</p><h2 class="journey-title">Find your<br><em>next move.</em></h2>${rootNav('<button class="service-launch" data-journey="services">Services <span class="arrow" aria-hidden="true">→</span></button>')}</div>`;
  if(journeyLevel==='services')return `<div class="journey-view ${backwards?'backwards':''}"><p class="menu-kicker">SERVICES / CHOOSE YOUR DIRECTION</p><h2 class="journey-title">What’s next?</h2>${SERVICE_MENU_PILLARS.map((p,i)=>`<button class="journey-card" data-pillar="${i}"><span><strong>${safe(p.name)}</strong><small>${safe(p.description)}</small></span><span aria-hidden="true">→</span></button>`).join('')}${allServicesLink()}</div>`;
  const p=SERVICE_MENU_PILLARS[journeyPillar];
  return `<div class="journey-view ${backwards?'backwards':''}"><p class="menu-kicker">SERVICES / ${safe(p.name)}</p><h2 class="journey-title">${safe(p.name)}.</h2>${groupsMarkup(p)}${allServicesLink()}</div>`;
}
function tabsMarkup(){
  return `<div class="category-tabs" role="tablist" aria-label="Service categories">${SERVICE_MENU_PILLARS.map((p,i)=>`<button role="tab" id="service-tab-${i}" aria-controls="service-tab-panel" aria-selected="${tabIndex===i}" tabindex="${tabIndex===i?0:-1}" data-tab="${i}">${safe(p.name)}</button>`).join('')}</div><section id="service-tab-panel" role="tabpanel" aria-labelledby="service-tab-${tabIndex}">${tabContent(tabIndex)}</section>`;
}
function tabContent(index){const p=SERVICE_MENU_PILLARS[index];return `<p class="tab-caption">${safe(p.description)}</p>${groupsMarkup(p)}`;}
function railContent(index){
  if(index===0)return `<p class="menu-kicker">THE BIG PICTURE</p><h2 class="drawer-title">Explore.</h2>${rootNav(link(['Services','services.html#all-services']))}`;
  const p=SERVICE_MENU_PILLARS[index-1];return `<p class="menu-kicker">SERVICES</p><h2 class="drawer-title">${safe(p.name)}.</h2>${groupsMarkup(p)}${allServicesLink()}`;
}

const modernFooter=()=>`<footer class="modern-footer">${link(['Let’s talk','contact.html'],'cta')}</footer>`;
const modernTop=(back=false,showBrand=true)=>`<header class="drawer-top">${back?'<button class="back-button" data-modern-back><span aria-hidden="true">←</span> Back</button>':showBrand?'<a class="wordmark" href="index.html" data-demo-link="Home">VNW<b>MEDIA</b></a>':''}<button class="close-menu" data-close aria-label="Close mobile menu">×</button></header>`;
function modernNav(includeServices=true){
  const items=[...mainLinks.slice(0,2),...(includeServices?[['Services',null]]:[]),...mainLinks.slice(2)];
  return `<nav class="modern-nav" aria-label="Main navigation">${items.map((item,i)=>{
    const content=`<span class="index-no" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><span>${safe(item[0])}</span><span class="arrow" aria-hidden="true">${item[1]?'↗':'→'}</span>`;
    return item[1]?`<a href="${safe(item[1])}" data-demo-link="${safe(item[0])}">${content}</a>`:`<button data-modern-view="services">${content}</button>`;
  }).join('')}</nav>`;
}
function categoryChoices(){return `<div class="modern-categories">${SERVICE_MENU_PILLARS.map((p,i)=>`<button data-modern-pillar="${i}"><span><strong>${safe(p.name)}</strong><small>${p.groups.flatMap(g=>g.links).length} services</small></span><span aria-hidden="true">→</span></button>`).join('')}</div>`;}
function modernContent(){
  if(modernView==='main')return `${selected===7?'<p class="menu-kicker">VNW MEDIA / EXPLORE</p>':''}${modernNav()}`;
  if(modernView==='pillar')return `<p class="menu-kicker">OUR SERVICES</p><h2 class="modern-title">${safe(SERVICE_MENU_PILLARS[modernPillar].name)}.</h2>${groupsMarkup(SERVICE_MENU_PILLARS[modernPillar])}${allServicesLink()}`;
  return `<h2 class="modern-title">Services.</h2>${selected===7?accordions('agency-services'):categoryChoices()}${allServicesLink()}`;
}
function modernTabs(){return `<div class="modern-tabs" role="tablist" aria-label="Service categories">${SERVICE_MENU_PILLARS.map((p,i)=>`<button role="tab" data-modern-tab="${i}" id="modern-tab-${i}" aria-selected="${modernPillar===i}" tabindex="${modernPillar===i?0:-1}" aria-controls="modern-services">${safe(p.name)}</button>`).join('')}</div><section id="modern-services" role="tabpanel" aria-labelledby="modern-tab-${modernPillar}">${groupsMarkup(SERVICE_MENU_PILLARS[modernPillar])}</section>${allServicesLink()}`;}
function switchContent(){return modernView==='main'?modernNav(false):modernTabs();}
function dockContent(){return modernPillar===-1?`<h2 class="modern-title">Explore.</h2>${modernNav()}${link(['Let’s talk','contact.html'],'all-services')}`:`<p class="menu-kicker">OUR SERVICES</p><h2 class="modern-title">${safe(SERVICE_MENU_PILLARS[modernPillar].name)}.</h2>${groupsMarkup(SERVICE_MENU_PILLARS[modernPillar])}${allServicesLink()}`;}
function updateModern(backwards=false){
  const content=panel.querySelector('#modern-content');
  if(selected===8){
    panel.querySelectorAll('[data-switch]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.switch===modernView)));
    content.innerHTML=switchContent();
  }else if(selected===9){
    panel.querySelectorAll('[data-dock]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.dock)===modernPillar)));
    content.innerHTML=dockContent();
  }else{
    panel.querySelector('.drawer-top').outerHTML=modernTop(modernView!=='main');
    content.innerHTML=`<div class="modern-view ${backwards?'backwards':''}">${modernContent()}</div>`;
    (panel.querySelector('[data-modern-back]')||panel.querySelector('[data-close]')).focus({preventScroll:true});
  }
  content.scrollTop=0;
}
function updateFinder(){
  const input=panel.querySelector('#finder-search');const query=input.value.trim().toLowerCase();
  panel.querySelector('[data-finder-clear]').hidden=!query;
  panel.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.filter)===finderFilter)));
  const results=panel.querySelector('#finder-results');
  if(!query&&finderFilter===-1){results.innerHTML=`<p class="menu-kicker">EXPLORE THE WEBSITE</p><div class="result-links">${[...mainLinks,['Contact','contact.html']].map(item=>link(item)).join('')}</div>`;return;}
  const candidates=finderFilter===-1?[...mainLinks,['Contact','contact.html'],...allServices]:SERVICE_MENU_PILLARS[finderFilter].groups.flatMap(g=>g.links);
  const matches=candidates.filter(([label])=>label.toLowerCase().includes(query));
  results.innerHTML=`<p class="result-count" role="status">${matches.length} result${matches.length===1?'':'s'}${finderFilter>=0?' in '+safe(SERVICE_MENU_PILLARS[finderFilter].name):''}</p>${matches.length?`<div class="result-links">${matches.map(item=>link(item)).join('')}</div>`:'<div class="empty-search">Nothing here yet.<small>Try “SEO” or “web,” or choose All to search every category.</small><button class="finder-reset" data-finder-reset>Reset search</button></div>'}`;
}
function renderModern(){
  modernView='main';modernPillar=0;finderFilter=-1;
  if(selected===6||selected===7){
    panel.innerHTML=`${modernTop()}<div id="modern-content" class="drawer-scroll">${modernContent()}</div>${modernFooter()}`;
  }else if(selected===8){
    panel.innerHTML=`${modernTop()}<div class="view-switch" role="group" aria-label="Navigation view"><button data-switch="main" aria-pressed="true">Explore</button><button data-switch="services" aria-pressed="false">Services</button></div><div id="modern-content" class="drawer-scroll">${switchContent()}</div>${modernFooter()}`;
  }else if(selected===9){
    modernPillar=-1;
    panel.innerHTML=`<div class="sheet-handle" aria-hidden="true"></div>${modernTop()}<div id="modern-content" class="drawer-scroll">${dockContent()}</div><div class="bottom-dock" role="group" aria-label="Navigation sections">${['Explore',...SERVICE_MENU_PILLARS.map(p=>p.name)].map((label,i)=>`<button data-dock="${i-1}" aria-pressed="${i===0}"><span class="dock-dot" aria-hidden="true"></span>${safe(label)}</button>`).join('')}</div>`;
  }else{
    panel.innerHTML=`${modernTop()}<div class="finder-controls"><div class="search-heading"><label for="finder-search" class="search-label">Where would you like to go?</label><button data-finder-clear hidden>Clear</button></div><input type="search" id="finder-search" class="service-search" placeholder="Search pages & services…" autocomplete="off"><div class="finder-filters" role="group" aria-label="Filter services">${['All',...SERVICE_MENU_PILLARS.map(p=>p.name)].map((label,i)=>`<button data-filter="${i-1}" aria-pressed="${i===0}">${safe(label)}</button>`).join('')}</div></div><div id="finder-results" class="drawer-scroll"></div><footer class="finder-footer">${allServicesLink()}</footer>`;
    updateFinder();
  }
}


// Collection 03 expands Option 2's left drawer to 90%, with five service browsing variations.
const refineTop=(withPhone=false)=>`<header class="drawer-top"><a href="index.html" data-demo-link="Home" aria-label="VNW Media home"><img class="refine-logo" src="assets/vnwMedia-LogoBlk.png" alt="VNW Media"></a>${withPhone?'<div class="menu-header-actions"><a class="menu-phone" href="tel:17328200609" aria-label="Call VNW Media at (732) 820-0609"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92z"/></svg></a>':''}<button class="close-menu" data-close aria-label="Close mobile menu">×</button>${withPhone?'</div>':''}</header>`;
const refineFooter=()=>`<footer class="refine-footer">${link(['Let’s talk about your project','contact.html'],'cta')}</footer>`;
const refineSite=(title='')=>`<div class="refine-site">${title?`<h2 class="refine-title">${title}</h2>`:''}${compactNav('compact-nav')}</div>`;
function refineTabs(){return `<div class="refine-tabs" role="tablist" aria-label="Service categories">${SERVICE_MENU_PILLARS.map((p,i)=>`<button role="tab" data-refine-tab="${i}" id="refine-tab-${i}" aria-controls="refine-services" aria-selected="${refineTab===i}" tabindex="${refineTab===i?0:-1}">${safe(p.name)}</button>`).join('')}</div>`;}
function refineContent(){return `${groupsMarkup(SERVICE_MENU_PILLARS[refineTab])}${allServicesLink()}`;}
function refineServicePanel(){return `<section id="refine-services" class="drawer-scroll" role="tabpanel" aria-labelledby="refine-tab-${refineTab}">${refineContent()}</section>`;}
function focusCategories(backwards=false){
  if(refineLevel===-1)return `<div class="refine-step ${backwards?'backwards':''}"><p class="menu-kicker">OUR SERVICES</p><h2 class="refine-title">What’s your next move?</h2><div class="refine-cards">${SERVICE_MENU_PILLARS.map((p,i)=>`<button data-refine-category="${i}"><span class="refine-number" aria-hidden="true">0${i+1}</span><span><strong>${safe(p.name)}</strong><small>${safe(p.description)}</small></span><span class="arrow" aria-hidden="true">→</span></button>`).join('')}</div>${allServicesLink()}</div>`;
  const p=SERVICE_MENU_PILLARS[refineLevel];return `<div class="refine-step"><button class="refine-back" data-refine-back>← Back to categories</button><h2 class="refine-title">${safe(p.name)}.</h2>${groupsMarkup(p)}${allServicesLink()}</div>`;
}
function showFocusCategories(backwards=false){
  const content=panel.querySelector('#refine-focus');content.innerHTML=focusCategories(backwards);content.scrollTop=0;
  const focus=backwards?content.querySelector(`[data-refine-category="${refineTab}"]`):content.querySelector('[data-refine-back]');focus?.focus({preventScroll:true});
}
function changeRefineTab(index,focus=false){
  refineTab=index;
  panel.querySelectorAll('[data-refine-tab]').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;if(focus&&i===index)b.focus();});
  const content=panel.querySelector('#refine-services');content.innerHTML=refineContent();content.setAttribute('aria-labelledby',`refine-tab-${index}`);content.scrollTop=0;
}
function updateRefineSearch(){
  const query=panel.querySelector('#refine-search').value.trim().toLowerCase();
  panel.querySelector('[data-refine-clear]').hidden=!query;
  const browsing=panel.querySelector('#refine-services');const results=panel.querySelector('#refine-results');
  panel.querySelector('.refine-tabs').hidden=!!query;browsing.hidden=!!query;results.hidden=!query;
  if(!query){results.innerHTML='';return;}
  const matches=allServices.filter(([label])=>label.toLowerCase().includes(query));
  results.innerHTML=`<p class="result-count" role="status">${matches.length} service${matches.length===1?'':'s'} found · all categories</p>${matches.length?`<div class="result-links">${matches.map(item=>link(item)).join('')}</div>`:'<p class="empty-search">No matches.<small>Try “SEO,” “web,” or “email.”</small></p>'}${allServicesLink()}`;results.scrollTop=0;
}
function renderRefinements(){
  refineTab=0;refineLevel=-1;
  if(selected===11){panel.innerHTML=`${refineTop()}${refineSite('Explore.')}<p class="refine-label">OUR SERVICES</p>${refineTabs()}${refineServicePanel()}${refineFooter()}`;}
  else if(selected===12){panel.innerHTML=`${refineTop()}<div class="drawer-scroll">${refineSite('Let’s get you there.')}<p class="menu-kicker">OUR SERVICES</p><div class="refine-stack">${accordions('refinement-stack')}</div>${allServicesLink()}</div>${refineFooter()}`;}
  else if(selected===13){panel.innerHTML=`${refineTop()}${refineSite()}<p class="refine-label">OUR SERVICES</p>${refineServicePanel()}<div class="refine-thumb">${refineTabs()}</div>${refineFooter()}`;}
  else if(selected===14){panel.innerHTML=`${refineTop()}${refineSite()}<div id="refine-focus" class="drawer-scroll">${focusCategories()}</div>${refineFooter()}`;}
  else{panel.innerHTML=`${refineTop()}${refineSite()}<div class="refine-search-wrap"><div class="search-heading"><label class="search-label" for="refine-search">Find a service</label><button data-refine-clear hidden>Clear</button></div><input id="refine-search" class="service-search" type="search" placeholder="Search all services…" autocomplete="off"></div>${refineTabs()}${refineServicePanel()}<div id="refine-results" class="drawer-scroll" hidden></div>${refineFooter()}`;}
}

function twoASearchMarkup(){
  return `<div class="two-a-search"><div class="search-heading"><label class="search-label" for="two-a-search">Find a service</label><button data-clear-two-a hidden>Clear</button></div><input id="two-a-search" class="service-search" type="search" placeholder="Search all services…" autocomplete="off" aria-controls="two-a-results"></div>`;
}
function updateTwoASearch(){
  const query=panel.querySelector('#two-a-search').value.trim().toLowerCase();
  panel.querySelector('[data-clear-two-a]').hidden=!query;
  panel.querySelector('#two-a-browse').hidden=!!query;
  const results=panel.querySelector('#two-a-results');results.hidden=!query;
  if(!query){results.innerHTML='';return;}
  const matches=allServices.filter(([label])=>label.toLowerCase().includes(query));
  results.innerHTML=`<p class="result-count" role="status">${matches.length} service${matches.length===1?'':'s'} found · all categories</p>${matches.length?`<div class="result-links">${matches.map(item=>link(item)).join('')}</div>`:'<p class="empty-search">No services found.<small>Try “SEO,” “website,” or “email.”</small></p>'}${allServicesLink()}`;
}
function renderPanel(){
  if(selected>=11){renderRefinements();return;}
  if(selected>=6){renderModern();return;}
  journeyLevel='home';journeyPillar=0;tabIndex=0;railIndex=0;
  if(selected===1){
    panel.innerHTML=`${top()}<div class="drawer-scroll"><p class="menu-kicker">GOOD THINGS START HERE</p><h2 class="drawer-intro">Let’s make<br><em>your next move.</em></h2><nav class="nav-list" aria-label="Main navigation">${mainLinks.slice(0,2).map(item=>link(item)).join('')}<button class="service-launch" data-services-toggle aria-expanded="true" aria-controls="drawer-services">Services <span class="arrow" aria-hidden="true">−</span></button><div class="services-nest" id="drawer-services">${accordions('right-drawer-services')}${allServicesLink()}</div>${mainLinks.slice(2).map(item=>link(item)).join('')}</nav></div>${footer()}`;
  }else if(selected===2||selected==='2A'){
    panel.innerHTML=`${refineTop(true)}<div class="drawer-scroll"><h2 class="drawer-title">Let’s get you there.</h2>${compactNav('compact-nav')}${selected==='2A'?`${twoASearchMarkup()}<div id="two-a-browse">${tabsMarkup()}${allServicesLink()}</div><div id="two-a-results" hidden></div>`:`<p class="menu-kicker">OUR SERVICES</p>${tabsMarkup()}${allServicesLink()}`}</div>${footer()}`;
  }else if(selected===3){
    panel.innerHTML=`${top()}<div class="drawer-scroll" id="journey-content">${journeyMarkup()}</div>${footer()}`;
  }else if(selected===4){
    panel.innerHTML=`<div class="sheet-handle" aria-hidden="true"></div>${top()}<div class="drawer-scroll"><h2 class="drawer-title">What can we help with?</h2>${compactNav('quick-nav')}<div class="search-heading"><label class="search-label" for="service-search">Find a service</label><button data-clear-search hidden>Clear</button></div><input id="service-search" class="service-search" type="search" placeholder="Try SEO, website, email…" autocomplete="off"><div id="search-results">${accordions('sheet-services')}${allServicesLink()}</div></div>${footer()}`;
  }else{
    panel.innerHTML=`<div class="split-rail" role="tablist" aria-label="Navigation sections" aria-orientation="vertical"><span class="rail-logo" aria-hidden="true">VNW</span>${['Explore',...SERVICE_MENU_PILLARS.map(p=>p.name)].map((label,i)=>`<button role="tab" id="rail-tab-${i}" aria-selected="${i===0}" tabindex="${i===0?0:-1}" aria-controls="rail-content" data-rail="${i}"><b aria-hidden="true">${i===0?'⌂':String(i).padStart(2,'0')}</b>${safe(label)}</button>`).join('')}</div><div class="split-main">${top()}<div id="rail-content" class="drawer-scroll" role="tabpanel" aria-labelledby="rail-tab-0">${railContent(0)}</div>${footer()}</div>`;
  }
}
function openMenu(focus=true){
  clearTimeout(closeTimer);clearTimeout(receiptTimer);clearTimeout(openFocusTimer);cancelAnimationFrame(openFrame);
  overlay.hidden=false;destination.hidden=true;panel.inert=false;sitePreview.inert=true;
  isOpen=true;trigger.setAttribute('aria-expanded','true');
  // Establish the offscreen position without scrolling to a moving control.
  if(selected==='2A'){screen.scrollLeft=0;void panel.offsetWidth;}
  openFrame=requestAnimationFrame(()=>{openFrame=requestAnimationFrame(()=>{
    if(!isOpen)return;
    screen.classList.add('is-open');
    if(focus){
      if(selected==='2A')openFocusTimer=setTimeout(()=>{if(isOpen)panel.querySelector('[data-close]').focus({preventScroll:true});},matchMedia('(prefers-reduced-motion:reduce)').matches?0:500);
      else panel.querySelector('[data-close]').focus({preventScroll:true});
    }
  });});
}
function closeMenu(restoreFocus=true){
  clearTimeout(replayTimer);cancelAnimationFrame(openFrame);clearTimeout(openFocusTimer);clearTimeout(closeTimer);
  isOpen=false;screen.classList.remove('is-open');trigger.setAttribute('aria-expanded','false');
  panel.inert=true;sitePreview.inert=false;
  closeTimer=setTimeout(()=>{if(!isOpen)overlay.hidden=true;},500);
  if(restoreFocus)trigger.focus({preventScroll:true});
}
function selectConcept(id,animate=true){
  id=normalizeConceptId(id);
  closeMenu(false);clearTimeout(receiptTimer);destination.hidden=true;
  selected=id;screen.dataset.option=String(id);screen.classList.toggle('refined-drawer',id>=11);renderPanel();
  document.querySelectorAll('[data-concept]').forEach(b=>b.setAttribute('aria-pressed',String(normalizeConceptId(b.dataset.concept)===id)));
  setCollection(collectionFor(id));
  const c=concepts.find(c=>c.id===id);
  document.querySelector('#detail-number').textContent=`CONCEPT ${String(id).padStart(2,'0')} / ${c.short.toUpperCase()}`;
  document.querySelector('#detail-title').textContent=c.title;
  document.querySelector('#detail-description').textContent=c.description;
  document.querySelector('#detail-tags').innerHTML=c.tags.map(t=>`<span>${safe(t)}</span>`).join('');
  document.querySelector('#detail-try').textContent=c.try;
  document.querySelector('#motion-caption').textContent=c.motion;
  document.querySelector('#interaction-note').textContent=c.instruction;
  document.querySelector('#demo-select').value=String(id);
  history.replaceState(null,'',`${location.pathname}${location.search}#option-${id}`);
  if(animate)openMenu(false);
}
function updateJourney(backwards=false){
  panel.querySelector('.drawer-top').outerHTML=top(journeyLevel!=='home');
  const content=panel.querySelector('#journey-content');content.innerHTML=journeyMarkup(backwards);content.scrollTop=0;
  (panel.querySelector('[data-back]')||panel.querySelector('[data-close]')).focus({preventScroll:true});
}
function journeyBack(){
  if(journeyLevel==='pillar')journeyLevel='services';else journeyLevel='home';
  updateJourney(true);
}
function changeTab(index,rail=false,focus=false){
  const attr=rail?'rail':'tab';
  panel.querySelectorAll(`[data-${attr}]`).forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;if(focus&&i===index)b.focus();});
  const content=panel.querySelector(rail?'#rail-content':'#service-tab-panel');
  content.innerHTML=rail?railContent(index):tabContent(index);
  content.setAttribute('aria-labelledby',`${rail?'rail':'service'}-tab-${index}`);content.scrollTop=0;
  if(rail)railIndex=index;else tabIndex=index;
}
function showDestination(anchor){
  const label=anchor.dataset.demoLink,href=anchor.getAttribute('href');const wasOpen=isOpen;
  closeMenu();clearTimeout(receiptTimer);
  destination.innerHTML=`<button data-dismiss-receipt aria-label="Dismiss destination preview">×</button><small>DESTINATION PREVIEW</small><strong>${safe(label)}</strong><a href="${safe(href)}" target="_blank" rel="noopener">Open page ↗</a>`;
  receiptTimer=setTimeout(()=>{destination.hidden=false;},wasOpen?500:0);
}
function setFullDemo(full){
  document.body.classList.toggle('full-demo',full);panel.setAttribute('aria-modal',String(full));
  const url=new URL(location.href);if(full)url.searchParams.set('demo','1');else url.searchParams.delete('demo');
  history.replaceState(null,'',`${url.pathname}${url.search}${url.hash}`);
  if(isOpen)panel.querySelector('[data-close]').focus({preventScroll:true});else trigger.focus({preventScroll:true});
}
const collectionFor=id=>id>=11?'refined':id>=6?'new':'original';
function setCollection(collection){
  document.querySelectorAll('[data-collection]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.collection===collection)));
  document.querySelectorAll('[data-concept]').forEach(b=>{b.hidden=collectionFor(normalizeConceptId(b.dataset.concept))!==collection;});
}
document.querySelector('.collection-switch').addEventListener('click',e=>{const b=e.target.closest('[data-collection]');if(b)selectConcept({refined:11,new:6,original:1}[b.dataset.collection]);});
document.querySelector('#compare-baseline').addEventListener('click',()=>selectConcept(2));
document.querySelector('#concept-list').innerHTML=concepts.map(c=>`<button class="concept-button" data-concept="${c.id}" aria-pressed="false"><span class="mini mini-${c.id}" aria-hidden="true"></span><span><strong>${String(c.id).padStart(2,'0')} / ${safe(c.short)}</strong><small>${safe(c.hint)}</small></span><span class="concept-arrow" aria-hidden="true">↗</span></button>`).join('');
document.querySelector('#demo-select').innerHTML=concepts.map(c=>`<option value="${c.id}">${String(c.id).padStart(2,'0')} / ${safe(c.short)}</option>`).join('');
document.querySelector('#concept-list').addEventListener('click',e=>{const b=e.target.closest('[data-concept]');if(b)selectConcept(b.dataset.concept);});
document.querySelector('#demo-select').addEventListener('change',e=>selectConcept(e.target.value));
document.querySelector('.width-options').addEventListener('click',e=>{const b=e.target.closest('[data-width]');if(!b)return;document.querySelector('#phone').style.setProperty('--device-width',`${b.dataset.width}px`);document.querySelectorAll('[data-width]').forEach(button=>button.setAttribute('aria-pressed',String(button===b)));});
document.querySelector('#full-demo').addEventListener('click',()=>setFullDemo(true));
document.querySelector('#exit-demo').addEventListener('click',()=>setFullDemo(false));
document.querySelector('#replay').addEventListener('click',()=>{closeMenu(false);replayTimer=setTimeout(()=>{renderPanel();openMenu();},520);});
trigger.addEventListener('click',()=>openMenu());
overlay.addEventListener('click',()=>closeMenu());
screen.addEventListener('click',e=>{
  if(Date.now()<suppressClickUntil){e.preventDefault();return;}
  const a=e.target.closest('[data-demo-link]');if(a){e.preventDefault();showDestination(a);return;}
  if(e.target.closest('[data-dismiss-receipt]')){destination.hidden=true;trigger.focus();}
});
panel.addEventListener('click',e=>{
  if(Date.now()<suppressClickUntil){e.preventDefault();return;}
  const b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-close'))closeMenu();
  else if(b.hasAttribute('data-clear-two-a')){const input=panel.querySelector('#two-a-search');input.value='';updateTwoASearch();input.focus();}
  else if(b.hasAttribute('data-refine-tab'))changeRefineTab(Number(b.dataset.refineTab));
  else if(b.hasAttribute('data-refine-category')){refineLevel=Number(b.dataset.refineCategory);refineTab=refineLevel;showFocusCategories();}
  else if(b.hasAttribute('data-refine-back')){refineLevel=-1;showFocusCategories(true);}
  else if(b.hasAttribute('data-refine-clear')){panel.querySelector('#refine-search').value='';updateRefineSearch();panel.querySelector('#refine-search').focus();}
  else if(b.hasAttribute('data-modern-view')){modernView='services';if(selected===9){modernPillar=0;}updateModern();if(selected===9)panel.querySelector('[data-dock="0"]').focus();}
  else if(b.hasAttribute('data-modern-pillar')){modernView='pillar';modernPillar=Number(b.dataset.modernPillar);updateModern();}
  else if(b.hasAttribute('data-modern-back')){modernView=modernView==='pillar'?'services':'main';updateModern(true);}
  else if(b.hasAttribute('data-switch')){modernView=b.dataset.switch;updateModern();}
  else if(b.hasAttribute('data-modern-tab'))changeModernTab(Number(b.dataset.modernTab));
  else if(b.hasAttribute('data-dock')){modernPillar=Number(b.dataset.dock);updateModern();}
  else if(b.hasAttribute('data-filter')){finderFilter=Number(b.dataset.filter);updateFinder();}
  else if(b.hasAttribute('data-finder-clear')||b.hasAttribute('data-finder-reset')){panel.querySelector('#finder-search').value='';if(b.hasAttribute('data-finder-reset'))finderFilter=-1;updateFinder();panel.querySelector('#finder-search').focus();}
  else if(b.hasAttribute('data-services-toggle')){const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));panel.querySelector('#drawer-services').hidden=!open;b.querySelector('.arrow').textContent=open?'−':'+';}
  else if(b.hasAttribute('data-journey')){journeyLevel='services';updateJourney();}
  else if(b.hasAttribute('data-pillar')){journeyLevel='pillar';journeyPillar=Number(b.dataset.pillar);updateJourney();}
  else if(b.hasAttribute('data-back'))journeyBack();
  else if(b.hasAttribute('data-tab'))changeTab(Number(b.dataset.tab));
  else if(b.hasAttribute('data-rail'))changeTab(Number(b.dataset.rail),true);
  else if(b.hasAttribute('data-clear-search')){const input=panel.querySelector('#service-search');input.value='';updateSearch('');input.focus();}
});
function updateSearch(value){
  const query=value.trim().toLowerCase();const results=panel.querySelector('#search-results');
  panel.querySelector('[data-clear-search]').hidden=!query;
  if(!query){results.innerHTML=`${accordions('sheet-services')}${allServicesLink()}`;return;}
  const matches=allServices.filter(([label])=>label.toLowerCase().includes(query));
  results.innerHTML=`<p class="result-count" role="status">${matches.length} service${matches.length===1?'':'s'} found</p>${matches.length?`<div class="result-links">${matches.map(item=>link(item)).join('')}</div>`:'<p class="empty-search">No matches yet.<small>Try “SEO,” “web,” or “email.”</small></p>'}${allServicesLink()}`;
}
for(const eventName of ['input','change','search'])panel.addEventListener(eventName,e=>{if(e.target.id==='service-search')updateSearch(e.target.value);if(e.target.id==='finder-search')updateFinder();if(e.target.id==='refine-search')updateRefineSearch();if(e.target.id==='two-a-search')updateTwoASearch();});
function changeModernTab(index,focus=false){
  modernPillar=index;
  panel.querySelectorAll('[data-modern-tab]').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;if(focus&&i===index)b.focus();});
  const content=panel.querySelector('#modern-services');content.innerHTML=groupsMarkup(SERVICE_MENU_PILLARS[index]);content.setAttribute('aria-labelledby',`modern-tab-${index}`);
  panel.querySelector('#modern-content').scrollTop=0;
}
panel.addEventListener('keydown',e=>{
  const refineButton=e.target.closest('[data-refine-tab]');
  if(refineButton){let index=refineTab;if(e.key==='ArrowRight')index=(index+1)%3;else if(e.key==='ArrowLeft')index=(index+2)%3;else if(e.key==='Home')index=0;else if(e.key==='End')index=2;else return;e.preventDefault();changeRefineTab(index,true);return;}

  const modernTab=e.target.closest('[data-modern-tab]');
  if(modernTab){let index=modernPillar;if(e.key==='ArrowRight')index=(index+1)%3;else if(e.key==='ArrowLeft')index=(index+2)%3;else if(e.key==='Home')index=0;else if(e.key==='End')index=2;else return;e.preventDefault();changeModernTab(index,true);return;}

  const b=e.target.closest('[role="tab"]');if(!b)return;
  const rail=b.hasAttribute('data-rail');const count=rail?4:3;let index=rail?railIndex:tabIndex;
  if(e.key===(rail?'ArrowDown':'ArrowRight'))index=(index+1)%count;
  else if(e.key===(rail?'ArrowUp':'ArrowLeft'))index=(index+count-1)%count;
  else if(e.key==='Home')index=0;else if(e.key==='End')index=count-1;else return;
  e.preventDefault();changeTab(index,rail,true);
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&isOpen){e.preventDefault();closeMenu();return;}
  if(e.key!=='Tab'||!isOpen||!document.body.classList.contains('full-demo'))return;
  const focusable=Array.from(panel.querySelectorAll('a,button,input,summary,[tabindex="0"]')).filter(el=>el.tabIndex>=0&&!el.hidden&&el.getClientRects().length);
  const first=focusable[0],last=focusable[focusable.length-1];
  if(e.shiftKey&&(document.activeElement===first||!panel.contains(document.activeElement))){e.preventDefault();last?.focus();}
  else if(!e.shiftKey&&(document.activeElement===last||!panel.contains(document.activeElement))){e.preventDefault();first?.focus();}
});
panel.addEventListener('pointerdown',e=>{if(e.target.closest('input'))return;swipeStart={x:e.clientX,y:e.clientY,sheet:!!e.target.closest('.sheet-handle')};});
panel.addEventListener('pointercancel',()=>swipeStart=null);
panel.addEventListener('pointerup',e=>{
  if(!swipeStart||!isOpen)return;const dx=e.clientX-swipeStart.x,dy=e.clientY-swipeStart.y;
  const horizontal=Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.5;
  const dismiss=([1,'2A',8].includes(selected)&&horizontal&&dx>0)||(([2,5].includes(selected)||selected>=11)&&horizontal&&dx<0)||([4,9].includes(selected)&&swipeStart.sheet&&dy>60&&dy>Math.abs(dx));
  if(dismiss){suppressClickUntil=Date.now()+350;closeMenu();}
  else if([6,7].includes(selected)&&horizontal&&dx>0){suppressClickUntil=Date.now()+350;if(modernView==='main')closeMenu();else{modernView=modernView==='pillar'?'services':'main';updateModern(true);}}
  else if(selected===3&&horizontal&&dx>0){suppressClickUntil=Date.now()+350;if(journeyLevel==='home')closeMenu();else journeyBack();}
  swipeStart=null;
});
window.addEventListener('hashchange',()=>{const id=readConceptHash();if(id!==selected)selectConcept(id);});
selectConcept(selected,false);
if(new URLSearchParams(location.search).get('demo')==='1')setFullDemo(true);

})();
