/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        onHoverColor : "rgb(95 111 255)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

