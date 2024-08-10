import { useState,FormEvent} from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion';


const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate = useNavigate()
const [switchForm,setSwitchForm] = useState<boolean>(true)

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

// const itemFromLeftVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0 },
//   transition: {
//     type: "tween",
//     duration: 2,
//     ease: "easeInOut"
//   }
// };

// const itemFromRightVariants = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0 },
//   transition: {
//     type: "tween",
//     duration: 2,
//     ease: "easeOut"
//   }
// };


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


const signUpHandSubmit = async(e:FormEvent<HTMLFormElement>)=>{

    e.preventDefault();
    const option = {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify({email,password})
    }
    try {
        const response = await fetch(` https://middlemanbackend.onrender.com/signup`, option);
        const data = await response.json()
        data && navigate('/landingPage/otp')
        
    }
    catch (err) {
    console.log(err)
    }

}
const signInHandSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const option = {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify({email,password})
    }
    try {
        const response = await fetch(` https://middlemanbackend.onrender.com/signin`, option);
        const data = await response.json()
        data && navigate('/')
        
    }
    catch (err) {
    console.log(err)
    }

}
const changeForm = () => {
  setSwitchForm(prev => !prev)
}

  return (
    <div className="bg-black2  w-full h-full px-4 sm:px-6 md:px-8 lg:px-0 lg:flex justify-center overflow-auto  lg:justify-normal fixed  ">
      {switchForm ?
        <form onSubmit={signUpHandSubmit} className="bg-black w-109 hidden h-108 sm:w-1065 md:w-106 lg:w-109 xl:w-107 lg:h-full lg:flex flex-col justify-center  px-4 ">
          <div className="flex flex-col gap-7 w-full justify-center items-center">
            <input type="email" className="w-full h-10  bg-black border    border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter an email" onChange={e=>{setEmail(e.target.value)}} value={email}   />
            <input type="password" className="w-full h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" placeholder="Enter a password" onChange={e=>{setPassword(e.target.value)}} value={password}   />
            <button className="w-full h-10 rounded-full bg-purple text-white text-base">Sign In</button>
          </div>
          <div className="flex flex-col gap-5 mt-5 w-full justify-center items-center">
            <div className=" w-full h-auto gap-3   flex items-center">
              <hr className="border-demotext   w-full"/>
              <p className="text-white">Or</p>
              <hr className="w-full  border-demotext "/>
            </div>
            <div className="w-full h-10 rounded-full bg-black2 text-white flex justify-center items-center text-base hover:cursor-pointer" onClick={()=>window.location.href = 'http://localhost:3500/auth/google'}>Google</div>
            <p className="text-white">Dont have an account? <span className="text-purple font-semibold  hover:cursor-pointer" onClick={changeForm}>Signup</span></p>
          </div>
        </form>
        :
        <form onSubmit={signInHandSubmit} className="bg-black w-109 hidden h-108 sm:w-1065 md:w-106 lg:w-109 xl:w-107 lg:h-full lg:flex flex-col justify-center  px-4 ">
          <div className="flex flex-col gap-7 w-full justify-center items-center">
            <input type="email" className="w-full h-10  bg-black border    border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter an email" onChange={e=>{setEmail(e.target.value)}} value={email}   />
            <input type="password" className="w-full h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" placeholder="Enter a password" onChange={e=>{setPassword(e.target.value)}} value={password}   />
            <button className="w-full h-10 rounded-full bg-purple text-white text-base">Sign Up</button>
          </div>
          <div className="flex flex-col gap-5 mt-5 w-full justify-center items-center">
            <div className=" w-full h-auto gap-3   flex items-center">
              <hr className="border-demotext   w-full"/>
              <p className="text-white">Or</p>
              <hr className="w-full  border-demotext "/>
            </div>
            <div className="w-full h-10 rounded-full bg-black2 text-white flex justify-center items-center text-base">Google</div>
            <p className="text-white">Already have an account? <span className="text-purple hover:cursor-pointer font-semibold"onClick={changeForm}>SignIn</span></p>
          </div>
        </form>}
        <div className="lg:px-7 lg:py-7 py-4 sm:py-6 overflow-auto flex flex-col gap-7 sm:gap-10 lg:gap-9 ">
          <div className="flex flex-col lg:items-center  justify-between w-full gap-4 ">
              <div className="flex lg:hidden   justify-between items-center ">
                <img src={'data:image/png;base64,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'} className="bg-no-repeat bg-cover bg-center object-cover rounded-full w-12 h-12 sm:w-16 sm:h-16"/> 
                <div className="flex items-center gap-2 sm:gap-4">
                  <NavLink to={'/landingPage/phoneSignin'}><button className="w-full bg-purple px-4 sm:px-6 py-1 rounded-full sm:py-2 text-white">SignIn</button></NavLink>
                  <NavLink to={'/landingPage/phoneSignup'}><button className="w-full sm:px-6 bg-purple px-4 py-1 sm:py-2 rounded-full text-white">SignUp</button></NavLink>
                </div> 
              </div>
              <img src={'data:image/png;base64,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'} className="bg-no-repeat bg-cover object-cover bg-center rounded-full w-24 h-24 hidden lg:block"/>
              <div className="flex flex-col items-center gap-1 sm:gap-2 mt-3 sm:mt-5 lg:mt-0">
              <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}  variants={textRevealVariants} className="text-white font-bold text-lg sm:text-2xl">Welcome to The Middleman</motion.h1>
              <motion.h2 className="text-white text-center text-sm font-sans sm:text-base"   variants={textRevealVariants}
               initial="hidden"
               whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>Your Trusted Escrow Service for Secure Transactions...</motion.h2>
              </div>
          </div>
          <motion.div className="w-full  rounded-xl h-auto  md:pb-0 md:pr-0 md:pl-6 md:pt-6 mt-3 sm:mt-5   bg-black  flex flex-col md:flex-row   "      variants={containerVariants}
          initial="hidden"
          whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}>
            <motion.img src={'data:image/jpeg;base64,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'} className="bg-no-repeat bg-cover bg-center  md:w-105 h-auto rounded-t-xl  md:rounded-s-lg md:rounded-e-none w-full object-cover  " variants={textRevealVariants}/> 
            <div className="md:w-105 md:pb-6 p-3 sm:p-5 md:pt-0  md:pl-5 md:pr-2 flex flex-col gap-3 md:gap-1">
              <motion.h1 className="font-bold text-purple text-xl lg:text-2xl text-center " variants={textRevealVariants}>About us</motion.h1>
              <motion.div variants={textRevealVariants}>
                <p className="text-white text-sm leading-loose sm:leading-loose sm:text-base text-center     ">In the digital age, trust can be a tricky thing. Whether you're buying or selling goods and services online, the risk of scams and fraud can make even the simplest transactions nerve-wracking. That's where The Middleman comes in.The Middleman is here to facilitate your transactions with the utmost security and reliability.</p>
              </motion.div>
            </div>
      </motion.div>
      <motion.div className="p-4 md:p-5 w-full bg-black rounded-xl flex flex-col gap-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}>
        <motion.h1 className="text-purple font-bold text-xl text-center md:text-start lg:text-2xl"variants={textRevealVariants}>
          How It Works
        </motion.h1>
      <div className="text-white text-sm sm:text-base flex flex-col gap-4 sm:gap-5">
        <div className="flex gap-2 items-start" >
          <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>1</motion.div>
          <motion.p variants={textRevealVariants}>Buyer and Seller Agreement - The buyer and seller agree on the terms of the transaction.</motion.p>
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
    <motion.div
      className="p-4 md:p-5 w-full bg-black rounded-xl flex flex-col gap-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}>
      <motion.h1 className="text-purple font-bold text-xl text-center md:text-start lg:text-2xl"variants={textRevealVariants}>
        Why Choose Us?
      </motion.h1>
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
    <motion.div
      className="p-4 md:p-5 w-full bg-black rounded-xl flex flex-col gap-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}>
      <motion.h1 className="text-purple font-bold text-xl text-center md:text-start lg:text-2xl"variants={textRevealVariants}>
        Third-Party Involvement
      </motion.h1>
      <div className="text-white text-sm sm:text-base flex flex-col gap-4 sm:gap-5">
        <div className="flex gap-2 items-start" >
          <motion.div  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>1</motion.div >
          <motion.p variants={textRevealVariants}>Buyer's Third Party - if the byer cannot receive the product personally,thy can designate a trusted third party to pick up and confirm receipt of the product on their behalf.</motion.p>
        </div>
        <div className="flex gap-2 items-start" >
          <motion.div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full bg-purple flex items-center justify-center text-xs" variants={textRevealVariants}>2</motion.div>
          <motion.p variants={textRevealVariants}>Seller's Third Party - Similarly,if the seller cannot deliver the product personally,they can designate a trusted third party to deliver the product and confirm that the transaction is successfully. </motion.p>
        </div>
      </div>
    </motion.div>
        <div>
            <p className="text-white text-sm sm:text-base text-center">Sign up now and experience the safest way to buy and sell online.</p>
        </div>
      </div>
    </div>
  )
}

export default Login