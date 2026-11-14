import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfig.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot-Extended",
          "Google-Extended",
          "cohere-ai",
          "Bytespider",
          "CCBot",
          "Diffbot",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/writing/"],
        disallow: "/api/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
