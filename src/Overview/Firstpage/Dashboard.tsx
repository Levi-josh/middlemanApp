import { FaMoneyBill, FaMoneyBillTransfer, FaWallet } from "react-icons/fa6"

const Dashboard = () => {
  return (
    <div className="bg-black flex rounded-lg justify-evenly px-4 sm:p-6 lg:p-3 flex-col h-full lg:w-1085 w-full lg:mt-6 ">
      <h1 className="text-white sm:text-lg   font-semibold">Overview</h1>
      <div className="demo  flex items-center gap-4 h-100025 p-2 sm:p-4  lg:w-1083 rounded-lg">
        <div className="flex flex-col lg:flex-row  gap-2 justify-center lg:items-center lg:justify-between bg-black w-full h-full px-2 sm:px-3  rounded-lg ">
          <p className="text-white sm:text-lg font-semibold   ">Balance:</p>
          <p className="text-sm text-white sm:text-base">$10,000</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:items-center lg:justify-between bg-black w-full h-full px-2 sm:px-3 rounded-lg ">
          <p className="text-white sm:text-lg font-semibold  ">Pending:</p>
          <p className="text-sm text-white sm:text-base">$100</p>
        </div>
      </div>
      <h1 className="text-white sm:text-lg   font-semibold">Money Transfer</h1>
      <div className="flex h-10004 justify-between">
        <div className="h-full w-103 flex gap-3 justify-center items-center flex-col demo  rounded-lg ">
          <div className=" w-8 h-8 sm:w-14 sm:h-14 lg:w-14 lg:h-14 flex justify-center items-center rounded-full bg-purple"><FaWallet className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-lg ">Withdraw</p>
        </div>
        <div className="h-full w-103 flex gap-3 justify-center items-center flex-col demo  rounded-lg ">
          <div className=" w-8 h-8 sm:w-14 sm:h-14 lg:w-14 lg:h-14 flex justify-center items-center rounded-full bg-purple"><FaMoneyBill className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-lg ">Deposit</p>
        </div>
        <div className="h-full w-103 flex gap-3 justify-center items-center flex-col demo  rounded-lg ">
          <div className=" w-8 h-8 sm:w-14 sm:h-14 lg:w-14 lg:h-14 flex justify-center items-center rounded-full bg-purple"><FaMoneyBillTransfer className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-lg ">Transfer</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard