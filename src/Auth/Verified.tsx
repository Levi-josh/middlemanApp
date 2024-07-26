
import { FaCheck } from "react-icons/fa6"

const Verified = () => {
    return (
        <div  className="flex flex-col items-center pt-24 bg-black  gap-7 w-full h-screen ">
            <div className="w-109 sm:w-1065 md:w-106 lg:w-106 xl:w-105 gap-12 sm:gap-16 flex flex-col items-center ">
            <div className='w-full flex items-center flex-col gap-5 '>
                <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center text-white bg-purple'><FaCheck/></div>
                <div className='flex flex-col items-center text-white gap-1'>
                    <h1 className="text-white text-center font-semibold text-lg lg:text-2xl">Verification completed</h1>
                    <p className='flex w-full items-center gap-2 text-sm lg:text-base justify-center text-center '>You have successfully registered as a user,click on the button below to continue</p>
                </div>
            </div>
            <button className='w-full sm:w-105 h-10 bg-purple text-white rounded-lg'>Continue</button>
            </div>
        </div>
      )
    
}

export default Verified