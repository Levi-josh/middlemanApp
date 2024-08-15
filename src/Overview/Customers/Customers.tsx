import { FaUser } from 'react-icons/fa';
import {FaArrowLeft, FaMessage} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useState,useEffect } from 'react';

const Customers = () => {
  interface messageSchema {
    from: String,
    to: String,
    message: String,
    timestamp: String
  }
  interface customs {
    username:String,
    userId:String,
    socketId:String,
    messages:messageSchema[],
    read:Boolean,
    msgUnread:Number,
    profilePic:String,
  }

const [customers, setCustomers] = useState<customs[]|null>();
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
    const response = await fetch(`https://middlemanbackend.onrender.com/getCustom/${Id}`, option);
    const data = await response.json()
    setCustomers(data)
   console.log(data)
}
catch (err) {
console.log(err)
}
}
fetchUsers()
},[])
  return (
    <div className='w-full h-screen bg-black fixed'>
    <div className=" h-full w-full  text-white flex flex-col justify-center items-center ">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
   <div className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105  gap-5 sm:gap-7">
   <div className="flex flex-col items-center gap-5 sm:gap-7">
     <div className="flex flex-col items-center gap-3 w-full">
       <div className='sm:w-20 sm:h-20 w-14 h-14 rounded-full flex justify-center items-center text-xl sm:text-2xl  text-white bg-purple' ><FaUser/></div>
       {customers&&<h1 className="text-white text-center text-lg sm:text-xl font-semibold  ">Customers</h1>}
     </div>
     {customers&&<p className="text-white text-center  text-sm sm:text-base ">These are list of people you accepted or sent an invite</p>}
    </div> 
     <div className="flex flex-col  w-full items-center    ">
     {customers?customers?.map(prev=>(
       <div className="w-full  border-b border-demotext  p-4 sm:p-6 flex  items-center justify-between">
        <div className='w-full h-full flex items-center gap-5'>
            <div className="sm:w-14 sm:h-14 w-12 h-12 overflow-hidden rounded-full bg-black2">
              <img src={`https://middlemanbackend.onrender.com${prev.profilePic}`}/>
            </div>
            <div>
              <div className='flex items-center gap-3 w-full '><p className='sm:text-lg font-semibold'>{prev.username}</p></div>
            </div>
         </div>
         <NavLink to={`/pchat/${prev.userId}`}></NavLink><div className='flex items-center gap-1 sm:gap-2 h-10 hover:cursor-pointer text-sm sm:text-base bg-purple rounded-lg px-2 sm:px-3'><p>message</p><FaMessage className='mt-1'/></div>
       </div>)):<p className='text-white mt-20  sm:text-lg font-semibold '>No customers yet!</p>}
     </div>
   </div>
   </div>
 </div>
  )
}

export default Customers