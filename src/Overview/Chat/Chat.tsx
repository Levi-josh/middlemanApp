import Header2 from "../../Header/Header2"
import Chatlist from "./Chatlist"
import { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import { FaRotate,  } from "react-icons/fa6"


const Chat= () => {
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

  const [Chats, setChats] = useState<Chat[]|null>();
  const [errors, setErrors] = useState<String>('');
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
     console.log(data)
  }
  catch (err:any) {
    console.log(err)
    setErrors(err)
  }
  }
  fetchChats()
},[])
 

  return (
    <div className="bg-black lg:fixed lg:right-0  pt-3 lg:h-screen z-50   lg:px-3 sm:pt-4 md:pt-5 h-full overflow-auto w-full   text-white lg:w-103 xl:w-1025 ">
    <Header2/> 
    <div className="w-full text-center  bg-black2  pt-10 sm:pt-12 lg:pt-11 ">
    {Chats && <p className="py-2 lg:py-1">1 unread message</p>}
    </div>
    {Chats ? Chats.length>1?<Chatlist chatUsers={Chats} />:<p className='text-white font-bold lg:mt-20 mt-28 md:mt-32 text-center '>No Chat yet!</p>:
    <div className="flex justify-center lg:mt-20 mt-28 md:mt-32  ">{errors?<div className='bg-purple px-3 py-1 sm:px-5 hover:cursor-pointer h-auto  rounded-full'><p >Retry</p></div>:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' ><FaRotate/></motion.div>}</div>
    }
    </div>
  )
}

export default Chat