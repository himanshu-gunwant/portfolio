export type SocialIconName = "x" | "youtube" | "instagram" | "github" | "linkedin";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface Project {
  name: string;
  description: string;
  tag: string;
  href: string;
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
