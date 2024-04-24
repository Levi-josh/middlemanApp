/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black1:'#121212',
        black2:'#1A1A1A'
      },
      width:{
        102:'50px',
        107:'60%'
      }
    },
  },
  plugins: [],
}

