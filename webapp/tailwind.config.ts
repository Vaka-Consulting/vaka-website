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
        secondary: "#78909C",
      },
      content: {
        dividerHorizontal: 'url("/menu-divider.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
