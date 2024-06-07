import Header2 from "../../Header/Header2"
import Chatlist from "./Chatlist"
import { useState,FormEvent } from "react"
const Chat = () => {
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
  const [userId,setuserId] = useState('')
  const [users, setusers] = useState<User|null>(null);
  const handleId = async(e:FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
  const option = {
    method: 'Get',
    headers: {
        'content-type': 'application/json',
    },
}
try {
    const response = await fetch(`http://localhost:3500/getusers/${userId}`, option);
    const data = await response.json()
    setusers(data)
   console.log(data)
}
catch (err) {
console.log(err)
}} 

  return (
    <div className="bg-black lg:fixed lg:right-0  pt-3  lg:px-3 sm:pt-4 md:pt-5 h-full overflow-auto w-full   text-white lg:w-1025 ">
    <Header2/> 
    <div className="w-full text-center  bg-black2  pt-10 sm:pt-12 lg:pt-11 ">
    <p className="py-2 lg:py-1">1 unread message</p>
    </div>
    <form onSubmit={handleId}>
    <input
      type="text"
      placeholder="Receiver"
      value={userId}
      onChange={(e) => setuserId(e.target.value)} className="bg-black outline-none text-white"/>
    <button >Get Id</button>
    </form>
    {users && <Chatlist chatUsers={users} />}
    </div>
  )
}

export default Chat