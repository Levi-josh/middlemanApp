import { FaHome } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"


interface FooterProps {
  goToSlide: (index: number) => void;
}

const Footer:React.FC<FooterProps> = ({ goToSlide }) => {
  return (
    <div className="text-white flex items-center justify-evenly w-full h-1008 lg:hidden bg-black fixed bottom-0 z-10">
        {/* <div className="absolute w-20 rounded-full h-1 bg-purple top-0"></div> */}
    <div className="flex flex-col items-center" onClick={()=>goToSlide(0)}>
        <FaHome/>
        <p>Home</p>
    </div>
    <div className="flex flex-col items-center" onClick={()=>goToSlide(1)}>
        <FaMessage/>
        <p>Chat</p>
    </div>
    </div>
  )
}

export default Footer