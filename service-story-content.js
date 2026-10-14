// Each section has one job: outcomes, deliverables, decision gates, client inputs,
// adjacent services, and buying constraints. Do not add a second benefits summary.
const SERVICE_STORY_CONTENT = {
  'brand-strategy':[
    'Your brand strategy deliverables',
    ['Business history|Share the origin, current offer, and decisions behind the brand. Include any existing positioning work so useful equity is not discarded.',
     'Customer evidence|Provide anonymized customer questions, sales objections, and reasons buyers choose or decline your offer. Real language is more useful than assumptions.',
     'Decision makers|Identify who can approve the positioning and who will use it. Resolve conflicting stakeholder expectations before creative rollout.'],
    ['Confirm the brief and stakeholder priorities before research begins.','Review the proposed positioning against customer evidence and competitor context.','Approve the voice and creative examples before preparing application guidance.','Sign off the rollout priorities and assign an internal owner for the brand system.']
  ],
  'graphic-design':[
    'Your graphic design production scope',
    ['Brand assets|Supply the approved logo files, typefaces, color references, and existing guidelines. Flag any assets that cannot be altered.',
     'Production specifications|Confirm dimensions, placements, print requirements, deadlines, and the copy that must fit. Different outputs need different production files.',
     'Usage rights|Identify licensed photography, fonts, and supplied artwork. Confirm where each asset may be used before it enters a final design.'],
    ['Approve the creative brief, output list, and production specifications.','Select a direction from the agreed concept set before developing adaptations.','Consolidate stakeholder feedback into one review round and approve the final proof.','Check the delivered formats against the agreed file list and archive the approved masters.']
  ],
  'web-design':[
    'Your website design and development scope',
    ['Content ownership|Nominate a reviewer for service details, staff information, photography, and customer proof. Confirm who will supply and approve page copy.',
     'Platform access|Arrange permission-based access to hosting, the CMS, domain settings, and existing analytics. Keep account ownership with the business.',
     'Launch dependencies|List booking tools, payment systems, business email, and external integrations. Identify third-party contacts and blackout dates before scheduling release.'],
    ['Approve the sitemap and page responsibilities before layouts are produced.','Sign off the main page templates and mobile behavior before development.','Review a staging site and resolve content and functional issues before launch approval.','Authorize the release window, verify live forms, and confirm the editing handoff.']
  ],
  'ecommerce':[
    'Your eCommerce store implementation scope',
    ['Catalog data|Prepare product names, variants, SKUs, prices, imagery, and stock rules. Clean source data reduces migration errors and manual rework.',
     'Operational decisions|Confirm shipping regions, fulfillment methods, returns, and payment providers. The business and its advisers approve tax and policy details.',
     'Migration boundaries|Identify records to move, systems that must remain connected, and when order processing can pause. Agree on a fallback before switching stores.'],
    ['Approve the catalog mapping and migration boundaries before importing records.','Sign off the storefront templates using representative products and variants.','Run test orders through payment, fulfillment, refunds, and notification scenarios.','Approve the cutover after reconciling data and confirm the store-management handoff.']
  ],
  'website-maintenance':[
    'Your website support agreement',
    ['System inventory|List the hosting provider, CMS, plugins, subscriptions, and external integrations. Identify unsupported components before recurring care is agreed.',
     'Support priorities|Name an authorized request contact and explain which failures are business-critical. Agree on urgent escalation versus routine scheduled work.',
     'Recovery arrangements|Confirm available backups, restoration access, and who controls hosting. Recovery options depend on the condition of the existing system.'],
    ['Confirm access, known risks, and the maintenance responsibilities before onboarding.','Approve the initial remediation list and any work outside routine support.','Review scheduled change notes and test affected functions after updates.','Reconcile completed requests and agree on the next support period’s priorities.']
  ],
  'app-design-development':[
    'Your app design and development deliverables',
    ['User roles|Document who uses the application, what each role may access, and the tasks that must be completed. Include staff and administrator needs.',
     'Data and dependencies|Identify data sources, API owners, authentication requirements, and retention decisions. Review third-party limitations before promising features.',
     'Release ownership|Choose the product owner and approval contacts. Confirm how support, hosting, releases, and user feedback will be handled after delivery.'],
    ['Agree on the first-release requirements and explicitly defer nonessential features.','Approve a tested prototype before locking the implementation scope.','Review the working build against acceptance criteria and resolve release blockers.','Authorize deployment and accept documentation, access, and support responsibilities.']
  ],
  'landing-pages':[
    'Your landing page project scope',
    ['Offer terms|Confirm the price or incentive, eligibility, expiry, and exclusions. The landing page must not promise more than the business can deliver.',
     'Campaign source|Share the advertisements, audience, keywords, and traffic destinations. Identify one primary action rather than competing conversion goals.',
     'Inquiry handling|Name the person who receives submissions and explain qualification and response expectations. Confirm where customer data will be stored.'],
    ['Approve the offer brief and conversion goal before drafting the page.','Sign off the copy sequence and proof selections before visual production.','Test form delivery and campaign attribution with representative submissions.','Approve launch after link checks and agree on the traffic needed before judging a test.']
  ],
  'social-media':[
    'Your social media management plan',
    ['Source material|Provide current offers, service updates, approved customer stories, and a usable photo or footage library. Confirm permissions for people shown.',
     'Approval calendar|Choose one reviewer and a feedback deadline. Identify seasonal dates, launches, and topics that require specialist approval.',
     'Channel ownership|Arrange role-based access to the business profiles. Confirm whether filming, direct-message support, and paid advertising are separate assignments.'],
    ['Approve the monthly brief and production schedule before content creation.','Review a batch of draft posts and return consolidated feedback by the agreed date.','Authorize the approved publishing queue after checking dates, tags, and destinations.','Review the completed cycle and select one evidence-backed adjustment for the next month.']
  ],
  'social-media-consultation':[
    'Your social media consultation deliverables',
    ['Team capacity|Explain who creates, approves, and publishes today, including realistic time and equipment constraints. Advice must fit the team that will execute it.',
     'Previous activity|Share account access or exports, past campaigns, and examples that did or did not resonate. Describe how inquiries are currently recorded.',
     'Workshop participants|Include the people responsible for implementation. Bring unresolved questions so the session produces decisions, not another unused presentation.'],
    ['Agree on the consultation questions and evidence needed for the review.','Review the findings with your team and choose the priorities to pursue.','Accept the recommended action plan with named owners and realistic deadlines.','Use a follow-up session to resolve execution questions rather than restart the strategy.']
  ],
  'community-management':[
    'Your community management coverage',
    ['Coverage boundaries|Confirm channels, monitored hours, languages, and response expectations. Identify what happens outside the agreed coverage window.',
     'Response authority|Supply approved answers, refund boundaries, and named escalation contacts. Sensitive complaints require a clear route to the business.',
     'Privacy safeguards|Explain which details must move to a private channel and who may access customer records. Public replies should not expose personal information.'],
    ['Approve coverage hours and the response-authority matrix before monitoring starts.','Test example inquiries against the playbook and resolve ambiguous scenarios.','Review escalated conversations with the assigned business contact.','Accept the activity summary and update the playbook where new exceptions appear.']
  ],
  'seo':[
    'Your SEO research and implementation scope',
    ['Commercial priorities|Identify the services, locations, and customers that matter most. Explain capacity constraints so search demand is not pursued without business fit.',
     'Search history|Share Search Console and analytics access, previous SEO work, and known migrations. Historical changes help distinguish new issues from existing patterns.',
     'Implementation team|Confirm who can edit content, deploy technical changes, and approve expert claims. Recommendations need a realistic route to publication.'],
    ['Approve the audit findings and agree on the baseline before committing to changes.','Sign off a prioritized roadmap with page owners and implementation responsibilities.','Review completed updates against the agreed recommendations and record what changed.','Compare results over an appropriate period and approve the next work queue.']
  ],
  'local-seo':[
    'Your local SEO implementation scope',
    ['Real-world coverage|List staffed locations and genuine service areas. Provide opening hours, appointment arrangements, and any areas where work is not accepted.',
     'Business records|Supply the approved business name, addresses, phone numbers, and existing listing owners. Resolve conflicting information at its source.',
     'Local evidence|Share location-specific services, projects, team details, and useful customer questions. Each local page needs substance beyond a changed town name.'],
    ['Approve the location and service-area inventory before researching page opportunities.','Agree which local pages warrant distinct content and which should be consolidated.','Review business information changes with the person responsible for each location.','Verify published updates and agree on a reporting cadence for the covered locations.']
  ],
  'technical-seo':[
    'Your technical SEO audit and fix scope',
    ['Environment access|Arrange read-only search and analytics access, staging access where needed, and a development contact. Do not share production credentials casually.',
     'Change history|Identify migrations, platform changes, URL removals, and known indexing problems. Recent deployments can explain symptoms seen in a crawl.',
     'Deployment controls|Document who authorizes releases, how changes are tested, and the rollback process. Fixes must respect the platform’s operational constraints.'],
    ['Agree on the crawl boundaries, important page types, and baseline evidence.','Review confirmed findings separately from low-priority warnings or tool suggestions.','Approve implementation tickets with an owner, acceptance test, and rollback plan.','Accept validation evidence for each completed ticket and record unresolved dependencies.']
  ],
  'content-seo':[
    'Your content SEO editorial scope',
    ['Expert input|Nominate subject-matter reviewers and provide approved service facts, examples, and references. Unsupported claims should not become published advice.',
     'Existing content|Share the page inventory, useful past articles, and material that must remain. Existing URLs should be evaluated before another page is commissioned.',
     'Publishing capacity|Confirm writing, approval, and CMS responsibilities. Set an achievable cadence around the time required for factual review.'],
    ['Approve the existing-content inventory and pages to retain, combine, or retire.','Review the intent-to-page map so each topic has one appropriate primary destination.','Approve briefs and factual drafts before formatting and publication.','Review published coverage and choose refresh priorities instead of adding volume by default.']
  ],
  'google-business-profile':[
    'Your Google Business Profile management scope',
    ['Ownership and access|Identify the verified owner and grant appropriate profile access. Account recovery and disputed ownership may need to be resolved first.',
     'Location facts|Confirm eligible operating locations, public hours, services, and contact routes. Inform us about temporary closures and seasonal changes.',
     'Business media|Provide current location and service photos with usage permission. The business approves representations of staff, facilities, products, and offers.'],
    ['Confirm ownership and eligibility before proposing profile changes.','Approve the business-information change list with the location owner.','Review scheduled updates and any platform requests for further verification.','Reconcile completed changes and agree on the next maintenance cycle.']
  ],
  'yelp-seo':[
    'Your Yelp profile optimization scope',
    ['Claimed profile|Confirm who owns the business page and arrange supported access. Duplicate or disputed listings may require Yelp support.',
     'Service details|Provide actual categories of work, hours, amenities, and customer contact options. Flag inaccurate information already on the profile.',
     'Authentic photography|Supply recent, permission-cleared photos of the venue, products, or completed work. Avoid stock imagery that misrepresents the customer experience.'],
    ['Agree on the profile baseline and issues that require platform support.','Approve revised business information and selected photographs before submission.','Review published changes and handle rejected edits through the appropriate channel.','Accept the activity summary and choose the next profile updates within scope.']
  ],
  'aeo':[
    'Your Answer Engine Optimization deliverables',
    ['Customer questions|Provide real questions from sales, support, and consultations. Include the follow-up details people need after a short answer.',
     'Answer authority|Identify the expert who can verify each topic and supply references. Regulated advice needs the appropriate business review.',
     'Priority pages|Share the pages currently answering these questions and any existing structured data. Avoid scattering the same answer across multiple destinations.'],
    ['Approve a question set grounded in customer relevance, not arbitrary query volume.','Choose the primary answer page for each question before commissioning copy.','Sign off expert-reviewed answers and validate relevant markup against visible content.','Review a recorded query sample over time, noting presentation changes without promising placement.']
  ],
  'geo':[
    'Your Generative Engine Optimization scope',
    ['Verified business facts|Provide an approved record of services, people, credentials, locations, and affiliations. Resolve contradictory claims before expanding coverage.',
     'Original evidence|Share publishable case examples, research, and expert explanations. Generic restatements give a source little reason to be referenced.',
     'Evaluation boundaries|Agree on representative prompts, tools, markets, and dates. Different systems can return different answers to the same question.'],
    ['Approve the prompt sample and save a dated baseline of observed responses.','Resolve factual discrepancies and agree on authoritative supporting sources.','Approve original material and expert attribution before publishing updates.','Repeat the documented evaluation and separate observations from claims of causation.']
  ],
  'aio':[
    'Your AI Optimization readiness scope',
    ['Site and data access|Identify public page types, rendering constraints, and the technical team. Private customer information does not belong in discovery content.',
     'Fact ownership|Assign reviewers for business facts, credentials, policies, and expert claims. Establish who will keep those details current.',
     'Risk boundaries|Explain where automation or machine interpretation would be inappropriate. Useful optimization does not require replacing expert judgment with generated copy.'],
    ['Approve the readiness baseline and separate durable issues from speculative tactics.','Assign owners to a ranked implementation list with explicit completion criteria.','Review changes to technical access and public facts before production release.','Validate completed recommendations and record limits in the available evidence.']
  ],
  'reputation-management':[
    'Your reputation management coverage',
    ['Platform ownership|List review profiles and existing monitoring arrangements. Identify which channels are controlled by the business and which require platform support.',
     'Response contacts|Name the people who can investigate complaints, approve sensitive replies, and resolve service issues. Marketing cannot substitute for an operational response.',
     'Customer permissions|Confirm permission before reusing customer feedback in marketing. Establish a privacy-aware route for requests and unresolved complaints.'],
    ['Approve channel coverage and the baseline of existing feedback.','Sign off response boundaries and test sensitive scenarios with the business contact.','Review escalations privately before any public response is approved.','Accept the recurring-topic report and assign operational issues to the right team.']
  ],
  'lead-generation':[
    'Your lead generation implementation scope',
    ['Qualification rules|Define a useful lead, excluded requests, target geography, and available capacity. Volume alone cannot tell the team whether inquiries are a good fit.',
     'Sales ownership|Identify who receives leads and how outcomes will be recorded. Agree on response responsibility before increasing demand.',
     'Commercial assumptions|Share realistic deal value, sales cycle, and test budget. Forecasts should disclose assumptions rather than imply guaranteed revenue.'],
    ['Approve the qualification definition and baseline before choosing a channel mix.','Sign off the test plan, budget boundaries, and sales-team responsibilities.','Complete end-to-end test inquiries before activating the agreed traffic sources.','Review accepted versus rejected leads with sales and authorize the next experiment.']
  ],
  'google-ppc':[
    'Your Google Ads campaign scope',
    ['Account ownership|Arrange role-based Google Ads and analytics access. Confirm billing responsibility and whether an existing account should be retained.',
     'Offer constraints|Provide geographic limits, excluded work, stock or capacity restrictions, and approved offer terms. These boundaries inform campaign exclusions.',
     'Test economics|Agree on media spend, management fees, and a useful conversion definition. Allow for learning time before evaluating campaign changes.'],
    ['Approve the campaign brief, budget cap, and conversion definitions.','Review ads and targeting exclusions before campaigns are submitted for approval.','Verify tracking with test actions and authorize spend only after launch checks.','Review a documented test period and approve budget or bidding changes with context.']
  ],
  'paid-social':[
    'Your paid social advertising scope',
    ['Business accounts|Confirm page ownership, advertising permissions, billing, and any past account restrictions. Access issues can delay a campaign independently of creative work.',
     'Creative permissions|Supply approved footage, photography, testimonials, and offer terms. Confirm consent and usage rights before advertisements are produced.',
     'Testing boundaries|Agree on a budget, audience restrictions, and how results will be judged. Keep a record of which variable each creative test is changing.'],
    ['Approve the campaign hypothesis and test budget before producing variants.','Sign off the ad concepts and landing destination as a matched set.','Verify events and permissions before submitting the campaign for platform review.','Review the test results and authorize the next creative iteration without changing every variable.']
  ],
  'email-marketing':[
    'Your email marketing program scope',
    ['List provenance|Document how subscribers joined and which permissions were recorded. Flag inactive, migrated, or uncertain records before selecting recipients.',
     'Sender setup|Confirm domain ownership, sender addresses, and access to the email platform. Authentication changes may need your domain administrator.',
     'Commercial calendar|Provide offers, inventory constraints, important dates, and an approval contact. Messages need accurate terms and a functioning destination.'],
    ['Approve recipient eligibility and the sender configuration before importing or segmenting contacts.','Review the template and message drafts with test personalization data.','Authorize sending only after rendering, unsubscribe, link, and timing checks.','Review delivery and segment results before adjusting the next send.']
  ],
  'text-marketing':[
    'Your SMS marketing implementation scope',
    ['Consent records|Provide the opt-in source, disclosures, and permission records. The business should obtain legal review for its program and jurisdiction.',
     'Sender registration|Confirm the platform, sending identity, business details, and registration requirements. Carrier or platform approvals can affect launch timing.',
     'Response ownership|Identify who handles replies, opt-outs, and time-sensitive customer questions. Agree on hours and escalation before messages are activated.'],
    ['Confirm permission records and obtain required business approvals before configuration.','Approve message examples and opt-out handling against the agreed program.','Test triggers, reply routing, and suppression before authorizing live sends.','Review delivery failures and opt-outs before expanding audience or frequency.']
  ],
  'crm-automation':[
    'Your CRM and automation implementation scope',
    ['Source systems|List current forms, CRM records, spreadsheets, and connected platforms. Identify the authoritative source for each customer field.',
     'Team responsibilities|Confirm record owners, sales stages, access permissions, and exception contacts. Automation needs a human owner when a handoff fails.',
     'Migration safeguards|Define retention, deduplication rules, backups, and a rollback route. Approve the treatment of existing records before modifying them.'],
    ['Approve the current-state map and resolve conflicting definitions of customer records.','Sign off workflow rules and exception handling with the teams using the system.','Test sample records in a controlled environment before activating integrations.','Accept the handoff documentation and verify users can interrupt or correct a workflow.']
  ],
  'content-writing':[
    'Your content writing deliverables',
    ['Source information|Provide approved service facts, interviews, reference material, and examples. The writer should not invent claims to fill gaps.',
     'Voice references|Share writing that feels right for the business and terminology to avoid. Identify the audience’s level of knowledge.',
     'Editorial approval|Name a factual reviewer and a final approver. Confirm the channel, length expectations, revision allowance, and publication owner.'],
    ['Approve the brief and source material before a first draft is commissioned.','Review the outline to settle structure before developing complete copy.','Return consolidated feedback and verify factual claims in the revised draft.','Approve the final copy and confirm who formats and publishes each piece.']
  ],
  'video-editing':[
    'Your video editing production scope',
    ['Footage handoff|Supply organized original footage, audio, and project references. Identify missing recordings and material that must not appear.',
     'Rights and releases|Confirm permissions for people, music, stock footage, and logos. The available rights affect where the final edit may be distributed.',
     'Delivery specifications|List platforms, aspect ratios, durations, captions, deadlines, and approvers. Confirm whether the project needs editable source files or final exports.'],
    ['Approve the footage inventory and editing brief before assembling the sequence.','Review a rough cut for story and structure before detailed finishing.','Sign off a fine cut before final sound, color, captions, and export checks.','Accept the agreed versions after playback testing and confirm archive responsibilities.']
  ]
};
function serviceStoryData(service, data){
  const story=SERVICE_STORY_CONTENT[service.slug];
  const redundantQuestions=/^(What is included|What types of graphic design|What does a technical SEO audit check|What parts of a website are reviewed|What channels are included|What is Answer Engine Optimization|What is Generative Engine Optimization|What does AI Optimization mean|What is content SEO|How do you measure AEO work|How do you evaluate GEO progress|How is SEO performance reported|How do you measure local SEO progress|How does the profile connect to the website|How does Yelp support broader local SEO|Does reputation management help SEO|How does brand strategy support SEO)/;
  return {...data, scopeHeading:story[0], process:data.process.map((step,i)=>[step[0],story[2][i]]),faqs:data.faqs.filter(item=>!redundantQuestions.test(item[0]))};
}
function serviceStoryFallback(service){
  const help=serviceFallbackHelp(service);
  const video=service.slug==='video-editing';
  return {...help,eyebrow:service.name,headline:help.introHeading,lede:service.description,
    hero:service.image,heroAlt:service.name+' creative team at work',feature:service.image,featureAlt:service.name+' project workspace',
    included:service.includes,process:LEGACY_SERVICE_PROCESS[service.slug],
    related:video?['social-media','paid-social','graphic-design']:['content-seo','web-design','landing-pages'],
    faqs:video?[
      ['Does video editing include filming?','This service works with supplied footage. Filming, talent, travel, and recording equipment are separate production requirements unless expressly included in your proposal.'],
      ['Can poor footage always be repaired?','No. Missing shots, severe focus problems, or distorted audio may limit the result. We assess the supplied material and flag issues before committing to an edit.'],
      ['How are additional versions priced?','Extra durations, aspect ratios, languages, or revision rounds can change the production scope. The proposal identifies the included versions.'],
      ['Who licenses music and stock footage?','Usage rights must be agreed for each supplied or sourced asset. Licensing fees and distribution restrictions are confirmed before the asset is used.']
    ]:[
      ['Does writing include publishing in our CMS?','Copy delivery and CMS publishing are separate responsibilities. Uploading, formatting, and image placement can be included when specified in the proposal.'],
      ['Who approves technical or regulated claims?','Your appointed subject-matter reviewer approves factual accuracy and regulated claims. Unverified details are flagged rather than presented as established facts.'],
      ['Can you edit existing material?','Yes. Editing can be scoped instead of a new draft when the source material is accurate and usable. Research depth and revisions are agreed before work starts.'],
      ['Who owns the final copy?','Usage rights, ownership, and any restrictions are defined in the project agreement. Confirm these terms before commissioning the work.']
    ]};
}
function serviceSupportingRole(slug){
  return {
    'brand-strategy':'Use when the market position or core brand message needs to be defined before production.',
    'graphic-design':'Add production of visual assets or reusable design templates beyond the current service scope.',
    'web-design':'Address website layouts, CMS development, or a full redesign as a separate implementation project.',
    'ecommerce':'Scope storefront, catalog, payment, and fulfillment functionality when selling products online.',
    'website-maintenance':'Arrange recurring technical care after the project, rather than treating launch as ongoing support.',
    'app-design-development':'Plan custom application features when a standard website cannot support the required workflow.',
    'landing-pages':'Commission a focused campaign destination when the existing site is too broad for a single offer.',
    'social-media':'Add ongoing content production and publishing when advice alone is not the required level of support.',
    'social-media-consultation':'Get strategic coaching for an internal team that will produce and publish its own content.',
    'community-management':'Assign monitored comment and message coverage separately from content production or advertising.',
    'seo':'Develop a broader organic search roadmap when the current project addresses only one part of search.',
    'local-seo':'Coordinate website location content and real service-area coverage beyond a single business profile.',
    'technical-seo':'Investigate crawl, rendering, or indexing barriers that require specialist technical review.',
    'content-seo':'Plan search-intent coverage and page consolidation before commissioning additional website copy.',
    'google-business-profile':'Assign recurring management of the Google profile itself, including owner-approved information updates.',
    'yelp-seo':'Address the Yelp business page as a separate platform with its own controls and support requirements.',
    'aeo':'Develop direct, expert-reviewed answers for specific customer questions and relevant answer features.',
    'geo':'Evaluate generative mentions and source context through a documented prompt-testing program.',
    'aio':'Review wider technical access and public-information readiness for machine-assisted discovery.',
    'reputation-management':'Assign review-platform monitoring and response workflows beyond ordinary social conversations.',
    'lead-generation':'Coordinate multiple acquisition channels and sales qualification as a wider program.',
    'google-ppc':'Launch or manage Google advertising separately from organic visibility and website production.',
    'paid-social':'Add paid audience distribution and creative testing; organic publishing does not include media buying.',
    'email-marketing':'Commission permission-based email campaigns and lifecycle messages beyond a website or CRM setup.',
    'text-marketing':'Plan an opted-in SMS program with its own sender, permissions, and reply responsibilities.',
    'crm-automation':'Implement record routing and internal workflow connections beyond the customer-facing page.',
    'content-writing':'Commission publishable copy when the current scope provides research or recommendations only.',
    'video-editing':'Turn supplied footage into finished video when the current engagement does not include editing.'
  }[slug];
}
function serviceReadinessSection(service){
  const story=SERVICE_STORY_CONTENT[service.slug];
  return '<section class="csp-visibility section" data-nav-theme="light" id="prepare-for-engagement"><div class="shell"><div class="csp-section-head"><p class="section-tag">Before we begin</p><div><h2>What to prepare for '+esc(service.name)+'.</h2><p>These inputs and decisions help us agree on a realistic scope before work starts.</p></div></div><div class="csp-visibility-grid">'+story[1].map((entry,i)=>{const [title,body]=entry.split('|');return '<article><span>0'+(i+1)+'</span><h3>'+esc(title)+'</h3><p>'+esc(body)+'</p></article>';}).join('')+'</div></div></section>';
}
