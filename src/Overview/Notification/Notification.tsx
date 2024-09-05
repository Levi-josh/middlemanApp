
import {FaArrowLeft, FaBell} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRotateLeft  } from "react-icons/fa6"


const Notification = () => {
    interface message {
        _id:String
        note:String,
        accept:Boolean,
        reject:Boolean,
        username:String,
        pic:String
    }
    interface Note {
        message:message[]
      }
    const [notes, setNotes] = useState<Note|null>();
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
        const response = await fetch(`https://middlemanbackend.onrender.com/getNotes/${Id}`, option);
        const data = await response.json()
        setNotes(data)
       console.log(data)
    }
    catch (err:any) {
        console.log(err)
        setErrors(err)
      }
    }
    fetchUsers()
    },[notes])
console.log(notes)
    const acceptInvite = async(note:any)=>{
        const option = {
          method: 'Put',
          headers: {
              'content-type': 'application/json',
          },
      }
      try {
          const response = await fetch(`https://middlemanbackend.onrender.com/acceptInvite/${note}/${Id}`, option);
          const data = await response.json()
          console.log(data)
      }
      catch (err:any) {
          console.log(err)
          setErrors(err)
        }
      }
  console.log(notes?.message)
  return (
    <div className="w-full h-screen fixed bg-black overflow-auto   flex justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
    <div className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
    <div className="flex flex-col gap-5 items-center sm:gap-7">
        <div className="flex flex-col items-center gap-5 sm:gap-7">
            <div className="flex flex-col items-center gap-3 w-full">
                <div className='sm:w-20 sm:h-20 w-14 h-14 rounded-full flex justify-center items-center  text-white bg-purple text-xl sm:text-2xl' ><FaBell/></div>
                {notes?.message.length===1&&<h1 className="text-white text-center text-lg sm:text-xl font-semibold  ">Notifications</h1>}
            </div>
            {/* <p className="text-white text-center  text-sm sm:text-base ">Ask the user for their <span className="font-bold ">invite code</span>,then paste it in the input below. please make sure the code is correct and complete.</p> */}
        </div>
        <div className='w-full gap-3 flex flex-col'>
            {notes && notes.message && notes.message.length > 0 ? (
                notes.message.map((prev:any) => (
                    <div className='w-full h-auto rounded-lg p-3 sm:p-5 bg-black2 flex flex-col gap-3 sm:gap-7 md:flex-row md:items-start'>
                    <div className='w-full  h-full flex gap-2 sm:gap-5 items-start'>
                        <div className="sm:w-16 sm:h-16 object-cover flex-shrink-0 w-10 h-10 overflow-hidden bg-black2">
                        <img src={prev?.pic} alt="Profile" className="h-full w-full" />
                        </div>
                        <p className='text-white text-sm sm:text-base'>{prev.note}</p>
                    </div>
                    {prev.accept === false && prev.reject === false && (
                        <div className='w-full md:w-103 h-full flex justify-end text-white gap-2 sm:gap-4 items-start'>
                        <button className='bg-purple rounded-md py-1 sm:py-2 lg:py-1 sm:px-4 w-1025 md:w-full text-sm sm:text-base' onClick={()=>acceptInvite(prev._id)}>Accept</button>
                        <button className='bg-purple rounded-md py-1 sm:py-2 lg:py-1 sm:px-4 w-1025 md:w-full text-sm sm:text-base'>Reject</button>
                        </div>
                    )}
                    {prev.accept && (
                        <div className='w-full md:w-103 h-full flex justify-end text-white gap-2 sm:gap-4 items-start'>
                            <div className="bg-purple rounded-md py-1 sm:py-2 lg:py-1 sm:px-4 w-1025 md:w-full text-sm sm:text-base">Accepted</div>
                        </div>
                    )}
                    </div>
                ))
                ) : notes && notes.message && notes.message.length === 0 ? (
                <p className='text-white mt-20 sm:text-lg font-semibold'>No notifications yet!</p>
                ) : (
                <div className="flex justify-center lg:mt-20 mt-28 md:mt-32 text-white">
                    {errors ? (
                    <div className='bg-purple px-6 py-1 sm:px-10 hover:cursor-pointer h-auto rounded-full flex items-center gap-1'>
                        <FaArrowRotateLeft />
                        <p>Retry</p>
                    </div>
                    ) : (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className=''
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 18V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.929 4.929L7.757 7.757" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.243 16.243L19.071 19.071" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.929 19.071L7.757 16.243" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.243 7.757L19.071 4.929" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                    )}
                </div>
                )}
        </div>
    </div>

    </div>
</div>
  )
}

export default Notification