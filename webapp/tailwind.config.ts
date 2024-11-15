import type { Config } from "tailwindcss";
import { BASE_PATH } from "./config";

const pathPrefix = process.env.NODE_ENV === "production" ? `/${BASE_PATH}` : "";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: "var(--font-oxanium)",
      body: "var(--font-open-sans)",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
      center: true,
      screens: {
        sm: "720px",
        md: "720px",
        lg: "720px",
        xl: "720px",
        "2xl": "720px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#092F4B",
        secondary: "#475F6B",
        tertiary: "#78909C",
      },
      backgroundImage: {
        pattern: `url('${pathPrefix}/bg-pattern.webp')`,
        "hero-boat": `url('${pathPrefix}/boat.webp')`,
      },
      content: {
        dividerHorizontal: `url("${pathPrefix}/menu-divider.svg")`,
      },
    },
  },
  plugins: [],
};
export default config;
