import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "580px",
          md: "768px",
        },
      },
      colors: {
        "link-hover-dark": "#fff",
        "link-hover-light": "#09090a",
        "border-light": "#EAECF0",
        "border-dark": "#333741",
        "text-secondary-light": "#737373",
        "text-secondary-dark": "#AAAAAA",
        "bg-badge-light": "#f1f1f1",
        "bg-badge-dark": "#272727",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
