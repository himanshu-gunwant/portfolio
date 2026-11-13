import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFrontmatter } from "./types";

const postsDirectory = path.join(process.cwd(), "content/writing");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPathMdx = path.join(postsDirectory, `${slug}.mdx`);
    const fullPathMd = path.join(postsDirectory, `${slug}.md`);
    const filePath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as PostFrontmatter;

    return {
      slug,
      title: frontmatter.title ?? "Untitled",
      date: frontmatter.date ?? "",
      description: frontmatter.description ?? "",
      content,
    };
  } catch (err) {
    console.error(`Error reading post with slug ${slug}:`, err);
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null);

  // Sort descending by date (e.g. "2026 · 11" > "2026 · 09")
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
