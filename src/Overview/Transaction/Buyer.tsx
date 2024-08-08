import {  FaCopy } from "react-icons/fa6"
import { FaVanShuttle } from "react-icons/fa6"

const Buyer = () => {
  return (
    <div className=" h-full w-full flex flex-col items-center">
    <div className=" w-109  sm:w-108 md:w-107 lg:w-105 h-108 justify-between   flex flex-col gap-7 ">
    <form className="flex flex-col gap-5">
      <div className="w-full flex flex-col gap-3 items-center">
        <div className="w-16 h-16 rounded-full bg-purple text-white text-lg font-bold  flex justify-center items-center"><FaVanShuttle/></div>
        <h1 className="sm:text-lg font-semibold text-white">Transaction details</h1>
      </div>
      <p className="text-white text-center">These are details provided by the seller that includes delivery date,amount of the goods you are buying and walletID of the seller ( note: you are expected to pay the exact amount provided by the seller or the transaction will not continue )</p>
        <div className="flex justify-between items-center w-full h-1008 rounded-lg text-white border border-solid border-demotext  bg-black px-3"><p>Delivery date:</p><p>20 0ct 2024</p></div>
        <div className="flex justify-between items-center w-full h-1008 rounded-lg text-white border border-solid border-demotext  bg-black px-3"><p>Amount:</p><p>$1000</p></div>
        <div className="flex justify-between items-center w-full h-1008 rounded-lg text-white border border-solid border-demotext  bg-black px-3"><p>WalletID:</p><div className="flex items-center gap-2"><p>guuuavzxw873ookj</p><FaCopy/></div></div>
        <select className="outline-none w-full h-1008 rounded-lg text-white border border-solid border-demotext  bg-black px-3">
        <option value="" disabled selected>Select  pickup method</option>
        <option>Self pickup</option>
        <option>Third party pickup</option>
      </select>
      </form>
      <div className="flex justify-between">
      <button className=" text-white bg-black2 w-103 rounded-full h-10">Reject</button>
      <button className="bg-purple text-white w-103 rounded-full h-10">Continue</button>
      </div>
    </div>
    </div>
  )
}

export default Buyer