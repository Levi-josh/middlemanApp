import React, { useRef, useState} from 'react';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"
const Otp = () => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const navigate = useNavigate()
    const [otp, setOtp] = useState(Array(6).fill(''));
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key !== 'Shift' && e.key !== 'Tab') { // Avoid moving focus on Shift or Tab
        if (index < inputRefs.current.length - 1) {
          // const nextInput = inputRefs.current[index + 1];
          // if (nextInput) {
          //   nextInput.focus();
          // }
        }
        if(index===6){
          navigate('/')
        }
        console.log(index)
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
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        console.log(value)
        console.log(newOtp[index])
        console.log(newOtp)
        console.log(index)
        if (index < inputRefs.current.length - 1 && value) {
           const nextInput = inputRefs.current[index + 1];
           if (nextInput) {
             nextInput.focus();
           }
           console.log(nextInput)
        }
        
        if (index < inputRefs.current.length - 1 && !value) {
          const prevInput = inputRefs.current[index - 1];
          if (prevInput) {
            prevInput.focus();
          }
          console.log(prevInput)
        }

        
      
    };
    return (
      <div className="flex flex-col items-center pt-24 bg-black  gap-7 w-full h-full px-4">
        <p className="text-white text-center font-semibold text-lg lg:text-2xl">Input verification code</p>
        <div className='flex w-full items-center text-sm lg:text-base justify-center '><p className="text-white ">This is an end to end encryption</p><FaLock className="text-white text-xs"/></div>
        <div className="flex items-center gap-3" >
        {Array(6).fill('').map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={otp[index]}
            className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-demotext"
            ref={el => inputRefs.current[index] = el}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onChange={(e) => handleChange(e, index)}
            autoFocus={index === 0} // autofocus only the first input
          />
        ))}
        </div>
      </div>
    )
}

export default Otp