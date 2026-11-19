import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";
import { getProjectBySlug, getAllProjectSlugs, projectsData } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = siteConfig.url.replace(/\/$/, "");
  const projectUrl = `${siteUrl}/projects/${slug}`;

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.description,
      type: "website",
      url: projectUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: `${siteUrl}${project.screenshots[0]?.src || siteConfig.avatar}`,
          width: 1200,
          height: 630,
          alt: `${project.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.tagline}`,
      description: project.description,
      creator: "@himanshugg_",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const siteUrl = siteConfig.url.replace(/\/$/, "");
  const projectUrl = `${siteUrl}/projects/${slug}`;
  const otherProject = projectsData.find((p) => p.slug !== slug);

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    headline: project.tagline,
    description: project.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteUrl,
    },
    url: projectUrl,
    codeRepository: project.githubUrl,
    ...(project.liveUrl ? { installUrl: project.liveUrl } : {}),
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/#work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: projectUrl,
      },
    ],
  };

  return (
    <article className="pt-6 sm:pt-10 space-y-12 animate-enter delay-1 pb-12">
      <JsonLd data={[softwareJsonLd, breadcrumbsJsonLd]} />

      {/* Navigation & Header */}
      <div className="space-y-3">
        <Link
          href="/#work"
          className="text-xs text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded inline-flex items-center gap-1.5"
        >
          Back to selected work
        </Link>

        <div className="space-y-2 pt-1">
          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-muted">
            <span>{project.status}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Action text links with colored fonts, no button boxes */}
        <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-emerald-500/30 hover:decoration-emerald-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
            >
              <span>{project.liveUrl.replace("https://", "")}</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 hover:text-white transition-colors inline-flex items-center gap-1.5 underline underline-offset-4 decoration-white/25 hover:decoration-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
          >
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub repository</span>
          </a>
        </div>
      </div>

      {/* Featured Primary Screenshot */}
      {project.screenshots.length > 0 && (
        <section aria-label="Project Preview" className="space-y-2.5">
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-xl">
            <Image
              src={project.screenshots[0].src}
              alt={project.screenshots[0].alt}
              width={project.screenshots[0].width || 1200}
              height={project.screenshots[0].height || 675}
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 672px"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-muted/80 font-mono text-center sm:text-left">
            {project.screenshots[0].caption}
          </p>
        </section>
      )}

      {/* What it does */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          What the Project Does
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-muted leading-relaxed">
          {project.whatItDoes.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* The Problem It Solves */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            The Problem It Solves
          </h2>
          <p className="text-sm text-muted">
            {project.problemSolved.summary}
          </p>
        </div>

        <div className="space-y-4 pt-1">
          {project.problemSolved.painPoints.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="text-sm font-medium text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why I Built It */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Why I Built It
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            {project.whyIBuiltIt.summary}
          </p>
        </div>

        <div className="space-y-2.5 pt-1">
          {project.whyIBuiltIt.points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-muted">
              <span className="text-white/30 text-xs pt-0.5">•</span>
              <div>
                <strong className="font-medium text-foreground mr-1.5">
                  {pt.title}:
                </strong>
                <span className="leading-relaxed">{pt.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            How It Works
          </h2>
          <p className="text-sm text-muted">
            {project.howItWorks.summary}
          </p>
        </div>

        <div className="space-y-4 pt-1">
          {project.howItWorks.steps.map((st) => (
            <div key={st.number} className="flex items-start gap-3">
              <span className="shrink-0 font-mono text-xs text-muted/70 pt-0.5">
                {st.number}.
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">
                  {st.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Application Screenshots (if any) */}
      {project.screenshots.length > 1 && (
        <section className="space-y-6 pt-4 border-t border-white/10">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Application Screenshots
          </h2>
          <div className="space-y-6">
            {project.screenshots.slice(1).map((shot, idx) => (
              <div key={idx} className="space-y-2">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-md">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width || 1200}
                    height={shot.height || 675}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-muted/80 font-mono text-center sm:text-left">
                  {shot.caption}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Architecture */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Technical Architecture
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            {project.architecture.summary}
          </p>
        </div>

        <div className="space-y-3 pt-1">
          {project.architecture.components.map((c, idx) => (
            <div key={idx} className="space-y-1 py-1.5 border-b border-white/5 last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="text-sm font-medium text-foreground">
                  {c.name}
                </span>
                <span className="text-xs font-mono text-muted/70">
                  {c.tech}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {c.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Key Features
        </h2>
        <div className="space-y-3 pt-1">
          {project.keyFeatures.map((f, idx) => (
            <div key={idx} className="space-y-0.5">
              <h3 className="text-sm font-medium text-foreground">
                {f.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Technology Stack
        </h2>
        <div className="space-y-5 pt-1">
          {project.techStack.map((cat, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-xs font-mono text-muted uppercase tracking-wider">
                {cat.category}
              </h3>
              <div className="space-y-1.5">
                {cat.technologies.map((t, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm py-1 border-b border-white/5 last:border-b-0"
                  >
                    <span className="font-mono text-foreground font-medium text-xs sm:text-sm">
                      {t.name}
                    </span>
                    <span className="text-muted text-xs sm:text-right">
                      {t.purpose}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Engineering Decisions */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Relevant Engineering Decisions
          </h2>
          <p className="text-sm text-muted">
            Architecture Decision Records (ADRs) and trade-offs made during development.
          </p>
        </div>

        <div className="space-y-6 pt-1">
          {project.engineeringDecisions.map((dec, idx) => (
            <div
              key={idx}
              className="space-y-2 pt-4 first:pt-0 border-t border-white/5 first:border-t-0"
            >
              <h3 className="text-base font-medium text-foreground">
                {dec.title}
              </h3>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted/70 block">
                    Context
                  </span>
                  <p className="text-muted mt-0.5 leading-relaxed">
                    {dec.context}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted/70 block">
                    Decision
                  </span>
                  <p className="text-foreground/90 mt-0.5 leading-relaxed">
                    {dec.decision}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted/70 block">
                    Outcome
                  </span>
                  <p className="text-muted mt-0.5 leading-relaxed">
                    {dec.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Exploration Links */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <Link
          href="/#work"
          className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
        >
          All selected work
        </Link>

        {otherProject && (
          <Link
            href={otherProject.href}
            className="text-muted hover:text-white transition-colors inline-flex items-center gap-1 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded"
          >
            <span>Next project: {otherProject.name}</span>
          </Link>
        )}
      </div>
    </article>
  );
}
