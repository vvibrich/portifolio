export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  isPersonal?: boolean;
  status?: string; // e.g., "Pré-release", "Descontinuado", "Interno"
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}