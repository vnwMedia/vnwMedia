# VNW Media secure portal foundation

Status: source code and tests only. The GitHub Pages website remains an explicitly labeled design demo. No live client account, hosted database, Google authorization, or real Analytics data has been activated. Do not point clients at the demo as a production login.

## Implemented

- Google OpenID Connect sign-in for pre-invited Google accounts; immutable Google subject binding after first login.
- Server-verified RS256 signatures using Google's signing keys; issuer, audience, expiry, nonce and verified email checks.
- PKCE, expiring single-use browser-bound OAuth state, opaque eight-hour session cookies; session hashes in the database.
- Per-request enabled-user and client-membership checks. Clients see only assigned workspaces. Agency administrators can manage all workspaces.
- Agency-only client creation, seven-day invitation provisioning, client removal, per-workspace Google authorization, GA4 property assignment and disconnection. Invitations do not send email automatically.
- Analytics refresh tokens encrypted with AES-256-GCM and client workspace as authenticated associated data. Refresh tokens never go into browser code, API responses or logs.
- Server-side Analytics Data API adapter: current/previous KPIs, daily sessions, channel acquisition and day/hour heatmap. Only the server-assigned property can be queried; browser property overrides are rejected.
- Origin checks on mutations, bounded request frequency, no-store responses, restrictive security headers and hourly expired-state cleanup.
- Shared frontend has explicit demo and secure build modes. Secure mode never substitutes example reports for unavailable live data. Latest-request checks prevent late client-switch responses from rendering into another workspace.

## Repository layout

- `worker.mjs`: same-origin routing, authorization, sessions, administration, OAuth callbacks.
- `security.mjs`: tenant checks, cookies, crypto and request handling.
- `google.mjs`: signed identity validation, token refresh and GA4 reporting.
- `migrations/0001_portal.sql`: users, workspaces, memberships, sessions, OAuth attempts, encrypted connection records, audit trail and rate limits.
- `build.mjs`: copies only approved frontend assets into ignored `public/`; marks that build as secure mode.
- `bootstrap-admin.mjs`: creates an ignored local SQL input for the first administrator. It does not activate an account.
- `tests/portal.test.mjs`: runs against actual SQLite through a D1-compatible adapter. Google HTTP responses are mocked; no live credentials are used.
- `wrangler.jsonc`: deployment template only, with invalid placeholders and no secrets. Default platform preview/public worker URL is disabled.

## Development checks

Requires Node.js 24. No npm dependencies are required for the tests or asset build.

```sh
node --test portal-backend/tests/*.test.mjs
node --check client-portal.js
node portal-backend/build.mjs
node scripts/build-clean-url-preview.cjs
node tests/clean-url-routes.cjs
```

GitHub Actions repeats these checks on portal changes. It does not deploy a backend or access secrets. GitHub Pages excludes the backend folder; the public GitHub repository still contains reviewed backend source. Keep all production data and provisioning inputs outside tracked files.

## Activation steps — deferred by request

1. Choose and authorize a backend host and production portal origin. This template targets Cloudflare Workers + D1, on one HTTPS origin with its frontend, so authentication does not depend on cross-site cookies. A dedicated portal subdomain can be linked from the website's `/client-login/` route later. No DNS or WordPress change has been made.
2. Use an organization-owned Google Cloud project. Enable Analytics Data API. Configure the consent screen, privacy policy, authorized domain and external-app verification as applicable. Create Web OAuth credentials with an exact callback of `https://YOUR-PORTAL-DOMAIN/auth/google/callback`. Configure Google testing users while testing; external testing-mode grants may expire.
3. Set `PORTAL_ORIGIN`, `GOOGLE_CLIENT_ID`, D1 database ID and the custom domain in the host configuration. Do not reuse the invalid placeholders. Configure `GOOGLE_CLIENT_SECRET` and a random 32-byte base64 `TOKEN_ENCRYPTION_KEY` privately through the host secret manager. Never commit `.dev.vars`, `.env`, local SQL provisioning files or tokens. Rotating the encryption key requires re-encryption or reauthorizing existing connections.
4. Apply the D1 migration. Generate the first administrator input privately with `node bootstrap-admin.mjs ADMIN_GOOGLE_EMAIL` from this folder, then apply the resulting ignored SQL through an authorized host session. The currently prepared local admin input is intentionally excluded from GitHub. Verify the administrator controls the invited Google account. No administrators are created automatically from public config or browser input.
5. Build frontend assets and deploy the Worker only after the host and domain are configured. Authenticate as the administrator, create each client's workspace, and grant each client email access to that workspace. Invitations require a Google account and expire after seven days until first login. Send the portal URL manually when ready; no emails are sent by the application.
6. Select a workspace, choose Connections, authorize an agency Google account with Analytics access, then enter that client's numeric GA4 property ID. The server validates access by running a report before assigning it. Repeat separately for each client. An agency-managed Google account can authorize multiple workspaces, with each stored connection scoped to its workspace.
7. Verify with two real test clients before inviting production clients: account A cannot query B's reports or admin endpoints, removing membership stops access, logout expires access, consent denial is recoverable, revoked grants require reconnection, and empty/thresholded reports are accurately labeled.

## Reporting semantics

Current period covers 30 or 90 complete days through yesterday in the GA4 property's time zone. Comparison covers the preceding equal period. Google can revise recent data. Engagement is returned as GA4's aggregate engagement rate; it is not an average of daily rates. KPIs, channel sessions and hourly activity may differ because GA4 can apply thresholds, attribution, sampling or other-row grouping. Returned metadata flags those limitations. Report data is fetched on demand; there is no durable report cache, automatic analytics sync, PDF report scheduling or historical snapshot storage yet. Rate limiting is present, but retry/backoff and quota budgeting should be added for larger client volume.

Google access tokens are fetched on the server as needed. Disconnect deletes this workspace's local encrypted credential and pending OAuth attempts. It does not revoke the upstream Google grant because that grant may be shared with other client workspaces; account-wide revocation must be performed deliberately in Google's account permissions screen. Disabling a user or removing membership is checked on every request, without waiting for session expiry. All administrators currently have agency-wide access; there are no delegated agency roles yet.

No real Google OAuth round trip or Cloudflare deployment has been verified at this milestone. Tests exercise signed token handling and simulated Google responses. Host integration, real property metric availability, consent-screen verification and production security review remain activation checks.

## Official references

- https://developers.google.com/identity/openid-connect/openid-connect
- https://developers.google.com/identity/protocols/oauth2/web-server
- https://developers.google.com/analytics/devguides/reporting/data/v1/basics
- https://developers.cloudflare.com/workers/static-assets/binding/
- https://developers.cloudflare.com/d1/worker-api/prepared-statements/
