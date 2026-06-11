export interface Project {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const profile = {
  name: "Mujtaba Jafri",
  title: "Product Manager",
  tagline: "Shipping products that users love and businesses need. Strategy, execution, outcomes.",
  about: "Product manager focused on data-driven product development. I bridge technical execution with business strategy to ship products that deliver measurable outcomes.",
  email: "hello@mujtaba.dev",
};

export const projects: Project[] = [
  {
    title: "Analytics Dashboard Platform",
    role: "Product Manager",
    description: "Led development of a self-serve analytics dashboard serving 200+ B2B clients. Drove from zero-to-one through two major releases.",
    highlights: [
      "Defined product strategy and roadmap, shipping 15+ features across 2 quarters",
      "Conducted 40+ user interviews, increasing NPS from 32 to 68",
      "Drove 40% increase in monthly active users through onboarding improvements",
    ],
    tech: ["Product Strategy", "User Research", "A/B Testing", "SQL", "Mixpanel", "Jira"],
    links: {
      demo: "#",
    },
  },
  {
    title: "Recommendation Engine — Product Lead",
    role: "Product Manager",
    description: "Product-led initiative to build an ML-powered recommendation system. Defined requirements, success metrics, and go-to-market strategy.",
    highlights: [
      "Wrote PRDs and success metrics, achieving 92% coverage against OKRs",
      "Managed cross-functional team of 8 (ML, backend, frontend, design)",
      "Launched MVP in 12 weeks, driving 18% lift in engagement",
    ],
    tech: ["PRD Writing", "Cross-functional Leadership", "Roadmapping", "SQL", "Tableau", "GitHub"],
    links: {
      demo: "#",
    },
  },
];

export const experience: Experience[] = [
  {
    company: "SaaSPlatform Co.",
    role: "Senior Product Manager",
    period: "2024 — Present",
    description: "Owning the analytics product line. Leading strategy, discovery, and delivery for B2B analytics suite.",
  },
  {
    company: "GrowthProducts Inc.",
    role: "Product Manager",
    period: "2022 — 2024",
    description: "Led product discovery and delivery for consumer-facing features. Managed end-to-end product lifecycle from ideation to launch and iteration.",
  },
];

export const skills: Skill[] = [
  {
    category: "Product",
    items: ["Strategy", "Roadmapping", "PRD Writing", "User Stories", "OKR Planning", "GTM Strategy"],
  },
  {
    category: "Analytics",
    items: ["SQL", "Tableau", "Mixpanel", "Amplitude", "A/B Testing", "Cohort Analysis"],
  },
  {
    category: "Execution",
    items: ["Agile/Scrum", "Cross-functional Leadership", "Stakeholder Management", "Jira", "Confluence"],
  },
  {
    category: "Technical",
    items: ["Python", "API Design", "Data Modeling", "System Design", "GitHub"],
  },
];
