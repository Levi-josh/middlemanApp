import { FaStoreAlt } from "react-icons/fa"
import { FaCheck } from "react-icons/fa6"


const BuyOrSell = () => {
  return (
    <div className=" w-full h-full px-4 pt-32 flex flex-col items-center gap-7">
    <div className="w-16 h-16 rounded-full bg-purple  flex justify-center items-center"><FaStoreAlt className="text-white text-2xl"/></div>
    <div className="flex flex-col gap-7">
    <div><p className="text-white">Welcome to middleman's market place,to Start the transaction you have to choose between this two options below.</p></div>
    <div className="flex flex-col gap-7">
        <div className="flex items-center px-3 justify-between bg-black hover:border-2 border-solid border-purple  h-101 w-106 rounded-lg"><p className="text-white">Buyer</p><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center"><FaCheck className="text-white"/></div></div>
        <div className="flex items-center px-3 justify-between bg-black  hover:border-2 border-solid border-purple h-101 w-106 rounded-lg"><p className="text-white">Seller</p><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center"><FaCheck className="text-white"/></div></div>    
    </div>
    </div>
    <button className="bg-purple text-white fixed bottom-14 w-103 rounded-full h-1005 right-4">Continue</button>
    </div>
  )
}

export default BuyOrSell