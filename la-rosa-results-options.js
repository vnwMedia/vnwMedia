(()=>{
const target=document.querySelector('.scm-ms-signals');
if(!target)return;
const variants=[['The Scope Statement','An oversized location count beside a compact editorial list of the four services.'],['The Service Blueprint','A bold 11-location feature with four individual service panels.'],['The Local Search Story','A numbered service sequence beside the location scope, using the existing VNW blue and dark palette.']];
const metrics=[['SEO','Search engine optimization','SEO for 11 La Rosa locations.'],['GBP','Profile management','Google Business Profile Management.'],['Ads','Paid search','Google Business Profile Search Ads.'],['Trust','Reputation management','Reputation Management for La Rosa Chicken and Grill.']];
const metric=(m,i)=>`<article class="lr-metric lr-metric-${i}"><span class="lr-index">SERVICE 0${i+1}</span><strong>${m[0]}</strong><h3>${m[1]}</h3><p>${m[2]}</p></article>`;
const note=`<div class="lr-note"><b>DESIGN PREVIEW · CONFIRMED VNW PROJECT SCOPE</b><p>These options use our La Rosa service information. No performance or ranking claims are included.</p></div>`;
const toolbar=document.createElement('section');toolbar.className='lr-review';toolbar.setAttribute('aria-label','Compare result designs');toolbar.innerHTML=`<div class="shell"><div class="lr-review-heading"><span>LA ROSA / RESULTS SECTION OPTIONS</span><a href="la-rosa-chicken-grill.html">View current case study ↗</a></div><h2>One client. Three ways to tell the story.</h2><div class="lr-controls" role="group" aria-label="Choose a results layout">${variants.map((v,i)=>`<button type="button" data-lr-option="${i+1}">0${i+1} · ${v[0]}</button>`).join('')}</div><p class="lr-description"></p><a class="lr-jump" href="#results-preview">View selected section ↓</a></div>`;
target.closest('.scm-ms-page').before(toolbar);
target.id='results-preview';target.classList.add('lr-results');
function render(){const n=Number(location.hash.replace('#option-',''));const index=n>=1&&n<=3?n-1:0;toolbar.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));toolbar.querySelector('.lr-description').textContent=variants[index][1];target.dataset.layout=index+1;
const heading=`<div class="lr-heading"><p class="section-tag">LA ROSA CHICKEN AND GRILL</p><h2>${['Local search.<br>At every location.','The services behind<br>the local presence.','One brand.<br>Eleven local opportunities.'][index]}</h2></div>`;
const cards=metrics.map(metric).join('');
const scope=`<aside class="lr-location"><p class="section-tag">OUR SEO SCOPE</p><strong>11<span>locations</span></strong><p>SEO across 11 La Rosa locations, supported by profile management, paid search, and reputation management.</p><div class="lr-service-count"><b>4</b><span>services provided</span></div></aside>`;
target.innerHTML=`<div class="shell">${note}${heading}<div class="lr-location-layout">${scope}<div class="lr-grid">${cards}</div></div><div class="lr-footnote"><span>Project scope, not performance results. Results can be added when VNW reporting is available.</span><a href="../contact.html">Discuss your locations ↗</a></div></div>`;

}
toolbar.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{history.replaceState(null,'','#option-'+b.dataset.lrOption);render();}));addEventListener('hashchange',()=>{if(location.hash.startsWith('#option-'))render();});render();
})();
