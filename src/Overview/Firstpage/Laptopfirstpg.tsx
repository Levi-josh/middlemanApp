import { FaCopy, FaMessage, FaPiggyBank, FaWallet } from "react-icons/fa6"
import { useState,useEffect } from 'react';
import Header from "../../Header/Header"
import Dashboard from "./Dashboard"
import { NavLink } from "react-router-dom"
const Laptopfirstpg = () => {
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
    history: any[];
    inviteCode: string;
    notification: any[];
    pending: number;
    profilePic: string;
    transaction: any[];
    walletId: string;
    __v: number;
  }
  const [users, setusers] = useState<User|null>();
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
      const response = await fetch(`http://localhost:3500/getusers/${Id}`, option);
      const data = await response.json()
      setusers(data)
     console.log(data)
  }
  catch (err) {
  console.log(err)
  }
  }
  fetchUsers()
  },[])
  return (
    <div className="w-full overflow-auto   sm:overflow-visible     lg:px-5 lg:w-107 xl:w-1075 h-full " >
    <Header/>
    <div className="flex flex-col px-3 sm:px-5 lg:px-0  mb-32 sm:mb-0 justify-between   lg:gap-6 pt-14 sm:pt-0  lg:flex-row lg:justify-between  lg:items-center h-full sm:h-10008 lg:h-103 ">
      <div className="lg:w-107 w-full rounded-lg h-102 lg:h-full  bg-black px-2 lg:px-3  lg:gap-2 flex-col flex gap-3 justify-center items-start ">
        <div className="flex flex-row items-center gap-3 lg:gap-2 lg:flex-col">
        <div className="sm:w-20 sm:h-20  w-14 h-14 overflow-hidden rounded-full  outline outline-3 outline-purple">
          <img src={`http://localhost:3500${users?.profilePic}`}/>
        </div>
        <p className="text-white font-bold">{users?.username}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className=" text-white"><span className="">Invitation code</span> : {users?.inviteCode}</p>
          <FaCopy className="text-white"/>
        </div>
       
      </div> 
     <div className="flex flex-row gap-3  items-center h-1006 lg:justify-between lg:h-full lg:w-103 lg:flex-col">
     <NavLink to={'/invite'} className={'w-full h-full '}><div className="flex w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer px-2 rounded-lg"><p className="text-sm  text-white">Invite</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaMessage className="text-white"/></div></div></NavLink>
      <div className="flex w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-sm  text-white">Wallet Id</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaWallet className="text-white"/></div></div>
      <div className="flex  w-full h-full lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-sm  text-white">Transfer</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaPiggyBank className="text-white"/></div></div>
     </div>
    </div>
    <div className="hidden lg:block h-1055"><Dashboard/></div>
    </div>
  )
}

export default Laptopfirstpg