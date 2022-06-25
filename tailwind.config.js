/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DAE5D0",
        secondary: "#525E75",
        paper: "#f9f9f9",
      },
    },
  },
  plugins: [],
}
