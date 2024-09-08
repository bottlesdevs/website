/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            img: {
              display: "block",
              "margin-left": "auto",
              "margin-right": "auto",
              "max-width": "100%",
              width: "auto",
              "@screen md": {
                "max-width": "990px",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
