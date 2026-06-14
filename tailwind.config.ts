import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        // Light theme palette — warm cream, deep ink, vivid coral.
        // Values resolve to CSS variables defined in app/globals.css (:root),
        // the single source of truth. The <alpha-value> placeholder keeps
        // Tailwind's /opacity modifiers working (e.g. bg-ink-900/[0.06]).
        cream: {
          50: "rgb(var(--cream-50) / <alpha-value>)",
          100: "rgb(var(--cream-100) / <alpha-value>)",
          200: "rgb(var(--cream-200) / <alpha-value>)",
          300: "rgb(var(--cream-300) / <alpha-value>)",
          400: "rgb(var(--cream-400) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink-900) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
          400: "rgb(var(--ink-400) / <alpha-value>)",
          300: "rgb(var(--ink-300) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          50: "rgb(var(--accent-50) / <alpha-value>)",
          100: "rgb(var(--accent-100) / <alpha-value>)",
          200: "rgb(var(--accent-200) / <alpha-value>)",
          300: "rgb(var(--accent-300) / <alpha-value>)",
          400: "rgb(var(--accent-400) / <alpha-value>)",
          500: "rgb(var(--accent-500) / <alpha-value>)",
          600: "rgb(var(--accent-600) / <alpha-value>)",
          700: "rgb(var(--accent-700) / <alpha-value>)",
          800: "rgb(var(--accent-800) / <alpha-value>)",
          900: "rgb(var(--accent-900) / <alpha-value>)",
        },
        // Semantic roles — components use these, not the raw scales above.
        // Values resolve to the dark theme defined in app/globals.css (:root).
        base: "rgb(var(--base) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          strong: "rgb(var(--surface-strong) / <alpha-value>)",
        },
        content: {
          DEFAULT: "rgb(var(--content) / <alpha-value>)",
          muted: "rgb(var(--content-muted) / <alpha-value>)",
          faint: "rgb(var(--content-faint) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
        inverse: "rgb(var(--inverse) / <alpha-value>)",
        "on-inverse": "rgb(var(--on-inverse) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "blink": "blink 1.2s ease-in-out infinite",
        "blink-hard": "blink-hard 1s steps(1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        "blink-hard": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
