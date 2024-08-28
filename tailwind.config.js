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
        // purple:'#6739B7',
        purple:'rgb(107, 42, 168)',
        purplegrad:'#6739B7-9A7EC9',
        white1:'#F5F5F5',
        demotext:'rgb(49, 47, 47)'
      },
      
      width:{
        102:'50px',
        1025:'25%',
        103:'30%',
        104:'40%',
        105:'50%',
        106:'60%',
        1065:'65%',
        1069:'69%',
        107:'70%',
        1074:'74%',
        1075:'75%',
        108:'80%',
        1083:'82%',
        1085:'85%',
        109:'90%',
        10000:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0ah21XJOkhZF_1uIzwEgIas5R24uDscq3w&s'
      },
      maxWidth:{
      105:'50%',
      107:'70%',
      },
      height:{
        1005:'5vh',
        1006:'6vh',
        1007:'7vh',
        1008:'8vh',
        101:'10vh',
        1012:'12vh',
        1015:'15vh',
        102:'20vh',
        1025:'25vh',
        10001:'10%',
        10002:'20%',
        100025:'25%',
        103:'30vh',
        10003:'30%',
        10004:'40%',
        104:'40vh',
        1045:'45vh',
        105:'50vh',
        1055:'53vh',
        106:'60vh',
        107:'70vh',
        108:'80vh',
        109:'90vh',
        1095:'95vh',
        10007:'70%',
        100075:'75%',        10008:'80%',
        100085:'85%',
        10009:'90%',
        100095:'95%',
      },
      borderWidth:{
        0.1:'0.1px'
      }
    },
  },
  plugins: [],
}

