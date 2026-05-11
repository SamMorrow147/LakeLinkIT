import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(111,181,232,0.45), transparent 70%), linear-gradient(180deg, #f1f8fd 0%, #fbf7f1 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#155b99",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#2fa84f",
            }}
          />
          {site.city}, {site.region}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 92,
            fontWeight: 700,
            color: "#0f2a47",
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          LakeLink <span style={{ color: "#2fa84f", marginLeft: 18 }}>IT</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 56,
            fontWeight: 600,
            color: "#1f4470",
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          Friendly Tech Support
          <br />
          <span style={{ color: "#f39b2c" }}>You Can Trust.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            gap: 24,
            color: "#3c4856",
            fontSize: 28,
            fontWeight: 500,
          }}
        >
          <span>In-Home</span>
          <span>•</span>
          <span>Patient</span>
          <span>•</span>
          <span>Local</span>
          <span>•</span>
          <span>Plain Language</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
