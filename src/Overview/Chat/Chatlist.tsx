import victor from '../../assets/IMG-20230507-WA0023.jpg'
import jessica from '../../assets/IMG-20230507-WA0021.jpg'
import dave from '../../assets/IMG-20230515-WA0004.jpg'
import tony from '../../assets/photo_2024-05-06_16-45-08.jpg'
import { NavLink } from 'react-router-dom'
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

interface ChatlistProps {
    chatUsers: User;
}

const Chatlist: React.FC<ChatlistProps> = ({ chatUsers }) => {
    // const mychat = [
    // {username:'Don vick',
    // pfp:victor,
    // message:'Hwfa guy you still the come?',
    // sent:'Just now',
    // unread:1
    // },
    // {username:'Jessica',
    // pfp:jessica,
    // message:'Joshua what about my material?',
    // sent:'2mins ago',
    // unread:3
    // },
    // {username:'Dave',
    // pfp:dave,
    // message:`when i'm through i will send it `,
    // sent:'3mins ago',
    // unread:2
    // },
    // {username:'Tony diva',
    // pfp:tony,
    // message:`Send your wallet address `,
    // sent:'4mins ago',
    // unread:1
    // }
    //]
    console.log(chatUsers)
  return (
    <div className='px-3 sm:px-4 lg:px-0 md:px-5 pt-7 flex flex-col gap-7 h-full'>
    {chatUsers.chats.map((chat,index)=>(
        <NavLink key={index} to={`${window.matchMedia('(max-width: 600px)').matches?`/pchat/${chat.userId}`:'/chat'}`}><div className='w-full h-1012  bg-black2 rounded-lg flex justify-between items-center px-3 lg:px-2'>
            <div className='flex gap-4 sm:gap-6 lg:gap-2 items-center'>
                <div className='w-12 h-12 lg:w-10 lg:h-10 sm:w-16 sm:h-16 rounded-full overflow-hidden  outline outline-2 outline-purple'>
                <img src={victor} className=' bg-no-repeat bg-cover bg-center  '/>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-semibold text-base sm:text-lg lg:text-sm'>{chat.username}</h1>
                    <p className='text-xs sm:text-sm lg:text-xs'>{chat.messages[0]?.message}</p>
                </div>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <div className='sm:w-8 sm:h-8 h-6 w-6 lg:h-5 lg:w-5 flex justify-center items-center rounded-full bg-purple text-white'><p className=' text-xs sm:text-sm'>{String(chat.msgUnread)}</p></div>
                <p className='text-xs sm:text-sm lg:text-xs'>{`2 mins ago`}</p>
            </div>
        </div></NavLink>
    ))}
    </div>
  )
}

export default Chatlist