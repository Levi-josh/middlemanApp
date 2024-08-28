
import ChatHeader from "../../Header/ChatHeader"
// import ChatFooter from "../../Footer/ChatFooter"
import { FaCamera,FaTelegramPlane } from "react-icons/fa"
import  { useState, useEffect,FormEvent , ChangeEvent,useRef } from 'react';
import { useParams } from 'react-router-dom'
import io from 'socket.io-client';

const Chatitems = () => {
  interface Messages {
    from: String,
    to: String,
    message: String,
    timestamp:Date
}
interface Messanger {
  username:String,
  userId:String,
  socketId:String,
  messages:Messages[],
  read:Boolean,
  msgUnread:Number,
  profilePic:String,
}

const params = useParams()
const Id = localStorage.getItem('Id')
const messagesEndRef = useRef<null | HTMLDivElement>(null);
const [messages, setMessages] = useState<Messages[]>([]);
const [Dbmessages, setDbMessages] = useState<Messanger>();
const [message, setMessage] = useState<string>('');
const [mySocket,setMySocket] = useState<any|null>();

useEffect(() => {
const socket = io('https://middlemanbackend.onrender.com')
socket.emit('setCustomId',Id)
setMySocket(socket)
}, []);
useEffect(() => {
  mySocket?.on('private chat', (data:any) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  });
  return () => {
    mySocket?.off('private chat');
  };

}, [mySocket]);
console.log(mySocket)
useEffect(() => {
const fetdata = async()=>{
    const option = {
        method: 'Get',
        headers: {
            'content-type': 'application/json',
        }
    }
    try {
        const response = await fetch(`https://middlemanbackend.onrender.com/getmessages/${Id}/${params.id}`, option);
        const data = await response.json()
        setDbMessages(data)
    }
    catch (err) {
    console.log(err)
    }}
    fetdata()
}, []);
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages,Dbmessages]);

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (message.trim() && params.id) {
    mySocket.emit('private chat', { from: Id, to: params.id, message });
      setMessage(''); // Clear the input field
  }
};
const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{ setMessage(e.target.value)}
  return (
  <div className="h-screen lg:w-1069 xl:w-1074 bg-black2    ">
  <ChatHeader Dbmessages={Dbmessages}/>
  <div className={`pt-24 gap-5 px-4 w-full h-full overflow-auto `}>
  {Dbmessages?.messages?.map((prev:any) => (
  <div className={`text-white ${prev.from === Id ? 'mr-0 self-end message-right' : 'ml-0 self-start message-left'} h-auto mt-5 m-auto p-2 flex flex-col gap-2 w-107 bg-purple rounded-lg relative`}>
    <p className="">{prev.message}</p>
    <div className="flex items-center mr-0 m-auto w-auto justify-end">
      <p className="text-xs">{prev.msgTime}</p>
    </div>
  </div>
))}
    {messages.map((prev:any) => (
  <div className={`text-white ${prev.from === Id ? 'mr-0 self-end message-right' : 'ml-0 self-start message-left'} h-auto mt-5 m-auto p-2 flex flex-col gap-2 w-107 bg-purple rounded-lg relative`}>
    <p className="">{prev.message}</p>
    <div className="flex items-center mr-0 m-auto w-auto justify-end">
      <p className="text-xs">{prev.msgTime}</p>
    </div>
  </div>
))}
<div className=" w-full h-24 sm:h-32" ref={messagesEndRef} ></div>
    </div>
    {/* <ChatFooter handleSubmit={handleSubmit} handleChange={handleChange}/> */}
    <div className="w-full z-10 bg-black  lg:w-1069 xl:w-1074 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center bottom-0  justify-between fixed h-14 sm:h-16 md:h-20">
      <form onSubmit={handleSubmit} className="w-full z-10 bg-black lg:w-1025 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center bottom-0  justify-between fixed h-14 sm:h-16 md:h-20"> 
        <FaCamera className="text-white text-lg sm:text-2xl md:text-3xl"/>
        <input onChange={handleChange} className="w-107 bg-black1 border border-solid border-gray-800 text-white outline-none rounded-full placeholder:pl-1 pl-5 sm:py-1" placeholder="Enter text" type="text" value={message}/>
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