import { FaMoneyBill, FaMoneyBillTransfer, FaWallet } from "react-icons/fa6"

const Dashboard = () => {
  return (
    <div className="bg-black flex rounded-lg justify-evenly px-4 sm:p-6 lg:p-3 flex-col h-full lg:w-1085 w-full lg:mt-6 ">
      <h1 className="text-white sm:text-lg   font-semibold">Overview</h1>
      <div className="demo  flex items-center gap-4 h-100025 p-2   lg:w-1083 rounded-lg">
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
        <div className="h-full w-103  demo  rounded-lg p-2 ">
        <div className="w-full h-full  bg-black flex rounded-lg gap-3 justify-center items-center flex-col">
          <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><FaWallet className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-base ">Withdraw</p></div>
        </div>
        <div className="h-full w-103  flex-col demo  rounded-lg p-2 ">
        <div className="w-full h-full rounded-lg bg-black flex gap-3 justify-center items-center flex-col">
          <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><FaMoneyBill className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-base ">Deposit</p></div>
        </div>
        <div className="h-full w-103  demo  rounded-lg p-2 ">
        <div className="w-full h-full rounded-lg bg-black flex gap-3 justify-center items-center flex-col">
          <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><FaMoneyBillTransfer className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-base ">Transfer</p></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard