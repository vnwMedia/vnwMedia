(() => {
  const pageDepth = Number.parseInt(document.body?.dataset.depth || "0", 10) || 0;
  const root = new URL("../".repeat(pageDepth), location.href);
  const asset = (path) => new URL(path, root).href;
  const contact = new URL("contact.html", root).href;
  const reviewsUrl = "https://www.google.com/maps/search/?api=1&query=VNW+Media&query_place_id=ChIJH8x-SSDNw4kRL5QM6uUWIV4";

  const reviews = [
    ["Ian McWilliams", "vnwMedia revamped our pharmaceutical company's website. It now looks modern while still retaining a streamlined and friendly user interface"],
    ["Irene Sinayskaya, Esq.", "Our firm has had an excellent experience working with VNW Media on our law firm’s website design, development, SEO, and AI strategy. The team took the time to understand our firm, our brand, and our goals, and translated that vision into a polished and professional website. In addition to designing and maintaining our website, they consistently help us strengthen our online presence, improve our search visibility, and identify practical ways to incorporate AI into our marketing and business-development efforts.  VNW Media is responsive, knowledgeable, creative, and proactive. I highly recommend them!"],
    ["Anthony Caputo", "Lily and her team are great. They are constantly working on updating my website as well as working on growing my exposure. Very professional and truly care."],
    ["dmitry kuperman", "Amazing, all around!!! 🙌🙏💪❤️🚀"],
    ["Rob Pennachio", "My company’s website had been down for a few months and was in desperate need of a refresh. I hired VNW for this and they were excellent to work with. The final product is something we can proudly show our clients and easily modify and update as needed down the road."],
    ["Chris Mangano", "Great experience. Vladimir was professional, responsive, easy to communicate with, and really understood the look and feel we were going for. The website came out clean, modern, and easy to navigate. Highly recommend"],
    ["Steven Parra", "I really have to thank the people at VNW Media. Especially Lily, she helped me build the website for my business and was super helpful the entire time. Her responses were quick and they understood what I needed and got the job done. I couldn't ask for more."],
    ["Mark Bratkovsky", "Great company! Always attentive service and results oriented"],
    ["Yury B", "great experience with web design, launching and optimizing our meta and google campaigns. definitely recommend for any marketing or development needs."],
    ["Boris Plotinskiy", "Vlad and his team are exceptional. They have been running our advertising for 3 years now and we are extremely happy with the results. They drove a ton of revenue to our company and we are happy to have them as a partner."],
    ["Steven Yuniver", "Working with VNW Media on the launch of our website was seamless. They approached the project with a high level of professionalism, translating our vision into a polished, high-performing digital presence that effectively represents our firm. Their technical expertise, attention to UX design, and responsiveness to revisions made the entire development process straightforward and efficient. We are thrilled with the final result and would gladly recommend VNW Media to any business looking to elevate their web presence."],
    ["Gary Tancer", "I have been using these people for a year now and my business is growing by the day. We see the traffic coming into our store almost every day and lots of new local people calling"],
    ["Andrew Mannino", "Since we started working together, my online presence has improved drastically and my company is busier."],
    ["Pat Natal", "Excellent service and professionalism."],
    ["Andrey Kolesnikov", "They were incredibly fast and efficient, delivering smart and innovative ideas. Their extensive experience ensured a flawless result."],
    ["Ed Sorsher", "A wonderful marketing company that truly cares about their clients. They are extremely professional."],
    ["Taylor Mistretta", "Professional, attentive and incredibly talented. They translated my vision into a stunning, user-friendly website."],
    ["Michael Feder", "The team understood right away what I needed and delivered an exceptional website very quickly."],
    ["Sales Geometria", "Their prices are reasonable, the team is friendly and they deliver good results on time."],
    ["Daniela Krinshpun", "They have an excellent eye for design, are very responsive and were patient with my changes."],
    ["David Moro", "Consistently high standards of creativity, design and customer service, with a highly personalized approach."],
    ["Amore Tutti RAC", "The entire team was professional and great to work with. Quick service, very trustworthy and highly recommended."]
  ];

  const areaFacts = {
    "new-jersey": {
      state: "New Jersey",
      context: "VNW Media is based in Morganville, New Jersey. We work with businesses across the state, building plans around their actual service footprint, audiences, competition, and goals—not a one-size-fits-all city template.",
      places: "Monmouth County, Middlesex County, Ocean County, Mercer County, and communities throughout New Jersey",
      localNote: "Local expertise, direct conversations, and practical market context from a New Jersey-based team.",
      region: "New Jersey"
    },
    "new-york": {
      state: "New York",
      context: "VNW Media partners with New York businesses through a collaborative, remote-first process. We shape each plan around the places a business genuinely serves, its customer journey, and the competitive context of its market.",
      places: "Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Long Island, and surrounding New York communities where your business operates",
      localNote: "A connected digital partner for New York businesses, with project conversations and collaboration tailored to your team.",
      region: "New York"
    }
  };

  const pages = {
    "digital-marketing-new-jersey": {
      region: "new-jersey", service: "Digital Marketing", image: "nj-digital-marketing.jpg", alt: "Two New Jersey small-business owners reviewing a website together in a welcoming neighborhood shop", proof: "Connected growth planning",
      hero: "Digital marketing that helps New Jersey businesses move forward.",
      lead: "Bring your website, search visibility, paid campaigns, and lead follow-up together around a clear business goal.",
      introTitle: "One connected plan for the next customer conversation.",
      intro: "New Jersey businesses often need several digital channels to work together—not a disconnected list of tactics. We start with the audience, offer, service area, and strongest next action, then shape the right combination of website, SEO, paid media, social, and follow-up.",
      cards: [["Start with the customer", "Clarify what people need, what makes your business a fit, and where the decision currently gets stuck."], ["Make the experience clearer", "Align your message, website, service pages, and calls to action so prospects know what to do next."], ["Connect discovery to action", "Coordinate organic search, Google Ads, social campaigns, landing pages, and measurement around the right audience."], ["Learn and improve", "Use meaningful inquiries and campaign signals to guide the next set of decisions." ]],
      systemTitle: "A practical mix of strategy, creative, and performance.",
      systemIntro: "The plan is tailored to your business and budget. These are the connected capabilities we can bring together when they fit the goal.",
      offerings: [["Digital strategy", "Audience, positioning, channel priorities, and a realistic growth roadmap."], ["Website & landing pages", "Clear, responsive experiences that help visitors understand your services and take action."], ["Search & paid media", "SEO and Google Ads aligned to the services, locations, and inquiries that matter."], ["Lead tracking & follow-up", "Measurement and CRM or email connections that help your team respond and learn."]],
      showcaseTitle: "New Jersey-wide reach starts with a clear local focus.", showcaseText: "From Morganville and Monmouth County to businesses serving communities across the state, the right plan reflects where customers are—and what your team can serve well. We avoid copy-and-paste location targeting and build around your real coverage, capacity, and goals.", showcaseImage: "assets/industry-concepts/business-neighborhood-hero-v1.jpg", showcaseAlt: "Independent neighborhood business in a walkable New Jersey downtown", tags: ["Local context", "Connected channels", "Qualified inquiries", "Clear reporting"],
      faq: [["What does digital marketing include?", "Depending on your goals, it can include website strategy and design, SEO, Google Ads, social media, landing pages, analytics, and lead follow-up. We recommend only the pieces that fit your audience and resources."], ["Do you work with businesses outside Morganville?", "Yes. VNW Media is based in Morganville and works with businesses across New Jersey. The service-area plan is based on the communities your business actually serves."], ["Can I start with one service?", "Yes. A project can begin with a priority such as SEO, a website, or paid search, then expand if the results and business needs support it."], ["How do you measure results?", "We agree on practical measures such as qualified calls, form submissions, booked consultations, campaign cost, and relevant search visibility. Reporting depends on the tracking available."], ["Do you guarantee leads or rankings?", "No. Marketing results depend on the market, offer, budget, implementation, and customer experience. We set measurable goals and refine the work, but do not promise specific rankings or lead volumes." ]]
    },
    "seo-new-jersey": {
      region: "new-jersey", service: "SEO", image: "nj-seo.jpg", alt: "A New Jersey business owner and search specialist reviewing a local visibility map and performance charts", proof: "Search visibility, grounded in useful pages",
      hero: "SEO for New Jersey businesses that want to be found for the right reasons.", lead: "Technical foundations, local relevance, useful service content, and measurement designed around qualified search demand.",
      introTitle: "Build visibility around real services and real service areas.", intro: "SEO is more than adding keywords. We connect technical health, page purpose, local information, customer questions, and internal links so people and search engines can understand what you offer and where you serve.",
      cards: [["Technical health", "Review crawlability, indexation, site structure, redirects, mobile usability, and performance."], ["Local relevance", "Align service-area pages, business details, and local information with the markets you genuinely serve."], ["Useful content", "Improve service pages and FAQs around the questions customers ask before they choose."], ["Measure progress", "Review relevant search visibility alongside calls, forms, and other tracked business actions."]],
      systemTitle: "Make every important page earn its place.", systemIntro: "A sound SEO plan connects the site’s technical foundations to useful pages and an understandable path to action.",
      offerings: [["Search opportunity research", "Prioritize services, questions, and locations that align with business goals."], ["Technical SEO", "Identify and prioritize site issues that may affect discovery or usability."], ["Local SEO", "Improve location relevance without creating thin or misleading coverage pages."], ["Content & reporting", "Create useful page plans and track meaningful changes over time."]],
      showcaseTitle: "Local search should reflect how your New Jersey business operates.", showcaseText: "Whether customers visit a storefront, request an appointment, or need a provider to travel to them, location information should be accurate and useful. We can shape SEO around Monmouth, Middlesex, Ocean, Mercer, and other areas only where they match the business’s actual footprint.", showcaseImage: "assets/service-heroes/seo-performance-review-v1.jpg", showcaseAlt: "Search specialist reviewing SEO performance and organic search charts", tags: ["Technical SEO", "Local visibility", "Service content", "Measurement"],
      faq: [["What is included in SEO?", "Scope can include technical review, search and competitor research, page recommendations, local information, content planning, internal links, and reporting. The mix depends on your website and goals."], ["Can you target several New Jersey towns?", "We can plan useful service-area coverage where it reflects your actual service footprint. We do not recommend publishing near-duplicate city pages just to mention more place names."], ["How long does SEO take?", "SEO is ongoing work, and timing varies by competition, website condition, resources, and search demand. We identify early tasks but do not promise a fixed ranking timeline."], ["Do you guarantee a first-page ranking?", "No. Search results change and depend on many factors outside any agency’s control. Our work focuses on sound implementation and measurable progress."], ["Can SEO work with Google Ads?", "Yes. Organic and paid search can complement one another, especially when service pages, tracking, and conversion paths are coordinated." ]]
    },
    "web-design-new-jersey": {
      region: "new-jersey", service: "Web Design", image: "nj-web-design.jpg", alt: "A web designer discussing a small business website and customer experience with a New Jersey owner", proof: "Websites designed around people and next steps",
      hero: "Web design for New Jersey businesses ready for a better customer experience.", lead: "Create a website that makes your services easier to understand, your business easier to trust, and the next step easier to take.",
      introTitle: "A website should do more than look current.", intro: "Your site is often where a customer decides whether to call, book, visit, or keep looking. We organize content, design, mobile experience, SEO foundations, and conversion paths around that decision.",
      cards: [["Clarify the offer", "Make the most important services, audiences, locations, and differentiators easy to understand."], ["Design for real use", "Create a responsive experience that feels clear on a phone, tablet, and desktop."], ["Build confidence", "Bring the right proof, reviews, project examples, and useful answers into the customer journey."], ["Make action easy", "Connect calls, forms, scheduling, and analytics so customers can act and your team can learn."]],
      systemTitle: "From first impression to confident inquiry.", systemIntro: "The right build depends on your content, systems, audience, and future plans. We shape the structure before polishing the surface.",
      offerings: [["Structure & content", "Sitemap, page goals, content hierarchy, and clear service messaging."], ["Visual design", "A distinct brand experience built for the business and its customers."], ["Development & integrations", "Responsive implementation, forms, CMS connections, and useful integrations."], ["SEO & launch", "Technical foundations, accessibility checks, testing, analytics, and launch support."]],
      showcaseTitle: "Built for local businesses and the way customers choose them.", showcaseText: "A New Jersey service business may need prominent calls and estimate requests. A practice may need clear appointments and provider details. A retail brand may need smoother product discovery. We shape page flow to the business instead of forcing every company into the same template.", showcaseImage: "assets/service-heroes/web-design-customer-engagement-v1.jpg", showcaseAlt: "A customer and web designer reviewing a website on a large screen", tags: ["Mobile-first clarity", "Search-ready structure", "Trust signals", "Conversion paths"],
      faq: [["How much does a business website cost?", "Cost depends on the number of pages, design needs, content, integrations, functionality, and migration or support scope. We define those requirements before proposing a project."], ["Can you redesign my existing New Jersey business website?", "Yes. We can assess the current site and recommend a focused redesign, improvements to key pages, or a new build based on what best supports your goals."], ["Will the website work on mobile?", "Responsive design and mobile review are part of the planning and testing process. The exact experience depends on content, features, and the devices and browsers in scope."], ["Can you help with SEO during a redesign?", "Yes. We can plan URL changes, redirects, page structure, metadata, content, internal links, and technical checks as part of an agreed redesign scope."], ["How long does a website project take?", "Timing depends on project size, content readiness, feedback cycles, integrations, and approvals. We confirm milestones and responsibilities in the project plan." ]]
    },
    "ppc-new-jersey": {
      region: "new-jersey", service: "Google PPC", image: "nj-ppc.jpg", alt: "A paid-search strategist and New Jersey business owner reviewing advertising campaign charts together", proof: "Paid search built around qualified demand",
      hero: "Google Ads management for New Jersey businesses seeking qualified demand.", lead: "Plan search campaigns around your services, service area, budget, and the inquiries your team is equipped to handle.",
      introTitle: "Reach active searchers with a campaign built to learn.", intro: "Google Ads can connect a business with people actively looking for a service. Strong management means aligning search intent, geography, landing pages, budgets, tracking, and follow-up—not simply turning ads on.",
      cards: [["Choose the right demand", "Research service intent, campaign types, competitors, and negative-keyword needs."], ["Match the service area", "Set geographic targeting around real operating coverage and campaign capacity."], ["Improve the click-to-lead path", "Align ads with relevant pages, calls, forms, and useful expectations."], ["Measure and optimize", "Review spend, qualified inquiries, and campaign signals to guide careful adjustments."]],
      systemTitle: "Connect campaign setup, landing pages, and follow-up.", systemIntro: "The campaign should fit your budget and ability to respond. We establish measurement and priorities before optimizing for volume.",
      offerings: [["Account & keyword review", "Assess account structure, search terms, service intent, and existing performance."], ["Campaign planning", "Build campaign themes, geographic coverage, budget allocation, and ad direction."], ["Landing-page alignment", "Make sure the destination page answers the ad promise and gives a clear next step."], ["Tracking & optimization", "Review conversion tracking, lead quality, search terms, and agreed performance measures."]],
      showcaseTitle: "Local targeting is only useful when it matches your real coverage.", showcaseText: "Campaigns can focus on Morganville, Monmouth County, or other New Jersey markets where your business can deliver. We account for service radius, customer value, budget, scheduling, and the landing page—not just a list of nearby cities.", showcaseImage: "assets/service-heroes/google-ppc-v2.jpg", showcaseAlt: "Google Ads campaign planning and paid search performance review", tags: ["Search intent", "Geographic strategy", "Conversion tracking", "Lead quality"],
      faq: [["What does Google Ads management include?", "Depending on scope, it can include account audits, keyword and search-term research, campaign structure, ad copy, location settings, landing-page guidance, conversion tracking, and reporting."], ["What budget should a New Jersey business start with?", "There is no universal starting budget. It depends on your services, competition, target areas, economics, and how many qualified inquiries you can handle. Ad spend is separate from management fees."], ["Do you guarantee leads or a cost per lead?", "No. Auction competition, offer, website, seasonality, and audience behavior affect results. We set a measurement plan and work to improve performance without promising a specific volume or cost."], ["Can you target only the towns we serve?", "Campaign locations can be planned around actual service coverage. We review location settings and search terms to reduce spend outside the intended market where campaign controls allow."], ["Should we have a dedicated landing page?", "A focused page can help when it clearly matches the campaign, service, and location. We review the destination experience as part of planning." ]]
    },
    "digital-marketing-new-york": {
      region: "new-york", service: "Digital Marketing", image: "ny-digital-marketing.jpg", alt: "A Brooklyn small-business owner and marketing consultant discussing a connected digital growth plan", proof: "Connected digital growth for New York businesses",
      hero: "Digital marketing for New York businesses ready to grow with intention.", lead: "Connect your website, search visibility, campaigns, and lead follow-up around the customers and markets that matter.",
      introTitle: "A coordinated digital plan for a competitive market.", intro: "New York businesses work across distinct neighborhoods, boroughs, and customer expectations. We start with the real service area and business objective, then align website experience, SEO, paid campaigns, social content, and measurement to create a clearer path from discovery to inquiry.",
      cards: [["Understand the market", "Clarify audience, offer, competitors, neighborhood coverage, and the decision customers face."], ["Improve the experience", "Connect message, website pages, proof, and calls to action so the next step is clear."], ["Coordinate discovery", "Bring organic search, paid media, social, and local information into one intentional plan."], ["Measure what matters", "Use qualified calls, forms, bookings, and campaign signals to guide adjustments."]],
      systemTitle: "Connect the channels that support your next move.", systemIntro: "The right combination depends on your goals, internal capacity, and where customers actually come from.",
      offerings: [["Strategy & messaging", "Audience priorities, differentiation, channel roles, and a practical roadmap."], ["Web design & landing pages", "Responsive experiences that make services, neighborhood relevance, and action clear."], ["SEO & local visibility", "Useful pages and accurate business information that support relevant discovery."], ["Google Ads & follow-up", "Campaign structure, lead tracking, and response paths aligned to real capacity."]],
      showcaseTitle: "New York is not one market—and your targeting should not be either.", showcaseText: "A business serving Brooklyn may have a different customer journey from one reaching Manhattan, Queens, Staten Island, Long Island, or communities elsewhere in New York. We shape content and campaigns around the places you genuinely serve, without implying a local office where one does not exist.", showcaseImage: "assets/industry-concepts/business-neighborhood-hero-v1.jpg", showcaseAlt: "Small independent business in a lively New York neighborhood", tags: ["Market-specific planning", "Connected channels", "Lead clarity", "Measurable activity"],
      faq: [["Do you have a physical office in New York?", "VNW Media is based in Morganville, New Jersey, and works with New York businesses through a collaborative remote-first process. We do not represent the location pages as New York offices."], ["Can you work with a business serving multiple boroughs?", "Yes. We can plan service-area coverage, content, and campaign targeting around the places the business truly serves and can support."], ["Which digital marketing services can be combined?", "Depending on the goal, a plan can connect website design, SEO, Google Ads, social media, landing pages, analytics, and lead follow-up."], ["How do you measure marketing across New York?", "We agree on practical measures such as qualified inquiries, calls, booked appointments, campaign spend, and relevant visibility. Reporting depends on the tracking available."], ["Do you guarantee rankings or leads?", "No. Results depend on competition, budget, offer, implementation, and customer experience. We use clear measures and ongoing learning, not guaranteed outcomes." ]]
    },
    "seo-new-york": {
      region: "new-york", service: "SEO", image: "ny-seo.jpg", alt: "A New York business owner and SEO specialist reviewing a map-based visibility report and organic search charts", proof: "Search visibility that reflects your actual market",
      hero: "SEO for New York businesses that need useful visibility—not empty traffic.", lead: "Technical SEO, local relevance, service content, and measurement built around the searches your customers use.",
      introTitle: "Make your expertise clear across the places you serve.", intro: "In a dense and varied search market, SEO needs to distinguish your services and coverage clearly. We review technical foundations, page intent, local information, useful content, and internal links to support discovery and qualified action.",
      cards: [["Strengthen technical foundations", "Review crawlability, indexation, mobile usability, structure, and page performance."], ["Clarify local relevance", "Make service and location information accurate for the neighborhoods and communities you serve."], ["Answer customer questions", "Improve pages and FAQs around the decisions people make before contacting a provider."], ["Measure quality, not just visits", "Connect relevant search visibility to tracked inquiries and meaningful customer actions."]],
      systemTitle: "A strong SEO plan is built page by page.", systemIntro: "Clear technical signals, purposeful content, and trustworthy business information reinforce each other.",
      offerings: [["Search demand research", "Prioritize queries, services, and location needs that make sense for the business."], ["Technical SEO", "Investigate indexing, structure, redirects, performance, and other site-health factors."], ["Local SEO", "Improve business facts, service areas, and location content without overstating coverage."], ["Content & measurement", "Plan useful service pages and monitor visibility with business outcomes where trackable."]],
      showcaseTitle: "Build New York location relevance without pretending every neighborhood is an office.", showcaseText: "A page should help customers understand whether you serve them and what to expect. We map useful content to real operations—whether your business serves one borough, several neighborhoods, or a wider part of New York—and avoid repetitive pages made only to insert place names.", showcaseImage: "assets/service-heroes/seo-performance-review-v1.jpg", showcaseAlt: "SEO consultant analyzing organic traffic and search performance", tags: ["Technical SEO", "Local coverage", "Helpful content", "Business outcomes"],
      faq: [["Can you do SEO for New York City and multiple boroughs?", "We can plan relevant service and location coverage for the areas your business genuinely serves. The page plan depends on distinct services, operations, and customer needs."], ["Do location pages guarantee visibility in each borough?", "No. Creating a page does not guarantee rankings or local results. Useful content, technical foundations, competition, business signals, and ongoing quality all matter."], ["How long before SEO improves?", "Timing varies by starting condition, competition, search demand, resources, and implementation. We can prioritize technical fixes and page work but do not promise a fixed timeline."], ["Can you work with our current website team?", "Yes. We can provide audits, priorities, content direction, and implementation guidance, or coordinate tasks according to the agreed project scope."], ["Can you combine SEO with Google Ads?", "Yes. Search pages and paid campaigns can support one another when they share a clear offer, accurate location context, and useful measurement." ]]
    },
    "web-design-new-york": {
      region: "new-york", service: "Web Design", image: "ny-web-design.jpg", alt: "A New York web designer presenting a website concept to a small-business owner in a Brooklyn studio", proof: "Web experiences for the way New Yorkers choose",
      hero: "Web design for New York businesses that want every visit to feel clearer.", lead: "Present your services with confidence, make the experience work on mobile, and help the right customer take the next step.",
      introTitle: "Make a crowded choice feel simple.", intro: "A website can help a New York customer quickly understand what you offer, where you operate, what makes you credible, and how to begin. We design content and page flow around those decisions—not just a visual refresh.",
      cards: [["Show what makes you different", "Clarify services, audience, expertise, and reasons customers choose you."], ["Design for mobile behavior", "Keep important information and actions accessible on the devices people use every day."], ["Earn confidence", "Use real proof, useful content, reviews, and clear expectations to reduce uncertainty."], ["Support the next action", "Connect calls, forms, bookings, and analytics to the actual business process."]],
      systemTitle: "A website system designed for discovery and action.", systemIntro: "Page structure and features follow your business model, content, systems, and customer journey.",
      offerings: [["Discovery & structure", "Goals, audiences, sitemap, page purposes, and content hierarchy."], ["Design & development", "A distinctive responsive visual system and tested website implementation."], ["Content & conversion", "Clear service content, calls to action, and useful trust signals."], ["Technical launch", "SEO foundations, integrations, redirects where needed, quality checks, and launch support."]],
      showcaseTitle: "One website should serve the right customers—not every audience at once.", showcaseText: "A Brooklyn retailer, a Manhattan professional service, and a company serving several boroughs need different paths to contact and conversion. We plan relevant service and location information around your operations and give visitors a direct way to understand fit.", showcaseImage: "assets/service-heroes/web-design-customer-engagement-v1.jpg", showcaseAlt: "Designer and client discussing a website experience together", tags: ["Distinctive design", "Mobile usability", "Trust & proof", "Clear conversion"],
      faq: [["How much does web design cost in New York?", "Project cost depends on page count, content, design requirements, integrations, functionality, migration, and support. We clarify scope before providing a proposal."], ["Can the site serve multiple boroughs or regions?", "Yes. We can organize service and location information for areas you truly serve, while keeping page content distinct and useful."], ["Will you work with our existing branding and platform?", "We can assess your current brand, CMS, and integrations and recommend what to retain, improve, or replace based on the project goals."], ["Can you help us improve our existing site instead of rebuilding?", "Yes. Sometimes improving key pages, navigation, mobile usability, or lead flow is the better first step. We can review and recommend a practical scope."], ["How long does a website project take?", "Timing depends on complexity, content, approvals, integrations, and feedback cycles. The project plan sets milestones and responsibilities." ]]
    },
    "ppc-new-york": {
      region: "new-york", service: "Google PPC", image: "ny-ppc.jpg", alt: "A New York search-marketing consultant and local business owner reviewing paid campaign results", proof: "Campaigns aligned to real New York service areas",
      hero: "Google Ads management for New York businesses focused on better-fit leads.", lead: "Connect search intent, campaign geography, landing pages, budgets, and measurement around the leads your team can serve.",
      introTitle: "Paid search works best when every step agrees.", intro: "Campaign results depend on more than bids. We align keywords, locations, ad promise, landing page, calls or forms, and lead follow-up so each part supports a meaningful business action.",
      cards: [["Prioritize high-intent searches", "Separate relevant service demand from broad or low-fit traffic."], ["Set sensible geography", "Shape campaigns around the actual neighborhoods and service areas your team can support."], ["Match the page to the ad", "Align the landing page with the search, offer, location, and next action."], ["Optimize with useful signals", "Review spending, search terms, and lead quality alongside available conversion data."]],
      systemTitle: "Build campaigns with clear controls and useful feedback.", systemIntro: "Planning balances opportunity, budget, competition, and operational capacity—then uses measurement to inform refinements.",
      offerings: [["Account assessment", "Review structure, targeting, conversion setup, search terms, and opportunities."], ["Campaign strategy", "Plan search themes, geographic coverage, budget, and ad direction."], ["Landing-page alignment", "Connect each ad to a focused page with matching information and action."], ["Measurement & improvement", "Check tracking, lead quality, and campaign performance against agreed priorities."]],
      showcaseTitle: "Target the New York areas you can actually support.", showcaseText: "The right campaign boundaries depend on service coverage, location, scheduling, customer value, and available budget. We plan with those realities in mind and review location settings and search terms to keep the effort relevant.", showcaseImage: "assets/service-heroes/google-ppc-v2.jpg", showcaseAlt: "Search campaign manager reviewing paid advertising performance", tags: ["Search intent", "Location controls", "Landing pages", "Lead quality"],
      faq: [["Do you manage Google Ads for businesses in New York?", "Yes. We can plan and manage Google Ads for New York businesses, including account review, campaign setup, optimization, and reporting as defined in the project scope."], ["Can you target specific boroughs or neighborhoods?", "Campaign geography can be configured around the business’s actual coverage. We confirm the intended area and review settings so the targeting fits operational capacity."], ["How much does Google Ads cost?", "Ad budget varies with services, competition, geography, and lead economics. Media spend is separate from management fees; we help define a responsible test budget based on the opportunity."], ["Can you promise a certain cost per lead?", "No. Auction dynamics, competition, offer, page experience, and follow-up influence cost and volume. We establish tracking and optimize against agreed measures without guaranteeing a specific outcome."], ["Do we need a separate page for every borough?", "Not automatically. A page is useful when it serves a distinct customer need and can provide genuinely relevant information. We avoid thin or repetitive location pages." ]]
    }
  };

  const locationAreas = {
    "monmouth-county": {
      slug: "monmouth-county", region: "new-jersey", stateName: "New Jersey", name: "Monmouth County",
      places: "Communities across Monmouth County, including Middletown Township, Morganville, Freehold, and Red Bank, where your business actually operates",
      context: "VNW Media is based in Morganville, New Jersey. For Monmouth County businesses, we shape recommendations around the communities they serve, customer needs, and the team's capacity—not a copied countywide template.",
      summary: "A countywide starting point for businesses that need clear service-area messaging, useful search visibility, and a website experience built around the customers they can serve.",
      image: "nj-digital-marketing.jpg"
    },
    "middletown": {
      slug: "middletown", region: "new-jersey", stateName: "New Jersey", name: "Middletown, NJ",
      places: "Middletown Township and nearby Monmouth County communities",
      context: "VNW Media is based in Morganville, New Jersey. For a business serving Middletown Township, the right digital plan reflects its actual travel radius, customer journey, and the services it is ready to deliver.",
      summary: "Focused digital support for Middletown-area businesses, from clearer service pages and local search signals to paid campaigns tied to practical coverage.",
      image: "nj-digital-marketing.jpg"
    },
    "morganville": {
      slug: "morganville", region: "new-jersey", stateName: "New Jersey", name: "Morganville, NJ",
      places: "Morganville, Marlboro Township, and nearby Monmouth County communities where your business provides service",
      context: "VNW Media is based in Morganville, New Jersey. We understand that nearby businesses can serve very different customers, so we align page content, search priorities, and campaign geography with each company's actual footprint.",
      summary: "A practical digital growth starting point for Morganville businesses, grounded in accurate local information and the next action customers should take.",
      image: "nj-digital-marketing.jpg"
    },
    "manhattan": {
      slug: "manhattan", region: "new-york", stateName: "New York", name: "Manhattan, NY", county: "New York County", separateGoogleAds: true,
      places: "Midtown, Lower Manhattan, the Upper East Side, Harlem, and other Manhattan neighborhoods where your business genuinely operates",
      context: "Manhattan is New York County, but its customers do not all search or decide the same way. We plan around your actual neighborhood coverage, whether you serve residents, commuters, visitors, or business buyers, and the inquiry your team can handle.",
      summary: "Digital marketing for Manhattan businesses, shaped around distinct neighborhoods, clear service information, and a useful path from discovery to inquiry.",
      image: "ny-digital-marketing.jpg",
      serviceNotes: {
        "digital-marketing": "A Midtown professional service and a neighborhood practice may need different messages, channels, and calls to action even within Manhattan.",
        seo: "Search pages should distinguish the services and neighborhoods you truly cover instead of treating all Manhattan searches as one audience.",
        "web-design": "A clear mobile path to services, proof, and booking or consultation helps busy visitors compare options quickly.",
        ppc: "Dense competition makes budget boundaries, search-term review, and lead quality especially important to paid-search planning.",
        "google-ads": "Campaign settings can separate resident, commuter, and office-focused demand where that distinction matches your offer and coverage."
      }
    },
    "brooklyn": {
      slug: "brooklyn", region: "new-york", stateName: "New York", name: "Brooklyn, NY", county: "Kings County", separateGoogleAds: true,
      places: "Brooklyn neighborhoods such as Downtown Brooklyn, Williamsburg, Bay Ridge, and nearby New York communities where your business operates",
      context: "Brooklyn is Kings County. VNW Media works with New York businesses through a collaborative, remote-first process. For Brooklyn, we plan around neighborhood-level customer expectations and the areas a business can genuinely serve—not broad borough claims.",
      summary: "Digital marketing, SEO, web design, and paid search for Brooklyn businesses, planned around neighborhood relevance and real operational coverage.",
      image: "ny-digital-marketing.jpg",
      serviceNotes: {
        "digital-marketing": "A business drawing customers from Bay Ridge may need a different mix of channels and local proof than one focused on Downtown Brooklyn.",
        seo: "Service and location content should explain real neighborhood coverage and help customers understand when a Brooklyn business is the right fit.",
        "web-design": "Useful neighborhood context, accessible mobile navigation, and obvious calls to action can make a Brooklyn site easier to choose from.",
        ppc: "Paid-search plans can compare demand across the neighborhoods you serve without assuming the whole borough is equally valuable.",
        "google-ads": "Google Ads location settings and search-term reviews should support the specific Brooklyn neighborhoods your team can reach."
      }
    },
    "queens": {
      slug: "queens", region: "new-york", stateName: "New York", name: "Queens, NY", county: "Queens County", separateGoogleAds: true,
      places: "Astoria, Long Island City, Flushing, Jamaica, Forest Hills, and other Queens neighborhoods where your business operates",
      context: "Queens is Queens County and includes very different commercial and residential neighborhoods. We define the audience, service footprint, and most useful next step before recommending borough-wide messaging or targeting.",
      summary: "Digital marketing for Queens businesses that need useful neighborhood context, responsive web experiences, and search or ad coverage tied to real operations.",
      image: "ny-digital-marketing.jpg",
      serviceNotes: {
        "digital-marketing": "A Queens plan can prioritize nearby customers, destination visitors, or business buyers according to the offer rather than treating the borough as one market.",
        seo: "Location information for Astoria, Flushing, Jamaica, or another service area should appear only when your business has useful, distinct information for that audience.",
        "web-design": "Service pages should make the business's actual Queens coverage, contact options, and any relevant language support easy to understand.",
        ppc: "Campaign budgets can be concentrated around the Queens communities that match service capacity instead of spreading evenly across the borough.",
        "google-ads": "Google Ads can test relevant service searches and location settings for the Queens neighborhoods your team can genuinely support."
      }
    },
    "bronx": {
      slug: "bronx", region: "new-york", stateName: "New York", name: "the Bronx, NY", displayName: "The Bronx, NY", county: "Bronx County", separateGoogleAds: true,
      places: "Fordham, Riverdale, Pelham Bay, the South Bronx, and other Bronx neighborhoods where your business operates",
      context: "The Bronx is Bronx County. A useful local plan reflects the services you offer, the neighborhoods you can reach, and the questions customers ask before contacting you; it does not assume one borough-wide customer journey.",
      summary: "Digital marketing for Bronx businesses, with clear service pages, local search context, and campaigns planned around genuine neighborhood coverage.",
      image: "ny-digital-marketing.jpg",
      serviceNotes: {
        "digital-marketing": "We map the first useful customer action—call, booking, visit, or estimate—before deciding which channels belong in a Bronx plan.",
        seo: "Relevant pages can explain service availability across Fordham, Riverdale, Pelham Bay, or other areas without publishing duplicate neighborhood copy.",
        "web-design": "A Bronx website should make service fit, practical coverage, trust details, and the next contact step obvious on a phone.",
        ppc: "PPC geography should reflect the Bronx neighborhoods and nearby routes your business can actually serve, along with the value of each inquiry.",
        "google-ads": "Google Ads search terms, location controls, and landing pages can be reviewed against the Bronx services and areas you really support."
      }
    },
    "staten-island": {
      slug: "staten-island", region: "new-york", stateName: "New York", name: "Staten Island, NY", county: "Richmond County", separateGoogleAds: true,
      places: "St. George, New Dorp, Great Kills, Tottenville, and other Staten Island neighborhoods where your business operates",
      context: "Staten Island is Richmond County. We plan around where a business can provide service, how customers compare local options, and whether the next step is a call, appointment, visit, or estimate.",
      summary: "Digital marketing for Staten Island businesses, connecting useful local information, search visibility, website clarity, and measurable inquiries.",
      image: "ny-digital-marketing.jpg",
      serviceNotes: {
        "digital-marketing": "The channel plan should reflect whether you serve one neighborhood, the full island, or customers beyond it—and what your team can fulfill.",
        seo: "Service-area pages and business details should distinguish real Staten Island coverage from broad claims that do not help a customer choose.",
        "web-design": "A practical site can put service coverage, hours, trust signals, and phone or appointment actions within easy reach for island customers.",
        ppc: "Paid-search targeting should follow actual travel and service boundaries, not assume every Staten Island inquiry has the same value.",
        "google-ads": "Google Ads campaign settings can focus on the island's relevant service demand while tracking calls and forms your team can follow up."
      }
    },
    "sheepshead-bay": {
      slug: "sheepshead-bay", region: "new-york", stateName: "New York", name: "Sheepshead Bay, Brooklyn",
      places: "Sheepshead Bay and nearby South Brooklyn neighborhoods, including Brighton Beach and Manhattan Beach, where your business actually operates",
      context: "VNW Media partners with New York businesses remotely and collaboratively. For Sheepshead Bay, we keep location messaging specific to the services, customers, and South Brooklyn coverage a business can support.",
      summary: "A focused starting point for businesses serving Sheepshead Bay and South Brooklyn, with useful local information instead of generic neighborhood-name repetition.",
      image: "ny-digital-marketing.jpg"
    }
  };

  const areaServiceLinks = [
    ["digital-marketing", "Digital Marketing", "Connect your website, search, campaigns, and follow-up around a specific business goal."],
    ["seo", "SEO", "Build useful local relevance, healthy technical foundations, and service content customers can act on."],
    ["web-design", "Web Design", "Make services, neighborhood coverage, trust signals, and next steps clearer on every screen."],
    ["ppc", "PPC / Google Ads", "Plan paid search around the right intent, actual coverage, landing pages, and lead quality."]
  ];
  const googleAdsLink = ["google-ads", "Google Ads", "Manage Google Search campaigns with relevant terms, location controls, landing pages, and measurable inquiries."];
  const servicesForArea = area => area.separateGoogleAds
    ? [...areaServiceLinks.slice(0, -1), ["ppc", "PPC", "Plan pay-per-click strategy around intent, budgets, landing pages, and lead quality."], googleAdsLink]
    : areaServiceLinks;

  function localizedAreaPage(area, serviceKey) {
    const base = pages[`${serviceKey === "google-ads" ? "ppc" : serviceKey}-${area.region}`];
    if (!base) return null;
    const service = serviceKey === "ppc" ? "PPC" : serviceKey === "google-ads" ? "Google Ads" : base.service;
    const market = area.name;
    const data = {...base, region: `${area.region}-${area.slug}`, service};
    const localFocus = {
      "digital-marketing": {
        hero: `Digital marketing for businesses serving ${market}, built around the next customer conversation.`,
        lead: `Bring your website, search visibility, paid campaigns, and lead follow-up together around the customers and communities your business can serve in ${market}.`,
        introTitle: `A connected digital plan for ${market}.`,
        intro: `Businesses in ${market} do not need a disconnected list of tactics. We start with the offer, customer journey, service footprint, and strongest next action, then coordinate the website, SEO, paid media, social, and follow-up that fit.`,
        showcaseTitle: `Make each channel useful to customers in ${market}.`,
        showcaseText: `A business serving ${market} may rely on calls, appointments, store visits, or estimate requests. We shape the digital plan around those actions and the nearby communities your team can genuinely support, then measure what happens after discovery.`
      },
      seo: {
        hero: `Local SEO for businesses serving ${market}.`,
        lead: `Connect technical site health, useful service content, and accurate location signals to the searches that matter to your business.`,
        introTitle: `Build search visibility around real service coverage in ${market}.`,
        intro: `Effective local SEO helps customers and search engines understand what you offer, where you operate, and why a page is useful. We assess technical foundations, local business information, service pages, internal links, and customer questions before recommending work.`,
        showcaseTitle: `Local search should reflect how your business serves ${market}.`,
        showcaseText: `A storefront, appointment-based practice, and mobile service company each need different location signals. We align pages and business information with your actual ${market} coverage, avoid thin duplicate location copy, and track meaningful actions alongside search visibility.`
      },
      "web-design": {
        hero: `Web design for businesses serving ${market}, ready for a clearer customer experience.`,
        lead: `Give visitors a responsive website that explains your services, supports local discovery, and makes the right next step easy.`,
        introTitle: `A better website starts with customers in ${market}.`,
        intro: `People may arrive from a local search, recommendation, or campaign. The site should help them quickly understand your offer, service area, proof, and next action. We plan structure, content, mobile experience, SEO foundations, and conversion paths around those decisions.`,
        showcaseTitle: `Design around how customers in ${market} choose.`,
        showcaseText: `A strong local website is not a city-name swap. We organize the customer journey, service details, trust signals, and calls to action around your business model and the communities you actually serve in and around ${market}, with responsive layouts and launch checks built into the project.`
      },
      ppc: {
        hero: `${area.separateGoogleAds ? "PPC management" : "PPC and Google Ads"} for businesses serving ${market}.`,
        lead: `Connect search intent, campaign geography, landing pages, budgets, and measurement around the inquiries your team is ready to handle.`,
        introTitle: `Paid search for demand your business can serve in ${market}.`,
        intro: `Useful PPC management is more than launching ads. We align keyword intent, geographic settings, ad messaging, landing pages, tracking, and lead follow-up with your offer, budget, and operational capacity.`,
        showcaseTitle: `Keep campaign targeting in ${market} tied to real coverage.`,
        showcaseText: `We plan campaign boundaries around where your business can deliver, not an arbitrary list of nearby place names. Search terms, landing-page relevance, budget, scheduling, and the quality of inquiries all inform ongoing optimization.`
      },
      "google-ads": {
        hero: `Google Ads management for businesses serving ${market}.`,
        lead: `Reach relevant searchers with campaigns aligned to your services, operating area, landing pages, and lead capacity.`,
        introTitle: `Build Google Ads campaigns around useful demand in ${market}.`,
        intro: `Google Ads work starts with account and conversion review, service intent, geographic settings, budget boundaries, and the page a searcher will reach. We then monitor search terms, ad relevance, and qualified inquiries to guide improvements.`,
        showcaseTitle: `Keep Google Ads focused on the service area you can support in ${market}.`,
        showcaseText: `Campaigns can be organized by service and intent rather than sending every click to a generic page. We review the actual locations you serve, the ad-to-page message, and tracked calls or forms before expanding coverage or spend.`
      }
    }[serviceKey];
    const localizedFaqQuestion = {
      "digital-marketing": `What can digital marketing include for a business in ${market}?`,
      seo: `How can SEO support a business serving ${market}?`,
      "web-design": `What affects the scope of a website project in ${market}?`,
      ppc: area.separateGoogleAds ? `How do you plan PPC for a business serving ${market}?` : `How do you target Google Ads for a business serving ${market}?`,
      "google-ads": `What goes into a Google Ads campaign for a business serving ${market}?`
    }[serviceKey];
    const localizedFaqAnswer = {
      "digital-marketing": `Depending on the goal, a plan can connect website strategy, SEO, paid media, social, landing pages, analytics, and lead follow-up. We recommend only the channels that fit the business and the customers it can serve in ${market}.`,
      seo: `SEO can connect technical site health, useful service content, accurate business information, and relevant local pages. We first understand the services and communities the business genuinely serves in ${market}, then prioritize work around customer needs and measurable progress.`,
      "web-design": `Scope depends on the site's size, content, design needs, functionality, integrations, and launch support. We clarify the customer journey and the places the business serves in ${market} before recommending a practical project scope.`,
      ppc: `Campaign planning can include search intent, geographic settings, ad messaging, landing pages, conversion tracking, and optimization. We align targeting with the areas the business can genuinely serve in ${market}; ad spend and management scope are discussed before launch.`,
      "google-ads": `We review account structure, search terms, geographic settings, ad messaging, landing pages, and conversion measurement. The initial campaign scope depends on the services and parts of ${market} your business can actually serve.`
    }[serviceKey];
    data.hero = localFocus.hero;
    data.lead = localFocus.lead;
    data.introTitle = localFocus.introTitle;
    data.intro = `${localFocus.intro}${area.serviceNotes?.[serviceKey] ? ` ${area.serviceNotes[serviceKey]}` : ""}`;
    data.showcaseTitle = localFocus.showcaseTitle;
    data.showcaseText = localFocus.showcaseText;
    data.alt = `${service} planning for a business serving ${market}`;
    if (serviceKey === "google-ads") {
      data.cards = [["Review search intent", "Separate high-fit service searches from broad terms and check where ads should appear."], ["Set campaign boundaries", "Align location options, budget, schedule, and campaign structure with your operating area."], ["Connect ads to useful pages", "Match ad messaging to clear services, proof, and a practical call or form action."], ["Measure and improve", "Use search terms, conversions, and lead feedback to refine the campaign without promising a fixed result."]];
      data.offerings = [["Account and conversion review", "Assess existing campaigns, measurement, and the quality of available lead signals."], ["Google Search campaign plan", "Organize service themes, location settings, budget guardrails, and ad messaging."], ["Landing-page alignment", "Connect each ad group to a page that answers the search and makes the next step clear."], ["Ongoing optimization", "Review queries, spend, ad relevance, and qualified inquiries against agreed priorities."]];
      data.tags = ["Google Search", "Location settings", "Landing pages", "Conversion review"];
    }
    data.faq = [
      [localizedFaqQuestion, localizedFaqAnswer],
      [`Do you work with businesses in ${market}?`, `Yes. VNW Media can work with businesses serving ${market}. The project is planned collaboratively, and location coverage is confirmed against the business's actual operations and goals.`],
      [`Can campaigns or pages include nearby communities?`, `They can when those places match your real service footprint and the page or campaign provides useful information. ${area.places}.`],
      [`Can I begin with only ${service}?`, `Yes. You can start with this priority and consider connected services only when they support the same business goal and are useful for your team.`],
      [`Do you guarantee ${serviceKey === "seo" ? "rankings" : "leads or a specific result"}?`, `No. Outcomes depend on competition, budget, implementation, offer, customer experience, and other factors. We define practical measures and use available data to guide improvements without promising a fixed result.`]
    ];
    return {data, facts: {...area, state: market, market}};
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }
  function heroFormMarkup(data, facts) {
    const interest = `${data.service} in ${facts.market || facts.state}`;
    return `<form class="hero-form indl-hero-form location-hero-form" aria-label="Plan your ${escapeHtml(interest)} strategy">
      <h2>Plan your ${escapeHtml(data.service)} growth strategy</h2>
      <label class="icon-field"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg><input name="name" autocomplete="name" required placeholder="Full Name" aria-label="Full Name" /></label>
      <label class="icon-field"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 10h18"/><path d="M5 10V7l7-4 7 4v3"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg><input name="company" autocomplete="organization" required placeholder="Business Name" aria-label="Business Name" /></label>
      <label class="icon-field"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg><input name="phone" type="tel" autocomplete="tel" required placeholder="Phone Number" aria-label="Phone Number" /></label>
      <label class="icon-field"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><input name="email" type="email" autocomplete="email" required placeholder="Email Address" aria-label="Email Address" /></label>
      <label class="icon-field"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg><input name="website" type="url" autocomplete="url" placeholder="Website (Optional)" aria-label="Website (Optional)" /></label>
      <input type="hidden" name="interest" value="${escapeHtml(interest)}" />
      <button type="submit">Plan my next step</button><p class="form-status" role="status" aria-live="polite"></p>
    </form>`;
  }
  function cardMarkup(items, className = "indl-card-grid") {
    return `<div class="${className}">${items.map((item, i) => `<article><span>0${i + 1}</span><h3>${escapeHtml(item[0])}</h3><p>${escapeHtml(item[1])}</p></article>`).join("")}</div>`;
  }
  function websiteBlueprintMarkup(data, facts) {
    const stages = {
      "Digital Marketing": ["Strategy", "Experience", "Visibility", "Follow-up"],
      SEO: ["Research", "Technical", "Content", "Measurement"],
      "Web Design": ["Structure", "Design", "Content", "Launch"],
      "Google PPC": ["Targeting", "Campaign", "Landing page", "Tracking"],
      PPC: ["Targeting", "Campaign", "Landing page", "Tracking"],
      "Google Ads": ["Intent", "Campaign", "Landing page", "Measurement"]
    }[data.service] || ["Structure", "Design", "Content", "Launch"];
    const id = `blueprint-${data.region}-${data.service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    const labels = stages.map((stage, index) => `<text class="location-blueprint-callout-label" x="${index % 2 === 0 ? 9 : 580}" y="${index < 2 ? 101 : 366}">0${index + 1} · ${escapeHtml(stage.toUpperCase())}</text>`).join("");
    const steps = data.offerings.map((item, index) => `<article><span class="location-blueprint-step-no">0${index + 1}</span><div><h3>${escapeHtml(item[0])}</h3><p>${escapeHtml(item[1])}</p></div></article>`).join("");
    return `<div class="location-blueprint-layout">
      <figure class="location-blueprint-visual">
        <div class="location-blueprint-scroll" role="region" tabindex="0" aria-label="${escapeHtml(data.service)} website blueprint for ${facts.state}">
          <svg viewBox="0 0 700 455" role="img" aria-labelledby="${id}-title ${id}-desc">
            <title id="${id}-title">${escapeHtml(data.service)} website blueprint</title>
            <desc id="${id}-desc">A website wireframe surrounded by four connected stages: ${stages.map(escapeHtml).join(", ")}.</desc>
            <rect class="location-blueprint-browser-frame" x="100" y="48" width="500" height="350" rx="7"/><path class="location-blueprint-browser-bar" d="M107 55h486v31H107z"/><circle class="location-blueprint-browser-dot" cx="124" cy="70" r="4"/><circle class="location-blueprint-browser-dot" cx="139" cy="70" r="4"/><circle class="location-blueprint-browser-dot" cx="154" cy="70" r="4"/><rect class="location-blueprint-screen-panel" x="119" y="101" width="462" height="275"/>
            <rect class="location-blueprint-screen-dark" x="119" y="101" width="462" height="94"/><rect class="location-blueprint-screen-line" x="140" y="118" width="54" height="5" rx="2"/><rect class="location-blueprint-screen-line" x="433" y="118" width="32" height="4" rx="2"/><rect class="location-blueprint-screen-line" x="474" y="118" width="37" height="4" rx="2"/><rect class="location-blueprint-screen-line" x="519" y="118" width="42" height="4" rx="2"/>
            <text class="location-blueprint-screen-label" x="140" y="147">A CLEAR SERVICE STORY</text><rect class="location-blueprint-screen-gray" x="140" y="160" width="226" height="6" rx="3"/><rect class="location-blueprint-screen-gray" x="140" y="174" width="180" height="5" rx="2"/><rect class="location-blueprint-screen-blue" x="388" y="144" width="168" height="37" rx="3"/>
            <rect class="location-blueprint-screen-gray" x="140" y="215" width="150" height="8" rx="3"/><rect class="location-blueprint-screen-line" x="140" y="235" width="186" height="5" rx="2"/><rect class="location-blueprint-screen-line" x="140" y="248" width="164" height="5" rx="2"/><rect class="location-blueprint-screen-line" x="140" y="261" width="176" height="5" rx="2"/>
            <rect class="location-blueprint-screen-blue" x="140" y="283" width="110" height="32" rx="3"/><rect class="location-blueprint-screen-gray" x="140" y="337" width="122" height="25" rx="2"/><rect class="location-blueprint-screen-gray" x="274" y="337" width="122" height="25" rx="2"/><rect class="location-blueprint-screen-gray" x="408" y="337" width="148" height="25" rx="2"/>
            <path class="location-blueprint-callout-line" d="M31 113H78L119 138M669 113H625L557 160M31 345H78L140 299M669 345H625L581 348"/><circle class="location-blueprint-callout-dot" cx="119" cy="138" r="4"/><circle class="location-blueprint-callout-dot" cx="557" cy="160" r="4"/><circle class="location-blueprint-callout-dot" cx="140" cy="299" r="4"/><circle class="location-blueprint-callout-dot" cx="581" cy="348" r="4"/>
            ${labels}
            <text class="location-blueprint-screen-heading" x="140" y="229">A site visitors can use.</text><text class="location-blueprint-screen-small" x="140" y="277">Clear service paths · useful proof · easy next steps</text>
          </svg>
        </div>
      </figure>
      <div class="location-blueprint-list">${steps}</div>
    </div>`;
  }
  function channelJunctionMarkup(data, facts) {
    const plans = {
      "Digital Marketing": {
        sources: ["Organic search", "Paid search", "Social media", "Referrals"],
        experience: "Clear website experience",
        outcome: "Qualified inquiry",
        outcomeDetail: "A useful next step",
        description: "Organic search, paid search, social media, and referrals converge at a clear website experience, then lead to an inquiry and a learning loop."
      },
      SEO: {
        sources: ["Local search", "Technical SEO", "Service content", "Reviews & listings"],
        experience: "Useful service pages",
        outcome: "Qualified search inquiry",
        outcomeDetail: "Relevant discovery to action",
        description: "Local search, technical SEO, useful service content, and business listings support service pages that can turn relevant discovery into an inquiry."
      },
      "Web Design": {
        sources: ["Customer needs", "Clear structure", "Trust signals", "Conversion paths"],
        experience: "Responsive website",
        outcome: "Clear next action",
        outcomeDetail: "Call · form · booking",
        description: "Customer needs, clear page structure, trust signals, and conversion paths come together in a responsive website that makes the next action clear."
      },
      "Google PPC": {
        sources: ["Search intent", "Local targeting", "Ad messaging", "Lead tracking"],
        experience: "Relevant landing page",
        outcome: "Qualified ad inquiry",
        outcomeDetail: "Measure · learn · refine",
        description: "Search intent, local targeting, ad messaging, and lead tracking connect through a relevant landing page to a qualified inquiry and ongoing optimization."
      }
    };
    const plan = plans[data.service] || (["PPC", "Google Ads"].includes(data.service) ? plans["Google PPC"] : plans["Digital Marketing"]);
    const id = `junction-${data.region}-${data.service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    const sourceMarkup = plan.sources.map((source, index) => {
      const y = 83 + index * 66;
      const centerY = y + 24;
      return `<path class="junction-route" d="M 318 ${centerY} C 370 ${centerY} 388 211 438 211" marker-end="url(#${id}-arrow)"></path><rect class="junction-source-box" x="42" y="${y}" width="276" height="48" rx="3"></rect><circle class="junction-source-dot" cx="65" cy="${centerY}" r="4"></circle><text class="junction-source-label" x="82" y="${centerY + 4}">${escapeHtml(source)}</text>`;
    }).join("");
    const mapLabel = `${data.service} in ${facts.state}`;
    return `<figure class="location-junction">
      <div class="location-junction-scroll" role="region" tabindex="0" aria-label="${escapeHtml(mapLabel)} channel map">
        <svg class="location-junction-svg" viewBox="0 0 1220 410" role="img" aria-labelledby="${id}-title ${id}-description">
          <title id="${id}-title">${escapeHtml(mapLabel)} · channel junction</title>
          <desc id="${id}-description">${escapeHtml(plan.description)}</desc>
          <defs>
            <pattern id="${id}-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke="#e3ded6" stroke-width="1"></path></pattern>
            <marker id="${id}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#00aeef"></path></marker>
            <marker id="${id}-return-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#798487"></path></marker>
          </defs>
          <rect class="junction-board" x="10" y="10" width="1200" height="390" rx="4"></rect>
          <rect class="junction-grid" x="11" y="11" width="1198" height="388" rx="4" fill="url(#${id}-grid)" opacity=".58"></rect>
          <text class="junction-column-label" x="42" y="55">WAYS TO BE FOUND</text>
          <text class="junction-column-label" x="470" y="55">ONE USEFUL EXPERIENCE</text>
          <text class="junction-column-label" x="900" y="55">THE NEXT STEP</text>
          ${sourceMarkup}
          <circle class="junction-meet-point" cx="438" cy="211" r="6"></circle>
          <path class="junction-route junction-route-main" d="M 445 211 H 476" marker-end="url(#${id}-arrow)"></path>
          <rect class="junction-browser" x="478" y="112" width="334" height="196" rx="4"></rect>
          <path class="junction-browser-top" d="M 482 116 H 808 V 151 H 482 Z"></path>
          <circle class="junction-browser-dot" cx="500" cy="133" r="4"></circle><circle class="junction-browser-dot" cx="514" cy="133" r="4"></circle><circle class="junction-browser-dot" cx="528" cy="133" r="4"></circle>
          <path class="junction-browser-rule" d="M 548 133 H 600 M 726 133 H 748 M 757 133 H 780"></path>
          <text class="junction-site-kicker" x="502" y="181">BUILT AROUND THE CUSTOMER</text>
          <text class="junction-site-title" x="502" y="220">${escapeHtml(plan.experience)}</text>
          <text class="junction-site-detail" x="502" y="245">CLEAR OFFER · USEFUL PROOF · EASY ACTION</text>
          <rect class="junction-site-button" x="502" y="265" width="132" height="25" rx="12.5"></rect>
          <text class="junction-site-button-text" x="568" y="281" text-anchor="middle">Take the next step</text>
          <path class="junction-route junction-route-main" d="M 812 211 H 900" marker-end="url(#${id}-arrow)"></path>
          <rect class="junction-outcome-box" x="902" y="163" width="264" height="96" rx="3"></rect>
          <circle class="junction-outcome-dot" cx="928" cy="191" r="5"></circle>
          <text class="junction-outcome-kicker" x="945" y="194">A MEANINGFUL CONVERSION</text>
          <text class="junction-outcome-title" x="928" y="224">${escapeHtml(plan.outcome)}</text>
          <text class="junction-outcome-detail" x="928" y="244">${escapeHtml(plan.outcomeDetail)}</text>
          <path class="junction-route-return" d="M 1034 259 V 357 H 646 V 309" marker-end="url(#${id}-return-arrow)"></path>
          <rect class="junction-feedback-plate" x="744" y="341" width="197" height="30" rx="15"></rect>
          <text class="junction-feedback-label" x="842.5" y="360" text-anchor="middle">MEASURE · LEARN · REFINE</text>
        </svg>
      </div>
      <figcaption class="location-junction-hint">On smaller screens, scroll the map horizontally to follow the path.</figcaption>
    </figure>`;
  }
  function reviewMarkup() {
    return `<section class="testimonials testimonial-ticker-section section" id="reviews" data-nav-theme="dark">
      <div class="shell testimonial-ticker-shell">
        <div class="testimonial-ticker-heading reveal">
          <div><p class="section-tag">Client Feedback</p><h2>Trusted by the people behind growing businesses.</h2></div>
          <div class="testimonial-google-summary" aria-label="4.9 out of 5 stars on Google"><div><img src="${asset("assets/google-g-logo.png")}" alt="Google"><span>★★★★★</span></div><p><strong>4.9</strong> on Google</p></div>
        </div>
      </div>
      <div class="testimonial-ticker-viewport" data-testimonial-ticker aria-label="Google reviews and excerpts">
        <div class="testimonial-ticker-track">${reviews.map(([name, quote]) => `<article class="testimonial-ticker-card"><div class="testimonial-card-top"><span>Google review</span><span>★★★★★</span></div><blockquote>“${escapeHtml(quote)}”</blockquote><footer><strong>${escapeHtml(name)}</strong></footer></article>`).join("")}</div>
      </div>
      <div class="shell testimonial-ticker-footer">
        <a href="${reviewsUrl}" target="_blank" rel="noopener">Read all Google reviews <span>↗</span></a>
      </div>
    </section>`;
  }
  function commercialFaqs(data, market, isAreaPage) {
    // Keep additions specific to the service and avoid repeating an existing cost FAQ.
    switch (data.service) {
      case "SEO":
        return isAreaPage
          ? [[`How much does local SEO cost in ${market}?`, `Local SEO work depends on your real service footprint, business profile accuracy, location and service pages, reviews, and ongoing content needs. A focused plan for one location can be more affordable than a broad multi-location effort. We review what is already working before recommending the work that matters most.`]]
          : [[`How much does SEO cost in ${market}?`, `SEO scope depends on your website's condition, competition, service areas, content needs, and how much implementation support you need. We aim to keep the starting scope affordable by prioritizing the highest-impact technical or content work, then explain the recommended next phase before you commit.`]];
      case "Web Design":
        if (data.faq.some(([question]) => /^How much does (a business website|web design) cost/i.test(question))) return [];
        return [[`How much does a website cost in ${market}?`, `Website scope depends on page count, original design and content, functionality, integrations, migration, and launch support. Improving an existing site may be an affordable starting point compared with a complete rebuild. We review your goals and current site, then outline the work and investment before you decide.`]];
      case "Google PPC":
      case "PPC":
        return isAreaPage
          ? [[`How much does PPC management cost in ${market}?`, `Management scope depends on the number of campaigns and service areas, account condition, landing pages, conversion tracking, and the level of ongoing optimization needed. We can start with a focused campaign and aim for an affordable management scope after reviewing your goals and existing account. Ad spend is separate from management.`]]
          : [[`How much does Google Ads management cost in ${market}?`, `Google Ads management and the advertising budget are separate decisions. We explain the work involved in setup, search-term review, location targeting, ad testing, tracking, and reporting, then recommend a scope that fits your goals. Your ad budget depends on the market and competition; we do not publish a universal fee or promise a fixed cost per lead.`]];
      case "Google Ads":
        return [[`How much does Google Ads management cost in ${market}?`, `Management scope depends on account condition, service themes, campaign structure, location targeting, landing pages, conversion tracking, and ongoing review. Ad spend is separate. We can recommend an affordable first phase after reviewing your goals and explain the work before launch.`]];
      case "Digital Marketing":
        return [[`Can digital marketing start with an affordable scope in ${market}?`, `Yes. We can begin with one priority—such as improving a key website page, local search information, or a focused campaign—rather than launching every channel at once. We review your goals, existing assets, and available budget, then explain a practical first phase and what could follow.`]];
      default:
        return [];
    }
  }
  function pageMarkup(data, facts) {
    const market = facts.market || facts.state;
    const faq = [...data.faq, ...commercialFaqs(data, market, Boolean(facts.market))].map(([question, answer], i) => `<details${i === 0 ? " open" : ""}><summary>${escapeHtml(question)}<span aria-hidden="true">+</span></summary><p>${escapeHtml(answer)}</p></details>`).join("");
    const tags = data.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("");
    return `<main id="top" class="location-main">
      <section class="indl-hero location-hero" data-nav-theme="dark"><div class="indl-hero-media"><img src="${asset(`assets/location-heroes/${data.image}`)}" alt="${escapeHtml(data.alt)}" fetchpriority="high"></div><div class="indl-hero-shade"></div><div class="shell indl-hero-inner"><div class="indl-hero-copy"><p class="section-tag">${escapeHtml(data.service)} · ${escapeHtml(market)}</p><h1>${escapeHtml(data.hero)}</h1><p>${escapeHtml(data.lead)}</p><div class="indl-actions"><a class="pill pill-blue pill-large" href="${contact}">Discuss ${escapeHtml(data.service)} in ${escapeHtml(market)} <span>↗</span></a><a class="pill pill-outline pill-large" href="#local-approach">Explore the approach</a></div></div>${heroFormMarkup(data, facts)}</div></section>
      <section class="trust-strip indl-ticker location-ticker" aria-label="${escapeHtml(data.service)} focus areas"><div class="trust-track"><small>Built around your market</small><i></i><span>${escapeHtml(data.service)}</span><span>Customer experience</span><span>Search visibility</span><span>Local relevance</span><span>Qualified leads</span><span>Clear measurement</span><span>Practical next steps</span></div></section>
      <section class="indl-showcase mockup-direction-section location-showcase" data-nav-theme="light"><div class="shell indl-showcase-grid"><div class="indl-showcase-media"><img src="${asset(data.showcaseImage)}" alt="${escapeHtml(data.showcaseAlt)}" loading="lazy"></div><article class="indl-showcase-copy"><p class="section-tag">Local market context</p><h2>${escapeHtml(data.showcaseTitle)}</h2><p>${escapeHtml(data.showcaseText)}</p><div class="indl-tags">${tags}</div><a class="text-arrow" href="${contact}">Plan your next step <span>↗</span></a></article></div></section>
      <section class="indl-section industry-system-section location-system location-approach" id="local-approach" data-nav-theme="dark"><div class="shell"><div class="location-approach-head"><div class="location-approach-copy"><p class="section-tag">How the work fits together · One connected approach</p><h2>${escapeHtml(data.systemTitle)}</h2><p><strong>${escapeHtml(data.service)} for ${escapeHtml(market)}.</strong> ${escapeHtml(data.systemIntro)}</p><p>${escapeHtml(facts.context)}</p><a class="pill pill-blue location-approach-cta" href="${contact}">Discuss your project <span>↗</span></a></div></div>${websiteBlueprintMarkup(data, facts)}</div></section>
      <section class="indl-section location-overview decision-section" data-nav-theme="light"><div class="shell"><div class="indl-head"><p class="section-tag">${escapeHtml(data.service)} in ${escapeHtml(market)}</p><h2>${escapeHtml(data.introTitle)}</h2><p>${escapeHtml(data.intro)}</p><p class="location-area-note"><strong>Markets we can discuss</strong><br>${escapeHtml(facts.places)}. Coverage is confirmed against your actual service area.</p></div>${channelJunctionMarkup(data, facts)}${cardMarkup(data.cards, "location-junction-steps")}</div></section>
      ${reviewMarkup()}
      <section class="indl-faq location-faq" id="faq" data-nav-theme="light"><div class="shell indl-faq-grid"><div class="indl-faq-intro"><p class="section-tag">${escapeHtml(data.service)} in ${facts.state} · FAQs</p><h2>Useful answers before we begin.</h2><p>Every project depends on the business, market, and priorities. Here are a few common questions.</p><a class="pill pill-blue" href="${contact}">Ask about your project <span>↗</span></a></div><div class="indl-faq-list">${faq}</div></div></section>
    </main>`;
  }
  function directoryMarkup(regionOnly = "") {
    const states = Object.entries(areaFacts).filter(([slug]) => !regionOnly || slug === regionOnly);
    const stateCards = states.map(([slug, facts]) => {
      const childLinks = Object.entries(pages).filter(([, page]) => page.region === slug).map(([pageSlug, page]) => `<a class="location-service-link" aria-label="${escapeHtml(`${page.service} in ${facts.state}`)}" href="${asset(`locations/${slug}/${pageSlug}/`)}">${escapeHtml(page.service)}<span aria-hidden="true">↗</span></a>`).join("");
      const areaServiceGroups = Object.values(locationAreas).filter(area => area.region === slug).map(area => {
        const links = servicesForArea(area).map(([key, label]) => {
          const title = `${label} in ${area.name}`;
          const href = asset(`locations/${slug}/${area.slug}/${key}-${area.slug}/`);
          return `<a class="location-service-link" aria-label="${escapeHtml(title)}" href="${href}">${escapeHtml(label)}<span aria-hidden="true">↗</span></a>`;
        }).join("");
        return `<section class="location-area-page-group" aria-labelledby="${slug}-${area.slug}-heading"><h4 id="${slug}-${area.slug}-heading"><a href="${asset(`locations/${slug}/${area.slug}/`)}">${escapeHtml(area.displayName || area.name)}</a>${area.county ? ` <small>· ${escapeHtml(area.county)}</small>` : ""}</h4><div class="location-service-grid">${links}</div></section>`;
      }).join("");
      const stateCode = slug === "new-jersey" ? "NJ" : "NY";
      const imageName = slug === "new-jersey" ? "nj-digital-marketing.jpg" : "ny-digital-marketing.jpg";
      const imageAlt = slug === "new-jersey" ? "Business owners reviewing a website together" : "New York business team discussing a digital project";
      return `<article class="location-state-card" id="${slug}" aria-labelledby="${slug}-heading"><div class="location-state-image"><img src="${asset(`assets/location-heroes/${imageName}`)}" alt="${imageAlt}" loading="lazy"><span>${stateCode}<i> / 0${slug === "new-jersey" ? "1" : "2"}</i></span></div><div class="location-state-copy"><p class="section-tag">${facts.state} · Location guides</p><h2 id="${slug}-heading">Digital growth for ${facts.state} businesses.</h2><p>${escapeHtml(facts.context)}</p><div class="location-state-links"><section class="location-state-link-group" aria-labelledby="${slug}-statewide-heading"><h3 class="location-directory-group-title" id="${slug}-statewide-heading">Statewide services</h3><div class="location-service-grid">${childLinks}</div></section><section class="location-state-link-group location-directory-area-group" aria-labelledby="${slug}-areas-heading"><h3 class="location-directory-group-title" id="${slug}-areas-heading">Area services</h3><div class="location-area-groups">${areaServiceGroups}</div></section></div></div></article>`;
    }).join("");
    const faqs = [
      ["Which locations are covered by these pages?", "This directory includes service pages for New Jersey and New York. We confirm the relevant communities and coverage against where your business actually operates."],
      ["What services can I explore for each location?", "Explore statewide service pages or go directly to digital marketing, SEO, web design, and PPC pages grouped by selected New Jersey and New York communities. Dedicated Google Ads pages are also available for all five New York City boroughs."],
      ["Do I need to be based in New Jersey or New York to work with VNW Media?", "These pages focus on those two markets. If your business operates elsewhere, tell us where you work and what you need; we can discuss whether the project is a fit."],
      ["How do I choose between digital marketing, SEO, web design, and Google Ads?", "Start with the business goal and the point where customers are getting stuck. You can begin with one priority; a broader mix only makes sense when the pieces support that goal."],
      ["Can I start with an affordable project instead of every service?", "Yes. We can review your website and goals, identify the highest-priority opportunity, and propose a focused first phase. The scope and investment are explained before work begins; there is no need to commit to every channel at once."],
      ["Are the recommendations tailored to my actual service area?", "Yes. Market coverage is discussed in relation to your real service footprint, audience, capacity, and goals—not a copied list of nearby place names."]
    ];
    const faqMarkup = faqs.map(([question, answer], i) => `<details${i === 0 ? " open" : ""}><summary>${escapeHtml(question)}<span aria-hidden="true">+</span></summary><p>${escapeHtml(answer)}</p></details>`).join("");
    return `<main id="top" class="location-directory">
      <section class="inner-hero location-directory-hero" data-nav-theme="dark"><div class="inner-hero-bg" style="background-image:linear-gradient(90deg,rgba(8,8,8,.94),rgba(8,8,8,.68),rgba(8,8,8,.36)),url('${asset("assets/location-heroes/nj-digital-marketing.jpg")}')"></div><div class="shell inner-hero-copy reveal"><p class="eyebrow">Service areas · New Jersey &amp; New York</p><h1>Digital growth, grounded in the places you serve.</h1><p class="hero-lede">Explore focused digital marketing, web design, SEO, PPC, and Google Ads pages for New York City's five boroughs, alongside the New Jersey and New York service areas already here.</p><div class="hero-actions"><a class="pill pill-blue pill-large" href="#locations">Explore locations <span>↗</span></a><a class="pill pill-outline pill-large" href="${contact}">Talk with our team</a></div></div></section>
      <section class="trust-strip location-directory-ticker" data-nav-theme="dark" aria-label="VNW Media capabilities"><div class="trust-track"><small>Built to move businesses forward</small><i aria-hidden="true"></i><span>Web Design</span><span>SEO</span><span>Google Ads</span><span>Social Media</span><span>Brand Strategy</span><span>Content</span></div></section>
      <section class="location-directory-markets" id="locations"><div class="shell"><header class="location-directory-heading"><p class="section-tag">Choose your market</p><h2>Start with the area your business serves.</h2><p>Explore statewide services or go directly to the service page for a selected community. Local pages are grouped by area so you can find the right starting point without an extra step.</p></header><div class="location-state-grid">${stateCards}</div></div></section>
      ${reviewMarkup()}
      <section class="faq section location-directory-faq" id="faq" data-nav-theme="light"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">Locations FAQ</p><h2>Helpful answers for choosing a market and service.</h2><p>Learn how the location pages are organized and what to consider before deciding where to begin.</p><a class="pill pill-blue" href="${contact}">Ask about your market <span>↗</span></a></div><div class="faq-list reveal">${faqMarkup}</div></div></section>
    </main>`;
  }

  function areaDirectoryMarkup(area) {
    const services = servicesForArea(area).map(([key, label, description], index) => {
      const href = asset(`locations/${area.region}/${area.slug}/${key}-${area.slug}/`);
      const title = `${label} in ${area.name}`;
      const sourceKey = key === "google-ads" ? "ppc" : key;
      const source = pages[`${sourceKey}-${area.region}`];
      const image = source?.showcaseImage || `assets/location-heroes/${source?.image || area.image}`;
      const imageAlt = source?.showcaseAlt || source?.alt || `${label} planning for ${area.name} businesses`;
      const stateCode = area.region === "new-jersey" ? "NJ" : "NY";
      return `<article class="location-state-card location-area-service-card"><div class="location-state-image"><img src="${asset(image)}" alt="${escapeHtml(imageAlt)}" loading="lazy"><span>${stateCode}<i> / 0${index + 1}</i></span></div><div class="location-state-copy"><p class="section-tag">${escapeHtml(area.name)} · ${escapeHtml(label)}</p><h2><a href="${href}">${escapeHtml(title)}</a></h2><p>${escapeHtml(description)}</p><div class="location-state-links"><a href="${href}">Explore ${escapeHtml(label)} in ${escapeHtml(area.name)}<span aria-hidden="true">↗</span></a></div></div></article>`;
    }).join("");
    const faqs = [
      [`Do you work with businesses serving ${area.name}?`, `Yes. VNW Media can work with businesses that serve ${area.name}. Projects are planned collaboratively, and market coverage is confirmed against the business's actual service area and goals.`],
      [`Do these pages mean VNW Media has an office in ${area.name}?`, `No. VNW Media is based in Morganville, New Jersey and works with New York businesses through a collaborative, remote-first process. These pages describe markets we can discuss, not a claim of a local office in every area.`],
      [`Which service should I explore first?`, `Start with the business priority: digital marketing for a coordinated channel plan, SEO for organic discovery, web design for a clearer website experience, or PPC / Google Ads for paid search. You can begin with one.`],
      [`Can a business serving ${area.name} start with an affordable first phase?`, `Yes. We can focus on one useful priority, such as a website improvement, local SEO work, or a targeted Google Ads campaign. We review your goals and current assets before outlining a practical scope and investment, without assuming you need every service at once.`],
      [`Can you cover nearby towns or neighborhoods too?`, `Potential coverage is discussed based on where the business genuinely operates, customer needs, and team capacity. We avoid implying coverage or creating repetitive area pages where there is no distinct useful information.`]
    ];
    const faqMarkup = faqs.map(([question, answer], index) => `<details${index === 0 ? " open" : ""}><summary>${escapeHtml(question)}<span aria-hidden="true">+</span></summary><p>${escapeHtml(answer)}</p></details>`).join("");
    const stateName = area.stateName;
    const imageUrl = asset(`assets/location-heroes/${area.image}`);
    return `<main id="top" class="location-directory location-area-directory">
      <section class="inner-hero location-directory-hero" data-nav-theme="dark"><div class="inner-hero-bg" style="background-image:linear-gradient(90deg,rgba(8,8,8,.94),rgba(8,8,8,.68),rgba(8,8,8,.36)),url('${imageUrl}')"></div><div class="shell inner-hero-copy reveal"><p class="eyebrow">${escapeHtml(stateName)} · ${escapeHtml(area.displayName || area.name)}${area.county ? ` · ${escapeHtml(area.county)}` : ""} service area</p><h1>Digital growth shaped around ${escapeHtml(area.name)}.</h1><p class="hero-lede">${escapeHtml(area.summary)}</p><div class="hero-actions"><a class="pill pill-blue pill-large" href="#area-services">Explore services <span>↗</span></a><a class="pill pill-outline pill-large" href="${contact}">Talk with our team</a></div></div></section>
      <section class="trust-strip location-directory-ticker" data-nav-theme="dark" aria-label="VNW Media capabilities"><div class="trust-track"><small>Built around your market</small><i aria-hidden="true"></i><span>Digital Marketing</span><span>SEO</span><span>Web Design</span><span>PPC</span>${area.separateGoogleAds ? "<span>Google Ads</span>" : ""}<span>Local relevance</span><span>Clear measurement</span></div></section>
      <section class="location-directory-markets location-area-services" id="area-services"><div class="shell"><header class="location-directory-heading"><p class="section-tag">Services for ${escapeHtml(area.name)}</p><h2>Choose the right starting point.</h2><p>Each service has its own page, information, and questions. Recommendations are grounded in your offer and actual coverage across ${escapeHtml(area.name)}.</p></header><div class="location-state-grid location-area-service-grid">${services}</div><div class="location-area-context"><p class="section-tag">Local market context</p><p>${escapeHtml(area.context)}</p><p><strong>Markets we can discuss</strong><br>${escapeHtml(area.places)}. Coverage is confirmed against your actual service area.</p></div></div></section>
      ${reviewMarkup()}
      <section class="faq section location-directory-faq" id="faq" data-nav-theme="light"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">${escapeHtml(area.name)} · FAQs</p><h2>Useful answers about local coverage.</h2><p>Understand how area pages fit into a service plan before deciding where to begin.</p><a class="pill pill-blue" href="${contact}">Ask about your market <span>↗</span></a></div><div class="faq-list reveal">${faqMarkup}</div></div></section>
    </main>`;
  }

  const pageId = document.body.dataset.locationPage;
  const app = document.getElementById("app");
  const areaSlug = document.body.dataset.locationArea;
  const serviceKey = document.body.dataset.locationService;
  if (areaSlug && locationAreas[areaSlug] && serviceKey) {
    const localized = localizedAreaPage(locationAreas[areaSlug], serviceKey);
    if (localized) app.innerHTML = pageMarkup(localized.data, localized.facts);
  }
  else if (areaSlug && locationAreas[areaSlug]) app.innerHTML = areaDirectoryMarkup(locationAreas[areaSlug]);
  else if (pageId && pages[pageId]) app.innerHTML = pageMarkup(pages[pageId], areaFacts[pages[pageId].region]);
  else if (document.body.dataset.locationDirectory === "true") app.innerHTML = directoryMarkup(document.body.dataset.locationRegion || "");
})();
