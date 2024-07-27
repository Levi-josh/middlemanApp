import { FaStoreAlt } from "react-icons/fa"
import { FaCheck } from "react-icons/fa6"


const BuyOrSell = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
             
    <div className=" w-109  sm:w-108 md:w-107 lg:w-104 h-108    flex flex-col justify-between items-center gap-7">
    <div className="w-full h-full flex flex-col items-center gap-3 sm:gap-5">
    <div className="w-16 h-16 rounded-full bg-purple  flex justify-center items-center"><FaStoreAlt className="text-white text-2xl"/></div>
    <div className="flex flex-col gap-7 sm:gap-10 lg:gap-7">
    <div><p className="text-white text-center">Welcome to middleman's market place,to Start the transaction you have to choose between this two options below. Choose Buyer option if you are the buyer or Seller if are the seller </p></div>
    <div className="flex flex-col gap-7 sm:gap-10 lg:gap-7">
        <div className="flex items-center px-3 justify-between bg-black hover:border-2 border-solid border border-demotext  h-1008 w-full rounded-lg"><p className="text-white">Buyer</p><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center"><FaCheck className="text-white"/></div></div>
        <div className="flex items-center px-3 justify-between bg-black  hover:border-2 border-solid border border-demotext h-1008 w-full rounded-lg"><p className="text-white">Seller</p><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center"><FaCheck className="text-white"/></div></div>    
    </div>
    </div>
    </div>
    <button className="bg-purple text-white  w-full rounded-lg h-10  sm:h-12">Continue</button>
    </div>
    </div>
  )
}

export default BuyOrSell