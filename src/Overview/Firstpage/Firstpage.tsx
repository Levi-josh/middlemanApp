import { useState,useEffect } from 'react';
import { FaCamera, FaCopy,FaLink, FaRotate,  } from "react-icons/fa6"
import Header from "../../Header/Header"
import Dashboard from "./Dashboard"
import { NavLink } from 'react-router-dom';
import { FaHistory,FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Firstpage = () => {
const [scrollPosition, setScrollPosition] = useState<number>(0);

const scrolldiv = (e:any)=>{
const current = scrollPosition-e.target.scrollTop
console.log(current>0?true:false)
setScrollPosition(e.target.scrollTop)
}
console.log(scrollPosition)
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
    const response = await fetch(`https://middlemanbackend.onrender.com/getusers/${Id}`, option);
    const data = await response.json()
    setusers(data)
   console.log(data)
}
catch (err:any) {
  console.log(err)
  setErrors(err)
}
}
fetchUsers()
},[])

  return (
    <div className="w-full overflow-x-hidden lg:overflow-auto   bg-black2    lg:px-5 lg:w-107 xl:w-1075 lg:h-screen h-full " onScroll={scrolldiv}>
    <Header scrollPosition={scrollPosition} profilePic={users?.profilePic}/>
    <div className="flex flex-col px-3  sm:px-5 lg:px-0  mb-32 sm:mb-0 justify-between bg-black2   lg:gap-6 pt-14 sm:pt-0  lg:flex-row lg:justify-between lg:h-103  lg:items-center h-full  ">
      <div className="lg:w-107 w-full rounded-lg h-102 lg:h-full  bg-black  px-4  lg:gap-2 flex-col flex gap-3 sm:gap-6 justify-center items-start ">
        <div className="flex flex-row items-center gap-3 sm:gap-6 lg:gap-2 lg:flex-col">
        <div className="sm:w-20 sm:h-20  w-14 h-14 rounded-full overflow-hidden bg-black2 outline outline-3 flex justify-center items-center outline-purple">
        {users?.profilePic?<img src={`https://middlemanbackend.onrender.com${users?.profilePic}`} className='sm:w-20 bg-no-repeat bg-cover bg-center sm:h-20   w-14 h-14 rounded-full  '/>:<div className='sm:h-20 bg-black   w-14 h-14 rounded-full sm:w-20 sm:text-lg flex items-center justify-center text-white'><FaCamera/></div>}
        </div>
        {/* <img src={`http://localhost:3500${users?.profilePic}`} className='sm:w-20 bg-no-repeat bg-cover bg-center sm:h-20 rounded-full   w-14 h-14  '/> */}
        <p className="text-white text-sm sm:text-base  font-bold">{users?.username}</p>
        </div>
        {users?.inviteCode?<div className="flex items-center justify-between w-full">
          <p className=" text-white font-semibold text-sm sm:text-lg lg:text-base"><span className="">Invitation code</span> : {users?.inviteCode && window.matchMedia('(max-width: 600px)').matches? `${(users?.inviteCode)?.slice(0,20)}...`:users?.inviteCode}</p>
          <FaCopy className="text-white sm:text-2xl"/>
        </div>
          :
        <div className="flex items-center text-white  justify-end w-full">
         {errors?<p>try again</p>:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' ><FaRotate/></motion.div>}
        </div>}
      </div> 
      <div className="flex flex-row gap-3  items-center h-1006 lg:justify-between lg:h-full lg:w-103 lg:flex-col">
        <NavLink to={'/invite'} className={'w-full h-full  '}><div className="flex w-full h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">Invite</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaLink className="text-white"/></div></div></NavLink>
        <NavLink to={'/customers'} className={'w-full h-full '}><div className="flex w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">Customers</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaUser className="text-white"/></div></div></NavLink>
        <NavLink to={'/history'} className={'w-full h-full '}><div className="flex  w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">History</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaHistory className="text-white"/></div></div></NavLink>
      </div>
      <div className=" h-106 sm:h-105 lg:h-1055 w-full lg:hidden   "><Dashboard balance={users?.balance} pending={users?.pending}/></div>
    </div>
    <div className=" h-106 sm:h-105 lg:h-1055 w-full hidden lg:block   "><Dashboard balance={users?.balance} pending={users?.pending}/></div>
    </div>
    // <div className="w-full overflow-x-hidden   lg:bg-black    lg:px-5 lg:w-1075 h-full " onScroll={scrolldiv}>
    // <Header scrollPosition={scrollPosition} profilePic={users?.profilePic}/>
    // <div className="flex flex-col px-3   sm:px-5 lg:px-0  mb-32 sm:mb-0 justify-between   lg:gap-6 pt-14 sm:pt-0  lg:flex-row lg:justify-between  lg:items-center h-full sm:h-10008 lg:h-103 ">
    //   <div className="lg:w-107 w-full rounded-lg h-102 lg:h-full  bg-black  px-4 lg:px-2  lg:gap-2 flex-col flex gap-3 sm:gap-6 justify-center items-start ">
    //     <div className="flex flex-row items-center gap-3 sm:gap-6 lg:gap-2 lg:flex-col">
    //     <div className="sm:w-20 sm:h-20  w-14 h-14 rounded-full overflow-hidden bg-black2 outline outline-3 flex justify-center items-center outline-purple">
    //     {users?.profilePic?<img src={`https://middlemanbackend.onrender.com${users?.profilePic}`} className='sm:w-20 bg-no-repeat bg-cover bg-center sm:h-20   w-14 h-14 rounded-full  '/>:<div className='sm:h-20 bg-black   w-14 h-14 rounded-full sm:w-20 sm:text-lg flex items-center justify-center text-white'><FaCamera/></div>}
    //     </div>
    //     {/* <img src={`http://localhost:3500${users?.profilePic}`} className='sm:w-20 bg-no-repeat bg-cover bg-center sm:h-20 rounded-full   w-14 h-14  '/> */}
    //     <p className="text-white text-sm sm:text-base  font-bold">{users?.username}</p>
    //     </div>
    //     {users?.inviteCode?<div className="flex items-center justify-between w-full">
    //       <p className=" text-white font-semibold text-sm sm:text-lg lg:text-base"><span className="">Invitation code</span> : {users?.inviteCode && window.matchMedia('(max-width: 600px)').matches? `${(users?.inviteCode)?.slice(0,20)}...`:users?.inviteCode}</p>
    //       <FaCopy className="text-white sm:text-2xl"/>
    //     </div>
    //       :
    //     <div className="flex items-center  justify-end w-full">
    //      {errors?<p>try again</p>:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' ><FaRotate/></motion.div>}
    //     </div>}
       
    //   </div> 
    //  <div className="flex flex-row gap-3  items-center h-1006 lg:justify-between lg:h-full lg:w-103 lg:flex-col">
    //   <NavLink to={'/invite'} className={'w-full h-full  '}><div className="flex w-full h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">Invite</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaLink className="text-white"/></div></div></NavLink>
    //   <NavLink to={'/customers'} className={'w-full h-full '}><div className="flex w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">Customers</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaUser className="text-white"/></div></div></NavLink>
    //   <NavLink to={'/history'} className={'w-full h-full '}><div className="flex  w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-xs sm:text-base  text-white">History</p><div className="w-6 sm:w-8 sm:h-8 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaHistory className="text-white"/></div></div></NavLink>
    //  </div>
    //  <div className="lg:hidden h-106 sm:h-105 "><Dashboard/></div>
    // </div>
    // </div>
  )
}

export default Firstpage