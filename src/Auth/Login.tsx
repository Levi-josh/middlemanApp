import { useState,FormEvent } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
const [text,setText]=useState("")
const navigate = useNavigate()
const handSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(text){
    localStorage.setItem('Id', text)
    navigate('/')
    }
}
  return (
    <div className="bg-black2 w-full h-screen flex justify-center items-center">
        <form onSubmit={handSubmit} className="bg-black w-109 h-108 sm:w-1065 md:w-106 lg:w-104 lg:h-109 flex flex-col justify-center items-center ">
          <div className="flex flex-col gap-10 w-full justify-center items-center">
            <input type="email" className="w-109 h-10 bg-black border-0.1   border-white  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1"  placeholder="Enter an email"  />
            <input type="text" className="w-109 h-10 bg-black border border-solid  border-gray-700  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1" onChange={e=>{setText(e.target.value)}} value={text} placeholder="Enter a username"  />
            <input type="password" className="w-109 h-10 bg-black border border-solid  border-gray-700  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1" placeholder="Enter a password"  />
          </div>
          <div className="flex flex-col gap-10 mt-7 w-full justify-center items-center">
            <div className=" w-full h-auto gap-3   flex items-center">
              <hr className="   w-full"/>
              <p className="text-white">Or</p>
              <hr className="   w-full"/>
            </div>
            <div className="w-109 h-10 bg-black2 text-white flex justify-center items-center">Google</div>
          </div>
        </form>
    </div>
  )
}

export default Login