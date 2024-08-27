
import ChatHeader from "../../Header/ChatHeader"
// import ChatFooter from "../../Footer/ChatFooter"
import { FaCamera } from "react-icons/fa"
import  { useState, useEffect,FormEvent , ChangeEvent } from 'react';
import { useParams } from 'react-router-dom'
import io from 'socket.io-client';

// type Messages = {
//     from: string;
//     to: string;
//     message: string;
// };

const Chatitems = () => {
  interface Messages {
    from: String,
    to: String,
    message: String,
    timestamp:Date
}
// interface Chat {
//     username:String,
//     userId:String,
//     socketId:String,
//     messages:message[],
//     read:Boolean,
//     msgUnread:Number,
//     profilePic:String,
// }
//   interface User {
//     _id: string;
//     email: string;
//     socketId: string;
//     username: string;
//     password: string;
//     balance: number;
//     chats: Chat[];
//     history: any[];
//     inviteCode: string;
//     notification: any[];
//     pending: number;
//     profilePic: string;
//     transaction: any[];
//     walletId: string;
//     __v: number;
// }
const params = useParams()
const Id = localStorage.getItem('Id')
const [messages, setMessages] = useState<Messages[]>([]);
const [Dbmessages, setDbMessages] = useState<Messages[]>([]);
const [message, setMessage] = useState<string>('');
const socket = io('https://middlemanbackend.onrender.com')
socket.emit('setCustomId',Id)
let mySocket = socket

useEffect(() => {
  // Set up the listener for the 'private chat' event
  socket.on('private chat', (data) => {
    console.log('Received private chat message:', data);
    setMessages((prevMessages) => [...prevMessages, data]);
  });

  // Cleanup the listener when the component unmounts
  return () => {
    socket.off('private chat');
  };
}, [socket]);
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
       console.log(data)
    }
    catch (err) {
    console.log(err)
    }}
    fetdata()
}, []);

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
    <ChatHeader/>
    <div className={`pt-24 gap-5 px-4 w-full h-full overflow-auto pb-24`}>
      {Dbmessages.map((prev:any) => <div className={`text-white ${prev.from==Id?'mr-0':'ml-0'} h-auto  mt-5 m-auto p-2 flex flex-col gap-2   w-107  bg-purple rounded-lg`}>
      <p className="">{prev.message}</p>
      <div className="flex items-center mr-0 m-auto w-auto justify-end ">
      <p className="text-xs ">{prev.msgTime}</p>
      </div>
    </div>)}
      {messages.map((prev:any) => <div className={`text-white ${prev.from==Id?'mr-0':'ml-0'} h-auto  mt-5 m-auto p-2 flex flex-col gap-2   w-107  bg-purple rounded-lg`}>
      <p className="">{prev.message}</p>
      <div className="flex items-center mr-0 m-auto w-auto justify-end ">
      <p className="text-xs ">{prev.msgTime}</p>
      </div>
    </div>)}
    </div>
    {/* <ChatFooter handleSubmit={handleSubmit} handleChange={handleChange}/> */}
    <div className="w-full z-10 bg-black  lg:w-1069 xl:w-1074 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center bottom-0  justify-between fixed h-14 sm:h-16 md:h-20">
      <form onSubmit={handleSubmit} className="w-full z-10 bg-black lg:w-1025 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center bottom-0  justify-between fixed h-14 sm:h-16 md:h-20"> 
        <FaCamera className="text-white text-lg sm:text-2xl md:text-3xl"/>
        
        <input onChange={handleChange} className="w-107 bg-black1 border border-solid border-gray-800 text-white outline-none rounded-full placeholder:pl-1 pl-5 sm:py-1" placeholder="Enter text" type="text" value={message}/>
        <button type="submit" className='text-purple'>Send</button>
        {/* <button className="w-6 h-6 sm:w-9 sm:h-9 bg-purple rounded-full flex items-center justify-center" >
            <FaTelegramPlane className="text-white text-sm sm:text-lg"/>
        </button> */}
      </form>
    </div>
    </div>
  )
}

export default Chatitems