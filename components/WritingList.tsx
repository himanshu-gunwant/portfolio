import React from "react";
import Link from "next/link";
import { Post } from "@/lib/types";

export function WritingList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-sm text-muted italic py-3">No posts published yet.</p>
    );
  }

  return (
    <div className="space-y-1">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className="group flex items-baseline justify-between gap-4 p-3.5 -mx-3.5 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        >
          <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-white transition-colors line-clamp-1">
            {post.title}
          </span>
          <span className="text-xs sm:text-sm text-muted/75 font-mono whitespace-nowrap">
            {post.date}
          </span>
        </Link>
      ))}
    </div>
  );
}
