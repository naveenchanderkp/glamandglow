/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        glamPrimary: "#7C5CFC",
        glamSecondary: "#9F7AEA",
      },
    },
  },
  plugins: [],
};
