
import { FaCopy, FaMessage, FaPiggyBank, FaWallet } from "react-icons/fa6"
import Header from "../../Header/Header"
import Dashboard from "./Dashboard"
import pfp from '../../assets/IMG-20230507-WA0018.jpg'

const Firstpage = () => {
  return (
    <div className="px-3 sm:px-4  md:px-5 h-10008 lg:w-1075 lg:h-full">
    <Header/>
    <div className="flex flex-col lg:gap-6 justify-between  lg:flex-row lg:justify-between  lg:items-center h-full lg:h-103 ">
      <div className="lg:w-107 w-full rounded-lg h-102 lg:h-full  bg-black px-2 lg:px-3  lg:gap-2 flex-col flex justify-center items-start ">
        <div className="flex flex-row items-center gap-3 lg:gap-2 lg:flex-col">
        <div className="lg:w-20 lg:h-20 w-14 h-14 overflow-hidden rounded-full bg-black2 outline outline-3 outline-purple">
          <img src={pfp}/>
        </div>
        <p className="text-white">Levi joshua</p>
        </div>
        <div className="flex items-center gap-3">
          <p className=" text-white1 text-sm lg:text-base"><span className="font-bold">Invitation code</span>: hfjnnhghajkkghhssiij</p>
          <FaCopy className="text-white"/>
        </div>
       
      </div> 
     <div className="flex flex-row gap-3 items-center h-101 lg:justify-between lg:h-full lg:w-103 lg:flex-col">
      <div className="flex w-full h-12 lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer px-2 rounded-lg"><p className="text-xs text-white">Create chat</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaMessage className="text-white"/></div></div>
      <div className="flex w-full h-12 lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-xs text-white">Wallet ID</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaWallet className="text-white"/></div></div>
      <div className="flex  w-full h-12 lg:h-full justify-between items-center hover:transition-all hover:scale-x-105 bg-black hover:bg-black1 hover:cursor-pointer   px-2 rounded-lg"><p className="text-xs text-white">Transfer</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-purple h-6"><FaPiggyBank className="text-white"/></div></div>
     </div>
     <div className="lg:hidden h-105 bg-slate-800"><Dashboard/></div>
    </div>
    <div className="hidden lg:block"><Dashboard/></div>
    </div>
  )
}

export default Firstpage