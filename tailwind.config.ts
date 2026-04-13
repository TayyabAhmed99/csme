import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0c2340",
          muted: "#1a3a5c",
          accent: "#0d6e6e",
        },
        surface: {
          DEFAULT: "#fafafa",
          card: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 35, 64, 0.06), 0 8px 24px rgba(12, 35, 64, 0.08)",
        lift: "0 12px 40px rgba(12, 35, 64, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
