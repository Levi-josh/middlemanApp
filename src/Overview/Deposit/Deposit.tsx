import { FaLink ,FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useState,FormEvent} from "react"

const Deposit = () => {
  const [amount,setAmount]=useState("")
  const userId= localStorage.getItem('Id')
  const handSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const option = {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify({amount, userId})
    }
    try {
        const response = await fetch(` https://middlemanbackend.onrender.com/deposit`, option);
        const data = await response.json()
        console.log(data)
    }
    catch (err) {
    console.log(err)
    }

}
  return (
    <div className="w-full h-screen fixed bg-black flex justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
    <form onSubmit={handSubmit}  className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
    <div className="flex flex-col gap-5 items-center sm:gap-7 w-full">
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className='sm:w-20 sm:h-20 w-14 h-14 rounded-full flex justify-center items-center text-xl sm:text-2xl  text-white bg-purple' ><FaLink/></div>
          <h1 className="text-white text-center text-lg sm:text-xl  font-semibold  ">Deposit</h1>
        </div>
      <p className="text-white text-center  text-sm sm:text-base ">Add some money to your account balance</p>
      </div>
      <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <input type="text" className="w-full h-10 sm:h-12 lg:h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter amount" onChange={(e)=>setAmount(e.target.value)}  />
      </div>
    </div>
    <button className="bg-purple  text-white  w-full rounded-lg h-10  sm:h-12 lg:w-108 xl:w-107">Deposit</button>
    </form>
</div>
  )
}

export default Deposit