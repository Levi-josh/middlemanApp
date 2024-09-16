import { FaUser } from 'react-icons/fa';
import {FaArrowLeft, FaMessage} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import {FaArrowRotateLeft  } from "react-icons/fa6"

const Customers = () => {
  interface messageSchema {
    from: String,
    to: String,
    message: String,
    timestamp: String
  }
  interface customs {
    username:String,
    userId:String,
    socketId:String,
    messages:messageSchema[],
    read:Boolean,
    msgUnread:Number,
    profilePic:String,
  }

const [customers, setCustomers] = useState<customs[]|null>();
const [errors, setErrors] = useState<String>('');
const [retry,setRetry] = useState<boolean>(false)
const Id = localStorage.getItem('Id')
useEffect(()=>{
const fetchUsers = async()=>{
  const option = {
    method: 'Get',
    headers: {
        'content-type': 'application/json',
    },
}
try {
    const response = await fetch(`https://middlemanbackend.onrender.com/getCustom/${Id}`, option);
    const data = await response.json()
    setCustomers(data)
   console.log(data)
}
catch (err:any) {
  console.log(err)
  setErrors(err)
}
}
fetchUsers()
},[Id,retry])
  return (
    <div className='w-full h-screen bg-black fixed'>
    <div className=" h-full w-full  text-white flex flex-col justify-center items-center ">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
   <div className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105  gap-5 sm:gap-7">
   <div className="flex flex-col items-center gap-5 sm:gap-7">
     <div className="flex flex-col items-center gap-3 w-full">
       <div className='sm:h-16 sm:w-16 w-14 h-14 rounded-full flex justify-center items-center   text-white bg-purple' ><FaUser  className="w-5 h-5 sm:w-6 sm:h-6"/></div>
       {customers&&<h1 className="text-white text-center text-base sm:text-lg font-semibold  ">Customers</h1>}
     </div>
     {customers?.length===1&&<p className="text-white text-center  text-sm sm:text-base ">These are list of people you accepted or sent an invite</p>}
    </div> 
     <div className="flex flex-col  w-full items-center    ">
     {customers&&customers.length>0?customers?.map((prev:any)=>(
       <div className="w-full  border-b border-demotext  p-4 sm:p-6 flex  items-center justify-between">
        <div className='w-full h-full flex items-center gap-5'>
            <div className="sm:w-14 sm:h-14 w-12 h-12 overflow-hidden rounded-full bg-black2">
              <img src={prev?.profilePic}/>
            </div>
            <div>
              <div className='flex items-center gap-3 w-full '><p className='sm:text-lg font-semibold'>{prev.username}</p></div>
            </div>
         </div>
         <NavLink to={`/chat/${prev.userId}`}><div className='flex items-center gap-1 sm:gap-2 h-10 hover:cursor-pointer text-sm sm:text-base bg-purple rounded-lg px-2 sm:px-3'><p>message</p><FaMessage className='mt-1'/></div></NavLink>
       </div>)): customers&&customers.length===0?(<p className='text-white mt-20  sm:text-lg font-semibold '>No customers yet!</p>)
       :
       (<div className="flex justify-center lg:mt-20 mt-28 md:mt-32  ">{errors?<div className='bg-purple px-6 py-1 sm:px-10 hover:cursor-pointer h-auto  rounded-full flex items-center gap-1' onClick={()=>setRetry((prev:boolean)=>!prev)}><FaArrowRotateLeft/><p >Retry</p></div>:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' >            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 18V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.929 4.929L7.757 7.757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.243 16.243L19.071 19.071" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.929 19.071L7.757 16.243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.243 7.757L19.071 4.929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></motion.div>}
      </div>)
       
       }

     </div>
   </div>
   </div>
 </div>
  )
}

export default Customers