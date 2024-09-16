import { useNavigate } from "react-router-dom"
import { FaCheck } from "react-icons/fa6"

const Verified = () => {
const navigate = useNavigate()
    return (
        <div  className="flex flex-col fixed items-center justify-center  bg-black  gap-7 w-full h-screen ">
            <div className="w-109 sm:w-1065 h-108 sm:h-107 md:w-107 lg:w-106 xl:w-105  flex flex-col justify-between items-center  ">
            <div className='w-full flex items-center flex-col gap-4 sm:gap-6 '>
                <div className='flex flex-col items-center text-white gap-3'>
                    <div className='sm:w-16 sm:h-16 w-14 h-14 rounded-full flex justify-center items-center text-white bg-purple '><FaCheck  className="w-5 h-5 sm:w-6 sm:h-6"/></div>
                    <h1 className="text-white text-center font-semibold text-base sm:text-lg">Verification completed</h1>
                </div>
                <p className='flex w-full text-white items-center font-sans gap-2 text-sm sm:text-base justify-center text-center leading-6 '>You have successfully registered as a user. Click on the button below to continue</p>
            </div>
            <button className='w-full md:w-106 h-10 sm:h-12 bg-purple text-white rounded-lg' onClick={()=>navigate('/details')}>Continue</button>
            </div>
        </div>
      )
    
}

export default Verified