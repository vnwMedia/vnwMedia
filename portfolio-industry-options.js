// Separate design study only; the public Work page does not load this.
const PORTFOLIO_FILTER_INDUSTRIES=[
  {id:'healthcare',label:'Healthcare & Medical',description:'Care providers and medical aesthetics.'},
  {id:'wellness',label:'Beauty & Wellness',description:'Spa and wellness experiences.'},
  {id:'education',label:'Childcare & Education',description:'Learning centers and early education.'},
  {id:'legal',label:'Legal Services',description:'Law firms and legal practices.'},
  {id:'home-services',label:'Home Services',description:'Installation and home improvement.'},
  {id:'hospitality',label:'Catering & Hospitality',description:'Catering and celebration experiences.'},
  {id:'automotive',label:'Automotive',description:'Collision repair and auto services.'},
  {id:'retail',label:'Retail & eCommerce',description:'Products and consumer brands.'},
  {id:'media',label:'Media & Personal Brands',description:'Authors, creators, and broadcasters.'}
];
const PORTFOLIO_FILTER_CLIENT_INDUSTRY={
  'aesthetic-island-nyc':'healthcare',
  'argana-day-spa':'wellness',
  'calvin-schwartz':'media',
  'classical-caterers':'hospitality',
  'genius-kids':'education',
  'new-generation-learning-center':'education',
  'harlem-east-life-plan':'healthcare',
  'jb-body-works':'automotive',
  'mb-law':'legal',
  'prestige-beauty-project':'healthcare'
};
const PORTFOLIO_FILTER_LAYOUTS=[
  {id:'pills',name:'Pill Bar',number:'01',summary:'A familiar, compact filter above the portfolio. The clearest fit for your current page.',recommended:true},
  {id:'sidebar',name:'Industry Menu',number:'02',summary:'A dedicated industry menu beside the work. Useful as the client list grows.'},
  {id:'directory',name:'Industry Directory',number:'03',summary:'A visual entry point that makes the range of industries part of the presentation.'}
];
function portfolioIndustryClients(industry){
  return industry==='all'?PORTFOLIO_REVIEW_CLIENTS:PORTFOLIO_REVIEW_CLIENTS.filter(p=>PORTFOLIO_FILTER_CLIENT_INDUSTRY[p.slug]===industry);
}
function portfolioIndustryCount(industry){return portfolioIndustryClients(industry).length;}
function portfolioIndustryLabel(industry){return industry==='all'?'All industries':PORTFOLIO_FILTER_INDUSTRIES.find(x=>x.id===industry).label;}
function renderPortfolioIndustryFilters(layout,selected){
  const groups=[{id:'all',label:'All industries',description:`Explore all ${PORTFOLIO_REVIEW_CLIENTS.length} proposed clients.`},...PORTFOLIO_FILTER_INDUSTRIES];
  const items=groups.map(group=>{
    const active=group.id===selected,count=portfolioIndustryCount(group.id);
    if(layout==='directory')return `<a class="pif-industry-tile" data-industry="${group.id}" href="?layout=directory&amp;industry=${group.id}" ${active?'aria-current="true"':''}><span class="pif-tile-count">${count}</span><span><strong>${esc(group.label)}</strong><small>${esc(group.description)}</small></span><span class="pif-tile-arrow" aria-hidden="true">↗</span></a>`;
    return `<button type="button" class="pif-filter" data-industry="${group.id}" aria-pressed="${active}"><span>${esc(group.label)}</span><span class="pif-filter-count">${count}</span></button>`;
  }).join('');
  const select=`<label class="pif-mobile-select">Industry<select id="pif-industry-select">${groups.map(group=>`<option value="${group.id}" ${group.id===selected?'selected':''}>${esc(group.label)} (${portfolioIndustryCount(group.id)})</option>`).join('')}</select></label>`;
  return `${layout==='sidebar'?'<p class="pif-menu-title">Browse by industry</p>':''}<nav class="pif-industry-nav" aria-label="Filter clients by industry">${items}</nav>${layout==='sidebar'?select:''}`;
}
function renderPortfolioIndustryCards(industry){
  return portfolioIndustryClients(industry).map(renderPortfolioAdditionCard).join('');
}
function initPortfolioIndustryOptions(){
  const main=document.querySelector('main');if(!main)return;
  const params=new URLSearchParams(location.search);
  let layout=PORTFOLIO_FILTER_LAYOUTS.some(x=>x.id===params.get('layout'))?params.get('layout'):'pills';
  let industry=params.get('industry')||'all';
  if(industry!=='all'&&!PORTFOLIO_FILTER_INDUSTRIES.some(x=>x.id===industry))industry='all';
  main.innerHTML=`<div id="portfolio-filter-options" class="pif-study" data-layout="${layout}"><section class="pif-intro"><div class="shell"><div class="pif-review-line"><span>Portfolio exploration / Review only</span><a href="work.html#page-content">Back to Our Work ↗</a></div><p class="section-tag">Three industry-filter directions</p><h1>Find work in <em>your world.</em></h1><p class="pif-intro-copy">Try an industry to see only the relevant clients. These examples use ${PORTFOLIO_REVIEW_CLIENTS.length} clients from Our Work. This design study does not change the public portfolio layout.</p><div class="pif-layout-options" role="group" aria-label="Choose a filter design">${PORTFOLIO_FILTER_LAYOUTS.map(x=>`<button type="button" data-layout-choice="${x.id}" aria-pressed="${x.id===layout}"><span class="pif-option-number">${x.number}</span><span>${x.name}${x.recommended?'<small>Recommended</small>':''}</span><span class="pif-option-mark" aria-hidden="true">↗</span></button>`).join('')}</div><p class="pif-layout-description" id="pif-layout-description"></p></div></section><section class="pif-portfolio" aria-label="Interactive portfolio filter preview"><div class="shell pif-browser"><div class="pif-controls" id="pif-controls"></div><div class="pif-results"><div class="pif-results-heading"><div><p class="section-tag">Selected work</p><h2 id="pif-results-title">All industries</h2></div><div class="pif-result-meta"><p id="pif-result-count" role="status" aria-live="polite" aria-atomic="true"></p><button type="button" class="pif-clear" data-industry="all" hidden>View all clients ↗</button></div></div><div class="work-grid" id="pif-client-grid"></div></div></div></section></div>`;
  const root=document.getElementById('portfolio-filter-options');
  function updateURL(){const url=new URL(location.href);url.searchParams.set('layout',layout);url.searchParams.set('industry',industry);history.replaceState(null,'',url);}
  function render(){
    root.dataset.layout=layout;
    root.querySelectorAll('[data-layout-choice]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.layoutChoice===layout)));
    root.querySelector('#pif-layout-description').textContent=PORTFOLIO_FILTER_LAYOUTS.find(x=>x.id===layout).summary;
    root.querySelector('#pif-controls').innerHTML=renderPortfolioIndustryFilters(layout,industry);
    const grid=root.querySelector('#pif-client-grid');grid.innerHTML=renderPortfolioIndustryCards(industry);
    // Filtering adds new cards after the shared reveal observer starts.
    grid.querySelectorAll('.reveal').forEach(card=>card.classList.remove('reveal'));
    root.querySelector('#pif-results-title').textContent=portfolioIndustryLabel(industry);
    const count=portfolioIndustryCount(industry);
    root.querySelector('#pif-result-count').textContent=`Showing ${count} of ${PORTFOLIO_REVIEW_CLIENTS.length} clients`;
    root.querySelector('.pif-clear').hidden=industry==='all';
  }
  root.addEventListener('click',event=>{
    const choice=event.target.closest('[data-layout-choice]');
    if(choice){layout=choice.dataset.layoutChoice;render();updateURL();return;}
    const filter=event.target.closest('[data-industry]');if(!filter)return;
    event.preventDefault();industry=filter.dataset.industry;render();updateURL();
    // Keep focus on the equivalent newly rendered filter for keyboard users.
    const equivalent=root.querySelector('.pif-industry-nav [data-industry="'+industry+'"]');
    if(equivalent)equivalent.focus({preventScroll:true});
  });
  root.addEventListener('change',event=>{if(event.target.id==='pif-industry-select'){industry=event.target.value;render();updateURL();root.querySelector('#pif-industry-select').focus({preventScroll:true});}});
  render();
}
initPortfolioIndustryOptions();
