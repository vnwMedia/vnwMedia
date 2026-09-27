(()=>{
  if(document.body.dataset.page!=='case-vision-centers')return;
  // No client-specific performance reports have been supplied.
  const metrics=[
    ['—','Impressions','Visibility in Local Search','Search impressions for the four vision centers.','Reporting data pending'],
    ['—','Website Clicks','Local Discovery Becomes Website Interest','Website clicks from Google Business Profiles across the four locations.','Reporting data pending'],
    ['—','Profile Views','An Organic Search Presence','Google Business Profile views from people discovering the locations locally.','Reporting data pending'],
    ['—','Local Rankings','Local Search Visibility','Location-specific rankings for tracked eye-care search terms.','Reporting data pending']
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
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">CONFIRMED SERVICE SCOPE</p><strong>4<span>websites · 4 locations</span></strong><h2>A local search strategy for every vision center.</h2><p>Google Business Profile, organic SEO, and reputation management across all four locations.</p><a href="../contact.html" class="pill pill-blue">Discuss your locations ↗</a></aside><div><div class="lr-heading"><p class="section-tag">RESULTS / VISION CENTERS</p><h2>Standout visibility. Meaningful interest.</h2></div><div class="lr-grid">${metrics.map((m,i)=>`<article class="lr-metric lr-metric-${i}"><span class="lr-index">0${i+1}</span><strong>${m[0]}</strong><span class="lr-metric-unit">${m[1]}</span><h3>${m[2]}</h3><p>${m[3]}</p><p class="lr-metric-detail">${m[4]}</p></article>`).join('')}</div></div></div></div>`;
  const stage=document.querySelector('.scm-ms-story-stage');
  const locations=[['nassau','Nassau Fulton Vision Center'],['broadway','Broadway Vision at 170th'],['absolute','Absolute Vision Center'],['american','American Vision Center']];
  if(stage){
    stage.classList.add('vision-browser-stack');
    stage.innerHTML=locations.map(([slug,name])=>`<figure class="vision-browser"><div class="vision-browser-bar"><span class="vision-browser-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="vision-browser-address">${name}</span></div><img src="../assets/vision-centers-${slug}.jpg" alt="${name} website in a browser window" width="1440" height="960" loading="lazy"></figure>`).join('');
    const caption=stage.parentElement.querySelector(':scope > figcaption');
    if(caption)caption.innerHTML='<span>Vision Centers</span><span>Four locations. Four websites.</span>';
  }
})();
