'use strict';
(() => {
const $=selector=>document.querySelector(selector);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=value=>Number.isFinite(Number(value))?Number(value):0;
const fmt=value=>new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(num(value));
const colors=['#00aeef','#334f60','#9384cb','#7ba99b','#c5c6c1','#d9ad6b'];
const demo=document.body.dataset.portalMode!=='secure';
const state={view:'overview',workspaces:[],workspace:null,user:null,ready:false,configured:null,days:30,sequence:0,exportRows:[],demoMembers:[],memberMap:new Map(),demoConnections:new Set()};
const titles={overview:['Marketing overview','The big picture, with every channel in focus.'],analytics:['Website analytics','From first visit to the next step. Know what works.'],seo:['SEO performance','Understand how customers find your business in Google Search.'],ppc:['Google Ads','A clearer view of your advertising investment.'],business:['Business Profile','Turn local visibility into meaningful customer actions.'],connections:['Your connections','Your data sources, connected to the right client.'],admin:['Client management','Separate workspaces. Clear access. A better client experience.']};
const demoWorkspaces=[{id:'demo-local',name:'Local services · Demo'},{id:'demo-retail',name:'Retail & hospitality · Demo'}];
const errors={sign_in_required:'Your session has expired. Please sign in again.',invitation_required:'This Google account has not been invited. Contact your VNW Media team.',server_setup_required:'Secure sign-in is awaiting backend configuration.',analytics_not_connected:'Google Analytics is not connected to this client workspace yet.',google_reauthorization_required:'Google access needs to be authorized again by your VNW Media team.',property_access_denied:'The connected Google account cannot access this GA4 property. Check the property ID and its permissions.',workspace_not_found:'This workspace is unavailable or your access has changed.',rate_limited:'Please wait a minute before refreshing again.',google_rate_limited:'Google has temporarily limited report requests. Please try again shortly.',analytics_unavailable:'Google Analytics is temporarily unavailable. Please try again.',google_unavailable:'Google is temporarily unavailable. Please try again.',invalid_property:'Enter the numeric GA4 property ID, not a G- measurement ID.',analytics_consent_required:'Google Analytics permission was not granted.',offline_access_required:'Reconnect Google and allow offline Analytics access.',invalid_email:'Enter a valid email address.'};
async function api(path,method='GET',data){
 const response=await fetch(path,{method,credentials:'same-origin',headers:method==='GET'?{}:{'Content-Type':'application/json'},...(data?{body:JSON.stringify(data)}:{})});
 let result;try{result=await response.json();}catch{throw new Error('The reporting service is unavailable.');}
 if(!response.ok)throw Object.assign(new Error(errors[result.error]||'This request could not be completed. Please try again.'),{code:result.error});return result;
}
function selectWorkspaces(preferred){
 $('#workspace').innerHTML=state.workspaces.map(w=>`<option value="${esc(w.id)}">${esc(w.name)}</option>`).join('');
 state.workspace=state.workspaces.find(w=>w.id===preferred)||state.workspaces[0]||null;
 if(state.workspace)$('#workspace').value=state.workspace.id;
 $('#workspace').disabled=!state.workspaces.length;
 $('#workspace-detail').textContent=demo?'Example clients · Sample data':'Only your authorized workspaces';
}
function delta(value,previous){if(!previous)return 'No prior-period comparison';const change=(value-previous)/previous*100;return `<b class="${change<0?'down':''}">${change>=0?'↑':'↓'} ${Math.abs(change).toFixed(1)}%</b> vs. prior period`;}
function spark(points){const values=points.map(num),max=Math.max(1,...values),coords=values.map((v,i)=>`${i*200/Math.max(1,values.length-1)},${27-v/max*25}`).join(' ');return `<svg class="mini-spark" viewBox="0 0 200 30" preserveAspectRatio="none" aria-hidden="true"><polyline points="${coords}" fill="none" stroke="#00aeef" stroke-width="1.5"/></svg>`;}
function trendChart(points){
 if(!points.length)return '<p class="fine">No activity was returned for this period.</p>';
 const max=Math.max(1,...points.map(p=>num(p.value))),width=600,height=195,left=40,right=585,top=15,bottom=165;
 const xy=points.map((p,i)=>[left+i*(right-left)/Math.max(1,points.length-1),bottom-num(p.value)/max*(bottom-top)]);
 const line=xy.map(p=>p.join(',')).join(' '),area=`${left},${bottom} ${line} ${xy.at(-1)[0]},${bottom}`;
 const dateLabel=s=>/^\d{8}$/.test(s)?`${s.slice(4,6)}/${s.slice(6,8)}`:s;
 return `<svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Daily activity chart, ${esc(dateLabel(points[0].dimensions[0]))} through ${esc(dateLabel(points.at(-1).dimensions[0]))}. Exact values are in the table below.">${[0,.5,1].map(f=>`<line class="chart-grid" x1="${left}" y1="${bottom-f*(bottom-top)}" x2="${right}" y2="${bottom-f*(bottom-top)}"/><text x="0" y="${bottom-f*(bottom-top)+3}">${fmt(f*max)}</text>`).join('')}<polygon points="${area}" class="chart-area"/><polyline points="${line}" class="chart-line"/><text x="${left}" y="188">${esc(dateLabel(points[0].dimensions[0]))}</text><text text-anchor="end" x="${right}" y="188">${esc(dateLabel(points.at(-1).dimensions[0]))}</text></svg><details><summary>View daily values</summary><div class="table-wrap"><table><thead><tr><th>Date</th><th class="number">Activity</th></tr></thead><tbody>${points.map(p=>`<tr><td>${esc(p.dimensions[0])}</td><td class="number">${fmt(p.value)}</td></tr>`).join('')}</tbody></table></div></details>`;
}
function donut(channels){
 const total=channels.reduce((sum,p)=>sum+num(p.value),0);let offset=0;
 const circles=channels.map((p,i)=>{const share=total?num(p.value)/total*100:0;const part=`<circle r="54" cx="73" cy="73" fill="none" stroke="${colors[i%colors.length]}" stroke-width="17" pathLength="100" stroke-dasharray="${share} ${100-share}" stroke-dashoffset="${-offset}" transform="rotate(-90 73 73)"/>`;offset+=share;return part;}).join('');
 return `<div class="donut-wrap"><svg class="donut" viewBox="0 0 146 146" role="img" aria-label="Channel share donut chart; exact shares follow in the legend"><circle r="54" cx="73" cy="73" fill="none" stroke="#f0f0ee" stroke-width="17"/>${circles}<text x="73" y="73">${fmt(total)}</text><text class="sub" x="73" y="88">TOTAL SESSIONS</text></svg><div class="legend">${channels.map((p,i)=>`<div class="legend-row"><span class="legend-name"><i class="legend-dot" style="background:${colors[i%colors.length]}"></i>${esc(p.dimensions[0])}</span><strong>${total?(num(p.value)/total*100).toFixed(1):'0.0'}%</strong></div>`).join('')||'<p>No sessions in this period.</p>'}</div></div>`;
}
function heatmap(rows){
 const matrix=Array.from({length:7},()=>Array(24).fill(0));
 rows.forEach(p=>{const day=num(p.dimensions[0]),hour=num(p.dimensions[1]);if(day>=0&&day<7&&hour>=0&&hour<24)matrix[day][hour]+=num(p.value);});
 const maximum=Math.max(1,...matrix.flat());const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
 return '<div class="heatmap" role="img" aria-label="Sessions by day of week and hour. Darker blue means more sessions. Exact values are in the table below."><span></span>'+Array.from({length:24},(_,h)=>`<span class="heat-hour">${h%6===0?String(h).padStart(2,'0'):''}</span>`).join('')+days.map((day,d)=>`<span class="heat-day">${day}</span>`+matrix[d].map((value,h)=>`<span class="heat-cell" title="${day} ${String(h).padStart(2,'0')}:00 · ${fmt(value)} sessions" style="background:rgba(0,174,239,${.07+value/maximum*.93})"></span>`).join('')).join('')+'</div><div class="heat-key">Less '+[.08,.25,.5,.75,1].map(a=>`<i style="background:rgba(0,174,239,${a})"></i>`).join('')+' More</div><details><summary>View hourly values</summary><div class="table-wrap"><table><thead><tr><th>Day</th><th>Hour</th><th class="number">Sessions</th></tr></thead><tbody>'+matrix.flatMap((day,d)=>day.map((value,h)=>`<tr><td>${days[d]}</td><td>${String(h).padStart(2,'0')}:00</td><td class="number">${fmt(value)}</td></tr>`)).join('')+'</tbody></table></div></details>';
}
function demoData(view){
 const retail=state.workspace.id==='demo-retail',factor=retail?1.7:1,days=state.days;
 const daily=Array.from({length:days},(_,i)=>({dimensions:[new Date(Date.UTC(2026,10,6-days+i)).toISOString().slice(0,10).replaceAll('-','')],value:Math.round((180+i*3+Math.sin(i*1.3)*60)*factor)}));
 const sessions=daily.reduce((s,p)=>s+p.value,0),total={sessions,activeUsers:Math.round(sessions*.73),engagementRate:retail?.682:.648,keyEvents:Math.round(sessions*.018)};
 const channels=[['Organic Search',.46],['Paid Search',.27],['Direct',.17],['Referral',.1]].map(([name,share],i,a)=>({dimensions:[name],value:i===a.length-1?sessions-a.slice(0,-1).reduce((s,p)=>s+Math.floor(sessions*p[1]),0):Math.floor(sessions*share)}));
 const heat=Array.from({length:168},(_,i)=>({dimensions:[String(Math.floor(i/24)),String(i%24)],value:Math.round((5+Math.max(0,16-Math.abs(i%24-13)*2)*(1+(i%7)/10))*factor)}));
 const previous=Object.fromEntries(Object.entries(total).map(([k,v])=>[k,k==='engagementRate'?v-.037:Math.round(v*.87)]));
 const specific={
 seo:{metrics:[['Search clicks',Math.round(sessions*.28)],['Impressions',Math.round(sessions*6.8)],['Click-through rate',.041,'percent'],['Average position',12.4,'decimal']],rows:[['Service + location',1480],['Brand searches',1124],['Near me searches',782],['Service information',365]],unit:'Search clicks',tableTitle:'Search visibility',column:'Sample query'},
 ppc:{metrics:[['Ad spend',2580*factor*days/30,'money'],['Ad clicks',1920*factor*days/30],['Conversions',86*factor*days/30],['Cost / conversion',30,'money']],rows:[['Services · Search',48],['Brand · Search',26],['Local · Search',12]],unit:'Ad clicks',tableTitle:'Campaign performance',column:'Sample campaign'},
 business:{metrics:[['Profile impressions',8640*factor*days/30],['Website clicks',312*factor*days/30],['Call clicks',142*factor*days/30],['Direction requests',188*factor*days/30]],rows:[['Website clicks',312],['Call clicks',142],['Directions',188]],unit:'Profile interactions',tableTitle:'Customer actions',column:'Action'}
 };
 return {source:'demo',periodDays:days,timeZone:'America/New_York',currency:'USD',fetchedAt:null,totals:total,previous,daily,channels,heat,specific:specific[view],quality:[]};
}
function cardHead(title,description,tag='GA4'){return `<div class="card-head"><div><h2>${title}</h2><p>${description}</p></div><span class="source-tag">${tag}</span></div>`;}
function renderReport(data){
 const specific=data.specific;
 const metrics=specific?specific.metrics:[['Sessions',data.totals.sessions],['Active users',data.totals.activeUsers],['Engagement rate',data.totals.engagementRate,'percent'],['Key events',data.totals.keyEvents]];
 const keys=['sessions','activeUsers','engagementRate','keyEvents'];
 const display=(v,type)=>type==='percent'?(num(v)*100).toFixed(1)+'%':type==='money'?new Intl.NumberFormat('en-US',{style:'currency',currency:data.currency||'USD',maximumFractionDigits:0}).format(num(v)):type==='decimal'?num(v).toFixed(1):fmt(v);
 const tag=demo?'SAMPLE':'GA4';
 state.exportRows=[['VNW Media · Client Report'],['Workspace',state.workspace.name],['Mode',demo?'Illustrative sample data':'Google Analytics 4'],['Period',`${state.days} complete days ending yesterday`],['Property',data.propertyId||'Sample'],['Time zone',data.timeZone||'Not provided'],['Fetched at',data.fetchedAt||'Sample data'],[],['Metric','Value'],...metrics.map(([name,value,type])=>[name,display(value,type)]),[],['Channel','Sessions'],...data.channels.map(p=>[p.dimensions[0],p.value]),[],['Date','Sessions'],...data.daily.map(p=>[p.dimensions[0],p.value]),[],['Day of week (0=Sunday)','Hour','Sessions'],...data.heat.map(p=>[...p.dimensions,p.value])];
 $('#export').disabled=false;
 const rows=specific?specific.rows.map(([name,value])=>({dimensions:[name],value:Math.round(value*(state.workspace.id==='demo-retail'?1.7:1)*state.days/30)})):data.channels;
 const total=rows.reduce((s,p)=>s+num(p.value),0);
 $('#report').innerHTML=`<div class="metrics">${metrics.map(([name,value,type],i)=>`<article class="card"><div class="metric-label"><span>${esc(name)}</span><span class="metric-icon" aria-hidden="true">${['↗','◉','◫','◎'][i]}</span></div><div class="value">${display(value,type)}</div><div class="metric-change">${specific?'Illustrative sample metric':delta(num(value),num(data.previous[keys[i]]))}</div>${i===0?spark(data.daily.map(p=>p.value)):'<div class="report-footnote">'+(demo?'Sample reporting period':'Complete days · GA4')+'</div>'}</article>`).join('')}</div>
 <div class="chart-row"><article class="card">${cardHead(specific?`${specific.unit} trend`:'Website traffic',demo?'Illustrative activity across the sample period':'Sessions per day · Current period',tag)}${trendChart(data.daily)}</article><article class="card">${cardHead('Traffic acquisition','Share of sessions by channel',tag)}${donut(data.channels)}</article></div>
 <div class="chart-row"><article class="card">${cardHead(specific?specific.tableTitle:'Channel performance',specific?'Illustrative sample breakdown':'How visitors arrive at your website',tag)}<div class="table-wrap"><table><thead><tr><th>${specific?specific.column:'Channel'}</th><th class="number">${specific?(state.view==='ppc'?'Conversions':specific.unit):'Sessions'}</th><th class="number">Share</th></tr></thead><tbody>${rows.map(p=>`<tr><td><strong>${esc(p.dimensions[0])}</strong><span class="bar-track"><i style="width:${total?num(p.value)/total*100:0}%"></i></span></td><td class="number">${fmt(p.value)}</td><td class="number">${total?(num(p.value)/total*100).toFixed(1):'0.0'}%</td></tr>`).join('')||'<tr><td colspan="3">No activity in this period.</td></tr>'}</tbody></table></div></article><article class="card">${cardHead('When your audience visits','Sessions by day of week & hour',tag)}${heatmap(data.heat)}</article></div>
 <p class="report-footnote">${demo?'All results, charts, comparisons, and client workspaces shown here are illustrative. No Google accounts are connected.':`GA4 property ${esc(data.propertyId)} · ${esc(data.timeZone||'Property time zone not supplied')} · Updated ${esc(new Date(data.fetchedAt).toLocaleString())}. Reports end yesterday; Google can revise recent results. Channel and hourly reports may differ from totals due to GA4 processing, thresholds, or session attribution.`}</p>`;
 if(!demo&&data.quality.some(q=>q.thresholded||q.dataLossFromOtherRow||q.sampling.length))$('#notice').textContent+=' Google reports thresholding, sampling, or grouped rows for one or more charts; totals may be limited.';
}
function empty(title,message){$('#report').innerHTML=`<article class="card empty-state"><div class="empty-icon" aria-hidden="true">◫</div><h2>${esc(title)}</h2><p>${esc(message)}</p><button class="pill pill-blue" data-open-connections>View connections <span aria-hidden="true">↗</span></button></article>`;}
async function renderConnections(seq){
 const connection=demo?{connected:state.demoConnections.has(state.workspace.id),status:'not_connected'}:await api('/api/workspaces/'+state.workspace.id+'/connection');if(seq!==state.sequence)return;
 const services=[['Google Analytics 4','Sessions, visitors, engagement, key events, channels, and audience activity.','analytics'],['Google Search Console','Clicks, impressions, queries, and search visibility.','seo'],['Google Ads','Campaign spend, clicks, conversions, and return on investment.','ppc'],['Google Business Profile','Local visibility, calls, website clicks, and directions.','business']];
 $('#report').innerHTML='<div class="connection-grid">'+services.map(([name,description,key])=>`<article class="card"><div class="card-head"><div class="connection-icon" aria-hidden="true">${{analytics:'▥',seo:'↗',ppc:'◎',business:'⌖'}[key]}</div><span class="status ${connection.connected&&key==='analytics'?'connected':''}">${demo?'Preview only':key==='analytics'?(connection.status==='reauthorize'?'Reconnect required':connection.connected?'Connected':connection.googleEmail?'Choose property':'Not connected'):'Not connected'}</span></div><h2>${name}</h2><p>${description}</p>${key==='analytics'&&state.user?.isAdmin?`<button class="pill pill-blue" id="connect-google">${demo?'Preview connection setup':'Authorize Google Analytics'} <span aria-hidden="true">↗</span></button>${!demo&&connection.googleEmail?`<p>Google account: ${esc(connection.googleEmail)}</p><form class="portal-form" id="property-form"><label>GA4 property ID<input name="propertyId" inputmode="numeric" pattern="[0-9]{1,15}" required value="${esc(connection.propertyId||'')}" placeholder="Numeric property ID"></label><button class="pill pill-blue">Validate & assign property</button></form><button class="pill pill-outline" id="disconnect-google">Disconnect this workspace</button>`:''}`:'<span class="fine">'+(demo?'Sample reports available in preview':'Your VNW Media team manages this connection.')+'</span>'}<details><summary>About this connection</summary><p>${key==='analytics'?'Only the GA4 property assigned to this workspace can be requested. Google authorization and client sign-in are separate.':'This connector is planned. Live mode will show no report until the integration is implemented and authorized.'}</p></details></article>`).join('')+'</div><div id="action-message" class="message" role="status"></div>';
 $('#connect-google')?.addEventListener('click',async()=>{
  if(demo){$('#action-message').textContent='Google connection preview: authorize an agency Google account, then validate and assign the client’s numeric GA4 property ID. No connection is made on GitHub Pages.';return;}
  await action(async()=>{const result=await api('/api/workspaces/'+state.workspace.id+'/authorize','POST',{});const target=new URL(result.url);if(target.origin!=='https://accounts.google.com')throw new Error('Unexpected authorization destination.');location.assign(target.href);});
 });
 $('#property-form')?.addEventListener('submit',async event=>{event.preventDefault();const value=new FormData(event.currentTarget).get('propertyId');await action(async()=>{await api('/api/workspaces/'+state.workspace.id+'/property','POST',{propertyId:value});await show('connections');});});
 $('#disconnect-google')?.addEventListener('click',async()=>action(async()=>{await api('/api/workspaces/'+state.workspace.id+'/connection','DELETE');await show('connections');}));
}
async function action(task){const message=$('#action-message');if(message){message.classList.remove('error-text');message.textContent='Working…';}try{await task();}catch(error){if(message?.isConnected){message.classList.add('error-text');message.textContent=error.message;}}}
async function renderAdmin(seq){
 if(!state.user?.isAdmin){empty('Agency access required','Client management is available to your VNW Media team.');return;}
 const members=demo?state.demoMembers:state.workspace?(await api('/api/workspaces/'+state.workspace.id+'/members')).members:[];if(seq!==state.sequence)return;
 $('#report').innerHTML=`<div class="admin-grid"><article class="card">${cardHead('Client workspaces','Each business has a separate reporting workspace.','AGENCY')}<form id="new-workspace" class="portal-form"><label>Business name<input name="name" required maxlength="120" placeholder="Enter client business name"></label><button class="pill pill-blue">Create workspace <span aria-hidden="true">↗</span></button></form></article><article class="card">${cardHead('Invite a client','Access applies only to the selected workspace.','ACCESS')}<form id="invite-member" class="portal-form"><label>Client Google account email<input name="email" type="email" required maxlength="254" placeholder="client@example.com"></label><button class="pill pill-blue">Grant workspace access <span aria-hidden="true">↗</span></button></form><p class="report-footnote">Invitation expires after 7 days if unused. No email is sent automatically. Share the secure portal link with the client.</p></article></div><article class="card" style="margin-top:16px">${cardHead('Workspace access',esc(state.workspace?.name||'Select a workspace'),'MEMBERS')}<div class="table-wrap"><table><thead><tr><th>Email</th><th>Status</th><th class="number">Access</th></tr></thead><tbody>${members.map(m=>`<tr><td>${esc(m.email)}</td><td>${m.enabled===0?'Disabled':'Client'}</td><td class="number"><button class="action-small" data-remove-member="${esc(m.id)}">Remove access</button></td></tr>`).join('')||'<tr><td colspan="3">No client members yet. Agency administrators retain access.</td></tr>'}</tbody></table></div></article><div id="action-message" class="message" role="status"></div>`;
 $('#new-workspace').addEventListener('submit',async event=>{event.preventDefault();const name=new FormData(event.currentTarget).get('name').trim();await action(async()=>{let workspace;if(demo){workspace={id:'demo-'+Date.now(),name:name+' · Demo'};state.workspaces.push(workspace);if(state.workspace)state.memberMap.set(state.workspace.id,state.demoMembers);state.demoMembers=[];}else{workspace=await api('/api/admin/workspaces','POST',{name});state.workspaces.push(workspace);}selectWorkspaces(workspace.id);await show('admin');});});
 $('#invite-member').addEventListener('submit',async event=>{event.preventDefault();const email=new FormData(event.currentTarget).get('email').trim();if(!state.workspace){$('#action-message').textContent='Create a client workspace first.';return;}await action(async()=>{if(demo){state.demoMembers.push({id:'demo-'+Date.now(),email});}else await api('/api/workspaces/'+state.workspace.id+'/members','POST',{email});await show('admin');$('#action-message').textContent=demo?'Demo only: this email is kept in this page’s memory until you reload. No invitation was sent.':'Access granted to this workspace. Share the portal link; the client must sign in within 7 days.';});});
 document.querySelectorAll('[data-remove-member]').forEach(button=>button.addEventListener('click',async()=>action(async()=>{if(demo)state.demoMembers=state.demoMembers.filter(m=>m.id!==button.dataset.removeMember);else await api('/api/workspaces/'+state.workspace.id+'/members/'+button.dataset.removeMember,'DELETE');await show('admin');})));
}
async function show(view){
 if(!state.ready){openLogin();return;}
 state.view=view;const seq=++state.sequence;state.exportRows=[];$('#export').disabled=true;
 $('#welcome').hidden=true;$('#dashboard').hidden=false;$('#report').innerHTML='<div class="loading" role="status">Loading your workspace…</div>';
 document.querySelectorAll('nav button').forEach(b=>{b.removeAttribute('aria-current');if(b.dataset.view===view)b.setAttribute('aria-current','page');});
 const [title,subtitle]=titles[view];$('#title').textContent=title;$('#subtitle').textContent=subtitle;$('#report-eyebrow').textContent=(state.workspace?.name||'CLIENT WORKSPACE')+' / '+view.toUpperCase();
 $('#period-label').hidden=['connections','admin'].includes(view);$('#export').hidden=['connections','admin'].includes(view);
 $('#notice').textContent=demo?'Design preview · All clients, metrics, trends, and charts are illustrative sample data.':'Private workspace · '+(state.workspace?.name||'No clients assigned')+' · Google Analytics 4';
 try {
  if(view==='admin'){await renderAdmin(seq);return;}
  if(!state.workspace){empty('No workspace assigned','Ask your VNW Media administrator to assign your account to a client workspace.');return;}
  if(view==='connections'){await renderConnections(seq);return;}
  if(!demo&&!['overview','analytics'].includes(view)){empty('This report is not connected yet','Your team will connect this reporting source to your workspace. No sample numbers are shown in your live account.');return;}
  const data=demo?demoData(view):await api('/api/workspaces/'+state.workspace.id+'/analytics?days='+state.days);
  if(seq!==state.sequence)return;renderReport(data);
 }catch(error){if(seq!==state.sequence)return;empty('Report unavailable',error.message);if(error.code==='sign_in_required')state.ready=false;}
}
function openLogin(){
 $('#login-dialog').showModal();const anchor=$('#google-login');
 if(demo||state.configured===false){anchor.setAttribute('aria-disabled','true');anchor.removeAttribute('href');$('#login-state').textContent=demo?'GitHub Pages preview: secure sign-in is not active. The backend code is being prepared in GitHub. Use “Explore sample dashboard” to review the design.':'Secure portal setup is incomplete. Please contact your VNW Media administrator.';}
 else{anchor.href='/auth/google/start';anchor.removeAttribute('aria-disabled');$('#login-state').textContent='Your Google password stays with Google. Workspace access is checked by the reporting server.';}
}
async function bootstrap(){
 if(demo){state.workspaces=demoWorkspaces.slice();state.user={isAdmin:true};state.ready=true;selectWorkspaces();$('#admin-nav').hidden=false;return;}
 $('#explore').hidden=true;$('#mode-badge').textContent='PRIVATE PORTAL';$('#welcome-note').textContent='Invite-only access. Sign in to see your client workspace.';$('#footer-status').textContent='Private reporting · Google Analytics 4';
 try{const config=await api('/api/config');state.configured=config.configured;if(!config.configured){$('#google-login').removeAttribute('href');$('#welcome-note').textContent='Secure portal setup is incomplete. Contact your VNW Media administrator.';return;}
 const result=await api('/api/session');state.user=result.user;state.workspaces=result.workspaces;state.ready=true;selectWorkspaces(new URLSearchParams(location.search).get('workspace'));$('#admin-nav').hidden=!state.user.isAdmin;$('#account-button').textContent='Sign out';await show('overview');
 }catch(error){if(error.code!=='sign_in_required')$('#welcome-note').textContent=error.message;}
 // Remove callback state from the displayed URL after processing it.
 if(location.search)history.replaceState(null,'',location.pathname);
}
$('#workspace').addEventListener('change',()=>{if(state.workspace)state.memberMap.set(state.workspace.id,state.demoMembers);state.workspace=state.workspaces.find(w=>w.id===$('#workspace').value);state.demoMembers=state.memberMap.get(state.workspace?.id)||[];show(state.view);});
$('#period').addEventListener('change',()=>{state.days=Number($('#period').value);show(state.view);});
$('#explore').addEventListener('click',()=>show('overview'));
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.view)));
$('#report').addEventListener('click',e=>{if(e.target.closest('[data-open-connections]'))show('connections');});
$('#welcome-login').addEventListener('click',openLogin);$('#close-login').addEventListener('click',()=>$('#login-dialog').close());
$('#account-button').addEventListener('click',async()=>{if(!demo&&state.ready){try{await api('/api/logout','POST',{});location.assign('/client-login/');}catch(error){$('#notice').textContent=error.message;}}else openLogin();});
$('#export').addEventListener('click',()=>{
 if(!state.exportRows.length)return;
 const clean=value=>{let text=String(value??'');if(/^[=+\-@\t\r]/.test(text))text="'"+text;return '"'+text.replaceAll('"','""')+'"';};
 const csv='\ufeff'+state.exportRows.map(row=>row.map(clean).join(',')).join('\r\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));const link=document.createElement('a');link.href=url;link.download='VNW-Media-'+state.view+'-'+state.days+'days'+(demo?'-SAMPLE':'')+'.csv';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
bootstrap();
})();
