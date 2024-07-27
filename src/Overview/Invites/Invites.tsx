import { useState,FormEvent,ChangeEvent} from "react"
import victor from '../../assets/IMG-20230507-WA0023.jpg'
import { FaLink ,FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const Invites = () => {
    const [inviteCode,setInviteCode]=useState("")
    const [userid,setUserid]=useState("")
    const [ searchedUser ,setSearchedUser ]=useState({username:'',profilePic:''})
    const myid= localStorage.getItem('Id')
    const handSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const option = {
            method: 'Post',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({userid, myid })
        }
        try {
            const response = await fetch(` http://localhost:3500/sendInvite`, option);
            const data = await response.json()
            console.log(data)
        }
        catch (err) {
        console.log(err)
        }
    
    }
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
                const response = await fetch(` http://localhost:3500/searchInvite/${inviteValue}`, option);
                const data = await response.json()
                setUserid(data.id)
                setSearchedUser(data)
                console.log(data)
            }
            catch (err) {
            console.log(err)
            }
        }
        if (inviteValue.length === 36) {
            searchInvite() 
            console.log('ran')
        }
    }
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
        <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-3 left-3"/></NavLink>
        <form onSubmit={handSubmit} className="flex flex-col w-109 h-108 items-center sm:w-108 md:w-107 lg:w-104 gap-10 sm:gap-14 justify-between">
        <div className="flex flex-col gap-5 items-center sm:gap-7">
        <div className="flex flex-col items-center gap-5 sm:gap-7">
        <div className='sm:w-20 sm:h-20 w-16 h-16 rounded-full flex justify-center items-center text-white bg-purple'><FaLink/></div>
        <p className="text-white text-center  text-sm sm:text-base">Ask the user you want to invite their <span className="font-bold ">invite code</span>,then paste it in the input below. please make sure the code is correct and complete.</p>
        </div>
        <div className="flex flex-col items-center gap-5 sm:gap-7 w-full">
        <input type="text" className="w-full h-10 sm:h-12 lg:h-10 bg-black border border-solid  border-demotext  text-white outline-none rounded-full placeholder:pl-1  pl-5 sm:py-1 placeholder:text-white" onChange={handleChange} value={inviteCode} placeholder="Enter invite code"  />
        {searchedUser &&<div className="flex gap-5 rounded-lg pl-5 items-center w-full h-16 sm:h-20 bg-black2">
            <div className="sm:w-12 sm:h-12  w-10 h-10 overflow-hidden rounded-full bg-black2 outline outline-3 outline-purple">
                <img src={victor}/>
            </div>
            {/* <p>{searchedUser?.username}</p> */}
            <p className="text-white">victor chinemerem</p>
        </div>}
        </div>
        </div>
        <button className="w-full h-10 md:w-106 bg-purple text-white rounded-lg">invite</button>
        </form>
    </div>
  )
}

export default Invites