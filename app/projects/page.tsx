import { Metadata } from "next";
import Link from "next/link";
import { ProjectList } from "@/components/ProjectList";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

const siteUrl = siteConfig.url.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Projects",
  description: "Production software, developer companions, and distributed systems built by Himanshu Gunwant.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects — ${siteConfig.name}`,
    description: "Production software, developer companions, and distributed systems built by Himanshu Gunwant.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects — ${siteConfig.name}`,
    description: "Production software, developer companions, and distributed systems built by Himanshu Gunwant.",
  },
};

export default function ProjectsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Projects — ${siteConfig.name}`,
    description: "Production software, developer companions, and distributed systems built by Himanshu Gunwant.",
    url: `${siteUrl}/projects`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteUrl,
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
    ],
  };

  return (
    <div className="pt-6 sm:pt-10 space-y-8 animate-enter delay-1">
      <JsonLd data={[collectionJsonLd, breadcrumbsJsonLd]} />

      <div className="space-y-3">
        <Link
          href="/"
          className="text-xs text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded inline-flex items-center gap-1"
        >
          Back to home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-muted">
          Software built, deployed, and maintained with an emphasis on performance, reliability, and developer craft.
        </p>
      </div>

      <div className="pt-2 border-t border-white/10">
        <ProjectList projects={siteConfig.projects} />
      </div>
    </div>
  );
}
