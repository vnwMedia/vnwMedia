# Liquid Soldier chatbot source and coverage audit

Audit date: September 3, 2026

## Sources used

1. The approved Chat box FAQ/content referenced in the original ChatGPT conversation. Its approved FAQ wording was also recoverable from the JavaScript deployed with the current Liquid Soldier chatbot.
2. The current public website at `https://liquidsoldier.com`, including the WordPress public page inventory and relevant page bodies.

The public page index contained 94 pages at audit time. Draft, demo, duplicate, checkout utility, and obsolete pages were not turned into separate business intents unless they represented a distinct visitor task.

## Material coverage

The intent library covers:

- company overview, mission, charitable purpose, location, contact, and navigation
- products, recommendations, price/availability, ingredients, manufacturing, clothing, collectibles, cart, checkout, coupons, and payment security
- shipping, tracking, cancellation, address changes, damage, missing/wrong items, returns, refunds, confirmations, and complaints
- Liquid Soldier Coffee and subscriptions/caffeine questions
- supplements, labels, directions, medical claims, interactions, adverse reactions, and emergency boundaries
- ItsAllMedical/CBD products, age, legality, COAs, interactions, and returns
- Marketplace buyers, accounts, security, vendor shipping, categories, reviews, disputes, and returns
- vendor application, required documents, approval status, login/password, dashboard, listings, orders, and payouts
- franchising overview, cost, territory, experience, training, timeline, financing, earnings, and application
- investors, terms, risk/returns, strategic interest, and existing shareholder support
- Liquid Soldier Media, articles, contributor submissions, press, podcasts, sponsorships, and partnerships
- careers, applications, remote work, internships, Human Resources, and executive assistants
- donations, receipts/tax boundary, volunteering, education, outreach, events, and community partnerships
- leadership, Executive Team, Executive Committee, Advisory Committee, Medical Committee, and Health & Wellness
- Technology & IT, Web Design, Marketing, Public Relations, Social Media, Social Branding, Sales, retail, wholesale, distribution, Finance, Accounting, M&A, and Product Development
- Privacy, Terms, Additional Terms, Acceptable Use, Community Guidelines, Cookies, Accessibility, Confidentiality/Data Protection, and Marketplace Return Policy
- vague questions, typos, multi-intent messages, pronoun references, topic switching/resumption, gratitude/exit, unsupported questions, live-data-only answers, lead success/failure, and human escalation

## Live-data-only rules

The chatbot does not permanently assert current product price, inventory, shipping eligibility, franchise territory, investment terms, leadership membership, job openings, subscription availability, or jurisdiction-dependent CBD rules. Those routes point to the current live page or the responsible department.

## Medical and financial boundaries

The chatbot does not diagnose, recommend personalized doses, promise health outcomes, provide legal or tax advice, or guarantee franchise/investment performance. Emergency symptom language routes the visitor to emergency services before any product-report workflow.

## Deployment note

The current site exposes duplicate and legacy utility routes. Before production, the client should confirm which storefront/account system is canonical and whether all listed public policies are approved and current. This package deliberately links only to the clearest relevant public pages and treats changing details as live-data-only.
