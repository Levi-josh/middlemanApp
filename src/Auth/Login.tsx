import { useState,FormEvent,useRef } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion';
import middlemanImage from '../assets/middlemanImage.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
// import { FaBars} from "react-icons/fa";
const ham = document.querySelector('.ham');
// const hamburger = document.querySelector('.hamburger');
// const line = document.querySelector('.line-top-bottom')||null;
// const navComp = document.querySelector('.nav_comp');


interface errMessage{
  username:string,
  password:string,
  otherErr:string
}
interface ErrorMessage {
  message: errMessage;
}

const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [ran,setRan]=useState(false)
const navigate = useNavigate()
const [fixedBody,setFixedBody]= useState<boolean>(true)
const [switchForm,setSwitchForm] = useState<boolean>(true)
const [imageLoaded, setImageLoaded] = useState(false);
const [errorMsg,setErrorMsg] = useState<ErrorMessage|null>()
const aboutRef = useRef<null | HTMLDivElement>(null);
const contactRef = useRef<null | HTMLDivElement>(null);
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);  // Toggle between true and false
};


// Function to handle image load event
const handleImageLoad = () => {
  setImageLoaded(true);
};
const containerVariants = {
  hidden: { opacity: 0 ,x: 100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
     
    }
   
  }
};
ham?.addEventListener('click', () => {
//  line?.className='line-top-bottom' 

})


const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};
const scrolltoPage = (currentRef:any)=> {
  changeIcon()
  setMenuOpen(!menuOpen); 
  currentRef.current?.scrollIntoView({ behavior: "smooth" });
}
const scrolltoPage1 = (currentRef:any)=> {
  currentRef.current?.scrollIntoView({ behavior: "smooth" });
}
const signUpHandSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setRan(true)
    const option = {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify({email,password})
    }
    try {
        const response = await fetch(`https://middlemanbackend.onrender.com/signup`, option);
        const data = await response.json();
        if (!response.ok) {
          setRan(false);
          setErrorMsg({message:data.errorMessage})
        }else{
        data && navigate('/landingPage/otp')  
        }
      }
      catch (err:any) {
        setRan(false)
        setErrorMsg({message:{
          username:'',
          password:'',
          otherErr:err.message 
        }})
      }
    }
const signInHandSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setErrorMsg(null)
    setRan(true)
    const option = {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify({email,password})
    }
    try {
        const response = await fetch(`https://middlemanbackend.onrender.com/sigin`, option);
        const data = await response.json();
        if (!response.ok) {
          setRan(false);
          setErrorMsg({message:data.errorMessage})
        }else{ 
        const mydata = { value: data.token, expiration: Date.now() + 86400000 }; // Expires in 24 hours
        localStorage.setItem('myData', JSON.stringify(mydata));
        data && navigate('/')   
     }
    }
    catch (err:any) {
      setRan(false)
      setErrorMsg({message:{
        username:'',
        password:'',
        otherErr:err.message 
      }})
    }
}
const changeForm = () => {
  setSwitchForm(prev => !prev)
}
const changeIcon = ()=>{
  setFixedBody(prev=>!prev)
}
const scrolltoTop = ()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
console.log(errorMsg)
  return (
    <div  className={`bg-black2 ${fixedBody?'overflow-auto':'overflow-hidden'}   w-full h-full  lg:px-0 lg:flex justify-center   lg:justify-normal  `}>
      {switchForm ?
        <form onSubmit={signInHandSubmit} className="bg-black w-109 hidden h-108 sm:w-1065 md:w-106 lg:w-109 xl:w-107 lg:h-full lg:flex flex-col justify-center  px-4 ">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="w-full flex items-center flex-col">
            <p className={`text-sm text-red-500 sm:text-base  ${errorMsg?.message?.username?'visible':'invisible'} `}>{errorMsg?.message?.username == '' || errorMsg?.message?.username == undefined?'a':errorMsg?.message?.username}</p>
            <input required type="email" className="w-full h-10  bg-black border    border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter an email" onChange={e=>{setEmail(e.target.value)}} value={email}   />
            </div>
            <div className='w-full  pt-3 pb-7 flex items-center flex-col '>
            <p className={`text-sm text-red-500 sm:text-base  ${errorMsg?.message?.password?'visible':'invisible'} `}>{errorMsg?.message?.password == '' || errorMsg?.message?.password == undefined?'a':errorMsg?.message?.password}</p>
            <input required maxLength={6} type="password" className="w-full h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" placeholder="Enter a password" onChange={e=>{setPassword(e.target.value)}} value={password}   />
            </div>
            <button className="w-full h-10 rounded-lg bg-purple flex justify-center items-center text-white text-base">{!ran?`Sign In`:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 18V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.929 4.929L7.757 7.757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.243 16.243L19.071 19.071" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.929 19.071L7.757 16.243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.243 7.757L19.071 4.929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              </motion.div>}
            </button>
          </div>
          <div className="flex flex-col gap-5 mt-5 w-full justify-center items-center">
            <div className=" w-full h-auto gap-3   flex items-center">
              <hr className="border-demotext   w-full"/>
              <p className="text-white">Or</p>
              <hr className="w-full  border-demotext "/>
            </div>
            <div className="w-full h-10 rounded-lg gap-2 bg-black2 text-white flex justify-center items-center text-base hover:cursor-pointer" onClick={()=>{window.location.href = 'https://middlemanbackend.onrender.com/auth/google'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 11.3284 21.9682 10.6647 21.9051 10.0156H12V14H17.6641C17.238 15.5394 16.3299 16.8066 15.0645 17.625V20.1625H18.5037C20.6712 18.7469 22 16.1044 22 12Z" fill="#4285F4"/>
                <path d="M12 22C14.88 22 17.175 21.125 18.85 19.7437L15.4108 17.625C14.5487 18.2125 13.3713 18.5562 12 18.5562C9.22061 18.5562 6.92061 16.7437 6.00366 14.3187H2.42866V16.9312C4.0951 19.9625 7.69354 22 12 22Z" fill="#34A853"/>
                <path d="M6.00366 14.3187C5.72866 13.7312 5.5713 13.0906 5.5713 12.4312C5.5713 11.7719 5.72866 11.1312 6.00366 10.5437V7.93124H2.42866C1.51561 9.59062 1 11.4562 1 12.4312C1 13.4062 1.51561 15.2719 2.42866 16.9312L6.00366 14.3187Z" fill="#FBBC05"/>
                <path d="M12 5.5C13.4449 5.5 14.7564 6.00624 15.7957 6.93125L18.95 3.775C16.975 2 14.88 1 12 1C7.69354 1 4.0951 3.03748 2.42866 6.06873L6.00366 8.68124C6.92061 6.25624 9.22061 5.5 12 5.5Z" fill="#EA4335"/>
              </svg>
              <p>Google</p>
            </div>
            <p className="text-white">Dont have an account? <span className="text-purple font-semibold  hover:cursor-pointer" onClick={changeForm}>Signup</span></p>
          </div>
        </form>
        :
        <form onSubmit={signUpHandSubmit} className="bg-black w-109 hidden h-108 sm:w-1065 md:w-106 lg:w-109 xl:w-107 lg:h-full lg:flex flex-col justify-center  px-4 ">
          <div className="flex flex-col  w-full justify-center items-center">         
            <div className="w-full flex items-center flex-col">
            <p className={`text-sm text-red-500 sm:text-base  ${errorMsg?.message?.username?'visible':'invisible'} `}>{errorMsg?.message?.username == '' || errorMsg?.message?.username == undefined?'a':errorMsg?.message?.username}</p>
            <input required type="email" className="w-full h-10  bg-black border    border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter an email" onChange={e=>{setEmail(e.target.value)}} value={email}   />
            </div>
            <div className='w-full flex items-center flex-col  pt-3 pb-7 '>
            <p className={`text-sm text-red-500 sm:text-base  ${errorMsg?.message?.password?'visible':'invisible'} `}>{errorMsg?.message?.password == '' || errorMsg?.message?.password == undefined?'a':errorMsg?.message?.password}</p>
            <input required maxLength={6} type="password" className="w-full h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" placeholder="Enter a password" onChange={e=>{setPassword(e.target.value)}} value={password}   />
            </div>
            <button className="w-full h-10 rounded-lg bg-purple flex justify-center items-center text-white text-base">{!ran?`Sign Up`:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' >            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.929 4.929L7.757 7.757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.243 16.243L19.071 19.071" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.929 19.071L7.757 16.243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.243 7.757L19.071 4.929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></motion.div>}
            </button>
          </div>
          <div className="flex flex-col gap-5 mt-5 w-full justify-center items-center">
            <div className=" w-full h-auto gap-3   flex items-center">
              <hr className="border-demotext   w-full"/>
              <p className="text-white">Or</p>
              <hr className="w-full  border-demotext "/>
            </div>
            <div className="w-full h-10 rounded-lg gap-2 bg-black2 text-white flex justify-center items-center text-base" onClick={()=>{window.location.href = 'https://middlemanbackend.onrender.com/auth/google'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 11.3284 21.9682 10.6647 21.9051 10.0156H12V14H17.6641C17.238 15.5394 16.3299 16.8066 15.0645 17.625V20.1625H18.5037C20.6712 18.7469 22 16.1044 22 12Z" fill="#4285F4"/>
                <path d="M12 22C14.88 22 17.175 21.125 18.85 19.7437L15.4108 17.625C14.5487 18.2125 13.3713 18.5562 12 18.5562C9.22061 18.5562 6.92061 16.7437 6.00366 14.3187H2.42866V16.9312C4.0951 19.9625 7.69354 22 12 22Z" fill="#34A853"/>
                <path d="M6.00366 14.3187C5.72866 13.7312 5.5713 13.0906 5.5713 12.4312C5.5713 11.7719 5.72866 11.1312 6.00366 10.5437V7.93124H2.42866C1.51561 9.59062 1 11.4562 1 12.4312C1 13.4062 1.51561 15.2719 2.42866 16.9312L6.00366 14.3187Z" fill="#FBBC05"/>
                <path d="M12 5.5C13.4449 5.5 14.7564 6.00624 15.7957 6.93125L18.95 3.775C16.975 2 14.88 1 12 1C7.69354 1 4.0951 3.03748 2.42866 6.06873L6.00366 8.68124C6.92061 6.25624 9.22061 5.5 12 5.5Z" fill="#EA4335"/>
              </svg>
              <p>Google</p>
            </div>
            <p className="text-white">Already have an account? <span className="text-purple hover:cursor-pointer font-semibold"onClick={changeForm}>SignIn</span></p>
          </div>
        </form>}
        <div className="overflow-x-hidden ">
        <div  className={`w-full text-white z-10   flex sm:text-lg  flex-col justify-around items-center h-104 before:pointer-events-none ${fixedBody?'-top-80 sm:-top-96':' top-16'}  lg:hidden transition-all duration-500 fixed   before:h-103 before:w-full before:absolute before:bg-opacity-20 backdrop-blur-2xl`}>
                <NavLink to={'/landingPage/phoneSignin'} className={''}><p className="font-bold text-white z-30 ">Sign In</p></NavLink>
                <NavLink to={'/landingPage/phoneSignup'}><p className="font-bold text-white z-30 ">Sign Up</p></NavLink>
                <p className="font-bold text-white z-30 hover:cursor-pointer " onClick={()=>{scrolltoPage(aboutRef)}}>About Us</p>
                <p className="font-bold text-white z-30 hover:cursor-pointer" onClick={()=>{scrolltoPage(contactRef)}}>Contact Us</p>
        </div>
        <div className="lg:px-7 lg:pt-7 px-4 sm:px-6 md:px-8       flex flex-col gap-7 sm:gap-10 lg:gap-9 ">
          <div className="flex flex-col  lg:items-center relative    justify-between w-full gap-4 ">
              <div className="flex lg:hidden bg-black2  pt-4 sm:pt-6 z-20  justify-between items-center ">
                <img src={'data:image/png;base64,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'} className="bg-no-repeat bg-cover bg-center object-cover rounded-full w-10 h-10 sm:w-11 sm:h-11"/> 
                {/* <div className="flex items-center gap-2 sm:gap-4">
                  <NavLink to={'/landingPage/phoneSignin'}><button className="w-full bg-purple px-4 sm:px-6 py-1 rounded-full sm:py-2 text-white">SignIn</button></NavLink>
                  <NavLink to={'/landingPage/phoneSignup'}><button className="w-full sm:px-6 bg-purple px-4 py-1 sm:py-2 rounded-full text-white">SignUp</button></NavLink>
                </div>  */}
                {/* <FaBars className="text-white text-2xl sm:text-3xl"/> */}
                <div className="menu" >
                  <label className="hamburger">
                       <input type="checkbox" className="ham" onChange={toggleMenu} checked={menuOpen}  /> 
                      <svg viewBox="0 0 32 32" onClick={changeIcon}>
                          <path className={`line line-top-bottom ${menuOpen ? '' : ''}`}
                              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                          </path>
                          <path className={`line `} d="M7 16 27 16"></path>
                      </svg>
                  </label>
                 </div>
              </div>
              <img src={'data:image/png;base64,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'} className="bg-no-repeat bg-cover object-cover bg-center rounded-full w-24 h-24 hidden lg:block"/>
              <div className="flex flex-col items-center gap-1 sm:gap-2 mt-3 sm:mt-5 lg:mt-0">
                <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}  variants={textRevealVariants} className="text-white font-bold text-lg sm:text-2xl">Welcome to The Middleman</motion.h1>
                <motion.h2 className="text-white text-center text-sm font-sans sm:text-base"   variants={textRevealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>Your Trusted Escrow Service for Secure Transactions...</motion.h2>
              </div>
          </div>
          {middlemanImage&&<motion.div ref={aboutRef}  style={{ display: imageLoaded ? "visible" : "invisible" }} className="w-full  rounded-xl h-auto  md:pb-6 md:pr-0 md:pl-6 md:pt-6 mt-3 sm:mt-5 gap-7 sm:gap-10 md:gap-0    md:bg-black  flex flex-col md:flex-row   "  variants={textRevealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            {/* <img src={middlemanImage} onLoad={handleImageLoad} className="bg-no-repeat before:bg-black before:absolute before:w-full before:h-auto bg-cover bg-center  md:w-105 h-auto rounded-xl    w-full object-cover  "/>  */}
            <div className="middleman md:w-105  w-full h-auto"><img src={middlemanImage} onLoad={handleImageLoad} className="bg-no-repeat bg-cover bg-center  h-full rounded-xl    w-full object-cover  "/> </div>
            <div className="md:w-105 md:pb-6 p-4 bg-black sm:p-5 md:pt-0 rounded-lg md:rounded-none  md:pl-5 md:pr-2 flex flex-col gap-3 md:gap-1">
              <motion.h1 className="font-bold text-purple text-xl lg:text-2xl text-center " variants={textRevealVariants}>About us</motion.h1>
              <motion.div variants={textRevealVariants}>
                <p className="text-white text-sm leading-loose sm:leading-loose sm:text-base text-center     ">In the digital age, trust can be a tricky thing. Whether you're buying or selling goods and services online, the risk of scams and fraud can make even the simplest transactions nerve-wracking. That's where The Middleman comes in.The Middleman is here to facilitate your transactions with the utmost security and reliability.</p>
              </motion.div>
            </div>
          </motion.div>}
          <motion.div className="p-4 md:p-5 w-full bg-black rounded-xl flex flex-col gap-3" variants={containerVariants} initial="hidden"whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <motion.h1 className="text-purple font-bold text-xl text-center md:text-start lg:text-2xl"variants={textRevealVariants}> How It Works</motion.h1>
            <div className="text-white text-sm sm:text-base flex flex-col gap-4 sm:gap-5">
              <div className="flex gap-2 items-start" >
                <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>1</motion.div>
                <motion.p  variants={textRevealVariants}>Buyer and Seller Agreement - The buyer and seller agree on the terms of the transaction.</motion.p>
              </div>
              <div className="flex gap-2 items-start" >
                <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>2</motion.div>
                <motion.p variants={textRevealVariants}>Secure Payment - The buyer deposits the payment with The Middleman.</motion.p>
              </div>
              <div className="flex gap-2 items-start" >
                <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>3</motion.div>
                <motion.p variants={textRevealVariants}>Product Delivery - The seller ships the product or provides the service.</motion.p>
              </div>
              <div className="flex gap-2 items-start" >
                <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>4</motion.div>
                <motion.p variants={textRevealVariants}>Confirmation - The buyer confirms receipt and satisfaction with the item.</motion.p>
              </div>
              <div className="flex gap-2 items-start" >
                <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>5</motion.div>
                <motion.p variants={textRevealVariants}>Release of Funds - The Middleman releases the payment to the seller.</motion.p>
              </div>
            </div>
          </motion.div>
          <div className="flex overflow-div  gap-4 md:gap-7 lg:gap-10 w-full overflow-x-auto flex-shrink-0">
            <div className="min-w-160 sm:min-w-150  lg:w-full lg:min-w-0 flex justify-center items-center  h-103 rounded-xl middleman ">
            <img className="w-full h-full rounded-xl object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMC8MATCpYvF5iA-CX7wRvVszbPnYyu85Vg&s"/>
            <p className="absolute text-white z-50 font-bold text-2xl sm:text-3xl  ">Secure</p>
            </div>
            <div className="min-w-160 sm:min-w-150  lg:w-full lg:min-w-0 flex justify-center items-center h-103 rounded-xl middleman ">
            <img className="w-full h-full rounded-xl  " src="data:image/jpeg;base64,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"/>
            <p className="absolute  text-white z-50 font-bold text-2xl sm:text-3xl ">24/7 Support</p>
            </div>
            <div className="min-w-160 sm:min-w-150  lg:w-full lg:min-w-0 flex justify-center items-center h-103 rounded-xl middleman ">
            <img className="w-full h-full rounded-xl object-cover" src='data:image/jpeg;base64,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'/>
            <p className="absolute  text-white z-50 font-bold text-2xl sm:text-3xl ">Fast & <br/><span className="">Reliable</span></p>
            </div>
           
          </div>
          <motion.div className="p-4 md:p-5 w-full bg-black rounded-xl flex flex-col gap-3"variants={containerVariants}initial="hidden"whileInView="visible"viewport={{ once: true, amount: 0.5 }}>
            <motion.h1 className="text-purple font-bold text-xl text-center md:text-start lg:text-2xl"variants={textRevealVariants}>Why Choose Us?</motion.h1>
            <div className="text-white text-sm sm:text-base flex flex-col gap-4 sm:gap-5">
              <div className="flex gap-2 items-start" >
                <motion.div  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>1</motion.div >
                <motion.p variants={textRevealVariants}>Safety First - We hold the payment securely until the buyer confirms they've received the product or service.</motion.p>
              </div>
              <div className="flex gap-2 items-start" >
                <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>2</motion.div>
                <motion.p variants={textRevealVariants}>Peace of Mind - Both buyers and sellers  can engage in transactions with confidence,  knowing their funds and products  are protected.</motion.p>
              </div>
              <div className="flex gap-2 items-start" >
                <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>3</motion.div>
                <motion.p variants={textRevealVariants}>User-Friendly - Our platform is designed to be intuitive and easy to use, making the process smooth and hassle-free.</motion.p>
              </div>
            </div>
          </motion.div>
          <motion.div ref={contactRef} className="py-4 sm:p-4 md:p-5 px-2  w-full bg-black rounded-xl flex flex-col gap-3" variants={containerVariants} initial="hidden"whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <motion.h1 className="text-purple font-bold text-xl text-center md:text-start lg:text-2xl"variants={textRevealVariants}> Contact us</motion.h1>
              <div className="w-full flex gap-5   flex-col md:flex-row items-center text-white">
                  <div className="w-full flex flex-row md:flex-col items-center gap-3 md:gap-2 p-3  h-20 sm:h-24 md:h-52  border  border-black2 hover:cursor-pointer  rounded-xl bg-black">
                    <div className="bg-purple w-11 h-11 sm:w-14 sm:h-14  flex-shrink-0 rounded-full flex items-center justify-center">
                    <svg 
                      className="sm:w-5 sm:h-5 w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M22 16.92V20C22 20.5523 21.5523 21 21 21C10.0589 21 3 13.9411 3 3C3 2.44772 3.44772 2 4 2H7.08C7.58936 2 8.02452 2.38604 8.11674 2.8894L8.99923 7.47029C9.08529 7.93927 8.86167 8.41359 8.43605 8.62757L6.113 9.78294C7.5403 13.0365 10.9635 16.4597 14.217 17.887L15.3724 15.564C15.5864 15.1383 16.0607 14.9147 16.5297 15.0008L21.1106 15.8833C21.614 15.9755 22 16.4106 22 16.92Z" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                    </svg>

                    </div>
                    <div className="w-full flex flex-col  md:gap-2 md:items-center ">
                      <p className="text-base sm:text-lg font-semibold">Phone Number</p>
                      <p className="text-sm sm:text-base font-sans">+125-639-075-355</p> 
                    </div>
                  </div>
                  <div className="w-full flex flex-row md:flex-col items-center gap-3 md:gap-2 p-3  h-20 sm:h-24 md:h-52  border  border-black2 hover:cursor-pointer  rounded-xl bg-black">
                      <div className="bg-purple w-11 h-11 sm:w-14 sm:h-14   flex-shrink-0 rounded-full flex items-center justify-center">
                      <svg 
                        className="sm:w-5 sm:h-5 w-4 h-4 " 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M3 8L12 13L21 8M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" 
                          stroke="currentColor" 
                          stroke-width="2" 
                          stroke-linecap="round" 
                          stroke-linejoin="round"/>
                      </svg>

                      </div>  
                      <div className="w-full flex flex-col  md:gap-2 md:items-center md:h-full ">  
                        <p className="text-base sm:text-lg font-semibold">Support Team</p>
                        <div className="flex w-full justify-between md:h-full md:flex-col">
                        <p className="text-sm sm:text-base font-sans md:text-center">Tap to chat support team</p> 
                        </div>
                      </div>
                  </div>
                  <div className="w-full flex flex-row md:flex-col items-center gap-3 md:gap-2 p-3 h-20 sm:h-24 md:h-52  border  border-black2 hover:cursor-pointer rounded-xl bg-black">
                    <div className="bg-purple w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0 rounded-full flex items-center justify-center">
                    <svg 
                      className="sm:w-5 sm:h-5 w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M21 15C21 16.1046 20.1046 17 19 17H7L3 21V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V15Z" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                    </svg>

                    </div>
                    <div className="w-full flex flex-col md:gap-2 md:items-center ">
                      <p className="text-base sm:text-lg font-semibold">Send Mail</p>
                      <p className="text-sm sm:text-base font-sans">Tap to send mail</p>
                    </div> 
                  </div>
              </div>
          </motion.div>

          <motion.div id="about" className="p-4 md:p-5 w-full bg-black rounded-xl flex flex-col gap-3"variants={containerVariants}initial="hidden"whileInView="visible"viewport={{ once: true, amount: 0.5 }}>
            <motion.h1 className="text-purple font-bold text-xl text-center md:text-start lg:text-2xl"variants={textRevealVariants}>Third-Party Involvement</motion.h1>
            <div className="text-white text-sm sm:text-base flex flex-col gap-4 sm:gap-5">
              <div className="flex gap-2 items-start" >
                <motion.div  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>1</motion.div >
                <motion.p variants={textRevealVariants}>Buyer's Third Party - if the buyer cannot receive the product personally,thy can designate a trusted third party to pick up and confirm receipt of the product on their behalf.</motion.p>
              </div>
              <div className="flex gap-2 items-start" >
                <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>2</motion.div>
                <motion.p variants={textRevealVariants}>Seller's Third Party - Similarly,if the seller cannot deliver the product personally,they can designate a trusted third party to deliver the product and confirm that the transaction is successfully. </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
        <footer className={` bg-black  w-full  text-white px-5 sm:px-14 md:px-10 lg:px-16 mt-3  py-8 sm:py-10  bottom-0 `}>
                <div className='flex flex-col md:flex-row items-center justify-center  md:items-end border-b-0.5   '>
                    <div className='flex flex-col justify-center md:flex-row md:items-end items-center     '>
                        <div className='md:border-r-0.5 pb-5 sm:pb-7 md:pb-0 md:pr-5 lg:pr-7 xl:pr-10 flex items-center   '>
                            <h1 className='font-bold text-lg sm:text-xl '>Middleman</h1>
                        </div>
                    </div>

                    <ul className='flex flex-col items-center justify-center md:flex-row gap-5 sm:gap-7 md:gap-5 lg:gap-8 xl:gap-14 text-sm sm:text-base'>
                        <li className="hover:cursor-pointer" onClick={scrolltoTop}>BackToTop</li>
                        <li onClick={()=>{scrolltoPage1(contactRef)}} className="hover:cursor-pointer">Contact Us</li>
                        <li onClick={()=>{scrolltoPage1(aboutRef)}} className="hover:cursor-pointer">About Us</li>
                    </ul>
                </div>
                <div className='flex items-center gap-5  flex-col-reverse  pt-5 md:justify-between sm:pt-7 '>
                    <div className='flex justify-center gap-5 md:gap-4 flex-col-reverse md:flex-row  lg:gap-6 xl:gap-8'>
                        <p className='whitespace-nowrap text-sm sm:text-base'>Copyright 2023 Middleman.All rights reserved. </p>
                        <div className='flex justify-center text-sm sm:text-base gap-6 md:gap-4 lg:gap-5 xl:gap-7 font-semibold'>
                            <p className=' whitespace-nowrap hover:cursor-pointer'>Privacy policy</p>
                            <p className=' whitespace-nowrap hover:cursor-pointer'>Terms of use</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-7 md:gap-4 lg:gap-10 text-lg sm:text-xl'>
                        <FaInstagram className="hover:cursor-pointer"/>
                        <FaFacebook className="hover:cursor-pointer" />
                        <FaTwitter className="hover:cursor-pointer" />
                    </div>
                </div>
        </footer>
      </div>
    </div>
  )
}

export default Login