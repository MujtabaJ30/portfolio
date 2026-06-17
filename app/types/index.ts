export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  tagline: string;
  summary: string;
  problem: string;
  approach: string;
  process: string[];
  results: string[];
  tradeoffs: string;
  learning: string;
  stack: string[];
  links: {
    live?: string;
    github?: string;
    drive?: string;
    ppt?: string;
  };
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}
