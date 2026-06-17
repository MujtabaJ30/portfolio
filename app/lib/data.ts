import { Project, SkillGroup } from "@/app/types";

export const heroContent = {
  name: "Mujtaba Jafri",
  role: "Product Manager",
  philosophy:
    "I build products by starting with the real world, not the ideal one. I talk to users, dig into data, write clear specs, and ship fast enough to learn before I over-invest. My recent work includes an AI tool that writes PRDs from a problem statement, a teardown of Rapido's grocery app Ownly, and a SQL analysis of 100,000 e-commerce orders. I am looking for PM roles where I can turn ambiguity into something people actually use.",
  cta: "View My Work",
};

export const projects: Project[] = [
  {
    id: "ai-prd-generator",
    title: "AI PRD Generator",
    subtitle: "Full-Stack AI Product Tool",
    role: "Solo product & engineering (end-to-end)",
    tagline: "I build",
    summary:
      "A live AI tool that converts a problem statement into a structured, interview-ready Product Requirements Document in under 20 seconds.",
    problem:
      "Product managers spend 2-3 hours drafting PRDs for every feature. Most of that time is repetitive boilerplate: user stories, acceptance criteria, success metrics, and edge cases.",
    approach:
      "Treat the prompt as the core feature. Force a strict JSON schema so outputs are structured and validatable, then add an auto-retry layer to catch malformed responses before they reach the user.",
    process: [
      "Built a split-screen UX in Next.js with streaming generation, version history, and live editing",
      "Engineered a strict JSON prompt schema plus output validation for missing sections and non-quantitative metrics",
      "Added auto-retry logic (up to 2 retries) when the LLM returns malformed JSON",
      "Evaluated output quality with LLM-as-judge across 10 synthetic problem statements",
    ],
    results: [
      "Shipped a live app on Vercel generating PRDs in <20 seconds",
      "Achieved 4.83/5.0 average score across 7 PRD dimensions",
      "Reduced hallucination via validation layer without adding a database",
    ],
    tradeoffs:
      "No database for v1 to keep hosting free and stateless; JSON over Markdown for validation; switched from Gemini to DeepSeek for reliability.",
    learning:
      "Prompt quality matters more than model choice. The strict JSON schema + retry logic mattered more than the LLM itself. Next time I'd invest more in input validation earlier.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "DeepSeek V4 Flash"],
    links: {
      live: "https://mujtaba-prd.vercel.app/",
      github: "https://github.com/MujtabaJ30/PRD-Generator",
    },
    thumbnail: "/images/prd/Final PRD Result.png",
    images: [
      {
        src: "/images/prd/Final PRD Result.png",
        alt: "PRD Generator final output",
        caption: "Final structured PRD output",
      },
      {
        src: "/images/prd/Initial Input.png",
        alt: "PRD Generator input screen",
        caption: "Input: problem statement + context",
      },
      {
        src: "/images/prd/PRD Generating screen.png",
        alt: "PRD Generator streaming output",
        caption: "Streaming generation with progress",
      },
    ],
  },
  {
    id: "rapido-teardown",
    title: "Ownly by Rapido",
    subtitle: "Product Teardown & PRD",
    role: "Solo product teardown & analysis",
    tagline: "I analyze",
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
      "One well-executed fix beats ten half-baked ideas. The ICE matrix forced clarity on what actually moves the needle vs. what's just noisy.",
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
  {
    id: "olist-sql-analytics",
    title: "Olist E-Commerce Analytics",
    subtitle: "SQL Product Analytics & Dashboard",
    role: "Solo data analysis & dashboard",
    tagline: "I work with data",
    summary:
      "10 SQL queries analyzing 100K Brazilian e-commerce orders, surfaced in an interactive Streamlit dashboard with RFM segmentation, delivery insights, and revenue trends.",
    problem:
      "Marketplace operators needed to understand where revenue comes from, why reviews drop, and which customers are at risk — all buried across 9 relational tables.",
    approach:
      "Translate business questions into focused SQL queries, then package the findings into a filterable dashboard that tells a product story rather than just showing numbers.",
    process: [
      "Analyzed 100K orders across 9 tables using CTEs, window functions, and JOINs",
      "Built RFM segmentation to identify that 25% of customers drive 48% of revenue",
      "Quantified that late deliveries drop review scores by 1.72 points (4.29 → 2.57)",
      "Packaged 10 product-focused queries into a 4-tab Streamlit dashboard",
    ],
    results: [
      "Flagged ~$1.5M in recoverable value from at-risk customers",
      "Delivered 10 product-focused SQL queries with actionable recommendations",
      "Deployed an interactive dashboard on Streamlit Cloud",
    ],
    tradeoffs:
      "Scoped out real-time data (used static SQLite), exhaustive querying (focused on 10 highest-impact questions), and a custom backend (chose Streamlit for speed).",
    learning:
      "Late delivery isn't a logistics metric — it's a retention metric. The 1.72 star penalty showed me that operational data often hides product insight.",
    stack: ["SQL", "Python", "Streamlit", "Pandas"],
    links: {
      live:
        "https://sql-appuct-analytics-3uobdqo7wkjvr2ctgatihf.streamlit.app/",
      github: "https://github.com/MujtabaJ30/SQL-Product-Analytics",
    },
    thumbnail: "/images/olist/Overall KPI dashboard 1st page.png",
    images: [
      {
        src: "/images/olist/Overall KPI dashboard 1st page.png",
        alt: "Olist KPI dashboard",
        caption: "Executive KPI overview",
      },
      {
        src: "/images/olist/Revenue dashboard.png",
        alt: "Revenue dashboard",
        caption: "Revenue trends",
      },
      {
        src: "/images/olist/Customers dashboard.png",
        alt: "Customers dashboard",
        caption: "Customer segmentation",
      },
      {
        src: "/images/olist/Delivery dashboard.png",
        alt: "Delivery dashboard",
        caption: "Delivery performance",
      },
      {
        src: "/images/olist/Payments Dashboard.png",
        alt: "Payments dashboard",
        caption: "Payment behavior",
      },
      {
        src: "/images/olist/Order by states.png",
        alt: "Orders by state",
        caption: "Geographic distribution",
      },
      {
        src: "/images/olist/Installment Usage pattern.png",
        alt: "Installment patterns",
        caption: "Installment usage",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Product",
    icon: "Compass",
    skills: [
      "Strategy",
      "PRD Writing",
      "User Stories",
      "Wireframing",
      "Funnel & Retention Analysis",
      "ICE Prioritization",
      "A/B Testing",
      "KPI Tracking",
      "Product Analytics (AARRR)",
    ],
  },
  {
    category: "Technical",
    icon: "Code",
    skills: [
      "SQL",
      "Python",
      "TypeScript",
      "Next.js",
      "APIs",
      "Full-Stack Prototyping",
      "Data Analysis",
    ],
  },
  {
    category: "AI",
    icon: "Brain",
    skills: [
      "LLMs",
      "Agentic Workflow",
      "AI-Assisted Prototyping",
      "RAG Fundamentals",
    ],
  },
];

export const contactLinks = {
  email: "jafri.h@ahduni.edu.in",
  linkedin: "https://linkedin.com/in/mujtaba30/",
  github: "https://github.com/MujtabaJ30",
};
