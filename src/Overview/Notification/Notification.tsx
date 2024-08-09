import victor from '../../assets/IMG-20230507-WA0023.jpg'
import {FaArrowLeft, FaBell} from "react-icons/fa6"
import { NavLink } from "react-router-dom"


const Notification = () => {
  return (
    <div className="w-full h-screen fixed bg-black flex justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-3 left-3"/></NavLink>
    <div className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
    <div className="flex flex-col gap-5 items-center sm:gap-7">
        <div className="flex flex-col items-center gap-5 sm:gap-7">
            <div className="flex flex-col items-center gap-3 w-full">
                <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center  text-white bg-purple' ><FaBell/></div>
                <h1 className="text-white text-center sm:text-lg  font-semibold  ">Notification</h1>
            </div>
            <p className="text-white text-center  text-sm sm:text-base ">Ask the user for their <span className="font-bold ">invite code</span>,then paste it in the input below. please make sure the code is correct and complete.</p>
        </div>
        <div>
            <div className="sm:w-12 sm:h-12  w-10 h-10 overflow-hidden rounded-full bg-black2 outline outline-3 outline-purple">
                <img src={victor}/>
            </div>
        </div>
    </div>
    <button className="bg-purple  text-white  w-full rounded-lg h-10  sm:h-12 lg:w-108 xl:w-107">invite</button>
    </div>
</div>
  )
}

export default Notification