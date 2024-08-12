import victor from '../../assets/IMG-20230507-WA0023.jpg'
import {FaArrowLeft, FaBell} from "react-icons/fa6"
import { NavLink } from "react-router-dom"


const Notification = () => {
  return (
    <div className="w-full h-screen fixed bg-black flex justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
    <div className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
    <div className="flex flex-col gap-5 items-center sm:gap-7">
        <div className="flex flex-col items-center gap-5 sm:gap-7">
            <div className="flex flex-col items-center gap-3 w-full">
                <div className='sm:w-20 sm:h-20 w-14 h-14 rounded-full flex justify-center items-center  text-white bg-purple text-xl sm:text-2xl' ><FaBell/></div>
                <h1 className="text-white text-center text-lg sm:text-xl font-semibold  ">Notification</h1>
            </div>
            {/* <p className="text-white text-center  text-sm sm:text-base ">Ask the user for their <span className="font-bold ">invite code</span>,then paste it in the input below. please make sure the code is correct and complete.</p> */}
        </div>
        <div className='w-full gap-3 flex flex-col'>
            <div className='w-full h-auto rounded-lg p-3 sm:p-5 bg-black2 flex flex-col gap-3 sm:gap-7 md:flex-row  md:items-start'>
                <div className='w-full md:w-107   h-full   flex gap-2 sm:gap-5 items-start '>
                    <div className="sm:w-16 sm:h-16 flex-shrink-0  w-10 h-10 overflow-hidden  bg-black2 ">
                        <img src={victor}/>
                    </div>
                    <p className='text-white text-sm sm:text-base'>Hi josh! you've been invited by victor for a business transaction</p>
                </div>
                <div className='w-full md:w-103    h-full flex  justify-end text-white gap-2 sm:gap-4 items-start'>
                    <button className='bg-purple rounded-md py-1 sm:py-2 lg:py-1  sm:px-4 w-1025 md:w-full text-sm sm:text-base'>Accept</button>
                    <button className='bg-purple rounded-md py-1 sm:py-2 lg:py-1 sm:px-4 w-1025 md:w-full  text-sm sm:text-base'>Reject</button>
                </div>
            </div>
            <div className='w-full h-auto rounded-lg p-3 sm:p-5 bg-black2 flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between sm:items-start'>
                <div className='w-full   h-full flex gap-2 sm:gap-5 items-start '>
                    <div className="sm:w-16 sm:h-16 flex-shrink-0  w-10 h-10 overflow-hidden  bg-black2 ">
                        <img src={victor}/>
                    </div>
                    <p className='text-white text-sm sm:text-base'>Hi josh! you've been invited by victor for a business transaction</p>
                </div>
                {/* <div className='w-full sm:w-103 h-full flex  justify-end text-white gap-2 sm:gap-5 items-start'>
                    <button className='bg-purple rounded-md py-1 sm:py-0  sm:px-4 w-1025 sm:w-full text-sm sm:text-base'>Accept</button>
                    <button className='bg-purple rounded-md py-1 sm:py-0 sm:px-4 w-1025 sm:w-full  text-sm sm:text-base'>Reject</button>
                </div> */}
            </div>
        </div>
    </div>

    </div>
</div>
  )
}

export default Notification