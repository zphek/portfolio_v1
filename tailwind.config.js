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
        bebas: ['"Bebas Neue"', "sans-serif"],
        robot: ["Roboto", "sans-serif"]
      },
      screens: {
        'xxs':"0px",
        
        'xs':'360px',

        'sm': '576px',
        // => @media (min-width: 576px) { ... }
      
        'md': '768px',
        // => @media (min-width: 768px) { ... }
      
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
      
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
}