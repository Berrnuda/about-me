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
      lg: { min: "1024px" },
      xl: { min: "1280px" },
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
      pre: {
        sky: "#9CDBFB",
        function: "#BF94E4",
        blue: "#8AA9F9",
        orange: "#F7CD7A",
        yellow: "#EFEF52",
        string: "#CAE797",
        paren: "#377E7F",
        red: "#ED6C52",
        gray: "#BBBED6",
        pink: "#F1A1AD",
      },
    },
    extend: {
      colors: {
        customFirst: "#F39C12",
        customSecond: "#E74C3C",
      },
      width: {
        "10p": "10%",
        "15p": "15%",
        "20p": "20%",
        "25p": "25%",
        "30p": "30%",
        "35p": "35%",
        "40p": "40%",
        "45p": "45%",
        "50p": "50%",
        "55p": "55%",
        "60p": "60%",
        "65p": "65%",
        "70p": "70%",
        "75p": "75%",
        "80p": "80%",
        "85p": "85%",
        "90p": "90%",
        "95p": "95%",
        "100p": "100%",
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
