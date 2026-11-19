import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectList } from "@/components/ProjectList";
import { WritingList } from "@/components/WritingList";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [
      {
        url: `${siteConfig.url.replace(/\/$/, "")}/profile.jpg`,
        width: 1254,
        height: 1254,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteConfig.url.replace(/\/$/, "")}/profile.jpg`],
  },
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const githubLink =
    siteConfig.socials.find((s) => s.icon === "github")?.href || "https://github.com/himanshu-gunwant";
  const siteUrl = siteConfig.url.replace(/\/$/, "");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteUrl,
    image: `${siteUrl}${siteConfig.avatar}`,
    jobTitle: "Developer & Builder",
    description: siteConfig.description,
    alumnusOf: {
      "@type": "EducationalOrganization",
      name: "Indian Institute of Information Technology, Tiruchirappalli",
    },
    sameAs: siteConfig.socials.map((s) => s.href),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}${siteConfig.avatar}`,
      contentUrl: `${siteUrl}${siteConfig.avatar}`,
      caption: siteConfig.name,
    },
    image: `${siteUrl}${siteConfig.avatar}`,
    about: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteUrl,
    description: siteConfig.description,
    image: `${siteUrl}${siteConfig.avatar}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <div className="pt-6 sm:pt-10 space-y-2">
      <JsonLd data={[personJsonLd, webPageJsonLd, websiteJsonLd]} />
      <Hero />

      {/* About */}
      <Section title="About" delayClass="delay-2">
        <div className="space-y-3 text-sm sm:text-base text-muted leading-relaxed">
          {siteConfig.about.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Selected Work */}
      <Section
        id="work"
        title="Selected work"
        action={{
          label: "more on GitHub →",
          href: githubLink,
          isExternal: true,
        }}
        delayClass="delay-3"
      >
        <ProjectList projects={siteConfig.projects} />
      </Section>

      {/* Writing */}
      <Section
        title="Writing"
        action={{
          label: "all posts →",
          href: "/writing",
        }}
        delayClass="delay-4"
      >
        <WritingList posts={posts} />
      </Section>

      {/* Contact / Work with me */}
      <Section title="Contact" delayClass="delay-5">
        <div className="space-y-3 text-sm sm:text-base text-muted leading-relaxed">
          <p>
            Have an interesting project, collaboration, or just want to chat?
            Feel free to reach out directly.
          </p>
          <p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1 font-medium text-foreground hover:text-white transition-colors underline underline-offset-4 decoration-white/25 hover:decoration-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
            >
              {siteConfig.email}
              <span className="text-xs text-muted">↗</span>
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
}
