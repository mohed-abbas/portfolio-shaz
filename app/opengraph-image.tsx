import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Muhammad Shahzaib — Full-Stack Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#FAFAF7",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#00BF7D",
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#0B0B0A",
          }}
        >
          Muhammad Shahzaib
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 30,
            color: "#4A4A45",
          }}
        >
          Building production SaaS and AI-integrated web apps.
        </div>
      </div>
    ),
    { ...size }
  );
}
