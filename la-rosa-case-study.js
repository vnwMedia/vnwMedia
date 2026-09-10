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
  // Illustrative placeholders only. Replace values and reporting periods with verified client data.
  const metrics=[['+4,314%','Accounts reached','90-day period · reference figure'],['+157%','Profile visits','90-day period · reference figure'],['+4,704%','Total views','90-day period · reference figure'],['TOP 5','Local rank','All 11 locations · 10-mile radius · reference claim']];
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">CONFIRMED SERVICE SCOPE</p><strong>11<span>locations</span></strong><h2>A local search strategy for every restaurant.</h2><p>SEO for 11 locations, Google Business Profile Management, Google Business Profile Search Ads, and Reputation Management.</p><a href="../contact.html" class="pill pill-blue">Discuss your locations ↗</a></aside><div><div class="lr-heading"><p class="section-tag">REFERENCE PERFORMANCE / PENDING VERIFICATION</p><h2>Discovery. Interest. Visibility.</h2></div><div class="lr-grid">${metrics.map((m,i)=>`<article class="lr-metric lr-metric-${i}"><span class="lr-index">0${i+1}</span><strong>${m[0]}</strong><h3>${m[1]}</h3><p>${m[2]}</p></article>`).join('')}</div></div></div><p class="lr-footnote">The 90-day figures require exact start and end dates and a comparison baseline. The rank claim requires the keywords, measurement date, and location coverage.</p></div>`;
})();
