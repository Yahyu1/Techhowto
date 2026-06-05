import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #050816 0%, #1a1040 50%, #050816 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#06b6d4",
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          Learn. Build. Launch.
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {SITE.name}
        </div>
        <div style={{ fontSize: 28, color: "#9ca3af", maxWidth: 800 }}>
          {SITE.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
