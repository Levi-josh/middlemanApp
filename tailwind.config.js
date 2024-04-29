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
        black2:'#1A1A1A',
        purple:'#6739B7',
        purplegrad:'#6739B7-9A7EC9',
        white1:'#F5F5F5'
      },
      
      width:{
        102:'50px',
        1025:'25%',
        103:'30%',
        104:'40%',
        106:'60%',
        107:'70%',
        1075:'75%',
        1085:'85%',
      },
      height:{
        1005:'5vh',
        1008:'8vh',
        101:'10vh',
        1025:'25vh',
        103:'30vh',
        10003:'30%',
        10004:'40%',
        104:'40vh',
        1045:'45vh',
        105:'50vh',
        108:'80vh',
        10008:'80%'
      }
    },
  },
  plugins: [],
}

