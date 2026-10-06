import {readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const additions = {
  'auto-repair.html': [
    'How much does a website for an auto repair or body shop cost?',
    'The scope depends on repair and collision service pages, shop photography, location details, estimate or booking forms, and any integrations. We can start with the pages and contact path drivers need most, then outline an affordable first phase before discussing a larger rebuild.'
  ],
  'day-care.html': [
    'How much does local SEO for a daycare cost?',
    'The scope depends on the number of campuses and programs, existing page quality, eligible business profiles, and local competition. We can prioritize the program and tour information families need most and recommend an affordable first phase without a fixed package.'
  ],
  'healthcare.html': [
    'How much does PPC management for a healthcare practice cost?',
    'Management scope depends on the services and locations advertised, approved landing pages, and privacy-aware inquiry tracking. Ad spend is separate from management. We can begin with a focused service or appointment campaign and explain the scope before launch.'
  ],
  'home-services-contractors.html': [
    'How much does local SEO for a home-services business cost?',
    'The work depends on the services offered, actual service area, website condition, business profile information, and local competition. We can focus first on the highest-priority service and estimate path, then propose an affordable scope based on what the business needs.'
  ],
  'legal-professional-services.html': [
    'How much does a law firm or professional-services website cost?',
    'Scope depends on practice or service pages, professional biographies, content review, accessibility, intake forms, and any integrations. We can prioritize the information prospective clients need to assess fit and recommend an affordable first phase before a full rebuild.'
  ],
  'real-estate.html': [
    'How much does PPC management for a real estate business cost?',
    'Management scope depends on whether campaigns serve buyers, sellers, renters, or property owners, plus the markets, landing pages, and inquiry tracking involved. Ad spend is separate. We can begin with one audience and explain the management work before expanding.'
  ],
  'restaurant.html': [
    'How much does local SEO for a restaurant cost?',
    'The scope depends on the number of venues, menu and event information, business profile accuracy, ordering or reservation paths, and local competition. A focused plan for one restaurant can be a more affordable starting point than a multi-location program.'
  ],
  'retail-ecommerce.html': [
    'How much does an eCommerce website cost?',
    'Catalog size, product variants, checkout, inventory and shipping integrations, content, and migration all affect scope. Improving the current store may be an affordable first phase; we review the buying path before recommending a larger build.'
  ]
};
const escapeHtml = value => value.replace(/[&<>"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));

for (const [file, [question, answer]] of Object.entries(additions)) {
  const target = path.join(root, 'industries', file);
  let html = await readFile(target, 'utf8');
  const start = html.indexOf('<section class="indl-faq" id="faq"');
  const end = html.indexOf('</section>', start);
  const lastDetailsEnd = html.lastIndexOf('</details>', end) + '</details>'.length;
  const schemaMatch = html.match(/<script type="application\/ld\+json" data-faq-schema>([^<]+)<\/script>/);
  if (start < 0 || end < 0 || lastDetailsEnd < start || !schemaMatch) throw new Error(`FAQ section or schema missing: ${file}`);
  const schema = JSON.parse(schemaMatch[1]);
  const markup = `<details><summary>${escapeHtml(question)}<span>+</span></summary><p>${escapeHtml(answer)}</p></details>`;
  const hasVisibleQuestion = html.slice(start, end).includes(`<summary>${escapeHtml(question)}<span>`);
  const hasSchemaQuestion = schema.mainEntity.some(item => item.name === question);
  if (hasVisibleQuestion !== hasSchemaQuestion) throw new Error(`FAQ and schema differ: ${file}`);
  if (hasVisibleQuestion) continue;
  html = html.slice(0, lastDetailsEnd) + markup + html.slice(lastDetailsEnd);
  schema.mainEntity.push({'@type':'Question', name:question, acceptedAnswer:{'@type':'Answer', text:answer}});
  html = html.replace(schemaMatch[0], `<script type="application/ld+json" data-faq-schema>${JSON.stringify(schema)}</script>`);
  await writeFile(target, html);
}
