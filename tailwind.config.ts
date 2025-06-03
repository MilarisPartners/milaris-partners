import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#151515",
          light: "#424242",
        },
        blue: {
          light: "#e3f2fd",
          soft: "#90caf9",
          medium: "#2196f3",
          deep: "#1565c0",
          dark: "#0d47a1",
        },
        gray: {
          light: "#f5f5f5",
          soft: "#e0e0e0",
          medium: "#9e9e9e",
          dark: "#424242",
        },
        accent: {
          gold: "#d4af37",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "Work Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config; 