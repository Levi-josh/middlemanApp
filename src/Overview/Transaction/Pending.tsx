import { FaExclamation } from "react-icons/fa6"


const Pending = () => {
  return (
    <div className="w-full h-full items-center flex justify-center  ">
      <div className=" w-109  sm:w-108 md:w-107 lg:w-105  h-108  justify-between items-center   flex flex-col ">
        <div className="w-full flex flex-col items-center gap-5 sm:gap-7 ">
       <div className="w-16 h-16 rounded-full bg-purple text-white text-lg font-bold  flex justify-center items-center"><FaExclamation/></div> 
          <div className="w-full">
            <p className="text-white text-sm sm:text-base text-center">please wait! the seller is yet to set up details for the transaction such as walletId,amount expected for you to pay and the rest.We will do well to notify you when the seller is done setting it up </p>
          </div>
        </div>
        <button className="bg-purple text-white  w-full rounded-lg h-10  sm:h-12 lg:w-108 xl:w-107">Ok</button>
      </div>
      
    </div>
  )
}

export default Pending