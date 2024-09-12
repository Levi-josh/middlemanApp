import { FaHistory } from "react-icons/fa"
import {FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import {  FaArrowRotateLeft } from "react-icons/fa6"

const History = () => {
  interface offerOption {
    _id: string;
    options:String,
    choosen:Boolean
  }
  interface buyOrsellOptions {
    _id: string;
    options:String,
    choosen:Boolean
  }
  interface thirdOrSecondOptions {
    _id: string;
    options:String,
    choosen:Boolean
  }
  interface transaction {
    _id: string;
    transactionWith:{
      username:String,
      pic:String
  },
    transactionToken:String,
    buyOrSell:buyOrsellOptions[],
    thirdpartyInvite:String,
    deals:{
        deliveryDate:String,
        amount:Number,
        walletId:String,
        offer:offerOption[]
    },
    thirdOrSecond:thirdOrSecondOptions[],
    completed:Boolean
  }
  const [history, setHistory] = useState<transaction[]|null>();
  const [errors, setErrors] = useState<String>('');
  const Id = localStorage.getItem('Id')
  useEffect(()=>{
  const fetchUsers = async()=>{
    const option = {
      method: 'Get',
      headers: {
          'content-type': 'application/json',
      },
  }
  try {
      const response = await fetch(`https://middlemanbackend.onrender.com/getHistory/${Id}`, option);
      const data = await response.json()
      setHistory(data)
     console.log(data)
  }
  catch (err:any) {
    console.log(err)
    setErrors(err)
  }
  }
  fetchUsers()
  },[])
  return (
    <div className=" h-screen w-full text-white flex fixed flex-col justify-center items-center bg-black">
       <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
      <div className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-5 sm:gap-7 ">
        <div className="flex flex-col items-center gap-5 sm:gap-7">
          <div className="flex flex-col items-center gap-3 w-full">
            <div className='sm:h-16 sm:w-16 w-14 h-14 rounded-full flex justify-center items-center  text-white bg-purple text-xl sm:text-2xl' ><FaHistory className=''/></div>
            {history&&<h1 className="text-white text-center sm:text-lg  font-semibold  ">Transaction History</h1>}
          </div>
          {history?.length===1&&<p className="text-white text-center  text-sm sm:text-base ">These are list of people you accepted and sent an invite</p>}
        </div> 
        <div className="flex flex-col items-center gap-5 w-full">
        {history&&history.length>0?history?.map(prev=>(
          <div className="w-full h-auto bg-black2 rounded-lg p-2  sm:p-4 flex items-center gap-3 sm:gap-5">
            <div className="sm:w-24 sm:h-24 flex-shrink-0  w-20 h-20 overflow-hidden  bg-black2 ">
              <img src={`https://middlemanbackend.onrender.com${prev.transactionWith.pic}`}/>
            </div>
            <div className="w-full ">
              <div className='flex items-center justify-between w-full text-sm sm:text-base'><p>Transaction With :</p><p>{prev.transactionWith.username}</p></div>
              <div className='flex items-center justify-between w-full text-sm sm:text-base'><p>Amount paid :</p><p>{`${prev.deals.amount}`}</p></div>
              <div className='flex items-center justify-between w-full text-sm sm:text-base'><p>Date :</p><p>{prev.deals.deliveryDate}</p></div>
              <div className='flex items-center justify-between w-full text-sm sm:text-base'><p>Status :</p><p>{prev.completed?'Completed':'pending'}</p></div>
            </div>
          </div>)):history&&history.length===0?(<p className='text-white  mt-20  sm:text-lg font-semibold '>No transaction history yet!</p>)
        :
        <div className="flex justify-center lg:mt-20 mt-28 md:mt-32  ">{errors?<div className='bg-purple px-6 py-1 sm:px-10 hover:cursor-pointer h-auto  rounded-full flex items-center gap-1'><FaArrowRotateLeft/><p >Retry</p></div>:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' >            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 18V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.929 4.929L7.757 7.757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.243 16.243L19.071 19.071" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.929 19.071L7.757 16.243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.243 7.757L19.071 4.929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></motion.div>}
        </div> 
        }
        </div>
      </div>
    </div>
  )
}

export default History