import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2433",
        cream: "#fff8dc",
        candy: "#ff4f9a",
        soda: "#2ad4ff",
        limepop: "#b9ef38",
        sunpop: "#ffd34e",
        grape: "#8d5cf6",
      },
      boxShadow: {
        sticker: "0 10px 0 #1f2433, 0 18px 35px rgba(31, 36, 51, 0.18)",
        pop: "0 14px 35px rgba(31, 36, 51, 0.16)",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
