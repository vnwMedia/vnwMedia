(()=>{
  if(document.body.dataset.page !== 'case-la-rosa-chicken-grill') return;
  const hero=document.querySelector('.scm-ms-hero');
  const target=document.querySelector('.scm-ms-signals');
  if(!hero || !target) return;
  const ticker=document.createElement('section');
  ticker.className='trust-strip';
  ticker.dataset.navTheme='dark';
  ticker.setAttribute('aria-label','La Rosa services provided by VNW Media');
  ticker.innerHTML='<div class="trust-track"><small>La Rosa Chicken and Grill</small><i aria-hidden="true"></i><span>SEO for 11 locations</span><span>Google Business Profile Management</span><span>Google Business Profile Search Ads</span><span>Reputation Management</span></div>';
  hero.after(ticker);
  target.classList.add('lr-results');
  target.dataset.layout='3';
  const metrics=[['Accounts reached','Reporting to be added'],['Profile visits','Reporting to be added'],['Total views','Reporting to be added'],['Local rank','Ranking data to be added']];
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">CONFIRMED SERVICE SCOPE</p><strong>11<span>locations</span></strong><h2>A local search strategy for every restaurant.</h2><p>SEO for 11 locations, Google Business Profile Management, Google Business Profile Search Ads, and Reputation Management.</p><a href="../contact.html" class="pill pill-blue">Discuss your locations ↗</a></aside><div><div class="lr-heading"><p class="section-tag">LA ROSA CHICKEN AND GRILL</p><h2>Discovery. Interest. Visibility.</h2></div><div class="lr-grid">${metrics.map((m,i)=>`<article class="lr-metric lr-metric-${i}"><span class="lr-index">0${i+1}</span><strong aria-label="Not yet available">—</strong><h3>${m[0]}</h3><p>${m[1]}</p></article>`).join('')}</div></div></div><p class="lr-footnote">Performance figures are not yet published. This case study documents our confirmed service scope; verified results and reporting periods will be added when available.</p></div>`;
})();
