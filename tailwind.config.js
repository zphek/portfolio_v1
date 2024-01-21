/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"]
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}