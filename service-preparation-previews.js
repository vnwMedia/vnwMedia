(() => {
  const service=SERVICE_CATALOG.find(item=>document.body.dataset.page==='service-'+item.slug);
  const section=document.querySelector('#prepare-for-engagement');
  const option=document.body.dataset.preparationOption;
  if(!service||!section)return;
  const packs={
    'brand-strategy':['Brand history;Current offers;Existing brand documents','Customer questions;Sales objections;Competitor examples','Stakeholder names;Final approver;Rollout owner'],
    'graphic-design':['Logo source files;Brand guidelines;Approved fonts','Final copy;Output dimensions;Production deadlines','Photo licenses;Font permissions;Distribution channels'],
    'web-design':['Service facts;Staff details;Approved photography','CMS owner;Hosting contact;Analytics permissions','Booking tools;Integration contacts;Launch restrictions'],
    'ecommerce':['Product spreadsheet;Variant and SKU records;Product photography','Shipping regions;Payment provider;Approved returns policy','Migration inventory;Cutover contact;Order-processing schedule'],
    'website-maintenance':['Platform inventory;Subscription owners;Integration list','Authorized requester;Critical functions;Escalation contact','Backup location;Hosting owner;Recovery access'],
    'app-design-development':['User roles;Essential tasks;Administrator requirements','API contacts;Data sources;Authentication requirements','Product owner;Acceptance reviewer;Support contact'],
    'landing-pages':['Offer details;Eligibility rules;Expiry date','Ad examples;Target audience;Primary conversion goal','Submission recipient;Qualification rules;Data destination'],
    'social-media':['Current offers and service updates;Approved photos or raw video;Customer stories with permission','One named content approver;Feedback deadlines;Launch dates and seasonal priorities','Business-profile ownership;Role-based account invitations;Filming, inbox, and paid-media boundaries'],
    'social-media-consultation':['Team responsibilities;Available production time;Equipment constraints','Previous campaigns;Account exports;Inquiry records','Workshop attendees;Implementation owner;Unresolved team questions'],
    'community-management':['Covered channels;Response hours;Language requirements','Approved answers;Escalation contacts;Refund boundaries','Private-channel procedure;Record access owner;Sensitive-data restrictions'],
    'seo':['Priority services;Target locations;Business capacity','Search Console access;Analytics access;Migration history','Developer contact;Content approver;Publishing owner'],
    'local-seo':['Staffed locations;Genuine service areas;Current opening hours','Approved business name;Phone and address records;Listing owners','Local project examples;Location-specific services;Customer questions'],
    'technical-seo':['Read-only analytics access;Staging contact;Development owner','Migration dates;Changed URLs;Known indexing issues','Release approver;Testing environment;Rollback procedure'],
    'content-seo':['Subject-matter reviewers;Verified service facts;Original references','Page inventory;Existing resources;URLs worth preserving','Writer responsibilities;Approval capacity;CMS publisher'],
    'google-business-profile':['Verified owner;Profile access invitation;Ownership issues','Location details;Service list;Holiday or closure dates','Current business photos;Usage permissions;Offer approver'],
    'yelp-seo':['Claimed business page;Profile owner;Duplicate-listing details','Actual service categories;Hours and amenities;Incorrect profile fields','Recent venue photos;Product or service photos;Usage permissions'],
    'aeo':['Sales questions;Support questions;Common follow-up questions','Expert reviewer;Approved references;Claim restrictions','Existing answer pages;Current FAQ markup;Topic ownership'],
    'geo':['Approved business facts;Credentials and affiliations;Named reviewers','Original research;Publishable case examples;Expert explanations','Prompt sample;Evaluation tools;Markets and dates'],
    'aio':['Public page inventory;Technical contact;Rendering restrictions','Business fact owners;Credential reviewers;Update responsibilities','Restricted subject areas;Human-review requirements;Automation limits'],
    'reputation-management':['Review-profile owners;Existing monitoring tools;Platform support issues','Complaint investigator;Sensitive-response approver;Resolution contact','Testimonial permissions;Privacy restrictions;Customer escalation route'],
    'lead-generation':['Useful-lead definition;Excluded inquiries;Target geography','Lead recipient;Response owner;Sales-outcome records','Deal-value assumptions;Sales-cycle estimates;Test budget'],
    'google-ppc':['Google Ads invitation;Analytics permissions;Billing owner','Geographic limits;Excluded services;Approved offer terms','Media budget;Management scope;Conversion definition'],
    'paid-social':['Business-page ownership;Ad-account permissions;Billing contact','Approved creative;Usage rights;Offer terms','Test budget;Audience restrictions;Experiment hypotheses'],
    'email-marketing':['Subscriber source;Permission records;Inactive-contact flags','Domain administrator;Sender address;Platform owner','Offer calendar;Inventory restrictions;Final approver'],
    'text-marketing':['Opt-in source;Recorded disclosures;Business compliance reviewer','Sending platform;Business registration details;Sender owner','Reply owner;Coverage hours;Opt-out escalation process'],
    'crm-automation':['System inventory;Field definitions;Authoritative data sources','Record owners;Sales-stage definitions;Exception contacts','Deduplication rules;Backup plan;Migration approval'],
    'content-writing':['Verified source facts;Interview contacts;Reference examples','Preferred writing examples;Audience knowledge;Terms to avoid','Factual reviewer;Final approver;Publication owner'],
    'video-editing':['Organized raw footage;Original audio;Reference edits','Talent releases;Music licenses;Stock-asset permissions','Aspect ratios;Required durations;Delivery and approval dates']
  };
  const icons=[
    '<rect x="9" y="13" width="46" height="38" rx="5"/><path d="M9 24h46M19 13V9h13l6 4"/><path d="m21 39 7 7 15-17"/>',
    '<rect x="10" y="12" width="44" height="42" rx="5"/><path d="M10 24h44M21 8v9m22-9v9"/><path d="M20 34h6m10 0h7M20 44h6m10 0h7"/>',
    '<rect x="12" y="25" width="40" height="30" rx="5"/><path d="M22 25v-7a10 10 0 0 1 20 0v7"/><circle cx="32" cy="38" r="3"/><path d="M32 41v5"/>'
  ];
  const labels=['Gather the essentials','Agree the review rhythm','Confirm the handoff'];
  const entries=SERVICE_STORY_CONTENT[service.slug][1];
  const artwork=i=>'<div class="prep-art" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">'+icons[i]+'</svg></div>';
  section.className='prep-review prep-review-'+option+' section';
  section.innerHTML='<div class="shell"><div class="prep-review-tools"><span>DESIGN '+option+' / '+['','Preparation folders','Kickoff briefing','Readiness checklist'][option]+'</span><label>Service example <select aria-label="Service example">'+SERVICE_CATALOG.map(s=>'<option value="'+s.slug+'" '+(s.slug===service.slug?'selected':'')+'>'+esc(s.name)+'</option>').join('')+'</select></label></div><header class="prep-heading"><p class="section-tag">Before we begin</p><h2>What to prepare for '+esc(service.name)+'.</h2><p>Bring the right information, name the right people, and settle key responsibilities before kickoff. These preparation notes are tailored to your '+esc(service.name)+' engagement.</p></header><div class="prep-layout">'+(option==='2'?'<aside class="prep-brief">'+artwork(0)+'<p class="prep-small">YOUR KICKOFF BRIEF</p><h3>A clear start.<br>Fewer loose ends.</h3><p>You do not need every detail ready to make an inquiry. We will identify gaps together and agree what is needed before production starts.</p><a class="pill pill-blue" href="../contact.html">Talk through your project <span>↗</span></a></aside>':'')+'<div class="prep-cards">'+entries.map((entry,i)=>{const [title,body]=entry.split('|');return '<article><div class="prep-card-top"><span class="prep-index">0'+(i+1)+'</span>'+artwork(i)+'</div><p class="prep-small">'+labels[i]+'</p><h3>'+esc(title)+'</h3><p>'+esc(body)+'</p><ul>'+packs[service.slug][i].split(';').map((item,j)=>option==='3'?'<li><label><input type="checkbox" aria-label="'+esc(item)+'"><span>'+esc(item)+'</span></label></li>':'<li><span aria-hidden="true">✓</span>'+esc(item)+'</li>').join('')+'</ul></article>';}).join('')+'</div></div><footer class="prep-footer"><p>'+(option==='3'?'<span class="prep-progress">0 of 9 preparation items checked</span>':'Not sure what you already have? We can help you identify the gaps.')+'</p><a class="pill pill-blue" href="../contact.html">Plan the next step <span>↗</span></a></footer></div>';
  const heading=section.querySelector('h2');
  const fitHeading=()=>{
    heading.style.fontSize='';
    if(window.innerWidth<1001)return;
    let size=parseFloat(getComputedStyle(heading).fontSize);
    while(heading.scrollWidth>heading.clientWidth&&size>24){size-=.5;heading.style.fontSize=size+'px';}
  };
  document.fonts.ready.then(fitHeading);
  window.addEventListener('resize',fitHeading);
  section.querySelector('select').addEventListener('change',e=>{const url=new URL(location.href);url.searchParams.set('service',e.target.value);url.hash='prepare-for-engagement';location.href=url.href;});
  section.querySelectorAll('input[type="checkbox"]').forEach(input=>input.addEventListener('change',()=>{section.querySelector('.prep-progress').textContent=section.querySelectorAll('input:checked').length+' of 9 preparation items checked';}));
})();
