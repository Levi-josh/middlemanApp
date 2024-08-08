import { FaVanShuttle } from "react-icons/fa6"


const BthirdParty = () => {
  return (
  <div className="w-full h-full items-center flex justify-center  ">
    <div className=" w-109  sm:w-108 md:w-107 lg:w-105  h-108  justify-between items-center   flex flex-col ">
      <div className="w-full flex flex-col gap-5 sm:gap-10 items-center">
        <div className="w-full flex flex-col gap-3 items-center">
          <div className="w-16 h-16 rounded-full bg-purple text-white text-lg font-bold  flex justify-center items-center"><FaVanShuttle/></div>
          <h1 className="sm:text-lg font-semibold text-white">ThirdParty Pickup</h1>
        </div>
        <div className="flex flex-col gap-2 w-full">
        <p className="text-white text-sm sm:text-base">You were choosen to be a thirdparty to this transaction by the buyer/recipient.</p>
        <p className="text-white text-sm sm:text-base ">Follow the instructions below:</p>
        <ul className="text-white text-sm sm:text-base ">
          <li>Your number one objective is to pickup the package for the buyer.</li>
          <li>After receiving the package from the seller or dispatch,your password will be requested by the seller or dispatch to verify that you are the right person.</li>
        </ul>
        </div>
      </div>
      <div className="flex w-full justify-between">
          <button className=" text-white bg-black2 w-103 rounded-full h-10 sm:h-12">Cancel</button>
          <button className="bg-purple text-white w-103 rounded-full h-10 sm:h-12">Continue</button>
      </div>
    </div>
  </div>
  )
}

export default BthirdParty