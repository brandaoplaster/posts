/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--color-primary-light)",
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        background: {
          light: "var(--color-bg-light)",
          DEFAULT: "var(--color-bg)",
          dark: "var(--color-bg-dark)",
        },
        text: {
          light: "var(--color-text-light)",
          DEFAULT: "var(--color-text)",
          dark: "var(--color-text-dark)",
        },
      },
    },
  },
  plugins: [],
};
