import { useState,FormEvent } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const PhoneLogin = () => {
const [text,setText]=useState("")
const navigate = useNavigate()
const handSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(text){
    localStorage.setItem('Id', text)
    navigate('/login/otp')
    }
}
  return (
    <div className="flex justify-center w-full h-screen demo items-center">
        <NavLink to={'/login'} relative="path"><FaArrowLeft className="absolute text-white top-3 left-3"/></NavLink>
        <form onSubmit={handSubmit} className="bg-black w-109 lg:hidden h-108 sm:w-1065 md:w-106 lg:w-106 xl:w-105 lg:h-full flex flex-col justify-center  px-4 ">
          <div className="flex flex-col gap-10 w-full justify-center items-center">
            <input type="email" className="w-full h-10 bg-black border-0.1   border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter an email"  />
            <input type="text" className="w-full h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" onChange={e=>{setText(e.target.value)}} value={text} placeholder="Enter a username"  />
            <input type="password" className="w-full h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" placeholder="Enter a password"  />
            <button className="w-full h-10 bg-purple text-white">Sign</button>
          </div>
          <div className="flex flex-col gap-10 mt-7 w-full justify-center items-center">
            <div className=" w-full h-auto gap-3   flex items-center">
              <hr className="border-demotext   w-full"/>
              <p className="text-white">Or</p>
              <hr className="w-full  border-demotext "/>
            </div>
            <div className="w-full h-10 demo text-white flex justify-center items-center">Google</div>
          </div>
        </form>  
    </div>
  )
}

export default PhoneLogin