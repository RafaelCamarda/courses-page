/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-600": "#868E96",
        "gray-700": "#495057",
        "gray-800": "#343A40",
        "gray-900": "#212529",

        "violet-100": "#E5DBFF",
        "violet-600": "#7950F2",
        white: "#ffffff",
      },
      letterSpacing: {
        wide: "0px",
        normal: "-0.5px",
        tight: "-1px",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

