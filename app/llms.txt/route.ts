import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/mdx";

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = siteConfig.url.replace(/\/$/, "");

  const aboutSection = siteConfig.about.join("\n\n");

  const projectItems = siteConfig.projects
    .map((p) => {
      const fullUrl = p.href.startsWith("http") ? p.href : `${siteUrl}${p.href}`;
      const extraLinks: string[] = [];
      if (p.liveUrl) extraLinks.push(`Live: ${p.liveUrl}`);
      if (p.githubUrl) extraLinks.push(`GitHub: ${p.githubUrl}`);
      const suffix = extraLinks.length > 0 ? ` | ${extraLinks.join(" | ")}` : "";
      return `- [${p.name}](${fullUrl}): ${p.description} (${p.tag})${suffix}`;
    })
    .join("\n");

  const writingItems = posts
    .map(
      (post) =>
        `- [${post.title}](${siteUrl}/writing/${post.slug}): ${post.description} (${post.date})`
    )
    .join("\n");

  const socialItems = siteConfig.socials
    .map((s) => `- [${s.label}](${s.href})`)
    .join("\n");

  const content = `# ${siteConfig.name}

> ${siteConfig.description}

## About

${aboutSection}

- Primary Website: ${siteUrl}
- Full Context & Articles: ${siteUrl}/llms-full.txt
- Sitemap: ${siteUrl}/sitemap.xml
- RSS Feed: ${siteUrl}/feed.xml

## Projects

${projectItems}

## Writing

${writingItems}

## Contact & Social Links

- Email: ${siteConfig.email}
${socialItems}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
