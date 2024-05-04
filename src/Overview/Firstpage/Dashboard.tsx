import { FaMoneyBill, FaMoneyBillTransfer, FaWallet } from "react-icons/fa6"

const Dashboard = () => {
  return (
    <div className="bg-black flex rounded-lg justify-evenly px-4 sm:p-6 lg:p-3 flex-col h-full lg:w-1085 w-full lg:mt-6 ">
      <h1 className="text-white sm:text-lg   font-semibold">Overview</h1>
      <div className="bg-black2 flex items-center gap-4 h-100025 p-2 sm:p-4 lg:w-1083 rounded-lg">
        <div className="flex flex-col justify-center  bg-black w-full h-full px-2 sm:px-3  rounded-lg ">
          <p className="text-white sm:text-lg font-semibold   ">Balance</p>
          <p className="text-sm text-white sm:text-base">$10,000</p>
        </div>
        <div className="flex flex-col justify-center bg-black2 w-full h-full hover:bg-black1 px-2 sm:px-3 rounded-lg ">
          <p className="text-white sm:text-lg font-semibold  ">Pending</p>
          <p className="text-sm text-white sm:text-base">$100</p>
        </div>
      </div>
      <h1 className="text-white sm:text-lg   font-semibold">Money Transfer</h1>
      <div className="flex h-10004 justify-between">
        <div className="h-full w-103 flex gap-3 justify-center items-center flex-col bg-black2 rounded-lg ">
          <div className=" w-12 h-12 flex justify-center items-center rounded-full bg-black"><FaWallet/></div>
          <p>Withdraw</p>
        </div>
        <div className="h-full w-103 flex gap-3 justify-center items-center flex-col bg-black2 rounded-lg ">
          <div className=" w-12 h-12 flex justify-center items-center rounded-full bg-black"><FaMoneyBill/></div>
          <p>Deposit</p>
        </div>
        <div className="h-full w-103 flex gap-3 justify-center items-center flex-col bg-black2 rounded-lg ">
          <div className=" w-12 h-12 flex justify-center items-center rounded-full bg-black"><FaMoneyBillTransfer/></div>
          <p>Transfer</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard