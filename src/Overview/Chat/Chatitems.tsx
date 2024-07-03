
import ChatHeader from "../../Header/ChatHeader"
import ChatFooter from "../../Footer/ChatFooter"
import  { useState, useEffect,FormEvent , ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import io from 'socket.io-client';

type Messages = {
    from: string;
    to: string;
    message: string;
};

const Chatitems = () => {
  interface message {
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
const navigate = useNavigate()
// const [Id,setId]=useState<string|null>('')
let mySocket:any;
if(Id){
  const socket = io('http://localhost:3500')
  socket.emit('setCustomId',Id)
  mySocket = socket 
}
else{
  navigate('/login')
}
useEffect(() => {
  // const myid = localStorage.getItem('Id')
  // setId(myid)
  // Listen for private chat messages
  mySocket.on('private chat', (data:any) =>  {
      console.log(data)
      setMessages((prevMessages) => [...prevMessages, data]);
  });
const fetdata = async()=>{
    const option = {
        method: 'Get',
        headers: {
            'content-type': 'application/json',
        },
    }
    try {
        const response = await fetch(` http://localhost:3500/getmessages/${Id}`, option);
        const data = await response.json()
        setDbMessages(data)
       console.log(data)
    }
    catch (err) {
    console.log(err)
    }}
    fetdata()
    return () => {
      mySocket.off('private chat');
    };
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
    <div className="bg-black2 h-screen w-full    ">
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
    <ChatFooter handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  )
}

export default Chatitems