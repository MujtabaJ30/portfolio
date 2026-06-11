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
  title: "Data Scientist",
  tagline: "Building models that drive decisions. ML pipelines, experimentation, and measurable impact.",
  about: "Data scientist with experience in machine learning pipelines, model evaluation, and production deployment. I build systems that turn raw data into reliable, scalable decisions.",
  email: "hello@mujtaba.dev",
};

export const projects: Project[] = [
  {
    title: "ML Pipeline for Predictive Maintenance",
    role: "Data Scientist",
    description: "End-to-end ML pipeline predicting equipment failure 48 hours in advance. Reduced unplanned downtime by 34% across 12 manufacturing lines.",
    highlights: [
      "Built gradient-boosted ensemble achieving 0.92 ROC-AUC on imbalanced sensor data",
      "Designed feature engineering pipeline processing 200+ sensor signals in real-time",
      "Deployed via FastAPI with Docker, serving 5K+ predictions daily with <50ms latency",
    ],
    tech: ["Python", "scikit-learn", "XGBoost", "FastAPI", "Docker", "PostgreSQL", "Apache Kafka"],
    links: {
      github: "#",
    },
  },
  {
    title: "Customer Churn Prediction & Intervention Engine",
    role: "Data Scientist",
    description: "ML-driven churn prediction system with automated intervention triggers. Identified at-risk users 3 weeks before churn with 87% precision.",
    highlights: [
      "Developed LSTM-based sequence model on 18 months of user behavior data",
      "Created SHAP-based explainability layer for stakeholder trust",
      "A/B test showed 22% reduction in churn for intervened cohort",
    ],
    tech: ["Python", "TensorFlow", "Pandas", "Plotly", "FastAPI", "Redshift"],
    links: {
      github: "#",
    },
  },
];

export const experience: Experience[] = [
  {
    company: "TechCorp Analytics",
    role: "Senior Data Scientist",
    period: "2024 — Present",
    description: "Leading ML model development for predictive analytics team. Building production pipelines and mentoring junior data scientists.",
  },
  {
    company: "DataDriven Inc.",
    role: "Data Scientist",
    period: "2022 — 2024",
    description: "Developed ML models for customer analytics, churn prediction, and recommendation systems. Owned end-to-end model lifecycle from experimentation to deployment.",
  },
];

export const skills: Skill[] = [
  {
    category: "ML & Modeling",
    items: ["scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "LightGBM", "CatBoost"],
  },
  {
    category: "Data Engineering",
    items: ["Python", "SQL", "Pandas", "Spark", "Apache Kafka", "Airflow"],
  },
  {
    category: "Deployment & MLOps",
    items: ["FastAPI", "Docker", "Kubernetes", "MLflow", "GitHub Actions", "AWS SageMaker"],
  },
  {
    category: "Stats & Experimentation",
    items: ["A/B Testing", "Hypothesis Testing", "Bayesian Methods", "Time Series", "Causal Inference"],
  },
];
