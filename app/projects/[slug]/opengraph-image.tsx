import { ImageResponse } from "next/og";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project ? project.name : "Project Case Study";
  const tagline = project ? project.tagline : siteConfig.description;
  const tag = project ? project.tag : "";
  const status = project ? project.status : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0f0f0f",
          color: "#f5f5f5",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top accent border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #ffffff, #6b7280, transparent)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 600,
              color: "#9ca3af",
              letterSpacing: "-0.02em",
            }}
          >
            {`${siteConfig.name.toLowerCase()} / projects / ${slug}`}
          </div>
          {status ? (
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                color: "#34d399",
                fontFamily: "monospace",
                fontWeight: 600,
              }}
            >
              {status}
            </div>
          ) : null}
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "64px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
              maxWidth: "1020px",
            }}
          >
            {title}
          </div>
          {tagline ? (
            <div
              style={{
                display: "flex",
                fontSize: "26px",
                color: "#9ca3af",
                lineHeight: 1.45,
                maxWidth: "960px",
              }}
            >
              {tagline}
            </div>
          ) : null}
          {tag ? (
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                color: "#6b7280",
                fontFamily: "monospace",
                marginTop: "4px",
              }}
            >
              {tag}
            </div>
          ) : null}
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "28px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              color: "#6b7280",
            }}
          >
            {`https://himanshugunwant.com/projects/${slug}`}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              color: "#9ca3af",
            }}
          >
            {`By ${siteConfig.name}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
