import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post ? post.title : "Writing";
  const description = post ? post.description : siteConfig.description;
  const date = post ? post.date : "";

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
        {/* Subtle accent border */}
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

        {/* Top metadata */}
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
              fontSize: "22px",
              fontWeight: 600,
              color: "#9ca3af",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.name.toLowerCase()} / writing
          </div>
          {date && (
            <div
              style={{
                fontSize: "18px",
                color: "#9ca3af",
                fontFamily: "monospace",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "6px 14px",
                borderRadius: "9999px",
              }}
            >
              {date}
            </div>
          )}
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
              fontSize: "54px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#ffffff",
              maxWidth: "1020px",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: "24px",
                color: "#9ca3af",
                lineHeight: 1.5,
                maxWidth: "920px",
              }}
            >
              {description}
            </div>
          )}
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
              fontSize: "18px",
              color: "#6b7280",
            }}
          >
            https://himanshugunwant.com/writing/{slug}
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#9ca3af",
            }}
          >
            By {siteConfig.name}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
