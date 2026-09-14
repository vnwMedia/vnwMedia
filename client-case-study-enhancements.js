(()=>{
  const configs={
    'case-brooklyn-motors':{
      name:'Brooklyn Motors', number:'6', unit:'connected services',
      title:'A clear path from local search to collision repair.',
      copy:'Web Design, SEO, Google Business Profile Management, Google Business Profile Search Ads, PPC, and GEO work together to support repair discovery and inquiries in Brooklyn.',
      cta:'Discuss your repair business'
    },
    'case-kypcl':{
      name:'KYPCL', number:'6', unit:'connected services',
      title:'A clearer route from legal search to consultation.',
      copy:'SEO, Google Business Profile, Google Business Search Ads, Reputation Management, Web Design, and Lead Generation. Together, these services support discovery, trust, and consultation inquiries.',
      cta:'Discuss your law firm'
    }
  };
  // Design placeholders copied from La Rosa; not measured results for these clients.
  const metrics=[
    ['93,837','Impressions','Google Search Ad Reach','Google Business Profile Search Ads','Placeholder — client results pending'],
    ['1,325','Website Clicks','Website Visits from GBP','From Google Business Profiles','Placeholder — client results pending'],
    ['29,736','Profile Views','Google Business Profile Views','Google Business Profile Organic','Placeholder — client results pending'],
    ['TOP 3','Local Rankings','Local Google Rankings','Tracked local Google search rankings','Placeholder — client rankings pending']
  ];
  const config=configs[document.body.dataset.page];
  if(!config)return;
  const hero=document.querySelector('.scm-ms-hero');
  const target=document.querySelector('.scm-ms-signals');
  if(!hero||!target)return;
  const ticker=document.createElement('section');
  ticker.className='trust-strip';
  ticker.dataset.navTheme='dark';
  ticker.setAttribute('aria-label',config.name+' services provided by VNW Media');
  const track=document.createElement('div');
  track.className='trust-track';
  const label=document.createElement('small');
  label.textContent=config.name;
  track.append(label);
  const separator=document.createElement('i');
  separator.setAttribute('aria-hidden','true');
  track.append(separator);
  // Use the page's service navigation so the ticker always includes every service.
  document.querySelectorAll('.scm-ms-work nav a').forEach(link=>{
    const item=document.createElement('span');item.textContent=link.textContent;track.append(item);
  });
  ticker.append(track);hero.after(ticker);
  target.classList.add('lr-results');target.dataset.layout='3';
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">SERVICE SCOPE</p><strong>${config.number}<span>${config.unit}</span></strong><h2>${config.title}</h2><p>${config.copy}</p><a href="../contact.html" class="pill pill-blue">${config.cta} ↗</a></aside><div><div class="lr-heading"><p class="section-tag">PLACEHOLDER RESULTS / ${config.name}</p><h2>Discovery. Interest. Visibility.</h2></div><div class="lr-grid">${metrics.map((m,i)=>`<article class="lr-metric lr-metric-${i}"><span class="lr-index">0${i+1}</span><strong>${m[0]}</strong><span class="lr-metric-unit">${m[1]}</span><h3>${m[2]}</h3><p>${m[3]}</p><p class="lr-metric-detail">${m[4]}</p></article>`).join('')}</div></div></div><p class="lr-footnote">Design placeholders only. These figures match the La Rosa example and are not results for ${config.name}. Replace them with client-specific report totals, reporting dates, and ranking coverage before presenting them as measured outcomes.</p></div>`;
})();
