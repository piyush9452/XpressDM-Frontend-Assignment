import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nacelle: ["Nacelle", "sans-serif"],
      },
      colors: {
        xdm: {
          bg: "#0D0D0D",
          "bg-card": "#1A1A1A",
          "bg-card2": "#161616",
          border: "#2A2A2A",
          "border-pro": "#E04A1F",
          accent: "#E04A1F",
          "nav-bg": "#1C1C1C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
