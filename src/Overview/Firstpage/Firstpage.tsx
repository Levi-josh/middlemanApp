import { useState,useEffect } from 'react';
import { FaCamera, FaLink,  FaArrowRotateLeft } from "react-icons/fa6"
import Header from "../../Header/Header"
import Dashboard from "./Dashboard"
import { NavLink } from 'react-router-dom';
import { FaHistory,FaUser, } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Firstpage = () => {
const [scrollPosition, setScrollPosition] = useState<number>(0);

const scrolldiv = (e:any)=>{
// const current = scrollPosition-e.target.scrollTop
setScrollPosition(e.target.scrollTop)
}
interface message {
  from: String,
  to: String,
  message: String,
  timestamp:Date
}
interface Chat {
  username:String,
  userId:String,
  socketId:String,
  messages:message[],
  read:Boolean,
  msgUnread:Number,
  profilePic:String,
}
interface User {
  _id: string;
  email: string;
  socketId: string;
  username: string;
  password: string;
  balance: number;
  chats: Chat[];
  inviteCode: string;
  notification: any[];
  pending: number;
  profilePic: string;
  transaction: any[];
  walletId: string;
  __v: number;
}
const [users, setusers] = useState<User|null>();
const [errors, setErrors] = useState<String>('');
const [retry,setRetry] = useState<boolean>(false)
const storedDataString = localStorage.getItem('myData');

useEffect(()=>{
  setusers(null)
  setErrors('')
const fetchUsers = async()=>{
try {
    const response = await fetch(`https://middlemanbackend.onrender.com/getusers`,{
      method: 'Get',
      credentials: 'include',
  });
    const data = await response.json()
    setusers(data)
}
catch (err:any) {
  setErrors(err)
}
}
storedDataString&&fetchUsers()
},[retry])
  return (
    <div className="w-full overflow-x-hidden lg:overflow-auto   bg-black2    lg:px-5 lg:w-107 xl:w-1075 lg:h-screen h-full " onScroll={scrolldiv}>
    <Header scrollPosition={scrollPosition} profilePic={users?.profilePic}/>
    <div className="flex flex-col px-3  sm:px-5 lg:px-0  mb-32 sm:mb-0 justify-between bg-black2   lg:gap-6 pt-14 sm:pt-0  lg:flex-row lg:justify-between lg:h-103  lg:items-center h-full sm:h-10008   ">
      <div className="lg:w-107 w-full rounded-lg h-102 lg:h-full  bg-black px-5 sm:px-6 lg:px-7    flex-col flex justify-evenly items-start ">
        <div className="flex items-center  gap-3 sm:gap-6 lg:gap-4  ">
        <div className="sm:w-20 sm:h-20  w-14 h-14 rounded-full overflow-hidden bg-black2 outline outline-3 flex justify-center items-center outline-purple">
        {users?.profilePic?<img src={users?.profilePic} className='sm:w-20  sm:h-20 object-cover   w-14 h-14 rounded-full  '/>:<div className='sm:h-20 bg-black   w-14 h-14 rounded-full sm:w-20 sm:text-lg flex items-center justify-center text-white'><FaCamera/></div>}
        </div>
        {users?.username&&<div className='flex flex-col text-white   '>
          <p className='text-sm sm:text-base'>Hello,</p>
          <p className=" text-sm sm:text-base  font-semibold">{users?.username}</p>
        </div>}
        </div>
        {users?.walletId?<div className="flex items-center justify-between  gap-5 w-full">
          {/* <p className=" text-white font-semibold   text-sm sm:text-base">WalletAddress : {users?.walletId && window.matchMedia('(max-width: 600px)').matches? `${(users?.walletId)?.slice(0,20)}...`:users?.walletId}</p> */}
          <p className='text-sm text-white sm:text-base'>Click to see all your transaction history</p>
          <NavLink to={'/history'}> <div className=" w-6 h-6 sm:w-8 sm:h-8  flex justify-center items-center rounded-full bg-purple"><svg  className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L9 16M5 12L9 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 12H19M19 12L15 16M19 12L15 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></div></NavLink>
        </div>
          :
        <div className="flex items-center text-white justify-end  w-full">
         {errors?<div className='flex items-center gap-5 sm:gap-8 lg:gap-10'><p className='text-white text-base sm:text-lg'>something went wrong</p><div className='bg-purple px-3 py-1 sm:px-5 hover:cursor-pointer  rounded-full flex items-center gap-1' onClick={()=>setRetry((prev:boolean)=>!prev)}><FaArrowRotateLeft/><p>Retry</p></div></div>:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' > <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>}
      </div> 
      <div className="flex flex-row gap-3  items-center h-1006 lg:justify-between lg:h-full lg:w-103 lg:flex-col">
        <NavLink to={'/invite'} className={'w-full h-full  '}><div className="flex w-full h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">Invite</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaLink className="text-white"/></div></div></NavLink>
        <NavLink to={'/customers'} className={'w-full h-full '}><div className="flex w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">Customers</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaUser className="text-white"/></div></div></NavLink>
        <NavLink to={'/support'} className={'w-full h-full '}><div className="flex  w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">Support</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaHistory className="text-white"/></div></div></NavLink>
      </div>
      <div className=" h-106 sm:h-105 lg:h-1055 w-full lg:hidden   "><Dashboard balance={users?.balance} pending={users?.pending}/></div>
    </div>
    <div className=" h-106 sm:h-105 lg:h-1055 w-full hidden lg:block   "><Dashboard balance={users?.balance} pending={users?.pending}/></div>
    </div>
  )
}

export default Firstpage