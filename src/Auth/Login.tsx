import { useState,FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import midman from '../assets/IMG-20230507-WA0018.jpg'

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
    <div className="bg-black2 w-full h-full lg:flex justify-center overflow-auto  lg:justify-normal fixed ">
        <form onSubmit={handSubmit} className="bg-black w-109 hidden h-108 sm:w-1065 md:w-106 lg:w-106 xl:w-104 lg:h-full lg:flex flex-col justify-center  px-4 ">
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
        <div>
          <div className="w-full flex items-center  flex-col gap-10 bg-purple">
            <div className="flex lg:flex-col items-center w-full">
              <img src={midman} className="bg-no-repeat bg-cover bg-center rounded-full w-24 h-24"/>
              <div className="flex flex-col items-center">
              <h1 className="text-white">Welcome to The Middleman</h1>
              <h2 className="text-white text-sm font-serif">Your Trusted Escrow Service for Secure Transactions...</h2>
              </div>
            </div>
            <p className="text-white text-sm ">In the digital age, trust can be a tricky thing. Whether you're buying or selling goods and services online, the risk of scams and fraud can make even the simplest transactions nerve-wracking. That's where The Middleman comes in.</p>
          </div>
          <div>
            <h1> How It Works </h1>
            <ul>
              <li>Buyer and Seller Agreement: The buyer and seller agree on the terms of the transaction.</li>
              <li>Secure Payment: The buyer deposits the payment with The Middleman.</li>
              <li> Product Delivery: The seller ships the product or provides the service.</li>
              <li>Confirmation: The buyer confirms receipt and satisfaction with the item.</li> 
              <li>Release of Funds: The Middleman releases the payment to the seller.</li> 
            </ul>
          </div>
          <div>
            <h1>Why Choose Us?</h1>
            <p> Safety First: We hold the payment securely until the buyer confirms they've received the product or service.</p>
            <p> Peace of Mind: Both buyers and sellers can engage in transactions with confidence, knowing their funds and products are protected.</p>
            <p> User-Friendly: Our platform is designed to be intuitive and easy to use, making the process smooth and hassle-free.</p>
          </div>
          <div>
            <p>Sign up now and experience the safest way to buy and sell online.</p>
          </div>
        </div>
    </div>
  )
}

export default Login