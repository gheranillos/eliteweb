import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        ink: "#F5F5F3",
        mute: "#8F8F8B",
        line: "#1E1E1E",
        accent: "#FF1E3C",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        condensed: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
