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
  // Client-supplied report totals; results cover Old Bridge and Tinton Falls only.
  const metrics=[
    ['93,837','Impressions','Google Search Ad Reach','Google Business Profile Search Ads','Old Bridge + Tinton Falls'],
    ['1,325','Website Clicks','Website Visits from GBP','From Google Business Profiles','534 Old Bridge + 791 Tinton Falls'],
    ['29,736','Profile Views','Google Business Profile Views','Google Business Profile Organic','16,663 Old Bridge + 13,073 Tinton Falls'],
    ['TOP 3','Local Rankings','Local Google Rankings','Old Bridge: all 10 tracked keywords are #1','Tinton Falls: all 10 are Top 3, with 7 at #1']
  ];
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">CONFIRMED SERVICE SCOPE</p><strong>11<span>locations</span></strong><h2>A local search strategy for every restaurant.</h2><p>SEO for 11 locations, Google Business Profile Management, Google Business Profile Search Ads, and Reputation Management.</p><a href="../contact.html" class="pill pill-blue">Discuss your locations ↗</a></aside><div><div class="lr-heading"><p class="section-tag">RESULTS / OLD BRIDGE + TINTON FALLS</p><h2>Discovery. Interest. Visibility.</h2></div><div class="lr-grid">${metrics.map((m,i)=>`<article class="lr-metric lr-metric-${i}"><span class="lr-index">0${i+1}</span><strong>${m[0]}</strong><span class="lr-metric-unit">${m[1]}</span><h3>${m[2]}</h3><p>${m[3]}</p><p class="lr-metric-detail">${m[4]}</p></article>`).join('')}</div></div></div><p class="lr-footnote">Results shown cover Old Bridge and Tinton Falls only. Rankings refer to 10 tracked keywords per location; they do not represent all 11 locations in our SEO scope.</p></div>`;
})();
