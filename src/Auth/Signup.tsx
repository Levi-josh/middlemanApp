import { useState,FormEvent} from "react"
import { FaArrowLeft } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate = useNavigate()

const handSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const option = {
          method: 'Post',
          headers: {
              'content-type': 'application/json',
          },
          body:JSON.stringify({email,password})
    }
    try {
          const response = await fetch(` http://localhost:3500/signup`, option);
          const data = await response.json()
          data && navigate('/login/otp')
    }
    catch (err) {
    console.log(err)
    }
      
}
    return (
        <div className="flex justify-center fixed w-full h-screen bg-black items-center">
            <NavLink to={'/landingPage'} relative="path"><FaArrowLeft className="absolute text-white top-3 left-3"/></NavLink>
            <form onSubmit={handSubmit} className="bg-black w-109 lg:hidden h-108 sm:w-1065 md:w-106 lg:w-106 xl:w-105 lg:h-full flex flex-col items-center justify-between  ">
                <div className="h-10001 text-white font-bold text-lg sm:text-xl">
                {/* <img src={'data:image/png;base64,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'} className="bg-no-repeat bg-cover object-cover bg-center rounded-full w-24 h-24 flex-shrink-0 "/> */}
                <h1>SignUp</h1>
                </div>
              <div className="flex flex-col w-full items-center    h-10009 justify-start">
                <div className="flex flex-col gap-7 sm:gap-12 w-full justify-center items-center">
                  <input type="email" className="w-full h-10 sm:h-12 bg-black border-0.1   border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white"  placeholder="Enter an email" onChange={e=>{setEmail(e.target.value)}} value={email} />
                  <input type="password" className="w-full h-10 sm:h-12 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" placeholder="Enter a password" onChange={e=>{setPassword(e.target.value)}} value={password} />
                  <button className="w-full rounded-full h-10 sm:h-12 bg-purple text-white">Sign Up</button>
                </div>
                <div className="flex flex-col gap-5 sm:gap-7 mt-5 sm:mt-7 w-full justify-center items-center">
                  <div className=" w-full h-auto gap-3   flex items-center">
                    <hr className="border-demotext   w-full"/>
                    <p className="text-white">Or</p>
                    <hr className="w-full  border-demotext "/>
                  </div>
                  <div className="w-full h-10 rounded-full sm:h-12 bg-black2 text-white flex justify-center items-center">Google</div>
                  <p className="text-white">Already have an account? <span className="text-purple font-semibold"><NavLink to={'/landingPage/phoneSignin'}>Signin</NavLink></span></p>
                </div>
              </div>
            </form>  
        </div>
      )
}

export default Signup