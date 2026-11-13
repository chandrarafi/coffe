import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: {
          50: "#f4f7f2",
          100: "#e6ede1",
          200: "#d0dec5",
          300: "#b6cba5",
          400: "#98b382",
          500: "#7c9964",
          600: "#607b4b",
          700: "#4b603b",
          800: "#3d4e31",
          900: "#33412b",
        },
        cream: "#F7F5F0",
        dark: "#1A1A1A",
      },
      fontFamily: {
        heading: ["Founders Grotesk Condensed", "sans-serif"],
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

