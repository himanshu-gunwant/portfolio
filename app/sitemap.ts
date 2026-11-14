import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllPosts, parsePostDate } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const siteUrl = siteConfig.url.replace(/\/$/, "");

  // Use the most recent post's date or current date for the homepage
  const latestDate = posts.length > 0 ? parsePostDate(posts[0].date) : new Date();

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/writing/${post.slug}`,
    lastModified: parsePostDate(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: latestDate,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${siteUrl}${siteConfig.avatar}`],
    },
    {
      url: `${siteUrl}/writing`,
      lastModified: latestDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/llms.txt`,
      lastModified: latestDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/feed.xml`,
      lastModified: latestDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...postUrls,
  ];
}
