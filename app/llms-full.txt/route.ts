import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/mdx";

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = siteConfig.url.replace(/\/$/, "");

  const aboutSection = siteConfig.about.join("\n\n");

  const projectItems = siteConfig.projects
    .map(
      (p) => `- [${p.name}](${p.href}): ${p.description} (${p.tag})`
    )
    .join("\n");

  const socialItems = siteConfig.socials
    .map((s) => `- [${s.label}](${s.href})`)
    .join("\n");

  const fullArticles = posts
    .map((post) => {
      return `### ${post.title}
- Slug: ${post.slug}
- URL: ${siteUrl}/writing/${post.slug}
- Date: ${post.date}
- Description: ${post.description}

${post.content.trim()}
`;
    })
    .join("\n\n---\n\n");

  const content = `# ${siteConfig.name} — Full Knowledge Base & Articles

> ${siteConfig.description}

## About

${aboutSection}

- Primary Website: ${siteUrl}
- LLMs Index: ${siteUrl}/llms.txt
- Sitemap: ${siteUrl}/sitemap.xml
- RSS Feed: ${siteUrl}/feed.xml

## Projects

${projectItems}

## Contact & Social Links

- Email: ${siteConfig.email}
${socialItems}

---

## Full Articles & Writing

${fullArticles}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
