import type { Config } from "tailwindcss";

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
        DEFAULT: "1rem",
      },
      center: true,
      screens: {
        sm: "740px",
        md: "740px",
        lg: "740px",
        xl: "740px",
        "2xl": "740px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#092F4B",
        secondary: "#78909C",
      },
    },
  },
  plugins: [],
};
export default config;
