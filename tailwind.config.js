/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        resume: {
          primary: "#F4D19B",
          secondary: "#748DA6",
          paper: "#FDFCE5",
          fill: "#B7E5DD",
        },
      },
    },
  },
  plugins: [],
}
