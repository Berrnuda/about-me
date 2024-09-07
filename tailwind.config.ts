import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

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
        blue: "#183347",
        purple: "#412454",
        pink: "#5d1715",
      },
      text: {
        primary: "#F8FAFC",
        secondary: "#6f7277",
        default: "#c3c7cc",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".modal": {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "36px",
          paddingRight: "36px",
          paddingTop: "36px",
          paddingBottom: "28px",
        },
        ".modal-close-icon": {
          position: "absolute",
          right: "16px",
          top: "16px",
          marginLeft: "auto",
          cursor: "pointer",
        },
        ".modal-title": {
          margin: "auto",
          marginBottom: "8px",
          color: "#F8FAFC",
          fontWeight: "500",
          fontSize: "16px",
        },
        ".modal-content": {
          margin: "auto",
          marginBottom: "16px",
          color: "#CBD5E1",
          fontWeight: "500",
          fontSize: "14px",
          textAlign: "center",
        },
      });
    },
  ],
};
export default config;
