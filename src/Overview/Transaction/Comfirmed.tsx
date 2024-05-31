import { FaCheck } from "react-icons/fa"


const Comfirmed = () => {
  return (
    <div className="flex flex-col w-full h-full gap-7 pt-24  items-center px-4">
        <div className="w-16 h-16 rounded-full bg-purple border border-solid border-purple  flex justify-center items-center"><FaCheck className="text-white text-3xl"/></div>
        <h1 className="text-white">Transaction Completed</h1>
        <p className="text-white text-center">Your transaction with josh kelly has been completed and your money will no longer be held pending.</p>
    </div>
  )
}

export default Comfirmed