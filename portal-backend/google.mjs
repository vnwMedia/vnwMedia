import {fail,now,hash,unb64,decrypt} from './security.mjs';
const enc=new TextEncoder();
export const ANALYTICS_SCOPE='https://www.googleapis.com/auth/analytics.readonly';
export async function googleFetch(url,options) {
 // Fixed Google endpoints are constructed by this module, never supplied by the browser.
 return fetch(url,{...options,signal:AbortSignal.timeout(15000)});
}
export async function tokenRequest(env,params) {
 const response=await googleFetch('https://oauth2.googleapis.com/token',{method:'POST',body:new URLSearchParams({...params,client_id:env.GOOGLE_CLIENT_ID,client_secret:env.GOOGLE_CLIENT_SECRET})});
 if(!response.ok) { if(response.status===400) fail(409,'google_reauthorization_required');fail(502,'google_unavailable'); }
 return response.json();
}
let cachedKeys;
export async function verifyIdentity(token,env,nonce) {
 if(typeof token!=='string'||token.length>16000) fail(401,'invalid_identity');
 const parts=token.split('.'); if(parts.length!==3) fail(401,'invalid_identity');
 let header,claims;
 try {header=JSON.parse(new TextDecoder().decode(unb64(parts[0])));claims=JSON.parse(new TextDecoder().decode(unb64(parts[1])));} catch {fail(401,'invalid_identity');}
 if(header.alg!=='RS256'||!header.kid) fail(401,'invalid_identity');
 if(!cachedKeys||cachedKeys.expires<now()||!cachedKeys.keys.some(k=>k.kid===header.kid)) {
  const response=await googleFetch('https://www.googleapis.com/oauth2/v3/certs');if(!response.ok) fail(502,'google_unavailable');
  const data=await response.json();cachedKeys={keys:data.keys,expires:now()+3600};
 }
 const jwk=cachedKeys.keys.find(k=>k.kid===header.kid);if(!jwk) fail(401,'invalid_identity');
 const key=await crypto.subtle.importKey('jwk',jwk,{name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'},false,['verify']);
 if(!await crypto.subtle.verify('RSASSA-PKCS1-v1_5',key,unb64(parts[2]),enc.encode(parts[0]+'.'+parts[1]))) fail(401,'invalid_identity');
 if(!['https://accounts.google.com','accounts.google.com'].includes(claims.iss)||claims.aud!==env.GOOGLE_CLIENT_ID||typeof claims.exp!=='number'||claims.exp<=now()||typeof claims.iat!=='number'||claims.iat>now()+60||claims.nonce!==nonce||claims.email_verified!==true||!claims.sub||typeof claims.email!=='string') fail(401,'invalid_identity');
 if(claims.azp&&claims.azp!==env.GOOGLE_CLIENT_ID) fail(401,'invalid_identity');
 return claims;
}
export async function accessToken(env,connection) {
 if(connection.status!=='connected') fail(409,'google_reauthorization_required');
 const refresh=await decrypt(connection.refresh_cipher,env.TOKEN_ENCRYPTION_KEY,connection.workspace_id);
 try {return (await tokenRequest(env,{grant_type:'refresh_token',refresh_token:refresh})).access_token;} catch(error) {
  if(error.code==='google_reauthorization_required') await env.DB.prepare("UPDATE analytics_connections SET status='reauthorize' WHERE workspace_id=? AND refresh_cipher=?").bind(connection.workspace_id,connection.refresh_cipher).run();
  throw error;
 }
}
export async function analyticsPost(token,property,method,payload) {
 if(!/^\d{1,15}$/.test(property)) fail(400,'invalid_property');
 const response=await googleFetch(`https://analyticsdata.googleapis.com/v1beta/properties/${property}:${method}`,{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(payload)});
 if(response.status===401) fail(409,'google_reauthorization_required');
 if(response.status===403||response.status===404) fail(409,'property_access_denied');
 if(response.status===429) fail(429,'google_rate_limited');
 if(!response.ok) fail(502,'analytics_unavailable');return response.json();
}
const metricNames=['sessions','activeUsers','engagementRate','keyEvents'];
const metrics=metricNames.map(name=>({name}));
export function reportRequests(days) {
 const dateRanges=[{startDate:`${days}daysAgo`,endDate:'yesterday'}];
 return [
  {dateRanges,metrics},
  {dateRanges:[{startDate:`${days*2}daysAgo`,endDate:`${days+1}daysAgo`}],metrics},
  {dateRanges,dimensions:[{name:'date'}],metrics:[{name:'sessions'}],orderBys:[{dimension:{dimensionName:'date'}}],limit:90},
  {dateRanges,dimensions:[{name:'sessionDefaultChannelGroup'}],metrics:[{name:'sessions'}],orderBys:[{metric:{metricName:'sessions'},desc:true}],limit:100},
  {dateRanges,dimensions:[{name:'dayOfWeek'},{name:'hour'}],metrics:[{name:'sessions'}],limit:168}
 ];
}
export async function getAnalytics(env,connection,days) {
 const token=await accessToken(env,connection);
 const result=await analyticsPost(token,connection.property_id,'batchRunReports',{requests:reportRequests(days)});
 const [total,previous,daily,channels,heat]=result.reports;
 const values=r=>Object.fromEntries(metricNames.map((key,i)=>[key,Number(r.rows?.[0]?.metricValues?.[i]?.value||0)]));
 const rows=r=>(r.rows||[]).map(row=>({dimensions:row.dimensionValues.map(x=>x.value),value:Number(row.metricValues[0].value)}));
 return {source:'ga4',propertyId:connection.property_id,periodDays:days,dateRange:{start:`${days}daysAgo`,end:'yesterday'},fetchedAt:new Date().toISOString(),timeZone:total.metadata?.timeZone||null,currency:total.metadata?.currencyCode||null,totals:values(total),previous:values(previous),daily:rows(daily),channels:rows(channels),heat:rows(heat),empty:!total.rows?.length,quality:result.reports.map(r=>({thresholded:!!r.metadata?.subjectToThresholding,dataLossFromOtherRow:!!r.metadata?.dataLossFromOtherRow,sampling:r.metadata?.samplingMetadatas||[]}))};
}
