// Client service scope supplied by VNW Media. Business identity and logos checked
// against the linked official websites. Review statistics are explicitly marked
// sample data and are not client-reported performance.
const PORTFOLIO_CLIENT_ADDITIONS = [
  {
    slug:'aesthetic-island-nyc',name:'Aesthetic Island NYC',industry:'Medical Aesthetics & Wellness',website:'https://www.aestheticislandnyc.com/',logoExtension:'png',scope:['ppc','gbp','reputation'],
    summary:'A Brooklyn medical spa offering aesthetic treatments and personalized consultations.',
    headline:'Connect local treatment interest with a clear next step.',
    challenge:'People researching aesthetic treatments need to identify the practice, understand its services, and find accurate contact and appointment information.',
    focus:'Treatment discovery, consultation interest, and customer trust',
    story:'The practice presents its treatment options, practitioner information, and appointment pathways. Our scope includes PPC, Google Business Profile Management, and Reputation Management, connecting local discovery with customer feedback and trust. It does not include a website build or claims about patient outcomes.'
  },
  {
    slug:'argana-day-spa',name:'Argana Day Spa',industry:'Spa & Wellness',website:'https://www.arganadayspa.com/',logoExtension:'png',scope:['gbp','reputation'],
    summary:'A Brooklyn day spa offering wellness treatments, facials, massage, and traditional Moroccan hammam experiences.',
    headline:'Help nearby guests find the right spa experience.',
    challenge:'Guests looking for a spa need reliable location, hours, and contact details before choosing a treatment or making an appointment.',
    focus:'Local spa discovery, business information, and customer feedback',
    story:'Argana introduces its treatments and Brooklyn location through its existing website. Our engagement combines Google Business Profile Management and Reputation Management, keeping local discovery, business information, and customer feedback connected with the spa.'
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
    coverImage:'assets/client-projects/classical-caterers-hall.jpg',coverAlt:'Illustrative catering hall arranged for a celebration with chandeliers, round tables, and an open dance floor',coverWidth:1672,coverHeight:941,
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
    slug:'harlem-east-life-plan',name:'Harlem East Life Plan',industry:'Healthcare & Behavioral Health',website:'https://www.harlemeastlifeplan.com/',logoExtension:'webp',scope:['web','seo','ppc','gbp','reputation'],
    logo:'assets/client-projects/harlem-east-life-plan-logo-white-text.svg',
    coverImage:'assets/client-projects/harlem-east-life-plan-care.jpg',coverAlt:'Illustrative supportive counseling conversation in a welcoming care setting',coverWidth:1672,coverHeight:941,
    summary:'A New York City care provider presenting counseling, behavioral-health, and treatment services.',
    headline:'Make care information easier to find and understand.',
    challenge:'People seeking support need clear service explanations, an identifiable provider, and accessible contact information without unsupported promises about treatment outcomes.',
    focus:'Care-service information, relevant search discovery, local visibility, and trust',
    story:'The website introduces available care and contact pathways. Web Design, SEO, PPC, and Google Business Profile Management support access to accurate service and location information. Reputation Management supports review monitoring, privacy-conscious response guidance, and invitations for honest feedback without disclosing patient information. Marketing progress should not be confused with medical efficacy or patient outcomes.'
  },
  {
    slug:'jb-body-works',name:'J B Body Works',industry:'Automotive & Collision Repair',website:'https://jbbodyworks.com/',logoExtension:'png',scope:['seo','reputation'],
    coverImage:'assets/client-projects/jb-body-works-collision-repair.jpg',coverAlt:'Illustrative automotive technician inspecting a vehicle body panel in a professional collision-repair workshop',coverWidth:1672,coverHeight:941,
    summary:'A collision-repair business presenting vehicle repair services, facility capabilities, and automotive work.',
    headline:'Connect repair searches with relevant service information.',
    challenge:'Drivers researching collision repair need useful service information, customer feedback, and a clear understanding of the shop before making contact.',
    focus:'Organic collision-repair discovery and customer trust',
    story:'The existing website presents the repair business and its capabilities. Our engagement combines SEO and Reputation Management, connecting relevant organic discovery with review monitoring, response guidance, and honest customer feedback. Website development, paid advertising, and social media management are not included in this scope.'
  },
  {
    slug:'mb-law',name:'Law Office of Mark Bratkovsky, PC',industry:'Legal & Professional Services',website:'https://www.mblawny.com/',logoExtension:'png',scope:['web','seo','gbp'],
    logo:'assets/client-projects/mb-law-logo-white-text.svg',
    coverImage:'assets/client-projects/mb-law-legal-office.jpg',coverAlt:'Illustrative professional law-office consultation room with balance scales and document folders',coverWidth:1672,coverHeight:941,
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
    slug:'prestige-beauty-project',name:'Prestige Beauty Project',industry:'Medical Aesthetics & Wellness',website:'https://prestigebeautyproject.com/',logoExtension:'webp',scope:['web','seo','gbp','reputation'],
    heroImage:'assets/client-projects/prestige-beauty-project-aesthetics-studio.jpg',heroAlt:'Illustrative medical-aesthetics treatment room with a reclining treatment chair and consultation area',heroWidth:1672,heroHeight:941,
    summary:'A Manalapan, New Jersey aesthetics business presenting cosmetic injectables and related beauty services.',
    headline:'Connect the practice’s identity with local discovery.',
    challenge:'Prospective clients need to explore the business, understand the services presented, and locate reliable appointment and contact information.',
    focus:'Website clarity, local aesthetics discovery, and customer trust',
    story:'Website development, SEO, Google Business Profile, and Reputation Management work together around the practice’s online identity, local discovery, and customer feedback. Reputation work supports review monitoring, response guidance, and invitations for honest feedback. The case study describes marketing scope, not a claim about cosmetic treatment results.'
  },
  {
    slug:'ofshtein-law-firm',name:'Ofshtein Law Firm',industry:'Legal & Professional Services',website:'https://olf.law/',logoExtension:'png',scope:['ppc'],
    coverImage:'assets/client-projects/ofshtein-law-firm-cover.jpg',coverAlt:'Ofshtein Law Firm advertisement on a New York City bus, as featured on the firm’s website',coverWidth:2528,coverHeight:1696,
    summary:'A personal-injury law firm presenting its practice areas, attorneys, office locations, and consultation pathways.',
    headline:'Connect legal-service searches with a clear consultation path.',
    challenge:'People searching for injury-related legal help need to find a relevant firm, understand its services, and reach a clear route to a consultation.',
    focus:'Paid-search relevance and consultation inquiries',
    story:'The firm’s existing website introduces its legal services and contact pathways. Our engagement is PPC only, aligning paid-search campaigns with relevant service interest and a clear inquiry path. Website development, SEO, Google Business Profile management, and reputation management are not part of this scope. Marketing inquiries are not a claim about case outcomes or settlements.'
  }
].map(p=>({...p,logo:p.logo||(['calvin-schwartz','genius-kids'].includes(p.slug)?`assets/client-projects/${p.slug}-logo-transparent.svg`:`assets/client-projects/${p.slug}-logo.${p.logoExtension}`),desktop:`assets/client-projects/${p.slug}-desktop.png`}));

const PORTFOLIO_ADDITION_SERVICES={
  web:{id:'website-ux',label:'Web Design',page:'web-design',focus:'Website experience',copy:'Build clear service and content pathways, responsive layouts, and accessible routes to the next useful action.'},
  seo:{id:'seo',label:'SEO',page:'seo',focus:'Organic discovery',copy:'Connect relevant search intent with useful business and service information, clear page structure, and discoverable content.'},
  gbp:{id:'google-business-profile',label:'Google Business Profile Management',page:'google-business-profile',focus:'Local discovery',copy:'Maintain useful business details, service context, and contact pathways within the client’s Google Business Profile presence.'},
  ppc:{id:'google-ppc',label:'PPC',page:'google-ppc',focus:'Paid search',copy:'Align paid-search campaigns with relevant service interest and clear inquiry pathways. Evaluate progress with client-specific reporting when available.'},
  smm:{id:'social-media',label:'Social Media Management',page:'social-media',focus:'Social communication',copy:'Plan and manage business-relevant social content that communicates services, presents work, and gives the audience useful next steps.'},
  reputation:{id:'reputation-management',label:'Reputation Management',page:'reputation-management',focus:'Customer feedback and trust',copy:'Support an active review presence through review monitoring, privacy-conscious response guidance, and invitations for honest customer feedback.'},
  'youtube-seo':{id:'youtube-seo',label:'YouTube SEO',page:'seo',focus:'YouTube discovery',copy:'Shape video titles, descriptions, topic organization, and discoverability around Calvin’s interviews, conversations, and published content.'},
  'tiktok-seo':{id:'tiktok-seo',label:'TikTok SEO',page:'seo',focus:'TikTok discovery',copy:'Connect short-form content with relevant topics, searchable wording, captions, and consistent creator context.'}
};

// Illustrative design-review data only. Never substitute for a client report.
const PORTFOLIO_SAMPLE_METRICS={
  gbp:[['Profile views',''],['Profile-driven calls',''],['Website clicks','']],
  ppc:[['Advertising inquiries',''],['Cost per inquiry','$'],['Conversion rate','%']],
  seo:[['Organic website visits',''],['Search impressions',''],['Organic inquiries','']],
  web:[['Inquiry conversion rate','%'],['Website inquiries',''],['Engaged sessions','%']],
  smm:[['People reached',''],['Engagement rate','%'],['Profile visits','']],
  reputation:[['New reviews',''],['Review response rate','%'],['Reviews responded to','']],
  'youtube-seo':[['YouTube search views',''],['Watch time','hours'],['New subscribers','']],
  'tiktok-seo':[['TikTok search views',''],['Profile visits',''],['Content engagements','']]
};
// Fixed illustrative scenarios keep reviews stable rather than changing on reload.
// Each pair is [earlier, later]; these are not measured client outcomes.
const PORTFOLIO_SAMPLE_SCENARIOS={
  'aesthetic-island-nyc':{ppc:[[28,57],[64,41],[2.8,5.6]],gbp:[[1640,2952],[34,61],[142,228]],reputation:[[18,31],[78,97],[14,30]]},
  'argana-day-spa':{gbp:[[2180,2551],[48,57],[186,212]],reputation:[[22,29],[82,93],[18,27]]},
  'calvin-schwartz':{web:[[1.6,2.3],[18,29],[42,54]],'youtube-seo':[[1260,2444],[96,177],[28,53]],'tiktok-seo':[[1850,4163],[124,272],[196,428]]},
  'classical-caterers':{web:[[2.4,3.1],[31,42],[51,60]],seo:[[960,1459],[14800,21312],[22,34]]},
  'genius-kids':{web:[[1.8,3.3],[26,45],[44,63]],seo:[[740,1399],[11200,19824],[17,32]]},
  'new-generation-learning-center':{web:[[2.6,3.1],[34,41],[53,59]],seo:[[1280,1715],[17600,22528],[28,37]]},
  'glass-company-nyc':{web:[[2.2,3.7],[24,43],[46,64]],smm:[[4200,8232],[2.3,4.1],[175,346]]},
  'harlem-east-life-plan':{web:[[3.1,3.8],[42,53],[57,64]],seo:[[1740,2461],[22400,30240],[36,49]],ppc:[[46,79],[72,54],[3.1,4.8]],gbp:[[2860,4204],[58,84],[214,306]],reputation:[[17,26],[74,96],[13,25]]},
  'jb-body-works':{seo:[[890,1148],[13700,16851],[24,31]],reputation:[[24,36],[81,95],[19,34]]},
  'mb-law':{web:[[1.7,2.6],[23,36],[45,58]],seo:[[1160,1949],[16800,26544],[26,44]],gbp:[[1940,3007],[46,73],[158,241]]},
  'liquid-soldier':{web:[[2.8,3.9],[29,43],[49,62]]},
  'lm-attorney':{web:[[2.5,2.8],[32,37],[55,60]]},
  'prestige-beauty-project':{web:[[1.9,3.9],[21,47],[43,66]],seo:[[680,1448],[10600,21942],[16,35]],gbp:[[1520,2934],[39,78],[131,258]],reputation:[[12,22],[76,94],[9,21]]},
  'ofshtein-law-firm':{ppc:[[37,63],[118,87],[3.2,4.9]]}
};
function portfolioSampleMetrics(p,key){
  return PORTFOLIO_SAMPLE_METRICS[key].map(([label,unit],i)=>{
    const [before,after]=PORTFOLIO_SAMPLE_SCENARIOS[p.slug][key][i];
    return {label,before,after,unit,delta:Math.round((after/before-1)*100)};
  });
}
function portfolioMetricValue(n,unit){
  const value=n.toLocaleString('en-US',{maximumFractionDigits:1});
  return unit==='$'?'$'+value:unit==='%'?value+'%':unit==='hours'?value+' hrs':value;
}

function renderPortfolioAdditionCard(p){
  return `<article class="work-card work-agency-card reveal"><figure class="work-client-media work-project-media portfolio-addition-media" data-project="${esc(p.slug)}"><img src="${img(p.coverImage||p.desktop)}" alt="${esc(p.coverAlt||p.name+' website')}" width="${p.coverWidth||1440}" height="${p.coverHeight||1000}" loading="lazy"><img class="work-client-logo portfolio-addition-logo" src="${img(p.logo)}" alt="${esc(p.name)} logo" loading="lazy"></figure><div><span>${esc(p.industry)}</span><h3>${esc(p.name)}</h3><p>${esc(p.summary)} Our scope: ${p.scope.map(k=>PORTFOLIO_ADDITION_SERVICES[k].label).map(esc).join(', ')}.</p><ul aria-label="Services provided for ${esc(p.name)}">${p.scope.map(k=>{const s=PORTFOLIO_ADDITION_SERVICES[k];return `<li><a class="work-service-pill" href="${path('services/'+s.page+'.html')}">${esc(s.label)}</a></li>`;}).join('')}</ul><a class="work-case-link" href="${path('case-studies/'+p.slug+'-review.html')}" aria-label="Read ${esc(p.name)} case study"><b>Read case study ↗</b></a></div></article>`;
}

function renderPortfolioAdditionCase(p){
  const services=p.scope.map(k=>PORTFOLIO_ADDITION_SERVICES[k]);
  return renderClientCaseStudy({
    name:p.name,kicker:p.industry,intro:p.summary,businessIntro:p.summary,
    hero:p.heroImage||p.coverImage||p.desktop,heroAlt:p.heroAlt||p.coverAlt||p.name+' client website',heroWidth:p.heroWidth||p.coverWidth||1440,heroHeight:p.heroHeight||p.coverHeight||1000,
    heroLogo:p.logo,serviceLabels:services.map(s=>s.label),website:p.website,
    mockup:'assets/digital-experience-clients/'+p.slug+'-devices.svg',mockupAlt:p.name+' actual desktop and mobile websites displayed on a laptop and phone',mockupWidth:1145,mockupHeight:1200,
    signals:services.map(s=>['—',s.label]),
    challengeTitle:p.headline,challengeOne:p.challenge,
    challengeTwo:'Our confirmed scope for '+p.name+' is '+services.map(s=>s.label).join(', ')+'. The engagement focuses on '+p.focus.toLowerCase()+'.',
    approachTitle:'A specific scope. A connected direction.',
    approach:services.map(s=>[s.label+'.',s.copy]),
    storyTitle:p.headline,storyOne:p.story,
    storyTwo:'The client website shown here provides real business context. The service list identifies the work provided by VNW Media; it does not attribute unrelated services to this engagement.',
    storyThree:'The service dashboard shows how progress can be presented across the work we provide.',
    services:services.map(s=>[s.id,s.label,s.copy+' For '+p.name+', the focus is '+p.focus.toLowerCase()+'.',s.focus,'Discuss '+s.label])
  });
}
