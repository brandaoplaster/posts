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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.primary.DEFAULT'),
            color: theme('colors.text.dark'),
            h1: { color: theme('colors.primary.dark') },
            h2: { color: theme('colors.primary.dark') },
            h3: { color: theme('colors.primary.dark') },
            a: { color: theme('colors.primary.dark') },
            p: {
              borderTop: "none",
              borderBottom: "none",
            },
            h2: {
              borderTop: "none",
              borderBottom: "none",
            },
            h3: {
              borderTop: "none",
              borderBottom: "none",
            },
            ul: {
              borderTop: "none",
              borderBottom: "none",
            },
            ol: {
              borderTop: "none",
              borderBottom: "none",
            }
          },
        },
        dark: {
          css: {
            '--tw-prose-headings': theme('colors.primary.light'),
            color: theme('colors.text.light'),
            h1: { color: theme('colors.primary.light') },
            h2: { color: theme('colors.primary.light') },
            h3: { color: theme('colors.primary.light') },
            a: { color: theme('colors.primary.light') },
            p: {
              borderTop: "none",
              borderBottom: "none",
            },
            h2: {
              borderTop: "none",
              borderBottom: "none",
            },
            h3: {
              borderTop: "none",
              borderBottom: "none",
            },
            ul: {
              borderTop: "none",
              borderBottom: "none",
            },
            ol: {
              borderTop: "none",
              borderBottom: "none",
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
