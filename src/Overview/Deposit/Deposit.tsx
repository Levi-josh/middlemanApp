import { FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useState,FormEvent} from "react"
import { motion } from 'framer-motion';

interface errMessage{
  username:string,
  password:string,
  otherErr:string
}
interface ErrorMessage {
  message: errMessage;
}

const Deposit = () => {
  const [amount,setAmount]=useState("")
  const userId= localStorage.getItem('Id')
  const [data,setData]=useState("")
  const [errorMsg,setErrorMsg] = useState<ErrorMessage|null>()
  const [ran,setRan]=useState(false)
  const handSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setRan(true)
    const option = {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify({amount, userId})
    }
    try {
        const response = await fetch(` https://middlemanbackend.onrender.com/deposit`, option);
        const data = await response.json();
        if (!response.ok) {
          setRan(false);
          setErrorMsg({message:data.errorMessage})
        }else{
          setData(data)
          setTimeout(() => {
            setRan(false)  
        }, 3000); 
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
  return (
    <div className="w-full h-screen fixed bg-black overflow-auto flex justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
    <form onSubmit={handSubmit}  className="flex flex-col pb-10 lg:pb-0 w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
    <div className="flex flex-col gap-5 items-center sm:gap-7 w-full">
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className='sm:h-16 sm:w-16 w-14 h-14 rounded-full flex justify-center items-center  text-white bg-purple' ><svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V15M12 15L7 10M12 15L17 10M5 20H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <h1 className="text-white text-center text-base sm:text-lg  font-semibold  ">Deposit</h1>
        </div>
      <p className="text-white text-center  text-sm sm:text-base ">Enter amount to add some money to your account balance</p>
      </div>
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <input type="text" required className="w-full h-10 sm:h-12 lg:h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter amount" onChange={(e)=>setAmount(e.target.value)}  />
      </div>
      <p className={`text-sm text-red-500 sm:text-base font-semibold ${errorMsg?.message?.otherErr?'visible':'invisible'} `}>{errorMsg?.message?.otherErr}</p>
    </div>
    <button className="bg-purple  text-white flex justify-center items-center   w-full rounded-lg h-10  sm:h-12 lg:w-108 xl:w-107">{!ran?`Deposit`:data?`Sent`:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' >            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </form>
</div>
  )
}

export default Deposit