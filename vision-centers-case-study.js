(()=>{
  if(document.body.dataset.page!=='case-vision-centers')return;
  const locations=[
    ['Nassau Fulton Vision Center','https://nassaufultonvisioncenter.com/','nassau'],
    ['Broadway Vision at 170th','https://www.broadwayvisionnyc.com/','broadway'],
    ['Absolute Vision Center','https://www.absolutevisioncenter.com/','absolute'],
    ['American Vision Center','https://www.americanvisioncenterqueens.com/','american']
  ];
  const hero=document.querySelector('.scm-ms-hero');
  const target=document.querySelector('.scm-ms-signals');
  if(!hero||!target)return;
  const ticker=document.createElement('section');
  ticker.className='trust-strip';ticker.dataset.navTheme='dark';
  ticker.setAttribute('aria-label','Vision Centers services provided by VNW Media');
  ticker.innerHTML='<div class="trust-track"><small>Vision Centers</small><i aria-hidden="true"></i><span>Google Business Profile Management</span><span>Organic SEO</span><span>Reputation Management</span></div>';
  hero.after(ticker);
  target.classList.add('lr-results');target.dataset.layout='3';
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">CONFIRMED SERVICE SCOPE</p><strong>4<span>websites · 4 locations</span></strong><h2>A local search strategy for every vision center.</h2><p>Google Business Profile, organic SEO, and reputation management across all four locations.</p><a href="../contact.html" class="pill pill-blue">Discuss your locations ↗</a></aside><div><div class="lr-heading"><p class="section-tag">THE FOUR VISION CENTERS</p><h2>Distinct practices. Connected support.</h2></div><div class="lr-grid">${locations.map((x,i)=>`<article class="lr-metric"><span class="lr-index">0${i+1}</span><img src="../assets/vision-centers-${x[2]}.jpg" alt="${x[0]} website" width="1440" height="960" loading="lazy" style="display:block;width:100%;height:auto"><h3>${x[0]}</h3><p>Google Business Profile · Organic SEO · Reputation Management</p><a class="scm-ms-inline-cta" href="${x[1]}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${x[0]} website">Visit website ↗</a></article>`).join('')}</div></div></div></div>`;
})();
