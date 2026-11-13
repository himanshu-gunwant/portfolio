import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Himanshu Gunwant",
  title: "Himanshu Gunwant — Developer & Builder",
  tagline: "Developer · Builder · Student @ IIIT Tiruchirappalli",
  description: "Developer · Builder · Student @ IIIT Tiruchirappalli. Minimalist portfolio and writing by Himanshu Gunwant.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://himanshugunwant.com",
  avatar: "/pfp_himanshu.png",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@himanshugunwant.com",
  socials: [
    {
      label: "X (formerly Twitter)",
      href: process.env.NEXT_PUBLIC_SOCIAL_X || "https://x.com/himanshu",
      icon: "x",
    },
    {
      label: "GitHub",
      href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "https://github.com/Himanshu-Gunwant",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "https://linkedin.com/in/himanshu",
      icon: "linkedin",
    },
    {
      label: "YouTube",
      href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "https://youtube.com/@himanshu",
      icon: "youtube",
    },
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://instagram.com/himanshu",
      icon: "instagram",
    },
  ],
  about: [
    "Computer Science undergraduate at IIIT Tiruchirappalli, interested in building products, backend systems, and exploring how things work under the hood.",
    "I enjoy solving problems, experimenting with ideas, and building software that's simple, reliable, and useful.",
  ],
  projects: [
    {
      name: "Antigravity Companion",
      description: "Cross-platform mobile workspace client and relay server for real-time synchronization and conversation management.",
      tag: "mobile · Flutter · Node.js",
      href: process.env.NEXT_PUBLIC_PROJECT_ANTIGRAVITY_COMPANION_URL || "https://github.com/Himanshu-Gunwant/Antigravity-Companion",
      isExternal: true,
    },
    {
      name: "Paste",
      description: "Production-grade Pastebin platform backend featuring atomic burn-after-read, revision diffing, and OAuth authentication.",
      tag: "backend · TypeScript · PostgreSQL",
      href: process.env.NEXT_PUBLIC_PROJECT_PASTE_URL || "https://github.com/Himanshu-Gunwant/Paste",
      isExternal: true,
    },
  ],
};
