import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        Kaushan: ["Kaushan Script"],
        Calligraffitti: ["Calligraffitti"],
        Playwrite: ["Playwrite IN"],
        Kalam: ["Kalam"]
      },
      colors: {
        header: "rgba(var(--header))",
        headerBackground: "rgba(var(--headerBackground))",
        textPrimary: "rgba(var(--textPrimary))",
        textSecondary: "rgba(var(--textSecondary))",
        buttonTextPrimary: "rgba(var(--buttonTextPrimary))",
        buttonText: "rgba(var(--buttonText))",
        button: "rgba(var(--button))",
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        buttonHover: "rgba(var(--buttonHover))",
      }
    },
  },
  plugins: [],
} satisfies Config;
