import { FaArrowLeft } from "react-icons/fa6"
import { NavLink } from "react-router-dom"


const MktHearder = () => {
  return (
    <div className="w-full z-10 gap-5 bg-black lg:w-1025 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center    fixed h-16 sm:h-20 md:h-24">
    <NavLink to={'/pchat'}><FaArrowLeft className="text-white text-lg sm:text-2xl md:text-3xl"/></NavLink>
    <p className="text-white">back</p>
    </div>
  )
}

export default MktHearder