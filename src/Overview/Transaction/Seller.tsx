

const Seller = () => {
  return (
    <div className="  h-full w-full  items-center flex flex-col ">
      <div className=" w-109  sm:w-108 md:w-107 lg:w-106  h-108 justify-between   flex flex-col gap-7  ">
        <form className="flex flex-col gap-5 ">
        <p className="text-white text-center ">Fill in the transaction details such as the date expected for the goods to reach the buyer,the amount for the goods and your walletID.</p>
        <input type="text" className="w-full h-1008 rounded-lg text-white border border-solid border-demotext outline-none bg-black placeholder:text-white placeholder:pl-3 " placeholder="Enter delivery date"/>
        <input type="text" className="w-full h-1008 rounded-lg text-white border border-solid border-demotext outline-none bg-black placeholder:text-white placeholder:pl-3 " placeholder="Enter Amount"/>
        <input type="text" className="w-full h-1008 rounded-lg text-white border border-solid border-demotext outline-none bg-black placeholder:text-white placeholder:pl-3 " placeholder="Enter WalletID"/>
        <select className="outline-none w-full h-1008 rounded-lg text-white border border-solid border-demotext  bg-black px-3">
          <option  value="" disabled selected>Pick delivery method</option>
          <option>Self delivery</option>
          <option>Third party</option>
        </select>
        </form>
        <div className="flex w-full justify-between">
          <button className=" text-white bg-black2 w-103 rounded-full h-10">Cancel</button>
          <button className="bg-purple text-white w-103 rounded-full h-10">Continue</button>
        </div>
      </div>
  </div>
  )
}

export default Seller