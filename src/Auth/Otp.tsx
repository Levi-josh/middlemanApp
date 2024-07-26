import React, { useRef, useState,FormEvent} from 'react';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"

const Otp = () => {
const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
const navigate = useNavigate()
const [otps, setOtp] = useState(Array(6).fill(''));


const verifyOtp = async(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  const otp = otps.join("")
  console.log(otp)
  const option = {
    method: 'Post',
    headers: {
        'content-type': 'application/json',
    },
    body:JSON.stringify({otp})
  }
  try {
    const response = await fetch(` http://localhost:3500/verify-otp`, option);
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
      <div className="flex flex-col items-center pt-24 bg-black  gap-7 w-full h-full px-4">
        <div className='w-full flex items-center flex-col gap-5'>
        <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center text-white bg-purple'><FaLock/></div>
        <div className='flex flex-col items-center text-white gap-1'>
        <p className="text-white text-center font-semibold text-lg lg:text-2xl">verification code</p>
        <div className='flex w-full items-center gap-2 text-sm lg:text-base justify-center '><p className="">This is an end to end encryption</p><FaLock className="text-white text-xs"/></div>
        <div className=''>02:00</div>
        </div>
        </div>
        <form onSubmit={verifyOtp} className='flex flex-col gap-10'>
        <div className="flex items-center gap-3" >
        {Array(6).fill('').map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={otps[index]}
            className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-demotext"
            ref={el => inputRefs.current[index] = el}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onChange={(e) => handleChange(e, index)}
            autoFocus={index === 0} // autofocus only the first input
          />
        ))}
        </div>
        <button className='w-full h-10 bg-purple text-white'>Verify</button>
        </form>
      </div>
    )
}

export default Otp