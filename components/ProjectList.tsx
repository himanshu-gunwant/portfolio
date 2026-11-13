import React from "react";
import Link from "next/link";
import { Project } from "@/lib/types";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-1">
      {projects.map((project) => {
        const isExt = project.isExternal ?? project.href.startsWith("http");
        const Component = isExt ? "a" : Link;
        const extraProps = isExt
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};

        return (
          <Component
            key={project.name}
            href={project.href}
            {...extraProps}
            className="group block p-3.5 -mx-3.5 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium text-foreground group-hover:text-white transition-colors">
                {project.name}
                <span className="inline-block ml-1 text-xs text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
              <span className="text-xs text-muted/75 font-mono whitespace-nowrap">
                {project.tag}
              </span>
            </div>
            <p className="text-sm text-muted mt-1 leading-relaxed">
              {project.description}
            </p>
          </Component>
        );
      })}
    </div>
  );
}
