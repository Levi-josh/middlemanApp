import { FaLink ,FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const Transfer = () => {
  return (
    <div className="w-full h-screen fixed bg-black flex justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-3 left-3"/></NavLink>
    <form  className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
    <div className="flex flex-col gap-5 items-center sm:gap-7 w-full">
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center  text-white bg-purple' ><FaLink/></div>
          <h1 className="text-white text-center sm:text-lg  font-semibold  ">Transfer</h1>
        </div>
        <p className="text-white text-center  text-sm sm:text-base ">Paste the walletId of the user below to tranfer some money.</p>
      </div>
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
      <input type="text" className="w-full h-10 sm:h-12 lg:h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter WalletId"  />
      <input type="text" className="w-full h-10 sm:h-12 lg:h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter amount"  />
      </div>
    </div>
    <button className="bg-purple  text-white  w-full rounded-lg h-10  sm:h-12 lg:w-108 xl:w-107">Transter</button>
    </form>
</div>
  )
}

export default Transfer