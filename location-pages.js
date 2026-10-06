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

  // Each area/service pair has its own editorial story. The shared page components
  // below are presentation, not a substitute for location-specific service copy.
  // Fields: hero, lead, intro heading, intro, showcase heading, showcase text.
  const areaEditorial = {
    "monmouth-county": {
      "digital-marketing": [
        `Build a connected digital presence across Monmouth County.`,
        `Reach the communities your business can serve without flattening a county of distinct towns into one audience.`,
        `Countywide reach needs town-level decisions.`,
        `A company working across Monmouth County may draw different inquiries from a coastal community, a downtown district, and an inland suburb. We identify the services and customer actions that matter in each part of your real coverage, then connect search, site content, campaigns, and follow-up around them.`,
        `Make county coverage meaningful to the customer.`,
        `A useful plan distinguishes a countywide service business from a storefront with a tighter draw. It explains where you operate, why someone should choose you, and whether the next step is a call, appointment, visit, or estimate.`
      ],
      seo: [
        `Monmouth County SEO built around the places you truly serve.`,
        `Improve service pages and local signals for relevant county searches, while giving each useful town page a reason to exist.`,
        `Map search intent before mapping towns.`,
        `County searches and town-specific searches can represent different customer needs. We review which services deserve a broad Monmouth County page, which need a distinct local explanation, and how business details, internal links, and technical health support discovery.`,
        `Useful location context beats a long town list.`,
        `A customer needs to know if your team can reach them and what happens after contact. We connect truthful service coverage to helpful content and Google Business Profile information instead of repeating the same paragraph for every community.`
      ],
      "web-design": [
        `Design a Monmouth County website that makes service coverage clear.`,
        `Give visitors a fast way to understand your offer, your operating area, and the right contact route on any screen.`,
        `Build around how local customers compare providers.`,
        `A countywide business may need service-area explanations and estimate requests, while a destination business may need location details and visit planning. We organize navigation, proof, and calls to action around the decisions your customers actually make.`,
        `Let the page answer the next practical question.`,
        `The design should make key services easy to scan, show credible examples, and put the right call, booking, or inquiry action near the information that earns trust. County geography belongs in the experience only where it helps someone choose.`
      ],
      ppc: [
        `Plan Monmouth County PPC around reachable demand.`,
        `Use search intent, service boundaries, and lead value to decide which county searches deserve paid attention.`,
        `Spend where the business can respond well.`,
        `A countywide campaign does not have to treat every town or service as equal. We review your travel limits, high-value work, landing pages, and conversion tracking before allocating budget to the searches most likely to fit.`,
        `Turn a paid click into a qualified next step.`,
        `An ad for a specific service should lead to a page that explains the service, the areas covered, and a clear way to ask for help. Search-term and lead feedback then guide changes to targeting and budget.`
      ]
    },
    middletown: {
      "digital-marketing": [
        `Digital marketing shaped around Middletown Township.`,
        `Connect the website, local discovery, and campaigns to the parts of Middletown your team can actually support.`,
        `A township plan starts with real customer routes.`,
        `Middletown businesses may serve customers at a location, travel to homes, or work by appointment. We clarify the offer and response area first, then choose the content and channels that bring a customer from local discovery to a useful conversation.`,
        `Give nearby customers a reason to act.`,
        `Service details, trust signals, and a visible call or booking path should answer the questions people have before reaching out. The channel mix can stay focused rather than covering every part of Monmouth County by default.`
      ],
      seo: [
        `Help Middletown customers find the right service.`,
        `Build search relevance from accurate township coverage, service content, and a site people can navigate easily.`,
        `Make Middletown relevance specific, not repetitive.`,
        `We examine the services people search for, the pages already answering those searches, and the way your business appears in local results. The plan can improve technical issues, local business details, and useful township context without cloning county or statewide copy.`,
        `Show where the service fits the search.`,
        `A visitor deciding between providers needs clear service availability, proof, and contact information. Content should reflect the actual Middletown and nearby-area work your team can perform, not imply a location you do not have.`
      ],
      "web-design": [
        `A clearer website for businesses serving Middletown.`,
        `Present the right services, coverage details, and next steps for customers who often arrive from a phone search.`,
        `Design for an immediate local decision.`,
        `A visitor may need a quote, a schedule, directions, or reassurance that you serve their part of the township. We build page hierarchy and mobile actions around that decision, using real business details and evidence instead of generic local claims.`,
        `Put practical information where it is needed.`,
        `Hours, service boundaries, examples, reviews, and contact options should be easy to find without forcing a visitor through multiple screens. The experience can scale to nearby communities without making every page identical.`
      ],
      ppc: [
        `Focus Middletown PPC on inquiries you can handle.`,
        `Match paid searches to actual services, nearby coverage, and a landing page built for a clear response.`,
        `A tighter radius can be a stronger starting point.`,
        `We review where customers come from, the jobs or appointments worth pursuing, and how quickly your team can follow up. Those realities guide campaign geography, search terms, budget, and ad scheduling.`,
        `Make each search-to-contact step consistent.`,
        `When someone clicks for a Middletown service, the destination should confirm fit and offer an easy call or form action. Lead quality and search-term reports show where to refine the campaign.`
      ]
    },
    morganville: {
      "digital-marketing": [
        `A digital growth plan grounded in Morganville.`,
        `Connect local visibility, a useful website, and follow-up for businesses serving Morganville and nearby communities.`,
        `Start close to the business, then expand with purpose.`,
        `VNW Media is based in Morganville, but every nearby company has a different customer base and service radius. We look at how customers find you, what they need to trust, and where the inquiry goes before recommending a broader channel plan.`,
        `Local familiarity should improve the work.`,
        `The site and campaigns should explain real services, practical coverage around Marlboro Township, and a direct next step. Expansion beyond the immediate area should follow business capacity and customer demand.`
      ],
      seo: [
        `Make Morganville search visibility useful, not inflated.`,
        `Improve technical and local SEO around the services and nearby communities your business genuinely supports.`,
        `Begin with the pages customers actually need.`,
        `We review whether service content answers local questions, whether business details are consistent, and whether the site helps a Morganville visitor understand fit. Nearby-town pages should add distinct information rather than rephrase the same SEO pitch.`,
        `Connect local signals to a real service experience.`,
        `A customer may search by service, township, or proximity. We align relevant pages, internal links, and business information with what your company provides and where it can deliver.`
      ],
      "web-design": [
        `Build a Morganville website that feels easy to choose.`,
        `Make the business's services, local credibility, and contact options clear for customers on mobile and desktop.`,
        `Reflect the business, not just the ZIP code.`,
        `A local website should show what makes your team useful, how far it serves, and what a new customer can do next. We shape navigation, service pages, proof, and forms around your actual workflow rather than inserting Morganville into a generic template.`,
        `Support the next call, visit, or appointment.`,
        `The most important details should appear before a visitor has to hunt for them. Responsive layouts and clear actions help nearby customers move confidently from research to contact.`
      ],
      ppc: [
        `Put Morganville PPC behind the right local demand.`,
        `Use focused search campaigns to test services, nearby geography, and the value of the inquiries that follow.`,
        `Start with a realistic service radius.`,
        `A business based in Morganville may draw from Marlboro Township and beyond, but that does not make every surrounding search equally useful. We use coverage, budget, search terms, and landing-page relevance to choose a sensible first campaign.`,
        `Review what happens after the click.`,
        `Calls and forms only help if they match the work you want and the area you serve. Conversion tracking and lead feedback inform whether to adjust search terms, ad messages, or geography.`
      ]
    },
    "sheepshead-bay": {
      "digital-marketing": [
        `A South Brooklyn digital plan with Sheepshead Bay in focus.`,
        `Bring the right local content, discovery channels, and contact path together for the neighborhoods your business serves.`,
        `Neighborhood relevance is more useful than borough-wide noise.`,
        `A Sheepshead Bay business may serve nearby South Brooklyn residents, destination visitors, or a wider customer base. We identify the real audience and next action before coordinating website pages, search, paid media, and follow-up.`,
        `Keep the experience recognizable and practical.`,
        `Service pages should explain what is available and where, while campaigns point to a matching offer. Nearby Brighton Beach or Manhattan Beach coverage belongs in the plan when it reflects actual operations.`
      ],
      seo: [
        `SEO for Sheepshead Bay's real search needs.`,
        `Connect useful service answers and accurate South Brooklyn information to the searches that can lead to contact.`,
        `Give a neighborhood page its own purpose.`,
        `We look for questions a Sheepshead Bay customer has that a broad Brooklyn page does not answer. Local business details, site structure, service content, and internal links should help the page stand on its own without copying a borough template.`,
        `Show the boundary between nearby and borough-wide.`,
        `Where the business also serves Brighton Beach or Manhattan Beach, content can explain that coverage honestly. We avoid creating multiple near-identical pages whose only difference is the neighborhood name.`
      ],
      "web-design": [
        `Design a Sheepshead Bay site for the next local decision.`,
        `Help South Brooklyn visitors see your services, practical coverage, and the best way to call, book, or visit.`,
        `Make neighborhood information genuinely useful.`,
        `A clear site can answer questions about service fit, hours, directions, accessibility, or appointment expectations. We place those details beside credible proof and straightforward mobile actions instead of scattering them across generic pages.`,
        `Let nearby customers recognize the right path.`,
        `A person in Sheepshead Bay may have a different immediate need from someone elsewhere in Brooklyn. The site should guide both without duplicating entire service pages for every adjacent neighborhood.`
      ],
      ppc: [
        `Target Sheepshead Bay PPC with a local purpose.`,
        `Test paid search around relevant South Brooklyn services and the inquiries your business is ready to answer.`,
        `Use neighborhood targeting carefully.`,
        `We review whether the service calls for a tight Sheepshead Bay focus or a wider South Brooklyn campaign. Search intent, budget, location settings, and actual response capacity determine the starting scope.`,
        `A local ad should lead somewhere useful.`,
        `The landing page needs to confirm the service and area, show what comes next, and make contact simple. Search-term and lead review help remove clicks that do not fit.`
      ]
    },
    manhattan: {
      "digital-marketing": [
        `Connect Manhattan audiences to a clear next step.`,
        `Plan a digital mix that respects the difference between neighborhood residents, commuters, visitors, and business buyers.`,
        `One borough can contain several customer journeys.`,
        `A Midtown service firm may need a different discovery and inquiry path from an Upper East Side practice or a Lower Manhattan retailer. We identify the audiences your business can serve, then coordinate site content, search, campaigns, and follow-up around their decisions.`,
        `Make a dense market easier to navigate.`,
        `Useful location detail, credible proof, and an obvious contact action matter when prospects have many alternatives. The plan should reflect your actual Manhattan neighborhoods rather than an automatic borough-wide claim.`
      ],
      seo: [
        `Manhattan SEO for services with a distinct local fit.`,
        `Give searchers a useful explanation of what you offer and which neighborhoods your business can genuinely serve.`,
        `Separate neighborhood intent from broad city demand.`,
        `A search from Harlem can signal a different need than one from Midtown. We review page purpose, service specificity, technical health, and accurate local signals before deciding whether a neighborhood page adds value.`,
        `Earn relevance through useful detail.`,
        `A Manhattan page should help someone understand the service, the location or response area, and the next action. Repeating a city-level paragraph with a new neighborhood name does not answer those questions.`
      ],
      "web-design": [
        `A Manhattan website built for fast, confident choices.`,
        `Present expertise, neighborhood fit, and contact options clearly to people comparing providers on the move.`,
        `Design for the visitor's limited attention.`,
        `A commuter checking a phone, a resident booking an appointment, and an office buyer researching a vendor need different details. We prioritize the services, proof, and actions that matter most to your audience instead of loading every message into the hero.`,
        `Make the path from interest to inquiry short.`,
        `The layout can surface location context, scheduling information, case evidence, and accessible contact methods at the point a visitor is ready to decide. Responsive behavior is part of that work, not an afterthought.`
      ],
      ppc: [
        `Manhattan PPC planned around competitive intent.`,
        `Focus paid-search strategy on the services, locations, and lead economics that justify the spend.`,
        `Protect budget in a crowded auction.`,
        `We separate high-fit searches from broad curiosity and consider whether residents, office buyers, or visitors are the right audience. Campaign structure, negatives, landing pages, and follow-up are planned before increasing reach.`,
        `Judge the campaign by useful inquiries.`,
        `Clicks across Manhattan can look similar in a dashboard while producing very different business value. Search-term reviews and lead feedback help refine geography, messaging, and budget.`
      ],
      "google-ads": [
        `Google Ads management for Manhattan's varied demand.`,
        `Build Search campaigns around the services and parts of Manhattan where your team can respond well.`,
        `Use platform controls with a clear market hypothesis.`,
        `We review location settings, service-themed ad groups, search terms, and conversion actions to avoid treating all Manhattan traffic as one audience. Ads should lead to pages that confirm the offer and make the next step obvious.`,
        `Refine the account from real outcomes.`,
        `The campaign can distinguish promising queries from costly low-fit searches and compare calls or forms with the work your team wants. Ad spend and management scope stay separate decisions.`
      ]
    },
    brooklyn: {
      "digital-marketing": [
        `Build a Brooklyn digital plan neighborhood by neighborhood.`,
        `Tie content, campaigns, and follow-up to the parts of Kings County your business actually reaches.`,
        `Brooklyn reach is not one audience.`,
        `A service business drawing from Bay Ridge may need different proof and channel emphasis than a retailer focused on Williamsburg or Downtown Brooklyn. We map those customer paths before recommending how website pages, local search, paid media, and contact tools work together.`,
        `Explain the local fit before asking for action.`,
        `Visitors should quickly see what is offered, whether the business serves them, and why it is credible. A connected plan makes each channel reinforce that answer instead of broadcasting one borough-wide message.`
      ],
      seo: [
        `Give Brooklyn SEO a neighborhood-level purpose.`,
        `Improve search visibility with distinct service information and truthful Kings County coverage.`,
        `Let each useful page answer a different question.`,
        `Downtown Brooklyn, Williamsburg, and Bay Ridge do not automatically need separate pages. We assess actual service differences, search intent, business information, and technical structure before creating local content that helps a visitor choose.`,
        `Connect discovery to the right business location or service.`,
        `Useful Brooklyn SEO clarifies where the company operates, what a customer can expect, and how to get in touch. We avoid substituting repeated neighborhood names for genuine service detail.`
      ],
      "web-design": [
        `Design a Brooklyn site that shows where you belong.`,
        `Make service fit, neighborhood context, and mobile contact paths easy to understand without overwhelming visitors.`,
        `Build around a specific customer's decision.`,
        `A neighborhood shop needs directions and visit reasons; an appointment-based provider needs availability and trust; a borough-wide service team needs coverage clarity. We shape the site around the model your business actually uses.`,
        `Let local evidence do the work.`,
        `Real images, useful service details, reviews, and clear calls to action can make a Brooklyn site more helpful than a generic city landing page. The design gives each element a place in the decision path.`
      ],
      ppc: [
        `Plan Brooklyn PPC around service and neighborhood fit.`,
        `Use paid-search budget where your business can serve the customer and the lead is worth pursuing.`,
        `Different neighborhoods can change the campaign math.`,
        `We review the offer, travel or delivery boundaries, and which searches merit a call or form lead. That determines how to organize search themes, landing pages, exclusions, and budget across Brooklyn.`,
        `Watch the quality behind the click.`,
        `A campaign that gets traffic from the wrong part of Kings County is not helping. Search terms, location signals, and your team's lead feedback guide adjustments to the paid-search plan.`
      ],
      "google-ads": [
        `Run Brooklyn Google Ads with sharper local controls.`,
        `Align Search campaigns to the services and neighborhoods your team can genuinely cover.`,
        `Make the Google Ads account reflect the offer.`,
        `We review service-themed campaign groups, geographic options, ad messages, and landing pages for Brooklyn demand. Location settings and search-term reports are checked against the real customer areas rather than assumed to be precise by default.`,
        `Keep expanding only where results fit.`,
        `Tracked calls and forms need to be evaluated for service fit and follow-up quality. The account can then shift spend away from unhelpful queries and toward more relevant Brooklyn inquiries.`
      ]
    },
    queens: {
      "digital-marketing": [
        `Digital marketing for Queens' many local markets.`,
        `Coordinate website, search, ads, and response paths around the communities and customers your business really serves.`,
        `Define the audience before the borough.`,
        `A business focused on Long Island City may address different needs than one serving Flushing, Jamaica, or Forest Hills. We start with service fit and customer behavior, then choose the content and channels that can connect each relevant audience to the right next step.`,
        `Make coverage and communication easy to understand.`,
        `The plan should clarify where the business operates, which services are available, and how a customer can reach the team. Language support belongs in the experience when the business can genuinely provide it.`
      ],
      seo: [
        `Queens SEO that respects distinct communities.`,
        `Build useful organic pages for real service areas instead of treating Astoria, Jamaica, and Flushing as interchangeable keywords.`,
        `Search intent can change across the borough.`,
        `We compare the questions people ask, the services available, and the pages already serving each audience. Technical health, location details, and content structure then support pages with a clear purpose rather than a stack of cloned neighborhood versions.`,
        `Help each visitor confirm the business is a fit.`,
        `A helpful Queens page explains the service, actual coverage, contact route, and relevant practical details. When a business serves multiple communities, those differences should be visible only where they matter to the customer.`
      ],
      "web-design": [
        `Create a Queens website that clarifies every next step.`,
        `Show visitors the services, neighborhood coverage, and contact options that match how your business works.`,
        `Organize for several audiences without creating clutter.`,
        `A Queens business may serve nearby residents, destination customers, or business buyers. We give each audience a clear route through navigation, service content, proof, and inquiry actions while keeping the mobile experience manageable.`,
        `Make practical details part of the design.`,
        `Location, hours, service boundaries, accessibility, and supported languages can be decision-making information. The site should present only what the business can accurately support and make the contact path unmistakable.`
      ],
      ppc: [
        `Keep Queens PPC focused on reachable customers.`,
        `Plan paid-search strategy around service value, real operating boundaries, and the leads your team can follow up.`,
        `Avoid spreading budget evenly across unlike markets.`,
        `Astoria, Long Island City, Jamaica, and other Queens areas can have different demand and customer expectations. We choose search themes, geography, and landing pages from the business model rather than a blanket borough target.`,
        `Use lead feedback to tighten the plan.`,
        `A click is only useful when it leads to a relevant conversation. Search-term review, conversion data, and the team's assessment of incoming inquiries guide bidding and coverage decisions.`
      ],
      "google-ads": [
        `Manage Queens Google Ads with local intent in view.`,
        `Use Google Search campaigns and location settings that match the Queens customers your business can serve.`,
        `Make account structure reflect real service differences.`,
        `We assess existing queries, service themes, location options, and the destination pages for each ad. The plan may distinguish a specific Queens neighborhood from a wider service area when the offer and capacity support that choice.`,
        `Measure the inquiry, not just the impression.`,
        `Calls and forms should be tracked and reviewed for relevance. That feedback helps adjust search terms, ads, and budget instead of assuming more borough-wide traffic is always better.`
      ]
    },
    bronx: {
      "digital-marketing": [
        `A Bronx digital plan built for real neighborhood demand.`,
        `Connect local information, discovery, and contact paths to the services your team can provide across Bronx County.`,
        `Begin with the service area and the first action.`,
        `A business near Fordham may have different customer routes from one serving Riverdale or Pelham Bay. We clarify which areas and services are relevant, then choose website content, search, campaigns, and follow-up around calls, visits, bookings, or estimates.`,
        `Make the offer clear before widening reach.`,
        `The digital experience should answer what is available, where the team can respond, and how to get help. A focused Bronx plan can grow from proven customer needs instead of assuming every neighborhood needs the same message.`
      ],
      seo: [
        `Give Bronx SEO a reason beyond the borough name.`,
        `Improve discovery with service content, technical clarity, and accurate coverage for the neighborhoods you truly serve.`,
        `Use local pages to answer local questions.`,
        `We review whether Fordham, Riverdale, Pelham Bay, or another area has a distinct service need that your site can address. Business details, internal links, and page structure should reinforce accurate coverage, not manufacture a separate page for every neighborhood.`,
        `Make the search result lead to useful information.`,
        `A customer should be able to confirm the service, service area, proof, and next step without reading generic copy. The SEO plan prioritizes those answers alongside technical health and measurement.`
      ],
      "web-design": [
        `A Bronx website that makes the next action obvious.`,
        `Put service fit, genuine coverage, and mobile contact tools where local visitors can find them quickly.`,
        `Design for the practical question first.`,
        `A visitor might need to know if you serve their neighborhood, accept appointments, or can provide an estimate. We organize the page around those decisions, with clear navigation and relevant proof rather than a broad borough slogan.`,
        `Use mobile space with purpose.`,
        `Calls, forms, directions, and service details need to work on a small screen. The design should help a Bronx customer move from research to the correct contact route without unnecessary steps.`
      ],
      ppc: [
        `Plan Bronx PPC around a serviceable radius.`,
        `Focus pay-per-click strategy on the services, travel routes, and inquiries your business can fulfill.`,
        `Match campaign geography to operations.`,
        `We look at which Bronx neighborhoods the team can reach, which services merit paid demand, and how quickly new leads can be handled. Search themes, budget, and landing pages are then set to reflect those limits.`,
        `Remove traffic that does not lead to useful work.`,
        `Search-term reports and lead feedback reveal when a query or area looks relevant online but does not fit the business. Those signals guide exclusions, messaging, and spend.`
      ],
      "google-ads": [
        `Google Ads for Bronx customers you can actually serve.`,
        `Configure Search campaigns around relevant services, location options, and measurable calls or forms.`,
        `Set up the account for the right local response.`,
        `We review campaign themes, search terms, location controls, and conversion actions for Bronx demand. Ads lead to pages that explain the offer and area instead of a generic homepage with no clear next step.`,
        `Refine targeting with qualified-lead evidence.`,
        `The business's view of incoming calls and forms matters alongside platform reporting. We use that feedback to adjust queries, ads, and coverage without promising a fixed cost per lead.`
      ]
    },
    "staten-island": {
      "digital-marketing": [
        `Connect Staten Island discovery to local action.`,
        `Build a digital plan around the island neighborhoods, services, and response routes your business can support.`,
        `Decide whether the market is local, islandwide, or wider.`,
        `A business serving St. George may not need the same channel plan as one drawing customers from Great Kills or Tottenville. We define the true audience and service boundaries before connecting website content, search visibility, paid media, and follow-up.`,
        `Keep geography useful to the visitor.`,
        `Customers should understand availability, travel or visit expectations, and the right contact option. Those details can guide the digital experience more effectively than a broad Richmond County claim.`
      ],
      seo: [
        `Staten Island SEO rooted in actual service coverage.`,
        `Make pages and local business information useful for island customers without duplicating neighborhood text.`,
        `Give service-area content a clear purpose.`,
        `We review which services need an islandwide explanation and where a neighborhood detail genuinely changes the customer's decision. Technical structure, Google Business Profile facts, and internal links should support that distinction.`,
        `Help local searchers confirm what happens next.`,
        `A useful result explains whether the business serves the visitor, what is available, and how to reach the team. We avoid pages that name St. George, New Dorp, or Tottenville without adding meaningful information.`
      ],
      "web-design": [
        `Design a Staten Island site around service and proximity.`,
        `Show the locations, hours, trust details, and contact actions that help island customers decide.`,
        `Make the page work for a real visit or service call.`,
        `A visitor may need directions, an appointment, an estimate, or reassurance that the team serves their neighborhood. We structure content and mobile navigation around that need, with clear proof and no unnecessary detours.`,
        `Present island coverage honestly.`,
        `The website should distinguish a single-location business from one serving all of Staten Island or nearby areas. Responsive layouts keep those distinctions and the next action easy to see.`
      ],
      ppc: [
        `Staten Island PPC with sensible service boundaries.`,
        `Use paid search where location, customer value, and team capacity support a useful inquiry.`,
        `Geography should follow the work, not the map alone.`,
        `We assess whether a campaign should reach one part of the island, all of Richmond County, or qualified customers beyond it. Search intent, landing-page fit, budget, and follow-up determine the starting plan.`,
        `Read the leads behind the dashboard.`,
        `Calls and forms reveal whether a campaign is attracting the intended service requests. We use that feedback to refine query coverage, location settings, and spend.`
      ],
      "google-ads": [
        `Manage Staten Island Google Ads for useful local demand.`,
        `Align Google Search campaigns with the services and island areas your business can genuinely cover.`,
        `Build the account around specific service intent.`,
        `We review existing search terms, location choices, ad groups, and landing pages before widening campaign reach. An islandwide setting is useful only if the team can respond across the island.`,
        `Track the outcome after each click.`,
        `Conversion data and lead-quality notes help distinguish valuable Staten Island inquiries from irrelevant traffic. Those findings guide ad, keyword, and budget changes over time.`
      ]
    }
  };

  const marketLenses = {
    "monmouth-county": {
      guideTitle: `Explore a countywide market one community at a time.`,
      guideIntro: `Monmouth County includes businesses with very different customer routes. Pick a service below, then shape the scope around the towns and customers your company can actually reach.`,
      angles: [`county-level needs versus town-specific searches`, `coastal, downtown, and inland customer contexts`, `the difference between a visit, appointment, and on-site estimate`, `which inquiries the team can answer across the county`],
      notes: {
        "digital-marketing": `The channel mix should follow the towns and customer actions that matter, not a countywide assumption.`,
        seo: `Distinct service and town questions determine whether a local page is worth creating.`,
        "web-design": `County visitors need coverage details and a contact route that fits the service model.`,
        ppc: `Paid traffic should be judged against travel limits and the value of completed inquiries.`
      }
    },
    middletown: {
      guideTitle: `Find the right digital starting point for Middletown.`,
      guideIntro: `The township can call for a tighter service radius and a simpler next step than a countywide campaign. These pages separate website, organic search, and paid-search work so the scope stays practical.`,
      angles: [`how people in Middletown discover the specific service`, `the township and nearby Monmouth communities actually served`, `proof that explains availability and response expectations`, `calls, bookings, or estimates the team can follow through on`],
      notes: {
        "digital-marketing": `A local plan can begin with one customer action rather than every marketing channel.`,
        seo: `Township relevance should come from useful service information and accurate business details.`,
        "web-design": `A mobile visitor should see availability and the correct call or booking path quickly.`,
        ppc: `Campaign scope can start around a narrow radius and expand only with useful lead evidence.`
      }
    },
    morganville: {
      guideTitle: `Start with the business needs closest to home.`,
      guideIntro: `Morganville and nearby Marlboro Township businesses do not share one customer journey. Explore the service that addresses the clearest gap in your site, search presence, or inquiry flow.`,
      angles: [`the services Morganville customers ask about first`, `real coverage in Marlboro Township and nearby communities`, `local credibility that can be shown rather than claimed`, `inquiries worth pursuing beyond the immediate area`],
      notes: {
        "digital-marketing": `Local familiarity should help clarify the offer and the response process.`,
        seo: `Nearby coverage needs accurate detail rather than a list of interchangeable towns.`,
        "web-design": `The site can connect real local proof to a direct call, visit, or appointment.`,
        ppc: `A focused test can reveal which nearby searches lead to suitable work.`
      }
    },
    manhattan: {
      guideTitle: `Choose a service for your part of Manhattan.`,
      guideIntro: `A borough-wide label does not describe every resident, commuter, or business buyer. Each service page below looks at the different decisions behind a Manhattan inquiry.`,
      angles: [`the resident, commuter, visitor, or business buyer you need`, `the Manhattan neighborhoods where the offer is available`, `proof that helps people compare several nearby alternatives`, `appointments or qualified inquiries the team can handle`]
    },
    brooklyn: {
      guideTitle: `Explore Brooklyn services with neighborhood context.`,
      guideIntro: `Kings County businesses can draw from one district, several neighborhoods, or the whole borough. Use the pages below to focus the work around real coverage rather than a single Brooklyn-wide claim.`,
      angles: [`the customer differences between Brooklyn neighborhoods`, `coverage that may be narrower than Kings County`, `local evidence that makes the business a credible choice`, `calls, visits, or bookings from the right neighborhood`]
    },
    queens: {
      guideTitle: `Match the service to the Queens audience.`,
      guideIntro: `Astoria, Long Island City, Flushing, Jamaica, and Forest Hills can represent different customer needs. These service pages help separate the work needed for your actual operating area.`,
      angles: [`the Queens customer group the service should reach`, `which communities can receive the service in practice`, `clear information and language support the business can provide`, `qualified contact from the relevant Queens market`]
    },
    bronx: {
      guideTitle: `Build around a Bronx service area you can support.`,
      guideIntro: `From Fordham to Riverdale, Pelham Bay, and the South Bronx, the useful first step depends on the service and response area. Choose the page that addresses your current customer bottleneck.`,
      angles: [`the service question a Bronx customer brings first`, `the Bronx neighborhoods and routes the team can cover`, `trust details that make the next step feel practical`, `inquiries that become real appointments or work`]
    },
    "staten-island": {
      guideTitle: `Plan for the island coverage that is real.`,
      guideIntro: `A St. George business may need a different approach from one serving customers across Richmond County. These pages distinguish broad strategy from website, SEO, and paid-search priorities.`,
      angles: [`whether the audience is local, islandwide, or beyond`, `the Staten Island neighborhoods within the service boundary`, `hours, travel, and location details customers need`, `calls or appointments that match team capacity`]
    },
    "sheepshead-bay": {
      guideTitle: `Keep South Brooklyn plans at neighborhood scale.`,
      guideIntro: `Sheepshead Bay can call for more specific information than a general Brooklyn service page. Explore the focused service areas below before deciding if wider borough coverage is useful.`,
      angles: [`the South Brooklyn customer need behind the search`, `real coverage near Sheepshead Bay and adjacent neighborhoods`, `practical local details a visitor can use`, `calls, visits, or bookings from nearby customers`],
      notes: {
        "digital-marketing": `The neighborhood message should reflect the audience and the next action.`,
        seo: `A Sheepshead Bay page needs a question and answer distinct from a Brooklyn overview.`,
        "web-design": `Directions, hours, service fit, and mobile contact can matter more than a broad slogan.`,
        ppc: `Search and location settings should fit the actual South Brooklyn response area.`
      }
    }
  };

  const cardDescriptions = {
    "digital-marketing": [a => `Identify ${a[0]} before selecting channels.`, a => `Make the website explain ${a[2]} in a way a customer can use.`, a => `Aim search and campaign work at ${a[1]}.`, a => `Evaluate progress by ${a[3]}.`],
    seo: [a => `Check whether important pages can be crawled and understood for ${a[1]}.`, a => `Make local content reflect ${a[1]} instead of copying place names.`, a => `Answer service questions for ${a[0]} with distinct, useful detail.`, a => `Compare search visibility with ${a[3]} rather than rankings alone.`],
    "web-design": [a => `Plan navigation around ${a[0]} so visitors reach the right service.`, a => `Use responsive layouts to explain ${a[1]} without hiding key details.`, a => `Place evidence about ${a[2]} near the decision point.`, a => `Check whether forms and calls support ${a[3]}.`],
    ppc: [a => `Research paid demand connected to ${a[0]} before spending broadly.`, a => `Restrict geography and scheduling to ${a[1]}.`, a => `Match ad claims and page content to ${a[2]}.`, a => `Review spend against ${a[3]}, not clicks alone.`],
    "google-ads": [a => `Review Google Search queries connected to ${a[0]}.`, a => `Configure location options for ${a[1]}.`, a => `Lead each ad to a page that makes ${a[2]} clear.`, a => `Use conversion data and team feedback about ${a[3]} to refine the account.`]
  };
  const offeringDescriptions = {
    "digital-marketing": [a => `Set channel priorities after defining ${a[0]}.`, a => `Build a responsive page path that makes ${a[2]} easy to verify.`, a => `Select SEO and paid tests for ${a[1]}.`, a => `Report on ${a[3]} and how the team responds.`],
    seo: [a => `Research service queries and page purpose for ${a[0]}.`, a => `Investigate indexing, internal links, and performance on pages about ${a[1]}.`, a => `Align business details and location copy with ${a[1]}.`, a => `Track organic discovery against ${a[3]}.`],
    "web-design": [a => `Organize the sitemap around ${a[0]}.`, a => `Design components that clarify ${a[1]} on every screen.`, a => `Pair proof about ${a[2]} with the relevant action.`, a => `Test forms, mobile flow, and launch checks for ${a[3]}.`],
    ppc: [a => `Audit search terms and account structure for ${a[0]}.`, a => `Set budget and location controls around ${a[1]}.`, a => `Write ads and destination pages that address ${a[2]}.`, a => `Use tracking and lead review to evaluate ${a[3]}.`],
    "google-ads": [a => `Review account and conversion setup for ${a[0]}.`, a => `Organize Search groups and geography around ${a[1]}.`, a => `Connect ad copy and pages to ${a[2]}.`, a => `Refine queries and spend using evidence about ${a[3]}.`]
  };

  function localizedAreaPage(area, serviceKey) {
    const base = pages[`${serviceKey === "google-ads" ? "ppc" : serviceKey}-${area.region}`];
    const editorial = areaEditorial[area.slug]?.[serviceKey];
    const lens = marketLenses[area.slug];
    if (!base || !editorial || !lens) return null;
    const service = serviceKey === "ppc" ? "PPC" : serviceKey === "google-ads" ? "Google Ads" : base.service;
    const market = area.name;
    const processNote = area.serviceNotes?.[serviceKey] || lens.notes?.[serviceKey];
    const data = {...base, region: `${area.region}-${area.slug}`, service};
    const [hero, lead, introTitle, intro, showcaseTitle, showcaseText] = editorial;
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
    data.hero = hero;
    data.lead = lead;
    data.introTitle = introTitle;
    data.intro = intro;
    data.showcaseTitle = showcaseTitle;
    data.showcaseText = showcaseText;
    data.systemTitle = `${service} planning for the way ${market} customers choose.`;
    data.systemIntro = `${processNote} We sequence the work around ${lens.angles[2]}, then check progress against ${lens.angles[3]}.`;
    data.marketContext = `For ${service} in ${market}, we connect ${lens.angles[0]} with ${lens.angles[1]}. The plan should make ${lens.angles[2]} clear and evaluate ${lens.angles[3]}.`;
    data.coverageNote = `For ${service}, relevant coverage can include ${area.places}. We confirm each place against the business's actual service area.`;
    data.costContext = `The scope also reflects ${lens.angles[1]}.`;
    data.faqLead = `Coverage, starting scope, and realistic expectations for a business serving ${market}.`;
    data.alt = `${service} planning for a business serving ${market}`;
    if (serviceKey === "google-ads") {
      data.cards = [["Review search intent", "Separate high-fit service searches from broad terms and check where ads should appear."], ["Set campaign boundaries", "Align location options, budget, schedule, and campaign structure with your operating area."], ["Connect ads to useful pages", "Match ad messaging to clear services, proof, and a practical call or form action."], ["Measure and improve", "Use search terms, conversions, and lead feedback to refine the campaign without promising a fixed result."]];
      data.offerings = [["Account and conversion review", "Assess existing campaigns, measurement, and the quality of available lead signals."], ["Google Search campaign plan", "Organize service themes, location settings, budget guardrails, and ad messaging."], ["Landing-page alignment", "Connect each ad group to a page that answers the search and makes the next step clear."], ["Ongoing optimization", "Review queries, spend, ad relevance, and qualified inquiries against agreed priorities."]];
      data.tags = ["Google Search", "Location settings", "Landing pages", "Conversion review"];
    }
    data.cards = data.cards.map(([title], index) => [title, cardDescriptions[serviceKey][index](lens.angles)]);
    data.offerings = data.offerings.map(([title], index) => [title, offeringDescriptions[serviceKey][index](lens.angles)]);
    const guaranteeAnswer = {
      "digital-marketing": `No. A connected channel plan cannot guarantee a fixed number of leads. In ${market}, we judge the work against ${lens.angles[3]} and refine the mix as real customer behavior becomes clearer.`,
      seo: `No. Search rankings shift with competition, site quality, and search-system changes. For ${market}, we track useful visibility alongside ${lens.angles[3]} without promising a particular position.`,
      "web-design": `No. A new website alone cannot promise a specific volume of inquiries. We test whether the ${market} experience helps people understand the offer and take action, then review ${lens.angles[3]}.`,
      ppc: `No. PPC results vary with auctions, budget, the offer, and follow-up. We review search terms and spend for ${market} against ${lens.angles[3]} without promising a fixed cost or lead count.`,
      "google-ads": `No. Google Ads cannot guarantee lead volume or cost per lead. For ${market}, account and landing-page changes are guided by conversion data and ${lens.angles[3]}.`
    }[serviceKey];
    data.faq = [
      [localizedFaqQuestion, `${localizedFaqAnswer} ${processNote}`],
      [`Do you work with businesses in ${market}?`, `Yes. We can plan ${service} for a business serving ${market}. We first confirm ${lens.angles[0]} and ${lens.angles[1]} so the work matches real operations rather than an assumed local office or service area.`],
      [`Can campaigns or pages include nearby communities?`, `Yes, when the business genuinely serves them and can add useful detail. We discuss ${area.places}; a ${service} plan should not imply wider coverage than the team can deliver.`],
      [`Can I begin with only ${service}?`, `Yes. A focused first phase can start with ${data.offerings[0][0].toLowerCase()} and expand only if it helps with ${lens.angles[3]}. We explain the scope before work begins.`],
      [`Do you guarantee ${serviceKey === "seo" ? "rankings" : "leads or a specific result"}?`, guaranteeAnswer]
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
    const localContext = data.costContext ? ` ${data.costContext}` : "";
    switch (data.service) {
      case "SEO":
        return isAreaPage
          ? [[`How much does local SEO cost in ${market}?`, `Local SEO work depends on your real service footprint, business profile accuracy, location and service pages, reviews, and ongoing content needs. A focused plan for one location can be more affordable than a broad multi-location effort. We review what is already working before recommending the work that matters most.${localContext}`]]
          : [[`How much does SEO cost in ${market}?`, `SEO scope depends on your website's condition, competition, service areas, content needs, and how much implementation support you need. In ${market}, we prioritize the highest-impact technical or content work for an affordable first phase, then explain the next phase before you commit.`]];
      case "Web Design":
        if (data.faq.some(([question]) => /^How much does (a business website|web design) cost/i.test(question))) return [];
        return [[`How much does a website cost in ${market}?`, `Website scope depends on page count, original design and content, functionality, integrations, migration, and launch support. Improving an existing site may be an affordable starting point compared with a complete rebuild. We review your goals and current site, then outline the work and investment before you decide.${localContext}`]];
      case "Google PPC":
      case "PPC":
        return isAreaPage
          ? [[`How much does PPC management cost in ${market}?`, `Management scope depends on the number of campaigns and service areas, account condition, landing pages, conversion tracking, and the level of ongoing optimization needed. We can start with a focused campaign and aim for an affordable management scope after reviewing your goals and existing account. Ad spend is separate from management.${localContext}`]]
          : [[`How much does Google Ads management cost in ${market}?`, `Google Ads management and the advertising budget are separate decisions. For ${market}, we review setup, search terms, location targeting, ad testing, tracking, and reporting before recommending a scope. The media budget depends on the market and competition; we do not publish a universal fee or promise a fixed cost per lead.`]];
      case "Google Ads":
        return [[`How much does Google Ads management cost in ${market}?`, `Management scope depends on account condition, service themes, campaign structure, location targeting, landing pages, conversion tracking, and ongoing review. Ad spend is separate. We can recommend an affordable first phase after reviewing your goals and explain the work before launch.${localContext}`]];
      case "Digital Marketing":
        return [[`Can digital marketing start with an affordable scope in ${market}?`, `Yes. In ${market}, we can begin with one priority—such as improving a key website page, local search information, or a focused campaign—rather than launching every channel at once. We review your goals, existing assets, and available budget, then explain a practical first phase and what could follow.${localContext}`]];
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
      <section class="indl-section industry-system-section location-system location-approach" id="local-approach" data-nav-theme="dark"><div class="shell"><div class="location-approach-head"><div class="location-approach-copy"><p class="section-tag">How the work fits together · One connected approach</p><h2>${escapeHtml(data.systemTitle)}</h2><p><strong>${escapeHtml(data.service)} for ${escapeHtml(market)}.</strong> ${escapeHtml(data.systemIntro)}</p><p>${escapeHtml(data.marketContext || facts.context)}</p><a class="pill pill-blue location-approach-cta" href="${contact}">Discuss your project <span>↗</span></a></div></div>${websiteBlueprintMarkup(data, facts)}</div></section>
      <section class="indl-section location-overview decision-section" data-nav-theme="light"><div class="shell"><div class="indl-head"><p class="section-tag">${escapeHtml(data.service)} in ${escapeHtml(market)}</p><h2>${escapeHtml(data.introTitle)}</h2><p>${escapeHtml(data.intro)}</p><p class="location-area-note"><strong>Markets we can discuss</strong><br>${escapeHtml(data.coverageNote || `${facts.places}. Coverage is confirmed against your actual service area.`)}</p></div>${channelJunctionMarkup(data, facts)}${cardMarkup(data.cards, "location-junction-steps")}</div></section>
      ${reviewMarkup()}
      <section class="indl-faq location-faq" id="faq" data-nav-theme="light"><div class="shell indl-faq-grid"><div class="indl-faq-intro"><p class="section-tag">${escapeHtml(data.service)} in ${facts.state} · FAQs</p><h2>Questions about ${escapeHtml(data.service)} in ${escapeHtml(market)}.</h2><p>${escapeHtml(data.faqLead || `Answers about scope, coverage, and outcomes before we plan work in ${market}.`)}</p><a class="pill pill-blue" href="${contact}">Ask about your project <span>↗</span></a></div><div class="indl-faq-list">${faq}</div></div></section>
    </main>`;
  }
  function directoryMarkup(regionOnly = "") {
    const states = Object.entries(areaFacts).filter(([slug]) => !regionOnly || slug === regionOnly);
    const directoryCopy = {
      "new-jersey": {
        eyebrow: "New Jersey · Statewide and local services",
        hero: "Start with the New Jersey market your business actually serves.",
        lead: "VNW Media is based in Morganville. Explore statewide strategy alongside focused Monmouth County, Middletown, and Morganville service pages, each planned for a different coverage question.",
        sectionTitle: "Find a useful New Jersey service route.",
        sectionLead: "Choose statewide planning when the business serves a broad region, or explore a local guide when town and county details change the customer's decision.",
        faqTitle: "New Jersey coverage and service questions.",
        faqLead: "A few practical distinctions before you select a statewide or local page.",
        image: "nj-digital-marketing.jpg"
      },
      "new-york": {
        eyebrow: "New York · Borough and statewide services",
        hero: "Find the New York service area that fits your customers.",
        lead: "Explore statewide services, dedicated pages for all five New York City boroughs, and a more focused Sheepshead Bay guide. Each market calls for its own audience, coverage, and next step.",
        sectionTitle: "Choose a New York market before a channel.",
        sectionLead: "A statewide need differs from a Manhattan, Queens, or South Brooklyn inquiry. Use the links below to choose the geography that reflects your real operations, then compare services.",
        faqTitle: "How New York location planning works.",
        faqLead: "Understand borough coverage, remote collaboration, and when a focused page is useful.",
        image: "ny-digital-marketing.jpg"
      }
    }[regionOnly] || {
      eyebrow: "Service areas · New Jersey & New York",
      hero: "Digital growth, grounded in the places you serve.",
      lead: "Explore focused digital marketing, web design, SEO, PPC, and Google Ads pages for New York City's five boroughs, alongside the New Jersey and New York service areas already here.",
      sectionTitle: "Start with the area your business serves.",
      sectionLead: "Explore statewide services or go directly to the service page for a selected community. Local pages are grouped by area so you can find the right starting point without an extra step.",
      faqTitle: "Helpful answers for choosing a market and service.",
      faqLead: "Learn how the location pages are organized and what to consider before deciding where to begin.",
      image: "nj-digital-marketing.jpg"
    };
    const stateOverview = {
      "new-jersey": ["New Jersey: from statewide strategy to local service areas.", "Our Morganville base gives New Jersey businesses a direct starting point. The right page depends on whether customers search across the state, throughout Monmouth County, or close to a particular township."],
      "new-york": ["New York: statewide planning and five distinct borough markets.", "We collaborate with New York businesses without implying an office in every borough. The right service scope should reflect the audience and neighborhoods the business can actually reach."]
    };
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
      const cardHeading = regionOnly ? stateOverview[slug][0] : `Digital growth for ${facts.state} businesses.`;
      const cardLead = regionOnly ? stateOverview[slug][1] : facts.context;
      return `<article class="location-state-card" id="${slug}" aria-labelledby="${slug}-heading"><div class="location-state-image"><img src="${asset(`assets/location-heroes/${imageName}`)}" alt="${imageAlt}" loading="lazy"><span>${stateCode}<i> / 0${slug === "new-jersey" ? "1" : "2"}</i></span></div><div class="location-state-copy"><p class="section-tag">${facts.state} · Location guides</p><h2 id="${slug}-heading">${escapeHtml(cardHeading)}</h2><p>${escapeHtml(cardLead)}</p><div class="location-state-links"><section class="location-state-link-group" aria-labelledby="${slug}-statewide-heading"><h3 class="location-directory-group-title" id="${slug}-statewide-heading">Statewide services</h3><div class="location-service-grid">${childLinks}</div></section><section class="location-state-link-group location-directory-area-group" aria-labelledby="${slug}-areas-heading"><h3 class="location-directory-group-title" id="${slug}-areas-heading">Area services</h3><div class="location-area-groups">${areaServiceGroups}</div></section></div></div></article>`;
    }).join("");
    const rootFaqs = [
      ["Which locations are covered by these pages?", "This directory includes service pages for New Jersey and New York. We confirm the relevant communities and coverage against where your business actually operates."],
      ["What services can I explore for each location?", "Explore statewide service pages or go directly to digital marketing, SEO, web design, and PPC pages grouped by selected New Jersey and New York communities. Dedicated Google Ads pages are also available for all five New York City boroughs."],
      ["Do I need to be based in New Jersey or New York to work with VNW Media?", "These pages focus on those two markets. If your business operates elsewhere, tell us where you work and what you need; we can discuss whether the project is a fit."],
      ["How do I choose between digital marketing, SEO, web design, and Google Ads?", "Start with the business goal and the point where customers are getting stuck. You can begin with one priority; a broader mix only makes sense when the pieces support that goal."],
      ["Can I start with an affordable project instead of every service?", "Yes. We can review your website and goals, identify the highest-priority opportunity, and propose a focused first phase. The scope and investment are explained before work begins; there is no need to commit to every channel at once."],
      ["Are the recommendations tailored to my actual service area?", "Yes. Market coverage is discussed in relation to your real service footprint, audience, capacity, and goals—not a copied list of nearby place names."]
    ];
    const faqs = regionOnly === "new-jersey" ? [
      ["How do statewide and Monmouth County pages differ?", "The statewide pages address a broader New Jersey service footprint. Monmouth County pages focus on county-versus-town coverage and the information local customers need before contacting a business."],
      ["Is VNW Media based in New Jersey?", "Yes. VNW Media is based in Morganville. A local page still needs to describe the client's actual operations; our office location does not make every nearby town a separate business address."],
      ["Should I choose Middletown or Morganville pages?", "Choose the guide that reflects your customer base and service area. A business can serve both places, but its page plan should explain any meaningful difference rather than repeat the same copy twice."],
      ["Can a New Jersey project begin with one service?", "Yes. A website improvement, focused SEO work, or a carefully scoped paid campaign can be a practical first phase. We explain the priorities and investment before a broader plan."],
      ["Do location pages guarantee rankings or leads?", "No. Useful local information, site quality, competition, the offer, and follow-up all affect outcomes. We plan around measurable work without promising a fixed result."]
    ] : regionOnly === "new-york" ? [
      ["Which New York City borough pages are available?", "Manhattan, Brooklyn, Queens, the Bronx, and Staten Island each have a guide and separate digital marketing, web design, SEO, PPC, and Google Ads pages. Sheepshead Bay also has a more specific South Brooklyn guide."],
      ["Does VNW Media have an office in each borough?", "No. Our team is based in Morganville, New Jersey and collaborates with New York businesses remotely. Borough pages describe markets and service planning, not office addresses."],
      ["When should I use a borough page instead of statewide New York?", "Use a borough page when its neighborhoods, audiences, or practical service boundaries change the work. Statewide pages are a broader starting point for businesses with wider New York coverage."],
      ["Can campaigns target only part of a borough?", "Yes, when that matches real service capacity and the platform supports the required settings. We review location options, search terms, and lead quality instead of assuming every borough-wide click is useful."],
      ["How should a New York business start affordably?", "Begin with the clearest business priority and a focused scope. We can review the site, search presence, or existing ads and recommend a first phase before adding more channels."]
    ] : rootFaqs;
    const faqMarkup = faqs.map(([question, answer], i) => `<details${i === 0 ? " open" : ""}><summary>${escapeHtml(question)}<span aria-hidden="true">+</span></summary><p>${escapeHtml(answer)}</p></details>`).join("");
    return `<main id="top" class="location-directory">
      <section class="inner-hero location-directory-hero" data-nav-theme="dark"><div class="inner-hero-bg" style="background-image:linear-gradient(90deg,rgba(8,8,8,.94),rgba(8,8,8,.68),rgba(8,8,8,.36)),url('${asset(`assets/location-heroes/${directoryCopy.image}`)}')"></div><div class="shell inner-hero-copy reveal"><p class="eyebrow">${escapeHtml(directoryCopy.eyebrow)}</p><h1>${escapeHtml(directoryCopy.hero)}</h1><p class="hero-lede">${escapeHtml(directoryCopy.lead)}</p><div class="hero-actions"><a class="pill pill-blue pill-large" href="#locations">Explore locations <span>↗</span></a><a class="pill pill-outline pill-large" href="${contact}">Talk with our team</a></div></div></section>
      <section class="trust-strip location-directory-ticker" data-nav-theme="dark" aria-label="VNW Media capabilities"><div class="trust-track"><small>Built to move businesses forward</small><i aria-hidden="true"></i><span>Web Design</span><span>SEO</span><span>Google Ads</span><span>Social Media</span><span>Brand Strategy</span><span>Content</span></div></section>
      <section class="location-directory-markets" id="locations"><div class="shell"><header class="location-directory-heading"><p class="section-tag">Choose your market</p><h2>${escapeHtml(directoryCopy.sectionTitle)}</h2><p>${escapeHtml(directoryCopy.sectionLead)}</p></header><div class="location-state-grid">${stateCards}</div></div></section>
      ${reviewMarkup()}
      <section class="faq section location-directory-faq" id="faq" data-nav-theme="light"><div class="shell faq-grid"><div class="faq-intro reveal"><p class="section-tag">Locations FAQ</p><h2>${escapeHtml(directoryCopy.faqTitle)}</h2><p>${escapeHtml(directoryCopy.faqLead)}</p><a class="pill pill-blue" href="${contact}">Ask about your market <span>↗</span></a></div><div class="faq-list reveal">${faqMarkup}</div></div></section>
    </main>`;
  }

  function areaDirectoryMarkup(area) {
    const lens = marketLenses[area.slug];
    const officeAnswer = area.slug === "morganville"
      ? "Yes. VNW Media is based in Morganville, New Jersey. This page explains how we approach work for businesses serving the local market."
      : area.slug === "monmouth-county"
        ? "VNW Media is based in Morganville, within Monmouth County. We do not claim a separate office in every town; coverage is planned around the client's real operating area."
        : area.region === "new-jersey"
          ? `No. Our office is in Morganville, not ${area.name}. We can still work with a business serving the township and nearby communities through an agreed project scope.`
          : `No. VNW Media is based in Morganville, New Jersey. For ${area.name}, we collaborate remotely and plan around ${lens.angles[1]} rather than claiming a borough office.`;
    const services = servicesForArea(area).map(([key, label, description], index) => {
      const href = asset(`locations/${area.region}/${area.slug}/${key}-${area.slug}/`);
      const title = `${label} in ${area.name}`;
      const sourceKey = key === "google-ads" ? "ppc" : key;
      const source = pages[`${sourceKey}-${area.region}`];
      const image = source?.showcaseImage || `assets/location-heroes/${source?.image || area.image}`;
      const imageAlt = source?.showcaseAlt || source?.alt || `${label} planning for ${area.name} businesses`;
      const stateCode = area.region === "new-jersey" ? "NJ" : "NY";
      const localDescription = area.serviceNotes?.[key] || lens.notes?.[key] || description;
      return `<article class="location-state-card location-area-service-card"><div class="location-state-image"><img src="${asset(image)}" alt="${escapeHtml(imageAlt)}" loading="lazy"><span>${stateCode}<i> / 0${index + 1}</i></span></div><div class="location-state-copy"><p class="section-tag">${escapeHtml(area.name)} · ${escapeHtml(label)}</p><h2><a href="${href}">${escapeHtml(title)}</a></h2><p>${escapeHtml(localDescription)}</p><div class="location-state-links"><a href="${href}">Explore ${escapeHtml(label)} in ${escapeHtml(area.name)}<span aria-hidden="true">↗</span></a></div></div></article>`;
    }).join("");
    const faqs = [
      [`Do you work with businesses serving ${area.name}?`, `Yes. We start with ${lens.angles[0]}, then check ${lens.angles[1]} against the business's real operating area before proposing work.`],
      [`Do these pages mean VNW Media has an office in ${area.name}?`, officeAnswer],
      [`Which service should I explore first?`, `Choose the current bottleneck: digital marketing for a connected plan, SEO for discovery, web design for a clearer site, or paid search for active demand. In ${area.name}, consider ${lens.angles[0]} before widening scope.`],
      [`Can a business serving ${area.name} start with an affordable first phase?`, `Yes. A first phase can address one service and ${lens.angles[2]}. We review your current site, resources, and goals, then explain the scope and investment without requiring every channel at once.`],
      [`Can you cover nearby towns or neighborhoods too?`, `We discuss nearby coverage in relation to ${lens.angles[1]} and the business's actual capacity. ${area.places}. A useful page or campaign should explain service availability rather than merely add another place name.`]
    ];
    const faqMarkup = faqs.map(([question, answer], index) => `<details${index === 0 ? " open" : ""}><summary>${escapeHtml(question)}<span aria-hidden="true">+</span></summary><p>${escapeHtml(answer)}</p></details>`).join("");
    const stateName = area.stateName;
    const imageUrl = asset(`assets/location-heroes/${area.image}`);
    return `<main id="top" class="location-directory location-area-directory">
      <section class="inner-hero location-directory-hero" data-nav-theme="dark"><div class="inner-hero-bg" style="background-image:linear-gradient(90deg,rgba(8,8,8,.94),rgba(8,8,8,.68),rgba(8,8,8,.36)),url('${imageUrl}')"></div><div class="shell inner-hero-copy reveal"><p class="eyebrow">${escapeHtml(stateName)} · ${escapeHtml(area.displayName || area.name)}${area.county ? ` · ${escapeHtml(area.county)}` : ""} service area</p><h1>${escapeHtml(lens.guideTitle)}</h1><p class="hero-lede">${escapeHtml(area.summary)}</p><div class="hero-actions"><a class="pill pill-blue pill-large" href="#area-services">Explore services <span>↗</span></a><a class="pill pill-outline pill-large" href="${contact}">Talk with our team</a></div></div></section>
      <section class="trust-strip location-directory-ticker" data-nav-theme="dark" aria-label="VNW Media capabilities"><div class="trust-track"><small>Built around your market</small><i aria-hidden="true"></i><span>Digital Marketing</span><span>SEO</span><span>Web Design</span><span>PPC</span>${area.separateGoogleAds ? "<span>Google Ads</span>" : ""}<span>Local relevance</span><span>Clear measurement</span></div></section>
      <section class="location-directory-markets location-area-services" id="area-services"><div class="shell"><header class="location-directory-heading"><p class="section-tag">Services for ${escapeHtml(area.name)}</p><h2>Choose a service for ${escapeHtml(area.name)}.</h2><p>${escapeHtml(lens.guideIntro)}</p></header><div class="location-state-grid location-area-service-grid">${services}</div><div class="location-area-context"><p class="section-tag">Local market context</p><p>${escapeHtml(area.context)}</p><p><strong>Markets we can discuss</strong><br>${escapeHtml(area.places)}. Coverage is confirmed against your actual service area.</p></div></div></section>
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
