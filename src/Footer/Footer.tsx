import { FaHome } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="text-white flex items-center justify-evenly w-full h-1008 lg:hidden bg-black fixed bottom-0 z-20">
        <div className="absolute w-20 rounded-full h-1 bg-purple top-0"></div>
    <div className="flex flex-col items-center">
        <FaHome/>
        <p>Home</p>
    </div>
    <div className="flex flex-col items-center">
        <FaMessage/>
        <p>Chat</p>
    </div>
    </div>
  )
}

export default Footer