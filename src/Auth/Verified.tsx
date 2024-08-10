import { useNavigate } from "react-router-dom"
import { FaCheck } from "react-icons/fa6"

const Verified = () => {
const navigate = useNavigate()
    return (
        <div  className="flex flex-col fixed items-center justify-center  bg-black  gap-7 w-full h-screen ">
            <div className="w-109 sm:w-1065 h-108 sm:h-107 md:w-107 lg:w-106 xl:w-105  flex flex-col justify-between items-center  ">
            <div className='w-full flex items-center flex-col gap-5 sm:gap-7 '>
                <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center text-white bg-purple'><FaCheck/></div>
                <div className='flex flex-col items-center text-white gap-1'>
                    <h1 className="text-white text-center font-semibold text-xl">Verification completed</h1>
                    <p className='flex w-full items-center font-sans gap-2 text-sm sm:text-base justify-center text-center '>You have successfully registered as a user,click on the button below to continue</p>
                </div>
            </div>
            <button className='w-full md:w-106 h-10 sm:h-12 bg-purple text-white rounded-lg' onClick={()=>navigate('/details')}>Continue</button>
            </div>
        </div>
      )
    
}

export default Verified