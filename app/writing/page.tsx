import { Metadata } from "next";
import Link from "next/link";
import { WritingList } from "@/components/WritingList";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on engineering, design systems, and building software.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-6 sm:pt-10 space-y-8 animate-enter delay-1">
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
