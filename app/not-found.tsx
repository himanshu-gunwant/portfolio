import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 sm:pt-28 space-y-4 animate-enter delay-1">
      <p className="text-xs font-mono text-muted uppercase tracking-wider">
        404 — Page Not Found
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        Lost in the quiet
      </h1>
      <p className="text-sm sm:text-base text-muted max-w-md leading-relaxed">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="text-xs sm:text-sm text-foreground hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded inline-flex items-center gap-1"
        >
          ← Return to homepage
        </Link>
      </div>
    </div>
  );
}
