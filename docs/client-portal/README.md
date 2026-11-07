# VNW Media client reporting portal

## Current milestone

Public design prototype: `client-login.html` and generated `/client-login/` route. Uses illustrative, browser-local data only; no authentication, OAuth, database, or live reporting is implemented. No credentials or client records should be added to these static files. Shared branding and button assets are inherited from VNW Media. Changes remain in GitHub preview; WordPress publishing is on hold.

## Planned product

- Client: sign in, see only assigned business reports, choose date ranges, view source freshness and connection errors.
- Agency admin: invite clients, assign memberships, authorize Google services, select properties/accounts/locations, revoke connections, and investigate sync failures.
- Keep client sign-in distinct from Google authorization. Clients do not need to grant Google access simply to view reports if an authorized agency account already manages the assigned property.

## Backend foundation to implement

Serve a backend separately from GitHub Pages, ideally behind `/api/` on the production domain. Use a managed identity provider, verified invitations and server-managed HttpOnly/Secure/SameSite sessions. Enforce client membership and admin permissions on every API call and database query. Browser selectors are not authorization.

Suggested routes (contracts only; not implemented):

| Route | Purpose |
| --- | --- |
| GET /api/session | Current verified user and allowed workspaces |
| POST /api/invitations | Admin invites a client |
| GET /api/workspaces/:id/reports/:source?start=&end= | Authorized, normalized report |
| GET /api/workspaces/:id/connections | Admin connection health; never tokens |
| POST /api/workspaces/:id/connections/:source/authorize | Admin starts Google OAuth |
| GET /api/oauth/google/callback | Validate expiring state and PKCE, exchange code on server |
| POST /api/workspaces/:id/connections/:source/resource | Assign an authorized property/customer/location |
| DELETE /api/workspaces/:id/connections/:source | Admin revokes connection and queued syncs |

Data model: users; workspaces; memberships (workspace/user/role); invitations (hashed token, expiry); connections (workspace/source/resource/secret reference/status); report snapshots (workspace/source/resource/date range/time zone/currency/fetched_at/data_through/payload); sync jobs (connection/range/status/retry_at); audit events (actor/workspace/action/timestamp). Use composite foreign keys or equivalent constraints to prevent cross-workspace resource assignment. Store encrypted refresh tokens in a server-side secret store; database holds only the secret reference. Never return tokens to the browser or write them to logs.

Reports must include source, account identity, date range, time zone, currency where relevant, fetched_at, data_through, freshness/error state, and metric definitions. Preserve the last successful snapshot with a stale label on upstream failure. Retry transient errors with bounded exponential backoff; require reauthorization for revoked access. Deduplicate jobs. Do not sum conversions across sources as if they were unique customers. Cost per conversion is total cost / total conversions; CTR is total clicks / total impressions, not averages of daily rates. Handle empty results and zero denominators explicitly.

Use a queue and scheduled syncs with source-specific latency, quotas and retention; provide manual refresh subject to rate limits. “Live” means directly sourced Google data refreshed at a stated time, not a guarantee that all Google reporting is instantaneous. Select per-source retention after checking applicable Google policies.

## Google connection setup

Create an organization-owned Google Cloud project; configure consent screen, production domain, privacy policy and exact backend callback URLs. Enable required APIs. Use incremental OAuth consent, least privilege, expiring single-use state bound to the administrator/session/workspace, and PKCE. Confirm external-app verification requirements before inviting clients. Configure secrets through the backend host, not the public repository.

| Source | API / resource | Access |
| --- | --- | --- |
| SEO | Search Console Search Analytics / verified site property | webmasters.readonly |
| PPC | Google Ads / customer ID and optional manager login customer ID | adwords; API access requirements apply |
| Business Profile | Business Profile Performance / location | business.manage; API project access approval applies |
| Analytics | Analytics Data API / GA4 property | analytics.readonly |

Business Profile's OAuth permission is broader than read-only; the reporting backend must expose no profile mutation operations. Google Ads also uses a broad scope: keep the integration reporting-only. Use the current supported Ads API version at implementation time. Confirm current developer-token or Cloud-managed access eligibility rather than assuming a token exemption.

Official references checked November 6, 2026:
- https://developers.google.com/webmaster-tools/v1/how-tos/search_analytics
- https://developers.google.com/google-ads/api/docs/oauth/overview
- https://developers.google.com/google-ads/api/docs/api-policy/developer-token
- https://developers.google.com/my-business/content/prereqs
- https://developers.google.com/my-business/reference/performance/rest
- https://developers.google.com/analytics/devguides/reporting/data/v1/basics

## Delivery sequence

1. Review this layout and choose identity provider/backend host.
2. Implement invitations, sessions and tenant isolation; test denied cross-client access and revoked memberships.
3. Connect one internal GA4 property end to end, including token refresh, denied consent, empty data and stale-data behavior.
4. Add Search Console, Ads and Business Profile adapters with resource selection and audit logs.
5. Test with two separate client workspaces; validate money, time zones, date boundaries, permissions and API failures before production.

## Preview and validation

Serve repository root with a local static server and visit `/client-login/`. Navigation, period selection and connection requirement disclosures work without dependencies. Period selection changes sample KPI values and illustrative bars; breakdown rows are explicitly fixed examples. Run `node --check client-portal.js` and `node scripts/build-clean-url-preview.cjs` after source changes. Generated directory copies must not be edited directly.
