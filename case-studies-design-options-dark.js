/* Dark collection 31–35: existing clients and confirmed service scope only. */
const darkDirections = [
 ['After Hours','A cinematic, full-image hero followed by alternating photographic project chapters.'],
 ['The Contrast Report','A bold typographic cover and architectural problem / solution dossiers.'],
 ['In the Spotlight','A dark gallery hero with three client spotlights and blue service ribbons.'],
 ['The Split Narrative','An asymmetric photographic opening with alternating split-screen case stories.'],
 ['The Night Edition','An editorial cover story, a compact client index, and magazine-style project reports.']
];
const darkSolutions = [
 'We provide web design, SEO, Google Business Profile Management, Google Business Profile Search Ads, PPC, and GEO.',
 'We provide SEO for 11 locations, Google Business Profile Management, and Google Business Profile Search Ads to support local restaurant discovery.',
 'We provided web design/redesign, SEO, and PPC to support local visibility and plumbing inquiries across the business’s service offering.'
];
function darkTicker(p) {
 const items = p.services.map(s=>`<span>${serviceLabel(p,s)}</span>`).join('');
 return `<div class="dc-ticker" aria-label="Services provided for ${p.name}"><div class="dc-ticker-label">${p.name}<small>SERVICES PROVIDED</small></div><div class="dc-ticker-window"><div class="dc-ticker-track"><div>${items}</div><div aria-hidden="true">${items}</div><div aria-hidden="true">${items}</div><div aria-hidden="true">${items}</div></div></div><button type="button" data-dc-pause aria-pressed="false" aria-label="Pause services ticker for ${p.name}">Pause</button></div>`;
}
function darkBrief(p,i) {
 return `<div class="dc-brief"><section><p class="eyebrow">01 / THE PROBLEM</p><h3>${p.focus}.</h3><p>${p.challenge}</p></section><section><p class="eyebrow">02 / THE SOLUTION</p><h3>Connect the right services.</h3><p>${darkSolutions[i]}</p><p class="dc-direction">Strategic focus: ${p.approach}</p></section></div>`;
}
function darkCase(p,i) {
 return `<article class="dc-case dc-case-${i}" id="dc-case-${i}"><div class="wrap"><header class="dc-case-heading"><div><p class="eyebrow">CASE ${nn(i)} / ${p.industry}</p><h2>${p.name}</h2></div><p>${p.business}</p></header><div class="dc-case-visual">${image(p)}<span>${p.headline}</span></div></div>${darkTicker(p)}<div class="wrap">${darkBrief(p,i)}<div class="dc-case-bottom"><div><p class="eyebrow">THE CUSTOMER ACTION</p><p>${p.action}</p></div><div><p class="eyebrow">THE DETAILS THAT MATTER</p><p>${p.notes.join(' ')}</p></div>${read(p)}</div></div></article>`;
}
function darkIndex() {return `<nav class="dc-index wrap" aria-label="Explore the three client stories">${projects.map((p,i)=>`<a href="#dc-case-${i}"><span>${nn(i)}</span>${p.name}<span aria-hidden="true">↗</span></a>`).join('')}</nav>`;}
function darkHero(mode) {
 const titles=['Real businesses.<br><em>Work with purpose.</em>','The challenge.<br>The thinking.<br><em>The work.</em>','Good work.<br><em>In a different light.</em>','Behind the work.<br><em>A business to move forward.</em>','The night edition.<br><em>Clarity in focus.</em>'];
 const copy='Explore the business challenge, the services we provided, and the customer decision behind each project.';
 return `<section class="dc-hero dc-hero-${mode}">${mode===0?image(projects[1]):''}<div class="wrap dc-hero-grid"><div class="dc-hero-copy"><p class="eyebrow">VNW MEDIA / SELECTED CASE STUDIES</p><h2>${titles[mode]}</h2><p>${copy}</p>${button('Explore the case studies','#dc-case-0')}</div>${mode===1?'<div class="dc-cover-note"><span>03</span><p>CLIENT PERSPECTIVES</p><p>Different markets.<br>Specific service choices.<br>A clearer next step.</p></div>':mode===2?`<div class="dc-hero-gallery">${projects.map((p,i)=>`<a href="#dc-case-${i}">${image(p)}<span>${nn(i)} / ${p.name}</span></a>`).join('')}</div>`:mode===3?`<div class="dc-hero-pair">${image(projects[0])}${image(projects[2])}</div>`:mode===4?`<a class="dc-cover-story" href="#dc-case-1">${image(projects[1])}<span>THE COVER STORY / LA ROSA CHICKEN AND GRILL</span></a>`:''}</div></section>`;
}
function darkRender(mode) {
 return `<div class="dc-design dc-design-${mode}">${darkHero(mode)}${darkIndex()}${projects.map(darkCase).join('')}<section class="dc-perspective"><div class="wrap"><p class="eyebrow">READ THE WORK WITH CONTEXT</p><h2>A service list tells you what.<br>The brief helps explain <em>why.</em></h2><div><p>These stories describe client context and the services provided. Customer actions are project priorities—not reported performance results.</p><p>For your business, we’ll discuss a relevant scope, what to measure, and how to evaluate progress. We don’t assume that the same service mix fits every client.</p></div>${button('Discuss your business priorities')}</div></section></div>`;
}
const darkRenderers = [0,1,2,3,4].map(mode=>()=>darkRender(mode));
function bindDarkCases() {
 document.querySelector('#preview').addEventListener('click',e=>{
  const b=e.target.closest('[data-dc-pause]');if(!b)return;
  const paused=b.getAttribute('aria-pressed')!=='true';
  b.setAttribute('aria-pressed',String(paused));b.textContent=paused?'Play':'Pause';
  b.closest('.dc-ticker').classList.toggle('dc-paused',paused);
  b.setAttribute('aria-label',`${paused?'Play':'Pause'} services ticker`);
 });
}
