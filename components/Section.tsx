import React from "react";
import Link from "next/link";

interface SectionAction {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface SectionProps {
  id?: string;
  title: string;
  action?: SectionAction;
  children: React.ReactNode;
  className?: string;
  delayClass?: string;
}

export function Section({
  id,
  title,
  action,
  children,
  className = "",
  delayClass = "delay-2",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`animate-enter ${delayClass} space-y-4 pt-10 sm:pt-12 ${className}`}
    >
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {action && (
          action.isExternal ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded inline-flex items-center gap-1"
            >
              {action.label}
            </a>
          ) : (
            <Link
              href={action.href}
              className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded inline-flex items-center gap-1"
            >
              {action.label}
            </Link>
          )
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}
