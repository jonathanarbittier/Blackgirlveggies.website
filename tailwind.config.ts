import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0B2E13",
          800: "#17431F",
          700: "#2F6B2F",
        },
        herb: "#7ED957",
        cream: "#FFF7EC",
        parchment: "#F6E6CF",
        bark: "#3A2415",
        honey: "#E6A83B",
        ink: "#1F1F1F",
      },
      boxShadow: {
        warm: "0 18px 50px rgba(58, 36, 21, 0.16)",
        soft: "0 10px 30px rgba(11, 46, 19, 0.12)",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
