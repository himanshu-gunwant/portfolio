import { siteConfig } from "@/data/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-20 pt-8 pb-12 border-t border-white/10 text-xs text-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p>
        © {currentYear} {siteConfig.name} · built with Next.js
      </p>
      <div className="flex items-center gap-4 text-xs">
        <a
          href="/feed.xml"
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          RSS
        </a>
        <a
          href={siteConfig.socials.find((s) => s.icon === "github")?.href || "https://github.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
