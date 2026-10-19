# Website working location and backup policy

The user designated this GitHub-connected repository as the active website working copy.
Remote: https://github.com/vnwMedia/vnwMedia.git
Published site: https://vnwmedia.github.io/vnwMedia/

## Required backup workflow

- Keep website source, generated images, scripts, and website working assets in this repository. Respect explicit requests for separate documents outside the website.
- After every completed change or asset generation, perform proportionate validation, review the changes, commit the intended website files, and push to origin/main. The user has authorized this ongoing workflow.
- For extended work, preserve useful intermediate work in local commits. Push safe checkpoints to a clearly named backup branch when unfinished work should not be published on main.
- Check untracked and ignored files so website assets are not accidentally omitted. Never commit credentials, API keys, private environment files, or unrelated personal files.
- Confirm the remote branch contains the intended commit before reporting the backup complete. For published website changes, also verify the deployment separately.
- Preserve Git history. Do not force-push, delete backups, or overwrite unrelated work.
- If authentication, permissions, connectivity, or deployment blocks progress, report precisely what is saved locally and what has not reached GitHub. Do not claim an unsuccessful backup succeeded.
- This workflow runs while working on this project; it is not a continuous background backup service and does not back up unrelated computer files.

## Shared button design

- Every VNW Media page, including new pages and design previews, must load `site-buttons.css` after page-specific styles and `site-buttons.js` after rendering scripts. Resolve both paths relative to the page depth.
- Reuse the homepage pill pattern: fully rounded corners, blue primary CTAs with white text, the existing Inter type scale, and a decorative arrow on CTA links. Preserve outline secondary buttons, telephone buttons, and the homepage navigation conventions.
- Preserve button actions, validation, filtering, selected states, accessibility labels, and keyboard behavior. Text links and linked cards are not filled CTA buttons.
- Do not modify separate client projects such as Liquid Soldier or the separate WordPress upload as part of this shared VNW Media styling.

## Clean URL preview build

- Edit the original approved `.html` source files. Public URLs use directory paths without `.html`; 84 directory indexes are generated compatibility outputs, not separately maintained page designs.
- After any source page or shared route-client change, run `node scripts/build-clean-url-preview.cjs` before testing, committing, and pushing. It updates clean copies, metadata, the preview sitemap and `site-clean-urls.js`.
- `reports/clean-url-preview-build.json` identifies generated outputs and their original asset bases. Do not hand-edit generated copies or remove the originals that serve old links and WordPress exports.
- New production pages need distinct entries in `wordpress/clean-urls/route-manifest.json`; preserve the five explicit `/overview/` routes that prevent overwriting existing industry directory pages.
- WordPress publishing is on hold pending the user's review of these GitHub changes. Do not send this migration to the publishing chat or deploy it to WordPress until the user explicitly approves that next step.
