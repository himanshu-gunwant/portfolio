import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Nav() {
  const githubLink = siteConfig.socials.find((s) => s.icon === "github")?.href || "https://github.com";

  return (
    <nav
      aria-label="Main Navigation"
      className="w-full flex items-center justify-between text-sm py-8 animate-enter delay-1"
    >
      <Link
        href="/"
        className="font-medium text-foreground/90 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
      >
        {siteConfig.name.toLowerCase()}
      </Link>
      <div className="flex items-center gap-5 text-muted">
        <Link
          href="/#work"
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          Work
        </Link>
        <Link
          href="/writing"
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          Writing
        </Link>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
