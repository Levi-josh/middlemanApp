
import { FaAngleDown } from "react-icons/fa6"


const Seller = () => {
  return (
    <div className="w-full h-full px-4 pt-24 flex flex-col gap-7 ">
      <p className="text-white ">Fill in the transaction details such as the date expected for the goods to reach the buyer,the amount for the goods and your walletID.</p>
    <form className="flex flex-col gap-5">
      <input type="text" className="w-full h-1007 rounded-lg text-white border-2 border-solid border-purple outline-none bg-black placeholder:text-white placeholder:pl-3 " placeholder="Enter delivery date"/>
      <input type="text" className="w-full h-1007 rounded-lg text-white border-2 border-solid border-purple outline-none bg-black placeholder:text-white placeholder:pl-3 " placeholder="Enter Amount"/>
      <input type="text" className="w-full h-1007 rounded-lg text-white border-2 border-solid border-purple outline-none bg-black placeholder:text-white placeholder:pl-3 " placeholder="Enter WalletID"/>
      <div className="flex justify-between items-center w-full h-1007 rounded-lg text-white border-2 border-solid border-purple  bg-black px-3"><p>Choose a delivery method</p><FaAngleDown/></div>
    </form>
    <button className="bg-purple text-white fixed bottom-14 w-103 rounded-full h-1005 right-4">Continue</button>
    <button className="bg-black text-white fixed bottom-14 w-103 rounded-full h-1005 left-4">Cancel</button>
  </div>
  )
}

export default Seller