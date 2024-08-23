
import { NavLink } from "react-router-dom"

const Dashboard = (props:any) => {
  return (
    <div className="bg-black flex rounded-lg justify-evenly px-2 sm:p-6 lg:p-3 flex-col h-full lg:w-1085 w-full lg:mt-6 ">
      <h1 className="text-white text-sm sm:text-base   font-bold">Overview</h1>
      <div className="bg-black2 flex items-center gap-4 h-100025 p-2   lg:w-1083 rounded-lg">
        <div className="flex flex-col lg:flex-row  gap-2 justify-center lg:items-center lg:justify-between bg-black w-full h-full px-3  rounded-lg ">
          <p className="text-white text-sm sm:text-base font-semibold   ">Balance:</p>
          <p className="text-sm text-white sm:text-base">{props.balance?`${props.balance}`:'00'}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:items-center lg:justify-between bg-black w-full h-full px-3 rounded-lg ">
          <p className="text-white text-sm sm:text-base font-semibold  ">Pending:</p>
          <p className="text-sm text-white sm:text-base">{props.pending?`${props.pending}`:'00'}</p>
        </div>
      </div>
      <h1 className="text-white text-sm sm:text-base   font-bold">Money Transfer</h1>
      <div className="flex h-10004 w-full gap-2 sm:gap-0 sm:justify-between   ">
        <NavLink to={'deposit'} className={'w-full h-full sm:w-103 '}><div className="h-full w-full  bg-black2 rounded-lg p-2 ">
        <div className="w-full h-full  bg-black hover:transition-all hover:scale-105    hover:cursor-pointer flex rounded-lg gap-3 justify-center items-center flex-col">
          <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V15M12 15L7 10M12 15L17 10M5 20H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></div>
          <p className="text-white text-sm sm:text-base ">Deposit</p></div>
          {/* <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><FaWallet className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-base ">Deposit</p></div> */}
        </div></NavLink>
        <NavLink to={'withdraw'} className={'w-full h-full sm:w-103 '}><div className="h-full w-full   flex-col bg-black2 rounded-lg p-2 ">
        <div className="w-full h-full rounded-lg hover:cursor-pointer hover:transition-all hover:scale-105  bg-black flex gap-3 justify-center items-center flex-col">
          <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22V9M12 9L7 14M12 9L17 14M5 4H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></div>
          <p className="text-white text-sm sm:text-base ">Withdraw</p></div>
          {/* <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><FaMoneyBill className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-base ">Withdraw</p></div> */}
        </div></NavLink>
        <NavLink to={'transfer'} className={'w-full h-full sm:w-103 '}><div className="h-full w-full   bg-black2 rounded-lg p-2 ">
        <div className="w-full h-full rounded-lg  bg-black hover:cursor-pointer hover:transition-all hover:scale-105  flex gap-3 justify-center items-center flex-col">
          <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L9 16M5 12L9 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 12H19M19 12L15 16M19 12L15 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></div>
          <p className="text-white text-sm sm:text-base ">Transfer</p></div>
          {/* <div className=" w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-purple"><FaMoneyBillTransfer className="text-white text-base sm:text-lg lg:text-base"/></div>
          <p className="text-white text-sm sm:text-base ">Transfer</p></div> */}
        </div></NavLink>
      </div>
    </div>
  )
}

export default Dashboard