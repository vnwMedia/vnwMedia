const enc = new TextEncoder();
export const now = () => Math.floor(Date.now()/1000);
export function fail(status, code) { throw Object.assign(new Error(code), {status, code}); }
export function b64(bytes) { return btoa(String.fromCharCode(...new Uint8Array(bytes))).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,''); }
export function unb64(s) { return Uint8Array.from(atob(s.replaceAll('-','+').replaceAll('_','/')), c=>c.charCodeAt(0)); }
export function random() { return b64(crypto.getRandomValues(new Uint8Array(32))); }
export async function hash(s) { return b64(await crypto.subtle.digest('SHA-256',enc.encode(s))); }
export function cookie(req, name) { return (req.headers.get('Cookie')||'').split(';').map(v=>v.trim()).find(v=>v.startsWith(name+'='))?.slice(name.length+1)||''; }
export function setCookie(name,value,age) { return `${name}=${value}; Path=/; Max-Age=${age}; HttpOnly; Secure; SameSite=Lax`; }
export function sameOrigin(req, env) { if(req.headers.get('Origin')!==env.PORTAL_ORIGIN) fail(403,'origin_rejected'); }
export async function session(req,env) {
 const token=cookie(req,'__Host-vnw-session'); if(!token) fail(401,'sign_in_required');
 const tokenHash=await hash(token);
 const user=await env.DB.prepare('SELECT u.id,u.email,u.is_admin FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires>? AND u.enabled=1').bind(tokenHash,now()).first();
 if(!user) fail(401,'sign_in_required');
 return {...user,sessionHash:tokenHash};
}
export function admin(user) { if(user.is_admin!==1) fail(403,'admin_required'); }
export async function workspaceAccess(env,user,id) {
 const workspace=await env.DB.prepare('SELECT id,name FROM workspaces WHERE id=? AND (?=1 OR EXISTS(SELECT 1 FROM memberships WHERE workspace_id=workspaces.id AND user_id=?))').bind(id,user.is_admin,user.id).first();
 if(!workspace) fail(404,'workspace_not_found'); return workspace;
}
export async function encrypt(value,key,aad) {
 const raw=unb64(key); if(raw.length!==32) fail(503,'server_setup_required');
 const imported=await crypto.subtle.importKey('raw',raw,'AES-GCM',false,['encrypt']);
 const iv=crypto.getRandomValues(new Uint8Array(12));
 const cipher=await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:enc.encode(aad)},imported,enc.encode(value));
 return b64(iv)+'.'+b64(cipher);
}
export async function decrypt(value,key,aad) {
 const [iv,data]=value.split('.'); const raw=unb64(key);
 const imported=await crypto.subtle.importKey('raw',raw,'AES-GCM',false,['decrypt']);
 return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:unb64(iv),additionalData:enc.encode(aad)},imported,unb64(data)));
}
export async function body(req) {
 if(!req.headers.get('Content-Type')?.startsWith('application/json')) fail(415,'json_required');
 const reader=req.body?.getReader();let text='',size=0;const decoder=new TextDecoder();if(reader){while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>8192){await reader.cancel();fail(413,'request_too_large');}text+=decoder.decode(value,{stream:true});}text+=decoder.decode();}
 try { const value=JSON.parse(text);if(!value||Array.isArray(value)||typeof value!=='object') fail(400,'invalid_json');return value; } catch { fail(400,'invalid_json'); }
}
export async function limit(env,bucket,max,window=60) {
 const cutoff=Math.floor(now()/window)*window;
 const row=await env.DB.prepare('INSERT INTO rate_limits(bucket,count,expires) VALUES(?,1,?) ON CONFLICT(bucket) DO UPDATE SET count=CASE WHEN expires<=? THEN 1 ELSE count+1 END,expires=excluded.expires RETURNING count').bind(bucket,cutoff+window,now()).first();
 if(row.count>max) fail(429,'rate_limited');
}
export async function audit(env,user,id,action) { await env.DB.prepare('INSERT INTO audit_events(id,actor_id,workspace_id,action,created_at) VALUES(?,?,?,?,?)').bind(crypto.randomUUID(),user.id,id,action,now()).run(); }
