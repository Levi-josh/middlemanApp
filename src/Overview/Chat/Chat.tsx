import Header2 from "../../Header/Header2"
import Chatlist from "./Chatlist"
import { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import { FaArrowRotateLeft,  } from "react-icons/fa6"


const Chat= () => {
  interface Message {
    from: string,
    to: string,
    message: string,
    timestamp:Date,
    read: boolean
}
interface Chat {
    username:string,
    userId:string,
    socketId:string,
    messages:Message[],
    msgUnread:number,
    profilePic:string,
}
  const [Chats, setChats] = useState<Chat[]|null>();
  const [errors, setErrors] = useState<string>('');
  const Id = localStorage.getItem('Id')
useEffect(()=>{
 
  const fetchChats = async()=>{
    const option = {
      method: 'Get',
      headers: {
          'content-type': 'application/json',
      },
  }
  try {
      const response = await fetch(`https://middlemanbackend.onrender.com/getChats/${Id}`, option);
      const data = await response.json()
      setChats(data)
  }
  catch (err:any) {
    console.log(err)
    setErrors(err)
  }
  }
  fetchChats()
},[Chats,Id])
const totalUnreadMessages = Chats?.reduce((total, chat) => {
  const unreadCount = chat.messages.filter(message => message.read == false && message.from !== Id).length;
  return total + unreadCount;
}, 0);

  return (
    <div className="bg-black lg:fixed lg:right-0  pt-3 lg:h-screen z-50   lg:px-3 sm:pt-4 md:pt-5 h-full overflow-auto w-full   text-white lg:w-103 xl:w-1025 ">
    <Header2/> 
    <div className={`w-full ${totalUnreadMessages && totalUnreadMessages>0 ?'visible':'invisible'} text-center  bg-black2  pt-10 sm:pt-12 lg:pt-11 `}>
    <p className="py-2 lg:py-1">{`${totalUnreadMessages} unread message`}</p>
    </div>
    { Chats && Chats.length>0?<Chatlist chatUsers={Chats} />:Chats?.length===0?<p className='text-white font-bold lg:mt-20 mt-28 md:mt-32 text-center '>No Chat yet!</p>:
    <div className="flex justify-center lg:mt-20 mt-28 md:mt-32  ">{errors?<div className='bg-purple px-3 py-1 sm:px-5 hover:cursor-pointer h-auto  rounded-full flex items-center gap-1'><FaArrowRotateLeft/><p >Retry</p></div>:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' > <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 18V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.929 4.929L7.757 7.757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.243 16.243L19.071 19.071" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.929 19.071L7.757 16.243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.243 7.757L19.071 4.929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></motion.div>}
    </div>
    }
    </div>
  )
}

export default Chat