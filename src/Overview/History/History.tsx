import { FaHistory } from "react-icons/fa"
import {FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import victor from '../../assets/IMG-20230507-WA0023.jpg'

const History = () => {
  return (
    <div className=" h-screen w-full text-white flex flex-col justify-center items-center bg-black">
       <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-3 left-3"/></NavLink>
      <div className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-5 sm:gap-7 ">
        <div className="flex flex-col items-center gap-5 sm:gap-7">
          <div className="flex flex-col items-center gap-3 w-full">
            <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center  text-white bg-purple' ><FaHistory/></div>
            <h1 className="text-white text-center sm:text-lg  font-semibold  ">History</h1>
          </div>
          <p className="text-white text-center  text-sm sm:text-base ">These are list of people you accepted and sent an invite</p>
        </div> 
        <div className="flex flex-col gap-5 w-full">
          <div className="w-full h-auto bg-black2 rounded-lg p-2  sm:p-4 flex items-center gap-3 sm:gap-5">
            <div className="sm:w-24 sm:h-24 flex-shrink-0  w-20 h-20 overflow-hidden  bg-black2 ">
              <img src={victor}/>
            </div>
            <div className="w-full ">
              <div className='flex items-center justify-between w-full'><p>Transaction With :</p><p>Victor</p></div>
              <div className='flex items-center justify-between w-full'><p>Amount paid :</p><p>$1000</p></div>
              <div className='flex items-center justify-between w-full'><p>Date :</p><p>22 thurs july 2024</p></div>
              <div className='flex items-center justify-between w-full'><p>Status :</p><p>pending</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History