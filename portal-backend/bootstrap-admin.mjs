// Generates an ignored private SQL file only. It does not grant access to a running service.
import {writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const email=(process.argv[2]||'').trim().toLowerCase();
if(!/^[^\s@']+@[^\s@']+\.[^\s@']+$/.test(email)||email.length>254)throw new Error('Provide the administrator Google account email as the first argument.');
const file=fileURLToPath(new URL('bootstrap-admin.local.sql',import.meta.url));
writeFileSync(file,`-- Private provisioning input. Do not commit this file.\nINSERT INTO users(id,email,is_admin,invite_expires) VALUES('${crypto.randomUUID()}','${email}',1,${Math.floor(Date.now()/1000)+604800}) ON CONFLICT(email) DO UPDATE SET is_admin=1,enabled=1,invite_expires=excluded.invite_expires;\n`,{mode:0o600});
console.log('Created ignored bootstrap-admin.local.sql. Apply privately only when activating the backend. No account is active yet.');
