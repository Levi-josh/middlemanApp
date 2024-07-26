
import { FaCheck } from "react-icons/fa6"

const Verified = () => {
    return (
        <div  className="flex flex-col items-center pt-24 bg-black  gap-7 w-full h-full px-4">
            <div className='w-full flex items-center flex-col gap-5'>
                <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center text-white bg-purple'><FaCheck/></div>
                <div className='flex flex-col items-center text-white gap-1'>
                    <h1>Verification completed</h1>
                    <p>You have successfully registered as a user,click on the button below to continue</p>
                </div>
            </div>
            <button>Continue</button>
        </div>
      )
    
}

export default Verified