import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Site Atelier - Turn ideas into a clear project brief";
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
          justifyContent: "space-between",
          padding: "72px",
          color: "#211D18",
          background:
            "linear-gradient(135deg, #F3EFE8 0%, #D8DFDC 52%, #81979A 100%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: "0.06em" }}>
          SITE ATELIER
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div style={{ display: "flex", fontSize: 74, lineHeight: 1.04 }}>
            Turn ideas into a clear project brief.
          </div>
          <div style={{ display: "flex", marginTop: 30, fontFamily: "sans-serif", fontSize: 28, lineHeight: 1.35 }}>
            Discover a direction, collect inspiration and define the project before detailed work begins.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
