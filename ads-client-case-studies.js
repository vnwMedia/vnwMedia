(()=>{
  const clients={'case-nycadsco':['NYCADSCO','New York City'],'case-sfadsco':['SFADSCO','San Francisco']};
  const client=clients[document.body.dataset.page];
  if(!client)return;
  const [name,city]=client,hero=document.querySelector('.scm-ms-hero'),target=document.querySelector('.scm-ms-signals');
  if(!hero||!target)return;
  const ticker=document.createElement('section');ticker.className='trust-strip';ticker.dataset.navTheme='dark';ticker.setAttribute('aria-label',name+' services provided by VNW Media');
  ticker.innerHTML=`<div class="trust-track"><small>${name}</small><i aria-hidden="true"></i><span>SEO</span><span>PPC</span><span>Google Business Profile Organic Management</span><span>Reputation Management</span></div>`;hero.after(ticker);
  const metrics=[['Ad Impressions','Exposure in Paid Search','PPC impressions from relevant advertising-service searches.'],['Website Clicks','Search Interest Becomes Website Visits','Website clicks reported through the client’s search and profile reporting.'],['Profile Views','An Organic Local Presence','Organic Google Business Profile views for this business.'],['Local Rankings','Visibility for Relevant Searches','Location-specific rankings for tracked advertising-service search terms.']];
  target.classList.add('lr-results');target.dataset.layout='3';
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">CONFIRMED SERVICE SCOPE</p><strong>4<span>connected services</span></strong><h2>A connected search strategy for ${city}.</h2><p>SEO, PPC, Google Business Profile organic management, and reputation management for ${name}.</p><a href="../contact.html" class="pill pill-blue">Discuss your business ↗</a></aside><div><div class="lr-heading"><p class="section-tag">RESULTS / ${name}</p><h2>Standout visibility. Meaningful interest.</h2></div><div class="lr-grid">${metrics.map((m,i)=>`<article class="lr-metric lr-metric-${i}"><span class="lr-index">0${i+1}</span><strong>—</strong><span class="lr-metric-unit">${m[0]}</span><h3>${m[1]}</h3><p>${m[2]}</p><p class="lr-metric-detail">Reporting data pending</p></article>`).join('')}</div></div></div></div>`;
})();
