# VNW Media 0.4.6 — clean URLs and form repair

Deployed to https://vnwmedia.net/ on October 19, 2026. Page source: `bb220648952bf952db57999c8fdfbc5b1ce05884`. Shared script repair backed up in GitHub main at `5c92b6ce57ad66312f00b6cb82bd8346b6711c5c`.

## Corrected upload

Use **vnw-media-wordpress-elementor-0.4.6-form-fix.zip**, SHA256 **ca4eec300b80bc58ca996958d08bf540d00077b17be5da3bc461de8fcbd29b30**. This is the corrected backup for the live 0.4.6 theme. Do not upload the earlier unpatched 0.4.6 ZIP: it contains the form-freeze bug. The corrected backup also fixes the release manifest's stale descriptive theme_version field; public rendering is unchanged.

Includes all 211 approved pages, 230 permanent legacy-address redirects with query preservation, clean canonical URLs and sitemap, repaired navigation/logo paths, the single Selected Client Work ticker, and the thank-you capabilities strip with all 22 reviews. All 1,406 previous Elementor widget definitions remain available for saved edits.

The freeze came from reading form.action when a WordPress hidden input named action shadowed that property. The clean URL observer repeatedly rewrote its own action attribute. The repair reads the raw attribute and bumps the shared script cache version to `20261019-clean-urls-form-fix`. Submission validation, nonce, endpoint, email recipient and existing formatter are unchanged.

## Live verification

The safe updater finished: all 211 pages were already current, with saved edits retained. Elementor files/data and Hostinger website/CDN caches were cleared. Final anonymous HTTP audit passed for 211 clean pages, 230 legacy redirects, 258 referenced theme assets, and the native sitemap. Representative desktop/mobile browser checks cover navigation, Our Work, thank-you content and the repaired forms.

Exactly two human-approved inquiries were sent: Hero strategy form (Desktop) at 17:24:44 UTC and Mobile quick-contact form at 17:26:05 UTC. Both reached /thank-you/ without freezing. Both were confirmed in contactus@vnwmedia.com's INBOX through the connected mailbox, including expected website/context and Reply-To. Mobile campaign attribution was retained. No SMTP, Gmail authorization, DNS, mail plugin, sender or recipient settings changed. Future inbox placement is not guaranteed.

## Checks and limits

All 18 source checks pass. Local native WordPress route tests cover 211 pages and 230 redirects, query preservation, five distinct overview/folder pairs, and unchanged saved content. Fresh import and 0.4.5 upgrade checks passed, including manual-edit protection and repeatability. The saved `scripts/check-form-loop.cjs` uses a localhost-only HTTP fixture: desktop and dynamic mobile forms remain responsive and send exactly one POST while preserving endpoint/action/nonce; no email is sent by that test.

The full local browser sweep encountered a Playground SQLite connection problem and is not counted as passed. The public HTTP sweep, representative live browser checks and the two live inbox deliveries provide the production verification. Evidence is in `qa/release-0.4.6.json` and `qa/live-0.4.6/`.

## Reinstall only if needed

No further upload is needed on the live site. For recovery, retain a hosting/database backup, upload the corrected ZIP through Appearance → Themes → Add Theme → Upload Theme and choose Replace current with uploaded. Leave Elementor active. Run Appearance → VNW Latest HTML Update → Apply latest HTML to unchanged pages; edited pages are skipped, snapshots use `_vnw_before_046`. Clear Elementor and Hostinger caches. Never install local test blueprints or mail-test fixtures on production.
