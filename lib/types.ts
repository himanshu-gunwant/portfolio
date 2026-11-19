export type SocialIconName = "x" | "youtube" | "instagram" | "github" | "linkedin";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export interface ProjectArchitectureComponent {
  name: string;
  tech: string;
  role: string;
}

export interface ProjectDecision {
  title: string;
  context: string;
  decision: string;
  outcome: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tag: string;
  href: string;
  githubUrl: string;
  liveUrl?: string;
  status: string;
  role: string;
  timeline: string;
  whatItDoes: string[];
  whyIBuiltIt: {
    summary: string;
    points: { title: string; description: string }[];
  };
  problemSolved: {
    summary: string;
    painPoints: { title: string; description: string }[];
  };
  howItWorks: {
    summary: string;
    steps: { number: string; title: string; description: string }[];
  };
  keyFeatures: {
    title: string;
    description: string;
    bullets?: string[];
  }[];
  architecture: {
    summary: string;
    components: ProjectArchitectureComponent[];
  };
  techStack: {
    category: string;
    technologies: { name: string; purpose: string }[];
  }[];
  engineeringDecisions: ProjectDecision[];
  screenshots: ProjectScreenshot[];
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  tag: string;
  href: string;
  githubUrl?: string;
  liveUrl?: string;
  isExternal?: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  avatar: string;
  email: string;
  linksUrl?: string;
  socials: SocialLink[];
  about: string[];
  projects: Project[];
}

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}
