import type { Config } from "tailwindcss";

const config: Config = {
  presets: [require("tailwindcss-preset-px-to-rem")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: { min: "744px" },
      lg: { min: "1200px" },
    },
    colors: {
      bg: {
        primary: "#111111",
        secondary: "#1A1A1A",
      },
      text: {
        primary: "#F8FAFC",
        secondary: "#6f7277",
        default: "#c3c7cc",
      },
    },
  },
  plugins: [],
};
export default config;
