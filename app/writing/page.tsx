import { Metadata } from "next";
import Link from "next/link";
import { WritingList } from "@/components/WritingList";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";
import { getAllPosts, parsePostDate } from "@/lib/mdx";

const siteUrl = siteConfig.url.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on software craft, architecture, and quiet computing.",
  alternates: {
    canonical: "/writing",
  },
  openGraph: {
    title: `Writing — ${siteConfig.name}`,
    description: "Thoughts on software craft, architecture, and quiet computing.",
    url: `${siteUrl}/writing`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Writing — ${siteConfig.name}`,
    description: "Thoughts on software craft, architecture, and quiet computing.",
  },
};

export default function WritingPage() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Writing — ${siteConfig.name}`,
    description: "Thoughts on software craft, architecture, and quiet computing.",
    url: `${siteUrl}/writing`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteUrl,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${siteUrl}/writing/${post.slug}`,
      datePublished: parsePostDate(post.date).toISOString(),
    })),
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
        name: "Writing",
        item: `${siteUrl}/writing`,
      },
    ],
  };

  return (
    <div className="pt-6 sm:pt-10 space-y-8 animate-enter delay-1">
      <JsonLd data={[blogJsonLd, breadcrumbsJsonLd]} />

      <div className="space-y-3">
        <Link
          href="/"
          className="text-xs text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded inline-flex items-center gap-1"
        >
          ← Back to home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Writing
        </h1>
        <p className="text-sm sm:text-base text-muted">
          Thoughts on software craft, architecture, and quiet computing.
        </p>
      </div>

      <div className="pt-2 border-t border-white/10">
        <WritingList posts={posts} />
      </div>
    </div>
  );
}
