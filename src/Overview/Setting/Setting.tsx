import { FaArrowLeft,FaCamera, FaPencil, FaRegEyeSlash, FaCopy} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useState,useEffect } from 'react';


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
      const Id = localStorage.getItem('Id')
useEffect(()=>{
const fetchUsers = async()=>{
  const option = {
    method: 'Get',
    headers: {
        'content-type': 'application/json',
    },
}
try {
    const response = await fetch(`https://middlemanbackend.onrender.com/getusers/${Id}`, option);
    const data = await response.json()
    setusers(data)
   console.log(data)
}
catch (err) {
console.log(err)
}
}
fetchUsers()
},[])
  return (
    <div className="w-full h-screen fixed bg-black flex justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
    <form  className="flex flex-col w-109 h-108 items-center pb-10 lg:pb-0  sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
    <div className="flex flex-col gap-5 items-center sm:gap-7 w-full">
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className='sm:w-20 sm:h-20 w-14 h-14 rounded-full flex justify-center items-center text-xl sm:text-2xl  text-white bg-purple' >{users?.profilePic?<img src={`http://localhost:3500${users?.profilePic}`} className='sm:w-20 bg-no-repeat bg-cover bg-center sm:h-20   w-14 h-14 rounded-full  '/>:<div className='sm:h-20    w-14 h-14 rounded-full sm:w-20 sm:text-lg flex items-center justify-center text-white'><FaCamera/></div>}</div>
          <h1 className="text-white text-center text-lg sm:text-xl  font-semibold  ">Settings</h1>
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
          <div className="flex gap-3"><p>Password :</p><p>{users?.password}</p></div>
          {users?.password&&<FaRegEyeSlash className="hover:cursor-pointer"/>}
        </div>
        <div className="w-full h-10 sm:h-12 lg:h-10 flex items-center justify-between  px-3 sm:px-5 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg  ">
          <div className="flex gap-3"><p>Invite code :</p>{users?.inviteCode&&<p>{window.matchMedia('(max-width: 600px)').matches? `${(users?.inviteCode)?.slice(0,20)} . . .`:users?.inviteCode}</p>}</div>
          {users?.inviteCode && < FaCopy className="hover:cursor-pointer"/>}
        </div>
      </div>
    </div>
    <NavLink to={'/landingPage'} className={'w-full lg:w-108 xl:w-107'}><button className="bg-purple  text-white  w-full rounded-lg h-10  sm:h-12 " >Log Out</button></NavLink>
    </form>
</div>
  )
}

export default Setting