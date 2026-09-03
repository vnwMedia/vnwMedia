window.LIQUID_SOLDIER_KNOWLEDGE = {
  "schemaVersion": "1.0",
  "brand": "Liquid Soldier",
  "generated": "2026-09-03",
  "sources": [
    {
      "type": "approved_faq",
      "name": "Chat box.pdf / approved FAQ wording recovered from deployed chatbot and referenced conversation"
    },
    {
      "type": "website",
      "url": "https://liquidsoldier.com",
      "audited": "2026-09-03",
      "notes": "Public WordPress page inventory and relevant page content"
    }
  ],
  "leadEndpoint": "__CONFIGURE_IN_INDEX_HTML__",
  "behavior": {
    "freeTextAlwaysEnabled": true,
    "fuzzyMatching": true,
    "semanticSynonyms": true,
    "multiIntent": true,
    "contextualMemory": true,
    "topicSwitching": true,
    "variableTypingDelay": true,
    "guidedButtons": true,
    "visitorLeadSummary": false,
    "helpfulFallbackOnly": true
  },
  "count": 133,
  "intents": [
    {
      "id": "company_overview",
      "category": "General",
      "examples": [
        "what is liquid soldier",
        "tell me about the company"
      ],
      "keywords": [
        "about",
        "company",
        "liquid soldier"
      ],
      "response": "Liquid Soldier is a health, wellness, and community-focused organization. It brings together wellness products, education, media, charitable giving, franchising, and community outreach.",
      "followUps": [
        "Would you like to explore products, the mission, or business opportunities?"
      ],
      "buttons": [
        {
          "label": "Explore products",
          "action": "intent",
          "intentId": "product_overview"
        },
        {
          "label": "Our mission",
          "action": "intent",
          "intentId": "mission_values"
        },
        {
          "label": "Opportunities",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "general",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "General Information",
      "url": "https://liquidsoldier.com/about-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "company_services",
      "category": "General",
      "examples": [
        "what do you do",
        "what do you offer",
        "how can you help"
      ],
      "keywords": [
        "offer",
        "services",
        "products",
        "opportunities"
      ],
      "response": "Liquid Soldier combines wellness products, coffee, supplements, Marketplace shopping, media, education, charitable initiatives, franchising, investment opportunities, and specialized departments.",
      "followUps": [
        "Which area interests you most?"
      ],
      "buttons": [
        {
          "label": "Shop",
          "action": "intent",
          "intentId": "product_overview"
        },
        {
          "label": "Business opportunities",
          "action": "system"
        },
        {
          "label": "Community",
          "action": "intent",
          "intentId": "community_partnership"
        },
        {
          "label": "Departments",
          "action": "intent",
          "intentId": "departments_overview"
        }
      ],
      "memory": {
        "topic": "general",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "General Information",
      "url": "https://liquidsoldier.com/about-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "mission_values",
      "category": "General",
      "examples": [
        "what is your mission",
        "why liquid soldier"
      ],
      "keywords": [
        "mission",
        "values",
        "purpose",
        "why"
      ],
      "response": "Liquid Soldier's mission is to empower people to prioritize healthy living through compassion, education, mindfulness, and support for people and communities in need.",
      "followUps": [
        "Would you like to learn how purchases support the mission?"
      ],
      "buttons": [
        {
          "label": "How purchases help",
          "action": "intent",
          "intentId": "charity_supported"
        },
        {
          "label": "Donate",
          "action": "intent",
          "intentId": "donate"
        },
        {
          "label": "About us",
          "action": "link",
          "url": "https://liquidsoldier.com/about-us/"
        }
      ],
      "memory": {
        "topic": "general",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "General Information",
      "url": "https://liquidsoldier.com/about-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "charity_supported",
      "category": "General",
      "examples": [
        "what charity do you support",
        "where do proceeds go"
      ],
      "keywords": [
        "charity",
        "zilinski",
        "proceeds",
        "veterans",
        "service dogs"
      ],
      "response": "A portion of qualifying proceeds supports the Lt. Dennis W. Zilinski II Memorial Fund and related charitable initiatives serving our nation's heroes.",
      "followUps": [
        "Would you like to learn more or make a donation?"
      ],
      "buttons": [
        {
          "label": "Donate",
          "action": "intent",
          "intentId": "donate"
        },
        {
          "label": "Community outreach",
          "action": "intent",
          "intentId": "community_partnership"
        }
      ],
      "memory": {
        "topic": "general",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "General Information",
      "url": "https://liquidsoldier.com/about-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "organization_type",
      "category": "General",
      "examples": [
        "are you a nonprofit",
        "is this a charity"
      ],
      "keywords": [
        "nonprofit",
        "charity",
        "company type"
      ],
      "response": "Liquid Soldier is a mission-driven organization offering products, services, and business opportunities while supporting charitable initiatives. For legal or tax-status documentation, the appropriate team should confirm the current details.",
      "followUps": [
        "Is your question about donating, investing, or company status?"
      ],
      "buttons": [
        {
          "label": "Donate",
          "action": "intent",
          "intentId": "donate"
        },
        {
          "label": "Investor information",
          "action": "link",
          "url": "https://liquidsoldier.com/investor-information/"
        },
        {
          "label": "Contact team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "general",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "General Information",
      "url": "https://liquidsoldier.com/about-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "location_hours",
      "category": "General",
      "examples": [
        "where are you located",
        "what are your hours"
      ],
      "keywords": [
        "location",
        "address",
        "hours",
        "open",
        "headquarters"
      ],
      "response": "Locations and operating hours can change. I can take you to the current contact information or route a location-specific question to the team.",
      "followUps": [
        "Which city, location, or department do you need?"
      ],
      "buttons": [
        {
          "label": "Contact us",
          "action": "link",
          "url": "https://liquidsoldier.com/contact-us/"
        },
        {
          "label": "Ask the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "general",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "General Information",
      "url": "https://liquidsoldier.com/about-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "human_contact",
      "category": "General",
      "examples": [
        "can someone call me",
        "contact a person",
        "speak to support"
      ],
      "keywords": [
        "human",
        "person",
        "representative",
        "call",
        "contact",
        "support"
      ],
      "response": "Absolutely. Tell me what you need help with so I can route your message to the right Liquid Soldier team.",
      "followUps": [
        "What is your question about?"
      ],
      "buttons": [
        {
          "label": "Customer support",
          "action": "intent",
          "intentId": "customer_service"
        },
        {
          "label": "Franchising",
          "action": "intent",
          "intentId": "franchise_overview"
        },
        {
          "label": "Investing",
          "action": "intent",
          "intentId": "investment_overview"
        },
        {
          "label": "Other",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "general",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_request",
      "leadFields": [
        "name",
        "email",
        "phone"
      ],
      "department": "General Information",
      "url": "https://liquidsoldier.com/about-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "site_navigation",
      "category": "General",
      "examples": [
        "where can i find",
        "take me to",
        "open the page"
      ],
      "keywords": [
        "find",
        "page",
        "where",
        "navigate",
        "take me"
      ],
      "response": "I can point you to the right live page. What are you looking for - a product, order help, an opportunity, a department, or a policy?",
      "followUps": [
        "What would you like to find?"
      ],
      "buttons": [
        {
          "label": "Shop",
          "action": "intent",
          "intentId": "product_overview"
        },
        {
          "label": "Order help",
          "action": "intent",
          "intentId": "order_support_overview"
        },
        {
          "label": "Opportunities",
          "action": "system"
        },
        {
          "label": "Policies",
          "action": "intent",
          "intentId": "policies_overview"
        }
      ],
      "memory": {
        "topic": "general",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "General Information",
      "url": "https://liquidsoldier.com/about-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "customer_experience",
      "category": "Shopping",
      "examples": [
        "customer experience",
        "customer experience department",
        "retail customer experience"
      ],
      "keywords": [
        "customer experience",
        "retail support",
        "shopping experience"
      ],
      "response": "Liquid Soldier's Sales, Retail & Customer Experience group supports the customer journey across products, purchasing, service, and relationship-building. For an immediate service question, Customer Service can help by phone at (844) 221-9709 or email at contact@liquidsoldier.com.",
      "followUps": [
        "Do you need shopping help, order support, sales information, or customer service?"
      ],
      "buttons": [
        {
          "label": "Customer service",
          "action": "intent",
          "intentId": "customer_service"
        },
        {
          "label": "Order help",
          "action": "intent",
          "intentId": "order_support_overview"
        },
        {
          "label": "Sales team",
          "action": "intent",
          "intentId": "sales_team"
        },
        {
          "label": "Department page",
          "action": "link",
          "url": "https://liquidsoldier.com/sales-retail-customer-experience/"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "product_overview",
      "category": "Shopping",
      "examples": [
        "what products do you sell",
        "show me products"
      ],
      "keywords": [
        "products",
        "shop",
        "buy",
        "catalog"
      ],
      "response": "Liquid Soldier offers coffee, supplements, clothing, collectibles, medical-related products, and Marketplace goods and services. Current selection and availability are shown on the live product pages.",
      "followUps": [
        "What type of product are you shopping for?"
      ],
      "buttons": [
        {
          "label": "Coffee",
          "action": "intent",
          "intentId": "coffee_overview"
        },
        {
          "label": "Supplements",
          "action": "intent",
          "intentId": "supplement_overview"
        },
        {
          "label": "CBD / ItsAllMedical",
          "action": "intent",
          "intentId": "cbd_overview"
        },
        {
          "label": "Marketplace",
          "action": "intent",
          "intentId": "marketplace_overview"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "product_recommendation",
      "category": "Shopping",
      "examples": [
        "which product is right for me",
        "help me choose"
      ],
      "keywords": [
        "recommend",
        "best",
        "choose",
        "goal",
        "energy",
        "focus",
        "gift"
      ],
      "response": "I can narrow it down without making medical claims. Are you shopping for coffee, general wellness support, CBD information, apparel, a gift, or something else?",
      "followUps": [
        "What result or type of product are you looking for?"
      ],
      "buttons": [
        {
          "label": "Energy",
          "action": "set_entity",
          "field": "shoppingGoal",
          "response": "For energy-oriented options, compare the current coffee and supplement listings.",
          "nextButtons": [
            {
              "label": "Coffee",
              "action": "intent",
              "intentId": "coffee_overview"
            },
            {
              "label": "Supplements",
              "action": "intent",
              "intentId": "supplement_overview"
            }
          ]
        },
        {
          "label": "General wellness",
          "action": "set_entity",
          "field": "shoppingGoal",
          "response": "For general wellness, compare the current supplement and CBD information without relying on medical claims.",
          "nextButtons": [
            {
              "label": "Supplements",
              "action": "intent",
              "intentId": "supplement_overview"
            },
            {
              "label": "CBD information",
              "action": "intent",
              "intentId": "cbd_overview"
            }
          ]
        },
        {
          "label": "Gift",
          "action": "set_entity",
          "field": "shoppingGoal",
          "response": "For gifts, you can compare coffee, apparel, and collectibles.",
          "nextButtons": [
            {
              "label": "Coffee",
              "action": "intent",
              "intentId": "coffee_overview"
            },
            {
              "label": "Clothing",
              "action": "intent",
              "intentId": "clothing"
            },
            {
              "label": "Collectibles",
              "action": "intent",
              "intentId": "collectibles"
            }
          ]
        },
        {
          "label": "Browse categories",
          "action": "intent",
          "intentId": "product_overview"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "product_availability",
      "category": "Shopping",
      "examples": [
        "is it in stock",
        "do you have this"
      ],
      "keywords": [
        "available",
        "stock",
        "sold out",
        "have",
        "inventory"
      ],
      "response": "Availability changes, so the product page is the reliable source. Tell me the product or category and I’ll send you to its current listing.",
      "followUps": [
        "Which product are you checking?"
      ],
      "buttons": [
        {
          "label": "Coffee",
          "action": "intent",
          "intentId": "coffee_overview"
        },
        {
          "label": "Supplements",
          "action": "intent",
          "intentId": "supplement_overview"
        },
        {
          "label": "CBD",
          "action": "intent",
          "intentId": "cbd_overview"
        },
        {
          "label": "Marketplace",
          "action": "intent",
          "intentId": "marketplace_overview"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "product_price",
      "category": "Shopping",
      "examples": [
        "how much is it",
        "what is the price"
      ],
      "keywords": [
        "price",
        "cost",
        "how much",
        "sale"
      ],
      "response": "Prices can change. Tell me which product you mean and I’ll guide you to its current listing rather than quote an outdated price.",
      "followUps": [
        "Which product are you asking about?"
      ],
      "buttons": [
        {
          "label": "Coffee",
          "action": "intent",
          "intentId": "coffee_overview"
        },
        {
          "label": "Supplements",
          "action": "intent",
          "intentId": "supplement_overview"
        },
        {
          "label": "CBD",
          "action": "intent",
          "intentId": "cbd_overview"
        },
        {
          "label": "Marketplace",
          "action": "intent",
          "intentId": "marketplace_overview"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "product_ingredients",
      "category": "Shopping",
      "examples": [
        "what are the ingredients",
        "does it contain allergens"
      ],
      "keywords": [
        "ingredients",
        "allergen",
        "nutrition",
        "label",
        "contains"
      ],
      "response": "Ingredients and allergen details vary by item. Please use the current product label and listing; if you have an allergy or medical concern, confirm with a qualified healthcare professional before use.",
      "followUps": [
        "Which product would you like to check?"
      ],
      "buttons": [
        {
          "label": "Find product",
          "action": "intent",
          "intentId": "product_overview"
        },
        {
          "label": "Safety guidance",
          "action": "intent",
          "intentId": "supplement_safety"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "made_in_usa",
      "category": "Shopping",
      "examples": [
        "is it made in usa",
        "where is it manufactured"
      ],
      "keywords": [
        "made",
        "usa",
        "manufactured",
        "sourced",
        "country"
      ],
      "response": "Sourcing and manufacturing vary by product. The individual listing is the best place to confirm current origin details.",
      "followUps": [
        "Which product are you asking about?"
      ],
      "buttons": [
        {
          "label": "Find product",
          "action": "intent",
          "intentId": "product_overview"
        },
        {
          "label": "Contact product team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "clothing",
      "category": "Shopping",
      "examples": [
        "do you sell shirts",
        "liquid soldier clothing"
      ],
      "keywords": [
        "clothing",
        "shirt",
        "hoodie",
        "apparel",
        "merch"
      ],
      "response": "Liquid Soldier has a clothing line area. Current items, sizes, colors, prices, and availability should be checked on the live clothing page.",
      "followUps": [
        "Would you like to view the clothing page?"
      ],
      "buttons": [
        {
          "label": "View clothing",
          "action": "link",
          "url": "https://liquidsoldier.com/sales-retail-customer-experience/clothing-line/"
        },
        {
          "label": "Other products",
          "action": "intent",
          "intentId": "product_overview"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/clothing-line/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "collectibles",
      "category": "Shopping",
      "examples": [
        "do you have collectibles",
        "shop memorabilia"
      ],
      "keywords": [
        "collectible",
        "memorabilia",
        "souvenir"
      ],
      "response": "Collectibles are part of Liquid Soldier's product offering. Current listings and availability should be confirmed in the live shop.",
      "followUps": [
        "Would you like help finding current collectibles?"
      ],
      "buttons": [
        {
          "label": "Browse products",
          "action": "link",
          "url": "https://liquidsoldier.com/sales-retail-customer-experience/"
        },
        {
          "label": "Marketplace",
          "action": "intent",
          "intentId": "marketplace_overview"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "checkout_payment",
      "category": "Shopping",
      "examples": [
        "how do i checkout",
        "what payments do you accept"
      ],
      "keywords": [
        "checkout",
        "payment",
        "card",
        "pay",
        "billing"
      ],
      "response": "You can complete eligible purchases through the secure checkout. Available payment methods are displayed during checkout and may vary.",
      "followUps": [
        "Are you having trouble paying or just checking accepted methods?"
      ],
      "buttons": [
        {
          "label": "Go to checkout",
          "action": "link",
          "url": "https://liquidsoldier.com/checkout/"
        },
        {
          "label": "Payment problem",
          "action": "intent",
          "intentId": "cart_issue"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/checkout/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cart_issue",
      "category": "Shopping",
      "examples": [
        "my cart is not working",
        "remove item from cart"
      ],
      "keywords": [
        "cart",
        "basket",
        "quantity",
        "coupon"
      ],
      "response": "I can help with the cart. Try refreshing once and confirming the item is still available. If the problem continues, I can route the details to customer support.",
      "followUps": [
        "Is this about an item, quantity, coupon, or checkout?"
      ],
      "buttons": [
        {
          "label": "Open cart",
          "action": "link",
          "url": "https://liquidsoldier.com/cart/"
        },
        {
          "label": "Contact support",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/cart/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "payment_security",
      "category": "Shopping",
      "examples": [
        "is checkout secure",
        "is my card safe"
      ],
      "keywords": [
        "secure",
        "payment",
        "card",
        "privacy",
        "safe"
      ],
      "response": "Liquid Soldier uses secure payment processing designed to protect customer information. Never send full card details through chat.",
      "followUps": [
        "Would you like the checkout page or privacy policy?"
      ],
      "buttons": [
        {
          "label": "Checkout",
          "action": "link",
          "url": "https://liquidsoldier.com/checkout/"
        },
        {
          "label": "Privacy policy",
          "action": "link",
          "url": "https://liquidsoldier.com/privacy-policy/"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "coupon_promotion",
      "category": "Shopping",
      "examples": [
        "do you have a coupon",
        "free shipping code"
      ],
      "keywords": [
        "coupon",
        "promo",
        "discount",
        "shipfree",
        "free shipping"
      ],
      "response": "The approved FAQ lists coupon code SHIPFREE for eligible free shipping. Eligibility can change, so the checkout result is the final confirmation.",
      "followUps": [
        "Would you like help applying the code?"
      ],
      "buttons": [
        {
          "label": "Open cart",
          "action": "link",
          "url": "https://liquidsoldier.com/cart/"
        },
        {
          "label": "Shipping help",
          "action": "intent",
          "intentId": "shipping_overview"
        }
      ],
      "memory": {
        "topic": "shopping",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Sales, Retail & Customer Experience",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "customer_service",
      "category": "Orders",
      "examples": [
        "customer service",
        "customer service information",
        "how do i contact customer service",
        "customer support phone number",
        "support contact information"
      ],
      "keywords": [
        "customer service",
        "customer support",
        "service department",
        "support number",
        "contact information"
      ],
      "response": "Liquid Soldier Customer Service is available Monday-Thursday, 9:00 AM-5:00 PM MST, and Friday, 9:00 AM-3:00 PM MST.\n\nPhone: (844) 221-9709\nEmail: contact@liquidsoldier.com\n\nYou can call, email, use the Contact Us form, or tell me what you need help with here.",
      "followUps": [
        "Is this about an order, product, return, website issue, or something else?"
      ],
      "buttons": [
        {
          "label": "Call customer service",
          "action": "link",
          "url": "tel:+18442219709"
        },
        {
          "label": "Email customer service",
          "action": "link",
          "url": "mailto:contact@liquidsoldier.com"
        },
        {
          "label": "Order help",
          "action": "intent",
          "intentId": "order_support_overview"
        },
        {
          "label": "Contact form",
          "action": "link",
          "url": "https://liquidsoldier.com/contact-us/"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "order_support_overview",
      "category": "Orders",
      "examples": [
        "order help",
        "order support",
        "help with an order",
        "orders"
      ],
      "keywords": [
        "order",
        "order support",
        "purchase help",
        "existing order"
      ],
      "response": "I can help with an existing order. Choose the closest issue, or describe what happened in your own words.",
      "followUps": [
        "What do you need help with?"
      ],
      "buttons": [
        {
          "label": "Track my order",
          "action": "intent",
          "intentId": "order_tracking"
        },
        {
          "label": "Change or cancel",
          "action": "intent",
          "intentId": "change_cancel_order"
        },
        {
          "label": "Damaged or wrong item",
          "action": "intent",
          "intentId": "damaged_order"
        },
        {
          "label": "Return or refund",
          "action": "intent",
          "intentId": "return_refund"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "shipping_overview",
      "category": "Orders",
      "examples": [
        "shipping",
        "shipping information",
        "delivery information"
      ],
      "keywords": [
        "shipping",
        "delivery",
        "ship order"
      ],
      "response": "I can help with shipping. Are you checking delivery time or cost, tracking an order, changing an address, or reporting a delivery problem?",
      "followUps": [
        "Which shipping question do you have?"
      ],
      "buttons": [
        {
          "label": "Shipping time",
          "action": "intent",
          "intentId": "shipping_time"
        },
        {
          "label": "Shipping cost",
          "action": "intent",
          "intentId": "shipping_cost"
        },
        {
          "label": "Track order",
          "action": "intent",
          "intentId": "order_tracking"
        },
        {
          "label": "Delivery problem",
          "action": "intent",
          "intentId": "customer_complaint"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "order_tracking",
      "category": "Orders",
      "examples": [
        "where is my order",
        "track my package"
      ],
      "keywords": [
        "track",
        "tracking",
        "package",
        "where is",
        "delivery"
      ],
      "response": "Once an order ships, tracking is typically sent to the email used at checkout. If you did not receive it, I can route an order lookup using your order number.",
      "followUps": [
        "Do you have your order number?"
      ],
      "buttons": [
        {
          "label": "I have it",
          "action": "lead"
        },
        {
          "label": "No order number",
          "action": "intent",
          "intentId": "order_not_found"
        },
        {
          "label": "Marketplace order",
          "action": "intent",
          "intentId": "marketplace_dispute"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required_for_handoff",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderNumber",
        "issue"
      ],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "shipping_time",
      "category": "Orders",
      "examples": [
        "how long does shipping take",
        "when will it arrive"
      ],
      "keywords": [
        "shipping time",
        "delivery time",
        "arrive",
        "processing"
      ],
      "response": "Shipping time varies by product availability, destination, and whether an approved Marketplace vendor ships the order directly.",
      "followUps": [
        "Is this a Liquid Soldier order or a Marketplace vendor order?"
      ],
      "buttons": [
        {
          "label": "Liquid Soldier order",
          "action": "intent",
          "intentId": "order_support_overview"
        },
        {
          "label": "Marketplace order",
          "action": "intent",
          "intentId": "marketplace_vendor_shipping"
        },
        {
          "label": "Track order",
          "action": "intent",
          "intentId": "order_tracking"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "shipping_cost",
      "category": "Orders",
      "examples": [
        "how much is shipping",
        "do you offer free shipping"
      ],
      "keywords": [
        "shipping cost",
        "free shipping",
        "delivery fee",
        "shipfree"
      ],
      "response": "The approved FAQ lists SHIPFREE for eligible free shipping. Final eligibility and any shipping charge appear in the cart or checkout.",
      "followUps": [
        "Would you like to open your cart?"
      ],
      "buttons": [
        {
          "label": "Open cart",
          "action": "link",
          "url": "https://liquidsoldier.com/cart/"
        },
        {
          "label": "Shipping policy",
          "action": "intent",
          "intentId": "shipping_overview"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "change_cancel_order",
      "category": "Orders",
      "examples": [
        "cancel my order",
        "change shipping address"
      ],
      "keywords": [
        "cancel",
        "change order",
        "address",
        "modify order"
      ],
      "response": "Order changes depend on fulfillment status, so timing matters. I can collect the order number and requested change for customer support right away.",
      "followUps": [
        "What would you like changed?"
      ],
      "buttons": [
        {
          "label": "Cancel order",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Change address",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Change item",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderNumber",
        "issue"
      ],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "damaged_order",
      "category": "Orders",
      "examples": [
        "my item arrived damaged",
        "broken product"
      ],
      "keywords": [
        "damaged",
        "broken",
        "leaking",
        "crushed",
        "photo"
      ],
      "response": "Please keep the item and packaging. Customer support will need the order number, affected item, and photos of the damage to review next steps.",
      "followUps": [
        "Would you like to start a support request?"
      ],
      "buttons": [
        {
          "label": "Start request",
          "action": "lead"
        },
        {
          "label": "Return policy",
          "action": "intent",
          "intentId": "return_refund"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderNumber",
        "issue",
        "photosAvailable"
      ],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "wrong_missing_item",
      "category": "Orders",
      "examples": [
        "wrong item",
        "something is missing"
      ],
      "keywords": [
        "wrong item",
        "missing",
        "incomplete",
        "shorted"
      ],
      "response": "I can route this for review. Please share the order number and tell us what was missing or incorrect.",
      "followUps": [
        "Would you like to start the order support request?"
      ],
      "buttons": [
        {
          "label": "Start request",
          "action": "lead"
        },
        {
          "label": "Track another shipment",
          "action": "intent",
          "intentId": "order_tracking"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderNumber",
        "issue"
      ],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "return_refund",
      "category": "Orders",
      "examples": [
        "can i return my order",
        "i want a refund"
      ],
      "keywords": [
        "return",
        "refund",
        "money back",
        "exchange"
      ],
      "response": "Return eligibility depends on the item and applicable policy. Marketplace purchases have a dedicated Marketplace Return Policy; CBD support may have separate terms.",
      "followUps": [
        "What kind of order is this?"
      ],
      "buttons": [
        {
          "label": "Marketplace",
          "action": "intent",
          "intentId": "marketplace_return_policy"
        },
        {
          "label": "CBD / ItsAllMedical",
          "action": "intent",
          "intentId": "cbd_returns"
        },
        {
          "label": "Other order",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/marketplace-return-policy/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "order_not_found",
      "category": "Orders",
      "examples": [
        "i never got confirmation",
        "order not showing"
      ],
      "keywords": [
        "confirmation",
        "order not found",
        "receipt",
        "email"
      ],
      "response": "First check the email address used at checkout, including spam or promotions. If the confirmation is still missing, I can route a lookup using your name, email, and approximate order date.",
      "followUps": [
        "Would you like support to look it up?"
      ],
      "buttons": [
        {
          "label": "Start lookup",
          "action": "lead"
        },
        {
          "label": "I found it",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderDate",
        "orderTotal"
      ],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "customer_complaint",
      "category": "Orders",
      "examples": [
        "i have a complaint",
        "bad experience"
      ],
      "keywords": [
        "complaint",
        "unhappy",
        "bad experience",
        "escalate"
      ],
      "response": "I want to get this to the right person. Tell me whether the issue involves an order, product, Marketplace vendor, website, staff interaction, or something else.",
      "followUps": [
        "What happened, and what resolution would help?"
      ],
      "buttons": [
        {
          "label": "Order",
          "action": "set_entity",
          "field": "issueType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Vendor",
          "action": "set_entity",
          "field": "issueType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Website",
          "action": "intent",
          "intentId": "technology_it"
        },
        {
          "label": "Other",
          "action": "set_entity",
          "field": "issueType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "orders",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderNumber",
        "issue"
      ],
      "department": "Customer Service",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "coffee_overview",
      "category": "Coffee",
      "examples": [
        "do you sell coffee",
        "tell me about your coffee"
      ],
      "keywords": [
        "coffee",
        "beans",
        "blend",
        "roast"
      ],
      "response": "Liquid Soldier Coffee is part of the brand's mission-driven wellness offering. Current blends, formats, prices, and availability are listed on the live coffee page.",
      "followUps": [
        "Are you looking for a blend, current price, or help choosing?"
      ],
      "buttons": [
        {
          "label": "View coffee",
          "action": "link",
          "url": "https://liquidsoldier.com/liquid-soldier-coffee/"
        },
        {
          "label": "Help me choose",
          "action": "intent",
          "intentId": "product_recommendation"
        },
        {
          "label": "Coffee availability",
          "action": "intent",
          "intentId": "product_availability"
        }
      ],
      "memory": {
        "topic": "coffee",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Liquid Soldier Coffee",
      "url": "https://liquidsoldier.com/liquid-soldier-coffee/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "coffee_blends",
      "category": "Coffee",
      "examples": [
        "what coffee blends do you offer",
        "dark roast"
      ],
      "keywords": [
        "blend",
        "roast",
        "ground",
        "whole bean",
        "decaf"
      ],
      "response": "The available coffee lineup can change. I can take you to the current coffee page so you can compare listed blends and formats.",
      "followUps": [
        "Do you prefer a particular roast or format?"
      ],
      "buttons": [
        {
          "label": "Browse coffee",
          "action": "link",
          "url": "https://liquidsoldier.com/liquid-soldier-coffee/"
        },
        {
          "label": "Whole bean",
          "action": "set_entity",
          "field": "coffeeFormat",
          "response": "I’ll remember that you prefer whole bean.",
          "nextButtons": [
            {
              "label": "Browse coffee",
              "action": "link",
              "url": "https://liquidsoldier.com/liquid-soldier-coffee/"
            },
            {
              "label": "Check availability",
              "action": "intent",
              "intentId": "product_availability"
            }
          ]
        },
        {
          "label": "Ground",
          "action": "set_entity",
          "field": "coffeeFormat",
          "response": "I’ll remember that you prefer ground coffee.",
          "nextButtons": [
            {
              "label": "Browse coffee",
              "action": "link",
              "url": "https://liquidsoldier.com/liquid-soldier-coffee/"
            },
            {
              "label": "Check availability",
              "action": "intent",
              "intentId": "product_availability"
            }
          ]
        }
      ],
      "memory": {
        "topic": "coffee",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Liquid Soldier Coffee",
      "url": "https://liquidsoldier.com/liquid-soldier-coffee/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "coffee_subscription",
      "category": "Coffee",
      "examples": [
        "can i subscribe to coffee",
        "recurring coffee delivery"
      ],
      "keywords": [
        "subscription",
        "recurring",
        "monthly coffee"
      ],
      "response": "Subscription availability should be confirmed on the current coffee listing or with customer support.",
      "followUps": [
        "Would you like to view coffee or ask the team?"
      ],
      "buttons": [
        {
          "label": "View coffee",
          "action": "link",
          "url": "https://liquidsoldier.com/liquid-soldier-coffee/"
        },
        {
          "label": "Contact team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "coffee",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Liquid Soldier Coffee",
      "url": "https://liquidsoldier.com/liquid-soldier-coffee/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "coffee_caffeine",
      "category": "Coffee",
      "examples": [
        "how much caffeine",
        "is it decaf"
      ],
      "keywords": [
        "caffeine",
        "decaf",
        "stimulant"
      ],
      "response": "Caffeine varies by product and serving. Please check the current label for the specific coffee; if caffeine affects a medical condition or medication, ask a healthcare professional.",
      "followUps": [
        "Which coffee product do you mean?"
      ],
      "buttons": [
        {
          "label": "Browse coffee",
          "action": "link",
          "url": "https://liquidsoldier.com/liquid-soldier-coffee/"
        },
        {
          "label": "Safety guidance",
          "action": "intent",
          "intentId": "product_ingredients"
        }
      ],
      "memory": {
        "topic": "coffee",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Liquid Soldier Coffee",
      "url": "https://liquidsoldier.com/liquid-soldier-coffee/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "supplement_overview",
      "category": "Supplements",
      "examples": [
        "what supplements do you sell",
        "show supplements"
      ],
      "keywords": [
        "supplement",
        "vitamin",
        "capsule",
        "gummy"
      ],
      "response": "Liquid Soldier has a dedicated supplements area. Current categories, ingredients, directions, prices, and availability should be checked on the live supplement listings.",
      "followUps": [
        "Are you browsing by goal, form, or a specific product?"
      ],
      "buttons": [
        {
          "label": "Browse supplements",
          "action": "link",
          "url": "https://liquidsoldier.com/liquid-soldier-supplements/"
        },
        {
          "label": "Ingredients",
          "action": "intent",
          "intentId": "product_ingredients"
        },
        {
          "label": "Safety",
          "action": "intent",
          "intentId": "supplement_safety"
        }
      ],
      "memory": {
        "topic": "supplements",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Health and Wellness",
      "url": "https://liquidsoldier.com/liquid-soldier-supplements/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "supplement_safety",
      "category": "Supplements",
      "examples": [
        "are supplements safe",
        "can i take this"
      ],
      "keywords": [
        "safe",
        "supplement",
        "take",
        "pregnant",
        "nursing",
        "medication"
      ],
      "response": "Review the product label and ingredients. If you have a medical condition, are pregnant or nursing, take medication, have allergies, or are considering a child’s use, consult a qualified healthcare professional before using a supplement.",
      "followUps": [
        "Would you like the product page or help contacting support?"
      ],
      "buttons": [
        {
          "label": "Find product",
          "action": "intent",
          "intentId": "supplement_overview"
        },
        {
          "label": "Contact support",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "supplements",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Health and Wellness",
      "url": "https://liquidsoldier.com/liquid-soldier-supplements/",
      "liveDataOnly": false,
      "medicalSafety": true,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "supplement_medical_claims",
      "category": "Supplements",
      "examples": [
        "will this cure me",
        "does it treat disease"
      ],
      "keywords": [
        "cure",
        "treat",
        "diagnose",
        "prevent",
        "disease",
        "medical claim"
      ],
      "response": "Liquid Soldier products are not intended to diagnose, treat, cure, or prevent disease. For symptoms, diagnosis, or treatment decisions, please speak with a qualified healthcare professional.",
      "followUps": [
        "Are you looking for label information or general wellness categories?"
      ],
      "buttons": [
        {
          "label": "Browse supplements",
          "action": "link",
          "url": "https://liquidsoldier.com/liquid-soldier-supplements/"
        },
        {
          "label": "Ingredients",
          "action": "intent",
          "intentId": "product_ingredients"
        }
      ],
      "memory": {
        "topic": "supplements",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Health and Wellness",
      "url": "https://liquidsoldier.com/liquid-soldier-supplements/",
      "liveDataOnly": false,
      "medicalSafety": true,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "supplement_directions",
      "category": "Supplements",
      "examples": [
        "how much should i take",
        "dosage"
      ],
      "keywords": [
        "dose",
        "dosage",
        "serving",
        "directions",
        "how many"
      ],
      "response": "Use only the directions on the current product label. I can help find the listing, but I can’t personalize a dose or override medical advice.",
      "followUps": [
        "Which product are you asking about?"
      ],
      "buttons": [
        {
          "label": "Find product",
          "action": "intent",
          "intentId": "supplement_overview"
        },
        {
          "label": "Safety guidance",
          "action": "intent",
          "intentId": "supplement_safety"
        }
      ],
      "memory": {
        "topic": "supplements",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Health and Wellness",
      "url": "https://liquidsoldier.com/liquid-soldier-supplements/",
      "liveDataOnly": false,
      "medicalSafety": true,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "supplement_side_effect",
      "category": "Supplements",
      "examples": [
        "i had a reaction",
        "side effects"
      ],
      "keywords": [
        "reaction",
        "side effect",
        "sick",
        "rash",
        "adverse"
      ],
      "response": "Stop using the product and seek appropriate medical advice. If symptoms are severe, rapidly worsening, or involve trouble breathing, chest pain, fainting, or swelling, contact emergency services now. I can also help route a product report after immediate safety is addressed.",
      "followUps": [
        "Is anyone in immediate danger?"
      ],
      "buttons": [
        {
          "label": "Emergency guidance",
          "action": "intent",
          "intentId": "medical_emergency"
        },
        {
          "label": "Report product issue",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "supplements",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required_for_report",
      "leadFields": [
        "name",
        "email",
        "phone",
        "product",
        "lotNumber",
        "reaction"
      ],
      "department": "Health and Wellness",
      "url": "https://liquidsoldier.com/liquid-soldier-supplements/",
      "liveDataOnly": false,
      "medicalSafety": true,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cbd_overview",
      "category": "CBD",
      "examples": [
        "do you sell cbd",
        "what is itsallmedical"
      ],
      "keywords": [
        "cbd",
        "hemp",
        "itsallmedical",
        "medical products"
      ],
      "response": "The ItsAllMedical area presents CBD-focused products and information. Current products, ingredients, lab details, age restrictions, prices, and availability should be confirmed on the live page.",
      "followUps": [
        "Are you looking for products, safety information, or order support?"
      ],
      "buttons": [
        {
          "label": "View CBD products",
          "action": "link",
          "url": "https://liquidsoldier.com/itsallmedical/"
        },
        {
          "label": "Safety",
          "action": "intent",
          "intentId": "cbd_drug_interaction"
        },
        {
          "label": "CBD order help",
          "action": "intent",
          "intentId": "cbd_customer_service"
        }
      ],
      "memory": {
        "topic": "cbd",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Medical, Wellness & Research",
      "url": "https://liquidsoldier.com/itsallmedical/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cbd_age_restriction",
      "category": "CBD",
      "examples": [
        "how old do i need to be",
        "can minors buy cbd"
      ],
      "keywords": [
        "age",
        "18",
        "minor",
        "underage"
      ],
      "response": "The live ItsAllMedical support information has stated an 18+ restriction. Because rules can vary by product and location, confirm the current page and local requirements before purchase.",
      "followUps": [
        "Would you like to view the current CBD page?"
      ],
      "buttons": [
        {
          "label": "View ItsAllMedical",
          "action": "link",
          "url": "https://liquidsoldier.com/itsallmedical/"
        },
        {
          "label": "CBD safety",
          "action": "intent",
          "intentId": "cbd_drug_interaction"
        }
      ],
      "memory": {
        "topic": "cbd",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Medical, Wellness & Research",
      "url": "https://liquidsoldier.com/itsallmedical/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cbd_legality",
      "category": "CBD",
      "examples": [
        "is cbd legal in my state",
        "can you ship cbd here"
      ],
      "keywords": [
        "legal",
        "state law",
        "ship cbd",
        "allowed"
      ],
      "response": "CBD rules and shipping eligibility can change by jurisdiction and product. I can’t provide legal advice; please confirm the current checkout availability and applicable state or local rules.",
      "followUps": [
        "Which state or country are you asking about?"
      ],
      "buttons": [
        {
          "label": "View CBD shop",
          "action": "link",
          "url": "https://liquidsoldier.com/itsallmedical/"
        },
        {
          "label": "Contact support",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "cbd",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Medical, Wellness & Research",
      "url": "https://liquidsoldier.com/itsallmedical/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cbd_lab_coa",
      "category": "CBD",
      "examples": [
        "where is the coa",
        "lab results"
      ],
      "keywords": [
        "coa",
        "lab",
        "certificate",
        "testing",
        "third party"
      ],
      "response": "Liquid Soldier has a COA area for available product documentation. Match the product and lot information carefully and contact support if the needed report is not listed.",
      "followUps": [
        "Would you like to open the COA page?"
      ],
      "buttons": [
        {
          "label": "View COAs",
          "action": "link",
          "url": "https://liquidsoldier.com/coa/"
        },
        {
          "label": "Contact CBD support",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "cbd",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Medical, Wellness & Research",
      "url": "https://liquidsoldier.com/coa/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cbd_drug_interaction",
      "category": "CBD",
      "examples": [
        "can i take cbd with medication",
        "is cbd safe for me"
      ],
      "keywords": [
        "interaction",
        "medication",
        "pregnant",
        "doctor",
        "dose"
      ],
      "response": "CBD can interact with medications and may not be appropriate for everyone. A qualified healthcare professional who knows your history should advise you. Do not use chat guidance as a diagnosis or personalized treatment plan.",
      "followUps": [
        "Would you like label information for a specific product?"
      ],
      "buttons": [
        {
          "label": "Find CBD product",
          "action": "intent",
          "intentId": "cbd_overview"
        },
        {
          "label": "Ingredients",
          "action": "intent",
          "intentId": "product_ingredients"
        }
      ],
      "memory": {
        "topic": "cbd",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Medical, Wellness & Research",
      "url": "https://liquidsoldier.com/itsallmedical/",
      "liveDataOnly": false,
      "medicalSafety": true,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cbd_returns",
      "category": "CBD",
      "examples": [
        "cbd return policy",
        "30 day guarantee"
      ],
      "keywords": [
        "cbd return",
        "guarantee",
        "30 day",
        "refund"
      ],
      "response": "ItsAllMedical has published CBD-specific customer support and satisfaction terms, including a 30-day guarantee in the approved project research. Please confirm the current product page and support terms before relying on a deadline.",
      "followUps": [
        "Would you like CBD support or the current page?"
      ],
      "buttons": [
        {
          "label": "CBD support",
          "action": "intent",
          "intentId": "cbd_customer_service"
        },
        {
          "label": "View ItsAllMedical",
          "action": "link",
          "url": "https://liquidsoldier.com/itsallmedical/"
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "cbd",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_issue",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderNumber",
        "issue"
      ],
      "department": "Medical, Wellness & Research",
      "url": "https://liquidsoldier.com/itsallmedical/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cbd_customer_service",
      "category": "CBD",
      "examples": [
        "cbd customer service",
        "itsallmedical support",
        "cbd order support"
      ],
      "keywords": [
        "cbd support",
        "cbd customer service",
        "orders email",
        "return address"
      ],
      "response": "ItsAllMedical/CBD order support is available Monday-Friday, 9:00 AM-5:00 PM Pacific Time.\n\nPhone: (844) 221-9709\nEmail: orders@liquidsoldier.com\nReturns: PO Box 286, Los Alamitos, CA 90720\n\nItsAllMedical states that products carry a 30-day customer-satisfaction guarantee; unused product must be returned within 30 days of receipt under the published terms.",
      "followUps": [
        "Do you need order help, return instructions, or the CBD product page?"
      ],
      "buttons": [
        {
          "label": "Call CBD order support",
          "action": "link",
          "url": "tel:+18442219709"
        },
        {
          "label": "Email CBD order support",
          "action": "link",
          "url": "mailto:orders@liquidsoldier.com"
        },
        {
          "label": "CBD return help",
          "action": "lead"
        },
        {
          "label": "View ItsAllMedical",
          "action": "link",
          "url": "https://liquidsoldier.com/itsallmedical/"
        }
      ],
      "memory": {
        "topic": "cbd",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_issue",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderNumber",
        "issue"
      ],
      "department": "Medical, Wellness & Research",
      "url": "https://liquidsoldier.com/itsallmedical/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_overview",
      "category": "Marketplace",
      "examples": [
        "what is the marketplace",
        "shop marketplace"
      ],
      "keywords": [
        "marketplace",
        "vendors",
        "seller",
        "buyer"
      ],
      "response": "The Liquid Soldier Marketplace connects buyers with reviewed vendors offering products and services. Vendors are approved by the parent company, Knoble Bridge Holdings, and must follow Marketplace policies.",
      "followUps": [
        "Are you shopping, applying to sell, or managing a vendor account?"
      ],
      "buttons": [
        {
          "label": "Shop",
          "action": "link",
          "url": "https://liquidsoldier.com/store-listing/"
        },
        {
          "label": "Become a vendor",
          "action": "intent",
          "intentId": "vendor_apply"
        },
        {
          "label": "Vendor login",
          "action": "link",
          "url": "https://liquidsoldier.com/vendor-login/"
        },
        {
          "label": "Marketplace support",
          "action": "intent",
          "intentId": "marketplace_support"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_support",
      "category": "Marketplace",
      "examples": [
        "marketplace customer service",
        "marketplace support",
        "contact marketplace team"
      ],
      "keywords": [
        "marketplace help",
        "marketplace support",
        "marketplace customer service",
        "vendor support"
      ],
      "response": "For Marketplace help, contact Liquid Soldier Customer Service Monday-Thursday, 9:00 AM-5:00 PM MST, or Friday, 9:00 AM-3:00 PM MST.\n\nPhone: (844) 221-9709\nEmail: contact@liquidsoldier.com\n\nTell them whether you are a buyer or vendor and include the order number or business name when applicable.",
      "followUps": [
        "Are you a buyer, vendor applicant, or approved vendor?"
      ],
      "buttons": [
        {
          "label": "Call customer service",
          "action": "link",
          "url": "tel:+18442219709"
        },
        {
          "label": "Email customer service",
          "action": "link",
          "url": "mailto:contact@liquidsoldier.com"
        },
        {
          "label": "Marketplace order issue",
          "action": "intent",
          "intentId": "marketplace_dispute"
        },
        {
          "label": "Vendor login help",
          "action": "intent",
          "intentId": "vendor_login"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_categories",
      "category": "Marketplace",
      "examples": [
        "what can vendors sell",
        "marketplace categories"
      ],
      "keywords": [
        "category",
        "clothing",
        "beauty",
        "electronics",
        "jewelry",
        "automotive",
        "digital"
      ],
      "response": "The application lists Clothing & Apparel, Coffee & Beverages, Food & Snacks, Health & Wellness, Beauty, Electronics, Jewelry, Home & Garden, Automotive, Sports & Fitness, Collectibles, Art, Books, Services, Digital Products, and Other.",
      "followUps": [
        "Are you checking buyer availability or vendor eligibility?"
      ],
      "buttons": [
        {
          "label": "Shop Marketplace",
          "action": "link",
          "url": "https://liquidsoldier.com/store-listing/"
        },
        {
          "label": "Apply as vendor",
          "action": "intent",
          "intentId": "vendor_apply"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_account_required",
      "category": "Marketplace",
      "examples": [
        "do buyers need an account",
        "guest checkout marketplace"
      ],
      "keywords": [
        "buyer account",
        "guest",
        "create account",
        "marketplace"
      ],
      "response": "The Marketplace information says buyers can shop without the hassle of creating a new account or repeatedly entering information. Checkout requirements shown live remain authoritative.",
      "followUps": [
        "Would you like to browse the store list?"
      ],
      "buttons": [
        {
          "label": "Browse stores",
          "action": "link",
          "url": "https://liquidsoldier.com/store-listing/"
        },
        {
          "label": "Marketplace help",
          "action": "intent",
          "intentId": "marketplace_support"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_vendor_shipping",
      "category": "Marketplace",
      "examples": [
        "who ships marketplace orders",
        "vendor shipping"
      ],
      "keywords": [
        "vendor ships",
        "marketplace delivery",
        "seller shipping"
      ],
      "response": "Marketplace products are shipped directly by the approved vendor, so timing and handling can differ by seller.",
      "followUps": [
        "Do you need shipping information or help with an existing order?"
      ],
      "buttons": [
        {
          "label": "Shipping times",
          "action": "intent",
          "intentId": "shipping_time"
        },
        {
          "label": "Track order",
          "action": "intent",
          "intentId": "order_tracking"
        },
        {
          "label": "Report issue",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_security_privacy",
      "category": "Marketplace",
      "examples": [
        "is marketplace safe",
        "do you sell my data"
      ],
      "keywords": [
        "marketplace safe",
        "secure",
        "privacy",
        "sell data",
        "vetted"
      ],
      "response": "The Marketplace says vendors are reviewed, transactions are protected, and buyer/seller personal information is used for verification and security rather than sold. The live Privacy Policy controls the details.",
      "followUps": [
        "Would you like the Privacy Policy or vendor standards?"
      ],
      "buttons": [
        {
          "label": "Privacy Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/marketplace-information/"
        },
        {
          "label": "Vendor standards",
          "action": "intent",
          "intentId": "vendor_requirements"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vendor_apply",
      "category": "Marketplace",
      "examples": [
        "how do i become a vendor",
        "sell my products here"
      ],
      "keywords": [
        "become vendor",
        "apply seller",
        "sell products",
        "vendor registration"
      ],
      "response": "You can apply to become a Marketplace vendor. The team reviews each application before approval. I can qualify your interest briefly or take you to the full form.",
      "followUps": [
        "What is your business name and what do you sell?"
      ],
      "buttons": [
        {
          "label": "Start inquiry",
          "action": "lead"
        },
        {
          "label": "Full application",
          "action": "link",
          "url": "https://liquidsoldier.com/vendor-registration/"
        },
        {
          "label": "Vendor requirements",
          "action": "intent",
          "intentId": "vendor_requirements"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "businessName",
        "businessCategory",
        "website",
        "state"
      ],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/vendor-registration/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vendor_requirements",
      "category": "Marketplace",
      "examples": [
        "what documents do vendors need",
        "vendor requirements"
      ],
      "keywords": [
        "vendor documents",
        "license",
        "ein",
        "resale certificate",
        "requirements"
      ],
      "response": "The current vendor information form requests business details and, where applicable, a business license, tax identification or EIN, and resale certificate. The full application also covers shipping, payment, certifications, and an electronic signature.",
      "followUps": [
        "Would you like the full vendor application?"
      ],
      "buttons": [
        {
          "label": "Open application",
          "action": "link",
          "url": "https://liquidsoldier.com/vendor-registration/"
        },
        {
          "label": "Start inquiry",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/vendor-registration/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vendor_approval",
      "category": "Marketplace",
      "examples": [
        "how are vendors approved",
        "how long is approval"
      ],
      "keywords": [
        "vendor approval",
        "review",
        "denied",
        "pending"
      ],
      "response": "Vendor applications are reviewed and may be approved or declined. Timing is not guaranteed. If you already applied, I can route a status request to the Marketplace team.",
      "followUps": [
        "Have you already submitted an application?"
      ],
      "buttons": [
        {
          "label": "Check status",
          "action": "lead"
        },
        {
          "label": "Apply now",
          "action": "intent",
          "intentId": "vendor_apply"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_status",
      "leadFields": [
        "name",
        "email",
        "phone",
        "businessName",
        "businessCategory",
        "website",
        "state",
        "applicationDate"
      ],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vendor_login",
      "category": "Marketplace",
      "examples": [
        "vendor login",
        "seller sign in"
      ],
      "keywords": [
        "vendor login",
        "seller login",
        "sign in"
      ],
      "response": "Approved or registered vendors can use the Vendor Login page. If the credentials are not working, I can route account support.",
      "followUps": [
        "Would you like to sign in or report a login problem?"
      ],
      "buttons": [
        {
          "label": "Vendor login",
          "action": "link",
          "url": "https://liquidsoldier.com/vendor-login/"
        },
        {
          "label": "Login help",
          "action": "intent",
          "intentId": "vendor_password"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/vendor-login/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vendor_password",
      "category": "Marketplace",
      "examples": [
        "forgot vendor password",
        "reset seller password"
      ],
      "keywords": [
        "vendor password",
        "reset",
        "forgot",
        "locked out"
      ],
      "response": "Use the vendor password-reset flow first. If the reset email does not arrive, I can route account support without asking for your password.",
      "followUps": [
        "Would you like the reset page?"
      ],
      "buttons": [
        {
          "label": "Reset password",
          "action": "link",
          "url": "https://liquidsoldier.com/password-reset-2/"
        },
        {
          "label": "Contact support",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_failure",
      "leadFields": [
        "name",
        "email",
        "phone",
        "businessName"
      ],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/password-reset-2/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vendor_dashboard",
      "category": "Marketplace",
      "examples": [
        "where is vendor dashboard",
        "manage my store"
      ],
      "keywords": [
        "dashboard",
        "manage store",
        "vendor account",
        "seller portal"
      ],
      "response": "The Vendor Dashboard is the central account area for approved vendors. Please sign in first; never share your password in chat.",
      "followUps": [
        "Do you need the dashboard or help with a feature?"
      ],
      "buttons": [
        {
          "label": "Open dashboard",
          "action": "link",
          "url": "https://liquidsoldier.com/vendor-dashboard/"
        },
        {
          "label": "Product listings",
          "action": "intent",
          "intentId": "vendor_listing_help"
        },
        {
          "label": "Orders",
          "action": "link",
          "url": "https://liquidsoldier.com/my-orders/"
        },
        {
          "label": "Payments",
          "action": "intent",
          "intentId": "vendor_payments"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/vendor-dashboard/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vendor_listing_help",
      "category": "Marketplace",
      "examples": [
        "how do i add products",
        "edit a listing"
      ],
      "keywords": [
        "add product",
        "listing",
        "edit product",
        "inventory",
        "vendor"
      ],
      "response": "Approved vendors can manage products through the vendor account flow. If a listing is blocked, missing, or rejected, I can route the store and product details to Marketplace support.",
      "followUps": [
        "Are you adding, editing, or troubleshooting a listing?"
      ],
      "buttons": [
        {
          "label": "Add product",
          "action": "set_entity",
          "field": "listingRequest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Edit listing",
          "action": "set_entity",
          "field": "listingRequest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Listing problem",
          "action": "set_entity",
          "field": "listingRequest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_issue",
      "leadFields": [
        "name",
        "email",
        "phone",
        "businessName",
        "product",
        "issue"
      ],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vendor_payments",
      "category": "Marketplace",
      "examples": [
        "when do vendors get paid",
        "seller payout problem"
      ],
      "keywords": [
        "vendor payment",
        "payout",
        "ach",
        "check",
        "bank"
      ],
      "response": "The vendor application asks for a preferred payout method, including ACH, check, or other. Actual payout timing and terms must be confirmed in the current Vendor Agreement or with Marketplace support.",
      "followUps": [
        "Is this a general question or a missing payout?"
      ],
      "buttons": [
        {
          "label": "View policies",
          "action": "link",
          "url": "https://liquidsoldier.com/marketplace-information/"
        },
        {
          "label": "Report payout issue",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_issue",
      "leadFields": [
        "name",
        "email",
        "phone",
        "businessName",
        "paymentPeriod",
        "issue"
      ],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_review",
      "category": "Marketplace",
      "examples": [
        "can i leave a review",
        "report fake review"
      ],
      "keywords": [
        "review",
        "rating",
        "feedback",
        "marketplace"
      ],
      "response": "Marketplace buyers are encouraged to leave honest reviews. If a review violates policy or you need help locating the review area, I can route you appropriately.",
      "followUps": [
        "Are you leaving a review or reporting one?"
      ],
      "buttons": [
        {
          "label": "Leave review",
          "action": "set_entity",
          "field": "reviewRequest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Report review",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_dispute",
      "category": "Marketplace",
      "examples": [
        "problem with vendor",
        "marketplace item not as described"
      ],
      "keywords": [
        "vendor dispute",
        "not as described",
        "damaged",
        "refund",
        "seller problem"
      ],
      "response": "I can help route a Marketplace dispute. Tell me whether the issue is non-delivery, damage, not as described, refund, communication, or something else.",
      "followUps": [
        "What happened with the order?"
      ],
      "buttons": [
        {
          "label": "Not received",
          "action": "set_entity",
          "field": "issueType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Damaged",
          "action": "set_entity",
          "field": "issueType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Not as described",
          "action": "set_entity",
          "field": "issueType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Refund issue",
          "action": "set_entity",
          "field": "issueType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "orderNumber",
        "issue",
        "vendor",
        "product"
      ],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketplace_return_policy",
      "category": "Marketplace",
      "examples": [
        "marketplace returns",
        "seller refund policy"
      ],
      "keywords": [
        "marketplace return",
        "marketplace refund",
        "return policy"
      ],
      "response": "Marketplace purchases have a dedicated return policy. The specific vendor, item condition, time limits, and exclusions may affect eligibility.",
      "followUps": [
        "Would you like to open the policy or start an order issue?"
      ],
      "buttons": [
        {
          "label": "View return policy",
          "action": "link",
          "url": "https://liquidsoldier.com/marketplace-return-policy/"
        },
        {
          "label": "Start support request",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "marketplace",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Marketplace Team",
      "url": "https://liquidsoldier.com/marketplace-return-policy/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_overview",
      "category": "Franchising",
      "examples": [
        "i want a franchise",
        "how does franchising work"
      ],
      "keywords": [
        "franchise",
        "own a location",
        "open one",
        "franchize",
        "franshise"
      ],
      "response": "Liquid Soldier offers a franchise opportunity centered on wellness, community engagement, and charitable impact. The franchise team can provide the current process, requirements, and market information.",
      "followUps": [
        "What city and state are you considering?"
      ],
      "buttons": [
        {
          "label": "How it works",
          "action": "link",
          "url": "https://liquidsoldier.com/franchising/"
        },
        {
          "label": "Costs",
          "action": "intent",
          "intentId": "franchise_cost"
        },
        {
          "label": "Apply",
          "action": "intent",
          "intentId": "franchise_apply"
        },
        {
          "label": "Talk to franchise team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "city",
        "state",
        "timeline",
        "businessExperience"
      ],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchising/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_cost",
      "category": "Franchising",
      "examples": [
        "how much is a franchise",
        "startup investment"
      ],
      "keywords": [
        "franchise cost",
        "fee",
        "startup",
        "capital",
        "investment required"
      ],
      "response": "Franchise investment requirements vary by location, model, and market conditions. I won’t quote a potentially outdated figure; the franchise team can provide the current disclosure and requirements.",
      "followUps": [
        "Would you like the team to contact you?"
      ],
      "buttons": [
        {
          "label": "Request current costs",
          "action": "lead"
        },
        {
          "label": "Apply",
          "action": "intent",
          "intentId": "franchise_apply"
        },
        {
          "label": "Keep researching",
          "action": "intent",
          "intentId": "franchise_overview"
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_request",
      "leadFields": [
        "name",
        "email",
        "phone",
        "city",
        "state",
        "timeline",
        "businessExperience"
      ],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchising/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_territory",
      "category": "Franchising",
      "examples": [
        "is my area available",
        "where can i open"
      ],
      "keywords": [
        "territory",
        "area available",
        "city",
        "state",
        "location approval"
      ],
      "response": "Territory availability changes and requires approval. Share the city and state you are considering and the franchise team can review current market interest.",
      "followUps": [
        "Which city and state?"
      ],
      "buttons": [
        {
          "label": "Submit market interest",
          "action": "lead"
        },
        {
          "label": "Franchise application",
          "action": "intent",
          "intentId": "franchise_apply"
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "city",
        "state",
        "timeline",
        "businessExperience"
      ],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchising/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_experience",
      "category": "Franchising",
      "examples": [
        "do i need experience",
        "can a first time owner apply"
      ],
      "keywords": [
        "experience",
        "first time",
        "qualifications",
        "owner"
      ],
      "response": "Business experience can be helpful but is not always required. The team reviews the full applicant profile and can explain current qualifications.",
      "followUps": [
        "Have you owned or operated a business before?"
      ],
      "buttons": [
        {
          "label": "Yes",
          "action": "set_entity",
          "field": "businessExperience",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "No",
          "action": "set_entity",
          "field": "businessExperience",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Apply",
          "action": "intent",
          "intentId": "franchise_apply"
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchising/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_training",
      "category": "Franchising",
      "examples": [
        "what training is provided",
        "franchise support"
      ],
      "keywords": [
        "training",
        "support",
        "operations",
        "marketing",
        "franchisee"
      ],
      "response": "Franchise support may include guidance in operations, branding, marketing, products, and business development. The franchise team should confirm the current program.",
      "followUps": [
        "Would you like current support details?"
      ],
      "buttons": [
        {
          "label": "Request details",
          "action": "lead"
        },
        {
          "label": "Apply",
          "action": "intent",
          "intentId": "franchise_apply"
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchising/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_timeline",
      "category": "Franchising",
      "examples": [
        "how long does approval take",
        "when can i open"
      ],
      "keywords": [
        "franchise timeline",
        "approval time",
        "how long",
        "opening"
      ],
      "response": "Timing varies with application review, financial readiness, location selection, and approvals. The team can explain the current stages but cannot guarantee an opening date.",
      "followUps": [
        "How soon are you hoping to move forward?"
      ],
      "buttons": [
        {
          "label": "ASAP",
          "action": "set_entity",
          "field": "timeline",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "3-6 months",
          "action": "set_entity",
          "field": "timeline",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "6-12 months",
          "action": "set_entity",
          "field": "timeline",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Researching",
          "action": "set_entity",
          "field": "timeline",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchising/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_financing",
      "category": "Franchising",
      "examples": [
        "do you finance franchises",
        "help me get funding"
      ],
      "keywords": [
        "financing",
        "funding",
        "loan",
        "finance franchise"
      ],
      "response": "Financing options and requirements must be confirmed by the franchise team and any independent lender. No financing outcome can be guaranteed.",
      "followUps": [
        "Would you like current financing information?"
      ],
      "buttons": [
        {
          "label": "Contact franchise team",
          "action": "lead"
        },
        {
          "label": "Costs",
          "action": "intent",
          "intentId": "franchise_cost"
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchising/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_earnings",
      "category": "Franchising",
      "examples": [
        "how much can i make",
        "is it profitable"
      ],
      "keywords": [
        "earnings",
        "profit",
        "income",
        "roi",
        "guaranteed success"
      ],
      "response": "Performance varies with location, costs, management, market conditions, and other factors. Liquid Soldier cannot promise a specific income, return, or success outcome.",
      "followUps": [
        "Would you like the appropriate current franchise information?"
      ],
      "buttons": [
        {
          "label": "Talk to franchise team",
          "action": "lead"
        },
        {
          "label": "Franchise application",
          "action": "intent",
          "intentId": "franchise_apply"
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchising/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "franchise_apply",
      "category": "Franchising",
      "examples": [
        "franchise application",
        "ready to apply"
      ],
      "keywords": [
        "apply franchise",
        "application",
        "ready",
        "owner operator"
      ],
      "response": "You can begin through the Franchise Application. I can also capture a brief inquiry so the team receives your preferred market, timing, and experience.",
      "followUps": [
        "Would you like the application or a guided inquiry?"
      ],
      "buttons": [
        {
          "label": "Open application",
          "action": "link",
          "url": "https://liquidsoldier.com/franchise-application/"
        },
        {
          "label": "Guided inquiry",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "franchising",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "city",
        "state",
        "timeline",
        "businessExperience"
      ],
      "department": "Franchise Team",
      "url": "https://liquidsoldier.com/franchise-application/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "investment_overview",
      "category": "Investing",
      "examples": [
        "can i invest",
        "investment opportunities"
      ],
      "keywords": [
        "invest",
        "investor",
        "equity",
        "funding",
        "shareholder"
      ],
      "response": "Liquid Soldier provides information for qualified people interested in growth initiatives and investment opportunities. The investment team must confirm current eligibility, terms, and availability.",
      "followUps": [
        "Are you seeking general, strategic, growth, or shareholder information?"
      ],
      "buttons": [
        {
          "label": "General information",
          "action": "link",
          "url": "https://liquidsoldier.com/investor-information/"
        },
        {
          "label": "Strategic interest",
          "action": "lead"
        },
        {
          "label": "Shareholder help",
          "action": "intent",
          "intentId": "existing_shareholder"
        },
        {
          "label": "Contact investment team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "investing",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "investmentInterest"
      ],
      "department": "Investment Team",
      "url": "https://liquidsoldier.com/investor-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "investment_terms",
      "category": "Investing",
      "examples": [
        "what is the minimum investment",
        "what are the investment terms"
      ],
      "keywords": [
        "minimum investment",
        "investment terms",
        "valuation",
        "offering",
        "accredited"
      ],
      "response": "Investment terms, minimums, eligibility, and offering documents can change and should come directly from the investment team. I won’t invent or hardcode financial terms.",
      "followUps": [
        "Would you like the current investor information?"
      ],
      "buttons": [
        {
          "label": "Investor information",
          "action": "link",
          "url": "https://liquidsoldier.com/investor-information/"
        },
        {
          "label": "Contact investment team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "investing",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_request",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "investmentInterest"
      ],
      "department": "Investment Team",
      "url": "https://liquidsoldier.com/investor-information/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "investment_returns",
      "category": "Investing",
      "examples": [
        "what return will i get",
        "is the investment guaranteed"
      ],
      "keywords": [
        "return",
        "roi",
        "profit",
        "guarantee",
        "risk"
      ],
      "response": "Investment returns are not guaranteed, and any opportunity can involve risk. Review current official materials and obtain independent financial, legal, and tax advice before deciding.",
      "followUps": [
        "Would you like official current information?"
      ],
      "buttons": [
        {
          "label": "Investor information",
          "action": "link",
          "url": "https://liquidsoldier.com/investor-information/"
        },
        {
          "label": "Contact team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "investing",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Investment Team",
      "url": "https://liquidsoldier.com/investor-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "existing_shareholder",
      "category": "Investing",
      "examples": [
        "i am already an investor",
        "shareholder documents"
      ],
      "keywords": [
        "existing investor",
        "shareholder",
        "statement",
        "documents",
        "update details"
      ],
      "response": "Existing investor or shareholder questions should be handled privately by the investment team. Don’t share account numbers or sensitive financial documents in chat.",
      "followUps": [
        "Would you like a secure follow-up?"
      ],
      "buttons": [
        {
          "label": "Request follow-up",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "investing",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "requestType"
      ],
      "department": "Investment Team",
      "url": "https://liquidsoldier.com/investor-information/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "media_overview",
      "category": "Media",
      "examples": [
        "what is liquid soldier media",
        "show me articles"
      ],
      "keywords": [
        "media",
        "articles",
        "blog",
        "stories",
        "content"
      ],
      "response": "Liquid Soldier Media covers wellness, inspiration, personal growth, health, mindfulness, and community stories aligned with the organization's mission.",
      "followUps": [
        "Are you reading, contributing, or making a press inquiry?"
      ],
      "buttons": [
        {
          "label": "Read articles",
          "action": "link",
          "url": "https://liquidsoldier.com/blog/"
        },
        {
          "label": "Contribute",
          "action": "intent",
          "intentId": "submit_article"
        },
        {
          "label": "Press inquiry",
          "action": "intent",
          "intentId": "press_inquiry"
        },
        {
          "label": "Partnership",
          "action": "intent",
          "intentId": "media_partnership"
        }
      ],
      "memory": {
        "topic": "media",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Liquid Soldier Media",
      "url": "https://liquidsoldier.com/liquid-soldier-media/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "submit_article",
      "category": "Media",
      "examples": [
        "can i submit an article",
        "become a contributor"
      ],
      "keywords": [
        "submit article",
        "contribute",
        "writer",
        "guest post",
        "author"
      ],
      "response": "Liquid Soldier welcomes inquiries from contributors whose work aligns with its mission and editorial topics. A submission is reviewed and is not guaranteed publication.",
      "followUps": [
        "What topic would you like to contribute?"
      ],
      "buttons": [
        {
          "label": "Contributor inquiry",
          "action": "lead"
        },
        {
          "label": "Submit post",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "media",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "topic",
        "portfolioUrl"
      ],
      "department": "Liquid Soldier Media",
      "url": "https://liquidsoldier.com/submit-post/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "press_inquiry",
      "category": "Media",
      "examples": [
        "media inquiry",
        "interview request",
        "press contact"
      ],
      "keywords": [
        "press",
        "journalist",
        "interview",
        "media request",
        "quote"
      ],
      "response": "I can route a press request to Public Relations. Please include your outlet, topic, deadline, and preferred contact method.",
      "followUps": [
        "What is your deadline?"
      ],
      "buttons": [
        {
          "label": "Start press inquiry",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "media",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "outlet",
        "topic",
        "deadline"
      ],
      "department": "Public Relations",
      "url": "https://liquidsoldier.com/liquid-soldier-media/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "media_partnership",
      "category": "Media",
      "examples": [
        "content partnership",
        "sponsor your media"
      ],
      "keywords": [
        "media partnership",
        "sponsor",
        "podcast",
        "collaboration",
        "advertising"
      ],
      "response": "Partnership and collaboration ideas are reviewed by the Media, Marketing, or Public Relations team depending on the request.",
      "followUps": [
        "What type of partnership do you have in mind?"
      ],
      "buttons": [
        {
          "label": "Content",
          "action": "set_entity",
          "field": "partnershipType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Sponsorship",
          "action": "set_entity",
          "field": "partnershipType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Podcast",
          "action": "set_entity",
          "field": "partnershipType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Other",
          "action": "set_entity",
          "field": "partnershipType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "media",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "proposal"
      ],
      "department": "Liquid Soldier Media",
      "url": "https://liquidsoldier.com/liquid-soldier-media/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "human_resources",
      "category": "Careers",
      "examples": [
        "human resources",
        "hr",
        "hr department",
        "contact hr"
      ],
      "keywords": [
        "hr",
        "human resources",
        "employee help",
        "people administration"
      ],
      "response": "Liquid Soldier's Human Resources department supports recruiting, onboarding, employee documentation, compensation and benefits, training and development, compliance, workplace safety, performance, and employee career development. Current employees and applicants can use Human Resources as the appropriate first point of contact.",
      "followUps": [
        "Are you applying for a role or looking for employee support?"
      ],
      "buttons": [
        {
          "label": "Current openings",
          "action": "intent",
          "intentId": "careers_openings"
        },
        {
          "label": "Apply for a job",
          "action": "intent",
          "intentId": "career_apply"
        },
        {
          "label": "Employee support",
          "action": "lead"
        },
        {
          "label": "Human Resources page",
          "action": "link",
          "url": "https://liquidsoldier.com/people-administration/human-resources-team/"
        }
      ],
      "memory": {
        "topic": "careers",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Human Resources Team",
      "url": "https://liquidsoldier.com/people-administration/human-resources-team/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "careers_openings",
      "category": "Careers",
      "examples": [
        "are you hiring",
        "show me jobs"
      ],
      "keywords": [
        "job",
        "career",
        "hiring",
        "position",
        "employment"
      ],
      "response": "Liquid Soldier works with professionals across multiple departments. Current openings and application instructions should be confirmed through Human Resources or the live opportunities pages.",
      "followUps": [
        "Which department or type of work interests you?"
      ],
      "buttons": [
        {
          "label": "View opportunities",
          "action": "link",
          "url": "https://liquidsoldier.com/opportunities/"
        },
        {
          "label": "Departments",
          "action": "intent",
          "intentId": "departments_overview"
        },
        {
          "label": "Contact HR",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "careers",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Human Resources Team",
      "url": "https://liquidsoldier.com/opportunities/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "career_apply",
      "category": "Careers",
      "examples": [
        "how do i apply for a job",
        "send my resume"
      ],
      "keywords": [
        "apply job",
        "resume",
        "cv",
        "application",
        "candidate"
      ],
      "response": "I can route you to Human Resources. Use the official application method for resumes and avoid placing sensitive identity documents in chat.",
      "followUps": [
        "Which role or department are you applying to?"
      ],
      "buttons": [
        {
          "label": "View opportunities",
          "action": "link",
          "url": "https://liquidsoldier.com/people-administration/human-resources-team/"
        },
        {
          "label": "Contact HR",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "careers",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "role",
        "resumeUrl"
      ],
      "department": "Human Resources Team",
      "url": "https://liquidsoldier.com/people-administration/human-resources-team/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "remote_work",
      "category": "Careers",
      "examples": [
        "are jobs remote",
        "work from home"
      ],
      "keywords": [
        "remote",
        "hybrid",
        "work from home"
      ],
      "response": "Some opportunities may be remote depending on the department and project. Current role details are the authoritative source.",
      "followUps": [
        "Which type of role interests you?"
      ],
      "buttons": [
        {
          "label": "View opportunities",
          "action": "link",
          "url": "https://liquidsoldier.com/people-administration/human-resources-team/"
        },
        {
          "label": "Contact HR",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "careers",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Human Resources Team",
      "url": "https://liquidsoldier.com/people-administration/human-resources-team/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "internship",
      "category": "Careers",
      "examples": [
        "do you offer internships",
        "student opportunities"
      ],
      "keywords": [
        "intern",
        "internship",
        "student",
        "entry level"
      ],
      "response": "Internship or student opportunities can vary over time. Human Resources can confirm current availability.",
      "followUps": [
        "What field and timeframe are you interested in?"
      ],
      "buttons": [
        {
          "label": "Contact HR",
          "action": "lead"
        },
        {
          "label": "View opportunities",
          "action": "link",
          "url": "https://liquidsoldier.com/people-administration/human-resources-team/"
        }
      ],
      "memory": {
        "topic": "careers",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "field",
        "timeframe"
      ],
      "department": "Human Resources Team",
      "url": "https://liquidsoldier.com/people-administration/human-resources-team/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "donate",
      "category": "Community",
      "examples": [
        "how can i donate",
        "donate without buying"
      ],
      "keywords": [
        "donate",
        "donation",
        "contribute",
        "give"
      ],
      "response": "You can contribute directly through Liquid Soldier's donation page without making a product purchase.",
      "followUps": [
        "Would you like to open the donation page?"
      ],
      "buttons": [
        {
          "label": "Donate now",
          "action": "link",
          "url": "https://liquidsoldier.com/donate/"
        },
        {
          "label": "How purchases help",
          "action": "intent",
          "intentId": "charity_supported"
        }
      ],
      "memory": {
        "topic": "community",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Community, Education & Outreach",
      "url": "https://liquidsoldier.com/donate/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "donation_allocation",
      "category": "Community",
      "examples": [
        "what percentage is donated",
        "where does my donation go"
      ],
      "keywords": [
        "percentage",
        "allocation",
        "where money goes",
        "donation use"
      ],
      "response": "A portion of qualifying proceeds supports charitable causes. Specific allocation or tax-document questions should be confirmed by the Donation or Finance team rather than guessed.",
      "followUps": [
        "Is this about a direct donation or purchase proceeds?"
      ],
      "buttons": [
        {
          "label": "Direct donation",
          "action": "intent",
          "intentId": "donate"
        },
        {
          "label": "Purchase proceeds",
          "action": "intent",
          "intentId": "charity_supported"
        },
        {
          "label": "Contact team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "community",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Community, Education & Outreach",
      "url": "https://liquidsoldier.com/community-education-outreach/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "donation_receipt",
      "category": "Community",
      "examples": [
        "can i get a donation receipt",
        "is donation tax deductible"
      ],
      "keywords": [
        "receipt",
        "tax deductible",
        "donation record",
        "1099"
      ],
      "response": "The Donation or Finance team should confirm whether a particular contribution is eligible for a receipt or tax treatment. This chatbot cannot provide tax advice.",
      "followUps": [
        "Would you like a follow-up about your donation?"
      ],
      "buttons": [
        {
          "label": "Request follow-up",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "community",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "donationDate",
        "amount"
      ],
      "department": "Community, Education & Outreach",
      "url": "https://liquidsoldier.com/community-education-outreach/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "volunteer",
      "category": "Community",
      "examples": [
        "i want to volunteer",
        "volunteer opportunities"
      ],
      "keywords": [
        "volunteer",
        "help out",
        "community service",
        "events",
        "fundraising"
      ],
      "response": "Volunteer opportunities may include outreach, events, education, fundraising, and charitable initiatives, depending on current needs.",
      "followUps": [
        "What type of volunteer work and location interests you?"
      ],
      "buttons": [
        {
          "label": "Outreach",
          "action": "set_entity",
          "field": "volunteerInterest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Events",
          "action": "set_entity",
          "field": "volunteerInterest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Education",
          "action": "set_entity",
          "field": "volunteerInterest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Fundraising",
          "action": "set_entity",
          "field": "volunteerInterest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "community",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "location",
        "availability",
        "interest"
      ],
      "department": "Community, Education & Outreach",
      "url": "https://liquidsoldier.com/volunteer-department/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "education_programs",
      "category": "Community",
      "examples": [
        "do you offer education",
        "wellness workshops"
      ],
      "keywords": [
        "education",
        "workshop",
        "training",
        "school",
        "wellness program"
      ],
      "response": "The Educational Department supports learning and outreach connected to health, wellness, and community impact. Current programs and collaboration availability should be confirmed with the department.",
      "followUps": [
        "Are you looking for a program, speaker, school partnership, or materials?"
      ],
      "buttons": [
        {
          "label": "Program",
          "action": "set_entity",
          "field": "educationRequest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Speaker",
          "action": "set_entity",
          "field": "educationRequest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Partnership",
          "action": "set_entity",
          "field": "educationRequest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Materials",
          "action": "set_entity",
          "field": "educationRequest",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "community",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "audience",
        "request"
      ],
      "department": "Community, Education & Outreach",
      "url": "https://liquidsoldier.com/community-education-outreach/educational-department/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "community_partnership",
      "category": "Community",
      "examples": [
        "partner with our nonprofit",
        "community event collaboration"
      ],
      "keywords": [
        "community partnership",
        "nonprofit",
        "event",
        "outreach",
        "sponsor"
      ],
      "response": "Community partnership requests are reviewed based on mission fit, audience, timing, and available resources.",
      "followUps": [
        "What organization, event, and date are involved?"
      ],
      "buttons": [
        {
          "label": "Start partnership inquiry",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "community",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "event",
        "date",
        "proposal"
      ],
      "department": "Community, Education & Outreach",
      "url": "https://liquidsoldier.com/community-education-outreach/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "departments_overview",
      "category": "Departments",
      "examples": [
        "departments",
        "company departments",
        "department directory"
      ],
      "keywords": [
        "departments",
        "teams",
        "directory",
        "organization"
      ],
      "response": "Liquid Soldier has dedicated teams for leadership and governance; medical, wellness and research; Administration and HR; Technology and Digital; Brand, Marketing and Media; Sales, Retail and Customer Experience; Finance, Strategy and Growth; and Community, Education and Outreach.",
      "followUps": [
        "Which team are you trying to reach?"
      ],
      "buttons": [
        {
          "label": "Human Resources",
          "action": "intent",
          "intentId": "human_resources"
        },
        {
          "label": "Technology & IT",
          "action": "intent",
          "intentId": "technology_it"
        },
        {
          "label": "Marketing & PR",
          "action": "intent",
          "intentId": "marketing"
        },
        {
          "label": "Sales",
          "action": "intent",
          "intentId": "sales_team"
        },
        {
          "label": "Finance",
          "action": "intent",
          "intentId": "finance"
        },
        {
          "label": "Community",
          "action": "intent",
          "intentId": "community_partnership"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Administration",
      "url": "https://liquidsoldier.com/liquid-soldier-pages/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "leadership",
      "category": "Departments",
      "examples": [
        "who runs liquid soldier",
        "leadership team"
      ],
      "keywords": [
        "leadership",
        "executive",
        "management",
        "who runs"
      ],
      "response": "Liquid Soldier publishes leadership and governance information through its Executive Team, Executive Committee, and Advisory Committee pages. Names and titles should always be read from the live site because they can change.",
      "followUps": [
        "Which leadership group are you looking for?"
      ],
      "buttons": [
        {
          "label": "Executive Team",
          "action": "intent",
          "intentId": "executive_team"
        },
        {
          "label": "Executive Committee",
          "action": "intent",
          "intentId": "executive_committee"
        },
        {
          "label": "Advisory Committee",
          "action": "intent",
          "intentId": "advisory_committee"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Leadership & Governance",
      "url": "https://liquidsoldier.com/leadership-governance/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "executive_team",
      "category": "Departments",
      "examples": [
        "executive team members",
        "company officers"
      ],
      "keywords": [
        "executive team",
        "officer",
        "ceo",
        "president"
      ],
      "response": "The Executive Team page is the current source for senior leadership names and roles.",
      "followUps": [
        "Would you like to open the live Executive Team page?"
      ],
      "buttons": [
        {
          "label": "View Executive Team",
          "action": "link",
          "url": "https://liquidsoldier.com/leadership-governance/executive-team/"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Executive Team",
      "url": "https://liquidsoldier.com/leadership-governance/executive-team/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "executive_committee",
      "category": "Departments",
      "examples": [
        "who is on executive committee",
        "executive committee"
      ],
      "keywords": [
        "executive committee",
        "committee",
        "decision makers"
      ],
      "response": "The Executive Committee helps coordinate leadership and organizational priorities. Current membership and titles are maintained on the live page.",
      "followUps": [
        "Would you like the current committee page?"
      ],
      "buttons": [
        {
          "label": "View committee",
          "action": "link",
          "url": "https://liquidsoldier.com/leadership-governance/executive-committee/"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Executive Committee",
      "url": "https://liquidsoldier.com/leadership-governance/executive-committee/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "advisory_committee",
      "category": "Departments",
      "examples": [
        "advisory board",
        "advisory committee"
      ],
      "keywords": [
        "advisory",
        "advisor",
        "board"
      ],
      "response": "The Advisory Committee provides specialized perspective and guidance. Current members and roles should be confirmed on the live page.",
      "followUps": [
        "Would you like to view it?"
      ],
      "buttons": [
        {
          "label": "View Advisory Committee",
          "action": "link",
          "url": "https://liquidsoldier.com/leadership-governance/advisory-committee/"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Advisory Committee",
      "url": "https://liquidsoldier.com/leadership-governance/advisory-committee/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "medical_committee",
      "category": "Departments",
      "examples": [
        "medical committee",
        "health advisors"
      ],
      "keywords": [
        "medical committee",
        "clinical",
        "medical advisor",
        "research"
      ],
      "response": "The Medical Committee sits within Medical, Wellness & Research. It is the appropriate route for organizational medical and wellness oversight questions, not personal diagnosis or treatment.",
      "followUps": [
        "Is this an organizational inquiry or a personal health question?"
      ],
      "buttons": [
        {
          "label": "Medical Committee",
          "action": "link",
          "url": "https://liquidsoldier.com/medical-wellness-research/medical-committee/"
        },
        {
          "label": "Product safety",
          "action": "intent",
          "intentId": "supplement_safety"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Medical Committee",
      "url": "https://liquidsoldier.com/medical-wellness-research/medical-committee/",
      "liveDataOnly": false,
      "medicalSafety": true,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "health_wellness_department",
      "category": "Departments",
      "examples": [
        "health and wellness team",
        "wellness department"
      ],
      "keywords": [
        "health wellness",
        "wellness team",
        "health department"
      ],
      "response": "The Health and Wellness department supports the organization's wellness-focused work. Product, program, partnership, and professional inquiries can be routed there.",
      "followUps": [
        "What kind of wellness inquiry do you have?"
      ],
      "buttons": [
        {
          "label": "Products",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Program",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Partnership",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Professional inquiry",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Health and Wellness",
      "url": "https://liquidsoldier.com/medical-wellness-research/health-and-wellness/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "executive_assistants",
      "category": "Departments",
      "examples": [
        "contact executive assistant",
        "schedule with leadership"
      ],
      "keywords": [
        "executive assistant",
        "schedule executive",
        "leadership contact"
      ],
      "response": "Executive Assistants support leadership coordination and scheduling. Share the purpose and requested person; meetings are subject to review and availability.",
      "followUps": [
        "Who are you trying to reach and why?"
      ],
      "buttons": [
        {
          "label": "Start request",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "requestedPerson",
        "purpose"
      ],
      "department": "Executive Assistants",
      "url": "https://liquidsoldier.com/people-administration/executive-assistants/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "technology_it",
      "category": "Departments",
      "examples": [
        "contact it",
        "technical department"
      ],
      "keywords": [
        "technology",
        "it team",
        "technical",
        "system"
      ],
      "response": "The Technology & IT Team handles internal and platform technology matters. Customer website problems can also be routed there with the page, device, and error details.",
      "followUps": [
        "Is this a website problem, account problem, or business inquiry?"
      ],
      "buttons": [
        {
          "label": "Website problem",
          "action": "lead"
        },
        {
          "label": "Account problem",
          "action": "lead"
        },
        {
          "label": "Business inquiry",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_issue",
      "leadFields": [
        "name",
        "email",
        "phone",
        "page",
        "device",
        "issue"
      ],
      "department": "Technology & IT Team",
      "url": "https://liquidsoldier.com/technology-digital/technology-it-team/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "web_design",
      "category": "Departments",
      "examples": [
        "web design team",
        "website services"
      ],
      "keywords": [
        "web design",
        "website team",
        "design services",
        "development"
      ],
      "response": "Liquid Soldier has a Web Design Team within Technology & Digital. I can route a service, partnership, accessibility, or website-quality inquiry.",
      "followUps": [
        "What kind of web request is this?"
      ],
      "buttons": [
        {
          "label": "Service inquiry",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Partnership",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Report website issue",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "request"
      ],
      "department": "Web Design Team",
      "url": "https://liquidsoldier.com/technology-digital/web-design-team/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "marketing",
      "category": "Departments",
      "examples": [
        "marketing team",
        "brand collaboration"
      ],
      "keywords": [
        "marketing",
        "brand",
        "campaign",
        "promotion",
        "collaboration"
      ],
      "response": "Brand and marketing inquiries can be routed through the Brand, Marketing & Media group. Please include the organization, audience, and proposed collaboration.",
      "followUps": [
        "Is this advertising, co-marketing, sponsorship, or another idea?"
      ],
      "buttons": [
        {
          "label": "Advertising",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Co-marketing",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Sponsorship",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Other",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "proposal"
      ],
      "department": "Brand & Marketing",
      "url": "https://liquidsoldier.com/brand-marketing-media/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "public_relations",
      "category": "Departments",
      "examples": [
        "contact pr",
        "public relations"
      ],
      "keywords": [
        "public relations",
        "pr",
        "press",
        "reputation"
      ],
      "response": "Public Relations handles press, public statements, media coordination, and related external communications.",
      "followUps": [
        "Is this a press deadline, interview, statement, or partnership?"
      ],
      "buttons": [
        {
          "label": "Press inquiry",
          "action": "intent",
          "intentId": "press_inquiry"
        },
        {
          "label": "Interview",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Statement",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Other",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "deadline",
        "request"
      ],
      "department": "Public Relations",
      "url": "https://liquidsoldier.com/brand-marketing-media/public-relations/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "social_media",
      "category": "Departments",
      "examples": [
        "social media team",
        "report social account"
      ],
      "keywords": [
        "social media",
        "instagram",
        "facebook",
        "tiktok",
        "x twitter",
        "linkedin"
      ],
      "response": "The Social Media department handles channel content and social inquiries. For impersonation, abuse, or urgent account concerns, include the platform and public URL but never send passwords.",
      "followUps": [
        "Is this content, partnership, support, or an account report?"
      ],
      "buttons": [
        {
          "label": "Content",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Partnership",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Report account",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_issue",
      "leadFields": [
        "name",
        "email",
        "phone",
        "platform",
        "url",
        "issue"
      ],
      "department": "Social Media",
      "url": "https://liquidsoldier.com/brand-marketing-media/social-media/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "social_branding",
      "category": "Departments",
      "examples": [
        "branding department",
        "brand guidelines"
      ],
      "keywords": [
        "branding",
        "logo use",
        "brand guidelines",
        "trademark"
      ],
      "response": "The Social Branding Department is the appropriate route for brand presentation, approved assets, and social brand consistency. Permission to use a logo or trademark must be confirmed in writing.",
      "followUps": [
        "Do you need brand assets, usage permission, or a partnership review?"
      ],
      "buttons": [
        {
          "label": "Brand assets",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Usage permission",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Partnership",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_request",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "intendedUse"
      ],
      "department": "Social Branding Department",
      "url": "https://liquidsoldier.com/brand-marketing-media/social-branding-department/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "sales_team",
      "category": "Departments",
      "examples": [
        "contact sales",
        "wholesale inquiry"
      ],
      "keywords": [
        "sales",
        "retail",
        "wholesale",
        "bulk order",
        "distribution"
      ],
      "response": "The Sales Team handles sales opportunities and can route retail, wholesale, distribution, or bulk-purchase inquiries.",
      "followUps": [
        "Is this retail, wholesale, distribution, or a bulk order?"
      ],
      "buttons": [
        {
          "label": "Retail",
          "action": "lead"
        },
        {
          "label": "Wholesale",
          "action": "lead"
        },
        {
          "label": "Distribution",
          "action": "lead"
        },
        {
          "label": "Bulk order",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "request",
        "estimatedVolume"
      ],
      "department": "Sales Team",
      "url": "https://liquidsoldier.com/sales-retail-customer-experience/sales-team/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "finance",
      "category": "Departments",
      "examples": [
        "contact finance",
        "financial department"
      ],
      "keywords": [
        "finance",
        "financial planning",
        "treasury",
        "budget"
      ],
      "response": "Finance inquiries are routed through Finance, Strategy & Growth. Customer billing issues should go to Customer Service, while investor matters go to the Investment Team.",
      "followUps": [
        "Is this billing, vendor finance, investment, or a corporate inquiry?"
      ],
      "buttons": [
        {
          "label": "Billing",
          "action": "intent",
          "intentId": "customer_service"
        },
        {
          "label": "Vendor finance",
          "action": "intent",
          "intentId": "accounting"
        },
        {
          "label": "Investing",
          "action": "intent",
          "intentId": "investment_overview"
        },
        {
          "label": "Corporate finance",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_request",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "request"
      ],
      "department": "Finance",
      "url": "https://liquidsoldier.com/finance-strategy-growth/finance/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "accounting",
      "category": "Departments",
      "examples": [
        "contact accounting",
        "invoice question"
      ],
      "keywords": [
        "accounting",
        "invoice",
        "accounts payable",
        "accounts receivable",
        "tax form"
      ],
      "response": "Accounting handles appropriate invoice and accounting matters. Please do not send bank details, tax IDs, or full payment-card data through chat.",
      "followUps": [
        "Is this an invoice, payment record, vendor document, or other accounting request?"
      ],
      "buttons": [
        {
          "label": "Invoice",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Payment record",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Vendor document",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Other",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_issue",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "invoiceNumber",
        "request"
      ],
      "department": "Accounting",
      "url": "https://liquidsoldier.com/finance-strategy-growth/accounting/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "mergers_acquisitions",
      "category": "Departments",
      "examples": [
        "acquisition proposal",
        "sell my company to you"
      ],
      "keywords": [
        "merger",
        "acquisition",
        "m&a",
        "buy company",
        "strategic transaction"
      ],
      "response": "Merger and acquisition inquiries are reviewed by the M&A team. A brief, non-confidential overview is appropriate for initial routing; do not send sensitive deal materials through chat.",
      "followUps": [
        "Are you proposing an acquisition, merger, or strategic transaction?"
      ],
      "buttons": [
        {
          "label": "Acquisition",
          "action": "set_entity",
          "field": "transactionType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Merger",
          "action": "set_entity",
          "field": "transactionType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Strategic transaction",
          "action": "set_entity",
          "field": "transactionType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "required",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "transactionType",
        "summary"
      ],
      "department": "Merger & Acquisitions",
      "url": "https://liquidsoldier.com/finance-strategy-growth/merger-acquisitions/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "product_development",
      "category": "Departments",
      "examples": [
        "pitch a product",
        "product development team"
      ],
      "keywords": [
        "product development",
        "inventor",
        "new product",
        "prototype",
        "formulation"
      ],
      "response": "Product Development reviews appropriate product concepts, improvements, and collaborations. Start with a non-confidential summary; submission does not create an obligation or guarantee review.",
      "followUps": [
        "Is this a new concept, improvement, supplier idea, or collaboration?"
      ],
      "buttons": [
        {
          "label": "New concept",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Improvement",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Supplier",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Collaboration",
          "action": "set_entity",
          "field": "requestType",
          "response": "Got it. I can route that to the right team.",
          "nextButtons": [
            {
              "label": "Continue contact request",
              "action": "lead"
            },
            {
              "label": "Ask another question",
              "action": "system"
            }
          ]
        },
        {
          "label": "Contact the team",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "departments",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_interest",
      "leadFields": [
        "name",
        "email",
        "phone",
        "organization",
        "conceptSummary"
      ],
      "department": "Product Development",
      "url": "https://liquidsoldier.com/finance-strategy-growth/product-development/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "policies_overview",
      "category": "Policies",
      "examples": [
        "policies",
        "website policies",
        "show me your policies"
      ],
      "keywords": [
        "policies",
        "legal pages",
        "rules"
      ],
      "response": "Liquid Soldier publishes policies covering privacy, cookies, terms and conditions, acceptable use, community conduct, accessibility, confidentiality and data protection, and Marketplace returns.",
      "followUps": [
        "Which policy do you need?"
      ],
      "buttons": [
        {
          "label": "Privacy Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/privacy-policy/"
        },
        {
          "label": "Terms and Conditions",
          "action": "link",
          "url": "https://liquidsoldier.com/terms-and-conditions/"
        },
        {
          "label": "Cookie Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/cookie-policy/"
        },
        {
          "label": "Acceptable Use Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/acceptable-use-policy/"
        },
        {
          "label": "Community Guidelines",
          "action": "link",
          "url": "https://liquidsoldier.com/community-guidelines/"
        },
        {
          "label": "Marketplace Returns",
          "action": "intent",
          "intentId": "marketplace_return_policy"
        }
      ],
      "memory": {
        "topic": "policies",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Legal / Administration",
      "url": "https://liquidsoldier.com/terms-and-conditions/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "privacy_policy",
      "category": "Policies",
      "examples": [
        "how do you use my data",
        "privacy policy"
      ],
      "keywords": [
        "privacy",
        "personal information",
        "data",
        "sell my data"
      ],
      "response": "The Privacy Policy explains how personal information is handled. For the exact current terms, use the live policy rather than a chatbot summary.",
      "followUps": [
        "Would you like to open the Privacy Policy?"
      ],
      "buttons": [
        {
          "label": "Privacy Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/privacy-policy/"
        },
        {
          "label": "Cookie Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/cookie-policy/"
        }
      ],
      "memory": {
        "topic": "policies",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Legal / Administration",
      "url": "https://liquidsoldier.com/privacy-policy/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "terms",
      "category": "Policies",
      "examples": [
        "terms and conditions",
        "terms of service"
      ],
      "keywords": [
        "terms",
        "conditions",
        "agreement",
        "service terms"
      ],
      "response": "The live Terms and Conditions and Additional Terms govern applicable site use and transactions. I can point you to the current documents.",
      "followUps": [
        "Which terms do you need?"
      ],
      "buttons": [
        {
          "label": "Terms and Conditions",
          "action": "link",
          "url": "https://liquidsoldier.com/terms-and-conditions/"
        },
        {
          "label": "Additional Terms",
          "action": "link",
          "url": "https://liquidsoldier.com/terms-and-conditions/"
        }
      ],
      "memory": {
        "topic": "policies",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Legal / Administration",
      "url": "https://liquidsoldier.com/terms-and-conditions/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "acceptable_use",
      "category": "Policies",
      "examples": [
        "what is allowed on the site",
        "acceptable use"
      ],
      "keywords": [
        "acceptable use",
        "prohibited",
        "allowed content",
        "abuse"
      ],
      "response": "The Acceptable Use Policy covers permitted and prohibited use of Liquid Soldier services and community features.",
      "followUps": [
        "Would you like the current policy?"
      ],
      "buttons": [
        {
          "label": "Acceptable Use Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/acceptable-use-policy/"
        },
        {
          "label": "Community Guidelines",
          "action": "link",
          "url": "https://liquidsoldier.com/community-guidelines/"
        }
      ],
      "memory": {
        "topic": "policies",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Legal / Administration",
      "url": "https://liquidsoldier.com/acceptable-use-policy/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "community_guidelines",
      "category": "Policies",
      "examples": [
        "community rules",
        "posting guidelines"
      ],
      "keywords": [
        "community guidelines",
        "rules",
        "conduct",
        "moderation"
      ],
      "response": "The Community Guidelines describe expected conduct and content standards. Current wording on the live page controls.",
      "followUps": [
        "Would you like to open the guidelines?"
      ],
      "buttons": [
        {
          "label": "Community Guidelines",
          "action": "link",
          "url": "https://liquidsoldier.com/community-guidelines/"
        },
        {
          "label": "Report concern",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "policies",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Legal / Administration",
      "url": "https://liquidsoldier.com/community-guidelines/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "cookie_policy",
      "category": "Policies",
      "examples": [
        "do you use cookies",
        "cookie settings"
      ],
      "keywords": [
        "cookie",
        "tracking",
        "analytics",
        "consent"
      ],
      "response": "The Cookie Policy explains the site's use of cookies and related technologies. Browser controls may also let you manage stored cookies.",
      "followUps": [
        "Would you like the current Cookie Policy?"
      ],
      "buttons": [
        {
          "label": "Cookie Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/cookie-policy/"
        },
        {
          "label": "Privacy Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/privacy-policy/"
        }
      ],
      "memory": {
        "topic": "policies",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Legal / Administration",
      "url": "https://liquidsoldier.com/cookie-policy/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "accessibility",
      "category": "Policies",
      "examples": [
        "is the site accessible",
        "report accessibility problem"
      ],
      "keywords": [
        "accessibility",
        "screen reader",
        "keyboard",
        "wcag",
        "disability"
      ],
      "response": "Liquid Soldier publishes an Accessibility Statement. If you hit a barrier, I can route the page URL, device, assistive technology, and problem description to the web team.",
      "followUps": [
        "Would you like the statement or to report a barrier?"
      ],
      "buttons": [
        {
          "label": "Accessibility Statement",
          "action": "link",
          "url": "https://liquidsoldier.com/accessibility-statement/"
        },
        {
          "label": "Report barrier",
          "action": "lead"
        }
      ],
      "memory": {
        "topic": "policies",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "on_issue",
      "leadFields": [
        "name",
        "email",
        "phone",
        "page",
        "device",
        "assistiveTechnology",
        "issue"
      ],
      "department": "Legal / Administration",
      "url": "https://liquidsoldier.com/accessibility-statement/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "confidentiality",
      "category": "Policies",
      "examples": [
        "data protection statement",
        "confidential information"
      ],
      "keywords": [
        "confidentiality",
        "data protection",
        "security statement"
      ],
      "response": "Liquid Soldier publishes a Confidentiality & Data Protection Statement. Use the live document for exact current language.",
      "followUps": [
        "Would you like to open it?"
      ],
      "buttons": [
        {
          "label": "Data Protection Statement",
          "action": "link",
          "url": "https://liquidsoldier.com/confidentiality-data-protection-statement/"
        },
        {
          "label": "Privacy Policy",
          "action": "link",
          "url": "https://liquidsoldier.com/privacy-policy/"
        }
      ],
      "memory": {
        "topic": "policies",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Legal / Administration",
      "url": "https://liquidsoldier.com/confidentiality-data-protection-statement/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "vague_request",
      "category": "Conversation Routing",
      "examples": [
        "help",
        "i have a question",
        "not sure"
      ],
      "keywords": [
        "help",
        "question",
        "something",
        "unsure"
      ],
      "response": "I can help narrow it down. Is this about shopping, an order, Marketplace selling, franchising, investing, careers, community programs, a department, or a policy?",
      "followUps": [
        "What are you trying to accomplish today?"
      ],
      "buttons": [
        {
          "label": "Shop",
          "action": "system"
        },
        {
          "label": "Order help",
          "action": "system"
        },
        {
          "label": "Business opportunity",
          "action": "system"
        },
        {
          "label": "Something else",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "misspelling_handling",
      "category": "Conversation Routing",
      "examples": [
        "franshise",
        "costumer suport",
        "supliment"
      ],
      "keywords": [
        "franshise",
        "franchize",
        "costumer",
        "supliment",
        "shiping",
        "retun",
        "refnd"
      ],
      "response": "I understand the topic even when wording or spelling varies. I’ll use the closest matching Liquid Soldier subject and ask a short clarifying question if two topics are equally likely.",
      "followUps": [
        "Which part of that topic do you need?"
      ],
      "buttons": [
        {
          "label": "Continue",
          "action": "system"
        },
        {
          "label": "Choose another topic",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "multi_intent",
      "category": "Conversation Routing",
      "examples": [
        "franchise and marketplace vendor",
        "order issue and refund"
      ],
      "keywords": [
        "and",
        "also",
        "plus",
        "two questions"
      ],
      "response": "I can help with both. I’ll handle the most urgent or specific item first, keep the second one queued, and offer to return to it when we finish.",
      "followUps": [
        "Which one should we handle first?"
      ],
      "buttons": [
        {
          "label": "First topic",
          "action": "system"
        },
        {
          "label": "Second topic",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "pronoun_context",
      "category": "Conversation Routing",
      "examples": [
        "how much is it",
        "is that available",
        "what about returns"
      ],
      "keywords": [
        "it",
        "that",
        "those",
        "there",
        "them"
      ],
      "response": "I’ll use the active conversation topic to understand references like “it,” “that,” or “there.” If the reference is genuinely ambiguous, I’ll offer the two most likely choices.",
      "followUps": [
        "Are you referring to the current product or the previous topic?"
      ],
      "buttons": [
        {
          "label": "Current topic",
          "action": "system"
        },
        {
          "label": "Previous topic",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "topic_switch",
      "category": "Conversation Routing",
      "examples": [
        "actually i want to ask about careers",
        "never mind, cbd"
      ],
      "keywords": [
        "actually",
        "instead",
        "new question",
        "change topic"
      ],
      "response": "No problem - we can switch topics immediately. I’ll pause the earlier flow and only offer to resume it later if that would be useful.",
      "followUps": [
        "What would you like to discuss now?"
      ],
      "buttons": [
        {
          "label": "Continue new topic",
          "action": "system"
        },
        {
          "label": "Resume previous topic",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "gratitude_exit",
      "category": "Conversation Routing",
      "examples": [
        "thanks",
        "that is all",
        "no thanks",
        "bye"
      ],
      "keywords": [
        "thanks",
        "thank you",
        "bye",
        "done",
        "that's all"
      ],
      "response": "You’re very welcome. If another question comes up, the chat will be here to help.",
      "followUps": [
        "Would you like anything else before you go?"
      ],
      "buttons": [
        {
          "label": "Ask another question",
          "action": "system"
        },
        {
          "label": "Close chat",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "unsupported_question",
      "category": "Conversation Routing",
      "examples": [
        "tell me something unrelated",
        "can you guarantee this fact"
      ],
      "keywords": [
        "unrelated",
        "unknown",
        "unsupported"
      ],
      "response": "I may not be able to verify that from Liquid Soldier’s approved information, but I can still move you forward. Tell me whether you want the closest relevant page, a clarifying question, or a message routed to the appropriate team.",
      "followUps": [
        "Which route would be most helpful?"
      ],
      "buttons": [
        {
          "label": "Closest page",
          "action": "system"
        },
        {
          "label": "Clarify",
          "action": "system"
        },
        {
          "label": "Contact team",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "live_data_guardrail",
      "category": "Conversation Routing",
      "examples": [
        "who is the chairman now",
        "current price",
        "is it in stock today"
      ],
      "keywords": [
        "current",
        "today",
        "now",
        "latest",
        "price",
        "stock",
        "member"
      ],
      "response": "That detail can change. I’ll point you to the live page or route the question to the responsible team instead of presenting a stored value as current.",
      "followUps": [
        "Would you like the live page or a follow-up?"
      ],
      "buttons": [
        {
          "label": "Open live page",
          "action": "system"
        },
        {
          "label": "Request follow-up",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": true,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "medical_emergency",
      "category": "Safety",
      "examples": [
        "i cannot breathe",
        "severe reaction",
        "medical emergency"
      ],
      "keywords": [
        "can't breathe",
        "cannot breathe",
        "chest pain",
        "fainting",
        "severe swelling",
        "emergency"
      ],
      "response": "If someone may be in immediate danger, call emergency services now. In the U.S., call 911. Do not wait for this chat or use it for diagnosis. After immediate care is addressed, I can help route a product report.",
      "followUps": [
        "Are emergency services being contacted?"
      ],
      "buttons": [
        {
          "label": "Report product later",
          "action": "system"
        },
        {
          "label": "Close chat",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "none",
      "leadFields": [],
      "department": "Emergency Services / Product Safety",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": true,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "lead_capture_consent",
      "category": "Lead Capture",
      "examples": [
        "have someone contact me",
        "yes call me"
      ],
      "keywords": [
        "contact me",
        "call me",
        "email me",
        "follow up"
      ],
      "response": "I can arrange that. I’ll ask only for the information needed to route the request, then send the full lead details and transcript to the configured client endpoint. The visitor sees only a success confirmation.",
      "followUps": [
        "May I start with your name?"
      ],
      "buttons": [
        {
          "label": "Yes",
          "action": "system"
        },
        {
          "label": "Not now",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "system",
      "leadFields": [
        "name",
        "email",
        "phone"
      ],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "lead_success",
      "category": "Lead Capture",
      "examples": [
        "submit my information"
      ],
      "keywords": [
        "submit",
        "send details",
        "finish"
      ],
      "response": "Thank you! Your information has been submitted successfully. A member of the appropriate Liquid Soldier team will contact you shortly.",
      "followUps": [
        "Would you like to ask anything else?"
      ],
      "buttons": [
        {
          "label": "Ask another question",
          "action": "system"
        },
        {
          "label": "Close chat",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "system",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    },
    {
      "id": "lead_failure",
      "category": "Lead Capture",
      "examples": [
        "submission failed"
      ],
      "keywords": [
        "failed",
        "error",
        "not sent"
      ],
      "response": "Your request is still important. Please check the required contact fields and try again, or use the current Contact Us page so the right team receives it.",
      "followUps": [
        "Would you like to retry or open Contact Us?"
      ],
      "buttons": [
        {
          "label": "Try again",
          "action": "system"
        },
        {
          "label": "Contact Us",
          "action": "system"
        }
      ],
      "memory": {
        "topic": "system",
        "retainEntities": true,
        "allowPronounReference": true,
        "pauseOnTopicSwitch": true,
        "resumeSuggestion": true
      },
      "leadCapture": "system",
      "leadFields": [],
      "department": "Conversation Router",
      "url": "https://liquidsoldier.com/contact-us/",
      "liveDataOnly": false,
      "medicalSafety": false,
      "sourceBasis": [
        "approved_chatbox_faq",
        "live_website_audit_2026-09-03"
      ]
    }
  ]
};
