
// import ChatHeader from "../../Header/ChatHeader"
// import ChatFooter from "../../Footer/ChatFooter"
import { FaCamera,FaTelegramPlane } from "react-icons/fa"
import { FaArrowLeft,FaEllipsisV, FaStoreAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import  { useState, useEffect,FormEvent , ChangeEvent,useRef } from 'react';
import { useParams } from 'react-router-dom'
import { useChatContext } from './ChatContext';
import io from 'socket.io-client';
import {useSelector } from 'react-redux';
import {RootState  } from '../../Feature/Store'; 

const Chatitems = () => {
  interface Messages {
    from: string,
    to: string,
    message: string,
    timestamp:Date,
    read:Boolean
}
interface Messanger {
  username:string,
  userId:string,
  socketId:string,
  messages:Messages[],
  msgUnread:Number,
  profilePic:string,
}

const params = useParams()
const messagesEndRef = useRef<null | HTMLDivElement>(null);
const [messages, setMessages] = useState<Messages[]>([]);
const [Dbmessages, setDbMessages] = useState<Messanger>();
const [message, setMessage] = useState<string>('');
const { isfromChat } = useChatContext();
const [mySocket,setMySocket] = useState<any|null>();
const user= useSelector((state: RootState) => state.mode.user);

useEffect(() => {
const socket = io('https://middlemanbackend.onrender.com')
socket.emit('setCustomId',user?.Id)
setMySocket(socket)
}, []);
useEffect(() => {
  mySocket?.on('private chat', (data:any) => {
    setMessages((prevMessages) => [...prevMessages, data]);
    console.log(data)
  });
  return () => {
    mySocket?.off('private chat');
  };

},[mySocket]);
useEffect(() => {
const fetdata = async()=>{
    try {
        const response = await fetch(`https://middlemanbackend.onrender.com/getmessages/${params.id}`, {
          method: 'Get',
          credentials: 'include',
      });
        const data = await response.json()
        setDbMessages(data)
    }
    catch (err) {
    console.log(err)
    }}
    fetdata()
}, []);
useEffect(() => {
  if (Dbmessages?.messages?.length) {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  }
}, [Dbmessages]);
useEffect(() => {
  const fetdata = async()=>{
    const option = {
        method: 'Put',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify({contactId:params.id})
    }
    try {
        const response = await fetch(`https://middlemanbackend.onrender.com/markAsRead`, option);
        const data = await response.json()
        console.log(data)
    }
    catch (err) {
    console.log(err)
    }}
    fetdata()
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages,Dbmessages]);
useEffect(() => {
  const interval = setInterval(() => {
    setMessages((prevMessages) => [...prevMessages]); // Trigger re-render
  }, 60000);

  return () => clearInterval(interval);
}, []);

const formatTime = (timestamp: Date): string => {
  const now = new Date();
  const messageTime = new Date(timestamp);

  const diffInMinutes = Math.floor((now.getTime() - messageTime.getTime()) / 60000);

  if (diffInMinutes < 1) {
    return "Just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  } else {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours} hr${hours > 1 ? "s" : ""} ago`;
  }
};

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (message.trim() && params.id) {
    mySocket.emit('private chat', { from: user?.Id, to: params.id, message,timestamp: Date.now() });
      setMessage(''); // Clear the input field
  }
};
const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{ setMessage(e.target.value)}
  return (
  <div className="h-screen lg:w-1069 xl:w-1074 bg-black2 w-full    ">
  {/* <ChatHeader Dbmessages={Dbmessages}/> */}
  <div className="w-full z-10 bg-black lg:w-1069 xl:w-1074 px-3 top-0  sm:px-4 md:px-5 lg:px-3 flex items-center   justify-between fixed h-16 sm:h-20 md:h-24 lg:h-20">
    <div className="flex items-center gap-5 sm:gap-10">
        <NavLink to={'/'}><FaArrowLeft className='text-white text-lg sm:text-xl md:text-2sxl lg:text-xl' onClick={isfromChat}/></NavLink>
        <div className="outline outline-2 outline-purple w-8 h-8 sm:w-11 sm:h-11 md:h-14 md:w-14 lg:w-11 lg:h-11 rounded-full overflow-hidden"><img src={Dbmessages?.profilePic} /></div>
        <p className="text-white sm:text-xl ">{Dbmessages?.username}</p>
    </div>
    <div className="flex items-center gap-5 sm:gap-10">
        <NavLink to={'/market'}><FaStoreAlt className='text-white text-lg sm:text-2xl md:text-3xl lg:text-2xl'/></NavLink>
        <FaEllipsisV  className='text-white text-lg sm:text-2xl md:text-3xl lg:text-2xl'/>
    </div>
  </div>
  <div className={`pt-24 gap-5 px-4 w-full h-full overflow-auto `}>
  {Dbmessages?.messages?.map((prev:any) => (
  <div className={`text-white ${prev.from === user?.Id ? 'mr-0 self-end message-right' : prev.from == 'middleman'?'bg-purple': 'ml-0 self-start message-left'} h-auto mt-5 m-auto p-2 flex flex-col gap-2 w-107 bg-black rounded-lg relative`}>
    <p className="">{prev.message}</p>
    <div className="flex items-center mr-0 m-auto w-auto justify-end">
      <p className="text-xs">{formatTime(prev.timestamp)}</p>
    </div>
  </div>
))}
    {messages.map((prev:any) => (
  <div className={`text-white ${prev.from === user?.Id ? 'mr-0 self-end message-right' : prev.from == 'middleman'?'bg-purple': 'ml-0 self-start message-left'} h-auto mt-5 m-auto p-2 flex flex-col gap-2 w-107 bg-black rounded-lg relative`}>
    <p className="">{prev.message}</p>
    <div className="flex items-center mr-0 m-auto w-auto justify-end">
      <p className="text-xs ">{formatTime(prev.timestamp)}</p>
    </div>
  </div>
))}
<div className=" w-full h-24 sm:h-32" ref={messagesEndRef} ></div>
    </div>
    {/* <ChatFooter handleSubmit={handleSubmit} handleChange={handleChange}/> */}
    <div className="w-full z-10 bg-black  lg:w-1069 xl:w-1074 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center bottom-0  justify-between lg:justify-center fixed h-14 sm:h-16 md:h-20">
      <form onSubmit={handleSubmit} className="w-full z-10 bg-black lg:w-106 xl:w-107 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center bottom-0  justify-between fixed h-14 sm:h-16 md:h-20"> 
        <FaCamera className="text-white text-lg sm:text-2xl md:text-3xl hover:cursor-pointer"/>
        <input onChange={handleChange} className="w-107 bg-black2 border border-solid border-gray-800 text-white outline-none rounded-full placeholder:pl-1 pl-5 py-1 sm:py-2" placeholder="Enter text" type="text" value={message}/>
        {/* <button type="submit" className='text-purple'>Send</button> */}
        <button className="w-7 h-7 sm:w-9 sm:h-9 bg-purple rounded-full flex items-center justify-center" >
            <FaTelegramPlane className="text-white text-sm sm:text-lg"/>
        </button>
      </form>
    </div>
    </div>
  )
}

export default Chatitems