import { FaKey } from "react-icons/fa"
import React, { useRef } from 'react';

const Verify = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key !== 'Shift' && e.key !== 'Tab') { // Avoid moving focus on Shift or Tab
     
      if (index < inputRefs.current.length - 1) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };
  return (
    <div className="flex flex-col items-center pt-24  gap-7 w-full h-full px-4">
      <div className="w-16 h-16 rounded-full bg-purple   flex justify-center items-center"><FaKey className="text-white text-2xl"/></div>
      <p className="text-white text-center">Input your password to prove that you are the buyer</p>
      <div className="flex items-center gap-3" >
      {Array(6).fill('').map((_, index) => (
        <input
          key={index}
          type="text"
          className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-purple"
          ref={el => inputRefs.current[index] = el}
          onKeyDown={(e) => handleKeyDown(e, index)}
          autoFocus={index === 0} // autofocus only the first input
        />
      ))}
      </div>
    </div>
  )
}

export default Verify