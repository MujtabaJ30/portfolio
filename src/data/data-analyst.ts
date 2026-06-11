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
  title: "Data Analyst",
  tagline: "Turning data into stories that drive decisions. Dashboards, insights, and measurable business impact.",
  about: "Data analyst with expertise in SQL, visualization, and business intelligence. I help teams make faster, better decisions by turning complex data into clear insights.",
  email: "hello@mujtaba.dev",
};

// TODO: Add your projects here
export const projects: Project[] = [
  {
    title: "Sales Performance Dashboard",
    role: "Data Analyst",
    description: "Interactive sales dashboard built for executive team. Consolidated data from 4 sources into a single source of truth.",
    highlights: [
      "Reduced reporting time from 3 days to real-time",
      "Identified $2M in revenue leakage through automated anomaly detection",
      "Adopted by 50+ sales leaders across the organization",
    ],
    tech: ["SQL", "Tableau", "Python", "Snowflake", "dbt"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Customer Segmentation & Retention Analysis",
    role: "Data Analyst",
    description: "Comprehensive customer segmentation analysis driving targeted retention campaigns across 3 customer cohorts.",
    highlights: [
      "Identified 5 distinct customer segments with unique behavioral patterns",
      "Recommended retention strategies that improved LTV by 15%",
      "Built automated weekly reporting pipeline adopted by marketing team",
    ],
    tech: ["SQL", "Python", "Pandas", "Seaborn", "Tableau", "Redshift"],
    links: {
      github: "#",
    },
  },
];

export const experience: Experience[] = [
  {
    company: "AnalyticsFirst Corp.",
    role: "Senior Data Analyst",
    period: "2024 — Present",
    description: "Building dashboards and analytical pipelines for executive decision-making. Leading data quality initiatives and mentoring junior analysts.",
  },
  {
    company: "InsightLab Inc.",
    role: "Data Analyst",
    period: "2022 — 2024",
    description: "Analyzed user behavior, built reports, and delivered actionable insights to product and marketing teams.",
  },
];

export const skills: Skill[] = [
  {
    category: "Analysis & SQL",
    items: ["SQL (Advanced)", "Python", "Pandas", "Excel", "Statistical Analysis"],
  },
  {
    category: "Visualization",
    items: ["Tableau", "Power BI", "Looker", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    category: "Data Engineering",
    items: ["dbt", "Snowflake", "Airflow", "Redshift", "ETL Pipelines"],
  },
  {
    category: "Business",
    items: ["A/B Testing", "Cohort Analysis", "KPI Definition", "Executive Reporting", "Stakeholder Management"],
  },
];
