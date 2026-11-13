import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-6 sm:pt-10 animate-enter delay-1">
      <div className="space-y-4 mb-8">
        <Link
          href="/writing"
          className="text-xs text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded inline-flex items-center gap-1"
        >
          ← All writing
        </Link>
        <div className="space-y-2">
          <div className="text-xs text-muted/75 font-mono">
            {post.date}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-base text-muted leading-relaxed">
              {post.description}
            </p>
          )}
        </div>
      </div>

      <div className="prose prose-invert prose-neutral max-w-none pt-8 border-t border-white/10 prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted prose-p:leading-relaxed prose-li:text-muted prose-strong:text-foreground prose-blockquote:border-l-white/20 prose-blockquote:text-foreground/90 prose-blockquote:italic prose-code:text-foreground prose-code:font-mono prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-a:text-foreground hover:prose-a:text-white prose-a:underline-offset-4">
        <MDXRemote source={post.content} />
      </div>

      <div className="mt-14 pt-6 border-t border-white/10">
        <Link
          href="/writing"
          className="text-xs text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded inline-flex items-center gap-1"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
