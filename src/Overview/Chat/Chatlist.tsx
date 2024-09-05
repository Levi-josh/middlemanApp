
import { NavLink } from 'react-router-dom';

interface Message {
    from: string,
    to: string,
    message: string,
    timestamp: Date,
    read: boolean
}

interface Chat {
    username: string,
    userId: string,
    socketId: string,
    messages: Message[],
    msgUnread: number,
    profilePic: string,
}

interface ChatlistProps {
    chatUsers: Chat[];
}

const Chatlist: React.FC<ChatlistProps> = ({ chatUsers }) => {
    const Id = localStorage.getItem('Id');
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
    return (
        <div className='px-3 bg-black w-full sm:px-4 lg:px-0 md:px-5 pt-7 flex flex-col gap-7 h-full'>
            {chatUsers.map((chat:any, index) => {
                // Filter unread messages that are not from the current user
                const unreadMessages = chat.messages.filter((message:any) => message.read == false && message.from !== Id);
                const unreadCount = unreadMessages.length;
                return (
                    <NavLink key={index} to={`/chat/${chat.userId}`}>
                        <div className='w-full h-1012 bg-black2 rounded-lg flex justify-between items-center px-3 lg:px-2'>
                            <div className='flex gap-4 sm:gap-6 lg:gap-2 items-center'>
                                <div className='w-12 h-12 lg:w-10 lg:h-10 sm:w-16 sm:h-16 rounded-full object-cover overflow-hidden outline outline-2 outline-purple'>
                                    <img src={chat?.profilePic} className='w-full h-full' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold text-base sm:text-lg lg:text-sm'>{chat.username}</h1>
                                    <p className='text-xs sm:text-sm lg:text-xs'>{chat.messages[chat.messages.length - 1]?.message}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 items-center'>
                                    <div className={`sm:w-8 sm:h-8 h-6 w-6 lg:h-5 lg:w-5 flex justify-center items-center rounded-full bg-purple text-white ${unreadCount > 0?'visible':'invisible'}`}>
                                        <p className='text-xs sm:text-sm'>{unreadCount}</p>
                                    </div>
                                <p className='text-xs sm:text-sm lg:text-xs'>{formatTime(chat.messages[chat.messages.length - 1]?.timestamp)}</p>
                            </div>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default Chatlist;
