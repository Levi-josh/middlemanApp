import Header2 from "../../Header/Header2"
import pfp from '../../assets/IMG-20230507-WA0018.jpg'
const Chat = () => {
  return (
    <div className="bg-black  pt-3 lg:relative sm:pt-4 md:pt-5 h-full overflow-auto w-full   text-white lg:w-1025 ">
    <Header2/> 
    <div className="w-full middleman h-104 before: pt-10 sm:pt-12 ">
    <img src={pfp} className="w-full h-full bg-no-repeat bg-cover bg-center"/>
    </div>
    </div>
  )
}

export default Chat