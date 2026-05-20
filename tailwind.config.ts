import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Legacy tokens — legal/support fallbacks */
        brand: {
          DEFAULT: "#0a1e36",
          muted: "#0f2d4d",
          accent: "#0a1e36",
        },
        surface: {
          DEFAULT: "#fafafa",
          card: "#ffffff",
        },
        /* Parent site — text matches footer tone */
        parent: {
          ink: "#605e7b",
          "ink-hover": "#565472",
        },
        /* Tourist Hands Free — coastal blue + white (mockup) */
        thf: {
          ink: "#0F4C81",
          navy: "#0F4C81",
          "navy-dark": "#0A3D66",
          blue: "#1E6AA8",
          sky: "#EAF3FA",
          step: "#DCEAF5",
          cream: "#FFFFFF",
          footer: "#C8D8E8",
          gold: "#C89B5B",
          muted: "#5A6F85",
          telegram: "#24A1DE",
          line: "#B8D4E8",
        },
        /* FX Discovery — dark fintech */
        fx: {
          void: "#030712",
          panel: "#0f1419",
          edge: "#1e293b",
          mist: "#94a3b8",
          glow: "#22d3ee",
          pulse: "#818cf8",
          signal: "#34d399",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        thf: ["var(--font-thf)", "system-ui", "sans-serif"],
        fx: ["var(--font-fx)", "system-ui", "sans-serif"],
        "fx-mono": ["var(--font-fx-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 35, 64, 0.06), 0 8px 24px rgba(12, 35, 64, 0.08)",
        lift: "0 12px 40px rgba(12, 35, 64, 0.12)",
        "thf-card":
          "0 4px 20px rgba(15, 76, 129, 0.1), 0 1px 3px rgba(15, 76, 129, 0.06)",
        "thf-cta": "0 6px 24px rgba(15, 76, 129, 0.28)",
        "fx-glow": "0 0 40px rgba(34, 211, 238, 0.15), 0 0 80px rgba(129, 140, 248, 0.08)",
      },
      backgroundImage: {
        "thf-hero":
          "linear-gradient(180deg, rgba(15,76,129,0.32) 0%, rgba(10,61,102,0.48) 100%)",
        "fx-grid":
          "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "fx-grid": "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
