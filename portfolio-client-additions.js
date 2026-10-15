// Client service scope supplied by VNW Media. Business identity and logos checked
// against the linked official websites. Review statistics are explicitly marked
// sample data and are not client-reported performance.
const PORTFOLIO_CLIENT_ADDITIONS = [
  {
    slug:'aesthetic-island-nyc',name:'Aesthetic Island NYC',industry:'Medical Aesthetics & Wellness',website:'https://www.aestheticislandnyc.com/',logoExtension:'png',scope:['ppc','gbp'],
    summary:'A Brooklyn medical spa offering aesthetic treatments and personalized consultations.',
    headline:'Connect local treatment interest with a clear next step.',
    challenge:'People researching aesthetic treatments need to identify the practice, understand its services, and find accurate contact and appointment information.',
    focus:'Treatment discovery and consultation interest',
    story:'The practice presents its treatment options, practitioner information, and appointment pathways. Our scope focuses on PPC and Google Business Profile—not a website build or a claim about patient outcomes.'
  },
  {
    slug:'argana-day-spa',name:'Argana Day Spa',industry:'Spa & Wellness',website:'https://www.arganadayspa.com/',logoExtension:'png',scope:['gbp'],
    summary:'A Brooklyn day spa offering wellness treatments, facials, massage, and traditional Moroccan hammam experiences.',
    headline:'Help nearby guests find the right spa experience.',
    challenge:'Guests looking for a spa need reliable location, hours, and contact details before choosing a treatment or making an appointment.',
    focus:'Local spa discovery and business information',
    story:'Argana introduces its treatments and Brooklyn location through its existing website. Our engagement is Google Business Profile management, keeping the local discovery experience connected with the business.'
  },
  {
    slug:'calvin-schwartz',name:'Calvin Schwartz',industry:'Author, Broadcaster & Personal Brand',website:'https://calvinschwartz.com/',logoExtension:'png',scope:['web','youtube-seo','tiktok-seo'],
    summary:'A novelist, journalist, broadcaster, lecturer, and podcaster sharing books, interviews, and original perspectives.',
    headline:'Bring the author, the conversations, and the audience together.',
    challenge:'Books, biographical information, and video conversations need a clear home, while YouTube and TikTok content need discoverable titles, descriptions, and topic context.',
    focus:'Website clarity and platform-specific video discovery',
    story:'The website connects Calvin’s author identity, published work, and podcast content. Our scope includes the website build and SEO for YouTube and TikTok; it does not imply a separate general website SEO engagement.'
  },
  {
    slug:'classical-caterers',name:'Classical Caterers',industry:'Catering & Hospitality',website:'https://www.classicalcaterers.com/',logoExtension:'png',scope:['web','seo'],
    summary:'A kosher catering business serving weddings, bar and bat mitzvahs, and other celebrations in New Jersey.',
    headline:'Turn an event search into a catering conversation.',
    challenge:'Event hosts need to explore catering options, menus, venues, and contact information before discussing their celebration.',
    focus:'Event-service discovery and catering inquiries',
    story:'The website brings catering services, menus, galleries, and event inquiries into one experience. Our website and SEO work supports the path from researching a celebration to contacting the catering team.'
  },
  {
    slug:'genius-kids',name:'Genius Kids',industry:'Childcare & Early Education',website:'https://www.genius-kids.us/',logoExtension:'jpg',scope:['web','seo'],
    summary:'An early-learning business with locations in Morganville and Howell, New Jersey.',
    headline:'Give families a clearer first look at early learning.',
    challenge:'Parents comparing childcare need to recognize the relevant location, learn about the program, and find a useful way to ask about enrollment.',
    focus:'Program discovery and parent inquiries',
    story:'The website introduces Genius Kids and its locations. Website development and SEO connect that information with families researching early-learning options and the next step toward an enrollment conversation.'
  },
  {
    slug:'new-generation-learning-center',name:'New Generation Learning Center',industry:'Childcare & Early Education',website:'https://www.newgenerationlearningcenter.com/',logoExtension:'png',scope:['web','seo'],
    summary:'A learning-center business presenting locations in East Hanover and Staten Island.',
    headline:'Make the right learning center easier for families to find.',
    challenge:'Families need to distinguish locations, understand the learning environment, and reach the appropriate team with their questions.',
    focus:'Location clarity and education-service discovery',
    story:'The site provides a shared starting point for the learning centers while keeping location choices visible. Our website and SEO scope supports clear information and relevant discovery for prospective families.'
  },
  {
    slug:'glass-company-nyc',name:'Glass Company NYC',industry:'Glass Installation & Home Services',website:'https://www.glasscompanynyc.com/',logoExtension:'png',scope:['web','smm'],
    summary:'A New York glass company presenting glass doors, walls, railings, and installation services.',
    headline:'Let the finished work introduce the next project.',
    challenge:'Customers need to see the kinds of glass installations available, understand the service fit, and find a straightforward route to a project inquiry.',
    focus:'Project presentation and social-media communication',
    story:'Website development provides a place to explore glass installation services and project context. Social media management supports an ongoing presentation of the business; SEO and PPC are not included in this case-study scope.'
  },
  {
    slug:'harlem-east-life-plan',name:'Harlem East Life Plan',industry:'Healthcare & Behavioral Health',website:'https://www.harlemeastlifeplan.com/',logoExtension:'webp',scope:['web','seo','ppc'],
    summary:'A New York City care provider presenting counseling, behavioral-health, and treatment services.',
    headline:'Make care information easier to find and understand.',
    challenge:'People seeking support need clear service explanations, an identifiable provider, and accessible contact information without unsupported promises about treatment outcomes.',
    focus:'Care-service information and relevant search discovery',
    story:'The website introduces available care and contact pathways. Website, SEO, and PPC work support access to that information; marketing progress should not be confused with medical efficacy or patient outcomes.'
  },
  {
    slug:'jb-body-works',name:'J B Body Works',industry:'Automotive & Collision Repair',website:'https://jbbodyworks.com/',logoExtension:'png',scope:['seo'],
    summary:'A collision-repair business presenting vehicle repair services, facility capabilities, and automotive work.',
    headline:'Connect repair searches with relevant service information.',
    challenge:'Drivers researching collision repair need useful service information and a clear understanding of the shop before making contact.',
    focus:'Organic collision-repair discovery',
    story:'The existing website presents the repair business and its capabilities. Our engagement is SEO, focused on relevant organic discovery—not website development, paid advertising, or social media management.'
  },
  {
    slug:'mb-law',name:'Law Office of Mark Bratkovsky, PC',industry:'Legal & Professional Services',website:'https://www.mblawny.com/',logoExtension:'png',scope:['web','seo','gbp'],
    summary:'A Brooklyn law office presenting its attorneys, practice areas, and consultation contact information.',
    headline:'Build a clearer path from legal research to contact.',
    challenge:'Prospective clients need to identify the firm, explore relevant practice areas, and locate accurate contact details before requesting a consultation.',
    focus:'Practice-area clarity and local firm discovery',
    story:'The website organizes legal services and firm information, while SEO and Google Business Profile connect relevant discovery with the practice. This scope does not include PPC or promises about legal outcomes.'
  },
  {
    slug:'liquid-soldier',name:'Liquid Soldier',industry:'Consumer Products & eCommerce',website:'https://liquidsoldier.com/',logoExtension:'webp',scope:['web'],
    summary:'A consumer product brand with a dedicated website for exploring its products and brand identity.',
    headline:'Give a distinctive product brand a clear digital home.',
    challenge:'Visitors need to recognize the brand, understand the product presentation, and navigate the website without unnecessary friction.',
    focus:'Brand presentation and website experience',
    story:'Our scope is the website build, connecting product information, brand presentation, and useful navigation. Search campaigns, social media management, and product-health claims are not part of this case study.'
  },
  {
    slug:'lm-attorney',name:'Law Offices of Leo Mikityanskiy',industry:'Legal & Professional Services',website:'https://www.lmattorney.com/',logoExtension:'webp',scope:['web'],
    summary:'A law practice presenting estate planning and other legal services, attorney information, and contact pathways.',
    headline:'Make a considered legal decision easier to navigate.',
    challenge:'Visitors evaluating legal help need understandable service information, attorney context, and a direct route to contact the practice.',
    focus:'Legal-service presentation and website usability',
    story:'The website build connects the firm’s practice areas, attorney information, and consultation pathways. This engagement is website development only; SEO, profile management, and paid advertising are not included.'
  },
  {
    slug:'prestige-beauty-project',name:'Prestige Beauty Project',industry:'Medical Aesthetics & Wellness',website:'https://prestigebeautyproject.com/',logoExtension:'webp',scope:['web','seo','gbp'],
    summary:'A Manalapan, New Jersey aesthetics business presenting cosmetic injectables and related beauty services.',
    headline:'Connect the practice’s identity with local discovery.',
    challenge:'Prospective clients need to explore the business, understand the services presented, and locate reliable appointment and contact information.',
    focus:'Website clarity and local aesthetics discovery',
    story:'Website development, SEO, and Google Business Profile work together around the practice’s online identity and local discovery. The case study describes marketing scope, not a claim about cosmetic treatment results.'
  }
].map(p=>({...p,logo:['argana-day-spa','calvin-schwartz','genius-kids'].includes(p.slug)?`assets/client-projects/${p.slug}-logo-transparent.svg`:`assets/client-projects/${p.slug}-logo.${p.logoExtension}`,desktop:`assets/client-projects/${p.slug}-desktop.png`}));

const PORTFOLIO_ADDITION_SERVICES={
  web:{id:'website-ux',label:'Web Design',page:'web-design',focus:'Website experience',copy:'Build clear service and content pathways, responsive layouts, and accessible routes to the next useful action.'},
  seo:{id:'seo',label:'SEO',page:'seo',focus:'Organic discovery',copy:'Connect relevant search intent with useful business and service information, clear page structure, and discoverable content.'},
  gbp:{id:'google-business-profile',label:'Google Business Profile Management',page:'google-business-profile',focus:'Local discovery',copy:'Maintain useful business details, service context, and contact pathways within the client’s Google Business Profile presence.'},
  ppc:{id:'google-ppc',label:'PPC',page:'google-ppc',focus:'Paid search',copy:'Align paid-search campaigns with relevant service interest and clear inquiry pathways. Evaluate progress with client-specific reporting when available.'},
  smm:{id:'social-media',label:'Social Media Management',page:'social-media',focus:'Social communication',copy:'Plan and manage business-relevant social content that communicates services, presents work, and gives the audience useful next steps.'},
  'youtube-seo':{id:'youtube-seo',label:'YouTube SEO',page:'seo',focus:'YouTube discovery',copy:'Shape video titles, descriptions, topic organization, and discoverability around Calvin’s interviews, conversations, and published content.'},
  'tiktok-seo':{id:'tiktok-seo',label:'TikTok SEO',page:'seo',focus:'TikTok discovery',copy:'Connect short-form content with relevant topics, searchable wording, captions, and consistent creator context.'}
};

// Illustrative design-review data only. Never substitute for a client report.
const PORTFOLIO_SAMPLE_METRICS={
  gbp:[['Profile views',1420,2180,''],['Profile-driven calls',42,68,''],['Website clicks',118,176,'']],
  ppc:[['Advertising inquiries',24,39,''],['Cost per inquiry',56,43,'$'],['Conversion rate',3.4,5.1,'%']],
  seo:[['Organic website visits',820,1295,''],['Search impressions',12600,19200,''],['Organic inquiries',18,29,'']],
  web:[['Inquiry conversion rate',2.1,3.4,'%'],['Website inquiries',24,39,''],['Engaged sessions',47,59,'%']],
  smm:[['People reached',4800,7350,''],['Engagement rate',2.8,4.2,'%'],['Profile visits',160,246,'']],
  'youtube-seo':[['YouTube search views',1450,2270,''],['Watch time',110,178,'hours'],['New subscribers',35,54,'']],
  'tiktok-seo':[['TikTok search views',2400,3680,''],['Profile visits',145,226,''],['Content engagements',210,326,'']]
};
function portfolioSampleMetrics(p,key){
  const index=PORTFOLIO_CLIENT_ADDITIONS.findIndex(x=>x.slug===p.slug);
  const factor=1+(index%5)*.06;
  return PORTFOLIO_SAMPLE_METRICS[key].map(([label,before,after,unit])=>{
    const scale=unit==='%'?1:factor;
    const round=n=>unit==='%'?Math.round(n*10)/10:Math.round(n);
    before=round(before*scale);after=round(after*scale);
    return {label,before,after,unit,delta:Math.round((after/before-1)*100)};
  });
}
function portfolioMetricValue(n,unit){
  const value=n.toLocaleString('en-US',{maximumFractionDigits:1});
  return unit==='$'?'$'+value:unit==='%'?value+'%':unit==='hours'?value+' hrs':value;
}
function portfolioTrendChart(p,key,compact=false){
  const metric=portfolioSampleMetrics(p,key)[0];
  const levels=[.08,.22,.19,.45,.62,.9];
  const points=levels.map((v,i)=>[10+i*56,86-v*68]);
  const line=points.map(([x,y],i)=>(i?'L':'M')+x+' '+y.toFixed(1)).join(' ');
  const gradient='sample-'+p.slug+'-'+key+(compact?'-mini':'');
  return `<svg class="portfolio-trend-chart" viewBox="0 0 300 100" role="img" aria-label="Sample data: illustrative upward trend in ${esc(metric.label.toLowerCase())}"><defs><linearGradient id="${gradient}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#08b7ed" stop-opacity=".3"/><stop offset="1" stop-color="#08b7ed" stop-opacity="0"/></linearGradient></defs><path class="portfolio-chart-grid" d="M10 20H290M10 50H290M10 86H290"/><path d="${line}L290 96H10Z" fill="url(#${gradient})"/><path d="${line}" fill="none" stroke="#08b7ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="290" cy="${points[5][1].toFixed(1)}" r="4" fill="#71d6b3"/></svg>`;
}
function portfolioCardSampleStats(p){
  return `<div class="portfolio-card-stats"><p class="portfolio-sample-label">Sample data</p>${p.scope.map(key=>{
    const m=portfolioSampleMetrics(p,key)[0];
    return `<div class="portfolio-card-stat"><span>${esc(PORTFOLIO_ADDITION_SERVICES[key].label)}<small>${esc(m.label)}</small></span><strong>+${m.delta}%</strong>${portfolioTrendChart(p,key,true)}</div>`;
  }).join('')}<small class="portfolio-card-data-note">Illustrative figures · Not client-reported results</small></div>`;
}

function renderPortfolioAdditionCard(p){
  return `<article class="work-card work-agency-card reveal"><figure class="work-client-media work-project-media portfolio-addition-media" data-project="${esc(p.slug)}"><img src="${img(p.desktop)}" alt="${esc(p.name)} website" width="1440" height="1000" loading="lazy"><img class="work-client-logo portfolio-addition-logo" src="${img(p.logo)}" alt="${esc(p.name)} logo" loading="lazy"></figure><div><span>${esc(p.industry)}</span><h3>${esc(p.name)}</h3><p>${esc(p.summary)} Our scope: ${p.scope.map(k=>PORTFOLIO_ADDITION_SERVICES[k].label).map(esc).join(', ')}.</p><ul aria-label="Services provided for ${esc(p.name)}">${p.scope.map(k=>{const s=PORTFOLIO_ADDITION_SERVICES[k];return `<li><a class="work-service-pill" href="${path('services/'+s.page+'.html')}">${esc(s.label)}</a></li>`;}).join('')}</ul>${portfolioCardSampleStats(p)}<a class="work-case-link" href="${path('case-studies/'+p.slug+'-review.html')}" aria-label="Read ${esc(p.name)} case study"><b>Read case study ↗</b></a></div></article>`;
}

function renderPortfolioAdditionCase(p){
  const services=p.scope.map(k=>PORTFOLIO_ADDITION_SERVICES[k]);
  return renderClientCaseStudy({
    name:p.name,kicker:p.industry,intro:p.summary,businessIntro:p.summary,
    hero:p.desktop,heroAlt:p.name+' client website',heroWidth:1440,heroHeight:1000,
    heroLogo:p.logo,serviceLabels:services.map(s=>s.label),website:p.website,
    mockup:'assets/digital-experience-clients/'+p.slug+'-devices.svg',mockupAlt:p.name+' actual desktop and mobile websites displayed on a laptop and phone',mockupWidth:1145,mockupHeight:1200,
    signals:services.map(s=>['Sample data',s.label]),
    challengeTitle:p.headline,challengeOne:p.challenge,
    challengeTwo:'Our confirmed scope for '+p.name+' is '+services.map(s=>s.label).join(', ')+'. The engagement focuses on '+p.focus.toLowerCase()+'.',
    approachTitle:'A specific scope. A connected direction.',
    approach:services.map(s=>[s.label+'.',s.copy]),
    storyTitle:p.headline,storyOne:p.story,
    storyTwo:'The client website shown here provides real business context. The service list identifies the work provided by VNW Media; it does not attribute unrelated services to this engagement.',
    storyThree:'The service dashboard shows how progress can be presented across the work we provide. Its statistics are sample data for this review; client-reported figures can replace them when available.',
    services:services.map(s=>[s.id,s.label,s.copy+' For '+p.name+', the focus is '+p.focus.toLowerCase()+'.',s.focus,'Discuss '+s.label])
  });
}
