import { ImageResponse } from "next/og";

export const alt = "Meysam Kiani - Front-End Engineer";
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
          padding: "72px",
          backgroundColor: "#FBF9F6",
          color: "#221D18",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            fontWeight: 600,
            color: "#C2410C",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#E2622B",
            }}
          />
          Front-End Engineer
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.045em",
          }}
        >
          Meysam Kiani
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            fontWeight: 500,
            color: "#6A6258",
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Vue · React · Next.js · TypeScript
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            fontWeight: 600,
            color: "#C2410C",
          }}
        >
          mysm.ir
        </div>
      </div>
    ),
    { ...size },
  );
}
