// Brand palette for build-time image generation (favicon + OG image).
//
// next/og renders these components with Satori, which cannot read the CSS
// variables defined in app/globals.css. These hex values therefore mirror the
// canonical theme tokens. Keep them in sync with :root in app/globals.css —
// that file is the single source of truth for every other surface.
export const brand = {
  accent: "#EF5143", // --accent-500
  ink: "#0B0B0A", // --ink-900
  inkMuted: "#4A4A45", // --ink-600
  cream: "#FAFAF7", // --cream-100
  white: "#FFFFFF",
} as const;
