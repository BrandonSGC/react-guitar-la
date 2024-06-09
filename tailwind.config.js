/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient":
          "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/header.jpg')",
        "courses-gradient":
          "linear-gradient(to right, rgb(0 0 0 / .65), rgb( 0 0 0 / .65)), url('/img/cursos_bg.jpg')",
      },
    },
  },
  plugins: [],
};
