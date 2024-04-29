import { FaMoneyBill, FaMoneyBillTransfer, FaWallet } from "react-icons/fa6"

const Dashboard = () => {
  return (
    <div className="bg-black flex rounded-lg justify-between p-4 sm:p-6 flex-col h-full lg:w-1085 w-full lg:mt-6 ">
      <h1>Overview</h1>
      <div className="bg-black2 flex items-center gap-4 h-100025 p-2 sm:p-4 rounded-lg">
        <div className="flex flex-col justify-center bg-black w-full h-full p-1 sm:p-3 rounded-lg ">
          <p>Balance</p>
          <h1>$10,000</h1>
        </div>
        <div className="flex flex-col justify-center bg-black2 w-full h-full hover:bg-black1 p-1 sm:p-3 rounded-lg ">
          <p>Pending</p>
          <h1>$100</h1>
        </div>
      </div>
      <h1>Money Transfer</h1>
      <div className="flex h-10004 justify-between">
        <div className="h-full w-103 bg-black2 rounded-lg ">
          <div><FaWallet/></div>
          <p>Withdraw</p>
        </div>
        <div className="h-full w-103 bg-black2 rounded-lg">
          <div><FaMoneyBill/></div>
          <p>Deposit</p>
        </div>
        <div className="h-full w-103 bg-black2 rounded-lg">
          <div><FaMoneyBillTransfer/></div>
          <p>Transfer</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard