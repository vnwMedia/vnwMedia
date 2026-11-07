import {now,fail,random,hash,cookie,setCookie,sameOrigin,session,admin,workspaceAccess,encrypt,body,limit,audit} from './security.mjs';
import {ANALYTICS_SCOPE,tokenRequest,verifyIdentity,accessToken,analyticsPost,getAnalytics} from './google.mjs';
const json=(data,status=200)=>Response.json(data,{status});
const redirect=(path,cookies=[])=>{const headers=new Headers({Location:path});for(const c of cookies) headers.append('Set-Cookie',c);return new Response(null,{status:303,headers});};
function configured(env) { return !!(env.DB&&env.GOOGLE_CLIENT_SECRET&&env.TOKEN_ENCRYPTION_KEY&&env.GOOGLE_CLIENT_ID&&!env.GOOGLE_CLIENT_ID.startsWith('REPLACE')&&env.PORTAL_ORIGIN?.startsWith('https://')&&!env.PORTAL_ORIGIN.includes('.invalid')); }
function label(value,max=120) {if(typeof value!=='string'||!value.trim()||value.trim().length>max) fail(400,'invalid_input');return value.trim();}
async function beginOAuth(req,env,purpose,user=null,workspaceId=null) {
 await limit(env,'oauth:'+ (user?.id||req.headers.get('CF-Connecting-IP')||'unknown'),20,600);
 const state=random(),browser=random(),verifier=random(),nonce=random();
 const expiry=now()+600;
 await env.DB.prepare('INSERT INTO oauth_attempts(state_hash,browser_hash,verifier,nonce,purpose,session_hash,workspace_id,expires) VALUES(?,?,?,?,?,?,?,?)').bind(await hash(state),await hash(browser),verifier,nonce,purpose,user?.sessionHash||null,workspaceId,expiry).run();
 const url=new URL('https://accounts.google.com/o/oauth2/v2/auth');
 const params={client_id:env.GOOGLE_CLIENT_ID,redirect_uri:env.PORTAL_ORIGIN+'/auth/google/callback',response_type:'code',scope:'openid email',state,nonce,code_challenge:await hash(verifier),code_challenge_method:'S256',prompt:'select_account'};
 if(purpose==='analytics') Object.assign(params,{scope:'openid email '+ANALYTICS_SCOPE,access_type:'offline',prompt:'consent select_account'});
 url.search=new URLSearchParams(params).toString();return redirect(url.href,[setCookie('__Host-vnw-oauth',browser,600)]);
}
async function callback(req,env,url) {
 const state=url.searchParams.get('state'),browser=cookie(req,'__Host-vnw-oauth');if(!state||!browser) fail(400,'invalid_oauth_state');
 // DELETE RETURNING atomically consumes state. Bound browser cookie prevents login CSRF.
 const attempt=await env.DB.prepare('DELETE FROM oauth_attempts WHERE state_hash=? AND browser_hash=? AND expires>? RETURNING *').bind(await hash(state),await hash(browser),now()).first();
 if(!attempt) fail(400,'invalid_oauth_state');
 const cleared=setCookie('__Host-vnw-oauth','',0);
 if(url.searchParams.has('error')) return redirect('/client-login/?auth=cancelled',[cleared]);
 const code=url.searchParams.get('code');if(!code) fail(400,'missing_oauth_code');
 const tokens=await tokenRequest(env,{grant_type:'authorization_code',code,code_verifier:attempt.verifier,redirect_uri:env.PORTAL_ORIGIN+'/auth/google/callback'});
 const identity=await verifyIdentity(tokens.id_token,env,attempt.nonce);
 if(attempt.purpose==='login') {
  const email=identity.email.toLowerCase();
  // Existing users are identified by immutable Google subject, not reassignable email.
  let user=await env.DB.prepare('SELECT id FROM users WHERE google_sub=? AND enabled=1').bind(identity.sub).first();
  if(!user) user=await env.DB.prepare('UPDATE users SET google_sub=? WHERE email=? COLLATE NOCASE AND google_sub IS NULL AND enabled=1 AND invite_expires>? RETURNING id').bind(identity.sub,email,now()).first();
  if(!user) fail(403,'invitation_required');
  const token=random();
  await env.DB.prepare('INSERT INTO sessions(token_hash,user_id,expires) VALUES(?,?,?)').bind(await hash(token),user.id,now()+28800).run();
  await audit(env,user,null,'signed_in');
  return redirect('/client-login/',[cleared,setCookie('__Host-vnw-session',token,28800)]);
 }
 const user=await session(req,env);admin(user);
 if(user.sessionHash!==attempt.session_hash) fail(403,'oauth_session_changed');
 await workspaceAccess(env,user,attempt.workspace_id);
 if(!tokens.scope?.split(' ').includes(ANALYTICS_SCOPE)) fail(403,'analytics_consent_required');
 if(!tokens.refresh_token) fail(409,'offline_access_required');
 const cipher=await encrypt(tokens.refresh_token,env.TOKEN_ENCRYPTION_KEY,attempt.workspace_id);
 // Changing Google connection clears property assignment until it has been validated again.
 await env.DB.prepare("INSERT INTO analytics_connections(workspace_id,property_id,refresh_cipher,google_email,status,updated_at) VALUES(?,NULL,?,?,'connected',?) ON CONFLICT(workspace_id) DO UPDATE SET property_id=NULL,refresh_cipher=excluded.refresh_cipher,google_email=excluded.google_email,status='connected',updated_at=excluded.updated_at").bind(attempt.workspace_id,cipher,identity.email,now()).run();
 await audit(env,user,attempt.workspace_id,'analytics_authorized');
 return redirect('/client-login/?workspace='+encodeURIComponent(attempt.workspace_id),[cleared]);
}
async function route(req,env) {
 const url=new URL(req.url),path=url.pathname;
 if(url.origin!==env.PORTAL_ORIGIN&&configured(env)) fail(421,'wrong_origin');
 if(path==='/api/config') return json({mode:'secure',configured:configured(env)});
 if(path.startsWith('/api/')||path.startsWith('/auth/')) {
  if(!configured(env)) fail(503,'server_setup_required');
  if(!['GET','POST','DELETE'].includes(req.method)) fail(405,'method_not_allowed');
  if(req.method!=='GET') sameOrigin(req,env);
  if(path==='/auth/google/start'&&req.method==='GET') {
   if(req.headers.get('Sec-Fetch-Site')==='cross-site') fail(403,'origin_rejected');
   return beginOAuth(req,env,'login');
  }
  if(path==='/auth/google/callback'&&req.method==='GET') return callback(req,env,url);
  const user=await session(req,env);
  if(path==='/api/session'&&req.method==='GET') {
   const result=await env.DB.prepare('SELECT w.id,w.name FROM workspaces w WHERE ?=1 OR EXISTS(SELECT 1 FROM memberships m WHERE m.workspace_id=w.id AND m.user_id=?) ORDER BY w.name').bind(user.is_admin,user.id).all();
   return json({user:{email:user.email,isAdmin:user.is_admin===1},workspaces:result.results});
  }
  if(path==='/api/logout'&&req.method==='POST') {
   await env.DB.prepare('DELETE FROM sessions WHERE token_hash=?').bind(user.sessionHash).run();
   const result=json({ok:true});result.headers.set('Set-Cookie',setCookie('__Host-vnw-session','',0));return result;
  }
  if(path==='/api/admin/workspaces'&&req.method==='POST') {
   admin(user);await limit(env,'admin:'+user.id,30);
   const input=await body(req),name=label(input.name),id=crypto.randomUUID();
   await env.DB.prepare('INSERT INTO workspaces(id,name) VALUES(?,?)').bind(id,name).run();await audit(env,user,id,'workspace_created');
   return json({id,name},201);
  }
  const match=path.match(/^\/api\/workspaces\/([a-zA-Z0-9-]{1,64})\/(analytics|connection|authorize|property|members)(?:\/([a-zA-Z0-9-]{1,64}))?$/);
  if(!match) fail(404,'not_found');
  const [,id,action,memberId]=match;
  await workspaceAccess(env,user,id);
  if(memberId&&action!=='members') fail(404,'not_found');
  if(action==='analytics'&&req.method==='GET') {
   await limit(env,'reports:'+user.id+':'+id,12);
   const keys=[...url.searchParams.keys()];if(keys.some(k=>k!=='days')) fail(400,'unsupported_parameter');
   const days=Number(url.searchParams.get('days')||30);if(![30,90].includes(days)) fail(400,'invalid_date_range');
   const connection=await env.DB.prepare('SELECT * FROM analytics_connections WHERE workspace_id=?').bind(id).first();
   if(!connection?.property_id) fail(409,'analytics_not_connected');
   return json(await getAnalytics(env,connection,days));
  }
  if(action==='connection'&&req.method==='GET') {
   const row=await env.DB.prepare('SELECT property_id,status,google_email FROM analytics_connections WHERE workspace_id=?').bind(id).first();
   // Provider account email is visible only to agency admins.
   return json({connected:!!row?.property_id,propertyId:row?.property_id||null,status:row?.status||'not_connected',...(user.is_admin===1?{googleEmail:row?.google_email||null}:{})});
  }
  admin(user);await limit(env,'admin:'+user.id,30);
  if(action==='authorize'&&req.method==='POST') {
   const result=await beginOAuth(req,env,'analytics',user,id);const response=json({url:result.headers.get('Location')});response.headers.set('Set-Cookie',result.headers.get('Set-Cookie'));return response;
  }
  if(action==='property'&&req.method==='POST') {
   const input=await body(req),property=String(input.propertyId||'');if(!/^\d{1,15}$/.test(property)) fail(400,'invalid_property');
   const conn=await env.DB.prepare('SELECT * FROM analytics_connections WHERE workspace_id=?').bind(id).first();if(!conn) fail(409,'analytics_not_connected');
   const token=await accessToken(env,conn);
   await analyticsPost(token,property,'runReport',{dateRanges:[{startDate:'yesterday',endDate:'yesterday'}],metrics:[{name:'sessions'}],limit:1});
   await env.DB.prepare('UPDATE analytics_connections SET property_id=?,updated_at=? WHERE workspace_id=? AND refresh_cipher=?').bind(property,now(),id,conn.refresh_cipher).run();
   await audit(env,user,id,'analytics_property_assigned');return json({ok:true});
  }
  if(action==='connection'&&req.method==='DELETE') {
   await env.DB.batch([env.DB.prepare('DELETE FROM analytics_connections WHERE workspace_id=?').bind(id),env.DB.prepare("DELETE FROM oauth_attempts WHERE workspace_id=? AND purpose='analytics'").bind(id)]);
   await audit(env,user,id,'analytics_disconnected');return json({ok:true});
  }
  if(action==='members'&&req.method==='GET'&&!memberId) {
   const result=await env.DB.prepare('SELECT u.id,u.email,u.enabled,u.invite_expires FROM users u JOIN memberships m ON m.user_id=u.id WHERE m.workspace_id=? ORDER BY u.email').bind(id).all();return json({members:result.results});
  }
  if(action==='members'&&req.method==='POST'&&!memberId) {
   const input=await body(req),email=label(input.email,254).toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail(400,'invalid_email');
   const userId=crypto.randomUUID();
   await env.DB.batch([
    env.DB.prepare('INSERT INTO users(id,email,invite_expires) VALUES(?,?,?) ON CONFLICT(email) DO UPDATE SET invite_expires=excluded.invite_expires').bind(userId,email,now()+604800),
    env.DB.prepare('INSERT OR IGNORE INTO memberships(workspace_id,user_id) SELECT ?,id FROM users WHERE email=? COLLATE NOCASE').bind(id,email)
   ]);await audit(env,user,id,'member_invited');return json({ok:true,delivery:'manual',expiresInDays:7});
  }
  if(action==='members'&&req.method==='DELETE'&&memberId) {
   await env.DB.prepare('DELETE FROM memberships WHERE workspace_id=? AND user_id=?').bind(id,memberId).run();await audit(env,user,id,'member_removed');return json({ok:true});
  }
  fail(405,'method_not_allowed');
 }
 if(req.method!=='GET'&&req.method!=='HEAD') fail(405,'method_not_allowed');
 if(path==='/') return redirect('/client-login/');
 return env.ASSETS.fetch(req);
}
export default {
 async fetch(req,env) {
  let result;
  try {result=await route(req,env);} catch(error) {
   // Never expose OAuth codes, secrets, provider response bodies or stack traces.
   result=json({error:error.code||'request_failed'},error.status||500);
  }
  const response=new Response(result.body,result);
  response.headers.set('Cache-Control','no-store');response.headers.set('X-Content-Type-Options','nosniff');response.headers.set('Referrer-Policy','no-referrer');response.headers.set('X-Frame-Options','DENY');response.headers.set('Strict-Transport-Security','max-age=31536000');
  response.headers.set('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
  return response;
 },
 async scheduled(event,env) {
  await env.DB.batch(['sessions','oauth_attempts','rate_limits'].map(table=>env.DB.prepare(`DELETE FROM ${table} WHERE expires<=?`).bind(now())));
 }
};
