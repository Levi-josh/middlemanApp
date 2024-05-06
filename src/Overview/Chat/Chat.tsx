import Header2 from "../../Header/Header2"
import Chatlist from "./Chatlist"
const Chat = () => {
  return (
    <div className="bg-black  pt-3 lg:relative lg:px-3 sm:pt-4 md:pt-5 h-full overflow-auto w-full   text-white lg:w-1025 ">
    <Header2/> 
    <div className="w-full text-center  bg-black2  pt-10 sm:pt-12 lg:pt-11 ">
    <p className="py-2 lg:py-1">1 unread message</p>
    </div>
    <Chatlist/>
    </div>
  )
}

export default Chat