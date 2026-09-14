(()=>{
  const configs={
    'case-brooklyn-motors':{
      name:'Brooklyn Motors', number:'6', unit:'connected services',
      title:'A clear path from local search to collision repair.',
      copy:'Web Design, SEO, Google Business Profile Management, Google Business Profile Search Ads, PPC, and GEO work together to support repair discovery and inquiries in Brooklyn.',
      cta:'Discuss your repair business', heading:'Discovery. Confidence. Contact.',
      cards:[
        ['WEB','Website experience','Make repair information easy to find','Web Design','Clear service information and contact options for drivers.'],
        ['SEO','Organic discovery','Connect with local repair searches','SEO + Google Business Profile Management','Useful service content and consistent shop information.'],
        ['PPC','Paid search','Support high-intent repair inquiries','PPC + Google Business Profile Search Ads','Relevant searches connected to clear inquiry destinations.'],
        ['GEO','AI search readiness','Make the business easier to understand','Generative Engine Optimization','Clear, consistent collision-repair information for AI-assisted search.']
      ]
    },
    'case-h2bros-plumbing':{
      name:'H2Bros Plumbing', number:'3', unit:'customer needs',
      title:'A clearer route to plumbing and heating help.',
      copy:'Connect residential, commercial, and new-construction customers with the right information. Web design, SEO, PPC, local profile visibility, GEO, and inquiry tracking support the customer journey.',
      cta:'Discuss your service business', heading:'Find. Understand. Get in touch.',
      cards:[
        ['WEB','Service experience','Make plumbing and heating services clear','Web Design + Mobile Responsive Development','Service navigation, content architecture, and trust signals help customers choose their next step.'],
        ['SEO','Search visibility','Support local service discovery','SEO + GEO','Useful New Jersey plumbing and heating content for organic and AI-assisted search.'],
        ['GBP','Local discovery','Connect profiles with relevant inquiries','GBP Organic & Paid Search + PPC','Consistent business information and paid-search paths for repairs and planned projects.'],
        ['CTAs','Customer contact','Make calls and quote requests easier','Service Inquiry CTAs + Analytics & Lead Tracking','Clear contact prompts and measurement of inquiry sources.']
      ]
    }
  };
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
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">SERVICE SCOPE</p><strong>${config.number}<span>${config.unit}</span></strong><h2>${config.title}</h2><p>${config.copy}</p><a href="../contact.html" class="pill pill-blue">${config.cta} ↗</a></aside><div><div class="lr-heading"><p class="section-tag">STRATEGY / ${config.name}</p><h2>${config.heading}</h2></div><div class="lr-grid">${config.cards.map((m,i)=>`<article class="lr-metric lr-metric-${i}"><span class="lr-index">0${i+1}</span><strong>${m[0]}</strong><span class="lr-metric-unit">${m[1]}</span><h3>${m[2]}</h3><p>${m[3]}</p><p class="lr-metric-detail">${m[4]}</p></article>`).join('')}</div></div></div><p class="lr-footnote">Service coverage shown for ${config.name}. Performance results will be added when client-specific reporting is available.</p></div>`;
})();
