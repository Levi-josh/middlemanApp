
import { FaMessage, FaPiggyBank, FaWallet } from "react-icons/fa6"
import Header from "../Header/Header"

const Firstpage = () => {
  return (
    <div className="px-3">
    <Header/>
    <div className="flex flex-col gap-6 lg:justify-between lg:items-center ">
     <div className="bg-black lg:w-107 w-full rounded-lg">1</div> 
     <div className="flex flex-row gap-3 lg:flex-col">
      <div className="flex w-full h-12 justify-between items-center bg-black px-2 rounded-lg"><p className="text-xs">Create chat</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-slate-500 h-6"><FaMessage/></div></div>
      <div className="flex w-full h-12 justify-between items-center bg-black px-2 rounded-lg"><p className="text-xs">Wallet ID</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-slate-500 h-6"><FaWallet/></div></div>
      <div className="flex  w-full h-12 justify-between items-center bg-black px-2 rounded-lg"><p className="text-xs">Transfer</p><div className="w-6 text-xs rounded-full flex justify-center items-center bg-slate-500 h-6"><FaPiggyBank/></div></div>
     </div>
    </div>
    </div>
  )
}

export default Firstpage