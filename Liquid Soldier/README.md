# Liquid Soldier hybrid chatbot

This package contains a production-style, bottom-right chatbot prototype built from the approved Chat box FAQ language and a public-site audit completed September 3, 2026.

## Package contents

- `index.html` — drop-in prototype and configuration
- `assets/chatbot.css` — responsive widget styling
- `assets/chatbot.js` — conversation, matching, memory, lead capture, and submission logic
- `assets/liquid-soldier-logo.webp` — the current logo used by the live chatbot
- `intents.json` — machine-readable intent and routing library
- `SOURCE-AUDIT.md` — coverage, source notes, and live-data boundaries

## Preview locally

Because the chatbot loads `intents.json`, view it through a local web server rather than double-clicking `index.html`.

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080` from inside this folder.

## Configure lead delivery

In `index.html`, set `window.LIQUID_SOLDIER_CHAT_CONFIG.leadEndpoint` to an HTTPS endpoint that accepts a JSON `POST`.

The payload contains:

- source, timestamp, and a unique submission ID for backend deduplication
- page URL and browser user agent
- detected intent and destination department
- collected lead fields
- remembered conversation entities
- intent history
- full visitor/bot transcript

No lead summary is shown to the visitor. After an accepted response from the endpoint, the visitor sees only the success confirmation. When no endpoint is configured, this public prototype clearly identifies the handoff as a prototype test rather than claiming that a team received it. Set `demoSubmissionWhenEndpointMissing` to `false` before production so an unconfigured endpoint routes visitors to Contact Us instead.

Do not put private API keys in this front-end file. Authenticate and forward leads from a server-side endpoint. Configure CORS to allow the production website origin, validate and rate-limit submissions, sanitize all fields, log consent as required, and return a 2xx status only after the lead has been accepted.

## Matching and conversation behavior

The browser engine combines phrase/keyword scoring, typo-tolerant token comparison, synonyms, explicit-topic priority, active-topic weighting, and multi-intent detection. It keeps the current and previous topics, exposes a queued second intent as a guided option, allows immediate topic switching, understands short pronoun follow-ups in the active context, and keeps free-text entry available.

All guided choices in `intents.json` use explicit actions (`intent`, `link`, `lead`, `set_entity`, or `system`) so buttons do not rely on fuzzy rerouting. Contact collection can be paused for a new question and resumed, emergency wording always takes priority, and restart/reload safeguards prevent stale prompts or duplicate automatic submissions.

Safety and accuracy rules in the intent library prevent stored prices, availability, leadership names, financial terms, or jurisdiction-dependent facts from being presented as permanently current. Medical questions are limited to label guidance, healthcare-professional referral, and urgent emergency routing.

## Integration

The widget uses plain HTML, CSS, and JavaScript and has no third-party runtime dependency. For WordPress, enqueue the CSS and JavaScript, add the widget markup near the end of the page template, update asset paths, and set the lead endpoint. Keep the current page URLs in `intents.json` synchronized if site routes change.
