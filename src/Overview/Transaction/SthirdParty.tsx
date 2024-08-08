// import { useNavigate } from "react-router-dom"
import { FaVanShuttle } from "react-icons/fa6"

const SthirdParty = () => {
  // const navigate = useNavigate()
  // // const continueVerification = ()=>{
  // //   navigate('/market/verify')
  // // }
  return (
    <div className="w-full h-full items-center flex justify-center  ">
    <div className=" w-109  sm:w-108 md:w-107 lg:w-105  h-108  justify-between items-center   flex flex-col ">
      <div className="w-full flex flex-col gap-5 sm:gap-10 items-center">
        <div className="w-full flex flex-col gap-3 items-center">
          <div className="w-16 h-16 rounded-full bg-purple text-white text-lg font-bold  flex justify-center items-center"><FaVanShuttle/></div>
          <h1 className="sm:text-lg font-semibold text-white">ThirdParty Delivery</h1>
        </div>
        <div className="flex flex-col gap-2 w-full ">
        <p className="text-white text-sm sm:text-base">You were choosen to be a thirdparty to this transaction by the Seller/sender.</p>
        <p className="text-white text-sm sm:text-base ">Follow the instructions below:</p>
        <ul className="text-white text-sm sm:text-base ">
          <li>Your number one objective is to deliver the package to the buyer/recipient.</li>
          <li>After the package has been received or confirmed by the receiver,request for the user's password to verify before the package is out from your custody. </li>
          <li>Click on the continue button below to verify the user.</li>
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

export default SthirdParty