import { FaArrowLeft,FaCamera, FaPencil, FaCopy} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useState,useEffect } from 'react';
import { useNavigate} from "react-router-dom"


const Setting = () => {
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
        inviteCode: string;
        notification: any[];
        pending: number;
        profilePic: string;
        transaction: any[];
        walletId: string;
        __v: number;
      }
      const [users, setusers] = useState<User|null>();
      const storedDataString = localStorage.getItem('myData');
      const navigate = useNavigate()

useEffect(()=>{
const fetchUsers = async()=>{
  const storedData = storedDataString ? JSON.parse(storedDataString) : null; // Parse if data exists
  const token = storedData?.value;
try {
    const response = await fetch(`https://middlemanbackend.onrender.com/getusers`, {
      method: 'Get',
      headers: {
        'Authorization': `Bearer ${token}`, // Authorization header
        'Content-Type': 'application/json'  // Optional: Specify content type
      }
  });
    const data = await response.json()
    setusers(data)
}
catch (err) {
console.log(err)
}
}
fetchUsers()
},[])
const logOut = ()=>{
  localStorage.removeItem('myData')
  navigate('/landingPage')
}
  return (
    <div className="w-full h-screen fixed bg-black flex justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
    <form  className="flex flex-col w-109 h-108 items-center pb-10 lg:pb-0  sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
    <div className="flex flex-col gap-5 items-center sm:gap-7 w-full">
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className='sm:h-16 sm:w-16 w-14 h-14 rounded-full flex justify-center items-center overflow-hidden   text-white bg-purple' >{users?.profilePic?<img src={users?.profilePic} className='sm:w-20 bg-no-repeat bg-cover bg-center sm:h-20   w-14 h-14 rounded-full  '/>:<div className='sm:h-20    w-14 h-14 rounded-full sm:w-20 sm:text-lg flex items-center justify-center text-white'><FaCamera/></div>}</div>
          <h1 className="text-white text-center text-base sm:text-lg  font-semibold  ">Settings</h1>
        </div>
      {/* <p className="text-white text-center  text-sm sm:text-base ">Add some money to your account balance</p> */}
      </div>
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <div className="w-full h-10 sm:h-12 lg:h-10 flex items-center justify-between  px-3 sm:px-5 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg  ">
          <div className="flex gap-3"><p >Username :</p><p>{users?.username}</p></div>
          {users?.username&&<FaPencil className="hover:cursor-pointer"/>}
        </div>
        <div className="w-full h-10 sm:h-12 lg:h-10 flex items-center justify-between  px-3 sm:px-5 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg  ">
          <div className="flex gap-3"><p>Email :</p><p>{users?.email}</p></div>
          {users?.email&&<FaPencil className="hover:cursor-pointer"/>}
        </div>
        <div className="w-full h-10 sm:h-12 lg:h-10 flex items-center justify-between  px-3 sm:px-5 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg  ">
          <div className="flex gap-3"><p>Wallet address :</p>{users?.walletId&&<p>{window.matchMedia('(max-width: 600px)').matches? `${(users?.walletId)?.slice(0,20)} . . .`:users?.walletId}</p>}</div>
          {users?.walletId&&< FaCopy className="hover:cursor-pointer"/>}
        </div>
        <div className="w-full h-10 sm:h-12 lg:h-10 flex items-center justify-between  px-3 sm:px-5 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg  ">
          <div className="flex gap-3"><p>Invite code :</p>{users?.inviteCode&&<p>{window.matchMedia('(max-width: 600px)').matches? `${(users?.inviteCode)?.slice(0,20)} . . .`:users?.inviteCode}</p>}</div>
          {users?.inviteCode && < FaCopy className="hover:cursor-pointer"/>}
        </div>
      </div>
    </div>
  <button className="bg-purple  text-white rounded-lg h-10  sm:h-12 w-full lg:w-108 xl:w-107 " onClick={logOut}>Log Out</button>
    </form>
</div>
  )
}

export default Setting