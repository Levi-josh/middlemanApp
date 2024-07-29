import Header2 from "../../Header/Header2"
import Chatlist from "./Chatlist"
import { useState, useEffect } from "react"


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
    <div className="bg-black lg:fixed lg:right-0  pt-3  lg:px-3 sm:pt-4 md:pt-5 h-full overflow-auto w-full   text-white lg:w-103 xl:w-1025 ">
    <Header2/> 
    <div className="w-full text-center  bg-black2  pt-10 sm:pt-12 lg:pt-11 ">
    {users?.chats && <p className="py-2 lg:py-1">1 unread message</p>}
    </div>
    {users ? <Chatlist chatUsers={users} />:<p className='text-white font-bold lg:mt-20 mt-28 md:mt-32 text-center font-serif'>No Chat yet!</p>}
    </div>
  )
}

export default Chat