import { FaUser } from 'react-icons/fa';
import {FaArrowLeft, FaMessage} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import victor from '../../assets/IMG-20230507-WA0023.jpg'

const Customers = () => {
  return (
    <div className=" h-screen w-full text-white flex flex-col justify-center items-center bg-black">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-3 left-3"/></NavLink>
   <div className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105  gap-5 sm:gap-7">
   <div className="flex flex-col items-center gap-5 sm:gap-7">
     <div className="flex flex-col items-center gap-3 w-full">
       <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center  text-white bg-purple' ><FaUser/></div>
       <h1 className="text-white text-center sm:text-lg  font-semibold  ">Customers</h1>
     </div>
     <p className="text-white text-center  text-sm sm:text-base ">These are list of people you accepted and sent an invite</p>
    </div> 
     <div className="flex flex-col  w-full border border-demotext rounded-lg ">
       <div className="w-full  border-b border-demotext  p-4 sm:p-6 flex  items-center justify-between">
        <div className='w-full h-full flex items-center gap-5'>
          <div className="sm:w-14 sm:h-14 w-12 h-12 overflow-hidden rounded-full bg-black2">
            <img src={victor}/>
          </div>
          <div>
            <div className='flex items-center gap-3 w-full '><p className='sm:text-lg font-semibold'>Victor</p></div>
          </div>
         </div>
         <div className='flex items-center gap-1 sm:gap-2 h-10 hover:cursor-pointer bg-purple rounded-lg px-2 sm:px-3'><p>message</p><FaMessage className='mt-1'/></div>
       </div>
       <div className="w-full  border-b border-demotext  p-4 sm:p-6 flex justify-between">
        <div className='w-full h-full flex items-center gap-5'>
          <div className="sm:w-14 sm:h-14 w-12 h-12 overflow-hidden rounded-full bg-black2">
            <img src={victor}/>
          </div>
          <div>
            <div className='flex items-center gap-3 w-full'><p className='sm:text-lg font-semibold'>Victor</p></div>
          </div>
         </div>
         <div className='flex items-center gap-1 sm:gap-2 h-10 bg-purple rounded-lg px-2 sm:px-3'><p>message</p><FaMessage className='mt-1'/></div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default Customers