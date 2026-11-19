import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Himanshu Gunwant",
  title: "Himanshu Gunwant",
  tagline: "Developer · Builder · Student @ IIIT Tiruchirappalli",
  description: "Developer · Builder · Student @ IIIT Tiruchirappalli. Minimalist portfolio and writing by Himanshu Gunwant.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://himanshugunwant.com",
  avatar: "/profile.jpg",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@himanshugunwant.com",
  linksUrl: process.env.NEXT_PUBLIC_LINKS_URL || "https://links.himanshugunwant.com",
  socials: [
    {
      label: "X (formerly Twitter)",
      href: process.env.NEXT_PUBLIC_SOCIAL_X || "https://x.com/himanshugg_",
      icon: "x",
    },
    {
      label: "GitHub",
      href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "https://github.com/himanshu-gunwant",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "https://www.linkedin.com/in/himanshugunwant/",
      icon: "linkedin",
    },
    {
      label: "YouTube",
      href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "https://www.youtube.com/@Himanshu-Gunwant",
      icon: "youtube",
    },
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://www.instagram.com/himanshugunwant_",
      icon: "instagram",
    },
  ],
  about: [
    "Computer Science undergraduate at IIIT Tiruchirappalli, interested in building products, backend systems, and exploring how things work under the hood.",
    "I enjoy solving problems, experimenting with ideas, and building software that's simple, reliable, and useful.",
  ],
  projects: [
    {
      name: "Relay X",
      slug: "relay-x",
      description: "A mobile companion for remote development and AI coding workflows. Real-time telemetry, agent streaming, and remote control.",
      tag: "Flutter · Fastify · WebSockets · TypeScript",
      href: "/projects/relay-x",
      githubUrl: process.env.NEXT_PUBLIC_PROJECT_RELAY_X_URL || "https://github.com/himanshu-gunwant/Relay-X",
      isExternal: false,
    },
    {
      name: "Paste",
      slug: "paste",
      description: "A full-stack paste-sharing platform featuring atomic burn-after-read, revision diffing, developer APIs, and moderation.",
      tag: "Next.js 15 · Express 5 · PostgreSQL · Redis",
      href: "/projects/paste",
      githubUrl: process.env.NEXT_PUBLIC_PROJECT_PASTE_URL || "https://github.com/himanshu-gunwant/Paste",
      liveUrl: process.env.NEXT_PUBLIC_PROJECT_PASTE_LIVE_URL || "https://paste.himanshugunwant.com",
      isExternal: false,
    },
  ],
};
