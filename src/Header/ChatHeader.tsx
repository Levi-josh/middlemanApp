import { FaArrowLeft,FaEllipsisV, FaStoreAlt } from 'react-icons/fa'
import pfp from '../assets/IMG-20230507-WA0018.jpg'
import { NavLink } from 'react-router-dom'


const ChatHeader = () => {
  return (
    <div className="w-full z-10 bg-black lg:w-1025 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center   justify-between fixed h-16 sm:h-20 md:h-24">
    <div className="flex items-center gap-5 sm:gap-10">
        <FaArrowLeft className='text-white text-lg sm:text-2xl md:text-3xl'/>
        <div className="outline outline-2 outline-purple w-8 h-8 sm:w-11 sm:h-11 md:h-14 md:w-14 rounded-full overflow-hidden"><img src={pfp} /></div>
        <p className="text-white sm:text-xl md:text-2xl">Josh kelly</p>
    </div>
    <div className="flex items-center gap-5 sm:gap-10">
        <NavLink to={'/market'}><FaStoreAlt className='text-white text-lg sm:text-2xl md:text-3xl'/></NavLink>
        <FaEllipsisV  className='text-white text-lg sm:text-2xl md:text-3xl'/>
    </div>
    </div>
  )
}

export default ChatHeader