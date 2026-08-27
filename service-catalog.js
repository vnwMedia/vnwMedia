// Shared service catalog. Package scope is based on the supplied VNW Media PDF.
// Existing brand, content, and eCommerce offerings are retained. Prices are not published here.
const SERVICE_CATALOG = [
  {
    "group": "Websites & Creative",
    "slug": "web-design",
    "name": "Web Design & Development",
    "description": "Custom websites, redesigns, landing pages, and responsive experiences built around your business.",
    "includes": [
      "Custom page design and mobile layouts",
      "WordPress or Webflow CMS integration",
      "Contact forms, booking and CRM connections",
      "SEO foundations, accessibility and speed improvements"
    ],
    "overview": "From a focused business website to a larger platform, we plan the pages, design the experience, and develop a clear path from first visit to inquiry.",
    "scope": "Page counts, integrations, revisions, and launch schedules depend on the selected project scope.",
    "image": "assets/south-carolina-motors.png",
    "addon": false
  },
  {
    "group": "Websites & Creative",
    "slug": "ecommerce",
    "name": "eCommerce Web Design",
    "description": "Shopify and WooCommerce storefronts that make browsing, product selection, and checkout easier.",
    "includes": [
      "Store design and eCommerce integration",
      "Product uploads and variant setup",
      "Shopping journeys and conversion improvements",
      "CRM connections and ongoing store support"
    ],
    "overview": "Connect your product catalog with an experience built for customers. We support storefront design, product presentation, and the integrations needed to manage inquiries and orders.",
    "scope": "eCommerce is included in applicable website projects; product setup and additional functionality are scoped separately.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Websites & Creative",
    "slug": "website-maintenance",
    "name": "Website Maintenance",
    "description": "Ongoing website updates, bug fixes, content edits, and technical support.",
    "includes": [
      "Theme and plugin updates",
      "Page edits, additions, and content changes",
      "Theme installations and eCommerce support",
      "Database work and technical troubleshooting"
    ],
    "overview": "Keep your website current as your business changes. Maintenance plans provide support for routine updates and fixes, with additional technical work available when needed.",
    "scope": "Support hours and turnaround depend on your maintenance plan. Additional website work can be quoted separately.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Websites & Creative",
    "slug": "brand-strategy",
    "name": "Brand & Strategy",
    "description": "Positioning, messaging, visual identity, and focused strategy sessions.",
    "includes": [
      "Brand positioning and messaging",
      "Visual identity and creative direction",
      "Campaign planning and prioritization",
      "Monthly brand strategy sessions"
    ],
    "overview": "Give your website and campaigns a consistent direction. We help clarify what makes your business different and translate that into messages and creative decisions customers can recognize.",
    "scope": "Brand strategy sessions are available as an add-on; identity and creative projects are scoped to your needs.",
    "image": "assets/case-system-stack.svg",
    "addon": true
  },
  {
    "group": "Websites & Creative",
    "slug": "graphic-design",
    "name": "Graphic Design",
    "description": "Visual assets for your website, social content, promotions, and campaigns.",
    "includes": [
      "Website graphics and visual assets",
      "Social post and promotional design",
      "Campaign creative adaptations",
      "Text and image updates"
    ],
    "overview": "Keep your visual communication consistent across channels with design support for the assets your business needs.",
    "scope": "Graphic design is available as an additional service, with deliverables and revisions agreed before work begins.",
    "image": "assets/case-system-stack.svg",
    "addon": true
  },
  {
    "group": "Search & Local Visibility",
    "slug": "seo",
    "name": "Search Engine Optimization",
    "description": "Technical, on-page, local, and content SEO that helps customers discover your business.",
    "includes": [
      "Site audits, keyword research, and competitor analysis",
      "Metadata, internal links, speed, and mobile optimization",
      "Blog content and relevant promotion",
      "Search Console, Analytics, and ranking reports"
    ],
    "overview": "Build a stronger foundation for organic discovery. We combine technical improvements, useful content, and search measurement around the services and locations that matter to your business.",
    "scope": "Keyword coverage, content volume, and promotion vary by plan. Search positions and traffic are not guaranteed.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Search & Local Visibility",
    "slug": "yelp-seo",
    "name": "Yelp SEO & Visibility",
    "description": "Yelp profile optimization, content improvements, and ongoing visibility management.",
    "includes": [
      "Profile, category, attribute, and description optimization",
      "Photo recommendations and upload strategy",
      "Review monitoring and response guidance",
      "Competitor analysis and performance reporting"
    ],
    "overview": "Make your Yelp presence more complete and easier to act on. We improve profile information, visuals, and messaging, with options for restaurant and multi-location strategies.",
    "scope": "Profile work, keyword coverage, and location support depend on the selected package; rankings and review outcomes are not guaranteed.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Search & Local Visibility",
    "slug": "google-business-profile",
    "name": "Google Business Profile Management",
    "description": "Profile optimization, posts, photos, review support, and local performance reporting.",
    "includes": [
      "Categories, services, descriptions, and business details",
      "Google posts, photo uploads, and Q&A updates",
      "Review monitoring and response management",
      "Competitor insights and call, click, and direction tracking"
    ],
    "overview": "Keep the information customers find in Google Search and Maps accurate and useful. We manage your profile as an ongoing part of your local presence.",
    "scope": "Posting frequency, review support, citation work, and reporting depth vary by package. Map placement is not guaranteed.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Search & Local Visibility",
    "slug": "geo",
    "name": "AI Visibility & GEO",
    "description": "Content, structured data, and testing for discovery through AI-assisted search.",
    "includes": [
      "AI visibility audits and baseline prompt testing",
      "FAQ, service-intent, and comparison content",
      "Schema and business-information consistency",
      "Authority content and monthly performance reporting"
    ],
    "overview": "Help search engines and AI systems understand your services, location, and expertise. Generative Engine Optimization complements SEO through clear content, consistent facts, and ongoing testing.",
    "scope": "The selected plan determines content and authority work. No service can guarantee AI recommendations, mentions, or citations.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Search & Local Visibility",
    "slug": "content-writing",
    "name": "Content Writing",
    "description": "Website copy, service pages, blogs, and campaign content with a clear purpose.",
    "includes": [
      "Website and service-page copy",
      "SEO blog articles",
      "FAQ and comparison content",
      "Campaign messaging and copy editing"
    ],
    "overview": "Explain your business clearly and give visitors useful reasons to take the next step. Our content work supports websites, organic search, AI visibility, and customer communication.",
    "scope": "Content can be part of a marketing plan or commissioned separately; volume and research requirements are agreed in advance.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Ads & Lead Generation",
    "slug": "lead-generation",
    "name": "Lead Generation & Digital Marketing",
    "description": "Combined SEO, PPC, social, reputation, and follow-up strategies around your growth goals.",
    "includes": [
      "Coordinated paid and organic campaigns",
      "Landing pages, funnels, and calls to action",
      "Social content and reputation support",
      "Performance reporting and strategy reviews"
    ],
    "overview": "Bring the right channels together in one practical plan. Our combination packages range from building a consistent local presence to connecting paid campaigns, content, and lead-generation journeys.",
    "scope": "Channel mix, content volume, strategy calls, and add-ons depend on the package. Advertising budgets and third-party costs should be confirmed in your proposal.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Ads & Lead Generation",
    "slug": "google-ppc",
    "name": "Pay Per Click Advertising",
    "description": "Google Search, Display, Shopping, YouTube, local campaigns, and remarketing.",
    "includes": [
      "Campaign audits, setup, and audience targeting",
      "Search, Display, Shopping, video, and local ad formats",
      "Bid and budget optimization with creative testing",
      "Negative-keyword review and monthly reporting"
    ],
    "overview": "Match advertising to the way your customers search, browse, and compare. We plan campaigns around the offer, landing page, and action you want visitors to take.",
    "scope": "Formats depend on eligibility and campaign fit. Setup, management, and media spend are separate considerations; results are not guaranteed.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Ads & Lead Generation",
    "slug": "paid-social",
    "name": "Paid Social Advertising",
    "description": "Social ad planning and management tailored to your audience and offer.",
    "includes": [
      "Custom paid social campaign planning",
      "Audience and creative direction",
      "Meta Pixel implementation where appropriate",
      "Social tracking and performance reporting"
    ],
    "overview": "Connect paid social campaigns with relevant creative and a clear destination. A tailored plan sets out the platforms, audiences, and measurement approach for your business.",
    "scope": "Paid social management is a custom service rather than an automatic inclusion in every social content package.",
    "image": "assets/case-system-stack.svg",
    "addon": true
  },
  {
    "group": "Ads & Lead Generation",
    "slug": "crm-automation",
    "name": "CRM Integration & Automation",
    "description": "Connect website inquiries, customer records, and follow-up workflows.",
    "includes": [
      "CRM integration and workflow setup",
      "Website forms connected to your CRM",
      "Email follow-up and lifecycle automation",
      "API and Zapier connections for automated sends"
    ],
    "overview": "Reduce the manual steps between an inquiry and a useful follow-up. We help connect the tools your business uses and define workflows for the customer journey.",
    "scope": "Integrations and workflows are scoped separately or included where specified. Platform subscriptions and available features depend on the tools selected.",
    "image": "assets/case-system-stack.svg",
    "addon": true
  },
  {
    "group": "Ads & Lead Generation",
    "slug": "video-editing",
    "name": "Short-Form Video & Ad Creative",
    "description": "Video editing and campaign creative for social content and advertising.",
    "includes": [
      "Short-form video editing",
      "Video ad creative",
      "Reels and short social content",
      "Campaign-ready creative adaptations"
    ],
    "overview": "Turn video material into focused content for your social channels and campaigns. We shape edits around the message, format, and next step.",
    "scope": "Short-form editing is an add-on; video ad creative is included in applicable combination packages. Production and filming are not assumed.",
    "image": "assets/case-system-stack.svg",
    "addon": true
  },
  {
    "group": "Engagement & Retention",
    "slug": "social-media",
    "name": "Social Media Management",
    "description": "Profile setup, content planning, publishing, and community engagement.",
    "includes": [
      "Profile creation or refresh",
      "Static posts, carousels, reels, and shorts",
      "Hashtag strategy and community engagement",
      "Insights dashboards and performance reviews"
    ],
    "overview": "Keep your brand active with a coordinated content plan and a consistent voice. We connect social activity to your website and broader marketing goals.",
    "scope": "Platform count, content volume, engagement time, and optional monitoring depend on your package. Paid ad management is scoped separately.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Engagement & Retention",
    "slug": "reputation-management",
    "name": "Online Reputation Management",
    "description": "Review monitoring, response support, and reputation improvement strategies.",
    "includes": [
      "Review monitoring across Google, Facebook, and Yelp",
      "Response guidance and sentiment analysis",
      "Review-request workflows and website widgets",
      "Brand monitoring and reputation-repair planning"
    ],
    "overview": "Understand what customers are saying and respond with a consistent approach. Our reputation services support monitoring, customer feedback, and credible business information across channels.",
    "scope": "Automation, multi-location support, and reputation-repair work vary by scope. Review removal, ratings, and search-result changes cannot be guaranteed.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Engagement & Retention",
    "slug": "email-marketing",
    "name": "Email Marketing",
    "description": "Branded campaigns, audience segmentation, lifecycle messaging, and automation.",
    "includes": [
      "Email templates and campaign planning",
      "Audience segmentation and message testing",
      "Welcome, post-inquiry, and re-engagement flows",
      "Engagement reports and attribution where supported"
    ],
    "overview": "Stay connected after the first visit or inquiry. We build email campaigns and follow-up journeys around the audience, message, and action that matter to your business.",
    "scope": "Campaign volume, active automation flows, and reporting depth depend on the selected package.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  },
  {
    "group": "Engagement & Retention",
    "slug": "text-marketing",
    "name": "Text Message Marketing (SMS)",
    "description": "Promotions, reminders, updates, and automated customer follow-up by text.",
    "includes": [
      "Opt-in and opt-out management",
      "Targeted messages and automated sends",
      "API and Zapier integration",
      "Delivery, click-through, and performance reports"
    ],
    "overview": "Reach customers who have chosen to hear from you with timely text campaigns and follow-up messages. Plans can support promotions, appointment reminders, and updates.",
    "scope": "Message credits, keywords, MMS options, and turnaround depend on the package. Sending requires an appropriate consent and opt-out process.",
    "image": "assets/case-system-stack.svg",
    "addon": false
  }
];
const SERVICE_GROUPS = [...new Set(SERVICE_CATALOG.map(service => service.group))].map(group => [group, SERVICE_CATALOG.filter(service => service.group === group).map(service => [service.name, service.slug])]);
function serviceDirectoryMarkup(root = "", compact = false) {
  return `<section class="service-directory section ${compact ? "service-directory-compact" : ""}" id="all-services"><div class="shell"><div class="section-heading"><p class="section-tag">Our Full Offering</p><h2>Choose the support your business needs.</h2><p>Explore individual services, combined marketing plans, and optional creative and technical support.</p></div><div class="service-directory-groups">${SERVICE_GROUPS.map(([group, links]) => `<article><h3>${group.replaceAll("&", "&amp;")}</h3><div>${links.map(([name, slug]) => {const service = SERVICE_CATALOG.find(item => item.slug === slug); return `<a href="${root}services/${slug}.html"><span>${name.replaceAll("&", "&amp;")}</span>${compact ? "" : `<small>${service.description}</small>`}<b aria-hidden="true">↗</b></a>`;}).join("")}</div></article>`).join("")}</div><p class="service-scope-note">Services can be combined around your goals. Package inclusions, add-ons, media budgets, and platform costs are confirmed in your proposal.</p><a class="pill pill-blue" href="${root}contact.html">Plan my service mix <span>↗</span></a></div></section>`;
}
function serviceFooterMarkup(root = "") {
  return `<h4>Services</h4><div class="footer-service-links">${SERVICE_CATALOG.map(service => `<a href="${root}services/${service.slug}.html">${service.name.replaceAll("&", "&amp;")}</a>`).join("")}</div><a class="footer-all-services" href="${root}services.html#all-services">Explore all services ↗</a>`;
}

// Canonical service labels used by the navigation and menu studies.
const SERVICE_MENU_LABELS = {
  'web-design':'Web Design & Development','ecommerce':'eCommerce','website-maintenance':'Website Maintenance',
  'brand-strategy':'Brand & Strategy','graphic-design':'Graphic Design','seo':'SEO','yelp-seo':'Yelp SEO & Visibility',
  'google-business-profile':'Google Business Profile','geo':'AI Visibility & GEO','content-writing':'Content Writing',
  'lead-generation':'Lead Generation','google-ppc':'PPC Advertising','paid-social':'Paid Social Ads',
  'crm-automation':'CRM & Automation','video-editing':'Video & Ad Creative','social-media':'Social Media Management',
  'reputation-management':'Reputation Management','email-marketing':'Email Marketing','text-marketing':'SMS Marketing'
};
// Selected navigation: Option 7, merged services with the Create / Connect / Convert breakdown.
// Content Writing and Video & Ad Creative remain excluded by the user's correction.
function serviceMenuLink(slug){
  const service=SERVICE_CATALOG.find(item=>item.slug===slug);
  return [SERVICE_MENU_LABELS[slug] || service.name,`services/${slug}.html`];
}
const SERVICE_MENU_PILLARS = [
  {name:'Create', description:'Build a brand and website that stand out.', groups:[
    {name:'Brand Identity', links:['brand-strategy','graphic-design'].map(serviceMenuLink)},
    {name:'Website & App Development', links:[...['web-design','ecommerce','website-maintenance'].map(serviceMenuLink),['App Design & Development','contact.html'],['Landing Pages','services/web-design.html']]}
  ]},
  {name:'Connect', description:'Reach the people who need your business.', groups:[
    {name:'Social Media Strategy', links:[serviceMenuLink('social-media'),['Social Media Consultation','services/social-media.html'],['Community Management','services/social-media.html']]},
    {name:'SEO & Local Visibility', links:['seo','yelp-seo','google-business-profile','geo','reputation-management'].map(serviceMenuLink)}
  ]},
  {name:'Convert', description:'Turn interest into leads and customers.', groups:[
    {name:'Paid Advertising', links:['lead-generation','google-ppc','paid-social'].map(serviceMenuLink)},
    {name:'Email, SMS & Automation', links:['email-marketing','text-marketing','crm-automation'].map(serviceMenuLink)}
  ]}
];
function serviceMenuMarkup(root = "") {
  const safe = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
  const pillars = SERVICE_MENU_PILLARS.map((pillar,i) => `<section class="mega-pillar" aria-labelledby="service-pillar-${i}"><header class="mega-pillar-heading"><h2 id="service-pillar-${i}">${safe(pillar.name)}</h2><p>${safe(pillar.description)}</p></header>${pillar.groups.map(group => `<div class="mega-column"><h3>${safe(group.name)}</h3>${group.links.map(([label,href]) => `<a href="${root}${safe(href)}" title="${safe(label)}"><span>${safe(label)}</span><b aria-hidden="true">↗</b></a>`).join("")}</div>`).join("")}</section>`).join("");
  return `<div class="nav-item nav-services has-mega mega-wide mega-compact mega-option-seven"><a class="nav-link nav-mega-link nav-services-trigger" href="${root}services.html" aria-controls="services-mega" aria-expanded="false">Services</a><div class="mega-menu" id="services-mega" aria-label="Services menu"><div class="mega-inner"><div class="mega-pillars">${pillars}</div><div class="mega-footer"><a href="${root}services.html#all-services">View all services <span aria-hidden="true">↗</span></a><a href="${root}contact.html">Not sure? Let’s talk <span aria-hidden="true">↗</span></a></div></div></div></div>`;
}
