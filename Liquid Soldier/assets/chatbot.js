(() => {
  "use strict";
  const cfg = Object.assign({leadEndpoint:"",requestHeaders:{},typingMinMs:420,typingMaxMs:1450,persistSession:true,demoSubmissionWhenEndpointMissing:true}, window.LIQUID_SOLDIER_CHAT_CONFIG||{});
  const $ = s => document.querySelector(s);
  const widget=$("#chatWidget"), launcher=$("#chatLauncher"), messages=$("#messages"), form=$("#chatForm"), input=$("#userInput"), send=$("#sendBtn");
  const STORE="liquidSoldierProductionChatV3";
  const state={started:false,currentIntent:null,previousIntent:null,pendingIntent:null,history:[],transcript:[],entities:{},lead:null,pausedLead:null,submitting:false,open:false};
  let knowledge=null, busy=false, generation=0;
  const synonyms={buy:"shop",purchase:"shop",refund:"return",package:"order",delivery:"shipping",job:"career",work:"career",seller:"vendor",merchant:"vendor",weed:"cbd",hemp:"cbd",vitamin:"supplement",pr:"public relations",tech:"technology",franchize:"franchise",franshise:"franchise",supliment:"supplement",suppliment:"supplement",shiping:"shipping",retun:"return",refnd:"refund",costumer:"customer"};
  const quickRoutes={
    "what do you do":"company_services","do you have this":"product_availability","is my card safe":"payment_security","customer service information":"customer_service","customer service":"customer_service","customer support":"customer_service","support contact":"customer_service","support phone number":"customer_service","contact information":"customer_service","email address":"customer_service","phone number":"customer_service",
    "package never arrived":"order_tracking","order never arrived":"order_tracking","not received":"order_tracking","tracking":"order_tracking","track order":"order_tracking","wrong item":"wrong_missing_item","wrong product":"wrong_missing_item","missing item":"wrong_missing_item","shipping time":"shipping_time","shipping cost":"shipping_cost","free shipping code":"coupon_promotion","order help":"order_support_overview","order support":"order_support_overview","orders":"order_support_overview","shipping":"shipping_overview","shipping information":"shipping_overview","marketplace returns":"marketplace_return_policy","seller refund policy":"marketplace_return_policy","vendor return policy":"marketplace_return_policy","cbd returns":"cbd_returns","returns":"return_refund","return policy":"return_refund","refunds":"return_refund",
    "marketplace customer service":"marketplace_support","marketplace support":"marketplace_support","vendor support":"marketplace_support","marketplace categories":"marketplace_categories","marketplace shipping":"marketplace_vendor_shipping","marketplace privacy":"marketplace_security_privacy","marketplace security":"marketplace_security_privacy","marketplace dispute":"marketplace_dispute","marketplace reviews":"marketplace_review","marketplace return policy":"marketplace_return_policy","marketplace return":"marketplace_return_policy","shop marketplace":"marketplace_overview","market place":"marketplace_overview","marketplace":"marketplace_overview","vendor dashboard":"vendor_dashboard","vendor password":"vendor_password","vendor payout":"vendor_payments","vendor payment":"vendor_payments","vendor requirements":"vendor_requirements","vendor documents":"vendor_requirements","vendor approval":"vendor_approval","vendor status":"vendor_approval","vendor listings":"vendor_listing_help","vendor application":"vendor_apply","vendor login":"vendor_login","become a vendor":"vendor_apply","vendor":"marketplace_overview",
    "franchise application":"franchise_apply","franchise cost":"franchise_cost","franchise fee":"franchise_cost","franchise training":"franchise_training","franchise support":"franchise_training","franchise territory":"franchise_territory","franchise financing":"franchise_financing","franchise earnings":"franchise_earnings","franchise profit":"franchise_earnings","franchise timeline":"franchise_timeline","franchise":"franchise_overview","franchising":"franchise_overview",
    "minimum investment":"investment_terms","investment terms":"investment_terms","investment returns":"investment_returns","investor returns":"investment_returns","investment support":"investment_overview","shareholder help":"existing_shareholder","invest":"investment_overview","investing":"investment_overview","investor":"investment_overview","investment":"investment_overview",
    "coffee subscription":"coffee_subscription","coffee caffeine":"coffee_caffeine","coffee blends":"coffee_blends","coffee":"coffee_overview","can i take this":"supplement_safety","are supplements safe":"supplement_safety","supplements safe":"supplement_safety","supplement side effects":"supplement_side_effect","supplement safety":"supplement_safety","supplement dosage":"supplement_directions","supplement directions":"supplement_directions","supplement ingredients":"product_ingredients","vitamins":"supplement_overview","supplement":"supplement_overview","supplements":"supplement_overview","can i take cbd with medication":"cbd_drug_interaction","cbd with medication":"cbd_drug_interaction","cbd medication":"cbd_drug_interaction","is marketplace safe":"marketplace_security_privacy","cbd safe":"cbd_drug_interaction","cbd safety":"cbd_drug_interaction","cbd order support":"cbd_customer_service","cbd customer service":"cbd_customer_service","cbd support":"cbd_customer_service","itsallmedical customer service":"cbd_customer_service","itsallmedical support":"cbd_customer_service","cbd age":"cbd_age_restriction","cbd legal":"cbd_legality","cbd legality":"cbd_legality","cbd coa":"cbd_lab_coa","cbd lab results":"cbd_lab_coa","cbd interactions":"cbd_drug_interaction","cbd return policy":"cbd_returns","cbd return":"cbd_returns","cannabidiol":"cbd_overview","cbd":"cbd_overview","itsallmedical":"cbd_overview","clothing":"clothing","collectibles":"collectibles",
    "apply for a job":"career_apply","career application":"career_apply","employment opportunities":"careers_openings","remote job":"remote_work","remote work":"remote_work","internships":"internship","internship":"internship","careers":"careers_openings","career":"careers_openings","jobs":"careers_openings","hiring":"careers_openings","human resources":"human_resources","hr":"human_resources",
    "liquid soldier media":"media_overview","media":"media_overview","press":"press_inquiry","public relations":"public_relations","communications":"public_relations","publicity":"public_relations","marketing":"marketing","social media":"social_media","branding":"social_branding",
    "customer experience":"customer_experience","sales":"sales_team","wholesale":"sales_team","website is broken":"technology_it","website broken":"technology_it","site not working":"technology_it","report website issue":"technology_it","technical support":"technology_it","tech support":"technology_it","technology":"technology_it","it department":"technology_it","it team":"technology_it","it support":"technology_it","information technology":"technology_it","web development":"web_design","web design":"web_design","finance":"finance","accounts payable":"accounting","accounts receivable":"accounting","accounting":"accounting","r d":"product_development","research and development":"product_development","m a":"mergers_acquisitions","m and a":"mergers_acquisitions","mergers and acquisitions":"mergers_acquisitions","product development":"product_development",
    "returns and refunds":"return_refund","donation tax deductible":"donation_receipt","donation receipt":"donation_receipt","donation allocation":"donation_allocation","donation percentage":"donation_allocation","donation":"donate","donations":"donate","donate":"donate","volunteer":"volunteer","volunteering":"volunteer","education":"education_programs","community outreach":"community_partnership",
    "why liquid soldier":"mission_values","chairman":"leadership","ceo":"executive_team","president":"executive_team","company leaders":"leadership","who runs the company":"leadership","leadership":"leadership","executive team":"executive_team","executive committee":"executive_committee","advisory committee":"advisory_committee","medical committee":"medical_committee","health and wellness":"health_wellness_department",
    "departments":"departments_overview","department directory":"departments_overview","policies":"policies_overview","privacy":"privacy_policy","privacy policy":"privacy_policy","terms":"terms","terms and conditions":"terms","accessibility":"accessibility","cookie policy":"cookie_policy"
  };

  const STOP_WORDS=new Set(["a","an","and","are","as","at","be","can","could","do","does","for","from","have","i","in","is","it","me","my","of","on","or","please","some","that","the","this","to","want","was","what","when","where","which","who","why","with","would","you","your"]);
  const FILLER_WORDS=new Set([...STOP_WORDS,"about","actually","connect","department","division","give","help","info","information","like","looking","need","now","office","show","team","tell"]);
  function save(){if(!cfg.persistSession)return;try{localStorage.setItem(STORE,JSON.stringify(state))}catch{}}
  function restore(){if(!cfg.persistSession)return;try{const saved=JSON.parse(localStorage.getItem(STORE)||"{}");Object.assign(state,saved);if(!state.pausedLead&&state.entities?.pausedLead){state.pausedLead=state.entities.pausedLead;delete state.entities.pausedLead}state.submitting=false}catch{}}
  function normalize(s){return String(s||"").toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean).map(w=>synonyms[w]||w).join(" ")}
  function distance(a,b){const m=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){let prev=m[0];m[0]=i;for(let j=1;j<=b.length;j++){const t=m[j];m[j]=Math.min(m[j]+1,m[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));prev=t}}return m[b.length]}
  function contentTokens(s){return normalize(s).split(" ").filter(t=>t&&!STOP_WORDS.has(t))}
  function tokenScore(q,text){const qa=new Set(contentTokens(q)),ta=contentTokens(text);if(!qa.size||!ta.length)return 0;let hit=0;for(const t of ta){if(qa.has(t))hit+=t.length>5?2:1;else if(t.length>4&&[...qa].some(x=>x.length>4&&distance(t,x)<=1))hit+=.65}return hit/Math.max(2,Math.sqrt(ta.length))}
  function isElliptical(n){return /\b(it|its|that|this|those|them|there|one|ones)\b/.test(n)||/^(what about|how about|and what|also what)\b/.test(n)||/^(price|cost|availability|available|returns?|refunds?|safe|safety|support|order help)$/.test(n)}
  function scoreIntent(q,intent){const nq=` ${normalize(q)} `;let s=0;for(const e of intent.examples){const ne=normalize(e);s=Math.max(s,tokenScore(q,e)*4+(ne.includes(" ")&&nq.includes(` ${ne} `)?4:0))}for(const k of intent.keywords){const nk=normalize(k);s+=tokenScore(q,k)*1.4+(nk.includes(" ")&&nq.includes(` ${nk} `)?1.5:0)}if(state.currentIntent===intent.id&&isElliptical(normalize(q)))s+=2;return s}
  function ranked(q,category=null){return knowledge.intents.filter(i=>!["Conversation Routing","Lead Capture","Safety"].includes(i.category)&&(!category||i.category===category)).map(i=>({intent:i,score:scoreIntent(q,i)})).sort((a,b)=>b.score-a.score)}
  function byId(id){return knowledge.intents.find(x=>x.id===id)}
  function explicitIntent(q){
    const n=normalize(q);
    if(q.trim()==="IT")return byId("technology_it");
    const meaningful=n.split(" ").filter(t=>!FILLER_WORDS.has(t)).join(" ");
    if(quickRoutes[n])return byId(quickRoutes[n]);
    if(!isElliptical(n)&&quickRoutes[meaningful])return byId(quickRoutes[meaningful]);
    const padded=` ${n} `;
    for(const [phrase,id] of Object.entries(quickRoutes).sort((a,b)=>b[0].length-a[0].length)){
      if(phrase.includes(" ")&&padded.includes(` ${phrase} `))return byId(id);
    }
    return null;
  }
  function directIntent(q){
    const explicit=explicitIntent(q);
    if(explicit)return explicit;
    const n=normalize(q),current=byId(state.currentIntent);
    if(!isElliptical(n))return null;
    const activeProduct=["Coffee","Supplements","CBD"].includes(current?.category)?current.category:(["product_price","product_availability","product_ingredients"].includes(current?.id)?state.entities.productCategory:null);
    if(activeProduct){
      if(/\b(price|cost|how much)\b/.test(n)){state.entities.productCategory=activeProduct;return byId("product_price")}
      if(/\b(available|availability|stock|sold out)\b/.test(n)){state.entities.productCategory=activeProduct;return byId("product_availability")}
      if(/\b(return|returns|refund)\b/.test(n))return byId(activeProduct==="CBD"?"cbd_returns":"return_refund");
      if(/\b(safe|safety|can i take|interaction)\b/.test(n))return byId(activeProduct==="CBD"?"cbd_drug_interaction":activeProduct==="Supplements"?"supplement_safety":"product_ingredients");
    }
    if(current?.category==="CBD"&&/\b(customer service|support|order help)\b/.test(n))return byId("cbd_customer_service");
    if(current?.category==="Marketplace"&&/\b(customer service|support|marketplace help)\b/.test(n))return byId("marketplace_support");
    if(current?.category==="Marketplace"&&/\b(return|refund)\b/.test(n))return byId("marketplace_return_policy");
    return null;
  }
  function add(text,who="bot",record=true){const row=document.createElement("div");row.className=`message-row ${who}`;if(who==="bot"){const av=document.createElement("img");av.className="avatar";av.src="assets/liquid-soldier-logo.webp";av.alt="";row.appendChild(av)}const b=document.createElement("div");b.className="bubble";b.textContent=text;row.appendChild(b);messages.appendChild(row);if(record){state.transcript.push({speaker:who==="bot"?"Bot":"Visitor",message:text,at:new Date().toISOString()});save()}messages.scrollTop=messages.scrollHeight}
  function typingDelay(text){return Math.min(cfg.typingMaxMs,Math.max(cfg.typingMinMs,260+text.length*7+Math.random()*220))}
  function bot(text,after){const run=generation;busy=true;send.disabled=true;const t=document.createElement("div");t.className="typing";t.innerHTML="<i></i><i></i><i></i>";messages.appendChild(t);messages.scrollTop=messages.scrollHeight;setTimeout(()=>{t.remove();if(run!==generation)return;add(text);busy=false;send.disabled=state.submitting;input.focus();after&&after()},typingDelay(text))}
  function openLink(url){window.open(url,"_blank","noopener")}
  function chips(items,intent){
    document.querySelectorAll(".chips").forEach(x=>x.remove());
    const wrap=document.createElement("div");wrap.className="chips";
    (items||[]).slice(0,6).forEach(item=>{
      const data=typeof item==="string"?{label:item,action:"system"}:item,label=data.label;
      const b=document.createElement("button");b.className="chip";b.type="button";b.textContent=label;
      b.onclick=()=>{
        wrap.remove();add(label,"user");
        if(data.action==="intent"&&data.intentId){const target=byId(data.intentId);if(target){if(state.pendingIntent===target.id)state.pendingIntent=null;present(target)}else routeWithin(label,intent);return}
        if(data.action==="link"&&data.url){openLink(data.url);bot("I opened the requested page or contact option. You can keep chatting here if you need anything else.");return}
        if(data.action==="lead"){beginLead(intent);return}
        if(data.action==="system"){systemAction(data.command||label,intent);return}
        if(data.action==="set_entity"){state.entities[data.field||"requestType"]=data.value||label;save();bot(data.response||"Got it. I’ve saved that for this conversation.",()=>chips(data.nextButtons||[{label:"Contact the team",action:"lead"},{label:"Ask another question",action:"system"}],intent));return}
        routeWithin(label,intent);
      };
      wrap.appendChild(b);
    });
    messages.appendChild(wrap);messages.scrollTop=messages.scrollHeight;
  }
  function routeWithin(label,intent){if(!intent){route(label);return}if(/^yes$/i.test(label)&&intent.leadCapture!=="none"){beginLead(intent);return}if(/^(no|no thanks|not now)$/i.test(label)){bot("No problem. You can ask another question or choose a different topic.",()=>mainChips());return}const direct=directIntent(label);if(direct&&direct.id!==intent.id){present(direct);return}const list=ranked(`${label} ${intent.category}`,intent.category),top=list[0];if(top&&top.score>=1.25&&top.intent.id!==intent.id){present(top.intent);return}bot(`Tell me a little more about what you need regarding ${intent.category.toLowerCase()}, and I’ll guide you to the right answer.`,()=>chips([{label:"Contact the team",action:"lead"},{label:"Choose another topic",action:"system"}],intent))}
  function previousBusinessIntent(){const candidate=byId(state.previousIntent);return candidate&&!['Conversation Routing','Lead Capture','Safety'].includes(candidate.category)?candidate:null}
  function systemAction(command,intent){
    const key=normalize(command);
    if(key==="close chat"){close();return}
    if(key==="try again"&&state.lead){submitLead();return}
    if(key==="send request"&&state.lead){submitLead();return}
    if(key==="cancel request"){state.lead=null;state.pausedLead=null;state.submitting=false;save();bot("No problem. The contact request was canceled.",()=>mainChips());return}
    if(key==="contact us"||key==="open contact us"){openLink("https://liquidsoldier.com/contact-us/");bot("I opened the Contact Us page. You can keep chatting here if you need anything else.");return}
    if(key==="resume contact questions"&&state.pausedLead){state.lead=state.pausedLead;state.pausedLead=null;save();askField();return}
    if(key==="resume previous topic"&&state.previousIntent){present(byId(state.previousIntent));return}
    if(key==="current topic"){const target=!['Conversation Routing','Lead Capture','Safety'].includes(byId(state.currentIntent)?.category)?byId(state.currentIntent):previousBusinessIntent();if(target){present(target);return}}
    if(key==="previous topic"&&state.previousIntent){present(byId(state.previousIntent));return}
    if(key==="first topic"&&state.currentIntent){present(byId(state.currentIntent));return}
    if((key==="second topic"||key.startsWith("next "))&&state.pendingIntent){const target=byId(state.pendingIntent);state.pendingIntent=null;present(target);return}
    if(key==="shop"||key==="shop products"){present(byId("product_overview"));return}
    if(key==="order help"){present(byId("order_support_overview"));return}
    if(key==="business opportunity"||key==="opportunities"){bot("Which opportunity would you like to explore?",()=>chips([{label:"Franchising",action:"intent",intentId:"franchise_overview"},{label:"Investing",action:"intent",intentId:"investment_overview"},{label:"Become a vendor",action:"intent",intentId:"vendor_apply"},{label:"Careers",action:"intent",intentId:"careers_openings"}],null));return}
    if(key==="closest page"||key==="open live page"){const target=byId(state.entities.liveTargetId)||previousBusinessIntent()||intent;openLink(target?.url||"https://liquidsoldier.com/");bot("I opened the closest current Liquid Soldier page. You can keep chatting here if you need anything else.");return}
    if(key==="contact team"||key==="request follow up"||key==="yes"){beginLead(byId(state.entities.liveTargetId)||previousBusinessIntent()||intent||byId("human_contact"));return}
    if(key==="report product later"){beginLead(byId("supplement_side_effect"));return}
    if(key==="i found it"){bot("Great. What else can I help with?",()=>mainChips());return}
    if(key==="not now"||key==="no"){state.pausedLead=null;save();bot("No problem. What else can I help with?",()=>mainChips());return}
    if(key==="clarify"||key==="something else"){bot("Tell me what you’re trying to accomplish in your own words, and I’ll narrow it down.",()=>mainChips());return}
    bot("What can I help you with next?",()=>mainChips());
  }
  function mainChips(){chips([{label:"Shop products",action:"intent",intentId:"product_overview"},{label:"Order help",action:"intent",intentId:"order_support_overview"},{label:"Marketplace",action:"intent",intentId:"marketplace_overview"},{label:"Franchising",action:"intent",intentId:"franchise_overview"},{label:"Investing",action:"intent",intentId:"investment_overview"},{label:"Customer service",action:"intent",intentId:"customer_service"}],null)}
  function buttonsFor(intent,extra=[]){const items=[...extra,...(intent.buttons||[])];if(state.pausedLead)items.unshift({label:"Resume contact questions",action:"system"});if(intent.leadCapture!=="none"&&!['Conversation Routing','Lead Capture','Safety'].includes(intent.category)&&!items.some(x=>x.action==="lead"))items.push({label:"Contact the team",action:"lead"});const seen=new Set();return items.filter(x=>{const key=x.label.toLowerCase();if(seen.has(key))return false;seen.add(key);return true})}
  function present(intent,prefix="",extraButtons=[]){if(!intent){present(byId("vague_request"));return}if(["Coffee","Supplements","CBD"].includes(intent.category))state.entities.productCategory=intent.category;if(!prefix&&["product_price","product_availability"].includes(intent.id)&&state.entities.productCategory)prefix=`For ${state.entities.productCategory},`;if(state.currentIntent&&state.currentIntent!==intent.id)state.previousIntent=state.currentIntent;state.currentIntent=intent.id;state.history.push(intent.id);save();const message=(prefix?prefix+"\n\n":"")+intent.response+(intent.followUps?.[0]?"\n\n"+intent.followUps[0]:"");bot(message,()=>chips(buttonsFor(intent,extraButtons),intent))}
  function isExit(q){const n=normalize(q);return /^(thanks|thank you|thx)( for (your )?(help|that|the information|everything))?$/.test(n)||/^(no thanks|no thank you|thats all|that is all|thats all for now|all set|nothing else|im done|done|bye|goodbye)$/.test(n)}
  function isEmergency(q){return /(cant|cannot|trouble|difficulty) breathe|chest pain|fainting|passed out|unconscious|severe swelling|severe allergic|seizure|overdose|medical emergency/i.test(normalize(q))}
  function isVague(q){const n=normalize(q);return /^(help|help me|i need help|i have a question|question|not sure|something else|hi|hello|hey)$/.test(n)||contentTokens(n).length===0}
  function isLiveDataRequest(q){const n=normalize(q);return /\b(current|currently|latest|today|right now|up to date|in stock now)\b/.test(n)&&/\b(chairman|ceo|president|executive|leader|leadership|price|cost|stock|available|availability|inventory|terms|minimum|hours|opening|openings)\b/.test(n)}
  function likelyNewQuestion(q){const n=normalize(q);return q.includes("?")||/^(actually|instead|never mind|new question|change topic|switch topic|wait|hold on|can you|could you|would you|tell me about)\b/.test(n)}
  function detectMultipleIntents(q){
    if(!/\b(and|also|plus)\b/i.test(q))return [];
    const protectedText=q.replace(/\bm\s+and\s+a\b/ig,"M&A");
    const parts=protectedText.split(/\b(?:and|also|plus)\b|;/i).map(x=>x.trim()).filter(Boolean);
    if(parts.length<2)return [];
    const found=[];
    for(const part of parts){let intent=explicitIntent(part);if(!intent){let list=ranked(part,found[0]?.category||null),top=list[0];if(!top||top.score<1.35){list=ranked(part);top=list[0]}if(top?.score>=1.35)intent=top.intent}if(intent&&!found.some(x=>x.id===intent.id))found.push(intent)}
    return found.slice(0,3);
  }
  function intentTitle(intent){const named={return_refund:"Returns & refunds",shipping_overview:"Shipping",accounting:"Accounting",press_inquiry:"Press inquiries",franchise_overview:"Franchising",franchise_cost:"Franchise costs",investment_overview:"Investing",investment_terms:"Investment terms",marketplace_overview:"Marketplace",vendor_apply:"Vendor applications"};return named[intent.id]||intent.id.replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}
  function handle(raw){
    const q=raw.trim();if(!q||busy||state.submitting)return;
    if(isEmergency(q)){if(state.lead){state.pausedLead=state.lead;state.lead=null;save()}present(byId("medical_emergency"));return}
    if(isExit(q)){state.lead=null;state.pausedLead=null;save();present(byId("gratitude_exit"));return}
    if(state.lead){const n=normalize(q);if(/^(cancel|cancel request|stop|never mind)$/.test(n)){systemAction("cancel request");return}if(likelyNewQuestion(q)){state.pausedLead=state.lead;state.lead=null;save();bot("No problem — I’ve paused the contact questions while we handle that.",()=>route(q));return}capture(q);return}
    if(state.pausedLead&&/^(resume|continue|resume contact questions)$/.test(normalize(q))){systemAction("resume contact questions");return}
    const current=byId(state.currentIntent),n=normalize(q);
    if(/^(yes|yes please|sure|okay|ok)$/.test(n)&&current?.leadCapture!=="none"){beginLead(current);return}
    if(/^(no|no thanks|not now)$/.test(n)){bot("No problem. What else can I help with?",()=>mainChips());return}
    route(q);
  }
  function route(q){
    if(isExit(q)){present(byId("gratitude_exit"));return}
    if(isEmergency(q)){present(byId("medical_emergency"));return}
    const n=normalize(q),exact=quickRoutes[n]?byId(quickRoutes[n]):null;
    if(exact){state.pendingIntent=null;present(exact);return}
    const multiple=detectMultipleIntents(q);
    if(multiple.length>1){const [first,second]=multiple;state.pendingIntent=second.id;const firstName=intentTitle(first),secondName=intentTitle(second),next={label:`Next: ${secondName}`,action:"intent",intentId:second.id};present(first,`I found two topics: ${firstName} and ${secondName}. I’ll start with ${firstName}, then you can continue to ${secondName}.`,[next]);return}
    const direct=directIntent(q);
    if(isVague(q)){state.pendingIntent=null;present(byId("vague_request"));return}
    if(isLiveDataRequest(q)&&!["customer_service","cbd_customer_service","marketplace_support"].includes(direct?.id)){state.pendingIntent=null;state.entities.liveQuery=q;state.entities.liveTargetId=direct?.id||null;present(byId("live_data_guardrail"));return}
    if(direct){state.pendingIntent=null;present(direct);return}
    if(/\b(safe|safety|can i take|interaction)\b/.test(n)){state.pendingIntent=null;present(byId("vague_request"),"To give you the right safety guidance, tell me whether you mean coffee, a supplement, CBD, checkout security, or something else.");return}
    const list=ranked(q),top=list[0],runner=list.find(x=>x.intent.id!==top?.intent.id);
    if(!top||top.score<1.25){state.pendingIntent=null;present(byId(isVague(q)?"vague_request":"unsupported_question"));return}
    if(runner?.score>=1.25&&top.score-runner.score<.3&&runner.intent.category!==top.intent.category){state.pendingIntent=null;present(byId("vague_request"),`I found two close possibilities: ${top.intent.category} and ${runner.intent.category}.`);return}
    state.pendingIntent=null;present(top.intent);
  }
  function beginLead(intent){const fallback=["name","email","phone"];let target=intent;if(!target||['Conversation Routing','Lead Capture','Safety'].includes(target.category))target=previousBusinessIntent()||byId("human_contact");const requested=target?.leadFields?.length?target.leadFields:fallback,fields=[...new Set([...fallback,...requested])];state.lead={intentId:target?.id||state.currentIntent,department:target?.department||"Customer Service",fields,index:0,data:{},startedAt:new Date().toISOString(),submissionId:(crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`),promptedField:null};state.pausedLead=null;state.submitting=false;save();askField()}
  const labels={name:"What’s your name?",email:"What email address should the team use?",phone:"What is the best phone number?",orderNumber:"What is the order number?",issue:"Briefly, what happened?",city:"Which city are you considering?",state:"Which state?",timeline:"What is your preferred timeline?",businessExperience:"Have you owned or operated a business before?",organization:"What company or organization are you with?",investmentInterest:"What type of investment information are you seeking?",businessName:"What is your business name?",businessCategory:"What products or services do you offer?",website:"What is your website? Type “none” if you don’t have one.",amount:"What amount is this about?",applicationDate:"When did you apply?",assistiveTechnology:"Which assistive technology are you using?",audience:"Who is the intended audience?",availability:"What availability do you have in mind?",conceptSummary:"Please share a brief, non-confidential concept summary.",date:"What date is relevant?",deadline:"What deadline are you working with?",device:"Which device and browser are you using?",donationDate:"When was the donation made?",estimatedVolume:"What approximate volume are you considering?",event:"Which event is this about?",field:"Which professional field or specialty?",intendedUse:"How do you intend to use the brand assets?",interest:"What specifically interests you?",invoiceNumber:"What is the invoice number? Type “none” if unavailable.",location:"Which location is this about?",lotNumber:"What lot number is on the product? Type “unknown” if unavailable.",orderDate:"What was the approximate order date?",orderTotal:"What was the approximate order total?",outlet:"Which publication or media outlet?",page:"Which page or URL is affected?",paymentPeriod:"Which payment period is this about?",photosAvailable:"Do you have photos available?",platform:"Which platform is involved?",portfolioUrl:"What portfolio URL should the team review? Type “none” if unavailable.",product:"Which product is involved?",proposal:"Please give a brief, non-confidential proposal summary.",purpose:"What is the purpose of the request?",reaction:"Please briefly describe the reaction.",request:"Please briefly describe your request.",requestType:"Which type of request is this?",requestedPerson:"Who are you trying to reach?",resumeUrl:"What résumé URL should the team review? Type “none” if unavailable.",role:"Which role are you interested in?",summary:"Please share a brief, non-confidential summary.",timeframe:"What timeframe are you considering?",topic:"What topic would you like to discuss?",transactionType:"What type of transaction are you proposing?",url:"What public URL is relevant?",vendor:"Which vendor is involved?"};
  function leadPrompt(l=state.lead){if(!l||l.index>=l.fields.length)return null;const f=l.fields[l.index];return labels[f]||`Please provide ${f.replace(/([A-Z])/g," $1").toLowerCase()}.`}
  function askField(){const l=state.lead;if(!l)return;if(l.index>=l.fields.length){submitLead();return}const f=l.fields[l.index],prompt=leadPrompt(l);l.promptedField=f;save();bot(prompt)}
  function capture(value){const l=state.lead,f=l.fields[l.index];if(f==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){bot("Please enter a valid email address so the team can reply.");return}if(f==="phone"&&value.replace(/\D/g,"").length<7){bot("Please enter a valid phone number, including area code when applicable.");return}l.data[f]=value;l.index++;l.promptedField=null;save();askField()}
  async function submitLead(){
    const l=state.lead;if(!l||state.submitting)return;
    state.submitting=true;save();
    const payload={source:"Liquid Soldier chatbot",submissionId:l.submissionId,submittedAt:new Date().toISOString(),pageUrl:location.href,intent:l.intentId,department:l.department,lead:l.data,entities:state.entities,intentHistory:state.history,transcript:state.transcript,userAgent:navigator.userAgent};
    bot("Submitting your information…",async()=>{try{const demo=!cfg.leadEndpoint;if(cfg.leadEndpoint){const res=await fetch(cfg.leadEndpoint,{method:"POST",headers:Object.assign({"Content-Type":"application/json"},cfg.requestHeaders),body:JSON.stringify(payload)});if(!res.ok)throw new Error(`Endpoint returned ${res.status}`)}else if(!cfg.demoSubmissionWhenEndpointMissing)throw new Error("Lead endpoint is not configured");else console.info("Liquid Soldier demo lead payload",payload);state.lead=null;state.pausedLead=null;state.submitting=false;save();const confirmation=demo?"Thank you! The prototype handoff completed successfully. Live delivery will begin when the secure client endpoint is connected.":"Thank you! Your information has been submitted successfully. A member of the appropriate Liquid Soldier team will contact you shortly.";bot(confirmation,()=>chips([{label:"Ask another question",action:"system"},{label:"Close chat",action:"system"}],byId("lead_success")))}catch(e){state.submitting=false;save();console.error(e);bot("I couldn’t complete the handoff yet. Please check the contact details and try again, or use the current Contact Us page so the team receives your request.",()=>chips([{label:"Try again",action:"system"},{label:"Open Contact Us",action:"system"},{label:"Cancel request",action:"system"}],byId("lead_failure")))}})
  }
  function start(){if(state.started)return;state.started=true;save();bot("Hi, welcome to Liquid Soldier.",()=>bot("What can we help you with? You can type any question or choose a starting point.",()=>mainChips()))}
  function restart(){generation++;busy=false;send.disabled=false;try{localStorage.removeItem(STORE)}catch{}const isOpen=state.open;Object.assign(state,{started:false,currentIntent:null,previousIntent:null,pendingIntent:null,history:[],transcript:[],entities:{},lead:null,pausedLead:null,submitting:false,open:isOpen});messages.innerHTML="";start()}
  function open(){state.open=true;widget.classList.add("open");widget.setAttribute("aria-hidden","false");launcher.classList.add("open");launcher.setAttribute("aria-expanded","true");$("#unread").hidden=true;save();start();setTimeout(()=>input.focus(),150)}
  function close(){state.open=false;widget.classList.remove("open");widget.setAttribute("aria-hidden","true");launcher.classList.remove("open");launcher.setAttribute("aria-expanded","false");save()}
  form.addEventListener("submit",e=>{e.preventDefault();const text=input.value.trim();if(!text||busy||state.submitting)return;input.value="";input.style.height="auto";add(text,"user");handle(text)});
  input.addEventListener("input",()=>{input.style.height="auto";input.style.height=Math.min(input.scrollHeight,92)+"px"});
  input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();form.requestSubmit()}});
  launcher.addEventListener("click",()=>state.open?close():open());$("#closeBtn").onclick=close;$("#restartBtn").onclick=restart;
  function initialize(data){
    if(!data||!Array.isArray(data.intents)||!data.intents.length)throw new Error("Knowledge base is empty");
    knowledge=data;restore();
    if(state.transcript.length)state.transcript.forEach(x=>add(x.message,x.speaker==="Visitor"?"user":"bot",false));
    if(state.lead){const prompt=leadPrompt(),last=state.transcript.at(-1);if(state.lead.index>=state.lead.fields.length){bot("Your contact details are ready. Send the request when you’re ready.",()=>chips([{label:"Send request",action:"system"},{label:"Cancel request",action:"system"}],byId(state.lead.intentId)))}else if(last?.speaker!=="Bot"||last.message!==prompt)askField()}
    if(state.open)open();
  }
  const embeddedKnowledge=window.LIQUID_SOLDIER_KNOWLEDGE;
  if(embeddedKnowledge?.intents?.length)initialize(embeddedKnowledge);
  else fetch("intents.json?v=20260903-6").then(r=>{if(!r.ok)throw new Error("Knowledge base not found");return r.json()}).then(initialize).catch(e=>{console.error(e);knowledge={intents:[]};add("The chatbot knowledge file could not load. Please refresh the page or contact Liquid Soldier for help.")});
})();
