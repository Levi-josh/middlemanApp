import { FaEllipsisH } from "react-icons/fa"

const Pending2 = () => {
  return (
    <div className="flex flex-col w-full h-full gap-7 pt-24 items-center px-4">
        <div className="w-16 h-16 rounded-full bg-purple border border-solid border-purple  flex justify-center items-center"><FaEllipsisH className="text-white text-3xl"/></div>
        <h1 className="text-white">Pending ...</h1>
        <p className="text-white text-center">Your transaction with josh kelly is not completed because you are yet to verify the transaction.</p>
    </div>
  )
}

export default Pending2