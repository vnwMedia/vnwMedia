# Liquid Soldier conversational chatbot prototype

## Run it

Open `index.html` in a modern browser. The prototype has no build step. An internet connection is used only to load the Font Awesome icon stylesheet; the Liquid Soldier logo and the floating chat icon are included locally.

## What is included

- The latest supplied Liquid Soldier widget layout, sizing, spacing, logo, and floating SVG chat icon
- Guided buttons and free-text questions available throughout the conversation
- Natural phrase and keyword routing across products, coffee, supplements, shipping, tracking, returns, damaged orders, franchising, franchise cost/training/application/approval, investing, charity, donations, volunteering, careers, remote work, media, articles, partnerships, ownership, location, nonprofit status, payment security, and contact
- Word normalization, common misspelling tolerance, concept aliases, and semantic scoring—not just exact phrase matching
- Multi-topic recognition when a visitor combines two related questions in one message
- Follow-up context for short questions such as “How much?”, “Is it available?”, or “Tell me more”
- Helpful clarification prompts in place of dead-end “answer not found” messages
- Variable human-style typing delays
- Conversational name, email, and optional phone capture when the visitor requests follow-up
- Private lead payload preparation; visitors only see a submission confirmation
- Restart, minimize, close, responsive mobile layout, and keyboard submission

## Connect lead delivery

This package is a browser prototype. In `index.html`, set `LEAD_ENDPOINT` to the client's secure server-side CRM or webhook endpoint. The prototype sends JSON containing the lead details, interest, conversation history, and submission time.

Do not put private API keys, SMTP passwords, or client email credentials in browser code. The receiving service should validate and sanitize fields, add spam protection and rate limits, record any legally required consent, and deliver the lead summary privately to the client.

## Before production launch

Have the client re-approve exact business answers and add live links for products, tracking, policies, donations, careers, franchise applications, investment inquiries, and contact. Current pricing, stock, territories, roles, and investment terms should come from maintained business systems rather than hard-coded chatbot copy.
