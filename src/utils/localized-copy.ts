export const CATEGORY_ORDER = ['prepare', 'payment', 'transport', 'life', 'medical', 'cities', 'tips'] as const;

export type CategorySlug = (typeof CATEGORY_ORDER)[number];
export type UiLang = 'en' | 'fr' | 'zh' | 'ja' | 'ko' | 'th' | 'id' | 'vi' | 'ar';

const LOCALIZED_COPY = {
  "en": {
    "categoryLabels": {
      "prepare": "Prepare",
      "payment": "Payment",
      "transport": "Transport",
      "life": "Life",
      "medical": "Medical",
      "cities": "Cities",
      "tips": "Tips"
    },
    "layoutCopy": {
      "language": "Language",
      "search": "Search",
      "about": "About",
      "contact": "Contact us",
      "footerRights": "All rights reserved."
    },
    "guidePageCopy": {
      "lastUpdated": "Last updated",
      "onThisPage": "On this page",
      "relatedGuides": "Related guides"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "Featured guides",
      "readGuide": "Read guide",
      "readGuideLabel": "Read guide:"
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "Practical, content-first guidance for first-time foreigners visiting China.",
      "heroTitle": "China Starter Guide",
      "heroDescription": "Clear, current guidance for first-time foreigners visiting China. Start with the essentials, then follow the guides that match your trip.",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "Prepare before arrival",
          "description": "Visas, documents, and essential setup."
        },
        {
          "path": "/category/payment",
          "title": "Pay smoothly",
          "description": "Wallets, cards, and cash expectations."
        },
        {
          "path": "/category/transport",
          "title": "Get around fast",
          "description": "Trains, metros, and local travel basics."
        },
        {
          "path": "/category/medical",
          "title": "Use medical care well",
          "description": "Clinics, hospitals, emergencies, and costs."
        }
      ],
      "sections": {
        "featured": "Start with these 5 guides",
        "topConcerns": "Top concerns",
        "medicalBasics": "Medical basics for first-time visitors",
        "medicalIntro": "Use these guides if you want a practical overview of clinics, hospitals, costs, and urgent care before you need them.",
        "recent": "Recently updated",
        "lastUpdated": "Last updated"
      },
      "topConcernIds": [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds": [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "Search | China Starter Guide",
      "metaDescription": "Search guides and answers for first-time visitors to China.",
      "title": "Search",
      "intro": "Find guides and answers across the China Starter Guide.",
      "label": "Search guides",
      "placeholder": "Search guides",
      "startTyping": "Start typing to see results.",
      "noResults": "No results found. Try another search.",
      "resultsLabel": "{count} results",
      "availableAfterBuild": "Search is available after `npm run build` and `npm run preview`.",
      "loadingIndex": "Loading search index...",
      "temporarilyUnavailable": "Search is temporarily unavailable.",
      "searching": "Searching...",
      "stillLoading": "Search is still loading. Try again in a moment."
    },
    "aboutCopy": {
      "metaTitle": "About China Starter Guide",
      "metaDescription": "Who maintains this site, why it exists, and the disclaimer.",
      "heroTitle": "About China Starter Guide",
      "heroBody": "This is a practical guide for first-time foreign visitors to China. The goal is to reduce uncertainty before departure and after arrival with clear, actionable guidance.",
      "heroLinks": "Start with Prepare, Payment, and Transport to cover the essentials.",
      "panels": [
        {
          "title": "Who maintains this site",
          "body": "The site is maintained by a native Chinese creator who works in the internet industry and is deeply interested in digital products and content.",
          "items": [
            "Familiar with everyday life and travel flows in China",
            "Focused on the real questions first-time visitors face",
            "Committed to ongoing updates"
          ]
        },
        {
          "title": "Why this site exists",
          "body": "The goal is to remove the most common uncertainties for first-time visitors: entry requirements, payments, connectivity, transport, and city planning.",
          "items": [
            "Free to use",
            "Built for easy public access",
            "Email is open for feedback or corrections"
          ]
        },
        {
          "title": "Sources and review",
          "body": "Content is compiled from public sources and personally reviewed by the maintainer. We update regularly, but cannot guarantee that every detail is always complete, accurate, or current."
        }
      ],
      "disclaimerTitle": "Disclaimer",
      "disclaimer": [
        "This site is provided for general information only. It is not legal, policy, or professional advice. Always verify details through official sources and make independent decisions for your trip.",
        "If any loss or impact results from errors, omissions, or outdated information, the maintainer assumes no legal or non-legal responsibility. Visitors accept 100% of the risk and responsibility for their own actions.",
        "If you have feedback, corrections, or collaboration ideas, email contact@chinastarterguide.com."
      ],
      "ctaTitle": "Contact me",
      "ctaBody": "Email contact@chinastarterguide.com for questions, feedback, or collaboration.",
      "ctaButton": "Contact me"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "Visa, entry, safety, and pre-trip essentials to get you ready.",
        "featuredHeading": "Featured pre-trip guides",
        "allHeading": "All pre-trip guides",
        "topicGroups": [
          {
            "title": "First trip essentials",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "Visa and entry",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "Stay limits and immigration rules",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "Safety and awareness",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "Etiquette and communication",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "Customs and what to bring",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "Mobile wallets, cards, cash, and QR payments that actually work.",
        "featuredHeading": "Featured payment guides",
        "allHeading": "All payment guides",
        "topicGroups": [
          {
            "title": "Start here",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "Set up Alipay and WeChat Pay",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "Cards, cash, and backup options",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "Everyday payment situations",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "Problems, scams, and limits",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "Trains, metros, flights, and airport transfers with clear steps.",
        "featuredHeading": "Featured transport guides",
        "allHeading": "All transport guides",
        "topicGroups": [
          {
            "title": "Start with local transport",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "Trains and intercity travel",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "Flights, airports, and baggage",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "If something goes wrong",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "Families, seniors, and accessibility",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "Everyday living basics: SIMs, hotels, food, apps, and connectivity.",
        "featuredHeading": "Featured daily life guides",
        "allHeading": "All daily life guides",
        "topicGroups": [
          {
            "title": "Connectivity first",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "Hotels and registration",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "Food and drinking basics",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "Apps and communication",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "Daily habits and services",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "Longer stays",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "How foreigners can use clinics, hospitals, pharmacies, and emergency care in China with less stress.",
        "support": "Start here if you want clear, practical help choosing the right medical path in China before a small problem turns into a confusing one.",
        "featuredHeading": "Featured medical guides",
        "allHeading": "All medical guides",
        "quickPaths": [
          {
            "title": "I need care now",
            "description": "Choose between pharmacy, clinic, hospital, or emergency care quickly.",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "I need the right hospital",
            "description": "Decide between public hospitals, private clinics, and international departments.",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "I need urgent help",
            "description": "Use this path when symptoms are escalating and the trip cannot wait.",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "Start here",
            "ids": [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "Appointments and access",
            "ids": [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "Costs and coverage",
            "ids": [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "Pharmacy and medicines",
            "ids": [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "Urgent help",
            "ids": [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "Choose the right cities, routes, and seasons for a first trip.",
        "featuredHeading": "Featured city guides",
        "allHeading": "All city guides",
        "topicGroups": [
          {
            "title": "Start planning",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "Classic first-time cities",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "Food and lively cities",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "Nature and scenery",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "Suggested routes",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "Best seasons to go",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "Short, practical tips that reduce friction: etiquette, safety, communication, and daily habits.",
        "featuredHeading": "Featured tips",
        "allHeading": "All tips",
        "topicGroups": [
          {
            "title": "Etiquette and social norms",
            "ids": [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "Communication and understanding",
            "ids": [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "Safety and awareness",
            "ids": [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "Families and seniors",
            "ids": [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "Shopping and bargaining",
            "ids": [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "{count} guides available",
      "quickPaths": "Quick paths",
      "openGuide": "Open guide",
      "featuredEyebrow": "Featured",
      "readGuide": "Read guide",
      "browseByTopic": "Browse by topic",
      "medicalTopicIntro": "Start with the question you are trying to solve right now, then move into the detailed guide that matches your situation.",
      "lastUpdated": "Last updated",
      "noGuides": "No guides are available in this category yet."
    },
    "baseHeadSegmentLabels": {
      "category": "Category",
      "guides": "Guides",
      "search": "Search",
      "about": "About"
    }
  },
  "fr": {
    "categoryLabels": {
      "prepare": "Préparation",
      "payment": "Paiement",
      "transport": "Transport",
      "life": "Vie pratique",
      "medical": "Santé",
      "cities": "Villes",
      "tips": "Conseils"
    },
    "layoutCopy": {
      "language": "Langue",
      "search": "Recherche",
      "about": "À propos",
      "contact": "Contactez-nous",
      "footerRights": "Tous droits réservés."
    },
    "guidePageCopy": {
      "lastUpdated": "Dernière mise à jour",
      "onThisPage": "Sur cette page",
      "relatedGuides": "Guides associés"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "Guides en vedette",
      "readGuide": "Lire le guide",
      "readGuideLabel": "Lire le guide :"
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "Des guides pratiques et clairs pour les voyageurs étrangers qui viennent en Chine pour la première fois.",
      "heroTitle": "China Starter Guide",
      "heroDescription": "Des guides clairs, pratiques et régulièrement mis à jour pour les voyageurs étrangers qui découvrent la Chine. Commencez par l’essentiel, puis avancez selon votre itinéraire.",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "Préparer le départ",
          "description": "Visa, documents et points essentiels avant l’arrivée."
        },
        {
          "path": "/category/payment",
          "title": "Comprendre le paiement",
          "description": "Cartes, portefeuilles mobiles, QR codes et argent liquide."
        },
        {
          "path": "/category/transport",
          "title": "Se déplacer facilement",
          "description": "Train, métro, taxi, Didi et trajets entre villes."
        },
        {
          "path": "/category/medical",
          "title": "Anticiper les soins",
          "description": "Cliniques, hôpitaux, pharmacies, urgences et coûts."
        }
      ],
      "sections": {
        "featured": "Commencez avec ces 5 guides",
        "topConcerns": "Principales préoccupations",
        "medicalBasics": "Les bases santé avant de partir",
        "medicalIntro": "Si vous voulez comprendre à l’avance comment fonctionnent les cliniques, les hôpitaux, les pharmacies, les coûts et les urgences, commencez ici.",
        "recent": "Mises à jour récentes",
        "lastUpdated": "Dernière mise à jour"
      },
      "topConcernIds":       [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds":       [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "Rechercher | China Starter Guide",
      "metaDescription": "Recherchez des guides et des réponses utiles pour un premier voyage en Chine.",
      "title": "Recherche",
      "intro": "Trouvez rapidement un guide ou une réponse dans China Starter Guide.",
      "label": "Rechercher un guide",
      "placeholder": "Rechercher un guide",
      "startTyping": "Commencez à taper pour voir les résultats.",
      "noResults": "Aucun résultat trouvé. Essayez une autre recherche.",
      "resultsLabel": "{count} résultats",
      "availableAfterBuild": "La recherche est disponible après `npm run build` et `npm run preview`.",
      "loadingIndex": "Chargement de l'index de recherche...",
      "temporarilyUnavailable": "La recherche est temporairement indisponible.",
      "searching": "Recherche...",
      "stillLoading": "La recherche est toujours en cours de chargement. Réessayez dans un instant."
    },
    "aboutCopy": {
      "metaTitle": "À propos de China Starter Guide",
      "metaDescription": "Qui gère ce site, pourquoi il existe et ce qu’il faut savoir avant de l’utiliser.",
      "heroTitle": "À propos de China Starter Guide",
      "heroBody": "China Starter Guide est un site pratique pour les voyageurs étrangers qui viennent en Chine pour la première fois. Son objectif est simple : réduire l’incertitude avant le départ et après l’arrivée grâce à des informations claires et utiles.",
      "heroLinks": "Commencez par la préparation, le paiement et le transport pour couvrir l'essentiel.",
      "panels": [
        {
          "title": "Qui gère ce site",
          "body": "Le site est géré par un créateur chinois qui travaille dans l’industrie Internet et s’intéresse de près aux produits numériques et à la qualité de l’information.",
          "items": [
            "Bonne connaissance de la vie quotidienne et des déplacements en Chine",
            "Attention portée aux vraies questions que se posent les primo-visiteurs",
            "Mise à jour continue du contenu"
          ]
        },
        {
          "title": "Pourquoi ce site existe",
          "body": "Le but est de réduire les incertitudes les plus fréquentes lors d’un premier voyage en Chine : l’entrée sur le territoire, le paiement, la connectivité, les transports et le choix des villes.",
          "items": [
            "Accès gratuit",
            "Informations rédigées pour être claires et faciles à consulter",
            "Retour par e-mail bienvenu pour les corrections et remarques"
          ]
        },
        {
          "title": "Sources et revue",
          "body": "Le contenu s’appuie sur des sources publiques et sur une relecture manuelle par le responsable du site. Des mises à jour sont faites régulièrement, sans pouvoir garantir que chaque détail soit toujours complet, exact ou parfaitement à jour."
        }
      ],
      "disclaimerTitle": "Clause de non-responsabilité",
      "disclaimer": [
        "Ce site est fourni à titre d’information générale uniquement. Il ne constitue ni un conseil juridique, ni un conseil réglementaire, ni un conseil professionnel. Vérifiez toujours les détails auprès de sources officielles avant de prendre vos décisions.",
        "En cas de perte ou de conséquence liée à une erreur, une omission ou une information périmée, le responsable du site n’assume pas de responsabilité légale ou extra-légale. Chaque visiteur reste responsable de ses propres choix de voyage.",
        "Si vous avez des commentaires, des corrections ou des idées de collaboration, envoyez un e-mail à contact@chinastarterguide.com."
      ],
      "ctaTitle": "Contactez-moi",
      "ctaBody": "Envoyez un e-mail à contact@chinastarterguide.com pour des questions, des commentaires ou une collaboration.",
      "ctaButton": "Contactez-moi"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "Visa, entrée sur le territoire, sécurité et points essentiels avant le départ.",
        "featuredHeading": "Guides de préparation à lire en priorité",
        "allHeading": "Tous les guides de préparation",
        "topicGroups": [
          {
            "title": "Commencez ici",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "Visa et entrée",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "Durée de séjour et règles d'immigration",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "Sécurité et vigilance",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "Étiquette et communication",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "Douane et objets à emporter",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "Cartes, portefeuilles mobiles, espèces et paiements QR : ce qui fonctionne vraiment sur place.",
        "featuredHeading": "Guides de paiement à lire en priorité",
        "allHeading": "Tous les guides de paiement",
        "topicGroups": [
          {
            "title": "Commencez ici",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "Configurer Alipay et WeChat Pay",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "Cartes, espèces et solutions de secours",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "Situations de paiement du quotidien",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "Problèmes, arnaques et limites",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "Train, métro, vols, aéroports et déplacements entre villes, expliqués étape par étape.",
        "featuredHeading": "Guides de transport à lire en priorité",
        "allHeading": "Tous les guides de transport",
        "topicGroups": [
          {
            "title": "Commencer par les transports sur place",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "Trains et trajets interurbains",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "Vols, aéroports et bagages",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "En cas de problème",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "Familles, seniors et accessibilité",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "Les bases de la vie pratique : SIM, hôtels, nourriture, applications et connexion Internet.",
        "featuredHeading": "Guides de vie pratique à lire en priorité",
        "allHeading": "Tous les guides de vie pratique",
        "topicGroups": [
          {
            "title": "Connexion d'abord",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "Hôtels et enregistrement",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "Manger et boire au quotidien",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "Applications et communication",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "Habitudes et services du quotidien",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "Séjours plus longs",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "Comment consulter, aller à l’hôpital, passer en pharmacie ou gérer une urgence en Chine sans se compliquer la vie.",
        "support": "Commencez ici si vous voulez comprendre clairement à quel moment aller en pharmacie, en clinique, à l’hôpital ou aux urgences en Chine.",
        "featuredHeading": "Guides santé à lire en priorité",
        "allHeading": "Tous les guides médicaux",
        "quickPaths": [
          {
            "title": "J'ai besoin de soins maintenant",
            "description": "Choisissez rapidement entre une pharmacie, une clinique, un hôpital ou des soins d'urgence.",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "J'ai besoin du bon hôpital",
            "description": "Choisissez entre les hôpitaux publics, les cliniques privées et les services internationaux.",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "J'ai besoin d'aide urgente",
            "description": "Utilisez ce chemin lorsque les symptômes s’aggravent et que le voyage ne peut pas attendre.",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "Commencez ici",
            "ids":             [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "Rendez-vous et accès",
            "ids":             [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "Coûts et couverture",
            "ids":             [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "Pharmacie et médicaments",
            "ids":             [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "Aide urgente",
            "ids":             [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "Choisissez les bonnes villes, le bon rythme et la bonne saison pour un premier voyage.",
        "featuredHeading": "Guides des villes à lire en priorité",
        "allHeading": "Tous les guides des villes",
        "topicGroups": [
          {
            "title": "Commencer à planifier",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "Villes classiques pour un premier voyage",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "Villes du sud et axées sur la gastronomie",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "Nature et paysages",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "Itinéraires recommandés",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "Meilleures saisons pour partir",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "Des conseils courts et concrets pour réduire les frictions : étiquette, sécurité, communication et habitudes du quotidien.",
        "featuredHeading": "Conseils à lire en priorité",
        "allHeading": "Tous les conseils",
        "topicGroups": [
          {
            "title": "Étiquette et normes sociales",
            "ids":             [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "Communication et compréhension",
            "ids":             [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "Sécurité et sensibilisation",
            "ids":             [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "Familles et seniors",
            "ids":             [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "Shopping et négociation",
            "ids":             [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "{count} guides disponibles",
      "quickPaths": "Chemins rapides",
      "openGuide": "Voir le guide",
      "featuredEyebrow": "En vedette",
      "readGuide": "Lire le guide",
      "browseByTopic": "Naviguer par sujet",
      "medicalTopicIntro": "Commencez par la question que vous essayez de résoudre actuellement, puis passez au guide détaillé qui correspond à votre situation.",
      "lastUpdated": "Dernière mise à jour",
      "noGuides": "Aucun guide n'est encore disponible dans cette catégorie."
    },
    "baseHeadSegmentLabels": {
      "category": "Catégorie",
      "guides": "Guides",
      "search": "Recherche",
      "about": "À propos"
    }
  },
  "zh": {
    "categoryLabels": {
      "prepare": "准备",
      "payment": "支付",
      "transport": "交通",
      "life": "生活",
      "medical": "医疗",
      "cities": "城市",
      "tips": "贴士"
    },
    "layoutCopy": {
      "language": "语言",
      "search": "搜索",
      "about": "关于",
      "contact": "联系我们",
      "footerRights": "版权所有。"
    },
    "guidePageCopy": {
      "lastUpdated": "最后更新",
      "onThisPage": "在此页面上",
      "relatedGuides": "相关指南"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "精选指南",
      "readGuide": "阅读指南",
      "readGuideLabel": "阅读指南："
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "为第一次来中国的外国游客提供清晰、实用、以内容为核心的指南。",
      "heroTitle": "China Starter Guide",
      "heroDescription": "为第一次来中国的外国游客提供清晰、实用、持续更新的指南。先从最关键的准备开始，再按你的行程需要继续往下看。",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "出发前先准备好",
          "description": "签证、文件和行前必备事项。"
        },
        {
          "path": "/category/payment",
          "title": "把支付先理顺",
          "description": "银行卡、移动支付和现金怎么配合用。"
        },
        {
          "path": "/category/transport",
          "title": "把出行方式弄明白",
          "description": "高铁、地铁、打车和城市内移动。"
        },
        {
          "path": "/category/medical",
          "title": "提前了解医疗",
          "description": "诊所、医院、药店、急诊和费用。"
        }
      ],
      "sections": {
        "featured": "从这 5 个指南开始",
        "topConcerns": "最关心的问题",
        "medicalBasics": "第一次来中国，医疗先看这些",
        "medicalIntro": "如果你希望在真正需要之前，先把医院、诊所、费用和紧急情况的处理方式弄清楚，可以先从这里开始。",
        "recent": "最近更新",
        "lastUpdated": "最后更新"
      },
      "topConcernIds": [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds": [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "搜索 | China Starter Guide",
      "metaDescription": "搜索第一次来中国时最常用的指南和答案。",
      "title": "搜索",
      "intro": "在 China Starter Guide 中查找指南和答案。",
      "label": "搜索指南",
      "placeholder": "搜索指南",
      "startTyping": "开始输入以查看结果。",
      "noResults": "没有找到结果。尝试另一个搜索。",
      "resultsLabel": "{count} 个结果",
      "availableAfterBuild": "运行 `npm run build` 和 `npm run preview` 后即可使用搜索。",
      "loadingIndex": "正在加载搜索索引...",
      "temporarilyUnavailable": "暂时无法搜索。",
      "searching": "正在搜索...",
      "stillLoading": "搜索仍在加载中。稍后再试一次。"
    },
    "aboutCopy": {
      "metaTitle": "关于 China Starter Guide",
      "metaDescription": "这个网站由谁维护、为什么要做，以及使用前需要知道的说明。",
      "heroTitle": "关于 China Starter Guide",
      "heroBody": "这是一个写给第一次来中国的外国游客的实用指南站点。目标很简单：用清楚、可执行的内容，减少你在出发前和落地后的不确定感。",
      "heroLinks": "从准备、支付和交通开始，先把最核心的内容理顺。",
      "panels": [
        {
          "title": "谁维护这个网站",
          "body": "这个网站由一位中国本土创作者维护，他长期在互联网行业工作，也一直关注数字产品和内容体验。",
          "items": [
            "熟悉中国的日常生活和出行流程",
            "关注首次访问者面临的真实问题",
            "致力于持续更新"
          ]
        },
        {
          "title": "为什么这个网站存在",
          "body": "目标是尽量减少第一次来中国时最常见的不确定性，比如入境要求、支付方式、网络连接、交通和城市选择。",
          "items": [
            "免费使用",
            "尽量把信息写得直接、清楚、好查",
            "欢迎通过邮件反馈问题或纠错"
          ]
        },
        {
          "title": "来源与审校",
          "body": "内容基于公开信息整理，并由维护者逐篇审核和更新。我们会持续维护，但不能保证每个细节都永远完整、准确或实时。"
        }
      ],
      "disclaimerTitle": "免责声明",
      "disclaimer": [
        "本网站内容仅供一般信息参考，不构成法律、政策或任何专业建议。涉及签证、入境、交通、医疗等具体事项时，请务必再通过官方渠道核实。",
        "如果因错误、遗漏或信息过期而产生任何损失或影响，维护者不承担法律或非法律责任。你的行程和决定，仍需由你自己独立判断并承担风险。",
        "如果你有反馈、更正或协作想法，请发送电子邮件至 contact@chinastarterguide.com。"
      ],
      "ctaTitle": "联系我",
      "ctaBody": "如有问题、反馈或协作，请发送电子邮件至 contact@chinastarterguide.com。",
      "ctaButton": "联系我"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "签证、入境、安全和行前必需品，帮助你把出发前的准备理顺。",
        "featuredHeading": "精选准备指南",
        "allHeading": "全部准备指南",
        "topicGroups": [
          {
            "title": "第一次来中国先看这些",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "签证与入境",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "停留期限与移民规则",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "安全与应对",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "礼仪与沟通",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "海关与携带物品",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "实际可用的移动钱包、银行卡、现金和二维码支付。",
        "featuredHeading": "精选支付指南",
        "allHeading": "所有支付指南",
        "topicGroups": [
          {
            "title": "先从这里开始",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "设置支付宝和微信支付",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "银行卡、现金与备用方式",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "日常支付场景",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "问题、风险与限制",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "高铁、地铁、航班、机场接驳和城市内移动，按步骤讲清楚。",
        "featuredHeading": "精选交通指南",
        "allHeading": "所有交通指南",
        "topicGroups": [
          {
            "title": "先看市内交通",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "火车与跨城出行",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "航班、机场与行李",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "遇到问题怎么办",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "家庭出行、长者与无障碍",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "日常生活里的关键基础：SIM 卡、酒店、吃饭、常用 App 和网络连接。",
        "featuredHeading": "精选生活指南",
        "allHeading": "所有生活指南",
        "topicGroups": [
          {
            "title": "先解决网络连接",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "酒店与住宿登记",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "吃饭与饮水基础",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "常用应用与沟通",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "日常习惯与生活服务",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "较长时间停留",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "外国游客在中国怎么看诊、去医院、找药店，以及遇到急症时该怎么处理。",
        "support": "如果你想在小问题变复杂之前，先把在中国该去诊所、医院还是药店这件事弄明白，可以先从这里开始。",
        "featuredHeading": "精选医疗指南",
        "allHeading": "所有医疗指南",
        "quickPaths": [
          {
            "title": "我现在就要处理身体问题",
            "description": "快速判断该去药店、门诊、医院还是急诊。",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "我需要合适的医院",
            "description": "在公立医院、私立诊所和国际部之间做出更合适的选择。",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "我需要紧急帮助",
            "description": "当症状突然加重，不能再等时，先看这条路径。",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "从这里开始",
            "ids": [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "预约和访问",
            "ids": [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "费用和保险",
            "ids": [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "药房和药品",
            "ids": [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "紧急帮助",
            "ids": [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "为第一次旅行选择合适的城市、路线和季节。",
        "featuredHeading": "精选城市指南",
        "allHeading": "所有城市指南",
        "topicGroups": [
          {
            "title": "先规划行程",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "首次来华的经典城市",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "美食与活力城市",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "自然风景目的地",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "推荐路线",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "什么时候去更合适",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "减少摩擦的简短实用技巧：礼仪、安全、沟通和日常习惯。",
        "featuredHeading": "精选贴士",
        "allHeading": "所有贴士",
        "topicGroups": [
          {
            "title": "礼仪和社会规范",
            "ids": [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "沟通与理解",
            "ids": [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "安全与场景判断",
            "ids": [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "家庭和老年人",
            "ids": [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "购物和讨价还价",
            "ids": [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "{count} 指南可用",
      "quickPaths": "快速路径",
      "openGuide": "查看指南",
      "featuredEyebrow": "精选",
      "readGuide": "阅读指南",
      "browseByTopic": "按主题浏览",
      "medicalTopicIntro": "从你现在最想解决的问题开始，再进入更符合你情况的详细指南。",
      "lastUpdated": "最后更新",
      "noGuides": "此类别尚无可用指南。"
    },
    "baseHeadSegmentLabels": {
      "category": "类别",
      "guides": "指南",
      "search": "搜索",
      "about": "关于"
    }
  },
  "ja": {
    "categoryLabels": {
      "prepare": "準備",
      "payment": "支払い",
      "transport": "交通",
      "life": "生活",
      "medical": "医療",
      "cities": "都市",
      "tips": "ヒント"
    },
    "layoutCopy": {
      "language": "言語",
      "search": "検索",
      "about": "サイトについて",
      "contact": "お問い合わせ",
      "footerRights": "無断転載を禁じます。"
    },
    "guidePageCopy": {
      "lastUpdated": "最終更新日",
      "onThisPage": "このページでは",
      "relatedGuides": "関連ガイド"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "注目のガイド",
      "readGuide": "ガイドを読む",
      "readGuideLabel": "ガイドを読む:"
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "初めて中国を訪れる外国人向けの実践的で内容重視のガイダンス。",
      "heroTitle": "China Starter Guide",
      "heroDescription": "初めて中国を訪れる外国人向けに、わかりやすく実用的な情報を継続的に更新しています。まずは重要な準備事項から確認し、その後は旅程に合ったガイドを読んでください。",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "到着前に準備する",
          "description": "ビザ、必要書類、出発前の準備。"
        },
        {
          "path": "/category/payment",
          "title": "支払いをスムーズにする",
          "description": "カード、モバイル決済、現金の使い分け。"
        },
        {
          "path": "/category/transport",
          "title": "移動の基本を押さえる",
          "description": "鉄道、地下鉄、市内移動の要点。"
        },
        {
          "path": "/category/medical",
          "title": "医療の基本を知る",
          "description": "クリニック、病院、救急、費用。"
        }
      ],
      "sections": {
        "featured": "これらの 5 つのガイドから始めてください",
        "topConcerns": "よくある不安",
        "medicalBasics": "初めての方向けの医療ガイド",
        "medicalIntro": "病院のかかり方や費用、緊急時の流れを事前に把握しておきたいなら、まずはここから読んでください。",
        "recent": "最近更新",
        "lastUpdated": "最終更新日"
      },
      "topConcernIds":       [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds":       [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "検索 | China Starter Guide",
      "metaDescription": "中国への初めての訪問者向けのガイドと回答を検索します。",
      "title": "検索",
      "intro": "China Starter Guide 内のガイドや答えを検索できます。",
      "label": "検索ガイド",
      "placeholder": "検索ガイド",
      "startTyping": "入力を開始すると結果が表示されます。",
      "noResults": "結果が見つかりませんでした。別の検索を試してください。",
      "resultsLabel": "{count}件の結果",
      "availableAfterBuild": "検索は `npm run build` と `npm run preview` の実行後に利用できます。",
      "loadingIndex": "検索インデックスを読み込んでいます...",
      "temporarilyUnavailable": "検索は一時的に利用できません。",
      "searching": "検索中...",
      "stillLoading": "検索はまだ読み込み中です。しばらくしてからもう一度試してください。"
    },
    "aboutCopy": {
      "metaTitle": "China Starter Guideについて",
      "metaDescription": "このサイトの管理者、存在理由、および免責事項。",
      "heroTitle": "China Starter Guideについて",
      "heroBody": "このサイトは、初めて中国を訪れる外国人向けの実用ガイドです。出発前から到着後まで、迷いや不安を減らせるよう、わかりやすく実践的な情報をまとめています。",
      "heroLinks": "まずは「準備」「支払い」「交通」から読むと、必要な情報をひと通りつかめます。",
      "panels": [
        {
          "title": "このサイトを運営している人",
          "body": "このサイトは、中国出身でインターネット業界に携わり、デジタルプロダクトやコンテンツ体験に強い関心を持つクリエイターが運営しています。",
          "items": [
            "中国での日常生活や移動の流れをよく理解している",
            "初めて訪れる人が実際に困りやすい点に焦点を当てている",
            "内容を継続的に見直し、更新している"
          ]
        },
        {
          "title": "このサイトを作った理由",
          "body": "入国条件、支払い方法、通信環境、移動手段、都市選びなど、初めて中国を訪れる人が感じやすい不安をできるだけ減らすことが目的です。",
          "items": [
            "無料で利用できます",
            "必要な情報をすぐ探せる構成を重視しています",
            "フィードバックや修正提案はメールで受け付けています"
          ]
        },
        {
          "title": "出典とレビュー",
          "body": "内容は公開情報をもとに整理し、運営者が一つひとつ確認しながら更新しています。ただし、すべての情報が常に完全・正確・最新であることまでは保証できません。"
        }
      ],
      "disclaimerTitle": "免責事項",
      "disclaimer": [
        "このサイトの内容は一般的な情報提供のみを目的としており、法律・制度・専門分野に関する助言ではありません。ビザ、入国、交通、医療などの重要事項は、必ず公式情報でも再確認してください。",
        "内容に誤りや抜け、古い情報が含まれていたことで損失や不利益が生じても、運営者は法的責任その他の責任を負いません。最終的な判断と行動は、ご自身の責任でお願いします。",
        "フィードバック、修正、コラボレーションのアイデアがある場合は、contact@chinastarterguide.com まで電子メールを送信してください。"
      ],
      "ctaTitle": "お問い合わせ",
      "ctaBody": "質問、フィードバック、コラボレーションについては、contact@chinastarterguide.com に電子メールを送信してください。",
      "ctaButton": "お問い合わせ"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "ビザ、入国、安全、旅行前の準備に必要な必需品。",
        "featuredHeading": "注目の準備ガイド",
        "allHeading": "すべての準備ガイド",
        "topicGroups": [
          {
            "title": "最初に読むもの",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "ビザと入国",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "滞在期間と出入国ルール",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "安全と注意点",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "マナーとコミュニケーション",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "税関と持ち込み品",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "実際に使えるモバイルウォレット、カード、現金、QR決済。",
        "featuredHeading": "注目のお支払いガイド",
        "allHeading": "すべての支払いガイド",
        "topicGroups": [
          {
            "title": "まずここから",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "Alipay と WeChat Pay の設定",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "カード、現金、予備手段",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "日常の支払いシーン",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "トラブル、詐欺、利用制限",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "電車、地下鉄、飛行機、空港への移動を明確な手順でご利用いただけます。",
        "featuredHeading": "注目の交通ガイド",
        "allHeading": "すべての交通ガイド",
        "topicGroups": [
          {
            "title": "まずは市内移動から",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "列車と都市間移動",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "飛行機、空港、手荷物",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "困ったとき",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "家族、高齢者、バリアフリー",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "日常生活の基本: SIM、ホテル、食べ物、アプリ、接続。",
        "featuredHeading": "注目の生活ガイド",
        "allHeading": "すべての生活ガイド",
        "topicGroups": [
          {
            "title": "まず通信を整える",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "ホテルと宿泊登録",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "食事と飲み物の基本",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "アプリとコミュニケーション",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "日常の習慣とサービス",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "長めの滞在",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "外国人が中国の診療所、病院、薬局、救急医療をストレスなく利用できる方法。",
        "support": "小さな問題が混乱を招く前に、中国で適切な医療の道を選択するための明確で実践的なサポートが必要な場合は、ここから始めてください。",
        "featuredHeading": "注目の医療ガイド",
        "allHeading": "すべての医療ガイド",
        "quickPaths": [
          {
            "title": "今は介護が必要です",
            "description": "薬局、診療所、病院、救急医療の中からすぐに選択してください。",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "適切な病院が必要です",
            "description": "公立病院、私立クリニック、国際科のいずれかを選択してください。",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "緊急の助けが必要です",
            "description": "症状が悪化して旅行が待てない場合は、このパスを使用します。",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "ここから始めましょう",
            "ids":             [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "予約とアクセス",
            "ids":             [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "費用と補償範囲",
            "ids":             [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "薬局と薬",
            "ids":             [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "緊急の助け",
            "ids":             [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "初めての旅行に最適な都市、ルート、季節を選択してください。",
        "featuredHeading": "注目の都市ガイド",
        "allHeading": "すべての都市ガイド",
        "topicGroups": [
          {
            "title": "まず旅程を考える",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "初めての中国で定番の都市",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "グルメと活気のある都市",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "自然と景観",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "おすすめルート",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "行きやすい季節",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "摩擦を減らすための短くて実践的なヒント: エチケット、安全、コミュニケーション、日常の習慣。",
        "featuredHeading": "注目のヒント",
        "allHeading": "すべてのヒント",
        "topicGroups": [
          {
            "title": "エチケットと社会規範",
            "ids":             [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "コミュニケーションと理解",
            "ids":             [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "安全性と意識",
            "ids":             [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "ご家族やご年配の方",
            "ids":             [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "買い物と交渉",
            "ids":             [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "{count} ガイドが利用可能",
      "quickPaths": "クイックパス",
      "openGuide": "オープンガイド",
      "featuredEyebrow": "注目の",
      "readGuide": "ガイドを読む",
      "browseByTopic": "トピック別に閲覧する",
      "medicalTopicIntro": "現在解決しようとしている質問から始めて、状況に応じた詳細なガイドに進みます。",
      "lastUpdated": "最終更新日",
      "noGuides": "このカテゴリではまだ利用可能なガイドがありません。"
    },
    "baseHeadSegmentLabels": {
      "category": "カテゴリ",
      "guides": "ガイド",
      "search": "検索",
      "about": "について"
    }
  },
  "ko": {
    "categoryLabels": {
      "prepare": "준비",
      "payment": "결제",
      "transport": "교통",
      "life": "생활",
      "medical": "의료",
      "cities": "도시",
      "tips": "팁"
    },
    "layoutCopy": {
      "language": "언어",
      "search": "검색",
      "about": "소개",
      "contact": "문의하기",
      "footerRights": "모든 권리 보유."
    },
    "guidePageCopy": {
      "lastUpdated": "마지막 업데이트",
      "onThisPage": "이 페이지에서",
      "relatedGuides": "관련 가이드"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "주요 가이드",
      "readGuide": "가이드 읽기",
      "readGuideLabel": "가이드 읽기:"
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "중국을 처음 방문하는 외국인을 위한 실용적이고 내용 중심의 안내.",
      "heroTitle": "China Starter Guide",
      "heroDescription": "중국을 처음 찾는 외국인을 위해 핵심 정보를 쉽고 실용적으로 정리한 가이드입니다. 먼저 꼭 알아야 할 준비 사항부터 확인한 뒤, 일정에 맞는 안내를 이어서 살펴보세요.",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "도착 전 준비",
          "description": "비자, 서류, 출발 전 필수 준비."
        },
        {
          "path": "/category/payment",
          "title": "결제를 미리 정리하기",
          "description": "카드, 모바일 결제, 현금을 어떻게 준비할지."
        },
        {
          "path": "/category/transport",
          "title": "이동 방법 익히기",
          "description": "고속철, 지하철, 시내 이동의 기본."
        },
        {
          "path": "/category/medical",
          "title": "의료 정보 미리 보기",
          "description": "진료소, 병원, 응급 상황과 비용."
        }
      ],
      "sections": {
        "featured": "이 5가지 가이드로 시작해보세요",
        "topConcerns": "주요 관심사",
        "medicalBasics": "처음 방문하는 분들을 위한 의료 기본 정보",
        "medicalIntro": "병원 이용법, 비용, 응급 상황 대처를 미리 파악하고 싶다면 이 가이드부터 읽어보세요.",
        "recent": "최근 업데이트됨",
        "lastUpdated": "마지막 업데이트"
      },
      "topConcernIds":       [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds":       [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "검색 | China Starter Guide",
      "metaDescription": "중국을 처음 방문하는 분들을 위한 안내와 답변을 검색해보세요.",
      "title": "검색",
      "intro": "China Starter Guide의 가이드와 답변을 검색해보세요.",
      "label": "가이드 검색",
      "placeholder": "가이드 검색",
      "startTyping": "결과를 보려면 입력을 시작하세요.",
      "noResults": "검색된 결과가 없습니다. 다른 검색을 시도해 보세요.",
      "resultsLabel": "{count}개 결과",
      "availableAfterBuild": "`npm run build`, `npm run preview` 이후부터 검색이 가능합니다.",
      "loadingIndex": "검색 색인 로드 중...",
      "temporarilyUnavailable": "일시적으로 검색이 불가능합니다.",
      "searching": "검색 중...",
      "stillLoading": "검색이 아직 로드 중입니다. 잠시 후에 다시 시도해 보세요."
    },
    "aboutCopy": {
      "metaTitle": "China Starter Guide 소개",
      "metaDescription": "이 사이트를 관리하는 사람, 사이트가 존재하는 이유 및 면책조항.",
      "heroTitle": "China Starter Guide 소개",
      "heroBody": "중국을 처음 방문하는 외국인을 위한 실용 가이드입니다. 출발 전과 도착 후에 생길 수 있는 불확실성을 줄일 수 있도록, 명확하고 바로 활용할 수 있는 정보를 정리했습니다.",
      "heroLinks": "먼저 준비, 결제, 교통부터 보면 핵심 내용을 빠르게 파악할 수 있습니다.",
      "panels": [
        {
          "title": "이 사이트를 관리하는 사람",
          "body": "이 사이트는 인터넷 업계에서 일하며 디지털 제품과 콘텐츠 경험에 꾸준한 관심을 가져온 중국인 크리에이터가 운영하고 있습니다.",
          "items": [
            "중국의 일상생활과 이동 동선을 잘 이해하고 있습니다",
            "처음 방문하는 사람이 실제로 마주치는 질문에 집중합니다",
            "내용을 계속 점검하고 업데이트합니다"
          ]
        },
        {
          "title": "이 사이트가 존재하는 이유",
          "body": "입국 요건, 결제 방식, 인터넷 연결, 교통, 도시 선택처럼 처음 방문하는 사람이 가장 자주 막히는 지점을 줄이는 것이 목표입니다.",
          "items": [
            "무료로 이용할 수 있습니다",
            "필요한 정보를 쉽게 찾을 수 있게 구성했습니다",
            "피드백과 수정 제안은 이메일로 받고 있습니다"
          ]
        },
        {
          "title": "출처 및 리뷰",
          "body": "콘텐츠는 공개된 정보를 바탕으로 정리하고, 운영자가 직접 검토하며 업데이트합니다. 다만 모든 세부 정보가 언제나 완전하고 정확하며 최신이라고 보장할 수는 없습니다."
        }
      ],
      "disclaimerTitle": "면책 조항",
      "disclaimer": [
        "이 사이트의 내용은 일반적인 정보 제공을 위한 것이며, 법률, 정책, 전문 자문을 대신하지 않습니다. 비자, 입국, 교통, 의료처럼 중요한 사항은 반드시 공식 채널을 통해 다시 확인하세요.",
        "내용의 오류, 누락, 오래된 정보로 인해 손실이나 불이익이 발생하더라도 운영자는 법적 책임이나 그 밖의 책임을 지지 않습니다. 최종 판단과 행동에 대한 책임은 이용자 본인에게 있습니다.",
        "피드백, 수정 또는 협업 아이디어가 있으면 contact@chinastarterguide.com로 이메일을 보내주세요."
      ],
      "ctaTitle": "문의하기",
      "ctaBody": "질문, 피드백, 협업을 원하시면 contact@chinastarterguide.com로 이메일을 보내주세요.",
      "ctaButton": "문의하기"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "비자, 입국, 안전, 여행 전 필수 사항을 준비하세요.",
        "featuredHeading": "주요 준비 가이드",
        "allHeading": "모든 준비 가이드",
        "topicGroups": [
          {
            "title": "처음 읽을 것",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "비자와 입국",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "체류 기간과 출입국 규정",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "안전과 주의할 점",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "예절과 소통",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "세관과 반입 물품",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "실제로 작동하는 모바일 지갑, 카드, 현금, QR 결제.",
        "featuredHeading": "주요 결제 가이드",
        "allHeading": "모든 결제 가이드",
        "topicGroups": [
          {
            "title": "먼저 읽을 것",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "알리페이와 위챗페이 설정",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "카드, 현금, 대체 수단",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "일상 결제 상황",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "문제, 사기, 이용 제한",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "명확한 단계를 통해 기차, 지하철, 항공편 및 공항 이동이 가능합니다.",
        "featuredHeading": "주요 교통 가이드",
        "allHeading": "모든 교통 가이드",
        "topicGroups": [
          {
            "title": "시내 이동부터 보기",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "기차와 도시 간 이동",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "항공편, 공항, 수하물",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "문제가 생겼을 때",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "가족 여행, 시니어, 접근성",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "일상생활의 기본: SIM, 호텔, 음식, 앱, 연결성.",
        "featuredHeading": "주요 생활 가이드",
        "allHeading": "모든 생활 가이드",
        "topicGroups": [
          {
            "title": "먼저 연결부터",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "호텔과 숙소 등록",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "식사와 식수 기본",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "앱과 소통",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "일상 습관과 생활 서비스",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "장기 체류",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "외국인들이 스트레스를 덜 받으며 중국의 진료소, 병원, 약국, 응급 진료를 이용할 수 있는 방법.",
        "support": "작은 문제가 혼란스러운 문제로 변하기 전에 중국에서 올바른 의료 경로를 선택하는 명확하고 실용적인 도움을 원한다면 여기에서 시작하십시오.",
        "featuredHeading": "주요 의료 가이드",
        "allHeading": "모든 의료 가이드",
        "quickPaths": [
          {
            "title": "지금은 보살핌이 필요해",
            "description": "약국, 진료소, 병원 또는 응급 진료 중에서 빠르게 선택하세요.",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "나한테 맞는 병원이 필요해",
            "description": "공립 병원, 사립 진료소, 국제 진료과 중에서 결정하십시오.",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "긴급한 도움이 필요해요",
            "description": "증상이 심해지고 여행을 기다릴 수 없을 때 이 경로를 사용하세요.",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "여기서 시작하세요",
            "ids":             [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "약속 및 액세스",
            "ids":             [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "비용 및 보장",
            "ids":             [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "약국 및 의약품",
            "ids":             [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "긴급 도움",
            "ids":             [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "첫 번째 여행에 적합한 도시, 경로, 계절을 선택하세요.",
        "featuredHeading": "주요 도시 가이드",
        "allHeading": "모든 도시 가이드",
        "topicGroups": [
          {
            "title": "먼저 일정 짜기",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "첫 중국 여행의 대표 도시",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "미식과 활기 있는 도시",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "자연과 풍경",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "추천 루트",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "가기 좋은 계절",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "마찰을 줄이는 짧고 실용적인 팁: 에티켓, 안전, 의사소통, 일상 습관.",
        "featuredHeading": "주요 팁",
        "allHeading": "모든 팁",
        "topicGroups": [
          {
            "title": "에티켓과 사회적 규범",
            "ids":             [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "소통과 이해",
            "ids":             [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "안전과 인식",
            "ids":             [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "가족 및 노인",
            "ids":             [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "쇼핑과 흥정",
            "ids":             [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "{count} 가이드 사용 가능",
      "quickPaths": "빠른 경로",
      "openGuide": "가이드 열기",
      "featuredEyebrow": "추천",
      "readGuide": "가이드 읽기",
      "browseByTopic": "주제별로 찾아보기",
      "medicalTopicIntro": "지금 해결하려는 질문부터 시작하여 상황에 맞는 세부 가이드로 이동하세요.",
      "lastUpdated": "마지막 업데이트",
      "noGuides": "이 카테고리에는 아직 가이드가 없습니다."
    },
    "baseHeadSegmentLabels": {
      "category": "범주",
      "guides": "가이드",
      "search": "찾다",
      "about": "에 대한"
    }
  },
  "th": {
    "categoryLabels": {
      "prepare": "เตรียมตัว",
      "payment": "การชำระเงิน",
      "transport": "การเดินทาง",
      "life": "ชีวิตประจำวัน",
      "medical": "การแพทย์",
      "cities": "เมือง",
      "tips": "เคล็ดลับ"
    },
    "layoutCopy": {
      "language": "ภาษา",
      "search": "ค้นหา",
      "about": "เกี่ยวกับ",
      "contact": "ติดต่อเรา",
      "footerRights": "สงวนลิขสิทธิ์."
    },
    "guidePageCopy": {
      "lastUpdated": "อัปเดตล่าสุด",
      "onThisPage": "บนหน้านี้",
      "relatedGuides": "คำแนะนำที่เกี่ยวข้อง"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "คำแนะนำที่โดดเด่น",
      "readGuide": "อ่านคู่มือ",
      "readGuideLabel": "อ่านคู่มือ:"
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "คำแนะนำที่เป็นประโยชน์และเน้นเนื้อหาเป็นหลักสำหรับชาวต่างชาติที่มาเยือนจีนเป็นครั้งแรก",
      "heroTitle": "China Starter Guide",
      "heroDescription": "คู่มือนี้รวบรวมข้อมูลที่ชัดเจน ใช้งานได้จริง และอัปเดตอยู่เสมอสำหรับชาวต่างชาติที่มาเยือนจีนครั้งแรก เริ่มจากเรื่องสำคัญก่อน แล้วค่อยอ่านต่อในหัวข้อที่ตรงกับแผนการเดินทางของคุณ",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "เตรียมตัวก่อนมาถึง",
          "description": "วีซ่า เอกสาร และสิ่งที่ควรเตรียมก่อนเดินทาง"
        },
        {
          "path": "/category/payment",
          "title": "ชำระเงินได้อย่างราบรื่น",
          "description": "บัตร การชำระเงินผ่านมือถือ และเงินสด"
        },
        {
          "path": "/category/transport",
          "title": "ไปไหนมาไหนอย่างรวดเร็ว",
          "description": "รถไฟ รถไฟใต้ดิน และข้อมูลพื้นฐานการเดินทางในท้องถิ่น"
        },
        {
          "path": "/category/medical",
          "title": "ทำความเข้าใจระบบการแพทย์",
          "description": "คลินิก โรงพยาบาล เหตุฉุกเฉิน และค่าใช้จ่าย"
        }
      ],
      "sections": {
        "featured": "เริ่มต้นด้วยคำแนะนำ 5 ข้อนี้",
        "topConcerns": "ข้อกังวลยอดนิยม",
        "medicalBasics": "พื้นฐานทางการแพทย์สำหรับผู้มาเยือนครั้งแรก",
        "medicalIntro": "หากอยากทำความเข้าใจเรื่องคลินิก โรงพยาบาล ค่าใช้จ่าย และการรักษาฉุกเฉินไว้ล่วงหน้า ให้เริ่มจากคู่มือชุดนี้",
        "recent": "ปรับปรุงล่าสุด",
        "lastUpdated": "อัปเดตล่าสุด"
      },
      "topConcernIds":       [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds":       [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "ค้นหา | China Starter Guide",
      "metaDescription": "ค้นหาคำแนะนำและคำตอบสำหรับผู้มาเยือนจีนเป็นครั้งแรก",
      "title": "ค้นหา",
      "intro": "ค้นหาคำแนะนำและคำตอบใน China Starter Guide",
      "label": "คู่มือการค้นหา",
      "placeholder": "คู่มือการค้นหา",
      "startTyping": "เริ่มพิมพ์เพื่อดูผลลัพธ์",
      "noResults": "ไม่พบผลลัพธ์ ลองค้นหาอีกครั้ง",
      "resultsLabel": "ผลลัพธ์ {count}",
      "availableAfterBuild": "การค้นหาสามารถใช้ได้หลังจาก `npm run build` และ `npm run preview`",
      "loadingIndex": "กำลังโหลดดัชนีการค้นหา...",
      "temporarilyUnavailable": "การค้นหาไม่สามารถใช้งานได้ชั่วคราว",
      "searching": "กำลังค้นหา...",
      "stillLoading": "การค้นหายังคงโหลดอยู่ โปรดลองอีกครั้งในอีกสักครู่"
    },
    "aboutCopy": {
      "metaTitle": "เกี่ยวกับ China Starter Guide",
      "metaDescription": "ใครเป็นผู้ดูแลเว็บไซต์นี้ เหตุใดจึงมีอยู่ และข้อจำกัดความรับผิดชอบ",
      "heroTitle": "เกี่ยวกับ China Starter Guide",
      "heroBody": "นี่คือคู่มือภาคปฏิบัติสำหรับชาวต่างชาติที่มาเยือนจีนเป็นครั้งแรก เป้าหมายคือช่วยลดความไม่แน่ใจก่อนออกเดินทางและหลังมาถึงด้วยข้อมูลที่ชัดเจนและนำไปใช้ได้จริง",
      "heroLinks": "เริ่มจากหมวดการเตรียมตัว การชำระเงิน และการเดินทาง เพื่อเก็บพื้นฐานที่จำเป็นให้ครบก่อน",
      "panels": [
        {
          "title": "ใครเป็นผู้ดูแลไซต์นี้",
          "body": "เว็บไซต์นี้ดูแลโดยครีเอเตอร์ชาวจีนที่ทำงานในอุตสาหกรรมอินเทอร์เน็ต และสนใจเรื่องผลิตภัณฑ์ดิจิทัลกับประสบการณ์ด้านเนื้อหาอย่างต่อเนื่อง",
          "items": [
            "คุ้นเคยกับชีวิตประจำวันและกระแสการเดินทางในประเทศจีน",
            "มุ่งเน้นไปที่คำถามจริงที่ผู้เข้าชมครั้งแรกต้องเผชิญ",
            "มุ่งมั่นที่จะปรับปรุงอย่างต่อเนื่อง"
          ]
        },
        {
          "title": "เหตุใดจึงมีไซต์นี้",
          "body": "เป้าหมายคือการขจัดความไม่แน่นอนที่พบบ่อยที่สุดสำหรับผู้มาเยือนครั้งแรก: ข้อกำหนดในการเข้า การชำระเงิน การเชื่อมต่อ การคมนาคม และการวางผังเมือง",
          "items": [
            "ใช้งานได้ฟรี",
            "ออกแบบให้ค้นหาข้อมูลสำคัญได้ง่าย",
            "อีเมลเปิดรับข้อเสนอแนะหรือแก้ไข"
          ]
        },
        {
          "title": "แหล่งที่มาและการทบทวน",
          "body": "เนื้อหารวบรวมจากแหล่งสาธารณะและตรวจสอบโดยผู้ดูแลเป็นการส่วนตัว เราอัปเดตเป็นประจำ แต่ไม่สามารถรับประกันได้ว่าทุกรายละเอียดจะครบถ้วน ถูกต้อง หรือเป็นปัจจุบันเสมอไป"
        }
      ],
      "disclaimerTitle": "ข้อสงวนสิทธิ์",
      "disclaimer": [
        "เนื้อหาในเว็บไซต์นี้มีไว้เพื่อให้ข้อมูลทั่วไปเท่านั้น ไม่ใช่คำแนะนำทางกฎหมาย นโยบาย หรือคำแนะนำทางวิชาชีพ สำหรับเรื่องสำคัญอย่างวีซ่า การเข้าประเทศ การเดินทาง หรือการรักษาพยาบาล ควรตรวจสอบกับแหล่งข้อมูลทางการอีกครั้งเสมอ",
        "หากเกิดความเสียหายหรือผลกระทบจากข้อมูลที่คลาดเคลื่อน ตกหล่น หรือไม่เป็นปัจจุบัน ผู้ดูแลจะไม่รับผิดชอบไม่ว่าจะในทางกฎหมายหรือทางอื่น การตัดสินใจและความเสี่ยงสุดท้ายยังคงเป็นความรับผิดชอบของผู้ใช้งานเอง",
        "หากคุณมีข้อเสนอแนะ การแก้ไข หรือแนวคิดในการทำงานร่วมกัน โปรดส่งอีเมลไปที่ contact@chinastarterguide.com"
      ],
      "ctaTitle": "ติดต่อเรา",
      "ctaBody": "ส่งอีเมลถึง contact@chinastarterguide.com หากมีคำถาม ข้อเสนอแนะ หรือการทำงานร่วมกัน",
      "ctaButton": "ติดต่อเรา"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "วีซ่า การเข้าเมือง ความปลอดภัย และสิ่งจำเป็นก่อนการเดินทางเพื่อเตรียมพร้อมให้กับคุณ",
        "featuredHeading": "คู่มือเตรียมตัวเด่น",
        "allHeading": "คู่มือเตรียมตัวทั้งหมด",
        "topicGroups": [
          {
            "title": "เริ่มจากตรงนี้",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "วีซ่าและการเข้าประเทศ",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "ระยะเวลาพำนักและกฎตรวจคนเข้าเมือง",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "ความปลอดภัยและข้อควรระวัง",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "มารยาทและการสื่อสาร",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "ศุลกากรและของที่นำเข้า",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "กระเป๋าเงินมือถือ บัตร เงินสด และการชำระเงินด้วย QR ที่ใช้งานได้จริง",
        "featuredHeading": "คู่มือการชำระเงินที่โดดเด่น",
        "allHeading": "คู่มือการชำระเงินทั้งหมด",
        "topicGroups": [
          {
            "title": "เริ่มจากตรงนี้",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "ตั้งค่า Alipay และ WeChat Pay",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "บัตร เงินสด และทางเลือกสำรอง",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "สถานการณ์การจ่ายเงินในชีวิตประจำวัน",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "ปัญหา กลโกง และข้อจำกัด",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "รถไฟ รถไฟใต้ดิน เที่ยวบิน และบริการรับส่งสนามบินด้วยขั้นตอนที่ชัดเจน",
        "featuredHeading": "คู่มือการขนส่งที่โดดเด่น",
        "allHeading": "คู่มือการขนส่งทั้งหมด",
        "topicGroups": [
          {
            "title": "เริ่มจากการเดินทางในเมือง",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "รถไฟและการเดินทางข้ามเมือง",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "เที่ยวบิน สนามบิน และสัมภาระ",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "เมื่อเกิดปัญหา",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "ครอบครัว ผู้สูงอายุ และการเข้าถึง",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "พื้นฐานการใช้ชีวิตในแต่ละวัน: ซิม โรงแรม อาหาร แอพ และการเชื่อมต่อ",
        "featuredHeading": "คู่มือการใช้ชีวิตเด่น",
        "allHeading": "คู่มือการใช้ชีวิตทั้งหมด",
        "topicGroups": [
          {
            "title": "จัดการเรื่องการเชื่อมต่อก่อน",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "โรงแรมและการลงทะเบียนที่พัก",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "พื้นฐานเรื่องอาหารและน้ำดื่ม",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "แอปและการสื่อสาร",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "นิสัยประจำวันและบริการต่าง ๆ",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "การพำนักระยะยาว",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "ชาวต่างชาติสามารถใช้คลินิก โรงพยาบาล ร้านขายยา และศูนย์ดูแลฉุกเฉินในประเทศจีนได้อย่างไรโดยเครียดน้อยลง",
        "support": "เริ่มต้นที่นี่หากคุณต้องการความช่วยเหลือที่ชัดเจนและปฏิบัติได้จริงในการเลือกวิธีการทางการแพทย์ที่ถูกต้องในประเทศจีน ก่อนที่ปัญหาเล็กๆ น้อยๆ จะกลายเป็นปัญหาที่น่าสับสน",
        "featuredHeading": "คู่มือการแพทย์เด่น",
        "allHeading": "คู่มือการแพทย์ทั้งหมด",
        "quickPaths": [
          {
            "title": "ฉันต้องการการดูแลตอนนี้",
            "description": "เลือกระหว่างร้านขายยา คลินิก โรงพยาบาล หรือบริการฉุกเฉินได้อย่างรวดเร็ว",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "ฉันต้องการโรงพยาบาลที่เหมาะสม",
            "description": "ตัดสินใจเลือกระหว่างโรงพยาบาลของรัฐ คลินิกเอกชน และแผนกต่างประเทศ",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "ฉันต้องการความช่วยเหลืออย่างเร่งด่วน",
            "description": "ใช้เส้นทางนี้เมื่ออาการรุนแรงขึ้นและการเดินทางไม่สามารถรอได้",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "เริ่มที่นี่",
            "ids":             [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "การนัดหมายและการเข้าถึง",
            "ids":             [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "ค่าใช้จ่ายและความคุ้มครอง",
            "ids":             [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "ร้านขายยาและยารักษาโรค",
            "ids":             [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "ช่วยเหลือด่วน",
            "ids":             [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "เลือกเมือง เส้นทาง และฤดูกาลที่เหมาะสมสำหรับการเดินทางครั้งแรก",
        "featuredHeading": "คู่มือเมืองเด่น",
        "allHeading": "คู่มือเมืองทั้งหมด",
        "topicGroups": [
          {
            "title": "เริ่มวางแผนทริป",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "เมืองคลาสสิกสำหรับครั้งแรก",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "เมืองสายกินและเมืองที่มีชีวิตชีวา",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "ธรรมชาติและวิวทิวทัศน์",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "เส้นทางแนะนำ",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "ช่วงเวลาที่เหมาะจะไป",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "เคล็ดลับสั้นๆ ที่นำไปใช้ได้จริงซึ่งช่วยลดความขัดแย้ง: มารยาท ความปลอดภัย การสื่อสาร และนิสัยประจำวัน",
        "featuredHeading": "เคล็ดลับเด่น",
        "allHeading": "เคล็ดลับทั้งหมด",
        "topicGroups": [
          {
            "title": "มารยาทและบรรทัดฐานทางสังคม",
            "ids":             [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "การสื่อสารและความเข้าใจ",
            "ids":             [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "ความปลอดภัยและความตระหนักรู้",
            "ids":             [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "ครอบครัวและผู้สูงอายุ",
            "ids":             [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "ช้อปปิ้งและต่อรองราคา",
            "ids":             [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "มีคำแนะนำ {count}",
      "quickPaths": "เส้นทางด่วน",
      "openGuide": "เปิดคู่มือ",
      "featuredEyebrow": "จุดเด่น",
      "readGuide": "อ่านคู่มือ",
      "browseByTopic": "เรียกดูตามหัวข้อ",
      "medicalTopicIntro": "เริ่มต้นด้วยคำถามที่คุณพยายามแก้ไขในตอนนี้ จากนั้นเข้าสู่คำแนะนำโดยละเอียดที่ตรงกับสถานการณ์ของคุณ",
      "lastUpdated": "อัปเดตล่าสุด",
      "noGuides": "ยังไม่มีคำแนะนำในหมวดหมู่นี้"
    },
    "baseHeadSegmentLabels": {
      "category": "หมวดหมู่",
      "guides": "ไกด์",
      "search": "ค้นหา",
      "about": "เกี่ยวกับ"
    }
  },
  "id": {
    "categoryLabels": {
      "prepare": "Persiapan",
      "payment": "Pembayaran",
      "transport": "Transportasi",
      "life": "Kehidupan",
      "medical": "Medis",
      "cities": "Kota",
      "tips": "Tips"
    },
    "layoutCopy": {
      "language": "Bahasa",
      "search": "Cari",
      "about": "Tentang",
      "contact": "Hubungi kami",
      "footerRights": "Semua hak dilindungi undang-undang."
    },
    "guidePageCopy": {
      "lastUpdated": "Terakhir diperbarui",
      "onThisPage": "Di halaman ini",
      "relatedGuides": "Panduan terkait"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "Panduan unggulan",
      "readGuide": "Baca panduan",
      "readGuideLabel": "Baca panduan:"
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "Panduan praktis dan mengutamakan konten bagi orang asing yang baru pertama kali mengunjungi Tiongkok.",
      "heroTitle": "China Starter Guide",
      "heroDescription": "Panduan ini menyajikan informasi yang jelas, praktis, dan terus diperbarui untuk orang asing yang baru pertama kali ke Tiongkok. Mulailah dari hal-hal yang paling penting, lalu lanjutkan ke panduan yang sesuai dengan rencana perjalanan Anda.",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "Persiapkan sebelum kedatangan",
          "description": "Visa, dokumen, dan hal penting sebelum berangkat."
        },
        {
          "path": "/category/payment",
          "title": "Bayar dengan lancar",
          "description": "Kartu, pembayaran digital, dan kapan perlu uang tunai."
        },
        {
          "path": "/category/transport",
          "title": "Berkeliling dengan cepat",
          "description": "Kereta cepat, metro, dan cara bepergian di dalam kota."
        },
        {
          "path": "/category/medical",
          "title": "Pahami layanan medis",
          "description": "Klinik, rumah sakit, keadaan darurat, dan biaya."
        }
      ],
      "sections": {
        "featured": "Mulailah dengan 5 panduan ini",
        "topConcerns": "Kekhawatiran utama",
        "medicalBasics": "Dasar-dasar medis untuk pengunjung pertama kali",
        "medicalIntro": "Gunakan panduan ini jika Anda menginginkan gambaran praktis mengenai klinik, rumah sakit, biaya, dan perawatan darurat sebelum Anda membutuhkannya.",
        "recent": "Baru-baru ini diperbarui",
        "lastUpdated": "Terakhir diperbarui"
      },
      "topConcernIds":       [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds":       [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "Cari | China Starter Guide",
      "metaDescription": "Cari panduan dan jawaban untuk pengunjung pertama kali ke Tiongkok.",
      "title": "Cari",
      "intro": "Cari panduan dan jawaban di China Starter Guide.",
      "label": "Cari panduan",
      "placeholder": "Cari panduan",
      "startTyping": "Mulailah mengetik untuk melihat hasilnya.",
      "noResults": "Tidak ada hasil yang ditemukan. Coba pencarian lain.",
      "resultsLabel": "Hasil {count}",
      "availableAfterBuild": "Pencarian tersedia setelah `npm run build` dan `npm run preview`.",
      "loadingIndex": "Memuat indeks pencarian...",
      "temporarilyUnavailable": "Pencarian untuk sementara tidak tersedia.",
      "searching": "Mencari...",
      "stillLoading": "Pencarian masih dimuat. Coba lagi sebentar lagi."
    },
    "aboutCopy": {
      "metaTitle": "Tentang China Starter Guide",
      "metaDescription": "Siapa yang mengelola situs ini, mengapa situs ini ada, dan penafiannya.",
      "heroTitle": "Tentang China Starter Guide",
      "heroBody": "Ini adalah panduan praktis untuk pengunjung asing yang pertama kali ke Tiongkok. Tujuannya adalah membantu mengurangi ketidakpastian sebelum berangkat dan setelah tiba melalui informasi yang jelas dan bisa langsung digunakan.",
      "heroLinks": "Mulailah dari Persiapan, Pembayaran, dan Transportasi untuk memahami hal-hal paling penting terlebih dahulu.",
      "panels": [
        {
          "title": "Siapa yang mengelola situs ini",
          "body": "Situs ini dikelola oleh kreator asal Tiongkok yang bekerja di industri internet dan menaruh perhatian besar pada produk digital serta pengalaman membaca konten.",
          "items": [
            "Akrab dengan kehidupan sehari-hari dan arus perjalanan di Tiongkok",
            "Berfokus pada pertanyaan nyata yang dihadapi pengunjung pertama kali",
            "Berkomitmen untuk pembaruan berkelanjutan"
          ]
        },
        {
          "title": "Mengapa situs ini ada",
          "body": "Tujuannya adalah untuk menghilangkan ketidakpastian yang paling umum bagi pengunjung pertama kali: persyaratan masuk, pembayaran, konektivitas, transportasi, dan perencanaan kota.",
          "items": [
            "Gratis untuk digunakan",
            "Disusun agar informasi penting mudah ditemukan",
            "Email terbuka untuk umpan balik atau koreksi"
          ]
        },
        {
          "title": "Sumber dan ulasan",
          "body": "Konten dikumpulkan dari sumber publik dan ditinjau secara pribadi oleh pengelola. Kami memperbarui secara berkala, namun tidak dapat menjamin bahwa setiap detail selalu lengkap, akurat, atau terkini."
        }
      ],
      "disclaimerTitle": "Penafian",
      "disclaimer": [
        "Isi situs ini disediakan hanya sebagai informasi umum. Ini bukan nasihat hukum, kebijakan, atau nasihat profesional. Untuk hal penting seperti visa, masuk ke China, transportasi, atau layanan medis, selalu periksa kembali lewat sumber resmi.",
        "Jika ada kerugian atau dampak yang timbul karena kesalahan, kekurangan, atau informasi yang sudah tidak mutakhir, pengelola tidak bertanggung jawab secara hukum maupun non-hukum. Keputusan akhir dan risiko perjalanan tetap menjadi tanggung jawab Anda sendiri.",
        "Jika Anda memiliki masukan, koreksi, atau ide kolaborasi, kirim email ke contact@chinastarterguide.com."
      ],
      "ctaTitle": "Hubungi kami",
      "ctaBody": "Email contact@chinastarterguide.com untuk pertanyaan, masukan, atau kolaborasi.",
      "ctaButton": "Hubungi kami"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "Visa, masuk, keselamatan, dan hal-hal penting sebelum perjalanan untuk membuat Anda siap.",
        "featuredHeading": "Panduan persiapan unggulan",
        "allHeading": "Semua panduan persiapan",
        "topicGroups": [
          {
            "title": "Mulai dari sini",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "Visa dan masuk ke China",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "Durasi tinggal dan aturan imigrasi",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "Keamanan dan kewaspadaan",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "Etika dan komunikasi",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "Bea cukai dan barang bawaan",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "Dompet seluler, kartu, uang tunai, dan pembayaran QR yang benar-benar berfungsi.",
        "featuredHeading": "Panduan pembayaran unggulan",
        "allHeading": "Semua panduan pembayaran",
        "topicGroups": [
          {
            "title": "Mulai dari sini",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "Siapkan Alipay dan WeChat Pay",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "Kartu, tunai, dan cadangan",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "Situasi pembayaran sehari-hari",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "Masalah, penipuan, dan batasan",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "Kereta api, metro, penerbangan, dan transfer bandara dengan langkah yang jelas.",
        "featuredHeading": "Panduan transportasi unggulan",
        "allHeading": "Semua panduan transportasi",
        "topicGroups": [
          {
            "title": "Mulai dari transportasi dalam kota",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "Kereta dan perjalanan antarkota",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "Penerbangan, bandara, dan bagasi",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "Jika ada masalah",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "Keluarga, lansia, dan aksesibilitas",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "Dasar-dasar kehidupan sehari-hari: SIM, hotel, makanan, aplikasi, dan konektivitas.",
        "featuredHeading": "Panduan kehidupan sehari-hari unggulan",
        "allHeading": "Semua panduan kehidupan sehari-hari",
        "topicGroups": [
          {
            "title": "Urus koneksi lebih dulu",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "Hotel dan registrasi menginap",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "Dasar makan dan minum",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "Aplikasi dan komunikasi",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "Kebiasaan harian dan layanan",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "Tinggal lebih lama",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "Bagaimana orang asing dapat menggunakan klinik, rumah sakit, apotek, dan layanan darurat di Tiongkok dengan tingkat stres yang lebih sedikit.",
        "support": "Mulailah dari sini jika Anda menginginkan bantuan yang jelas dan praktis dalam memilih jalur medis yang tepat di Tiongkok sebelum masalah kecil berubah menjadi masalah yang membingungkan.",
        "featuredHeading": "Panduan medis unggulan",
        "allHeading": "Semua panduan medis",
        "quickPaths": [
          {
            "title": "Aku butuh perawatan sekarang",
            "description": "Pilih antara apotek, klinik, rumah sakit, atau perawatan darurat dengan cepat.",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "Aku butuh rumah sakit yang tepat",
            "description": "Putuskan antara rumah sakit umum, klinik swasta, dan departemen internasional.",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "Saya butuh bantuan segera",
            "description": "Gunakan jalur ini ketika gejala semakin parah dan perjalanan tidak bisa menunggu.",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "Mulai di sini",
            "ids":             [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "Janji temu dan akses",
            "ids":             [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "Biaya dan cakupan",
            "ids":             [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "Farmasi dan obat-obatan",
            "ids":             [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "Bantuan mendesak",
            "ids":             [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "Pilih kota, rute, dan musim yang tepat untuk perjalanan pertama.",
        "featuredHeading": "Panduan kota unggulan",
        "allHeading": "Semua panduan kota",
        "topicGroups": [
          {
            "title": "Mulai merencanakan rute",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "Kota klasik untuk perjalanan pertama",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "Kota kuliner dan kota yang hidup",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "Alam dan pemandangan",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "Rute yang disarankan",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "Musim terbaik untuk pergi",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "Tip singkat dan praktis untuk mengurangi gesekan: etika, keselamatan, komunikasi, dan kebiasaan sehari-hari.",
        "featuredHeading": "Tip unggulan",
        "allHeading": "Semua tip",
        "topicGroups": [
          {
            "title": "Etiket dan norma sosial",
            "ids":             [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "Komunikasi dan pengertian",
            "ids":             [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "Keamanan dan kesadaran",
            "ids":             [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "Keluarga dan manula",
            "ids":             [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "Belanja dan tawar-menawar",
            "ids":             [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "Panduan {count} tersedia",
      "quickPaths": "Jalur cepat",
      "openGuide": "Buka panduan",
      "featuredEyebrow": "Unggulan",
      "readGuide": "Baca panduan",
      "browseByTopic": "Jelajahi berdasarkan topik",
      "medicalTopicIntro": "Mulailah dengan pertanyaan yang ingin Anda pecahkan saat ini, lalu lanjutkan ke panduan terperinci yang sesuai dengan situasi Anda.",
      "lastUpdated": "Terakhir diperbarui",
      "noGuides": "Belum ada panduan yang tersedia dalam kategori ini."
    },
    "baseHeadSegmentLabels": {
      "category": "Kategori",
      "guides": "Panduan",
      "search": "Mencari",
      "about": "Tentang"
    }
  },
  "vi": {
    "categoryLabels": {
      "prepare": "Chuẩn bị",
      "payment": "Thanh toán",
      "transport": "Giao thông",
      "life": "Sinh hoạt",
      "medical": "Y tế",
      "cities": "Thành phố",
      "tips": "Mẹo"
    },
    "layoutCopy": {
      "language": "Ngôn ngữ",
      "search": "Tìm kiếm",
      "about": "Về",
      "contact": "Liên hệ với chúng tôi",
      "footerRights": "Mọi quyền được bảo lưu."
    },
    "guidePageCopy": {
      "lastUpdated": "Cập nhật lần cuối",
      "onThisPage": "Trên trang này",
      "relatedGuides": "Hướng dẫn liên quan"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "Hướng dẫn nổi bật",
      "readGuide": "Đọc hướng dẫn",
      "readGuideLabel": "Đọc hướng dẫn:"
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "Hướng dẫn thực tế, có nội dung đầu tiên dành cho người nước ngoài lần đầu đến thăm Trung Quốc.",
      "heroTitle": "China Starter Guide",
      "heroDescription": "Trang này tổng hợp thông tin rõ ràng, thực tế và được cập nhật thường xuyên cho người nước ngoài lần đầu đến Trung Quốc. Hãy bắt đầu từ những việc quan trọng nhất, rồi tiếp tục với các hướng dẫn phù hợp với hành trình của bạn.",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "Chuẩn bị trước khi đến",
          "description": "Thị thực, giấy tờ và những việc cần chuẩn bị trước chuyến đi."
        },
        {
          "path": "/category/payment",
          "title": "Thanh toán suôn sẻ",
          "description": "Thẻ, thanh toán di động và khi nào cần dùng tiền mặt."
        },
        {
          "path": "/category/transport",
          "title": "Di chuyển nhanh chóng",
          "description": "Tàu cao tốc, metro và cách đi lại trong thành phố."
        },
        {
          "path": "/category/medical",
          "title": "Tìm hiểu dịch vụ y tế",
          "description": "Phòng khám, bệnh viện, tình huống khẩn cấp và chi phí."
        }
      ],
      "sections": {
        "featured": "Bắt đầu với 5 hướng dẫn này",
        "topConcerns": "Mối quan tâm hàng đầu",
        "medicalBasics": "Những điều cơ bản về y tế cho người mới đến lần đầu",
        "medicalIntro": "Nếu bạn muốn hiểu trước về phòng khám, bệnh viện, chi phí và cách xử lý tình huống khẩn cấp, hãy bắt đầu với nhóm hướng dẫn này.",
        "recent": "Đã cập nhật gần đây",
        "lastUpdated": "Cập nhật lần cuối"
      },
      "topConcernIds":       [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds":       [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "Tìm kiếm | China Starter Guide",
      "metaDescription": "Tìm kiếm hướng dẫn và giải đáp cho du khách lần đầu tới Trung Quốc.",
      "title": "Tìm kiếm",
      "intro": "Tìm hướng dẫn và câu trả lời trên China Starter Guide.",
      "label": "Tìm kiếm hướng dẫn",
      "placeholder": "Tìm kiếm hướng dẫn",
      "startTyping": "Bắt đầu gõ để xem kết quả.",
      "noResults": "Không tìm thấy kết quả nào. Hãy thử tìm kiếm khác.",
      "resultsLabel": "Kết quả {count}",
      "availableAfterBuild": "Tìm kiếm có sẵn sau `npm run build` và `npm run preview`.",
      "loadingIndex": "Đang tải chỉ mục tìm kiếm...",
      "temporarilyUnavailable": "Tìm kiếm tạm thời không có sẵn.",
      "searching": "Đang tìm kiếm...",
      "stillLoading": "Tìm kiếm vẫn đang tải. Hãy thử lại sau giây lát."
    },
    "aboutCopy": {
      "metaTitle": "Giới thiệu về China Starter Guide",
      "metaDescription": "Ai duy trì trang web này, tại sao nó tồn tại và tuyên bố từ chối trách nhiệm.",
      "heroTitle": "Giới thiệu về China Starter Guide",
      "heroBody": "Đây là cẩm nang thực tế dành cho du khách nước ngoài lần đầu đến Trung Quốc. Mục tiêu là giúp bạn bớt bối rối trước khi khởi hành và sau khi đặt chân tới nơi bằng những thông tin rõ ràng, có thể áp dụng ngay.",
      "heroLinks": "Hãy bắt đầu với các mục Chuẩn bị, Thanh toán và Di chuyển để nắm chắc những điều quan trọng nhất.",
      "panels": [
        {
          "title": "Ai duy trì trang web này",
          "body": "Trang web này do một nhà sáng tạo người Trung Quốc vận hành, người làm việc trong ngành internet và đặc biệt quan tâm tới sản phẩm số cùng trải nghiệm nội dung.",
          "items": [
            "Quen thuộc với cuộc sống hàng ngày và dòng chảy du lịch ở Trung Quốc",
            "Tập trung vào những câu hỏi thực sự mà khách truy cập lần đầu phải đối mặt",
            "Cam kết cập nhật liên tục"
          ]
        },
        {
          "title": "Tại sao trang web này tồn tại",
          "body": "Mục tiêu là loại bỏ những điều không chắc chắn thường gặp nhất đối với những du khách lần đầu đến thăm: yêu cầu đầu vào, thanh toán, kết nối, giao thông và quy hoạch thành phố.",
          "items": [
            "Miễn phí sử dụng",
            "Được tổ chức để bạn dễ tìm thấy thông tin quan trọng",
            "Email được mở để nhận phản hồi hoặc chỉnh sửa"
          ]
        },
        {
          "title": "Nguồn và đánh giá",
          "body": "Nội dung được tổng hợp từ các nguồn công cộng và được người bảo trì xem xét cá nhân. Chúng tôi cập nhật thường xuyên nhưng không thể đảm bảo rằng mọi chi tiết luôn đầy đủ, chính xác hoặc cập nhật."
        }
      ],
      "disclaimerTitle": "Tuyên bố miễn trừ trách nhiệm",
      "disclaimer": [
        "Nội dung trên trang này chỉ nhằm cung cấp thông tin chung, không phải tư vấn pháp lý, chính sách hay chuyên môn. Với những vấn đề quan trọng như thị thực, nhập cảnh, giao thông hoặc y tế, bạn nên kiểm tra lại qua nguồn chính thức.",
        "Nếu có tổn thất hoặc ảnh hưởng phát sinh do sai sót, thiếu thông tin hoặc nội dung đã lỗi thời, người vận hành trang sẽ không chịu trách nhiệm pháp lý hay các trách nhiệm khác. Quyết định cuối cùng và rủi ro trong chuyến đi vẫn thuộc về bạn.",
        "Nếu bạn có phản hồi, chỉnh sửa hoặc ý tưởng hợp tác, hãy gửi email tới contact@chinastarterguide.com."
      ],
      "ctaTitle": "Liên hệ",
      "ctaBody": "Gửi email tới contact@chinastarterguide.com nếu có câu hỏi, phản hồi hoặc cộng tác.",
      "ctaButton": "Liên hệ"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "Những thông tin cần thiết về thị thực, nhập cảnh, an toàn và trước chuyến đi để giúp bạn sẵn sàng.",
        "featuredHeading": "Hướng dẫn chuẩn bị nổi bật",
        "allHeading": "Tất cả hướng dẫn chuẩn bị",
        "topicGroups": [
          {
            "title": "Bắt đầu từ đây",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "Visa và nhập cảnh",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "Thời gian lưu trú và quy định xuất nhập cảnh",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "An toàn và lưu ý thực tế",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "Ứng xử và giao tiếp",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "Hải quan và đồ mang theo",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "Ví di động, thẻ, tiền mặt và thanh toán QR thực sự hoạt động.",
        "featuredHeading": "Hướng dẫn thanh toán nổi bật",
        "allHeading": "Tất cả hướng dẫn thanh toán",
        "topicGroups": [
          {
            "title": "Bắt đầu từ đây",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "Thiết lập Alipay và WeChat Pay",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "Thẻ, tiền mặt và phương án dự phòng",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "Tình huống thanh toán hằng ngày",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "Sự cố, lừa đảo và giới hạn",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "Xe lửa, tàu điện ngầm, chuyến bay và vận chuyển sân bay với các bước rõ ràng.",
        "featuredHeading": "Hướng dẫn di chuyển nổi bật",
        "allHeading": "Tất cả hướng dẫn di chuyển",
        "topicGroups": [
          {
            "title": "Bắt đầu với đi lại trong thành phố",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "Tàu hỏa và di chuyển liên thành phố",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "Chuyến bay, sân bay và hành lý",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "Khi gặp sự cố",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "Gia đình, người lớn tuổi và hỗ trợ tiếp cận",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "Thông tin cơ bản về cuộc sống hàng ngày: SIM, khách sạn, thực phẩm, ứng dụng và kết nối.",
        "featuredHeading": "Hướng dẫn đời sống nổi bật",
        "allHeading": "Tất cả hướng dẫn đời sống",
        "topicGroups": [
          {
            "title": "Lo kết nối trước",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "Khách sạn và đăng ký lưu trú",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "Ăn uống và nước uống cơ bản",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "Ứng dụng và giao tiếp",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "Thói quen hằng ngày và dịch vụ",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "Lưu trú dài ngày",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "Làm thế nào người nước ngoài có thể sử dụng các phòng khám, bệnh viện, hiệu thuốc và dịch vụ chăm sóc cấp cứu ở Trung Quốc mà ít căng thẳng hơn.",
        "support": "Bắt đầu từ đây nếu bạn muốn được trợ giúp rõ ràng, thiết thực để chọn con đường y tế phù hợp ở Trung Quốc trước khi một vấn đề nhỏ trở thành vấn đề khó hiểu.",
        "featuredHeading": "Hướng dẫn y tế nổi bật",
        "allHeading": "Tất cả các hướng dẫn y tế",
        "quickPaths": [
          {
            "title": "Tôi cần được chăm sóc bây giờ",
            "description": "Lựa chọn giữa nhà thuốc, phòng khám, bệnh viện hoặc chăm sóc cấp cứu một cách nhanh chóng.",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "Tôi cần bệnh viện phù hợp",
            "description": "Quyết định giữa các bệnh viện công, phòng khám tư nhân và các khoa quốc tế.",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "Tôi cần trợ giúp khẩn cấp",
            "description": "Hãy sử dụng con đường này khi các triệu chứng ngày càng gia tăng và chuyến đi không thể chờ đợi được.",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "Bắt đầu ở đây",
            "ids":             [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "Cuộc hẹn và quyền truy cập",
            "ids":             [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "Chi phí và phạm vi bảo hiểm",
            "ids":             [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "Dược phẩm và thuốc",
            "ids":             [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "Trợ giúp khẩn cấp",
            "ids":             [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "Chọn đúng thành phố, tuyến đường và mùa cho chuyến đi đầu tiên.",
        "featuredHeading": "Hướng dẫn thành phố nổi bật",
        "allHeading": "Tất cả hướng dẫn thành phố",
        "topicGroups": [
          {
            "title": "Bắt đầu lên hành trình",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "Những thành phố kinh điển cho chuyến đi đầu tiên",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "Thành phố ẩm thực và nhịp sống sôi động",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "Thiên nhiên và phong cảnh",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "Lộ trình gợi ý",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "Mùa nào nên đi",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "Những lời khuyên ngắn gọn, thiết thực giúp giảm bớt xích mích: nghi thức, an toàn, giao tiếp và thói quen hàng ngày.",
        "featuredHeading": "Mẹo nổi bật",
        "allHeading": "Tất cả các mẹo",
        "topicGroups": [
          {
            "title": "Nghi thức và chuẩn mực xã hội",
            "ids":             [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "Giao tiếp và hiểu biết",
            "ids":             [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "An toàn và nhận thức",
            "ids":             [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "Gia đình và người cao tuổi",
            "ids":             [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "Mua sắm và mặc cả",
            "ids":             [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "Có sẵn hướng dẫn {count}",
      "quickPaths": "Đường dẫn nhanh",
      "openGuide": "Mở hướng dẫn",
      "featuredEyebrow": "Nổi bật",
      "readGuide": "Đọc hướng dẫn",
      "browseByTopic": "Duyệt theo chủ đề",
      "medicalTopicIntro": "Bắt đầu với câu hỏi bạn đang cố gắng giải quyết ngay bây giờ, sau đó chuyển sang hướng dẫn chi tiết phù hợp với tình huống của bạn.",
      "lastUpdated": "Cập nhật lần cuối",
      "noGuides": "Chưa có hướng dẫn nào trong danh mục này."
    },
    "baseHeadSegmentLabels": {
      "category": "Loại",
      "guides": "Hướng dẫn",
      "search": "Tìm kiếm",
      "about": "Về"
    }
  },
  "ar": {
    "categoryLabels": {
      "prepare": "التحضير",
      "payment": "الدفع",
      "transport": "النقل",
      "life": "الحياة اليومية",
      "medical": "الرعاية الطبية",
      "cities": "المدن",
      "tips": "نصائح"
    },
    "layoutCopy": {
      "language": "لغة",
      "search": "البحث",
      "about": "عن",
      "contact": "اتصل بنا",
      "footerRights": "جميع الحقوق محفوظة."
    },
    "guidePageCopy": {
      "lastUpdated": "آخر تحديث",
      "onThisPage": "في هذه الصفحة",
      "relatedGuides": "أدلة ذات صلة"
    },
    "featuredEntryPointsCopy": {
      "ariaLabel": "أدلة مميزة",
      "readGuide": "قراءة الدليل",
      "readGuideLabel": "قراءة الدليل:"
    },
    "homeCopy": {
      "metaTitle": "China Starter Guide",
      "metaDescription": "إرشادات عملية ذات محتوى أولي للأجانب الذين يزورون الصين لأول مرة.",
      "heroTitle": "China Starter Guide",
      "heroDescription": "يجمع هذا الدليل معلومات واضحة وعملية ومحدَّثة باستمرار للأجانب الذين يزورون الصين لأول مرة. ابدأ بالأساسيات، ثم انتقل إلى الأدلة التي تناسب خطتك في السفر.",
      "primaryCtas": [
        {
          "path": "/category/prepare",
          "title": "الاستعداد قبل الوصول",
          "description": "التأشيرة والوثائق وما يجب ترتيبه قبل السفر."
        },
        {
          "path": "/category/payment",
          "title": "ادفع بسلاسة",
          "description": "البطاقات والدفع عبر الهاتف ومتى تحتاج إلى النقد."
        },
        {
          "path": "/category/transport",
          "title": "التجول بسرعة",
          "description": "القطارات والمترو وأساسيات التنقل داخل المدن."
        },
        {
          "path": "/category/medical",
          "title": "افهم النظام الطبي",
          "description": "العيادات والمستشفيات والطوارئ والتكاليف."
        }
      ],
      "sections": {
        "featured": "ابدأ بهذه الأدلة الخمسة",
        "topConcerns": "أهم الأسئلة الشائعة",
        "medicalBasics": "الأساسيات الطبية للزائر لأول مرة",
        "medicalIntro": "استخدم هذه الأدلة إذا كنت تريد نظرة عامة عملية على العيادات والمستشفيات والتكاليف والرعاية العاجلة قبل أن تحتاج إليها.",
        "recent": "تم تحديثها مؤخرا",
        "lastUpdated": "آخر تحديث"
      },
      "topConcernIds":       [
        "payment/how-to-pay-in-china",
        "transport/high-speed-rail-basics",
        "prepare/visa-free-explained",
        "medical/see-a-doctor-in-china"
      ],
      "medicalBasicIds":       [
        "medical/see-a-doctor-in-china",
        "medical/public-hospitals-vs-private-clinics",
        "medical/emergency-care-in-china"
      ]
    },
    "searchCopy": {
      "metaTitle": "بحث | China Starter Guide",
      "metaDescription": "أدلة البحث والإجابات لزوار الصين لأول مرة.",
      "title": "البحث",
      "intro": "ابحث في أدلة وإجابات China Starter Guide.",
      "label": "ابحث في الأدلة",
      "placeholder": "ابحث في الأدلة",
      "startTyping": "ابدأ بالكتابة لترى النتائج.",
      "noResults": "لم يتم العثور على نتائج. حاول بحث آخر.",
      "resultsLabel": "نتائج {count}",
      "availableAfterBuild": "البحث متاح بعد `npm run build` و`npm run preview`.",
      "loadingIndex": "جارٍ تحميل فهرس البحث...",
      "temporarilyUnavailable": "البحث غير متاح مؤقتا.",
      "searching": "جارٍ البحث...",
      "stillLoading": "البحث لا يزال قيد التحميل. حاول مرة أخرى بعد قليل."
    },
    "aboutCopy": {
      "metaTitle": "حول China Starter Guide",
      "metaDescription": "من يحافظ على هذا الموقع، وسبب وجوده، وإخلاء المسؤولية.",
      "heroTitle": "حول China Starter Guide",
      "heroBody": "هذا دليل عملي للزوار الأجانب الذين يأتون إلى الصين لأول مرة. هدفه تقليل الحيرة قبل السفر وبعد الوصول من خلال معلومات واضحة ويمكن العمل بها مباشرة.",
      "heroLinks": "ابدأ بأقسام الاستعداد والدفع والتنقل لتغطي الأساسيات أولًا.",
      "panels": [
        {
          "title": "من يحافظ على هذا الموقع",
          "body": "يدير هذا الموقع صانع محتوى صيني يعمل في قطاع الإنترنت ويهتم كثيرًا بالمنتجات الرقمية وتجربة المحتوى.",
          "items": [
            "مطلع على الحياة اليومية وتدفقات السفر في الصين",
            "يركز على الأسئلة الحقيقية التي يواجهها الزوار لأول مرة",
            "ملتزم بالتحديث المستمر"
          ]
        },
        {
          "title": "لماذا يوجد هذا الموقع",
          "body": "الهدف هو إزالة الشكوك الأكثر شيوعًا للزوار لأول مرة: متطلبات الدخول، والمدفوعات، والاتصال، والنقل، وتخطيط المدن.",
          "items": [
            "مجاني للاستخدام",
            "منظم بحيث يسهل العثور على المعلومات المهمة",
            "البريد الإلكتروني مفتوح للملاحظات أو التصحيحات"
          ]
        },
        {
          "title": "المصادر والمراجعة",
          "body": "يتم تجميع المحتوى من مصادر عامة ويتم مراجعته شخصيًا بواسطة المشرف. نقوم بالتحديث بانتظام، ولكن لا يمكننا ضمان أن تكون كل التفاصيل كاملة أو دقيقة أو حديثة دائمًا."
        }
      ],
      "disclaimerTitle": "إخلاء المسؤولية",
      "disclaimer": [
        "محتوى هذا الموقع مخصص للمعلومات العامة فقط، ولا يُعد نصيحة قانونية أو تنظيمية أو مهنية. في الأمور المهمة مثل التأشيرة والدخول إلى الصين والتنقل والرعاية الطبية، احرص دائمًا على التحقق مرة أخرى من المصادر الرسمية.",
        "إذا نتجت أي خسارة أو آثار سلبية عن خطأ أو نقص أو معلومات قديمة، فلن يتحمل المشرف أي مسؤولية قانونية أو غير قانونية. القرار النهائي ومخاطر الرحلة يبقيان على عاتقك أنت.",
        "إذا كانت لديك تعليقات أو تصحيحات أو أفكار للتعاون، أرسل بريدًا إلكترونيًا إلى contact@chinastarterguide.com."
      ],
      "ctaTitle": "تواصل معنا",
      "ctaBody": "أرسل بريدًا إلكترونيًا إلى contact@chinastarterguide.com لطرح الأسئلة أو التعليقات أو التعاون.",
      "ctaButton": "تواصل معنا"
    },
    "categoryPageCopy": {
      "prepare": {
        "intro": "أساسيات التأشيرة والدخول والسلامة وأساسيات ما قبل الرحلة لتجهيزك.",
        "featuredHeading": "أدلة إعداد مميزة",
        "allHeading": "جميع أدلة الاستعداد",
        "topicGroups": [
          {
            "title": "ابدأ من هنا",
            "ids": [
              "first-time-in-china",
              "prepare/is-china-safe",
              "prepare/english-language-expectations",
              "prepare/internet-restrictions-overview"
            ]
          },
          {
            "title": "التأشيرة والدخول",
            "ids": [
              "prepare/visa-free-explained",
              "prepare/visa-needed-checklist",
              "prepare/entry-documents",
              "prepare/return-ticket-proof",
              "prepare/health-declaration"
            ]
          },
          {
            "title": "مدة الإقامة وقواعد الهجرة",
            "ids": [
              "prepare/length-of-stay-and-extension",
              "prepare/overstaying-what-happens"
            ]
          },
          {
            "title": "السلامة والانتباه",
            "ids": [
              "prepare/common-scams",
              "prepare/emergency-contacts",
              "prepare/solo-travel-safety"
            ]
          },
          {
            "title": "الإتيكيت والتواصل",
            "ids": [
              "prepare/basic-etiquette-first-impressions",
              "prepare/cultural-topics-to-avoid"
            ]
          },
          {
            "title": "الجمارك وما يمكن حمله",
            "ids": [
              "prepare/customs-prohibited-items",
              "prepare/medicines-bringing-to-china",
              "prepare/drones-bringing-to-china"
            ]
          }
        ]
      },
      "payment": {
        "intro": "محافظ الهاتف المحمول، والبطاقات، والنقد، ومدفوعات QR التي تعمل بالفعل.",
        "featuredHeading": "أدلة الدفع المميزة",
        "allHeading": "جميع أدلة الدفع",
        "topicGroups": [
          {
            "title": "ابدأ من هنا",
            "ids": [
              "payment/how-to-pay-in-china",
              "payment/alipay-vs-wechat-pay",
              "payment/qr-code-payment-basics"
            ]
          },
          {
            "title": "إعداد Alipay وWeChat Pay",
            "ids": [
              "payment/alipay-for-foreigners",
              "payment/wechat-pay-for-foreigners",
              "payment/link-foreign-card",
              "payment/do-i-need-chinese-bank-account"
            ]
          },
          {
            "title": "البطاقات والنقد والخيارات الاحتياطية",
            "ids": [
              "payment/cash-in-china",
              "payment/withdrawing-cash-at-atm",
              "payment/budgeting-how-much-money-to-bring"
            ]
          },
          {
            "title": "مواقف الدفع اليومية",
            "ids": [
              "payment/paying-for-metro-and-bus",
              "payment/paying-for-taxi-and-didi",
              "payment/splitting-bills",
              "payment/tipping-in-china"
            ]
          },
          {
            "title": "المشكلات والاحتيال والقيود",
            "ids": [
              "payment/payment-failed-what-to-do",
              "payment/common-payment-scams"
            ]
          }
        ]
      },
      "transport": {
        "intro": "القطارات والمترو والرحلات الجوية والنقل من المطار بخطوات واضحة.",
        "featuredHeading": "أدلة النقل المميزة",
        "allHeading": "جميع أدلة النقل",
        "topicGroups": [
          {
            "title": "ابدأ بالتنقل داخل المدينة",
            "ids": [
              "transport/airport-to-city",
              "transport/metro-basics",
              "transport/using-didi",
              "transport/taxis-in-china",
              "transport/navigation-maps-translation"
            ]
          },
          {
            "title": "القطارات والتنقل بين المدن",
            "ids": [
              "transport/high-speed-rail-basics",
              "transport/buying-train-tickets",
              "transport/travel-between-cities",
              "transport/passport-needed-for-travel"
            ]
          },
          {
            "title": "الرحلات الجوية والمطارات والأمتعة",
            "ids": [
              "transport/domestic-flights-basics",
              "transport/station-airport-security-checks",
              "transport/luggage-and-baggage-rules"
            ]
          },
          {
            "title": "عند حدوث مشكلة",
            "ids": [
              "transport/getting-lost-what-to-do",
              "transport/night-travel-safety"
            ]
          },
          {
            "title": "العائلات وكبار السن وإمكانية الوصول",
            "ids": [
              "transport/traveling-with-kids",
              "transport/accessibility-seniors"
            ]
          }
        ]
      },
      "life": {
        "intro": "أساسيات الحياة اليومية: شرائح SIM والفنادق والطعام والتطبيقات والاتصال.",
        "featuredHeading": "أدلة الحياة اليومية المميزة",
        "allHeading": "جميع أدلة الحياة اليومية",
        "topicGroups": [
          {
            "title": "ابدأ بالاتصال أولا",
            "ids": [
              "life/sim-card-vs-esim",
              "life/buying-sim-at-airport",
              "life/phone-compatibility",
              "life/wifi-public-internet",
              "life/vpn-basics-and-cautions",
              "life/email-and-messaging-access"
            ]
          },
          {
            "title": "الفنادق وتسجيل السكن",
            "ids": [
              "life/hotel-checkin-what-to-expect",
              "life/hotel-foreigners-policy",
              "life/police-registration-basics"
            ]
          },
          {
            "title": "أساسيات الطعام والشراب",
            "ids": [
              "life/ordering-food-without-chinese",
              "life/english-menus",
              "life/dietary-restrictions",
              "life/tap-water"
            ]
          },
          {
            "title": "التطبيقات والتواصل",
            "ids": [
              "life/best-apps-for-foreigners",
              "life/translation-apps"
            ]
          },
          {
            "title": "العادات اليومية والخدمات",
            "ids": [
              "life/etiquette-queueing-and-behavior",
              "life/shopping-online-basics"
            ]
          },
          {
            "title": "الإقامة الأطول",
            "ids": [
              "life/renting-apartments-basics"
            ]
          }
        ]
      },
      "medical": {
        "intro": "كيف يمكن للأجانب استخدام العيادات والمستشفيات والصيدليات ورعاية الطوارئ في الصين بضغط أقل.",
        "support": "ابدأ هنا إذا كنت تريد مساعدة واضحة وعملية في اختيار المسار الطبي الصحيح في الصين قبل أن تتحول مشكلة صغيرة إلى مشكلة مربكة.",
        "featuredHeading": "أدلة طبية مميزة",
        "allHeading": "جميع الأدلة الطبية",
        "quickPaths": [
          {
            "title": "أحتاج إلى الرعاية الآن",
            "description": "اختر بين الصيدلية أو العيادة أو المستشفى أو رعاية الطوارئ بسرعة.",
            "id": "medical/see-a-doctor-in-china"
          },
          {
            "title": "أحتاج إلى المستشفى المناسب",
            "description": "اختر بين المستشفيات العامة والعيادات الخاصة والأقسام الدولية.",
            "id": "medical/choosing-a-hospital-in-china"
          },
          {
            "title": "أحتاج إلى مساعدة عاجلة",
            "description": "استخدم هذا المسار عندما تتصاعد الأعراض ولا يمكن للرحلة الانتظار.",
            "id": "medical/emergency-care-in-china"
          }
        ],
        "topicGroups": [
          {
            "title": "ابدأ هنا",
            "ids":             [
              "medical/see-a-doctor-in-china",
              "medical/public-hospitals-vs-private-clinics"
            ]
          },
          {
            "title": "المواعيد والوصول",
            "ids":             [
              "medical/booking-hospital-appointments-in-china",
              "medical/choosing-a-hospital-in-china",
              "medical/international-departments-in-chinese-hospitals"
            ]
          },
          {
            "title": "التكاليف والتغطية",
            "ids":             [
              "medical/medical-costs-in-china",
              "medical/health-insurance-for-foreign-visitors"
            ]
          },
          {
            "title": "الصيدلة والأدوية",
            "ids":             [
              "medical/how-pharmacies-work-in-china",
              "medical/prescription-refills-in-china",
              "medical/bringing-medicines-vs-buying-locally"
            ]
          },
          {
            "title": "مساعدة عاجلة",
            "ids":             [
              "medical/emergency-care-in-china",
              "medical/getting-sick-on-a-short-trip-in-china"
            ]
          }
        ]
      },
      "cities": {
        "intro": "اختر المدن والطرق والمواسم المناسبة لرحلتك الأولى.",
        "featuredHeading": "أدلة المدن المميزة",
        "allHeading": "جميع أدلة المدن",
        "topicGroups": [
          {
            "title": "ابدأ بتخطيط الرحلة",
            "ids": [
              "cities/best-cities-first-time",
              "cities/how-much-time-in-china",
              "cities/how-many-cities-to-visit"
            ]
          },
          {
            "title": "المدن الكلاسيكية لأول زيارة",
            "ids": [
              "cities/beijing-first-timers",
              "cities/shanghai-first-timers",
              "cities/xian-first-timers"
            ]
          },
          {
            "title": "مدن الطعام والحيوية",
            "ids": [
              "cities/chengdu-first-timers",
              "cities/guangzhou-shenzhen-first-timers"
            ]
          },
          {
            "title": "الطبيعة والمناظر",
            "ids": [
              "cities/guilin-overview",
              "cities/yunnan-overview",
              "cities/zhangjiajie-overview",
              "cities/nature-landscapes-overview"
            ]
          },
          {
            "title": "المسارات المقترحة",
            "ids": [
              "cities/suggested-routes-7-days",
              "cities/suggested-routes-14-days"
            ]
          },
          {
            "title": "أفضل المواسم للزيارة",
            "ids": [
              "cities/traveling-in-summer",
              "cities/traveling-in-winter"
            ]
          }
        ]
      },
      "tips": {
        "intro": "نصائح عملية قصيرة تقلل الاحتكاك: الآداب والسلامة والتواصل والعادات اليومية.",
        "featuredHeading": "نصائح مميزة",
        "allHeading": "كل النصائح",
        "topicGroups": [
          {
            "title": "الآداب والأعراف الاجتماعية",
            "ids":             [
              "tips/greetings-and-social-norms",
              "tips/compliments-and-politeness",
              "tips/gestures-to-avoid",
              "tips/public-affection",
              "tips/cultural-do-and-dont"
            ]
          },
          {
            "title": "التواصل والتفاهم",
            "ids":             [
              "tips/handling-misunderstandings",
              "tips/staying-connected-without-english",
              "tips/taking-photos-privacy"
            ]
          },
          {
            "title": "السلامة والوعي",
            "ids":             [
              "tips/dealing-with-crowds",
              "tips/traveling-at-night",
              "tips/safety-with-electronics"
            ]
          },
          {
            "title": "العائلات وكبار السن",
            "ids":             [
              "tips/family-travel-tips",
              "tips/seniors-travel-tips"
            ]
          },
          {
            "title": "التسوق والمساومة",
            "ids":             [
              "tips/bargaining-basics"
            ]
          }
        ]
      }
    },
    "categoryUiCopy": {
      "guidesAvailableTemplate": "تتوفر أدلة {count}",
      "quickPaths": "مسارات سريعة",
      "openGuide": "دليل مفتوح",
      "featuredEyebrow": "مميز",
      "readGuide": "قراءة الدليل",
      "browseByTopic": "تصفح حسب الموضوع",
      "medicalTopicIntro": "ابدأ بالسؤال الذي تحاول حله الآن، ثم انتقل إلى الدليل التفصيلي الذي يناسب موقفك.",
      "lastUpdated": "آخر تحديث",
      "noGuides": "لا توجد أدلة متاحة في هذه الفئة حتى الآن."
    },
    "baseHeadSegmentLabels": {
      "category": "فئة",
      "guides": "أدلة",
      "search": "يبحث",
      "about": "عن"
    }
  }
} as const;

export const getUiLang = (lang?: string | null): UiLang =>
	lang && lang in LOCALIZED_COPY ? (lang as UiLang) : 'en';

export const getCategoryLabel = (category: CategorySlug, lang?: string | null) =>
	LOCALIZED_COPY[getUiLang(lang)].categoryLabels[category];

export const getLayoutCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].layoutCopy;
export const getGuidePageCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].guidePageCopy;
export const getFeaturedEntryPointsCopy = (lang?: string | null) =>
	LOCALIZED_COPY[getUiLang(lang)].featuredEntryPointsCopy;
export const getHomeCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].homeCopy;
export const getSearchCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].searchCopy;
export const getAboutCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].aboutCopy;
export const getCategoryPageCopy = (lang: string | null | undefined, category: CategorySlug) =>
	LOCALIZED_COPY[getUiLang(lang)].categoryPageCopy[category];
export const getCategoryUiCopy = (lang?: string | null) =>
	LOCALIZED_COPY[getUiLang(lang)].categoryUiCopy;
export const getBaseHeadSegmentLabels = (lang?: string | null) =>
	LOCALIZED_COPY[getUiLang(lang)].baseHeadSegmentLabels;
