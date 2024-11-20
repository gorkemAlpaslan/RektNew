import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', "sans-serif"],
        plexMono: ["var(--font-plex-mono)", "monospace"], // IBM Plex Mono
      },
      letterSpacing: {
        "-5": "-0.05em", // -5% letter spacing
      },
    },
  },
  plugins: [],
};
export default config;
