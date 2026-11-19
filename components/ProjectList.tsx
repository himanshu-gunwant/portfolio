import React from "react";
import Link from "next/link";
import { Project } from "@/lib/types";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-2">
      {projects.map((project) => {
        return (
          <div
            key={project.slug || project.name}
            className="group block p-3.5 -mx-3.5 rounded-lg hover:bg-white/5 transition-colors focus-within:ring-1 focus-within:ring-white/30"
          >
            {/* Top row: Title + Tags */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <div className="flex items-baseline gap-2">
                <Link
                  href={project.href}
                  className="font-medium text-foreground group-hover:text-white transition-colors focus:outline-none"
                >
                  {project.name}
                </Link>
              </div>
              <span className="text-xs text-muted/75 font-mono whitespace-nowrap">
                {project.tag}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted mt-1 leading-relaxed">
              {project.description}
            </p>

            {/* Bottom action text links */}
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
              <Link
                href={project.href}
                className="text-foreground hover:text-white transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-white/25 hover:decoration-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
              >
                Case study
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-emerald-500/30 hover:decoration-emerald-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
                >
                  {project.liveUrl.replace("https://", "")}
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-white/15 hover:decoration-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
