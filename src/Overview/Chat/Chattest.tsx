import  { useState, useEffect,FormEvent  } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3500'); // Connect to the server

type Messages = {
    from: string;
    to: string;
    message: string;
};
const Chattest = ()=>{

const [userId,setuserId] = useState('')
const [users, setusers] = useState<User|null>(null);
socket.emit('setCustomId', users?._id)
    const [messages, setMessages] = useState<Messages[]>([]);
    const [Dbmessages, setDbMessages] = useState<Messages[]>([]);
    const [message, setMessage] = useState<string>('');
    const [receiver, setReceiver] = useState<string>('');
    const [sender, setSender] = useState<string>('');

    useEffect(() => {
        // Listen for private chat messages
        socket.on('private chat', (data) =>  {
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
            const response = await fetch(` http://localhost:3500/getmessages/666340c0fa8160ce8ec8482d`, option);
            const data = await response.json()
            setDbMessages(data)
           console.log(data)
        }
        catch (err) {
        console.log(err)
        }}
        fetdata()
        return () => {
            socket.off('private chat');
        };
    }, []);
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
    // Handle form submission
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim() && receiver.trim()) {
            socket.emit('private chat', { from: sender, to: receiver, message });
            setMessage(''); // Clear the input field
        }
    };

    return (
        <div className='bg-black2 w-full h-screen'>
            <h1>Private Chat App</h1>
    <form onSubmit={handleId}>
    <input
      type="text"
      placeholder="Receiver"
      value={userId}
      onChange={(e) => setuserId(e.target.value)} className="bg-black outline-none text-white"/>
    <button >Get Id</button>
    </form>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <input
                    type="text"
                    placeholder="Receiver"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="sender"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className='text-purple'>Send</button>
            </form>
            <ul className='text-white'>
                {Dbmessages.map((msg, index) => (
                    <li key={index}>
                         {msg.message}
                    </li>
                ))}
            </ul>
            <ul className='text-white'>
                {messages.map((msg, index) => (
                    <li key={index}>
                         {msg.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Chattest;