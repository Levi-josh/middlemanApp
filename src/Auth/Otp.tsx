import React, { useRef, useState,FormEvent} from 'react';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion';
import { FaRotate } from "react-icons/fa6"


const Otp = () => {
const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
const navigate = useNavigate()
const [ran,setRan]=useState(false)
const [otps, setOtp] = useState(Array(6).fill(''));


const verifyOtp = async(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  setRan(true)
  const otp = otps.join("")
  const option = {
    method: 'Post',
    headers: {
        'content-type': 'application/json',
    },
    body:JSON.stringify({otp})
  }
  try {
    const response = await fetch(` https://middlemanbackend.onrender.com/verify-otp`, option);
    const data = await response.json()
    console.log(data)
    localStorage.setItem('Id', data.UserId)
    data && navigate('/verified')
  }
  catch (err) {
  console.log(err)
  }
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key !== 'Shift' && e.key !== 'Tab') { // Avoid moving focus on Shift or Tab
        if (index < inputRefs.current.length - 1) {
          // const nextInput = inputRefs.current[index + 1];
          // if (nextInput) {
          //   nextInput.focus();
          // }
        }
      }
      // if (e.key === 'Backspace') {

      //   if (index === 5) {
      //     const prevInput = inputRefs.current[index - 1];
      //     if (prevInput) {
      //       prevInput.focus();
      //     }
      //   }

      // }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const value = e.target.value;
        const newOtp = [...otps];
        newOtp[index] = value;
        setOtp(newOtp);
        if (index < inputRefs.current.length - 1 && value) {
           const nextInput = inputRefs.current[index + 1];
           if (nextInput) {
             nextInput.focus();
           }
        }
        
        if (index < inputRefs.current.length - 1 && !value) {
          const prevInput = inputRefs.current[index - 1];
          if (prevInput) {
            prevInput.focus();
          }
        }
    };
    return (
      <div className="flex flex-col fixed items-center justify-center  bg-black w-full h-full ">
        <div className='w-109 md:w-107 h-108 sm:h-107 lg:w-106 xl:w-105 flex items-center flex-col  gap-7  '>
        <div className='w-full flex items-center flex-col gap-5 sm:gap-7'>
          <div className='flex flex-col items-center text-white gap-3'>
            <div className='sm:w-20 sm:h-20 w-14 h-14 rounded-full flex justify-center items-center text-white bg-purple'><FaLock/></div>
            <p className="text-white text-center font-semibold text-lg lg:text-xl">verification code</p>
          </div>
          <div className='flex w-full items-center gap-2 text-sm lg:text-base justify-center text-white  '><p className="">This is an end to end encryption</p><FaLock className="text-xs"/><p className=' '>02:00</p></div>
        </div>
        <form onSubmit={verifyOtp} className='flex flex-col h-full w-full items-center  justify-between '>
          <div className="flex items-center gap-3" >
          {Array(6).fill('').map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={otps[index]}
              className="w-10 h-10 sm:h-12 sm:w-12 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-demotext"
              ref={el => inputRefs.current[index] = el}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onChange={(e) => handleChange(e, index)}
              autoFocus={index === 0} // autofocus only the first input
            />
          ))}
          </div>
          <button className='w-full md:w-106 flex justify-center items-center h-10 sm:h-12 bg-purple text-white rounded-lg'>{!ran?`Verify`:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' ><FaRotate/></motion.div>}</button>
        </form>
        </div>
      </div>
    )
}

export default Otp