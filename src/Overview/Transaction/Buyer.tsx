import { FaAngleDown, FaCopy } from "react-icons/fa6"


const Buyer = () => {
  return (
    <div className="w-full h-full px-4 pt-24 flex flex-col gap-7 ">
      <p className="text-white">These are details provided by the seller that includes delivery date,amount of the goods you are buying and walletID of the seller (note: you are expected to pay the exact amount provided by the seller or the transaction will not continue)</p>
      <form className="flex flex-col gap-5">
        <div className="flex justify-between items-center w-full h-1007 rounded-lg text-white border-2 border-solid border-purple  bg-black px-3"><p>Delivery date:</p><p>20 0ct 2024</p></div>
        <div className="flex justify-between items-center w-full h-1007 rounded-lg text-white border-2 border-solid border-purple  bg-black px-3"><p>Amount:</p><p>$1000</p></div>
        <div className="flex justify-between items-center w-full h-1007 rounded-lg text-white border-2 border-solid border-purple  bg-black px-3"><p>WalletID:</p><div className="flex items-center gap-2"><p>guuuavzxw873ookj</p><FaCopy/></div></div>
        <select className="outline-none w-full h-1007 rounded-lg text-white border-2 border-solid border-purple  bg-black px-3">
        <option>Self pickup</option>
        <option>Third party</option>
      </select>
      </form>
      <button className="bg-purple text-white fixed bottom-14 w-103 rounded-full h-1005 right-4">Continue</button>
      <button className=" text-white bg-black fixed bottom-14 w-103 rounded-full h-1005 left-4">Reject</button>
    </div>
  )
}

export default Buyer