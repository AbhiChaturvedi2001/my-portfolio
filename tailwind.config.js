/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bodyBgColor: "#191924",
        transparentColor: "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}