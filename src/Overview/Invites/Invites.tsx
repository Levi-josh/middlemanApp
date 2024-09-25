import { useState,FormEvent,ChangeEvent} from "react"
import { FaLink ,FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion';

interface errMessage{
    username:string,
    password:string,
    otherErr:string
  }
  interface ErrorMessage {
    message: errMessage;
  }

const Invites = () => {
    const [inviteCode,setInviteCode]=useState("")
    const [userid,setUserid]=useState("")
    const [data,setData]=useState("")
    const [errorMsg,setErrorMsg] = useState<ErrorMessage|null>()
    const [ran,setRan]=useState(false)
    const [ searchedUser ,setSearchedUser ]=useState({username:'',profilePic:''})
    const myid= localStorage.getItem('Id')
    // const handSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    //     e.preventDefault();
    //     setRan(true)
    //     const option = {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body:JSON.stringify({userid:userid, myid:myid })
    //     }
    //     try {
    //         const response = await fetch(`https://middlemanbackend.onrender.com/sendInvite`, option);
    //         const data = await response.json()
    //         setData(data)
    //         data&&setTimeout(() => {
    //             setRan(false)  
    //         }, 3000);
    //     }
    //     catch (err) {
    //     console.log(err)
    //     }
    
    // }

    const handSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inviteCode.length < 36)return
        setRan(true);
        const option = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userid: userid, myid: myid })
        };
    
        try {
            const response = await fetch(`https://middlemanbackend.onrender.com/sendInvite`, option);
            const data = await response.json();
            if (!response.ok) {
              setRan(false);
              setErrorMsg({message:data.errorMessage})
            }else{
              setData(data)
              setTimeout(() => {
                setRan(false)  
            }, 3000); 
            }   
        } 
        catch (err:any) {
            setRan(false)
            setErrorMsg({message:{
              username:'',
              password:'',
              otherErr:err.message 
            }})
        }
    };
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{ 
        setInviteCode(e.target.value)
        const inviteValue = e.target.value
        const searchInvite = async()=>{
            const option = {
                method: 'Get',
                headers: {
                    'content-type': 'application/json',
                },
            }
            try {
                const response = await fetch(` https://middlemanbackend.onrender.com/searchInvite/${inviteValue}`, option);
                const data = await response.json();
                if (!response.ok) {
                  setRan(false);
                  setErrorMsg({message:data.errorMessage})
                }else{
                    setUserid(data.id)
                    setSearchedUser(data)
                }
            }
            catch (err:any) {
                setErrorMsg({message:{
                    username:'',
                    password:'',
                    otherErr:err.message 
                  }})
            }
        }
        if (inviteValue.length === 36) {
            searchInvite() 
        }
    }
  return (
    <div className="w-full h-screen fixed bg-black flex justify-center items-center">
        <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
        <form onSubmit={handSubmit} className="flex flex-col pb-10 lg:pb-0 w-109 h-108 items-center sm:w-108 md:w-107 lg:w-105 gap-10 justify-between lg:justify-start">
        <div className="flex flex-col gap-5 items-center sm:gap-7">
        <div className="flex flex-col items-center gap-5 sm:gap-7">
        <div className="flex flex-col items-center gap-3 w-full">
        <div className='sm:h-16 sm:w-16 w-14 h-14 rounded-full flex justify-center items-center  text-white bg-purple ' ><FaLink  className="w-5 h-5 sm:w-6 sm:h-6"/></div>
        <h1 className="text-white text-center text-base sm:text-lg  font-semibold  ">Invite User</h1>
        </div>
        <p className="text-white text-center  text-sm sm:text-base ">Paste the user's invitecode below to send a business transaction invitation.</p>
        </div>
        <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <input type="text" required className="w-full h-10 sm:h-12 lg:h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-lg placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" onChange={handleChange} value={inviteCode} placeholder="Enter invite code"  />
        {searchedUser.username &&<div className="flex gap-5 rounded-lg pl-5 items-center w-full h-16 sm:h-20 bg-black2">
            <div className="sm:w-12 sm:h-12 object-cover  w-10 h-10 overflow-hidden rounded-full bg-black2 outline outline-3 outline-purple">
                <img src={searchedUser?.profilePic} className="w-full h-full"/>
            </div>
            <p className="text-white">{searchedUser.username}</p>
        </div>}
        <p className={`text-sm text-red-500 sm:text-base font-semibold ${errorMsg?.message?.otherErr?'visible':'invisible'} `}>{errorMsg?.message?.otherErr}</p>
        </div>
        </div>
        <button className="bg-purple  text-white  w-full rounded-lg h-10 flex justify-center items-center  sm:h-12 lg:w-108 xl:w-107">{!ran?`Invite`:data?`Sent`:<motion.div animate={{rotate:360}} transition={{duration:1,repeat: Infinity, ease: 'linear'}} className='' > <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 18V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.929 4.929L7.757 7.757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.243 16.243L19.071 19.071" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.929 19.071L7.757 16.243" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.243 7.757L19.071 4.929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></motion.div>}
        </button>
        </form>
    </div>
  )
}

export default Invites