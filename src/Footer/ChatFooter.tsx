// import { FaTelegramPlane } from "react-icons/fa"
import { FaCamera } from "react-icons/fa"
import  { FormEvent,ChangeEvent } from 'react';

interface FooterProps {
  handleSubmit: (e:FormEvent<HTMLFormElement>) => any;
  handleChange:(e:ChangeEvent<HTMLInputElement>)=>any
}
const ChatFooter:React.FC<FooterProps>  = ({handleSubmit,handleChange}) => {
  return (
    <div className="w-full z-10 bg-black px-3 sm:px-4 md:px-5 lg:px-3 flex items-center bottom-0  justify-between fixed h-14 sm:h-16 md:h-20">
      <form onSubmit={handleSubmit} className="w-full z-10   px-3 sm:px-4 md:px-5 lg:px-3 flex items-center bottom-0  justify-between fixed h-14 sm:h-16 md:h-20"> 
        <FaCamera className="text-white text-lg sm:text-2xl md:text-3xl"/>
        
        <input onChange={handleChange} className="w-107 lg:w-full bg-black1 border border-solid border-gray-800 text-white outline-none rounded-full placeholder:pl-1 pl-5 sm:py-1" placeholder="Enter text"/>
        <button type="submit" className='text-purple'>Send</button>
        {/* <button className="w-6 h-6 sm:w-9 sm:h-9 bg-purple rounded-full flex items-center justify-center" >
            <FaTelegramPlane className="text-white text-sm sm:text-lg"/>
        </button> */}
      </form>
    </div>
  )
}

export default ChatFooter