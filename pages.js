const DATA = {
  services: SERVICE_CATALOG.map(service => [service.name, service.slug, service.description, service.image]),
  industries: [
    ["Home Services & Contractors","home-services-contractors","Service-area pages, proof, local SEO, and faster paths from problem to qualified call.","https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=84"],
    ["Medical, Dental & Eye Care","healthcare","Credible, approachable digital experiences for practices that need patient trust and appointment clarity.","https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=84"],
    ["Automotive & Auto Body","auto-repair","Trust-led marketing for repair shops, collision centers, dealerships, and automotive service brands.","https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=84"],
    ["Restaurants & Hospitality","restaurant","Menus, catering, reservations, ordering paths, social proof, and local guest demand.","https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=84"],
    ["Daycare & Education","day-care","Enrollment-focused websites, parent trust signals, local SEO, programs, and tour requests.","https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=84"],
    ["Legal & Professional Services","legal-professional-services","Authority-building pages for firms and service professionals where trust must be clear before contact.","https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=84"],
    ["Real Estate & Property","real-estate","Digital systems for agents, brokerages, developers, investors, property teams, and high-value inquiries.","https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=84"],
    ["Retail & eCommerce","retail-ecommerce","Product clarity, shopping paths, local retail visibility, campaigns, and repeat-customer systems.","https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=84"]
  ],
  cases: [
    ["South Carolina Motors","south-carolina-motors","Automotive","Inventory-led UX and a faster path from vehicle discovery to dealership contact.","assets/case-automotive-impact.svg","https://www.southcarolinamotors.com/"],
    ["Rice’s Collision","rices-collision","Auto Body","A credibility-first experience that makes services and estimate requests easier.","assets/case-collision-impact.svg","https://rices-collision.com/"],
    ["H2Bros Plumbing","h2bros-plumbing","Home Services","Urgent click-to-call paths, service-area clarity, and local lead generation.","assets/case-plumbing-impact.svg","https://h2brosplumbing.com/"]
  ],
  resources: [
    ["Website Redesign Readiness Checklist","website-redesign-checklist","Know when focused improvements are enough—and when the website is holding growth back.","https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1400&q=84"],
    ["Local SEO Growth Guide","local-seo-growth-guide","The foundations local businesses should fix first to earn more calls from search.","https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=84"],
    ["Lead Generation Landing Page Blueprint","landing-page-blueprint","The essential sections every serious service-business landing page needs.","https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=84"]
  ]
};

const topPages = {
  story:["Our Story","Built like a growth partner, not just another vendor.","VNW Media helps businesses connect website design, search visibility, paid campaigns, content, reputation, and follow-up into one clearer growth system.","https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=84"],
  "work-hub":["Work Options","Choose the Work page experience you want to explore.","Ten different ways to present VNW Media’s portfolio, website design work, digital marketing projects, industries served, lead-generation strategy, proof points, FAQs, and conversion-focused calls to action.","assets/case-system-stack.svg"],
  work:["Our Work","Websites and marketing systems built to earn the next customer.","Selected work across automotive, home services, healthcare, legal, restaurant, daycare, retail, and professional services—shaped around trust, visibility, and a clearer path to action.","assets/case-automotive-impact.svg"],
  "work-section-options":["Work Section Concepts","Five new ways to show how projects move—and how clients experience the partnership.","A creative comparison of process and testimonial sections designed to feel modern, useful, and distinctly agency-led.","assets/case-system-stack.svg"],
  "work-night-options":["Night Shift Variations","Five deeper explorations of the dark, technical direction.","Each concept expands the visual language of Option 02 with a different process structure and a more distinctive approach to client perspective.","assets/case-system-stack.svg"],
  "work-night-options-light":["Night Shift Light Variations","Five light interpretations of the technical direction.","The layouts and information systems from the Night Shift explorations—translated into bright, refined agency surfaces.","assets/case-hero-impact.svg"],
  "work-creative-options":["Creative Section Explorations","Five fresh visual directions with more imagery and personality.","New concepts for presenting project momentum and client perspective as a memorable agency experience.","assets/case-final-cta.svg"],
  "work-alternative-options":["Alternative Section Concepts","Five cleaner, more restrained agency directions.","Premium light layouts that focus on typography, hierarchy, process clarity, and credible client proof.","assets/case-hero-impact.svg"],
  "home-process-options":["Homepage Process Options","Five modern ways to present how VNW Media moves a project.","Agency-style UX/UI directions for replacing the homepage Our Process section with stronger rhythm, clearer proof, and more useful next steps.","assets/case-system-stack.svg"],
  "work-2":["Work Option 2","A strategic portfolio built for search and sales.","A detailed Work page option organized by services, industries, project outcomes, FAQs, and conversion paths for businesses evaluating VNW Media.","assets/case-hero-impact.svg"],
  "work-3":["Work Option 3","Proof by industry, service, and customer intent.","A segmented Work page concept that helps visitors find relevant projects by business type, problem, service need, and growth opportunity.","assets/case-final-cta.svg"],
  "work-4":["Work Option 4","A conversion-first portfolio dashboard.","A metrics-inspired Work page structure showing project types, lead-generation systems, trust layers, and the practical mechanics behind stronger websites.","assets/case-system-stack.svg"],
  "work-5":["Work Option 5","A premium agency portfolio lab.","A creative, high-impact Work page option with editorial project cards, SEO content sections, FAQ, and repeated consultation CTAs.","assets/case-hero-impact.svg"],
  "work-6":["Work Option 6","A black-index portfolio with sharper attitude.","A stark, high-contrast work page using a numbered index, oversized proof statements, and compressed project intelligence for a more premium studio feel.","assets/case-system-stack.svg"],
  "work-7":["Work Option 7","An agency magazine about the work.","An editorial Work page that feels like a digital publication, with feature stories, columns, pull quotes, FAQs, and conversion prompts.","assets/case-final-cta.svg"],
  "work-8":["Work Option 8","A local-growth territory map.","A Work page organized by industries, service areas, intent clusters, and local SEO opportunities for businesses that need more regional visibility.","assets/case-plumbing-impact.svg"],
  "work-9":["Work Option 9","A build-room service stack.","A modular Work page that presents VNW’s portfolio through strategy, creative, web, SEO, ads, reputation, and follow-up systems.","assets/case-automotive-impact.svg"],
  "work-10":["Work Option 10","An audit-room portfolio diagnosis.","A diagnostic Work page that shows common website problems, the VNW fix, relevant projects, FAQs, and direct consultation CTAs.","assets/case-collision-impact.svg"],
  "services-hub":["Services","Websites, visibility, and marketing—working together.","Explore our complete offering: websites and maintenance, SEO, Yelp, Google Business Profile, AI visibility, advertising, content, reputation, and customer follow-up.","assets/case-system-stack.svg"],
  services:["Services Option 1","Every digital tool your business needs—connected.","The current services grid direction: clear service cards with a simple path into web design, SEO, PPC, social media, content, reputation, eCommerce, email, text marketing, and strategy.","https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=84"],
  "services-2":["Services Option 2","A conversion stack built around the buyer journey.","A Services page organized from attention to inquiry: website, SEO, PPC, reputation, content, nurture, tracking, and optimization.","assets/case-final-cta.svg"],
  "services-3":["Services Option 3","An SEO-rich service library.","A detailed services directory designed for organic search, internal linking, FAQs, service clusters, and high-intent visitors.","assets/case-plumbing-impact.svg"],
  "services-4":["Services Option 4","A growth system, not a menu.","A strategic Services page showing how VNW connects web design, SEO, paid search, social, reputation, and follow-up into one marketing engine.","assets/case-system-stack.svg"],
  "services-5":["Services Option 5","Service paths by business goal.","A decision-guided Services page that helps visitors choose based on the outcome they want: more calls, better rankings, stronger trust, or more sales.","assets/case-automotive-impact.svg"],
  "services-6":["Services Option 6","A diagnostic services audit.","A problem-first Services page that names common marketing gaps and maps each gap to the VNW service that fixes it.","assets/case-collision-impact.svg"],
  "services-7":["Services Option 7","A premium agency capabilities deck.","A boardroom-style Services page with capability slides, executive takeaways, service proof, and consultation CTAs.","assets/case-hero-impact.svg"],
  "services-8":["Services Option 8","A local business growth playbook.","A service page built around local SEO, service areas, reviews, calls, landing pages, and marketing systems for local businesses.","assets/case-plumbing-impact.svg"],
  "services-9":["Services Option 9","An editorial service journal.","A magazine-like Services page that explains VNW’s capabilities through articles, columns, service notes, FAQs, and lead-generation prompts.","assets/case-final-cta.svg"],
  "services-10":["Services Option 10","A service comparison and recommendation guide.","A highly practical Services page with service comparisons, recommended starting points, what to prioritize first, FAQs, and strong CTAs.","assets/case-system-stack.svg"],
  industries:["Industries","Strategy shaped around how your customers choose.","Different markets have different buying cycles, trust signals, search behavior, and conversion points.","https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=84"],
  "cases-hub":["Case Study Options","Choose the case-study experience you want to explore.","Ten different page directions for presenting VNW Media project work—from visual portfolio to detailed strategy proof, conversion maps, audit dashboards, client-story editorials, cinematic narratives, boardroom decks, and SEO teardowns.","assets/case-hero-impact.svg"],
  cases:["Case Studies","The thinking behind the screen.","See how selected projects organize trust, discovery, and conversion around the customer’s next decision.","assets/case-hero-impact.svg"],
  "cases-alt":["Case Studies Option 2","Proof, process, and practical growth details.","A more detailed case-study page showing the business problem, strategy, deliverables, conversion paths, and growth logic behind selected VNW Media projects.","assets/case-hero-impact.svg"],
  "cases-3":["Case Studies Option 3","Three client journeys, three different buying moments.","An editorial case-study layout built around the story arc of each visitor: what they need, what builds confidence, and what makes them act.","assets/case-system-stack.svg"],
  "cases-4":["Case Studies Option 4","The conversion architecture behind the work.","A dashboard-inspired case-study page that shows funnels, page roles, trust signals, and lead-generation mechanics for each project.","assets/case-hero-impact.svg"],
  "cases-5":["Case Studies Option 5","A portfolio lab for serious growth conversations.","A bold modular case-study layout organized by industries, deliverables, decision friction, and what VNW would improve next.","assets/case-final-cta.svg"],
  "cases-6":["Case Studies Option 6","A cinematic case-study filmstrip.","A dramatic case-study page built like a sequence of scenes: trigger, tension, strategy, screen, proof, and next move.","assets/case-collision-impact.svg"],
  "cases-7":["Case Studies Option 7","A boardroom pitch deck of the work.","A presentation-style case-study page with slides, executive takeaways, strategic decisions, proof points, and CTA moments.","assets/case-system-stack.svg"],
  "cases-8":["Case Studies Option 8","A search-intent teardown.","A case-study format focused on Google intent, service pages, local SEO, trust signals, and conversion opportunities.","assets/case-plumbing-impact.svg"],
  "cases-9":["Case Studies Option 9","A founder-story interview format.","A narrative case-study page that reads like an interview, unpacking the business context, customer doubts, and VNW’s decisions.","assets/case-final-cta.svg"],
  "cases-10":["Case Studies Option 10","A blueprint/spec-sheet case library.","A technical but stylish case-study page using spec cards, requirements, decisions, modules, and launch-ready recommendations.","assets/case-automotive-impact.svg"],
  clients:["Clients & Reviews","Creative enough to stand out. Dependable enough to trust.","A long-term digital partner for organizations that value responsive communication, thoughtful recommendations, and work that performs.","https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=84"],
  resources:["Resources","Clearer thinking for your next digital move.","Practical website, local SEO, and lead-generation guidance for business owners planning what comes next.","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=84"],
  contact:["Get Started","Tell us where growth feels stuck.","Share your business, website, and goals. We’ll help identify the clearest path toward stronger visibility, trust, and lead flow.","https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=84"]
};

const depth = document.body.dataset.depth === "1" ? "../" : "";
const path = value => depth + value;
const img = value => value.startsWith("http") ? value : depth + value.replace("../vnwmedia-site/assets/","assets/").replace(/^\.\.\//,"");
const esc = value => String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
function servicesMega(){
  return serviceMenuMarkup(path(""));
}

function header(){
  return `<header class="site-header"><nav class="nav shell" aria-label="Main navigation">
    <a class="logo" href="${path("index.html")}" aria-label="VNW Media home"><img src="${img("assets/vnwMedia-LogoBlk.png")}" alt="VNW Media"></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu"><span class="sr-only">Toggle navigation</span><i></i><i></i></button>
    <div class="nav-menu" id="nav-menu"><a href="${path("our-story.html")}">Our Story</a><a href="${path("work.html?v=30")}">Work</a>${servicesMega()}<a href="${path("industries.html")}">Industries</a><a href="${path("case-studies.html?v=16")}">Case Studies</a><a href="${path("resources.html")}">Resources</a></div>
    <div class="nav-actions"><a class="pill pill-blue" href="${path("contact.html")}">Get Started</a></div>
  </nav></header>`;
}

function footer(){
  return `<footer class="footer"><div class="shell footer-grid">
    <div class="footer-about"><img src="${img("assets/vnwMedia-LogoBlk.png?v=127")}" alt="VNW Media"><p>New Jersey’s full-service web and digital marketing company. Strategy, creative, and campaigns that move business forward.</p><div class="social"><a href="https://www.instagram.com/vnwmediallc/">Instagram</a><a href="https://www.linkedin.com/company/vnw-media-llc">LinkedIn</a><a href="https://www.facebook.com/vnwmedia/">Facebook</a></div></div>
    <div><h4>Services</h4>${DATA.services.map(x=>`<a href="${path(`services/${x[1]}.html`)}">${x[0]}</a>`).join("")}</div>
    <div><h4>Company</h4><a href="${path("our-story.html")}">Our Story</a><a href="${path("work.html?v=30")}">Work</a><a href="${path("clients.html")}">Clients</a><a href="${path("resources.html#faq")}">FAQ</a><a href="${path("contact.html")}">Contact</a></div>
    <div><h4>Contact</h4><a href="mailto:contactus@vnwmedia.com">contactus@vnwmedia.com</a><a href="tel:17328200609">(732) 820-0609</a><span>Morganville, NJ 07751</span></div>
  </div><div class="shell copyright"><span>© 2026 VNW Media LLC. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer><a class="mobile-plan" href="${path("contact.html")}">Let’s Talk About Your Project</a>`;
}

function hero(title,headline,text,image){
  return `<section class="inner-hero" id="top" data-nav-theme="dark"><div class="inner-hero-bg" style="background-image:linear-gradient(90deg,rgba(8,8,8,.94),rgba(8,8,8,.65),rgba(8,8,8,.38)),url('${img(image)}')"></div><div class="shell inner-hero-copy reveal"><p class="eyebrow">${esc(title)}</p><h1>${esc(headline)}</h1><p class="hero-lede">${esc(text)}</p><div class="hero-actions"><a class="pill pill-orange pill-large" href="${path("contact.html")}">Get Your Strategy <span>↗</span></a><a class="pill pill-outline pill-large" href="#page-content">Explore</a></div></div></section>`;
}

function cards(items,type){
  const folder = type === "service" ? "services" : type === "industry" ? "industries" : type === "case" ? "case-studies" : "resources";
  return `<div class="${type==="case"?"work-grid":type==="resource"?"resource-grid":"service-grid"}">${items.map((x,i)=>{
    const name=x[0], slug=x[1], description=type==="case"?x[3]:x[2], image=type==="case"?x[4]:x[3];
    if(type==="case") return `<a class="work-card reveal" href="${path(`${folder}/${slug}.html`)}"><img src="${img(image)}" alt="${esc(name)}"><div><span>${esc(x[2])}</span><h3>${esc(name)}</h3><p>${esc(description)}</p><b>Read case study ↗</b></div></a>`;
    return `<a class="${type==="resource"?"resource-card":"service-card"} reveal" href="${path(`${folder}/${slug}.html`)}"><img src="${img(image)}" alt="${esc(name)}"><div class="shade"></div><span class="number">${String(i+1).padStart(2,"0")}</span><div class="card-copy"><h3>${esc(name)}</h3><p>${esc(description)}</p><b>Explore ↗</b></div></a>`;
  }).join("")}</div>`;
}

function capabilityTicker(){
  const clients=["South Carolina Motors","Rice’s Collision","H2Bros Plumbing","Best Pro Service","Leo Mikityanskiy","NJ Steps to Success","Kahn Yuniver Law","Grill Point","Kid’s World Preschool","Senior Comfort","Brooklyn Motors","Best Blinds","Urgent Doctor","Quality Wellness Group","Adamco Diamonds","Honeydrop","Marlboro Jewish Day Camp","Travel Mama","Pollack SEO","A2Z Academy"];
  return `<section class="trust-strip work-client-ticker" data-nav-theme="dark" aria-label="VNW Media clients"><div class="trust-track"><small>Selected Client Work</small><i></i>${[...clients,...clients].map(x=>`<span>${x}</span>`).join("")}</div></section>`;
}

function workSectionOptions(){
  const steps=[
    ["Discover","Find the business problem, customer friction, and clearest opportunity."],
    ["Shape","Turn the findings into message, structure, scope, and creative direction."],
    ["Build","Connect design, content, development, search foundations, and tracking."],
    ["Improve","Use real questions and performance signals to guide what happens next."]
  ];
  const quotes=[
    ["Robert","Marlboro Jewish Day Camp","They promised and delivered, offered key suggestions, and created an exceptional product from our vision."],
    ["Sveta","A2Z Academy","I felt supported and well-informed throughout the website-building process."],
    ["Emad","Grill Point","Excellent service at a reasonable price with a professional team."]
  ];
  return `<section class="wso-intro section" id="page-content" data-nav-theme="light"><div class="shell"><p class="section-tag">Five Paired Directions</p><h2>Process should create confidence. Client perspective should make it believable.</h2><p>Each option below redesigns both sections as one connected experience. The content stays familiar; the pacing, hierarchy, and personality change.</p></div></section>
  <section class="wso-option wso-editorial section" data-nav-theme="light"><div class="shell"><div class="wso-label"><span>Option 01</span><strong>Editorial Relay</strong><small>Elegant · Spacious · Story-led</small></div><div class="wso-editorial-head"><div><p class="section-tag">How Projects Move</p><h2>Four clear handoffs. One connected direction.</h2></div><p>Designed like a premium editorial feature, with a strong reading rhythm and a testimonial that feels like the closing line.</p></div><div class="wso-editorial-steps">${steps.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><blockquote class="wso-editorial-quote"><span>Client Perspective</span><p>“${quotes[0][2]}”</p><footer>${quotes[0][0]} <i>— ${quotes[0][1]}</i></footer></blockquote></div></section>
  <section class="wso-option wso-night section" data-nav-theme="dark"><div class="shell"><div class="wso-label"><span>Option 02</span><strong>Night Shift</strong><small>Dark · Technical · High-impact</small></div><div class="wso-night-head"><p class="section-tag">How Projects Move</p><h2>A visible system from first signal to forward motion.</h2></div><div class="wso-night-flow">${steps.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><i></i><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div><div class="wso-night-quotes"><div><p class="section-tag">Client Perspective</p><h3>Clear communication is part of the deliverable.</h3></div>${quotes.slice(1).map(x=>`<blockquote><p>“${x[2]}”</p><footer><strong>${x[0]}</strong><span>${x[1]}</span></footer></blockquote>`).join("")}</div></div></section>
  <section class="wso-option wso-split section" data-nav-theme="light"><div class="shell"><div class="wso-label"><span>Option 03</span><strong>Split Focus</strong><small>Structured · Sticky · Consultative</small></div><div class="wso-split-grid"><aside><p class="section-tag">How Projects Move</p><h2>The plan stays visible while the details unfold.</h2><p>A strong fit for buyers who want to understand how the agency works before starting a conversation.</p><a class="pill pill-blue" href="${path("contact.html")}">Plan a project <span>↗</span></a></aside><div class="wso-split-steps">${steps.map((x,i)=>`<article><span>0${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div></div><div class="wso-split-proof"><p class="section-tag">Client Perspective</p>${quotes.map(x=>`<blockquote><p>“${x[2]}”</p><footer>${x[0]} · ${x[1]}</footer></blockquote>`).join("")}</div></div></section>
  <section class="wso-option wso-signal section" data-nav-theme="dark"><div class="shell"><div class="wso-label"><span>Option 04</span><strong>Signal Flow</strong><small>Compact · Kinetic · Digital-first</small></div><div class="wso-signal-title"><p class="section-tag">How Projects Move</p><h2>Momentum without mystery.</h2></div><div class="wso-signal-track">${steps.map((x,i)=>`<article><span>${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div><div class="wso-signal-proof"><div><p class="section-tag">Client Perspective</p><strong>RESPONSIVE / THOUGHTFUL / DEPENDABLE</strong></div><blockquote><p>“${quotes[1][2]}”</p><footer>${quotes[1][0]} <span>${quotes[1][1]}</span></footer></blockquote></div></div></section>
  <section class="wso-option wso-bento section" data-nav-theme="light"><div class="shell"><div class="wso-label"><span>Option 05</span><strong>Bento Proof Lab</strong><small>Modular · Modern · Versatile</small></div><div class="wso-bento-grid"><article class="wso-bento-lead"><p class="section-tag">How Projects Move</p><h2>Every phase has a job.</h2><p>The modular layout makes the process quick to scan while giving client proof equal visual weight.</p></article>${steps.map((x,i)=>`<article class="wso-bento-step"><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}<blockquote class="wso-bento-quote"><span>Client Perspective</span><p>“${quotes[0][2]}”</p><footer>${quotes[0][0]} · ${quotes[0][1]}</footer></blockquote><blockquote class="wso-bento-mini"><p>“${quotes[2][2]}”</p><footer>${quotes[2][0]} · ${quotes[2][1]}</footer></blockquote></div></div></section>`;
}

function workNightOptions(light=false){
  const steps=[
    ["Discover","Business context, audience, friction, proof, and the opportunity worth solving first."],
    ["Shape","Message, hierarchy, scope, creative direction, and the path toward a confident decision."],
    ["Build","Design, content, development, search foundations, tracking, and launch details connected."],
    ["Improve","Real questions and performance signals translated into the next useful refinement."]
  ];
  const quotes=[
    ["Robert","Marlboro Jewish Day Camp","They promised and delivered, offered key suggestions, and created an exceptional product from our vision."],
    ["Sveta","A2Z Academy","I felt supported and well-informed throughout the website-building process."],
    ["Emad","Grill Point","Excellent service at a reasonable price with a professional team."]
  ];
  const label=(n,name,note)=>`<div class="wso-label"><span>Option ${n}${light?"L":""}</span><strong>${name}${light?" Light":""}</strong><small>${note}</small></div>`;
  return `<section class="wno-intro section" id="page-content" data-nav-theme="dark"><div class="shell"><p class="section-tag">Built From Option 02</p><h2>Five ways to take Night Shift further.</h2><p>The same dark technical foundation, expanded through stronger hierarchy, smarter information density, and more memorable client-proof moments.</p></div></section>
  <section class="wno-option wno-rail section" data-nav-theme="dark"><div class="shell">${label("06","Command Rail","Linear · Precise · Executive")}<div class="wno-rail-grid"><aside><p class="section-tag">How Projects Move</p><h2>Every phase stays on the same signal.</h2><p>A refined evolution of Option 02 with a stronger vertical reading path and a cleaner executive feel.</p></aside><div class="wno-rail-steps">${steps.map((x,i)=>`<article><span>0${i+1}</span><div><small>Phase ${i+1}</small><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div></div><blockquote class="wno-rail-quote"><span>Client Perspective / 01</span><p>“${quotes[0][2]}”</p><footer><strong>${quotes[0][0]}</strong>${quotes[0][1]}</footer></blockquote></div></section>
  <section class="wno-option wno-control section" data-nav-theme="dark"><div class="shell">${label("07","Mission Control","Dashboard · Modular · Smart")}<div class="wno-control-head"><div><p class="section-tag">How Projects Move</p><h2>A process dashboard built for confidence.</h2></div><div class="wno-status"><span><i></i> Four phases connected</span><span><i></i> One accountable team</span></div></div><div class="wno-control-grid">${steps.map((x,i)=>`<article><div><span>0${i+1}</span><small>${i<2?"Direction":"Delivery"}</small></div><h3>${x[0]}</h3><p>${x[1]}</p><b>${["Inputs aligned","Plan approved","System connected","Next signal ready"][i]}</b></article>`).join("")}<blockquote><span>Client Perspective</span><p>“${quotes[1][2]}”</p><footer>${quotes[1][0]} · ${quotes[1][1]}</footer></blockquote></div></div></section>
  <section class="wno-option wno-dossier section" data-nav-theme="dark"><div class="shell">${label("08","Midnight Dossier","Editorial · Layered · Dramatic")}<div class="wno-dossier-head"><p class="section-tag">How Projects Move</p><h2>The strategy file stays open from first question to next move.</h2></div><div class="wno-dossier-body"><div class="wno-dossier-steps">${steps.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p><small>${["Listen / Audit / Frame","Position / Map / Prioritize","Design / Develop / Launch","Measure / Learn / Refine"][i]}</small></article>`).join("")}</div><aside><p class="section-tag">Client Perspective</p><blockquote>“${quotes[0][2]}”</blockquote><footer><strong>${quotes[0][0]}</strong><span>${quotes[0][1]}</span></footer><div><i></i><small>Verified partnership note</small></div></aside></div></div></section>
  <section class="wno-option wno-orbit section" data-nav-theme="dark"><div class="shell">${label("09","Signal Orbit","Spatial · Bold · Memorable")}<div class="wno-orbit-head"><p class="section-tag">How Projects Move</p><h2>Four disciplines orbit one business decision.</h2></div><div class="wno-orbit-grid"><div class="wno-orbit-core"><span>VNW</span><strong>Clear direction</strong><small>Strategy → launch → improvement</small></div>${steps.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="wno-orbit-proof"><div><p class="section-tag">Client Perspective</p><strong>Responsive. Thoughtful. Dependable.</strong></div>${quotes.slice(1).map(x=>`<blockquote><p>“${x[2]}”</p><footer>${x[0]} · ${x[1]}</footer></blockquote>`).join("")}</div></div></section>
  <section class="wno-option wno-glass section" data-nav-theme="dark"><div class="shell">${label("10","Black Glass","Premium · Atmospheric · Conversion-led")}<div class="wno-glass-stage"><div class="wno-glass-copy"><p class="section-tag">How Projects Move</p><h2>Clarity at every layer.</h2><p>Premium glass panels compress the process into a confident agency system while the client story becomes the emotional focal point.</p><a class="pill pill-blue" href="${path("contact.html")}">Talk through a project <span>↗</span></a></div><div class="wno-glass-steps">${steps.map((x,i)=>`<article><span>0${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div></div><div class="wno-glass-proof"><blockquote><span>Client Perspective</span><p>“${quotes[0][2]}”</p><footer>${quotes[0][0]} · ${quotes[0][1]}</footer></blockquote><div>${quotes.slice(1).map(x=>`<article><p>“${x[2]}”</p><footer>${x[0]} · ${x[1]}</footer></article>`).join("")}</div></div></div></section>`;
}

function workCreativeOptions(){
  const steps=[
    ["Discover","We find the business problem, audience tension, proof, and clearest opportunity."],
    ["Shape","We define the message, structure, scope, and creative direction."],
    ["Build","Design, content, development, visibility, and tracking come together."],
    ["Improve","Real questions and performance signals guide the next useful move."]
  ];
  const quotes=[
    ["Robert","Marlboro Jewish Day Camp","They promised and delivered, offered key suggestions, and created an exceptional product from our vision."],
    ["Sveta","A2Z Academy","I felt supported and well-informed throughout the website-building process."],
    ["Emad","Grill Point","Excellent service at a reasonable price with a professional team."]
  ];
  const images=["assets/home-process-strategy-screen.png","assets/home-process-trust-system.png","assets/home-process-lead-path.png"];
  const visualLabels=["Strategy screen","Trust system","Lead path"];
  const label=(n,name,note)=>`<div class="wco-label"><span>Option ${n}</span><strong>${name}</strong><small>${note}</small></div>`;
  return `<section class="wco-intro section" id="page-content" data-nav-theme="light"><div class="shell"><p class="section-tag">New Creative Set</p><h2>Less dashboard. More visual story.</h2><p>These directions use project imagery, expressive typography, editorial composition, and more distinctive client-proof moments.</p></div></section>
  <section class="wco-option wco-lens section" data-nav-theme="light"><div class="shell">${label("11","Project Lens","Image-led · Layered · Premium")}<div class="wco-lens-stage"><div class="wco-lens-image"><img src="${img(images[0])}" alt="South Carolina Motors website project"><span>Selected Project / 01</span></div><div class="wco-lens-copy"><p class="section-tag">How Projects Move</p><h2>See the work taking shape.</h2><div>${steps.map((x,i)=>`<article><span>0${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div></div></div><blockquote class="wco-lens-proof"><span>Client Perspective</span><p>“${quotes[0][2]}”</p><footer>${quotes[0][0]} · ${quotes[0][1]}</footer></blockquote></div></section>
  <section class="wco-option wco-paper section" data-nav-theme="light"><div class="shell">${label("12","Studio Scrapbook","Tactile · Human · Unexpected")}<div class="wco-paper-board"><div class="wco-paper-title"><p class="section-tag">How Projects Move</p><h2>Good work rarely begins in a straight line.</h2><p>Research, ideas, proof, screens, and decisions gradually become one clear direction.</p></div>${steps.map((x,i)=>`<article class="wco-paper-note note-${i+1}"><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}<figure class="wco-paper-photo"><img src="${img(images[1])}" alt="Rice's Collision website project"><figcaption>Built around confidence and easier action.</figcaption></figure><blockquote class="wco-paper-quote"><span>Client Perspective</span><p>“${quotes[1][2]}”</p><footer>${quotes[1][0]} · ${quotes[1][1]}</footer></blockquote></div></div></section>
  <section class="wco-option wco-swiss section" data-nav-theme="light"><div class="shell">${label("13","Swiss Evidence","Graphic · Minimal · Confident")}<div class="wco-swiss-head"><div><p class="section-tag">How Projects Move</p><h2>Clarity is the process.</h2></div><strong>04<br>CONNECTED<br>PHASES</strong></div><div class="wco-swiss-grid">${steps.map((x,i)=>`<article><span>${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div><div class="wco-swiss-proof"><img src="${img(images[2])}" alt="H2Bros Plumbing website project"><div><span>Client Perspective</span><blockquote>“${quotes[2][2]}”</blockquote><footer>${quotes[2][0]} · ${quotes[2][1]}</footer></div></div></div></section>
  <section class="wco-option wco-cinema section" data-nav-theme="dark"><div class="shell">${label("14","Cinematic Chapters","Immersive · Visual · Story-driven")}<div class="wco-cinema-stage"><img src="${img(images[1])}" alt="Rice's Collision project screen"><div class="wco-cinema-overlay"><p class="section-tag">How Projects Move</p><h2>One story.<br>Four chapters.</h2><div class="wco-cinema-chapters">${steps.map((x,i)=>`<article><span>0${i+1}</span><strong>${x[0]}</strong></article>`).join("")}</div></div></div><div class="wco-cinema-proof"><div><span>Client Perspective</span><strong>Creative work feels stronger when the process feels dependable.</strong></div>${quotes.slice(0,2).map(x=>`<blockquote><p>“${x[2]}”</p><footer>${x[0]} · ${x[1]}</footer></blockquote>`).join("")}</div></div></section>
  <section class="wco-option wco-gallery section" data-nav-theme="light"><div class="shell">${label("15","Gallery Walk","Curated · Spacious · Agency-led")}<div class="wco-gallery-head"><p class="section-tag">How Projects Move</p><h2>Walk through the thinking behind the screen.</h2></div><div class="wco-gallery-wall">${steps.map((x,i)=>`<article><figure><img src="${img(images[i%images.length])}" alt="VNW Media project example"><span>0${i+1}</span></figure><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="wco-gallery-proof"><div><p class="section-tag">Client Perspective</p><h3>The people behind the project matter as much as the pixels.</h3></div>${quotes.map(x=>`<blockquote><p>“${x[2]}”</p><footer>${x[0]} · ${x[1]}</footer></blockquote>`).join("")}</div></div></section>`;
}

function workAlternativeOptions(){
  const steps=[
    ["Discover","Clarify the business goal, audience, friction, proof, and highest-value opportunity."],
    ["Shape","Define the message, page structure, creative direction, scope, and conversion path."],
    ["Build","Connect design, content, development, search foundations, tracking, and launch details."],
    ["Improve","Use customer questions and performance signals to prioritize the next useful refinement."]
  ];
  const quotes=[
    ["Robert","Marlboro Jewish Day Camp","They promised and delivered, offered key suggestions, and created an exceptional product from our vision."],
    ["Sveta","A2Z Academy","I felt supported and well-informed throughout the website-building process."],
    ["Emad","Grill Point","Excellent service at a reasonable price with a professional team."]
  ];
  const label=(n,name,note)=>`<div class="wao-label"><span>Option ${n}</span><strong>${name}</strong><small>${note}</small></div>`;
  return `<section class="wao-intro section" id="page-content" data-nav-theme="light"><div class="shell"><p class="section-tag">Alternative Set</p><h2>Quiet confidence, clearer structure.</h2><p>Five premium light options that remove visual gimmicks and let the process, language, and client proof do the work.</p></div></section>
  <section class="wao-option wao-ledger section" data-nav-theme="light"><div class="shell">${label("16","Process Ledger","Orderly · Premium · Direct")}<div class="wao-ledger-head"><div><p class="section-tag">How Projects Move</p><h2>A clear record of what happens next.</h2></div><p>Each phase has a purpose, an output, and a natural handoff—presented with the confidence of an experienced agency.</p></div><div class="wao-ledger-grid"><div class="wao-ledger-steps">${steps.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p><small>${["Context aligned","Direction approved","System connected","Next priority clear"][i]}</small></article>`).join("")}</div><aside><span>Client Perspective</span><blockquote>“${quotes[0][2]}”</blockquote><footer><strong>${quotes[0][0]}</strong>${quotes[0][1]}</footer></aside></div></div></section>
  <section class="wao-option wao-sequence section" data-nav-theme="light"><div class="shell">${label("17","Floating Sequence","Soft · Modern · Approachable")}<div class="wao-sequence-head"><p class="section-tag">How Projects Move</p><h2>Structured enough to trust. Flexible enough to think.</h2></div><div class="wao-sequence-cards">${steps.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="wao-sequence-proof"><div><span>Client Perspective</span><strong>Support is part of the process.</strong></div>${quotes.slice(1).map(x=>`<blockquote><p>“${x[2]}”</p><footer>${x[0]} · ${x[1]}</footer></blockquote>`).join("")}</div></div></section>
  <section class="wao-option wao-timeline section" data-nav-theme="light"><div class="shell">${label("18","Quiet Timeline","Minimal · Linear · Calm")}<div class="wao-timeline-head"><div><p class="section-tag">How Projects Move</p><h2>Progress without unnecessary complexity.</h2></div><p>A calm, horizontal process designed for fast scanning and easy understanding.</p></div><div class="wao-timeline-track">${steps.map((x,i)=>`<article><span>0${i+1}</span><i></i><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="wao-timeline-quote"><span>Client Perspective</span><blockquote>“${quotes[1][2]}”</blockquote><footer>${quotes[1][0]} · ${quotes[1][1]}</footer></div></div></section>
  <section class="wao-option wao-dual section" data-nav-theme="light"><div class="shell">${label("19","Dual Narrative","Balanced · Editorial · Credible")}<div class="wao-dual-grid"><div class="wao-dual-process"><p class="section-tag">How Projects Move</p><h2>The work and the working relationship—side by side.</h2>${steps.map((x,i)=>`<article><span>0${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div><div class="wao-dual-proof"><p class="section-tag">Client Perspective</p>${quotes.map((x,i)=>`<blockquote class="${i===0?"featured":""}"><p>“${x[2]}”</p><footer>${x[0]} · ${x[1]}</footer></blockquote>`).join("")}</div></div></div></section>
  <section class="wao-option wao-chapters section" data-nav-theme="light"><div class="shell">${label("20","Agency Chapters","Editorial · Spacious · Assured")}<div class="wao-chapters-head"><p class="section-tag">How Projects Move</p><h2>Four chapters. One accountable direction.</h2></div><div class="wao-chapters-list">${steps.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p><b>${["Understand","Decide","Create","Advance"][i]}</b></article>`).join("")}</div><div class="wao-chapters-proof"><div><span>Client Perspective</span><h3>Dependable should never mean ordinary.</h3></div><blockquote><p>“${quotes[0][2]}”</p><footer>${quotes[0][0]} · ${quotes[0][1]}</footer></blockquote></div></div></section>`;
}

function homeProcessOptions(){
  const steps=[
    ["Discover","We clarify the business, audience, offer, competitors, current gaps, and the moments where prospects lose confidence.","Output: opportunity map"],
    ["Strategize","We define the message, page structure, campaign priorities, SEO direction, content needs, and conversion path.","Output: growth blueprint"],
    ["Create","Design, copy, development, search foundations, analytics, and campaign assets come together as one connected system.","Output: launch-ready experience"],
    ["Launch","We test the details, connect tracking, prepare the team, and take the new website or campaign live with confidence.","Output: clean rollout"],
    ["Improve","Performance data, search behavior, customer questions, and real feedback guide the next useful refinement.","Output: next growth move"]
  ];
  const metrics=["Strategy clarity","Trust signals","Search readiness","Conversion path","Ongoing improvement"];
  const images=["assets/home-process-strategy-screen.png","assets/home-process-trust-system.png","assets/home-process-lead-path.png"];
  const visualLabels=["Strategy screen","Trust system","Lead path"];
  const optionLabel=(n,title,note,next)=>`<div class="hpo-label"><span>Option ${n}</span><strong>${title}</strong><small>${note}</small>${next?`<a href="#${next}">Next option ↓</a>`:`<a href="#top">Back to top ↑</a>`}</div>`;
  return `<section class="hpo-intro section" id="page-content" data-nav-theme="light"><div class="shell hpo-intro-grid"><div><p class="section-tag">Homepage / Our Process</p><h2>Option 04 expanded into four image-led process directions.</h2></div><p>The current homepage section is still untouched. Since Option 04 felt closest, I added custom process visuals and three new variations that keep the same cinematic, agency-style foundation.</p></div><nav class="shell hpo-jumps" aria-label="Our Process design options"><a href="#process-option-1">01 Editorial</a><a href="#process-option-2">02 Operating System</a><a href="#process-option-3">03 Sprint Board</a><a href="#process-option-4">04 Timeline</a><a href="#process-option-4b">04B Filmstrip</a><a href="#process-option-4c">04C Split Story</a><a href="#process-option-4d">04D Gallery Stack</a><a href="#process-option-5">05 Confidence Stack</a></nav></section>
  <section class="hpo-option hpo-roadmap section" id="process-option-1" data-nav-theme="light"><div class="shell">${optionLabel("01","The Editorial Roadmap","Premium · Spacious · Calm","process-option-2")}<div class="hpo-roadmap-grid"><aside><p class="section-tag">Our Process</p><h2>A clear path from business challenge to digital growth.</h2><p>This option keeps the refined typography of the site, but gives the process more breathing room and a stronger editorial rhythm.</p><a class="pill pill-blue" href="${path("contact.html")}">Start with discovery <span>↗</span></a></aside><div class="hpo-roadmap-list">${steps.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><div><h3>${x[0]}</h3><p>${x[1]}</p><small>${x[2]}</small></div></article>`).join("")}</div></div></div></section>
  <section class="hpo-option hpo-os section" id="process-option-2" data-nav-theme="dark"><div class="shell">${optionLabel("02","The Agency Operating System","Dark · Technical · High-trust","process-option-3")}<div class="hpo-os-grid"><div class="hpo-os-copy"><p class="section-tag">Our Process</p><h2>Every phase connects to the next signal.</h2><p>A darker, more premium direction that makes the agency feel organized, strategic, and systems-minded without turning it into a boring checklist.</p><div class="hpo-os-status"><span><i></i> Strategy aligned</span><span><i></i> Build path visible</span><span><i></i> Growth loop active</span></div></div><div class="hpo-os-board">${steps.map((x,i)=>`<article><span>0${i+1}</span><i></i><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div></div></div></section>
  <section class="hpo-option hpo-sprint section" id="process-option-3" data-nav-theme="light"><div class="shell">${optionLabel("03","The Conversion Sprint Board","Modern · Modular · UX-first","process-option-4")}<div class="hpo-sprint-head"><div><p class="section-tag">Our Process</p><h2>Every phase has a job, an output, and a next move.</h2></div><p>A current UX pattern: modular cards, clear outputs, compact hierarchy, and practical next-step language. It feels modern without getting visually noisy.</p></div><div class="hpo-sprint-grid">${steps.map((x,i)=>`<article class="${i===1?"featured":""}"><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p><small>${x[2]}</small></article>`).join("")}<aside><strong>Best fit if:</strong><p>You want the homepage process to feel organized, fast-moving, and easy for business owners to understand.</p><a class="pill pill-blue" href="${path("contact.html")}">Plan the first sprint <span>↗</span></a></aside></div></div></section>
  <section class="hpo-option hpo-cinema section" id="process-option-4" data-nav-theme="dark"><div class="shell">${optionLabel("04","The Image-Led Timeline","Visual · Immersive · Agency-style","process-option-4b")}<div class="hpo-cinema-stage"><div class="hpo-cinema-images">${images.map((x,i)=>`<figure><img src="${img(x)}" alt="VNW Media ${visualLabels[i]} process visual"><figcaption>${visualLabels[i]}</figcaption></figure>`).join("")}</div><div class="hpo-cinema-copy"><p class="section-tag">Our Process</p><h2>From first question to finished growth system.</h2><p>This direction uses custom website-process visuals to make the work feel tangible. It is less like a list and more like a walkthrough of the system taking shape.</p></div></div><div class="hpo-cinema-track">${steps.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>
  <section class="hpo-option hpo-film section" id="process-option-4b" data-nav-theme="dark"><div class="shell">${optionLabel("04B","The Process Filmstrip","Cinematic · Horizontal · Portfolio-led","process-option-4c")}<div class="hpo-film-head"><div><p class="section-tag">Our Process</p><h2>A visual sequence of how the work takes shape.</h2></div><p>This version makes the process feel like a premium agency case reel: strategy, trust, and lead flow each get a visual moment before the phase details.</p></div><div class="hpo-filmstrip">${images.map((x,i)=>`<figure><img src="${img(x)}" alt="VNW Media ${visualLabels[i]} process visual"><figcaption><span>0${i+1}</span>${visualLabels[i]}</figcaption></figure>`).join("")}</div><div class="hpo-film-steps">${steps.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>
  <section class="hpo-option hpo-storyboard section" id="process-option-4c" data-nav-theme="light"><div class="shell">${optionLabel("04C","The Website Storyboard","Bright · Editorial · Visual UX","process-option-4d")}<div class="hpo-storyboard-grid"><aside><p class="section-tag">Our Process</p><h2>Build the website like a customer decision story.</h2><p>This keeps the image-led feel, but makes the section brighter and more editorial. Each phase is tied to what the visitor needs to understand before they act.</p><a class="pill pill-blue" href="${path("contact.html")}">Map my customer journey <span>↗</span></a></aside><div class="hpo-storyboard-panel"><figure><img src="${img(images[0])}" alt="VNW Media strategy screen process visual"><figcaption>Strategy screen</figcaption></figure><div>${steps.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></div></div></section>
  <section class="hpo-option hpo-gallery-stack section" id="process-option-4d" data-nav-theme="dark"><div class="shell">${optionLabel("04D","The Gallery Stack","Layered · Premium · Conversion-led","process-option-5")}<div class="hpo-gallery-stack-grid"><div class="hpo-gallery-stack-copy"><p class="section-tag">Our Process</p><h2>Strategy, proof, and action stacked into one system.</h2><p>A stronger visual version for the homepage if you want the process section to feel more like a hero moment than a supporting block.</p></div><div class="hpo-gallery-stack-images">${images.map((x,i)=>`<figure><img src="${img(x)}" alt="VNW Media ${visualLabels[i]} process visual"><figcaption>${visualLabels[i]}</figcaption></figure>`).join("")}</div></div><div class="hpo-gallery-stack-steps">${steps.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p><small>${x[2]}</small></article>`).join("")}</div></div></section>
  <section class="hpo-option hpo-stack section" id="process-option-5" data-nav-theme="light"><div class="shell">${optionLabel("05","The Client Confidence Stack","Strategic · Outcome-led · Conversion-focused","")}<div class="hpo-stack-grid"><aside><p class="section-tag">Our Process</p><h2>Make every phase answer the question: “Why should they choose us?”</h2><p>This option ties the internal agency process to the customer’s buying decision, which makes it especially strong for a lead-generation homepage.</p><a class="pill pill-blue" href="${path("contact.html")}">Build my growth stack <span>↗</span></a></aside><div class="hpo-stack-layers">${steps.map((x,i)=>`<article><div><span>0${i+1}</span><h3>${x[0]}</h3></div><p>${x[1]}</p><small>${metrics[i]}</small></article>`).join("")}</div></div></div></section>`;
}

function workPageOne(){
  const projectScopes=[
    ["Website strategy","Inventory experience","Lead paths"],
    ["Credibility system","Service clarity","Estimate requests"],
    ["Local service UX","Click-to-call","Service-area content"]
  ];
  const principles=[
    ["Strategy","Start with the business goal, audience, offer, and decision the website needs to support."],
    ["Design","Build a visual system that makes the brand easier to trust and the content easier to understand."],
    ["Visibility","Create useful service, industry, and local context that supports search and campaign relevance."],
    ["Conversion","Make calls, forms, estimates, appointments, and other next steps obvious on every device."]
  ];
  const processSteps=[
    ["Discover","Review the business, customer journey, current site, competition, proof, and growth priorities."],
    ["Shape","Define the message, page structure, design direction, content needs, and conversion paths."],
    ["Build","Bring design, copy, development, SEO foundations, tracking, and launch details together."],
    ["Improve","Use real customer questions and performance signals to guide the next useful refinement."]
  ];
  const reviews=[
    ["Robert","Marlboro Jewish Day Camp","They promised and delivered, offered key suggestions, and created an exceptional product from our vision."],
    ["Sveta","A2Z Academy","I felt supported and well-informed throughout the website-building process."],
    ["Emad","Grill Point","Excellent service at a reasonable price with a professional team."]
  ];
  const moreWork=["Best Pro Service","Leo Mikityanskiy","NJ Steps to Success","Kahn Yuniver Law","Grill Point","Kid’s World Preschool","Senior Comfort","Brooklyn Motors","Best Blinds","Urgent Doctor","Quality Wellness Group","Adamco Diamonds"];
  return `<section class="work work-agency-featured section" id="page-content"><div class="shell"><div class="work-agency-head reveal"><div><p class="section-tag">Selected Work</p><h2>Different industries. The same focus on clarity, trust, and action.</h2></div><p>Each project begins with a different business problem. The work below shows how strategy, design, content, search context, and lead paths come together around the customer’s next decision.</p></div><div class="work-grid">${DATA.cases.map((x,i)=>`<a class="work-card work-agency-card reveal" href="${path(`case-studies/${x[1]}.html`)}"><img src="${img(x[4])}" alt="${esc(x[0])}"><div><span>${esc(x[2])}</span><h3>${esc(x[0])}</h3><p>${esc(x[3])}</p><ul>${projectScopes[i].map(scope=>`<li>${scope}</li>`).join("")}</ul><b>Read case study ↗</b></div></a>`).join("")}</div><div class="portfolio-list reveal">${moreWork.map((x,i)=>`<a href="${path("contact.html")}"><span>${String(i+4).padStart(2,"0")}</span><strong>${x}</strong><i>Discuss this work ↗</i></a>`).join("")}</div></div></section>
  <section class="work-agency-method section" data-nav-theme="dark"><div class="shell work-agency-method-grid"><div class="work-agency-method-copy reveal"><p class="section-tag">What Connects The Work</p><h2>More than a gallery. A working digital system.</h2><p>Strong agency work should explain what changed, why it matters, and how the pieces support the business—not just display polished screens.</p><a class="pill pill-blue" href="${path("contact.html")}">Discuss your opportunity <span>↗</span></a></div><div class="work-agency-principles">${principles.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div></div></section>
  <section class="work-agency-process section" data-nav-theme="light"><div class="shell"><div class="work-agency-process-head reveal"><p class="section-tag">How Projects Move</p><h2>A clear path from the first conversation to the next improvement.</h2></div><div class="work-agency-process-grid">${processSteps.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>
  <section class="work-agency-proof section" data-nav-theme="light"><div class="shell"><div class="work-agency-proof-head reveal"><p class="section-tag">Client Perspective</p><h2>Creative work is stronger when the partnership feels dependable.</h2></div><div class="work-agency-quotes">${reviews.map(x=>`<blockquote class="reveal"><p>“${x[2]}”</p><footer><strong>${x[0]}</strong><span>${x[1]}</span></footer></blockquote>`).join("")}</div></div></section>
  ${workFAQ()}
  <section class="work-agency-final" data-nav-theme="dark"><div class="shell reveal"><p class="section-tag">Your Project Could Be Next</p><h2>Bring us the website, campaign, or growth problem that needs a clearer direction.</h2><p>We’ll review the current experience, identify the largest sources of friction, and recommend a practical next move.</p><div><a class="pill pill-blue pill-large" href="${path("contact.html")}">Plan my project <span>↗</span></a><a class="pill pill-outline pill-large" href="${path("services.html?v=12")}">Explore services</a></div></div></section>`;
}

function workHub(){
  const options=[
    ["01","Classic Portfolio Grid","The current Work page direction: visual project cards plus an extended portfolio list.","work-option-1.html","Best for a simple, quick-scanning portfolio page.","assets/case-automotive-impact.svg"],
    ["02","SEO + Sales Portfolio","A more detailed portfolio page with service categories, industry proof, FAQs, and strategic CTA blocks.","work-option-2.html","Best for organic search and visitors comparing agencies.","assets/case-hero-impact.svg"],
    ["03","Industry Matchmaker","A page organized around industries, customer intent, and what VNW solves for each business type.","work-option-3.html","Best when prospects want to see work relevant to their market.","assets/case-final-cta.svg"],
    ["04","Conversion Dashboard","A dashboard-style Work page explaining UX, SEO, trust, calls, forms, and measurement layers.","work-option-4.html","Best for proving VNW builds lead-generation systems, not just pages.","assets/case-system-stack.svg"],
    ["05","Premium Portfolio Lab","A more creative editorial work page with project notes, service matrix, FAQs, and premium CTAs.","work-option-5.html","Best for a high-impact agency impression.","assets/case-collision-impact.svg"],
    ["06","Black Index Portfolio","A stark studio-style index with big numbers, sharp proof statements, and compact project intelligence.","work-option-6.html","Best for a bolder, more premium agency mood.","assets/case-system-stack.svg"],
    ["07","Agency Magazine","An editorial layout with feature stories, columns, pull quotes, FAQs, and conversion prompts.","work-option-7.html","Best when the Work page should feel more custom and content-rich.","assets/case-final-cta.svg"],
    ["08","Local Growth Map","A territory-driven layout built around local SEO, industries, service areas, and customer intent.","work-option-8.html","Best for attracting businesses that care about local visibility.","assets/case-plumbing-impact.svg"],
    ["09","Build-Room Stack","A modular systems page showing how strategy, design, SEO, ads, and reputation work together.","work-option-9.html","Best for selling VNW as a full-service growth partner.","assets/case-automotive-impact.svg"],
    ["10","Audit Room","A diagnostic page showing common website problems, VNW fixes, project examples, and CTAs.","work-option-10.html","Best for prospects who know their site is underperforming.","assets/case-collision-impact.svg"]
  ];
  const recommendations=[
    ["Best overall starting point","Option 10 / Audit Room","It gives prospects a reason to take action by naming the problems they already feel: unclear messaging, weak SEO, hidden trust, and lost leads.","work-option-10.html"],
    ["Best premium creative impression","Option 7 / Agency Magazine","It feels more custom and less template-like, while still explaining the thinking behind the work.","work-option-7.html"],
    ["Best SEO-focused structure","Option 8 / Local Growth Map","It adds industry, service-area, and local-search language that can help the page feel more relevant to Google and prospects.","work-option-8.html"]
  ];
  const included=["Clear portfolio positioning","Service and industry context","Lead-generation language","SEO-friendly FAQs","Repeated consultation CTAs","Trust-building project proof"];
  const chooser=[["Want safest?","Use Option 2 or 4"],["Want boldest?","Use Option 6 or 7"],["Want local SEO?","Use Option 8"],["Want full-service?","Use Option 9"],["Want more leads now?","Use Option 10"]];
  const qs=[
    ["Which Work page option should VNW use first?","Start with Option 10 if the goal is lead generation because it speaks directly to common website problems and gives visitors a strong reason to request a review. Option 7 is the stronger creative choice if the goal is a more premium agency impression."],
    ["Should the Work page only show completed projects?","No. A stronger Work page should show project proof, but it should also explain strategy, industries served, services provided, conversion thinking, and why the work matters to business growth."],
    ["What makes a Work page better for SEO?","Helpful headings, relevant service language, industry context, internal links, FAQs, case-study links, descriptive project summaries, and clear calls to action all help the page become more useful for search and visitors."],
    ["How many calls to action should the page have?","A good Work page should include multiple CTAs at natural decision points: after the intro, after proof, after explanations, and near the bottom. The goal is to make the next step obvious without overwhelming the visitor."],
    ["Can these options be combined?","Yes. The final page can combine the best pieces: Option 10’s diagnostic hook, Option 7’s editorial feel, Option 8’s local SEO structure, and Option 9’s full-service system explanation."]
  ];
  return `<section class="work-hub section" id="page-content"><div class="shell"><div class="work-hub-intro reveal"><p class="section-tag">Work Page Concepts</p><h2>Choose how VNW’s portfolio should persuade the next client.</h2><p>Each option includes relevant portfolio content, service context, industry signals, lead-generation language, FAQs, and CTAs. They share the same brand system but use different page structures.</p></div><div class="work-option-grid">${options.map(x=>`<a class="work-option-card reveal" href="${path(x[3])}"><img src="${img(x[5])}" alt="${esc(x[1])} visual"><div><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><small>${x[4]}</small><b>Open option ↗</b></div></a>`).join("")}</div></div></section>
  <section class="work-hub-decision section"><div class="shell">
    <div class="work-hub-decision-head reveal"><p class="section-tag">My Recommendation</p><h2>If this were my site, I would not make people choose blindly.</h2><p>The Work hub should guide the decision, explain the tradeoffs, and push visitors toward the option most likely to create a lead.</p></div>
    <div class="work-rec-grid">${recommendations.map((x,i)=>`<a class="work-rec-card reveal" href="${path(x[3])}"><span>${String(i+1).padStart(2,"0")}</span><small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p><b>View this direction ↗</b></a>`).join("")}</div>
  </div></section>
  <section class="work-hub-included section"><div class="shell work-hub-included-grid">
    <div class="reveal"><p class="section-tag">What The Final Work Page Needs</p><h2>Regardless of the option, the final page should sell outcomes, not just screenshots.</h2><p>A digital marketing lead-generation company needs a Work page that builds confidence, explains capability, supports SEO, and moves visitors toward a consultation.</p><a class="pill pill-blue" href="${path("contact.html")}">Talk through the final direction <span>↗</span></a></div>
    <div class="work-included-list reveal">${included.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><strong>${x}</strong></article>`).join("")}</div>
  </div></section>
  <section class="work-hub-chooser section"><div class="shell"><div class="work-hub-chooser-grid reveal">${chooser.map(x=>`<article><small>${x[0]}</small><strong>${x[1]}</strong></article>`).join("")}</div></div></section>
  <section class="work-hub-faq faq section"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">Work Page FAQ</p><h2>What should be decided before picking the final design?</h2><p>These details make the Work page more useful for visitors and more complete for search.</p><a class="text-arrow" href="${path("contact.html")}">Get help choosing <span>↗</span></a></div><div class="faq-list reveal">${qs.map((x,i)=>`<details ${i===0?"open":""}><summary>${x[0]}<span>+</span></summary><p>${x[1]}</p></details>`).join("")}</div></div></section>
  <section class="work-hub-final-cta"><div class="shell reveal"><p class="section-tag">Recommended Next Step</p><h2>Choose the strongest direction, then combine the best pieces into one final Work page.</h2><p>My recommendation: use Option 10 as the lead-generation spine, borrow the polish from Option 7, and add the local SEO clarity from Option 8.</p><div><a class="pill pill-orange pill-large" href="${path("work-option-10.html")}">Start with Option 10 <span>↗</span></a><a class="pill pill-outline pill-large" href="${path("work-option-7.html")}">Compare Option 7</a></div></div></section>`;
}

function workFAQ(){
  const qs=[
    ["What types of work does VNW Media create?","VNW Media creates custom websites, local SEO foundations, lead-generation landing pages, Google PPC campaign paths, social content systems, reputation-focused pages, eCommerce experiences, and digital strategy for local and service-based businesses."],
    ["Do you only design websites?","No. The website is usually the center of the system, but the work often includes messaging, SEO structure, conversion strategy, content, reputation signals, campaign alignment, and post-launch improvement planning."],
    ["Can VNW redesign an existing website?","Yes. VNW can improve an existing website or create a new build when the current structure, messaging, speed, design, or conversion path is limiting growth."],
    ["Which industries does VNW support?","The portfolio includes automotive, home services, daycare, healthcare, restaurants, eyecare, real estate, legal, retail, professional services, and local businesses that need stronger visibility and lead flow."],
    ["How long does a website or marketing project take?","Timing depends on scope, content, functionality, approvals, and integrations. After discovery, VNW provides a practical project plan with clear phases and responsibilities."],
    ["Can results be measured after launch?","Yes. When tracking and platform access are available, the work can be evaluated through relevant signals such as calls, forms, appointment actions, visibility, engagement, sales, or lead quality."],
    ["How should a business start?","Start with a review of the current website, business goals, customer journey, service areas, and marketing channels. From there, VNW can recommend the right scope and priority order."]
  ];
  return `<section class="work-faq faq section"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">Work FAQ</p><h2>Useful details before you choose an agency.</h2><p>These answers add context for searchers comparing web design and digital marketing companies.</p><a class="text-arrow" href="${path("contact.html")}">Ask about your project <span>↗</span></a></div><div class="faq-list reveal">${qs.map((x,i)=>`<details ${i===0?"open":""}><summary>${x[0]}<span>+</span></summary><p>${x[1]}</p></details>`).join("")}</div></div></section>`;
}

function workOptionTwo(){
  const serviceFocus=[["Custom Website Design","Responsive design, page hierarchy, brand feel, and conversion-focused layouts."],["Local SEO Structure","Service pages, local signals, technical foundations, and search-friendly content paths."],["Lead Generation UX","Calls, forms, estimate requests, quote paths, and mobile-first actions."],["Trust & Reputation","Reviews, proof, project context, service explanations, and credibility signals."],["Campaign Readiness","Landing page paths, Google PPC alignment, tracking points, and follow-up logic."],["Ongoing Improvement","Insights, refinements, content growth, and performance-minded next steps."]];
  return `<section class="work-seo section" id="page-content"><div class="shell"><div class="work-seo-head reveal"><p class="section-tag">Option 2 / SEO + Sales Portfolio</p><h2>Portfolio pages should rank, explain, and convert.</h2><p>This option gives Google and prospects more context: what VNW builds, who it helps, how projects are structured, and why the work supports lead generation.</p><a class="pill pill-blue" href="${path("contact.html")}">Get a portfolio-style review <span>↗</span></a></div><div class="work-service-focus">${serviceFocus.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section><section class="work-proof-strip section"><div class="shell"><div class="case-gallery-head reveal"><div><p class="section-tag">Featured Work</p><h2>Project examples connected to real business goals.</h2></div><a class="pill pill-orange" href="${path("case-studies.html?v=13")}">View case options <span>↗</span></a></div><div class="case-strips">${DATA.cases.map((x,i)=>`<a class="case-strip reveal" href="${path(`case-studies/${x[1]}.html`)}"><span>${String(i+1).padStart(2,"0")}</span><img src="${img(x[4])}" alt="${esc(x[0])}"><div><small>${esc(x[2])}</small><h3>${esc(x[0])}</h3><p>${esc(x[3])}</p></div><b>View ↗</b></a>`).join("")}</div></div></section>${workFAQ()}<section class="work-cta-band"><div class="shell reveal"><h2>Want a website that can carry SEO, ads, trust, and lead generation?</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Start planning with VNW <span>↗</span></a></div></section>`;
}

function workOptionThree(){
  const industries=[["Automotive","Inventory discovery, dealership trust, repair confidence, click-to-call UX.","assets/case-automotive-impact.svg"],["Home Services","Emergency intent, local coverage, phone-first lead flow, service clarity.","assets/case-plumbing-impact.svg"],["Healthcare & Eyecare","Credibility, approachable service content, appointment paths, patient trust.","https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=82"],["Restaurants & Local Retail","Menus, ordering/catering routes, local search, social proof, repeat visits.","https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=82"],["Daycare & Education","Parent trust, enrollment calls, tour requests, location details, safety cues.","https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=82"],["Real Estate & Professional Services","Authority, clarity, lead capture, credibility, and high-value consultation paths.","https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=82"]];
  return `<section class="work-industry-page section" id="page-content"><div class="shell"><div class="work-industry-head reveal"><p class="section-tag">Option 3 / Industry Matchmaker</p><h2>Show prospects that VNW understands their business type.</h2><p>This direction makes the Work page more relevant for search and conversion by matching portfolio thinking to industries, customer behavior, and lead types.</p></div><div class="work-industry-grid">${industries.map((x,i)=>`<article class="work-industry-card reveal"><img src="${img(x[2])}" alt="${esc(x[0])} work category"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p><a href="${path("contact.html")}">Discuss this industry ↗</a></article>`).join("")}</div></div></section><section class="work-intent section"><div class="shell"><div class="process-heading reveal"><div><p class="section-tag">Customer Intent</p><h2>Different visitors need different proof before they act.</h2></div><p>That is why the Work page should connect projects to buyer behavior, not just screenshots.</p></div><div class="process-steps">${["They need to trust the business","They need to understand the service","They need to know the company serves their area","They need a clear next step","They need confidence on mobile"].map((x,i)=>`<article class="reveal"><span>0${i+1}</span><div><h3>${x}</h3><p>VNW designs content, proof, navigation, and calls-to-action around this decision point.</p></div></article>`).join("")}</div></div></section>${workFAQ()}`;
}

function workOptionFour(){
  const layers=[["Message","Can a visitor understand the offer within seconds?"],["Proof","Are reviews, project examples, and credibility signals visible?"],["Path","Are calls, forms, quotes, and booking actions easy to find?"],["Search","Do services, locations, and intent have clear content paths?"],["Mobile","Does the experience work for high-intent phone users?"],["Measure","Can future marketing be judged by calls, forms, and lead quality?"]];
  return `<section class="work-dashboard section" id="page-content"><div class="shell"><div class="work-dashboard-head reveal"><p class="section-tag">Option 4 / Conversion Dashboard</p><h2>A Work page that explains how stronger websites create stronger lead flow.</h2><p>This design makes VNW look analytical and practical by showing the layers behind each project: message, proof, path, search, mobile, and measurement.</p></div><div class="work-dashboard-grid">${layers.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section><section class="work-dashboard-projects section"><div class="shell"><div class="case-gallery-head reveal"><div><p class="section-tag">Project Dashboard</p><h2>Selected work mapped by business goal.</h2></div><a class="pill pill-blue" href="${path("contact.html")}">Audit my website <span>↗</span></a></div><div class="work-dashboard-cards">${DATA.cases.map((x,i)=>`<article class="case-dashboard-card reveal"><img src="${img(x[4])}" alt="${esc(x[0])} work visual"><div><p class="section-tag">${esc(x[2])}</p><h2>${esc(x[0])}</h2><dl><dt>Goal</dt><dd>${esc(x[3])}</dd><dt>Primary CTA</dt><dd>${i===0?"Call or request vehicle details":i===1?"Request an estimate or call the shop":"Tap to call or submit service details"}</dd><dt>SEO opportunity</dt><dd>${i===0?"Inventory and dealership discovery":i===1?"Collision repair and auto body service intent":"Local plumbing and emergency service intent"}</dd></dl></div></article>`).join("")}</div></div></section>${workFAQ()}`;
}

function workOptionFive(){
  const notes=[["Creative Direction","Custom visuals, strong layout rhythm, and a memorable digital presence."],["Conversion Copy","Headlines, proof, FAQs, and service messaging written for decision-making."],["Technical Build","Responsive structure, accessible navigation, and page systems that can scale."],["Marketing Fit","A website foundation that supports SEO, ads, social, email, and follow-up."],["Local Trust","Reviews, service areas, project examples, and business credibility placed where they matter."]];
  return `<section class="work-lab-page section" id="page-content"><div class="shell"><div class="work-lab-hero reveal"><img src="${img("assets/case-hero-impact.svg")}" alt="Premium work lab visual"><div><p class="section-tag">Option 5 / Premium Portfolio Lab</p><h2>Make the Work page feel like a strategic agency experience.</h2><p>This option is built for impact: strong visuals, editorial project cards, service notes, SEO content, FAQs, and repeated CTAs for serious buyers.</p><a class="pill pill-orange" href="${path("contact.html")}">Plan a premium site <span>↗</span></a></div></div><div class="work-lab-notes">${notes.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="case-lab-projects">${DATA.cases.map((x,i)=>`<article class="case-lab-project reveal"><div class="case-lab-project-top"><span>${String(i+1).padStart(2,"0")}</span><strong>${esc(x[2])}</strong></div><img src="${img(x[4])}" alt="${esc(x[0])} work visual"><h2>${esc(x[0])}</h2><p>${esc(x[3])}</p><ul><li>Strategy shaped around real buyer intent.</li><li>Trust and action points placed throughout the page.</li><li>Built to support visibility, credibility, and lead generation.</li></ul><a class="text-arrow" href="${path(`case-studies/${x[1]}.html`)}">Explore project <span>↗</span></a></article>`).join("")}</div></div></section>${workFAQ()}<section class="case-lab-cta"><div class="shell reveal"><p class="section-tag">Ready for stronger work?</p><h2>Your next website should be easier to trust, easier to find, and easier to act on.</h2><div>${["Web design","SEO","Lead generation","Reputation","Campaign landing pages"].map(x=>`<span>${x}</span>`).join("")}</div><a class="pill pill-orange pill-large" href="${path("contact.html")}">Get started <span>↗</span></a></div></section>`;
}

function workOptionSix(){
  const index=["Lead-generation websites","Local SEO foundations","Paid-search landing paths","Reputation proof systems","Service-area content","Mobile call flows","Portfolio storytelling","Post-launch improvement"];
  return `<section class="work-black section" id="page-content"><div class="shell work-black-grid"><div class="work-black-left reveal"><p class="section-tag">Option 6 / Black Index Portfolio</p><h2>Less gallery. More agency edge.</h2><p>A stripped-down, high-contrast Work page for a sharper premium impression. It lets VNW feel confident, selective, and strategic.</p><a class="pill pill-orange" href="${path("contact.html")}">Build my growth system <span>↗</span></a></div><div class="work-black-index">${index.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><strong>${x}</strong><small>Built around clarity, trust, search, and conversion.</small></article>`).join("")}</div></div></section><section class="work-black-projects"><div class="shell">${DATA.cases.map((x,i)=>`<a class="work-black-row reveal" href="${path(`case-studies/${x[1]}.html`)}"><span>${String(i+1).padStart(2,"0")}</span><img src="${img(x[4])}" alt="${esc(x[0])} work"><div><small>${esc(x[2])}</small><h2>${esc(x[0])}</h2><p>${esc(x[3])}</p></div><b>Open ↗</b></a>`).join("")}</div></section>${workFAQ()}`;
}

function workOptionSeven(){
  const columns=[["The headline has a job","A Work page should say what kind of business VNW helps and why the projects matter."],["The proof has to travel","Screenshots should connect to trust, lead flow, SEO, calls, and customer decisions."],["The CTA needs rhythm","Every few sections should invite a practical next step without feeling desperate."]];
  return `<section class="work-mag section" id="page-content"><div class="shell"><div class="work-mag-mast reveal"><p>VNW WORK JOURNAL</p><h2>Stories from the websites that have to earn the next call.</h2><a class="pill pill-blue" href="${path("contact.html")}">Pitch us your project <span>↗</span></a></div><article class="work-mag-feature reveal"><img src="${img("assets/case-final-cta.svg")}" alt="Editorial work feature"><div><span>Cover Feature</span><h3>Portfolio pages do not need to feel like portfolios.</h3><p>This option treats Work like an agency magazine: strong editorial pacing, feature stories, practical columns, and proof that reads like thinking instead of filler.</p></div></article><div class="work-mag-columns">${columns.map(x=>`<article class="reveal"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="work-mag-issues">${DATA.cases.map((x,i)=>`<article class="reveal"><span>Issue 0${i+1}</span><img src="${img(x[4])}" alt="${esc(x[0])}"><h3>${esc(x[0])}</h3><p>${esc(x[3])}</p><a class="text-arrow" href="${path(`case-studies/${x[1]}.html`)}">Read the feature <span>↗</span></a></article>`).join("")}</div></div></section>${workFAQ()}`;
}

function workOptionEight(){
  const zones=[["Automotive","inventory, estimates, repairs, reputation"],["Home Services","emergency calls, service areas, local trust"],["Healthcare","appointments, credibility, patient clarity"],["Restaurants","menus, catering, ordering, repeat visits"],["Daycare","tours, enrollment, parent confidence"],["Professional Services","authority, consultation paths, proof"]];
  return `<section class="work-map section" id="page-content"><div class="shell work-map-grid"><div class="work-map-copy reveal"><p class="section-tag">Option 8 / Local Growth Map</p><h2>Show the work by market demand, not by screenshot.</h2><p>This layout is built for SEO. It connects VNW’s work to industries, service areas, lead types, local search behavior, and the content a business needs to be chosen.</p><a class="pill pill-orange" href="${path("contact.html")}">Map my local growth <span>↗</span></a></div><div class="work-map-board reveal">${zones.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section><section class="work-map-proof section"><div class="shell"><div class="process-heading reveal"><div><p class="section-tag">Local SEO Signals</p><h2>What this Work page makes searchable.</h2></div><p>Services, industries, intent, proof, locations, and conversion actions all get clearer context.</p></div><div class="case-score-grid">${["Service pages","Industry pages","Review proof","Click-to-call paths","Landing pages","Service-area content"].map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x}</h3><p>Useful for prospects and readable for search engines.</p></article>`).join("")}</div></div></section>${workFAQ()}`;
}

function workOptionNine(){
  const stack=[["Strategy Room","Messaging, audience, offers, priority services, and growth goals."],["Design Room","Visual system, page rhythm, brand trust, and mobile behavior."],["SEO Room","Service intent, local signals, page structure, and content opportunities."],["Ads Room","Campaign landing paths, form friction, and qualified inquiry flow."],["Reputation Room","Reviews, proof, credibility, case studies, and confidence cues."],["Follow-Up Room","Email, text, nurture, and post-launch improvement ideas."]];
  return `<section class="work-stack section" id="page-content"><div class="shell"><div class="work-stack-head reveal"><p class="section-tag">Option 9 / Build-Room Stack</p><h2>A Work page that sells the system behind the work.</h2><p>This concept feels less like a portfolio and more like a production floor. It shows how VNW combines creative, technical, and marketing layers into one growth engine.</p></div><div class="work-stack-rooms">${stack.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="work-stack-projects reveal">${DATA.cases.map(x=>`<a href="${path(`case-studies/${x[1]}.html`)}"><img src="${img(x[4])}" alt="${esc(x[0])}"><strong>${esc(x[0])}</strong><span>${esc(x[2])}</span></a>`).join("")}</div></div></section><section class="work-cta-band"><div class="shell reveal"><h2>If your marketing pieces feel disconnected, this is the option that sells the fix.</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Connect my website and marketing <span>↗</span></a></div></section>${workFAQ()}`;
}

function workOptionTen(){
  const problems=[["The offer is unclear","Rewrite the first screen around the visitor’s decision.","Homepage, service pages, landing pages"],["Traffic has no path","Create stronger calls, forms, phone actions, and next steps.","Lead generation UX"],["SEO is too thin","Add service intent, industry context, FAQs, and local relevance.","Search visibility"],["Trust is hidden","Bring reviews, work examples, credentials, and proof closer to CTAs.","Conversion confidence"],["Mobile is leaking leads","Prioritize tap-to-call, simple navigation, and shorter forms.","Mobile conversion"]];
  return `<section class="work-audit section" id="page-content"><div class="shell"><div class="work-audit-head reveal"><p class="section-tag">Option 10 / Audit Room</p><h2>Show prospects what is wrong, then show them VNW knows how to fix it.</h2><p>This page is built for business owners who feel their website is underperforming but cannot name exactly why.</p><a class="pill pill-blue" href="${path("contact.html")}">Request my audit <span>↗</span></a></div><div class="work-audit-table">${problems.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p><small>${x[2]}</small></article>`).join("")}</div><div class="work-audit-cases">${DATA.cases.map(x=>`<article class="reveal"><img src="${img(x[4])}" alt="${esc(x[0])}"><div><strong>${esc(x[0])}</strong><p>${esc(x[3])}</p></div></article>`).join("")}</div></div></section>${workFAQ()}<section class="case-lab-cta"><div class="shell reveal"><p class="section-tag">Audit CTA</p><h2>Bring us the website that is bothering you. We’ll show you where the leads are leaking.</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Find my biggest website gaps <span>↗</span></a></div></section>`;
}

function servicesPageOne(){
  return `<section class="services section" id="page-content"><div class="shell">${cards(DATA.services,"service")}<div class="case-cta reveal"><p>Need help choosing the right mix? Start with the goal, then build the service stack around it.</p><a class="pill pill-blue" href="${path("contact.html")}">Plan my service mix <span>↗</span></a></div></div></section>${process()}${servicesFAQ()}`;
}

function servicesHub(){
  const options=[
    ["01","Connected Service Grid","The current clean service-card layout with all VNW capabilities visible at a glance.","service-option-1.html","Best for simple browsing.","assets/case-automotive-impact.svg"],
    ["02","Conversion Stack","A buyer-journey layout from attention to inquiry, showing how each service supports lead generation.","service-option-2.html","Best for explaining how services work together.","assets/case-final-cta.svg"],
    ["03","SEO Service Library","A search-friendly service directory with clusters, service detail, FAQs, and internal-link logic.","service-option-3.html","Best for organic search depth.","assets/case-plumbing-impact.svg"],
    ["04","Growth System","A strategic map showing website, SEO, PPC, content, reputation, and follow-up as one engine.","service-option-4.html","Best for full-service positioning.","assets/case-system-stack.svg"],
    ["05","Goal-Based Paths","A guided page where visitors choose by business goal: calls, rankings, trust, sales, or retention.","service-option-5.html","Best for reducing choice fatigue.","assets/case-hero-impact.svg"],
    ["06","Diagnostic Audit","A problem-first service page mapping common marketing gaps to the service that fixes each one.","service-option-6.html","Best for lead generation and urgency.","assets/case-collision-impact.svg"],
    ["07","Capabilities Deck","A boardroom-style service page with executive slides, capability cards, proof, and CTAs.","service-option-7.html","Best for premium B2B feel.","assets/case-system-stack.svg"],
    ["08","Local Growth Playbook","A local-business service page built around rankings, reviews, calls, service areas, and landing pages.","service-option-8.html","Best for local businesses.","assets/case-plumbing-impact.svg"],
    ["09","Service Journal","An editorial/magazine-style service page explaining capability through articles and service notes.","service-option-9.html","Best for unique brand feel.","assets/case-final-cta.svg"],
    ["10","Recommendation Guide","A practical comparison page showing which services to prioritize first and why.","service-option-10.html","Best for helping prospects decide.","assets/case-automotive-impact.svg"]
  ];
  const recs=[["Best overall","Option 6 / Diagnostic Audit","It creates urgency by helping prospects recognize what is broken and how VNW can fix it.","service-option-6.html"],["Best for SEO","Option 3 / SEO Service Library","It gives Google and visitors more structured service content, FAQs, and internal-link opportunities.","service-option-3.html"],["Best premium feel","Option 7 / Capabilities Deck","It feels polished, strategic, and less like a basic agency services list.","service-option-7.html"]];
  const included=["Clear service positioning","Lead-generation CTAs","SEO-friendly FAQs","Trust and proof sections","Service prioritization logic","Internal links to detail pages"];
  return `<section class="services-hub section" id="page-content"><div class="shell"><div class="services-hub-intro reveal"><p class="section-tag">Services Page Concepts</p><h2>Choose how VNW should explain what it does.</h2><p>A strong Services page should do more than list capabilities. It should help a business owner understand what to prioritize, why the pieces connect, and how to start.</p></div><div class="services-option-grid">${options.map(x=>`<a class="services-option-card reveal" href="${path(x[3])}"><img src="${img(x[5])}" alt="${esc(x[1])} services concept"><div><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><small>${x[4]}</small><b>Open option ↗</b></div></a>`).join("")}</div></div></section>
  <section class="services-hub-rec section"><div class="shell"><div class="services-hub-rec-head reveal"><p class="section-tag">My Recommendation</p><h2>For a lead-generation agency, the Services page should guide the buyer, not overwhelm them.</h2></div><div class="work-rec-grid">${recs.map((x,i)=>`<a class="work-rec-card reveal" href="${path(x[3])}"><span>${String(i+1).padStart(2,"0")}</span><small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p><b>View this direction ↗</b></a>`).join("")}</div></div></section>
  <section class="services-hub-included section"><div class="shell work-hub-included-grid"><div class="reveal"><p class="section-tag">What The Final Services Page Needs</p><h2>Sell the system, not a random list of marketing tasks.</h2><p>The final Services page should connect websites, SEO, PPC, reputation, content, social, email, and follow-up into one practical growth path.</p><a class="pill pill-blue" href="${path("contact.html")}">Choose the final direction <span>↗</span></a></div><div class="work-included-list reveal">${included.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><strong>${x}</strong></article>`).join("")}</div></div></section>${servicesFAQ()}<section class="work-hub-final-cta"><div class="shell reveal"><p class="section-tag">Recommended Next Step</p><h2>Start with Option 6, borrow the SEO depth from Option 3, and use the polish from Option 7.</h2><p>That combination gives VNW a Services page that diagnoses problems, explains the full system, and still feels premium.</p><div><a class="pill pill-orange pill-large" href="${path("service-option-6.html")}">Start with Option 6 <span>↗</span></a><a class="pill pill-outline pill-large" href="${path("service-option-3.html")}">Compare Option 3</a></div></div></section>`;
}

function servicesFAQ(){
  const qs=[
    ["What services does VNW Media provide?","VNW Media offers web design, eCommerce, website maintenance, SEO, Yelp visibility, Google Business Profile management, AI visibility and GEO, PPC, paid social, social media management, reputation management, email, SMS, content, and combined lead-generation plans. Brand strategy, graphic design, video editing, and CRM automation are also available."],
    ["Which service should a business start with?","Most businesses should start with the website and the customer journey. If the site is unclear or hard to act on, SEO and ads will usually perform worse than they should."],
    ["How do web design, SEO, and PPC work together?","The website converts visitors, SEO builds organic visibility, and PPC captures high-intent demand faster. The best results happen when messaging, pages, tracking, and CTAs are aligned."],
    ["Can VNW help local businesses get more calls?","Yes. Local businesses often need service-area content, local SEO, reviews, Google PPC, click-to-call UX, landing pages, and reputation signals working together."],
    ["Can services be combined into a monthly plan?","Yes. The right combination depends on goals, competition, current website quality, service areas, budget, and how quickly the business wants to generate demand."]
  ];
  return `<section class="services-faq faq section"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">Services FAQ</p><h2>Questions before choosing a marketing partner.</h2><p>These answers help prospects understand the services, priorities, and how the pieces work together.</p><a class="text-arrow" href="${path("contact.html")}">Ask what you need first <span>↗</span></a></div><div class="faq-list reveal">${qs.map((x,i)=>`<details ${i===0?"open":""}><summary>${x[0]}<span>+</span></summary><p>${x[1]}</p></details>`).join("")}</div></div></section>`;
}

function servicesOptionTwo(){
  const stack=[["Attract","SEO, social, content, and PPC create the first touch."],["Explain","Website pages and content clarify the offer."],["Prove","Reviews, case studies, reputation, and trust signals reduce doubt."],["Convert","Forms, calls, landing pages, and CTAs turn interest into action."],["Follow up","Email, text, and remarketing keep prospects moving."],["Improve","Tracking and insights guide the next round of growth."]];
  return `<section class="services-stack section" id="page-content"><div class="shell"><div class="services-stack-head reveal"><p class="section-tag">Option 2 / Conversion Stack</p><h2>Show services in the order a customer moves.</h2><p>This page explains VNW’s services as a connected journey from attention to lead generation.</p><a class="pill pill-blue" href="${path("contact.html")}">Map my funnel <span>↗</span></a></div><div class="services-stack-grid">${stack.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section><section class="services-strip section"><div class="shell">${cards(DATA.services,"service")}</div></section>${servicesFAQ()}`;
}

function servicesOptionThree(){
  const clusters=[["Website Foundation",["Web Design & Development","eCommerce Web Design","Brand & Strategy"]],["Visibility Engine",["Search Engine Optimization","Google PPC","Content Writing"]],["Trust & Demand",["Reputation Management","Social Media Marketing","Email Marketing","Text Marketing"]]];
  return `<section class="services-library section" id="page-content"><div class="shell"><div class="services-library-head reveal"><p class="section-tag">Option 3 / SEO Service Library</p><h2>A search-friendly service directory with useful depth.</h2><p>This layout is built for SEO: service clusters, descriptive copy, internal links, FAQs, and clear next steps.</p></div><div class="services-clusters">${clusters.map((c,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${c[0]}</h3>${c[1].map(s=>`<a href="${path("contact.html")}">${s} ↗</a>`).join("")}</article>`).join("")}</div><div class="services-library-list">${DATA.services.map((x,i)=>`<article class="reveal"><small>${String(i+1).padStart(2,"0")}</small><h3>${x[0]}</h3><p>${x[2]}</p><a class="text-arrow" href="${path(`services/${x[1]}.html`)}">Explore service <span>↗</span></a></article>`).join("")}</div></div></section>${servicesFAQ()}`;
}

function servicesOptionFour(){
  const system=["Website","SEO","Google PPC","Content","Reputation","Social","Email/Text","Analytics"];
  return `<section class="services-system section" id="page-content"><div class="shell services-system-grid"><div class="reveal"><p class="section-tag">Option 4 / Growth System</p><h2>Position VNW as the team that connects all the pieces.</h2><p>This version makes the Services page feel strategic: one business goal, many coordinated services.</p><a class="pill pill-orange" href="${path("contact.html")}">Build my system <span>↗</span></a></div><div class="services-system-orbit reveal">${system.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><strong>${x}</strong></article>`).join("")}</div></div></section><section class="work-cta-band"><div class="shell reveal"><h2>The service mix should match the business goal, not a generic package.</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Create my growth plan <span>↗</span></a></div></section>${servicesFAQ()}`;
}

function servicesOptionFive(){
  const goals=[["Get more calls","Web design, local SEO, Google PPC, reviews, click-to-call UX."],["Rank higher","Technical SEO, service pages, content, local signals, internal links."],["Look more credible","Brand strategy, web design, reputation management, project proof."],["Sell online","eCommerce design, product UX, email, PPC, content."],["Stay top-of-mind","Email marketing, text marketing, social media, follow-up systems."]];
  return `<section class="services-goals section" id="page-content"><div class="shell"><div class="services-goals-head reveal"><p class="section-tag">Option 5 / Goal-Based Paths</p><h2>Let prospects choose by outcome instead of by service name.</h2><p>Many business owners do not know which service they need. They do know what they want to improve.</p></div><div class="services-goal-list">${goals.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p><a class="text-arrow" href="${path("contact.html")}">Discuss this goal <span>↗</span></a></article>`).join("")}</div></div></section>${servicesFAQ()}`;
}

function servicesOptionSix(){
  const gaps=[["The website does not convert","Web Design & Development","Clarify the message, improve mobile flow, add proof, and strengthen CTAs."],["People cannot find you","Search Engine Optimization","Create technical, local, and content foundations around real search intent."],["Leads are too slow","Google PPC","Use paid search and landing pages to reach high-intent prospects faster."],["Trust is weak","Reputation Management","Make reviews, credibility, and proof visible before the visitor hesitates."],["Customers do not return","Email + Text Marketing","Create nurture, promotions, reminders, and reactivation paths."]];
  return `<section class="services-diagnostic section" id="page-content"><div class="shell"><div class="services-diagnostic-head reveal"><p class="section-tag">Option 6 / Diagnostic Audit</p><h2>Name the problem. Show the service that fixes it.</h2><p>This is the strongest lead-generation version because it meets business owners where they are: something is not working.</p><a class="pill pill-blue" href="${path("contact.html")}">Diagnose my marketing <span>↗</span></a></div><div class="services-diagnostic-table">${gaps.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><strong>${x[1]}</strong><p>${x[2]}</p></article>`).join("")}</div></div></section>${servicesFAQ()}<section class="case-lab-cta"><div class="shell reveal"><p class="section-tag">Audit CTA</p><h2>If you know the website or marketing is underperforming, start here.</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Find my biggest gap <span>↗</span></a></div></section>`;
}

function servicesOptionSeven(){
  const slides=[["Digital Strategy","Know what matters before building more."],["Website Experience","Make the offer clear and the next step easy."],["Search Visibility","Help the right prospects find the business."],["Demand Capture","Use PPC and landing pages when speed matters."],["Trust Layer","Make reviews, proof, and credibility impossible to miss."],["Retention","Use email and text to keep customers moving."]];
  return `<section class="services-deck section" id="page-content"><div class="shell"><div class="case-deck-cover reveal"><p>VNW / SERVICES DECK</p><h2>Capabilities presented like a serious growth partner.</h2><a class="pill pill-blue" href="${path("contact.html")}">Book a strategy review <span>↗</span></a></div><div class="case-deck-slides">${slides.map((x,i)=>`<article class="reveal"><span>Slide ${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>${servicesFAQ()}`;
}

function servicesOptionEight(){
  const local=[["Local SEO","Service-area pages, search intent, GBP support, internal links."],["Click-to-call UX","Mobile-first actions for urgent and high-intent visitors."],["Reviews","Reputation signals placed where prospects make decisions."],["Landing Pages","Focused pages for service, city, campaign, or offer intent."],["PPC","Search ads that capture demand while SEO grows."],["Follow-up","Email and text paths that reactivate and nurture leads."]];
  return `<section class="services-local section" id="page-content"><div class="shell work-map-grid"><div class="work-map-copy reveal"><p class="section-tag">Option 8 / Local Growth Playbook</p><h2>Services shaped for local businesses that need more calls.</h2><p>This layout speaks directly to restaurants, healthcare, daycare, auto repair, home services, real estate, and professional service businesses.</p><a class="pill pill-orange" href="${path("contact.html")}">Grow my local visibility <span>↗</span></a></div><div class="work-map-board reveal">${local.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>${servicesFAQ()}`;
}

function servicesOptionNine(){
  const notes=[["Why websites come first","The website is where trust, search, ads, and inquiries meet."],["Why SEO needs structure","Search visibility depends on clear pages, useful content, and technical foundations."],["Why PPC needs landing pages","Traffic is expensive when the page does not convert."],["Why reputation matters","Reviews and proof reduce friction before a visitor acts."]];
  return `<section class="services-journal section" id="page-content"><div class="shell"><div class="work-mag-mast reveal"><p>VNW SERVICES JOURNAL</p><h2>A more editorial way to explain digital marketing services.</h2><a class="pill pill-blue" href="${path("contact.html")}">Ask what fits <span>↗</span></a></div><div class="work-mag-columns">${notes.map(x=>`<article class="reveal"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="services-library-list">${DATA.services.slice(0,6).map((x,i)=>`<article class="reveal"><small>Service note ${String(i+1).padStart(2,"0")}</small><h3>${x[0]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section>${servicesFAQ()}`;
}

function servicesOptionTen(){
  const compare=[["If the site is unclear","Start with web design and messaging."],["If rankings are weak","Start with SEO structure and content."],["If leads are needed fast","Start with Google PPC and landing pages."],["If trust is low","Start with reputation and proof placement."],["If customers disappear","Start with email/text follow-up."]];
  return `<section class="services-compare section" id="page-content"><div class="shell"><div class="work-audit-head reveal"><p class="section-tag">Option 10 / Recommendation Guide</p><h2>Help visitors understand which service to prioritize first.</h2><p>This version is very practical. It reduces confusion and makes the consultation feel useful before it happens.</p><a class="pill pill-blue" href="${path("contact.html")}">Get my recommendation <span>↗</span></a></div><div class="work-audit-table">${compare.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p><small>Recommended starting point</small></article>`).join("")}</div></div></section>${servicesFAQ()}<section class="work-hub-final-cta"><div class="shell reveal"><p class="section-tag">Recommended Services Direction</p><h2>Use this option when you want the Services page to generate better-fit conversations.</h2><p>It helps visitors self-identify their problem and makes reaching out feel like the obvious next step.</p><div><a class="pill pill-orange pill-large" href="${path("contact.html")}">Recommend my service mix <span>↗</span></a></div></div></section>`;
}

function caseStudiesPage(){
  const featured=DATA.cases[1];
  const metrics=[
    ["3","Featured rebuilds","Automotive, collision, and home-service experiences shaped around leads."],
    ["10+","Growth layers","UX, copy, SEO, reputation, calls, forms, tracking, and follow-up."],
    ["1","Clear next step","Every page is designed to move visitors toward a confident action."]
  ];
  const playbook=[
    ["01","Trust first","Make proof visible before a visitor has to hunt for it.","Reviews, real project imagery, location cues, service clarity."],
    ["02","Friction down","Shorten the route from interest to inquiry.","Click-to-call, focused forms, service pages, mobile-first flows."],
    ["03","Search aligned","Match the page structure to how customers actually look.","Local intent, service categories, clear page hierarchy."],
    ["04","Lead ready","Create a system that can keep improving after launch.","Analytics, campaign paths, conversion points, practical next steps."]
  ];
  const portfolio=["Best Pro Service","Leo Mikityanskiy","NJ Steps to Success","Kahn Yuniver Law","Grill Point","Kid’s World Preschool","Senior Comfort","Brooklyn Motors","Best Blinds","Urgent Doctor","Quality Wellness Group","Adamco Diamonds"];
  return `<section class="cases-showroom section" id="page-content"><div class="shell">
    <div class="cases-intro reveal"><p class="section-tag">Selected Builds</p><h2>Websites treated like sales rooms, not online brochures.</h2><p>Each case starts with the business decision we need to influence: call, request an estimate, book a tour, browse inventory, or ask for help.</p></div>
    <div class="case-feature reveal">
      <a class="case-feature-media" href="${path(`case-studies/${featured[1]}.html`)}"><img src="${img(featured[4])}" alt="${esc(featured[0])} website preview"><span>Featured Case Study</span></a>
      <div class="case-feature-copy"><p class="section-tag">${esc(featured[2])}</p><h2>${esc(featured[0])}</h2><p>${esc(featured[3])}</p><div class="case-feature-actions"><a class="pill pill-orange" href="${path(`case-studies/${featured[1]}.html`)}">Open the case <span>↗</span></a><a class="text-arrow" href="${featured[5]}" target="_blank" rel="noreferrer">Live website <span>↗</span></a></div></div>
    </div>
    <div class="case-metrics">${metrics.map(x=>`<article class="case-metric reveal"><strong>${x[0]}</strong><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div>
  </div></section>
  <section class="case-story section"><div class="shell">
    <div class="case-story-head reveal"><p class="section-tag">The Case Study Pattern</p><h2>The screen is only the visible part. The system underneath does the heavy lifting.</h2></div>
    <div class="case-playbook">${playbook.map(x=>`<article class="reveal"><span>${x[0]}</span><div><h3>${x[1]}</h3><p>${x[2]}</p></div><small>${x[3]}</small></article>`).join("")}</div>
  </div></section>
  <section class="case-gallery section"><div class="shell">
    <div class="case-gallery-head reveal"><div><p class="section-tag">Case Library</p><h2>Three detailed stories. Many more businesses behind them.</h2></div><a class="pill pill-blue" href="${path("contact.html")}">Plan yours <span>↗</span></a></div>
    <div class="case-strips">${DATA.cases.map((x,i)=>`<a class="case-strip reveal" href="${path(`case-studies/${x[1]}.html`)}"><span>${String(i+1).padStart(2,"0")}</span><img src="${img(x[4])}" alt="${esc(x[0])}"><div><small>${esc(x[2])}</small><h3>${esc(x[0])}</h3><p>${esc(x[3])}</p></div><b>Read ↗</b></a>`).join("")}</div>
    <div class="case-index reveal">${portfolio.map((x,i)=>`<a href="${path("contact.html")}"><span>${String(i+4).padStart(2,"0")}</span><strong>${x}</strong><i>Discuss similar work ↗</i></a>`).join("")}</div>
  </div></section>
  ${caseOptionFAQ()}<section class="case-build-cta"><div class="shell case-build-inner reveal"><p class="section-tag">Your Business Could Be Next</p><h2>Have a website that looks nice but does not pull its weight?</h2><p>We can map the missing trust signals, conversion paths, and search opportunities, then turn them into a practical redesign plan.</p><a class="pill pill-orange pill-large" href="${path("contact.html")}">Get a free strategy review <span>↗</span></a></div></section>`;
}

function caseStudiesOptionTwo(){
  const cases=[
    {
      item:DATA.cases[0],
      objective:"Help shoppers understand inventory, trust the dealership, and contact the team without wandering through a cluttered path.",
      challenge:"Automotive buyers want speed, visuals, and confidence. The experience needs to make vehicles easy to browse while keeping phone calls and inquiry actions close.",
      strategy:"Create a vehicle-first journey with strong visual hierarchy, simple navigation, mobile-ready contact points, and trust cues that support dealership credibility.",
      deliverables:["Inventory-focused UX","Responsive web design","Lead form direction","Click-to-call paths","Local SEO structure","Trust messaging"],
      path:["Browse vehicles","Review business credibility","Call or request details","Continue follow-up"],
      details:["Clearer vehicle discovery for high-intent visitors","A stronger visual system around featured inventory","Contact routes designed for desktop and mobile behavior"]
    },
    {
      item:DATA.cases[1],
      objective:"Make an auto-body shop feel credible quickly, then guide visitors toward services, estimate requests, and direct contact.",
      challenge:"Collision repair decisions are often urgent and trust-heavy. Visitors need to know the shop is experienced, responsive, and easy to work with.",
      strategy:"Lead with credibility, simplify services, organize estimate-related actions, and create a calmer experience for customers dealing with a stressful repair moment.",
      deliverables:["Credibility-first homepage","Service page structure","Estimate CTA planning","Reputation signals","Mobile contact flow","Content organization"],
      path:["Confirm services","Build confidence","Request an estimate","Call the shop"],
      details:["Trust signals placed earlier in the journey","Cleaner service explanations for faster decision-making","Conversion points designed around estimate and call intent"]
    },
    {
      item:DATA.cases[2],
      objective:"Turn urgent plumbing traffic into calls by making services, availability, and local relevance immediately clear.",
      challenge:"Home-service visitors are often comparing options fast. The site has to communicate urgency, coverage, and professionalism in seconds.",
      strategy:"Build a direct-response service experience with prominent calls, service-area clarity, emergency-oriented messaging, and local search foundations.",
      deliverables:["Home-service landing flow","Emergency CTA system","Service-area messaging","Local SEO framework","Phone-first mobile UX","Lead-generation copy"],
      path:["Identify the problem","Confirm local service","Tap to call","Submit project details"],
      details:["More direct paths for emergency and scheduled service needs","Service messaging shaped around common homeowner concerns","Mobile-first contact actions for high-intent traffic"]
    }
  ];
  const proof=["Discovery before design","Industry-specific conversion paths","Mobile-first inquiry planning","Search and content structure","Trust signals above the fold","Post-launch improvement roadmap"];
  const stack=[
    ["Website Strategy","Positioning, page hierarchy, customer journey, and conversion goals."],
    ["Design & Development","Responsive layouts, visual direction, page builds, and launch-ready polish."],
    ["Lead Generation","Calls, forms, estimate requests, quote paths, and CTA placement."],
    ["SEO Foundations","Service intent, local relevance, technical basics, and content structure."],
    ["Reputation Signals","Reviews, proof points, project credibility, and confidence builders."],
    ["Measurement","Tracking-ready touchpoints that make future improvements easier."]
  ];
  const questions=[
    ["What makes these case studies useful?","They show the thinking behind the page—not just screenshots. Each project is framed around the customer decision the website needed to support."],
    ["Are these exact result numbers?","No. This page avoids made-up performance claims and focuses on verifiable strategy, deliverables, and conversion paths."],
    ["Can VNW apply this to another industry?","Yes. The pattern adapts to daycare, healthcare, restaurants, eyecare, auto repair, real estate, home services, retail, and professional services."],
    ["What happens after reviewing a case study?","The next step is a practical review of your current website, business goals, customer journey, and highest-value opportunities."],
    ["Why include FAQs on a case study page?","FAQs add helpful context for search engines and answer the questions prospects usually ask before they are ready to schedule a strategy call."]
  ];
  return `<section class="case-alt-overview section" id="page-content"><div class="shell case-alt-grid">
    <aside class="case-alt-sidebar reveal"><p class="section-tag">Option 2 Direction</p><h2>More context. More proof. More reasons to trust the process.</h2><p>This version is built for prospects who want to understand how VNW thinks before they book a call.</p><a class="pill pill-blue" href="${path("case-studies-option-1.html")}">View option 1 <span>↗</span></a></aside>
    <div class="case-alt-proof">${proof.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><strong>${x}</strong></article>`).join("")}</div>
  </div></section>
  <section class="case-alt-lab section"><div class="shell">
    <div class="case-alt-heading reveal"><p class="section-tag">Detailed Case Breakdown</p><h2>Each project is mapped by goal, challenge, strategy, deliverables, and conversion path.</h2></div>
    <div class="case-alt-list">${cases.map((c,i)=>{
      const x=c.item;
      return `<article class="case-alt-card reveal">
        <div class="case-alt-media"><span>${String(i+1).padStart(2,"0")} / ${esc(x[2])}</span><img src="${img(x[4])}" alt="${esc(x[0])} website preview"></div>
        <div class="case-alt-content">
          <div class="case-alt-title"><small>${esc(x[2])} Case Study</small><h2>${esc(x[0])}</h2><p>${esc(c.objective)}</p></div>
          <div class="case-alt-columns"><div><h3>Challenge</h3><p>${esc(c.challenge)}</p></div><div><h3>Strategy</h3><p>${esc(c.strategy)}</p></div></div>
          <div class="case-alt-tags">${c.deliverables.map(tag=>`<span>${esc(tag)}</span>`).join("")}</div>
          <div class="case-alt-path"><h3>Conversion path</h3><ol>${c.path.map(step=>`<li>${esc(step)}</li>`).join("")}</ol></div>
          <div class="case-alt-details"><h3>Relevant details</h3><ul>${c.details.map(detail=>`<li>${esc(detail)}</li>`).join("")}</ul></div>
          <div class="case-alt-actions"><a class="pill pill-orange" href="${path(`case-studies/${x[1]}.html`)}">Read project page <span>↗</span></a><a class="text-arrow" href="${x[5]}" target="_blank" rel="noreferrer">Live website <span>↗</span></a></div>
        </div>
      </article>`;
    }).join("")}</div>
  </div></section>
  <section class="case-alt-stack section"><div class="shell">
    <div class="case-alt-stack-head reveal"><p class="section-tag">What Goes Into The Work</p><h2>The case studies point back to one connected growth system.</h2><p>For lead generation, a website has to do more than look professional. It needs to explain, prove, guide, and measure.</p></div>
    <div class="case-alt-stack-grid">${stack.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div>
  </div></section>
  <section class="case-alt-questions section"><div class="shell case-alt-question-grid">
    <div class="reveal"><p class="section-tag">Buyer Questions</p><h2>Details that help a serious prospect decide.</h2><p>Use this section to reduce uncertainty before the first call.</p></div>
    <div class="faq-list reveal">${questions.map((x,i)=>`<details ${i===0?"open":""}><summary>${x[0]}<span>+</span></summary><p>${x[1]}</p></details>`).join("")}</div>
  </div></section>
  <section class="case-alt-final"><div class="shell case-alt-final-inner reveal"><p class="section-tag">Turn Your Website Into The Next Case Study</p><h2>Let’s find the missing pieces between traffic, trust, and leads.</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Request a strategy review <span>↗</span></a></div></section>`;
}

function caseStudyHub(){
  const options=[
    ["01","Visual Showroom","A bold portfolio-style page with a featured case, proof cards, story pattern, project library, and CTA.","case-studies-option-1.html","Best when the page should feel polished, visual, and easy to scan.","assets/case-collision-impact.svg"],
    ["02","Detailed Strategy Proof","Longer-form breakdowns with goals, challenges, strategy, deliverables, conversion paths, FAQs, and growth logic.","case-studies-option-2.html","Best when prospects need more confidence before booking a call.","assets/case-hero-impact.svg"],
    ["03","Editorial Client Journeys","Story-led case studies that frame each project around a buying moment, customer anxiety, and final action.","case-studies-option-3.html","Best for showing empathy, customer psychology, and strategic thinking.","assets/case-system-stack.svg"],
    ["04","Conversion Architecture","A dashboard-style page mapping funnels, trust signals, page roles, CTAs, and measurement layers.","case-studies-option-4.html","Best for proving VNW understands lead-generation mechanics.","assets/case-automotive-impact.svg"],
    ["05","Portfolio Lab","A modular agency-lab layout with service matrices, friction diagnosis, project notes, and future opportunities.","case-studies-option-5.html","Best for a creative, premium agency impression with lots of practical substance.","assets/case-final-cta.svg"],
    ["06","Cinematic Filmstrip","A dramatic scene-by-scene narrative: trigger, tension, strategy, screen, proof, and next move.","case-studies-option-6.html","Best when the page should feel memorable and story-driven.","assets/case-collision-impact.svg"],
    ["07","Boardroom Deck","A pitch-deck style page with executive slides, decisions, proof points, and next-step logic.","case-studies-option-7.html","Best for B2B buyers who want strategic clarity fast.","assets/case-system-stack.svg"],
    ["08","Search-Intent Teardown","A Google-intent case-study format focused on SEO opportunity, trust signals, and conversion fixes.","case-studies-option-8.html","Best for showing practical SEO and lead-generation thinking.","assets/case-plumbing-impact.svg"],
    ["09","Founder Interview","A conversational case-study format that reads like a strategic founder/client interview.","case-studies-option-9.html","Best for warmth, narrative, and human context.","assets/case-final-cta.svg"],
    ["10","Blueprint Spec Sheet","A technical case library using requirements, modules, decisions, and recommendations.","case-studies-option-10.html","Best for a polished expert/process-heavy presentation.","assets/case-automotive-impact.svg"],
    ["11","MediaScher-Inspired Case Directory","A polished case-study directory with five clickable detail pages, each using a different structure and storytelling pattern.","case-studies-option-11.html","Best for a modern agency case-study section with deeper project pages.","assets/case-hero-impact.svg"]
  ];
  return `<section class="case-hub section" id="page-content"><div class="shell">
    <div class="case-hub-intro reveal"><p class="section-tag">Case Study Page Concepts</p><h2>Pick the structure that feels closest to how VNW should sell its work.</h2><p>Each option uses the same core projects and business facts, but tells the story differently. No fake performance claims—just strategy, project context, trust-building, and lead-generation reasoning.</p></div>
    <div class="case-option-grid">${options.map(x=>`<a class="case-option-card reveal" href="${path(x[3])}"><img src="${img(x[5])}" alt="${esc(x[1])} visual"><div><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><small>${x[4]}</small><b>Open this option ↗</b></div></a>`).join("")}</div>
    <div class="case-hub-compare reveal"><p class="section-tag">How to choose</p><div>${["Choose 1–5 for safer portfolio structures.","Choose 6 for cinematic drama.","Choose 7 for pitch-deck clarity.","Choose 8 for SEO proof.","Choose 9 for human story.","Choose 10 for technical authority.","Choose 11 for a modern agency directory with clickable detail pages."].map(x=>`<span>${x}</span>`).join("")}</div></div>
  </div></section>`;
}

function caseStudiesOptionThree(){
  const journeys=[
    [DATA.cases[0],"The shopper wants confidence before contact.","Vehicle shoppers are filtering quickly. They need inventory clarity, dealership credibility, and a fast path to a real conversation.","We structure the experience around browsing, trust, and direct inquiry so interest does not disappear between pages.",["Inventory browsing","Dealer credibility","Mobile call flow"]],
    [DATA.cases[1],"The customer is stressed and needs reassurance.","Collision repair visitors often arrive after a frustrating moment. The website needs to feel competent, calm, and easy to act on.","We bring services, estimate requests, reputation, and certifications into a cleaner decision path.",["Estimate intent","Service clarity","Reputation proof"]],
    [DATA.cases[2],"The homeowner has a problem and wants help now.","Home-service traffic is high intent. The page has to communicate availability, coverage, and a phone-first next step immediately.","We prioritize urgent CTAs, service-area confidence, and simple problem-to-call movement.",["Emergency action","Local relevance","Phone-first UX"]]
  ];
  return `<section class="case-editorial section" id="page-content"><div class="shell">
    <div class="case-editorial-kicker reveal"><p class="section-tag">Option 3 / Editorial Journeys</p><h2>Case studies told through the customer’s moment of decision.</h2><p>This version is less “portfolio grid” and more “why the strategy works.” It explains what each visitor needs to believe before they call, submit, or continue.</p></div>
    <div class="case-editorial-feature reveal"><img src="${img("assets/case-system-stack.svg")}" alt="Connected growth system"><div><span>Core idea</span><h3>Every case study starts with a human question.</h3><p>Can I trust this company? Do they solve my exact problem? Can I act quickly from my phone? Is this business legitimate? The design answers those questions before asking for the lead.</p></div></div>
    <div class="case-journeys">${journeys.map((j,i)=>`<article class="case-journey reveal"><div class="case-journey-number">${String(i+1).padStart(2,"0")}</div><img src="${img(j[0][4])}" alt="${esc(j[0][0])} visual"><div class="case-journey-copy"><p class="section-tag">${esc(j[0][2])}</p><h2>${esc(j[0][0])}</h2><h3>${esc(j[1])}</h3><p>${esc(j[2])}</p><blockquote>${esc(j[3])}</blockquote><div class="case-journey-tags">${j[4].map(tag=>`<span>${esc(tag)}</span>`).join("")}</div><a class="text-arrow" href="${path(`case-studies/${j[0][1]}.html`)}">Open case detail <span>↗</span></a></div></article>`).join("")}</div>
  </div></section>
  ${caseOptionFAQ()}<section class="case-editorial-close"><div class="shell reveal"><p class="section-tag">What this page proves</p><h2>VNW designs around the decision, not just the screen.</h2><p>That is the difference between a website that looks complete and a website that helps a visitor become a lead.</p><a class="pill pill-orange pill-large" href="${path("contact.html")}">Discuss your customer journey <span>↗</span></a></div></section>`;
}

function caseStudiesOptionFour(){
  const funnel=["Traffic source","Landing message","Trust proof","Service clarity","CTA","Follow-up"];
  const rows=DATA.cases.map((x,i)=>[
    x,
    [
      i===0?"Search and referral visitors reviewing vehicles.":i===1?"High-intent repair visitors comparing shops.":"Urgent homeowners searching for a local plumber.",
      i===0?"Inventory-led page flow with dealership proof.":i===1?"Credibility-first service and estimate structure.":"Direct-response service-area and call structure.",
      i===0?"Vehicle discovery, calls, form inquiries.":i===1?"Estimate requests, phone calls, service confidence.":"Emergency calls, quote requests, local service validation."
    ]
  ]);
  return `<section class="case-dashboard section" id="page-content"><div class="shell">
    <div class="case-dashboard-head reveal"><p class="section-tag">Option 4 / Conversion Architecture</p><h2>A case-study page for people who want to see how the machine works.</h2><p>This direction turns the work into a lead-generation blueprint: traffic, message, proof, pages, CTAs, and measurable next steps.</p></div>
    <div class="case-funnel reveal">${funnel.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><strong>${x}</strong></article>`).join("")}</div>
    <div class="case-dashboard-grid">${rows.map((row,i)=>`<article class="case-dashboard-card reveal"><img src="${img(row[0][4])}" alt="${esc(row[0][0])} visual"><div><p class="section-tag">${esc(row[0][2])}</p><h2>${esc(row[0][0])}</h2><dl><dt>Audience intent</dt><dd>${esc(row[1][0])}</dd><dt>Page strategy</dt><dd>${esc(row[1][1])}</dd><dt>Primary conversion</dt><dd>${esc(row[1][2])}</dd></dl><a class="pill pill-blue" href="${path(`case-studies/${row[0][1]}.html`)}">View case <span>↗</span></a></div></article>`).join("")}</div>
  </div></section>
  <section class="case-scoreboard section"><div class="shell"><div class="case-scoreboard-head reveal"><p class="section-tag">Lead Generation Layers</p><h2>What VNW looks for before calling a website “done.”</h2></div><div class="case-score-grid">${["Clear offer above the fold","Specific services and locations","Fast mobile contact actions","Visible proof and reputation","Search-friendly page structure","Analytics-ready conversion points"].map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x}</h3><p>A practical layer that helps visitors understand, trust, and act with less friction.</p></article>`).join("")}</div></div></section>${caseOptionFAQ()}`;
}

function caseStudiesOptionFive(){
  const matrix=[
    ["Strategy","Positioning, journey, page priorities, conversion planning"],
    ["Creative","Visual direction, custom graphics, page composition, brand feel"],
    ["Content","Headlines, service messaging, proof, FAQs, CTA language"],
    ["Build","Responsive pages, navigation, forms, performance-minded structure"],
    ["Growth","SEO foundations, campaign paths, tracking, improvement roadmap"]
  ];
  return `<section class="case-lab section" id="page-content"><div class="shell">
    <div class="case-lab-head reveal"><p class="section-tag">Option 5 / Portfolio Lab</p><h2>A premium case-study lab that feels strategic, creative, and practical.</h2><p>This version is built for a higher-end agency impression: less linear, more modular, with project intelligence grouped into cards a prospect can scan quickly.</p></div>
    <div class="case-lab-board reveal"><img src="${img("assets/case-final-cta.svg")}" alt="Portfolio lab visual"><div>${matrix.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div>
    <div class="case-lab-projects">${DATA.cases.map((x,i)=>`<article class="case-lab-project reveal"><div class="case-lab-project-top"><span>${String(i+1).padStart(2,"0")}</span><strong>${esc(x[2])}</strong></div><img src="${img(x[4])}" alt="${esc(x[0])} visual"><h2>${esc(x[0])}</h2><p>${esc(x[3])}</p><ul><li>Business context mapped before design.</li><li>Trust and action points placed throughout the journey.</li><li>Page structure shaped around real customer intent.</li></ul><a class="text-arrow" href="${path(`case-studies/${x[1]}.html`)}">Study this project <span>↗</span></a></article>`).join("")}</div>
  </div></section>
  ${caseOptionFAQ()}<section class="case-lab-cta"><div class="shell reveal"><p class="section-tag">Use this format when</p><h2>You want VNW to feel like a strategic growth partner, not just a website vendor.</h2><div>${["Premium visual impression","Strong service explanation","Scannable project proof","Good bridge to consultation"].map(x=>`<span>${x}</span>`).join("")}</div><a class="pill pill-orange pill-large" href="${path("contact.html")}">Start with a website review <span>↗</span></a></div></section>`;
}

function caseOptionFAQ(){
  const qs=[
    ["What should a strong case study page include?","A strong case study should explain the business problem, the visitor’s buying intent, the strategy behind the page, the trust signals used, the conversion path, and the next step for a similar prospect."],
    ["Why avoid fake performance numbers?","If exact analytics are not available, it is stronger and more credible to focus on strategy, deliverables, UX decisions, SEO structure, and conversion reasoning instead of inventing metrics."],
    ["How do case studies help SEO?","Case studies can add industry context, service keywords, local relevance, project proof, FAQs, internal links, and deeper content around web design, SEO, PPC, reputation, and lead generation."],
    ["Which case study format is best?","Visual formats work well for quick impact. Teardown and blueprint formats work better for strategic buyers. Interview and filmstrip formats work well when you want more story and emotion."],
    ["What is the next step after reading a case study?","The next step is usually a website or marketing review where VNW can identify missing trust signals, weak conversion paths, thin SEO content, and practical redesign opportunities."]
  ];
  return `<section class="case-option-faq faq section"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">Case Study FAQ</p><h2>Details that make the proof more useful.</h2><p>These answers add helpful SEO content and reduce buyer uncertainty before a strategy call.</p><a class="text-arrow" href="${path("contact.html")}">Ask about your case study <span>↗</span></a></div><div class="faq-list reveal">${qs.map((x,i)=>`<details ${i===0?"open":""}><summary>${x[0]}<span>+</span></summary><p>${x[1]}</p></details>`).join("")}</div></div></section>`;
}

function southCarolinaMotorsCaseStudy(){
  const signals=[
    ["Inventory","Vehicle discovery"],
    ["Trust","Dealership credibility"],
    ["Mobile","Call and inquiry path"],
    ["Search","Local automotive visibility"]
  ];
  const approach=[
    ["Treated inventory clarity as the job.","A dealership visitor is not reading slowly. They are comparing vehicles, scanning trust cues, and deciding whether this business is worth contacting."],
    ["Made the dealership easier to understand at the moment of intent.","The page is structured around local buying behavior: vehicle interest, location, credibility, and a clear next step."],
    ["Moved the action closer to the decision.","Calls, inquiry prompts, and sales-contact language belong near the points where a shopper is already asking: is it available, can I trust them, and what happens next?"]
  ];
  const services=[
    ["inventory-ux","Inventory-Led Website UX","The page experience should make the inventory path feel immediate. For South Carolina Motors, that means orienting shoppers around available vehicles, dealership context, and the next action instead of burying the contact moment behind generic page sections.","Vehicle discovery"],
    ["local-seo","SEO","Our SEO work for South Carolina Motors focuses on helping drivers discover its collision-repair and automotive services through organic search. The focus is clear service content, useful location information, internal links, and technical site foundations that connect relevant searches with a direct path to call or request an estimate.","Organic search","Discuss SEO"],
    ["ppc","PPC","Our pay-per-click advertising work focuses on connecting South Carolina Motors with drivers actively searching for automotive and collision-repair services. Relevant search terms, location targeting, focused ad messaging, and clear landing-page actions shape the campaign approach, with calls and estimate inquiries as the intended next steps.","Paid search","Discuss PPC"],
    ["google-business","GBP Organic & Paid Search","Our Google Business Profile (GBP) work connects organic local visibility with paid search. The organic focus is accurate business details, service information, photos, and review content. On the paid side, linked Google Ads location assets can support local advertising across Search and Maps. Paid placements remain separate from organic visibility.","Local visibility","Discuss GBP visibility"],
    ["geo","GEO","Our Generative Engine Optimization (GEO) work focuses on making South Carolina Motors’ services, locations, and expertise clear to AI-assisted search. Helpful answers, consistent business information, and accessible page content support that work alongside SEO. The goal is a business that is easier to understand and reference; AI mentions and citations are not guaranteed.","AI search readiness","Discuss GEO"],
    ["vehicle-inquiry","Vehicle Inquiry CTAs","Calls and forms work best when they appear near the point of decision. The page should help visitors ask about availability, schedule a conversation, or take the next buying step without feeling like they have to hunt for contact information.","Lead path"],
    ["dealer-proof","Dealership Trust Signals","Automotive shoppers want reassurance. Location clarity, simple messaging, real business cues, reviews, and transparent next steps make the dealership feel easier to trust before the shopper reaches out.","Confidence"],
    ["mobile-development","Mobile Responsive Development","Many dealership visitors arrive from mobile search. The design has to make browsing, calling, tapping, and submitting an inquiry feel natural on a phone, not just acceptable on desktop.","Mobile action"],
    ["content-architecture","Content Architecture","The content should answer practical buying questions: what kind of dealership this is, what vehicles or categories matter, why shoppers can trust the business, and how to begin the conversation.","Page clarity"],
    ["tracking","Analytics & Lead Tracking","The page should be ready to measure calls, form starts, vehicle-interest clicks, source quality, and the moments where visitors move from browsing to real sales intent.","Measurement"]
  ];
  return renderClientCaseStudy({signals, approach, services, ...{
  "name": "South Carolina Motors",
  "kicker": "Used car dealership · Automotive",
  "intro": "A dealership website shaped around inventory discovery, local trust, and a faster path from vehicle interest to contact.",
  "hero": "assets/scm-collision-center-cars-hero.jpg",
  "heroAlt": "Enhanced photo of SC Motors Collision Center with three digitally added cars parked in front",
  "challengeTitle": "Win attention before shoppers compare away.",
  "challengeOne": "South Carolina Motors needs to win attention in a category where shoppers compare quickly and hesitate easily. Visitors arrive with practical questions about inventory, location, vehicle availability, price range, business credibility, and what happens after they reach out.",
  "challengeTwo": "The challenge is not just to make the site look polished. The page has to make the dealership feel easier to evaluate, easier to trust, and easier to contact from the exact moment a shopper starts browsing.",
  "approachTitle": "Build the page around the buyer’s next decision.",
  "mockup": "assets/scm-graphic-options/selected-location-screen.png",
  "mockupAlt": "South Carolina Motors website mockup on a laptop and phone in front of a circular photo of SC Motors Collision Center",
  "storyTitle": "Clarity at every click.",
  "storyOne": "For a dealership, the website is often the bridge between a search result and a sales conversation. If the visitor cannot quickly understand what is available, why the dealership is credible, and how to ask the right question, the site creates friction instead of momentum.",
  "storyTwo": "This South Carolina Motors direction pulls the main decision points into one clearer system: inventory interest, dealership trust, local visibility, mobile action, and follow-up readiness. The result is a page story that feels less like a brochure and more like a buying path.",
  "storyThree": "Instead of inventing performance numbers, this case study focuses on the strategic work a dealership page needs to do before meaningful measurement can happen: make the visitor confident, make the offer legible, and make the next step obvious.",
  "heroWidth": 1672,
  "heroHeight": 941,
  "mockupWidth": 1448,
  "mockupHeight": 1086
}});
}

function renderClientCaseStudy(config){
  const {signals, approach, services}=config;
  const serviceNav=services.map(x=>`<a class="pill pill-outline" href="#${x[0]}">${x[1]}</a>`).join("");
  const detailSections=services.map((x,i)=>`<section class="scm-ms-service reveal" id="${x[0]}" data-nav-theme="dark"><div class="scm-ms-service-grid"><div class="scm-ms-service-title"><span>${String(i+1).padStart(2,"0")} / ${x[3]}</span><h2>${x[1]}</h2></div><div class="scm-ms-service-copy"><p>${x[2]}</p><a class="scm-ms-inline-cta" href="${path("contact.html")}">${x[4]||"Discuss this part of the build"} <span>↗</span></a></div></div></section>`).join("");
  return `
    <div class="scm-ms-page">
      <section class="scm-ms-hero" id="page-content" data-nav-theme="dark"><div class="scm-ms-hero-bg"><img src="${img(config.hero)}" alt="${esc(config.heroAlt)}" width="${config.heroWidth}" height="${config.heroHeight}" fetchpriority="high"></div><div class="shell scm-ms-hero-inner reveal"><p class="scm-ms-kicker">${esc(config.kicker)}</p><h1>${esc(config.name)}</h1><p>${esc(config.intro)}</p><span>2026</span></div></section>
      <section class="scm-ms-signals" data-nav-theme="dark"><div class="shell scm-ms-signal-grid">${signals.map(x=>`<article class="reveal"><strong>${x[0]}</strong><span>${x[1]}</span></article>`).join("")}</div></section>
      <section class="scm-ms-challenge-approach" data-nav-theme="dark"><div class="shell scm-ms-ca-grid reveal"><article class="scm-ms-ca-panel"><p class="section-tag">The Challenge</p><h2>${esc(config.challengeTitle)}</h2><div class="scm-ms-ca-copy"><p>${esc(config.challengeOne)}</p><p>${esc(config.challengeTwo)}</p></div></article><article class="scm-ms-ca-panel"><p class="section-tag">Our Approach</p><h2>${esc(config.approachTitle)}</h2><div class="scm-ms-approach-list">${approach.map(x=>`<article><b>—</b><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}</div></article></div></section>
      <section class="scm-ms-story" id="digital-experience" data-nav-theme="light" aria-labelledby="scm-story-title">
        <div class="shell scm-ms-story-grid reveal">
          <figure class="scm-ms-story-visual">
            <span class="section-tag">${esc(config.name)} / Digital Experience</span>
            <div class="scm-ms-story-stage"><img src="${img(config.mockup)}" alt="${esc(config.mockupAlt)}" width="${config.mockupWidth}" height="${config.mockupHeight}" loading="lazy" decoding="async"></div>
            <figcaption><span>One experience. Every screen.</span><span>Desktop · Mobile</span></figcaption>
          </figure>
          <div class="scm-ms-story-copy">
            <h2 id="scm-story-title">${esc(config.storyTitle)}</h2>
            <p>${esc(config.storyOne)}</p>
            <p>${esc(config.storyTwo)}</p>
            <p>${esc(config.storyThree)}</p>
          </div>
        </div>
      </section>
      <div class="scm-ms-work-background">
        <section class="scm-ms-work" id="what-we-did" data-nav-theme="dark"><div class="shell"><div class="scm-ms-work-head reveal"><p class="section-tag">What We Did</p><nav aria-label="${esc(config.name)} case study sections">${serviceNav}</nav></div></div></section>
        <div class="shell scm-ms-services-grid">${detailSections}</div>
      </div>
    </div>`;
}

// Client-specific content and imagery; all three pages share the same layout.
const CLIENT_CASE_STUDIES={
  "rices-collision": {
    "name": "Rice’s Collision",
    "kicker": "Collision Repair · West Hempstead, NY",
    "intro": "An auto body website built around repair confidence, local discovery, and a clearer path to an estimate.",
    "hero": "assets/rices-collision-hero.jpg",
    "heroAlt": "Rice’s Collision storefront with its sign and vehicles outside",
    "heroWidth": 1440,
    "heroHeight": 962,
    "mockup": "assets/rices-collision.png",
    "mockupAlt": "Rice’s Collision website shown on desktop, laptop, tablet, and mobile screens",
    "mockupWidth": 998,
    "mockupHeight": 593,
    "signals": [
      [
        "Repair",
        "Auto body service clarity"
      ],
      [
        "Trust",
        "Shop and certification information"
      ],
      [
        "Mobile",
        "Call and estimate path"
      ],
      [
        "Search",
        "West Hempstead visibility"
      ]
    ],
    "challengeTitle": "Make the next step clear after an accident.",
    "challengeOne": "Drivers looking for collision repair often arrive with questions about vehicle damage, insurance, and where to turn. Rice’s Collision needs a website that makes its West Hempstead shop easy to find and its repair services easy to understand.",
    "challengeTwo": "The experience should reduce uncertainty before the first call: show the business, explain the repair options, and give visitors a direct way to request an estimate.",
    "approachTitle": "Build confidence before the first repair conversation.",
    "approach": [
      [
        "Lead with the shop and its work.",
        "Recognizable facility imagery and clear auto body messaging help drivers understand who they are contacting."
      ],
      [
        "Organize information around repair questions.",
        "Service, certification, insurance, and location information support visitors as they decide how to proceed."
      ],
      [
        "Keep estimate requests within reach.",
        "Calls and estimate prompts should sit close to the information that helps a driver choose the shop."
      ]
    ],
    "storyTitle": "From repair questions to a clear next step.",
    "storyOne": "For Rice’s Collision, the digital experience connects a local search with a conversation about getting a vehicle repaired. The page needs to make the shop recognizable while giving service and contact information room to breathe.",
    "storyTwo": "The desktop and mobile presentation brings together collision-repair information, the shop’s identity, and appointment and estimate entry points. A driver should be able to move from checking the business to making contact without retracing their steps.",
    "storyThree": "This case study describes the website and marketing direction, without claiming unverified increases in calls, rankings, or repair bookings.",
    "services": [
      [
        "repair-ux",
        "Repair-Focused Website UX",
        "Organize collision-repair information around the questions drivers bring to the site. The shop identity, services, and estimate path should be immediately recognizable.",
        "Repair clarity"
      ],
      [
        "local-seo",
        "SEO",
        "For Rice’s Collision, the organic-search direction centers on auto body repair in West Hempstead and Long Island. Relevant service pages and accurate location details help connect local repair searches with useful information.",
        "Organic search"
      ],
      [
        "ppc",
        "PPC",
        "The paid-search direction pairs collision-repair intent with a relevant estimate page. Location targeting and clear repair messaging should guide interested drivers toward a call or inquiry.",
        "Paid search"
      ],
      [
        "google-business",
        "GBP Organic & Paid Search",
        "Consistent shop details, facility photos, and service information support the Google Business Profile experience. If location-linked advertising is used, it should lead to the same accurate contact and estimate information.",
        "Local visibility"
      ],
      [
        "geo",
        "GEO",
        "Clear answers about repair services, the shop location, and estimate requests make Rice’s Collision easier to understand in AI-assisted search. This content approach complements SEO without promising AI mentions or citations.",
        "AI search readiness"
      ],
      [
        "estimate-requests",
        "Estimate Request CTAs",
        "Estimate and appointment prompts give drivers a clear next step. Keep contact options near repair information so a visitor can act while the relevant question is still in mind.",
        "Lead path"
      ],
      [
        "repair-proof",
        "Collision Repair Trust Signals",
        "Use real facility images and the client’s published certification information to support credibility. Keep credentials current and avoid implying that every certification applies to every repair or affiliated location.",
        "Confidence"
      ],
      [
        "mobile-development",
        "Mobile Responsive Development",
        "Drivers may look for a repair shop on their phones. Readable service information, easy-to-tap contact links, and a straightforward estimate path make that experience more useful.",
        "Mobile action"
      ],
      [
        "content-architecture",
        "Content Architecture",
        "Group auto body services, insurance information, shop details, and estimate guidance into clear paths. Keep Rice’s Collision’s West Hempstead identity distinct from other locations listed on the client website.",
        "Page clarity"
      ],
      [
        "tracking",
        "Analytics & Lead Tracking",
        "A measurement plan should distinguish phone-link clicks, estimate-form starts, completed inquiries, and traffic sources. Verified tracking data would be needed before reporting repair-booking results.",
        "Measurement"
      ]
    ]
  },
  "h2bros-plumbing": {
    "name": "H2Bros Plumbing",
    "kicker": "Plumbing & Heating · New Jersey",
    "intro": "A service website that connects plumbing and heating needs with clear information, local trust, and an easy way to request help.",
    "hero": "assets/h2bros-plumbing-hero.jpg",
    "heroAlt": "Bathroom sinks and plumbing fixtures featured on the H2Bros Plumbing website",
    "heroWidth": 1280,
    "heroHeight": 853,
    "mockup": "assets/h2bros-plumbing.png",
    "mockupAlt": "H2Bros Plumbing and Heating website shown on desktop, laptop, tablet, and mobile screens",
    "mockupWidth": 998,
    "mockupHeight": 593,
    "signals": [
      [
        "Services",
        "Plumbing and heating"
      ],
      [
        "Trust",
        "Clear business information"
      ],
      [
        "Mobile",
        "Call and quote requests"
      ],
      [
        "Search",
        "New Jersey service discovery"
      ]
    ],
    "challengeTitle": "Help customers find the right service quickly.",
    "challengeOne": "A homeowner with a plumbing problem and a property manager planning an installation have different questions. H2Bros Plumbing needs to serve both without making either visitor search through unrelated information.",
    "challengeTwo": "The website should distinguish urgent help from planned work, explain the service offering, and make it simple to call or request a quote from any screen.",
    "approachTitle": "Organize the experience around the customer’s problem.",
    "approach": [
      [
        "Make services easy to recognize.",
        "Plain-language service categories help visitors connect a plumbing or heating need with the right information."
      ],
      [
        "Support urgent and planned inquiries.",
        "Prominent contact options serve immediate needs, while service details give planned projects space for consideration."
      ],
      [
        "Keep the mobile path simple.",
        "Readable content, clear buttons, and short inquiry paths help customers make contact from their phones."
      ]
    ],
    "storyTitle": "Clear services. Easier contact.",
    "storyOne": "H2Bros Plumbing & Heating serves residential, commercial, and new-construction needs in New Jersey. Its website needs to explain that scope while keeping the first contact simple.",
    "storyTwo": "The device mockup shows the client’s own website, with plumbing imagery, service navigation, and contact options. The case-study layout connects that presentation to a practical goal: helping visitors identify the right service and ask for help.",
    "storyThree": "The focus is on service clarity and inquiry design. No unverified response-time guarantees, booking increases, or search results are presented as measured outcomes.",
    "services": [
      [
        "service-ux",
        "Service-Focused Website UX",
        "Help visitors distinguish plumbing repairs, heating work, and planned installations. Clear categories make the site useful to homeowners, business owners, and new-construction customers.",
        "Service discovery"
      ],
      [
        "local-seo",
        "SEO",
        "The search direction connects New Jersey plumbing and heating needs with relevant service pages. Accurate business details and useful local content support discovery without inventing service areas.",
        "Organic search"
      ],
      [
        "ppc",
        "PPC",
        "Paid-search planning should separate urgent repair intent from installation and replacement inquiries. Relevant landing pages and clear contact options help each visitor reach the appropriate next step.",
        "Paid search"
      ],
      [
        "google-business",
        "GBP Organic & Paid Search",
        "Keep the business name, phone number, services, and service-area details consistent. Any location-linked advertising should use the same accurate information and a clear inquiry destination.",
        "Local visibility"
      ],
      [
        "geo",
        "GEO",
        "Plain-language descriptions of plumbing and heating services help people and AI-assisted search understand H2Bros. Service answers and consistent business information support this direction without guaranteeing AI visibility.",
        "AI search readiness"
      ],
      [
        "service-inquiries",
        "Service Inquiry CTAs",
        "Make calling and requesting a quote easy to find. Inquiry prompts should help customers describe their plumbing or heating need without requiring a long form before the first conversation.",
        "Lead path"
      ],
      [
        "business-proof",
        "Plumbing & Heating Trust Signals",
        "Show the client’s identity, clear contact details, and relevant service imagery. Any credentials, customer reviews, or availability claims should remain accurate and current.",
        "Confidence"
      ],
      [
        "mobile-development",
        "Mobile Responsive Development",
        "Customers may need help while away from a desktop. Simple navigation, readable service content, and accessible contact buttons keep the mobile experience practical.",
        "Mobile action"
      ],
      [
        "content-architecture",
        "Content Architecture",
        "Organize water heaters, sump pumps, fixtures, water filters, and boilers into understandable service paths. Keep emergency inquiries and planned project requests easy to distinguish.",
        "Page clarity"
      ],
      [
        "tracking",
        "Analytics & Lead Tracking",
        "Plan measurement around phone-link clicks, quote requests, and inquiry sources. Separate plumbing and heating interest where possible, and report booked work only when verified data is available.",
        "Measurement"
      ]
    ]
  }
};

function caseStudiesOptionSix(){
  const scenes=["The visitor arrives with a problem","The page must create trust fast","The service path gets simplified","The proof moves closer to the CTA","The next step becomes obvious"];
  return `<section class="case-film section" id="page-content"><div class="shell"><div class="case-film-title reveal"><p class="section-tag">Option 6 / Cinematic Filmstrip</p><h2>Tell every case study like a short film about the customer’s decision.</h2><p>This layout feels dramatic and memorable. It gives each case a sequence: trigger, tension, strategy, screen, proof, next move.</p></div><div class="case-filmstrip">${DATA.cases.map((x,i)=>`<article class="reveal"><img src="${img(x[4])}" alt="${esc(x[0])} scene"><span>Scene ${String(i+1).padStart(2,"0")}</span><h3>${esc(x[0])}</h3><p>${esc(x[3])}</p><a class="text-arrow" href="${path(`case-studies/${x[1]}.html`)}">Watch the case <span>↗</span></a></article>`).join("")}</div><div class="case-film-scenes reveal">${scenes.map((x,i)=>`<span>${String(i+1).padStart(2,"0")} ${x}</span>`).join("")}</div></div></section>${caseOptionFAQ()}<section class="case-film-cta"><div class="shell reveal"><h2>Use this when the case-study page needs more emotion, atmosphere, and story.</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Turn my website into a story <span>↗</span></a></div></section>`;
}

function caseStudiesOptionSeven(){
  const slides=[["Executive takeaway","VNW turns unclear websites into clearer paths toward calls, forms, and trust."],["Strategic decision","Each project is organized around the buying moment, not just brand decoration."],["Proof layer","Screens, reviews, services, locations, and CTAs become part of one persuasive system."],["Growth angle","A strong website should support SEO, PPC, social, reputation, and follow-up."],["Next move","The case study ends with a practical invitation to review the prospect’s own site."]];
  return `<section class="case-deck section" id="page-content"><div class="shell"><div class="case-deck-cover reveal"><p>VNW / CASE DECK</p><h2>Boardroom-ready proof for serious buyers.</h2><a class="pill pill-blue" href="${path("contact.html")}">Book a strategy review <span>↗</span></a></div><div class="case-deck-slides">${slides.map((x,i)=>`<article class="reveal"><span>Slide ${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="case-deck-work">${DATA.cases.map((x,i)=>`<article class="reveal"><strong>0${i+1}</strong><img src="${img(x[4])}" alt="${esc(x[0])} deck visual"><h3>${esc(x[0])}</h3><p>${esc(x[3])}</p></article>`).join("")}</div></div></section>${caseOptionFAQ()}`;
}

function caseStudiesOptionEight(){
  const intents=[["near me / local provider","Location relevance, reviews, phone-first CTA"],["service comparison","Clear service pages, project proof, FAQs"],["urgent help","Fast contact, reassuring copy, mobile action"],["trust check","Reviews, credentials, portfolio, business details"],["quote / estimate","Short forms, expectation-setting, follow-up path"]];
  return `<section class="case-search section" id="page-content"><div class="shell case-search-grid"><div class="case-search-copy reveal"><p class="section-tag">Option 8 / Search-Intent Teardown</p><h2>Case studies for people who care about Google, leads, and local search.</h2><p>This direction maps projects to what people search, what they need to see, and what makes them contact the business.</p><a class="pill pill-orange" href="${path("contact.html")}">Review my search opportunity <span>↗</span></a></div><div class="case-search-serp reveal">${intents.map((x,i)=>`<article><small>Search intent ${String(i+1).padStart(2,"0")}</small><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section><section class="case-search-projects section"><div class="shell">${DATA.cases.map((x,i)=>`<article class="reveal"><img src="${img(x[4])}" alt="${esc(x[0])}"><div><span>${esc(x[2])}</span><h2>${esc(x[0])}</h2><p>${esc(x[3])}</p><ul><li>Search-friendly service context.</li><li>Trust and proof connected to the next action.</li><li>Better paths for high-intent visitors.</li></ul></div></article>`).join("")}</div></section>${caseOptionFAQ()}`;
}

function caseStudiesOptionNine(){
  const interview=[["What was the real problem?","The website needed to help visitors understand the business faster and feel confident enough to contact."],["What did VNW prioritize?","Messaging, trust, service clarity, mobile behavior, and the next step a real customer would take."],["Why does this matter?","Because traffic only becomes valuable when the page makes the decision easier."],["What should the next client ask?","Where are visitors hesitating, and what proof would help them move forward?"]];
  return `<section class="case-interview section" id="page-content"><div class="shell"><div class="case-interview-head reveal"><p class="section-tag">Option 9 / Founder Interview</p><h2>A warmer case-study format that feels like a strategic conversation.</h2><p>This option creates human context. It is useful when you want prospects to feel the thinking, not just inspect the deliverables.</p></div><div class="case-interview-chat">${interview.map((x,i)=>`<article class="reveal"><span>Q${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="case-interview-work">${DATA.cases.map(x=>`<a class="reveal" href="${path(`case-studies/${x[1]}.html`)}"><img src="${img(x[4])}" alt="${esc(x[0])}"><strong>${esc(x[0])}</strong><small>${esc(x[2])}</small></a>`).join("")}</div></div></section>${caseOptionFAQ()}<section class="case-interview-cta"><div class="shell reveal"><h2>Want the story behind what is holding your current site back?</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Start the conversation <span>↗</span></a></div></section>`;
}

function caseStudiesOptionTen(){
  const specs=[["Objective","Turn visitor attention into qualified calls, forms, or appointment paths."],["Inputs","Business goals, services, audience, locations, proof, reviews, existing gaps."],["Modules","Hero, services, proof, project story, FAQs, CTA, contact path, tracking points."],["Risks","Unclear messaging, hidden trust signals, weak mobile UX, thin SEO context."],["Output","A cleaner web experience that supports visibility, credibility, and lead flow."]];
  return `<section class="case-spec section" id="page-content"><div class="shell"><div class="case-spec-head reveal"><p class="section-tag">Option 10 / Blueprint Spec Sheet</p><h2>For buyers who want the work to feel engineered, not improvised.</h2><p>This case-study page uses requirements, specs, modules, and recommendations to communicate authority.</p></div><div class="case-spec-grid">${specs.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div><div class="case-spec-library">${DATA.cases.map((x,i)=>`<article class="reveal"><div><small>Spec ${String(i+1).padStart(2,"0")} / ${esc(x[2])}</small><h2>${esc(x[0])}</h2><p>${esc(x[3])}</p><a class="pill pill-blue" href="${path(`case-studies/${x[1]}.html`)}">Open spec <span>↗</span></a></div><img src="${img(x[4])}" alt="${esc(x[0])} spec visual"></article>`).join("")}</div></div></section>${caseOptionFAQ()}<section class="case-lab-cta"><div class="shell reveal"><p class="section-tag">Technical CTA</p><h2>If your website needs a clearer plan, start with a blueprint before jumping into design.</h2><a class="pill pill-orange pill-large" href="${path("contact.html")}">Create my website blueprint <span>↗</span></a></div></section>`;
}

function storyPage(){
  const teamMembers=[
    ["Vlad","assets/team-vlad-headshot.png"],
    ["Lily","assets/team-lily-headshot.png"],
    ["Meherun Nesa","assets/team-meherun-headshot.png"],
    ["Growth Team","assets/team-growth-headshot.png"]
  ];
  const beliefs=[
    ["01","Strategy before screens","The strongest websites begin with business clarity: who you serve, what buyers need to believe, and what action should happen next."],
    ["02","Design with a job","Every visual choice should make the brand feel more credible, the offer easier to understand, or the path to contact more obvious."],
    ["03","Marketing after launch","A website is the foundation. Search, content, ads, reputation, and reporting turn that foundation into a working growth system."],
    ["04","Human support matters","Businesses need a partner who explains choices clearly, responds quickly, and keeps the work moving without making everything feel complicated."]
  ];
  const chapters=[
    ["Discover","We look at the offer, audience, current website, competitors, search demand, reviews, conversion points, and the real friction holding growth back."],
    ["Shape","We turn that information into a practical plan: page structure, messaging, design direction, SEO priorities, campaign opportunities, and lead paths."],
    ["Build","Design, copy, development, content, tracking, and launch details come together around one goal: make it easier for the right customer to choose you."],
    ["Improve","After launch, we keep thinking. Performance data, search behavior, customer questions, and new opportunities guide what should be improved next."]
  ];
  const proof=["Website design and redesign","SEO and local search visibility","Google Ads and paid search","GEO and AI search readiness","Review and reputation systems","Social media and content","eCommerce and landing pages","Analytics, tracking, and reporting"];
  const faqs=[
    ["Is this page replacing the old About page?","Yes. This direction combines About, Team, Process, Why VNW Media, and Our Approach into one stronger Our Story page."],
    ["Why keep Our Story as one page?","Company information is easier to digest when it reads like one clear narrative instead of forcing visitors through several small pages."],
    ["What should visitors understand after reading it?","They should know what VNW Media does, how the team thinks, why the process is structured, who the agency helps, and how to take the next step."],
    ["Does this help SEO and AI visibility?","Yes. A complete Our Story page can naturally include brand/entity context, services, industries, process language, trust signals, FAQs, and internal links."],
    ["What CTA should this page push?","The strongest CTA is a free audit or strategy request because the page is aimed at visitors deciding whether VNW is the right partner."],
    ["Can this design become the final Our Story page?","Yes. This version is now the direct Our Story destination in the main navigation."]
  ];
  return `
    <section class="trust-strip" data-nav-theme="dark" aria-label="VNW Media capabilities"><div class="trust-track"><small>Built to move businesses forward</small><i></i>${["Web Design","SEO","Google Ads","Social Media","Brand Strategy","Content","Web Design","SEO","Google Ads","Social Media"].map(x=>`<span>${x}</span>`).join("")}</div></section>
    <section class="story2-team story2-team-live-option4 section" data-nav-theme="dark" id="team"><div class="shell"><div class="story2-live-cinema reveal"><div class="team-cinema"><div><p class="team-cinema-eyebrow">Our Team</p><h2><span>People behind</span><span>the strategy,</span><span>screens, search,</span><span>and support.</span></h2><p>A dark, high-impact roster that feels closer to a campaign hero than a staff directory.</p><a class="pill pill-blue" href="${path("contact.html")}">Talk through the project <span>↗</span></a></div><div class="team-cinema-strip" aria-label="VNW Media team">${teamMembers.map(x=>`<figure><img src="${img(x[1])}" alt="${x[0]} VNW Media team headshot"><figcaption>${x[0]}</figcaption></figure>`).join("")}</div></div></div></div></section>
    <section class="story2-approach-light section" data-nav-theme="light"><div class="shell story2-approach-light-grid"><aside class="story2-approach-intro reveal"><p class="section-tag">Our Approach</p><h2>The way we think shapes the way the website performs.</h2><p>One connected philosophy, from the first strategic question through long-term support.</p><a class="pill pill-blue story2-approach-cta" href="${path("contact.html")}">Talk through the project <span>↗</span></a></aside><div class="story2-approach-list">${beliefs.map(x=>`<article class="story2-approach-card reveal"><span>${x[0]}</span><div><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`).join("")}</div></div></section>
    <section class="story2-cta-split" data-nav-theme="dark"><div class="shell story2-cta-grid reveal"><div><p class="section-tag">Why VNW Media</p><h2>We connect the creative work to the customer journey.</h2></div><p>A beautiful website matters. But it matters more when the structure supports SEO, the copy answers real buying questions, the calls to action are clear, and the brand feels trustworthy at every step.</p><div class="story2-cta-actions"><a class="pill pill-blue pill-large" href="${path("contact.html#audit")}">Request a free audit <span>↗</span></a><a class="pill pill-outline pill-large" href="${path("work.html")}">View our work</a></div></div></section>
    <section class="story2-chapters section" data-nav-theme="light" id="process"><div class="shell story2-chapter-grid"><aside class="reveal"><p class="section-tag">Our Process</p><h2>A clear path from idea to launch to improvement.</h2><p>Each phase reduces uncertainty and turns scattered goals into a more useful digital presence.</p></aside><div>${chapters.map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,"0")}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div></div></section>
    <section class="story2-proof section" data-nav-theme="dark" id="why-vnw"><div class="shell story2-proof-grid"><div class="story2-proof-copy reveal"><p class="section-tag">What We Bring Together</p><h2>One team thinking across the full digital decision path.</h2><p>That means the story, pages, campaigns, visibility, proof, and follow-up can support each other instead of competing for attention.</p><a class="text-arrow" href="${path("services.html")}">Explore services <span>↗</span></a></div><div class="story2-proof-cloud reveal">${proof.map(x=>`<span>${x}</span>`).join("")}</div></div></section>
    <section class="story2-faq faq section" data-nav-theme="light" id="faq"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">Our Story FAQ</p><h2>Helpful answers for buyers comparing digital partners.</h2><p>This page gives both people and search engines a clearer understanding of who VNW Media is and how the agency helps.</p></div><div class="faq-list reveal">${faqs.map((x,i)=>`<details ${i===0?"open":""}><summary>${x[0]}<span>+</span></summary><p>${x[1]}</p></details>`).join("")}</div></div></section>
    <section class="story2-final" data-nav-theme="dark"><div class="shell reveal"><p class="section-tag">Ready when you are</p><h2>If the current website feels unclear, outdated, or disconnected from lead generation, start with a review.</h2><div><a class="pill pill-blue pill-large" href="${path("contact.html")}">Get started <span>↗</span></a><a class="pill pill-outline pill-large" href="${path("work.html")}">View our work</a></div></div></section>`;
}

function process(){
  return `<section class="process section" id="process"><div class="shell"><div class="process-heading reveal"><div><p class="section-tag">Our Process</p><h2>From business challenge to digital growth.</h2></div><p>Every phase has a clear purpose, output, and next step.</p></div><div class="process-steps">${["Discover","Strategize","Create","Launch","Improve"].map((x,i)=>`<article class="reveal"><span>0${i+1}</span><div><h3>${x}</h3><p>${["We learn the offer, audience, competition, goals, and current gaps.","We map the message, journey, channels, priorities, and measurements.","Design, content, development, SEO, and campaigns come together.","We test details, connect tracking, prepare the team, and go live.","Performance insights guide practical refinements and new opportunities."][i]}</p></div></article>`).join("")}</div></div></section>`;
}

function testimonials(){
  const reviews=[["Robert","Honeydrop","Reliable, responsive, flexible and committed to the organizations they work with."],["Robert","Marlboro Jewish Day Camp","They promised and delivered, offered key suggestions, and created an exceptional product from our vision."],["Dmitry","Travel Mama","Very quick and creative. Reasonable rates—what a great company to work with."],["Blake","Pollack SEO","Great work at great prices. Very happy with their turnaround time and overall performance."],["Sveta","A2Z Academy","I felt supported and well-informed throughout the website-building process."],["Emad","Grill Point","Excellent service at a reasonable price with a professional team."]];
  return `<section class="testimonials section" id="page-content"><div class="shell"><div class="testimonial-heading reveal"><p class="section-tag">Client Feedback</p><h2>Trusted when the work needs to be creative and dependable.</h2></div><div class="testimonial-grid">${reviews.map((x,i)=>`<article class="testimonial-card ${i===0?"featured":""} reveal"><div class="rating">★★★★★</div><blockquote>“${x[2]}”</blockquote><footer><strong>${x[0]}</strong><span>${x[1]}</span></footer></article>`).join("")}</div></div></section>`;
}

function faq(){
  const qs=[["What does VNW Media do?","Web design, eCommerce, maintenance, SEO, Yelp visibility, Google Business Profile, GEO, PPC, paid social, social management, reputation, email, SMS, content, lead generation, brand strategy, graphic design, video editing, and CRM automation."],["Can you redesign an existing website?","Yes. We can improve the current site or create a new build based on what best supports trust, visibility, and conversion."],["Do you work with local businesses?","Yes. Our work includes daycare, healthcare, restaurants, eyecare, auto repair, real estate, home services, retail, and professional businesses."],["How much does a project cost?","Scope depends on your goals, content, functionality, competition, and support needs. We recommend a clear fit after discovery."],["How do we begin?","Submit the form, call, or email. We’ll discuss the business, current website, goals, and most valuable opportunities."]];
  return `<section class="faq section" id="faq"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">FAQ</p><h2>Questions before we begin.</h2><p>Start here—or contact us for an answer specific to your business.</p></div><div class="faq-list reveal">${qs.map((x,i)=>`<details ${i===0?"open":""}><summary>${x[0]}<span>+</span></summary><p>${x[1]}</p></details>`).join("")}</div></div></section>`;
}

function contact(){
  return `<section class="plan section" id="page-content"><div class="shell plan-grid"><div class="plan-copy reveal"><p class="section-tag">Free Digital Opportunity Review</p><h2>Get a clearer plan before you spend another dollar on marketing.</h2><p>We’ll review your business, website, and growth goals, then recommend the next best move.</p><div class="plan-assurance"><span>✓ No-pressure discovery conversation</span><span>✓ Clear recommendations and scope</span><span>✓ Direct access to an experienced team</span></div></div><form class="plan-form reveal"><input name="name" required placeholder="Full name"><input name="email" type="email" required placeholder="Work email"><input name="phone" type="tel" placeholder="Phone"><input name="company" placeholder="Company"><input name="website" class="full" type="url" placeholder="Website (optional)"><select name="interest"><option>Service interest</option>${DATA.services.map(x=>`<option>${x[0]}</option>`).join("")}</select><textarea class="full" name="message" rows="5" placeholder="Tell us what you want to improve"></textarea><button type="submit">Request My Plan</button><p class="form-status full"></p></form></div></section>`;
}

function topPage(id){
  const p=topPages[id];
  let body="";
  if(id==="story") body=storyPage();
  if(id==="work-hub") body=workHub();
  if(id==="work") body=capabilityTicker()+workPageOne();
  if(id==="work-section-options") body=workSectionOptions();
  if(id==="work-night-options") body=workNightOptions();
  if(id==="work-night-options-light") body=workNightOptions(true);
  if(id==="work-creative-options") body=workCreativeOptions();
  if(id==="work-alternative-options") body=workAlternativeOptions();
  if(id==="home-process-options") body=homeProcessOptions();
  if(id==="work-2") body=workOptionTwo();
  if(id==="work-3") body=workOptionThree();
  if(id==="work-4") body=workOptionFour();
  if(id==="work-5") body=workOptionFive();
  if(id==="work-6") body=workOptionSix();
  if(id==="work-7") body=workOptionSeven();
  if(id==="work-8") body=workOptionEight();
  if(id==="work-9") body=workOptionNine();
  if(id==="work-10") body=workOptionTen();
  if(id==="services-hub") body=`<div id="page-content">${serviceDirectoryMarkup(path(""))}</div>`+servicesFAQ();
  if(id==="services") body=servicesPageOne();
  if(id==="services-2") body=servicesOptionTwo();
  if(id==="services-3") body=servicesOptionThree();
  if(id==="services-4") body=servicesOptionFour();
  if(id==="services-5") body=servicesOptionFive();
  if(id==="services-6") body=servicesOptionSix();
  if(id==="services-7") body=servicesOptionSeven();
  if(id==="services-8") body=servicesOptionEight();
  if(id==="services-9") body=servicesOptionNine();
  if(id==="services-10") body=servicesOptionTen();
  if(id==="industries") body=`<section class="industries section" id="page-content"><div class="shell"><div class="industry-detail-grid">${DATA.industries.map((x,i)=>`<a class="industry-tile reveal" href="${path(`industries/${x[1]}.html`)}"><img src="${img(x[3])}" alt="${x[0]}"><span>0${i+1}</span><h2>${x[0]}</h2><p>${x[2]}</p><b>Explore industry ↗</b></a>`).join("")}</div></div></section>`;
  if(id==="cases-hub") body=caseStudyHub();
  if(id==="cases") body=caseStudiesPage();
  if(id==="cases-alt") body=caseStudiesOptionTwo();
  if(id==="cases-3") body=caseStudiesOptionThree();
  if(id==="cases-4") body=caseStudiesOptionFour();
  if(id==="cases-5") body=caseStudiesOptionFive();
  if(id==="cases-6") body=caseStudiesOptionSix();
  if(id==="cases-7") body=caseStudiesOptionSeven();
  if(id==="cases-8") body=caseStudiesOptionEight();
  if(id==="cases-9") body=caseStudiesOptionNine();
  if(id==="cases-10") body=caseStudiesOptionTen();
  if(id==="clients") body=testimonials();
  if(id==="resources") body=`<section class="resources-page section" id="page-content"><div class="shell">${cards(DATA.resources,"resource")}</div></section>${faq()}`;
  if(id==="contact") body=contact();
  return hero(...p)+body;
}

function detail(kind,item){
  const isCase=kind==="case", isResource=kind==="resource";
  const name=item[0], description=isCase?item[3]:item[2], image=isCase?item[4]:item[3];
  if(isCase) return hero(`${item[2]} Case Study`,name,description,image)+`<section class="detail section" id="page-content"><div class="shell detail-grid"><div class="reveal"><p class="section-tag">Project Story</p><h2>Designed around confidence, clarity, and faster next steps.</h2><p>${description}</p><a class="text-arrow" href="${item[5]}" target="_blank" rel="noreferrer">Visit live website <span>↗</span></a></div><img class="detail-image reveal" src="${img(image)}" alt="${name} website"></div></section>${caseOptionFAQ()}`;
  if(isResource) return hero("Resource",name,description,image)+`<section class="article section" id="page-content"><div class="shell article-grid"><aside class="reveal"><p class="section-tag">Practical Guide</p><h2>Use this before your next marketing investment.</h2><a class="text-arrow" href="${path("contact.html")}">Get help applying it <span>↗</span></a></aside><article class="reveal"><h2>Start with the customer’s decision.</h2><p>Can a first-time visitor understand what you do, who it is for, and why your business is credible within a few seconds? If not, more traffic alone will not solve the problem.</p><h3>Check these five areas</h3><ol><li>Headline clarity and offer positioning.</li><li>Service pages that match real search intent.</li><li>Trust signals, reviews, projects, and credentials.</li><li>Mobile calls-to-action and short forms.</li><li>Tracking, follow-up, and campaign alignment.</li></ol><p>Fix the largest source of friction first, measure the response, and improve from there.</p></article></div></section>`;
  if(kind==="service") {
    const service=SERVICE_CATALOG.find(entry=>entry.slug===item[1]);
    return hero(service.addon?"Creative & Technical Support":"VNW Media Services",service.name,service.description,service.image)+`<section class="service-detail section" id="page-content"><div class="shell service-detail-grid"><div><p class="section-tag">${esc(service.name)}</p><h2>What we help you do.</h2><p>${esc(service.overview)}</p><a class="pill pill-blue" href="${path("contact.html")}">Discuss this service <span>↗</span></a></div><div><p class="section-tag">Service Scope</p><ul class="service-deliverables">${service.includes.map(text=>`<li>${esc(text)}</li>`).join("")}</ul><p class="service-scope-note">${esc(service.scope)}</p></div></div></section><section class="faq section"><div class="shell faq-grid"><div class="faq-intro"><p class="section-tag">Service FAQ</p><h2>Before we get started.</h2></div><div class="faq-list"><details open><summary>What does this service include?<span>+</span></summary><p>${esc(service.includes.join("; "))}. ${esc(service.scope)}</p></details><details><summary>Can this be combined with other services?<span>+</span></summary><p>Yes. We can combine services around your website, visibility, advertising, and follow-up needs. We confirm the deliverables and responsibilities in your proposal.</p></details><details><summary>How do we get started?<span>+</span></summary><p>Contact VNW Media with your website, goals, and priorities. We will discuss the current setup and recommend an appropriate scope.</p></details></div></div></section>${serviceDirectoryMarkup(path(""),true)}`;
  }
  const industry=kind==="industry";
  return hero(industry?"Industry Playbook":"Service",name,description,image)+`<section class="detail section" id="page-content"><div class="shell detail-grid"><div class="reveal"><p class="section-tag">${industry?"Market Strategy":"Service Blueprint"}</p><h2>${industry?"Built around how customers choose.":"Built to connect attention to action."}</h2><p>${description}</p><a class="text-arrow" href="${path("contact.html")}">Plan this with VNW <span>↗</span></a></div><div class="blueprint reveal">${["Strategy and positioning","Trust-first page experience","Search and campaign alignment","Measurement and improvement"].map((x,i)=>`<article><span>0${i+1}</span><h3>${x}</h3><p>A focused layer that helps prospects feel informed, confident, and ready to act.</p></article>`).join("")}</div></div></section>${process()}`;
}

function bootPages(){
  const app=document.querySelector("#app"), id=document.body.dataset.page;
  let content="";
  if(topPages[id]) content=topPage(id);
  if(!content && id?.startsWith("service-")) content=detail("service",DATA.services.find(x=>x[1]===id.slice(8))||DATA.services[0]);
  if(!content && id?.startsWith("industry-")) content=detail("industry",DATA.industries.find(x=>x[1]===id.slice(9))||DATA.industries[0]);
  if(id==="case-south-carolina-motors") content=southCarolinaMotorsCaseStudy();
  if(id?.startsWith("case-") && CLIENT_CASE_STUDIES[id.slice(5)]) content=renderClientCaseStudy(CLIENT_CASE_STUDIES[id.slice(5)]);
  if(!content && id?.startsWith("case-")) content=detail("case",DATA.cases.find(x=>x[1]===id.slice(5))||DATA.cases[0]);
  if(!content && id?.startsWith("resource-")) content=detail("resource",DATA.resources.find(x=>x[1]===id.slice(9))||DATA.resources[0]);
  const pageTitle=topPages[id]?.[0] || content.match(/<h1>(.*?)<\/h1>/)?.[1] || "VNW Media";
  const titleDecoder=document.createElement("textarea");
  titleDecoder.innerHTML=pageTitle;
  document.title=`${titleDecoder.value} | VNW Media`;
  app.innerHTML=header()+`<main>${content}</main>`+footer();
}
bootPages();
