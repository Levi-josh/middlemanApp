import { useState,FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import midman from '../assets/IMG-20230507-WA0018.jpg'
import { NavLink } from "react-router-dom"

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
    <div className="bg-black2 w-full h-full px-4 sm:px-6 md:px-8 lg:px-0 lg:flex justify-center overflow-auto  lg:justify-normal fixed ">
        <form onSubmit={handSubmit} className="bg-black w-109 hidden h-108 sm:w-1065 md:w-106 lg:w-106 xl:w-105 lg:h-full lg:flex flex-col justify-center  px-4 ">
          <div className="flex flex-col gap-10 w-full justify-center items-center">
            <input type="email" className="w-full h-10 bg-black border-0.1   border-gray-700  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1"  placeholder="Enter an email"  />
            <input type="text" className="w-full h-10 bg-black border border-solid  border-gray-700  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1" onChange={e=>{setText(e.target.value)}} value={text} placeholder="Enter a username"  />
            <input type="password" className="w-full h-10 bg-black border border-solid  border-gray-700  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1" placeholder="Enter a password"  />
          </div>
          <div className="flex flex-col gap-10 mt-7 w-full justify-center items-center">
            <div className=" w-full h-auto gap-3   flex items-center">
              <hr className="border-gray-700   w-full"/>
              <p className="text-white">Or</p>
              <hr className="w-full border-gray-700 "/>
            </div>
            <div className="w-full h-10 bg-black2 text-white flex justify-center items-center">Google</div>
          </div>
        </form>
        <div className="lg:px-7 lg:pt-5 overflow-auto flex flex-col gap-7 ">
          <div className="flex flex-col lg:items-center  justify-between w-full gap-4 ">
              <div className="flex lg:hidden   py-3 justify-between items-center ">
                <img src={midman} className="bg-no-repeat bg-cover bg-center rounded-full w-12 h-12"/> 
                <div className="flex items-center gap-4">
                  <NavLink to={'/'}><button className="w-full bg-purple px-4 py-1 rounded-full text-white">SignIn</button></NavLink>
                  <button className="w-full bg-purple px-4 py-1 rounded-full text-white">SignUp</button>
                </div> 
              </div>
              <img src={midman} className="bg-no-repeat bg-cover bg-center rounded-full w-24 h-24 hidden lg:block"/>
              <div className="flex flex-col items-center gap-1">
              <h1 className="text-purple font-bold text-xl lg:text-2xl">Welcome to The Middleman</h1>
              <h2 className="text-white text-sm font-sans lg:text-base">Your Trusted Escrow Service for Secure Transactions...</h2>
              </div>
          </div>
          <div className="w-full md:h-105 rounded-xl    bg-black  flex flex-col md:flex-row   ">
            <img src={'data:image/jpeg;base64,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'} className="bg-no-repeat bg-cover bg-center md:w-105 h-auto md:rounded-l-xl w-full object-cover  "/> 
            <div className="md:w-105 p-4 md:p-5 flex flex-col gap-3">
              <h1 className="font-bold text-purple text-xl text-center ">About us</h1>
              <div>
                <p className="text-white text-sm leading-5  sm:leading-6 md:leading-7 lg:leading-6  xl:leading-7 ">In the digital age, trust can be a tricky thing. Whether you're buying or selling goods and services online, the risk of scams and fraud can make even the simplest transactions nerve-wracking. That's where The Middleman comes in.</p>
                <p className="text-white text-sm leading-5 sm:leading-6 md:leading-7 lg:leading-6  xl:leading-7">The Middleman is here to facilitate your transactions with the utmost security and reliability.</p>
              </div>
            </div>
          </div>
          <div className="p-4  md:p-5  w-full bg-black rounded-xl flex flex-col gap-3">
            <h1 className="text-purple font-bold text-xl text-center md:text-start"> How It Works </h1>
            <div className=" text-white text-sm flex flex-col gap-4  ">
              <div className="flex gap-2 items-start"><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center font-semibold">1</div><p><span className="font-bold ">Buyer and Seller Agreement:</span> The buyer and seller agree on the terms of the transaction.</p></div>
              <div className="flex gap-2 items-start"><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center font-semibold">2</div><p><span className="font-bold ">Secure Payment:</span> The buyer deposits the payment with The Middleman.</p></div>
              <div className="flex gap-2 items-start"><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center font-semibold">3</div><p> <span className="font-bold ">Product Delivery:</span> The seller ships the product or provides the service.</p></div>
              <div className="flex gap-2 items-start"><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center font-semibold">4</div><p><span className="font-bold ">Confirmation:</span> The buyer confirms receipt and satisfaction with the item.</p></div> 
              <div className="flex gap-2 items-start"><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center font-semibold">5</div><p><span className="font-bold ">Release of Funds:</span> The Middleman releases the payment to the seller.</p> </div>
            </div>
          </div>
          <div className="p-4  lg:p-5 w-full bg-black rounded-xl flex flex-col gap-3">
            <h1 className=" font-bold text-purple text-xl text-center md:text-start">Why Choose Us?</h1>
            <div className=" text-white text-sm flex flex-col gap-4 ">
              <div className="flex gap-2 items-start"><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center font-semibold">1</div><p><span className="font-bold "> Safety First:</span> We hold the payment securely until the buyer confirms they've received the product or service.</p></div>
              <div className="flex gap-2 items-start"><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center font-semibold">2</div><p><span className="font-bold ">Peace of Mind:</span> Both buyers and sellers can engage in transactions with confidence, knowing their funds and products are protected.</p></div>
              <div className="flex gap-2 items-start"><div className="w-5 h-5 rounded-full bg-purple flex items-center justify-center font-semibold">3</div><p> <span className="font-bold "> User-Friendly:</span> Our platform is designed to be intuitive and easy to use, making the process smooth and hassle-free.</p></div>
            </div>
          </div>
          <div>
            <p>Sign up now and experience the safest way to buy and sell online.</p>
          </div>
        </div>
    </div>
  )
}

export default Login