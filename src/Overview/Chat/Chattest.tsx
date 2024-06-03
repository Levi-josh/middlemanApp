import  { useState, useEffect,FormEvent  } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3500'); // Connect to the server
type Messages = {
    from: string;
    to: string;
    message: string;
};

const Chattest = ()=>{
    const [messages, setMessages] = useState<Messages[]>([]);
    const [message, setMessage] = useState<string>('');
    const [receiver, setReceiver] = useState<string>('');

    useEffect(() => {
        // Listen for private chat messages
        socket.on('private chat', (data) =>  {
            console.log(data)
            setMessages((prevMessages) => [...prevMessages, data]);
        });


    }, []);

    // Handle form submission
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim() && receiver.trim()) {
            socket.emit('private chat', { from: 'user_a', to: receiver, message });
            setMessage(''); // Clear the input field
        }
    };

    return (
        <div className='bg-black2 w-full h-screen'>
            <h1>Private Chat App</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <input
                    type="text"
                    placeholder="Receiver"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
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
                {messages.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.from}:</strong> {msg.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Chattest;