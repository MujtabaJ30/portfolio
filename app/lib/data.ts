import { Project, SkillGroup } from "@/app/types";

export const heroContent = {
  name: "Mujtaba Jafri",
  role: "Product Manager",
  philosophy:
    "I care about what people actually do, not what they should do. That shapes every product decision: when to add friction, when to remove it, and when the best feature is the one you never build. I ship fast enough to find out if I was wrong.",
  cta: "View My Work",
};

export const projects: Project[] = [
  {
    id: "dealflow",
    title: "DealFlow",
    subtitle: "Creator Monetization Workflow",
    role: "Solo product design & strategy",
    tagline: "",
    summary:
      "A product concept for Indian micro-creators who attract brand interest but still manage paid collaborations across DMs, spreadsheets, UPI, and screenshots. DealFlow turns that scattered workflow into a single loop: inquiry to deal to payment to report.",
    problem:
      "Micro-creators with 10k-50k followers close brand deals manually. A 16.5k-follower food creator gets 1-3 inquiries a month and manages each one through Instagram DMs, WhatsApp, Notes, and UPI screenshots. There is no system of record for the business side of influence. Deals slip through, payments get delayed, and follow-ups happen in memory.",
    approach:
      "Start with the narrowest painful wedge: the workflow between brand interest and realized income. Map the real steps a creator takes, not the steps a tool thinks they should take. Build around that. The real competitor is not another SaaS tool. It is WhatsApp plus UPI plus spreadsheets.",
    process: [
      "Conducted competitive analysis across 7 alternatives and found no creator-side brand deal management tool exists",
      "Identified workflow fragmentation as the core pain, not audience growth or content creation",
      "Built 2 data-backed personas (Priya at 16.5k followers, Arjun at 42k+18k) grounded in Indian creator economy data",
      "Scoped MVP to deal tracking, payment follow-up, reporting, and earnings visibility",
      "Designed mobile-first wireframes and built a clickable prototype",
      "Defined success metrics: North Star is deal value processed per creator per month",
    ],
    results: [
      "Clickable mobile-first prototype with 4 core screens: Home, Deals, Payments, Reports",
      "Full product spec with personas, MVP scope, GTM strategy, risk analysis, and monetization model",
      "Identified that the real adoption barrier is inertia, not feature gaps",
    ],
    tradeoffs:
      "Scoped to monetization operations only, not growth or analytics. Accepted that desktop-first wireframes might not match mobile-first creator behavior, but chose depth of workflow visibility over platform nativeness.",
    learning:
      "The hardest part of this project was resisting the urge to solve everything. The creator economy has dozens of problems. Choosing one sharp wedge and defending it against scope creep was the real product work.",
    stack: ["Product Strategy", "User Research", "Wireframing", "Prototyping"],
    links: {
      live: "https://dealflow-lovat.vercel.app",
      github: "https://github.com/MujtabaJ30",
      pdf: "/case-studies/dealflow.pdf",
    },
    thumbnail: "/images/dealflow/thumbnail.png",
    images: [
      {
        src: "/images/dealflow/thumbnail.png",
        alt: "DealFlow product overview",
        caption: "DealFlow: inquiry to deal to payment to report",
      },
      {
        src: "/images/dealflow/home.png",
        alt: "DealFlow home dashboard",
        caption: "Home: what needs attention right now",
      },
      {
        src: "/images/dealflow/deals.png",
        alt: "DealFlow deals view",
        caption: "Deals: track every collaboration",
      },
      {
        src: "/images/dealflow/payments.png",
        alt: "DealFlow payments view",
        caption: "Payments: follow up without the awkwardness",
      },
      {
        src: "/images/dealflow/reports.png",
        alt: "DealFlow reports view",
        caption: "Reports: close the loop with brands",
      },
    ],
  },
  {
    id: "whatsapp-dpdp",
    title: "WhatsApp DPDP",
    subtitle: "Privacy & Consent Redesign",
    role: "Solo product case study",
    tagline: "",
    summary:
      "A product case study on redesigning WhatsApp's consent architecture for India's DPDP Act. The core decision: do not treat all data uses the same. Split them by purpose, ask at the right moment, and give users one place to see and change everything.",
    problem:
      "WhatsApp is no longer just a messaging utility. It has contact sync, cloud backup, business messaging, discovery, and monetization layers. Each of these creates a different data-use relationship with the user. But the current consent model treats them all the same: either everything is asked upfront in onboarding, or everything is buried in settings. Both approaches fail. Users technically accept prompts without understanding them, or never find the settings at all.",
    approach:
      "Split data use into 4 purpose-based buckets: essential service, user-benefit, business-benefit, and data rights. Each bucket gets its own consent rule, timing, and reversibility. Essential uses get explained honestly at signup. Optional user-benefit features get asked just-in-time. Business-benefit uses carry a higher consent bar. And a Privacy Control Center lets users see and change everything in one place.",
    process: [
      "Mapped WhatsApp's expansion from pure messaging into business, discovery, backup, and identity layers",
      "Identified that the real problem is not missing settings but missing purpose boundaries",
      "Designed a 4-bucket data-use architecture with different consent rules per bucket",
      "Built 7 screen states in a clickable mobile prototype: essential notice, contact sync, backup, location, privacy center, data request status",
      "Defined a metrics framework with Consent Quality Rate as North Star, not raw acceptance",
      "Wrote a rollout plan: internal dogfood, 1% India cohort, expand by use case, then platform",
    ],
    results: [
      "Working clickable prototype deployed on Vercel with 7 screens and URL-persisted state",
      "Case study PDF covering problem framing, solution architecture, metrics, trade-offs, and rollout",
      "Presentation deck with the full product narrative",
    ],
    tradeoffs:
      "Better explanations may lower some optional-consent acceptance rates. That is not automatically failure. It may indicate better comprehension and healthier long-term trust. Also accepted that engineering complexity increases because permissions must be tracked by purpose, not as a loose settings bundle.",
    learning:
      "The hardest call was how to handle backup. It is optional from a feature perspective, but strategically important because it protects conversation continuity. Burying it in settings risks user regret. Forcing it at signup feels dishonest. Proactively recommending it after meaningful usage was the right middle ground.",
    stack: ["Product Strategy", "Consent Architecture", "Wireframing", "Prototyping"],
    links: {
      live: "https://whatsapp-dpdp.vercel.app/",
      github: "https://github.com/MujtabaJ30/whatsapp-dpdp",
      pdf: "/case-studies/whatsapp-dpdp.pdf",
    },
    thumbnail: "/images/whatsapp-dpdp/thumbnail.png",
    images: [
      {
        src: "/images/whatsapp-dpdp/thumbnail.png",
        alt: "WhatsApp DPDP consent redesign",
        caption: "Purpose-based consent architecture for WhatsApp India",
      },
      {
        src: "/images/whatsapp-dpdp/essential-notice.png",
        alt: "Essential data use notice at signup",
        caption: "Layer 1: honest essential-use notice at signup",
      },
      {
        src: "/images/whatsapp-dpdp/contact-consent.png",
        alt: "Contact sync consent prompt",
        caption: "Layer 2: just-in-time consent when user taps find contacts",
      },
      {
        src: "/images/whatsapp-dpdp/backup-consent.png",
        alt: "Backup consent prompt",
        caption: "Backup: proactively recommended after meaningful usage",
      },
      {
        src: "/images/whatsapp-dpdp/location-consent.png",
        alt: "Location permission consent",
        caption: "Location: purpose-specific consent for discovery features",
      },
      {
        src: "/images/whatsapp-dpdp/privacy-center.png",
        alt: "Privacy Control Center",
        caption: "Layer 3: one screen to see and change all privacy choices",
      },
      {
        src: "/images/whatsapp-dpdp/data-request.png",
        alt: "Data request status page",
        caption: "Data request tracking with SLA visibility",
      },
    ],
  },
  {
    id: "x-split",
    title: "X-Split",
    subtitle: "Browser Extension for X/Twitter",
    role: "Solo product & engineering",
    tagline: "",
    summary:
      "A Firefox and Chrome extension that auto-splits long X posts into 280-character threads. Free, no signup, no API. Sits inside the compose box and does one thing well.",
    problem:
      "Free-tier X users are limited to 280 characters. Posting long-form content means manually counting characters, cutting at awkward points, adding thread numbers, and pasting each chunk back. It takes 5-15 minutes per thread and produces ugly cut-off posts.",
    approach:
      "Build the simplest thing that works. No API, no backend, no framework. Inject into X's compose box, detect when text exceeds 280 characters, split at sentence boundaries, number the chunks, and let the user copy each one. The entire product is client-side JavaScript.",
    process: [
      "Analyzed existing tools (Chirr App, Typefully, Hypefury) and found they all require leaving X to compose",
      "Designed auto-split on input so the sidebar appears the moment text exceeds 280 characters",
      "Built sentence-boundary splitting with URL-aware counting (URLs count as 23 chars per X's t.co spec)",
      "Shipped as Firefox Manifest V3 extension, then ported to Chrome",
      "Decided against auto-posting to avoid API costs, rate limits, and permission scope creep",
      "Defined success metrics: 500 installs in 30 days, 40% weekly active, 25% 7-day retention",
    ],
    results: [
      "Live on Chrome Web Store with real users",
      "Zero-friction install: no accounts, no config, no setup screens",
      "All text processing happens client-side. No data leaves the browser.",
    ],
    tradeoffs:
      "No API means users must manually copy and paste each chunk. This is intentional. Auto-posting would require X API access ($100/month), add backend infrastructure, and trigger rate limits. The extra clicks per thread are the price of zero cost and zero backend.",
    learning:
      "Doing one thing well is harder than it sounds. Every feature request (auto-post, templates, scheduling) pulls away from the core value: split text inside X's compose box with zero friction. The discipline was in saying no to all of it.",
    stack: ["Vanilla JS", "Firefox MV3", "Chrome MV3", "DOM Manipulation"],
    links: {
      live: "https://chromewebstore.google.com/detail/x-split/lbndjlemalkbppikmgkiihkjhplapndd",
      liveLabel: "Webstore Link",
      github: "https://github.com/MujtabaJ30/x-split",
      pdf: "/case-studies/x-split.pdf",
    },
    thumbnail: "/images/x-split/hero.png",
    images: [
      {
        src: "/images/x-split/hero.png",
        alt: "X-Split sidebar on x.com",
        caption: "Auto-split sidebar inside X's compose box",
      },
      {
        src: "/images/x-split/icons.png",
        alt: "X-Split extension icons",
        caption: "Extension icons across sizes",
      },
      {
        src: "/images/x-split/extensions-tab.png",
        alt: "X-Split in browser extensions tab",
        caption: "Installed in Chrome extensions",
      },
    ],
  },
  {
    id: "invoice-exception-handler",
    title: "AI Invoice Exception Handler",
    subtitle: "AI Workflow for AP Teams",
    role: "Solo product & engineering",
    tagline: "",
    summary:
      "An MVP that resolves invoice exceptions with deterministic detection, LLM-generated fix proposals, human review, and a learning loop. The AI proposes. The human decides. Every approval makes the next similar exception faster.",
    problem:
      "AP teams spend 40% of their time on exceptions. An invoice with a missing PO, a duplicate entry, an amount that does not match. Most tools flag the problem and stop. A person opens the ERP, finds the context, figures out the fix, and enters it. No learning. The same exceptions reappear and the same person does the same work.",
    approach:
      "Draw a clear line: deterministic rules decide what is wrong, an LLM proposes how to fix it, a human decides whether to approve. Then save approved fixes so the same pattern resolves automatically next time. The learning loop is the product. Each approval makes the engine faster and cheaper.",
    process: [
      "Built a deterministic detection engine covering 7 exception types: missing PO, duplicate, amount mismatch, tax error, unknown vendor, future date, negative amount",
      "Integrated DeepSeek LLM for fix proposal generation with Zod-validated structured output",
      "Designed human-in-the-loop review: approve, skip, or write a custom fix",
      "Built a Postgres-backed learning loop that saves approved fixes and applies them to future exceptions",
      "Added fallback proposals when the LLM API is down so the product stays usable",
      "Created an impact dashboard showing touchless rate, cost per invoice, and rules learned",
    ],
    results: [
      "Live MVP on Vercel with working LLM integration, database, and learning loop",
      "Deterministic detection with zero false positives on the 7 rule types",
      "Every action logged with timestamps for audit trail",
    ],
    tradeoffs:
      "Scoped to JSON invoice ingestion for the MVP. Real invoices are PDFs and scans, but OCR adds complexity that would slow down proving the core concept. Also chose serverless functions over a persistent backend to keep hosting simple and cheap.",
    learning:
      "The most important decision was keeping detection deterministic. If the AI decides what is wrong, you cannot audit it reliably. Rules catch the issue. AI proposes the fix. Human decides. That order matters for finance products.",
    stack: ["React 19", "TypeScript", "Vite", "DeepSeek", "Postgres", "Zod"],
    links: {
      live: "https://invoice-exception-handler.vercel.app/",
      github: "https://github.com/MujtabaJ30/Invoice-exception-handler",
    },
    thumbnail: "/images/invoice-handler/queue.png",
    images: [
      {
        src: "/images/invoice-handler/queue.png",
        alt: "Exception queue and invoice detail",
        caption: "Queue: invoices with detected exceptions, one workspace",
      },
      {
        src: "/images/invoice-handler/proposal.png",
        alt: "Fix proposal generation",
        caption: "LLM generates structured fix proposals with confidence scores",
      },
      {
        src: "/images/invoice-handler/decisions.png",
        alt: "Decisions and audit trail",
        caption: "Every action logged for auditability",
      },
      {
        src: "/images/invoice-handler/impact.png",
        alt: "Impact dashboard",
        caption: "Impact: touchless rate, cost per invoice, rules learned",
      },
      {
        src: "/images/invoice-handler/demo.png",
        alt: "Demo walkthrough",
        caption: "Built-in demo path for reviewers and recruiters",
      },
    ],
  },
  {
    id: "rapido-teardown",
    title: "Ownly by Rapido",
    subtitle: "Product Teardown & PRD",
    role: "Solo product teardown & analysis",
    tagline: "",
    summary:
      "End-to-end teardown of Rapido's grocery delivery app, Ownly. Identified conversion friction points across the user journey and designed a prioritized SSO onboarding fix.",
    problem:
      "New users were dropping off before their first order due to onboarding friction, GPS permission dead-ends, and unclear value delivery in the discovery phase.",
    approach:
      "Map the full journey from discovery to post-delivery, score every friction point with an ICE framework, then focus on the highest-leverage fix rather than redesigning the entire app.",
    process: [
      "Mapped a 7-touchpoint user journey and identified 6 conversion friction points",
      "Prioritized opportunities using ICE scoring; SSO onboarding surfaced as highest-leverage fix (ICE: 8.0/10)",
      "Authored a full PRD with user stories, acceptance criteria, and success metrics",
      "Designed low-fidelity wireframes for an 'Explore First, Geofence Later' flow",
      "Built an A/B test plan with hypothesis, control/treatment split, and sample size",
    ],
    results: [
      "Prioritized SSO onboarding as the single highest-impact fix",
      "Produced a complete PRD, wireframes, and A/B test plan ready for handoff",
      "Scoped the fix to minimize engineering risk while unlocking new-user activation",
    ],
    tradeoffs:
      "Deprioritized geofence-based discovery (too high-risk for V1) and a full app redesign. Focused on SSO as the highest-leverage fix per ICE scoring.",
    learning:
      "One well-executed fix beats ten half-baked ideas. The ICE matrix forced clarity on what actually moves the needle vs. what is just noisy.",
    stack: ["PRD Writing", "ICE Prioritization", "Wireframing", "A/B Testing"],
    links: {
      drive:
        "https://drive.google.com/drive/folders/1f7JIWPRwlcHTbto9-NhSCaKxKleOFj6i?usp=sharing",
      ppt: "https://www.canva.com/design/DAHKXfy2rWw/NHKgxWKUjf7XnSX9cWQUsA/view",
    },
    thumbnail: "/images/ownly/Ownly Thumbnail.png",
    images: [
      {
        src: "/images/ownly/SSO sign in with rapido.png",
        alt: "SSO sign-in option in Ownly",
        caption: "SSO sign-in as highest-leverage fix",
      },
      {
        src: "/images/ownly/Rapido Login Wireframe.png",
        alt: "Login wireframe",
        caption: "Wireframe: login flow",
      },
      {
        src: "/images/ownly/Dark Mode in Settings Page wireframe.png",
        alt: "Settings wireframe",
        caption: "Wireframe: settings page",
      },
      {
        src: "/images/ownly/Sort by no of reviews not present.png",
        alt: "Sort issue screenshot",
        caption: "Friction: sorting by reviews missing",
      },
      {
        src: "/images/ownly/veg mode on but chicken visibe.png",
        alt: "Veg mode bug",
        caption: "Friction: veg mode filter bug",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Product",
    icon: "Compass",
    skills: [
      "User Research",
      "PRD",
      "User Stories",
      "Wireframing",
      "Prioritization",
      "A/B Testing",
    ],
  },
  {
    category: "Technical",
    icon: "Code",
    skills: ["SQL", "Python"],
  },
  {
    category: "AI & ML",
    icon: "Brain",
    skills: ["LLM Integration", "AI Evaluation Metrics", "RAG"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: ["Figma", "Excel", "Mixpanel"],
  },
];

export const contactLinks = {
  email: "jafri.h@ahduni.edu.in",
  linkedin: "https://linkedin.com/in/mujtaba30/",
  github: "https://github.com/MujtabaJ30",
};
