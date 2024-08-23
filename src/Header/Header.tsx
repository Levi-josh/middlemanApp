import { FaBell, FaCamera, FaQuestion } from "react-icons/fa6"
import { motion } from 'framer-motion'

import { NavLink } from "react-router-dom"

const Header = (props:any) => {

  return (
    <div className="flex bg-black2 z-30 overflow-hidden px-3 sm:px-5 lg:px-0 w-full fixed sm:static h-14 sm:h-16  justify-between items-center">
      <motion.div  animate={{x:props.scrollPosition>=82?'-120%':0}} transition={{type:'tween',duration: 0.1, delay: 0}} className="bg-black h-8 w-32 rounded-lg pl-2 flex items-center">
      <h1 className={`text-white ${props.scrollPosition==128?'hidden':'block'}`}>Middleman</h1>
      </motion.div>
      <motion.div animate={{y:props.scrollPosition>=82?0:'150%'}} transition={{type:'tween',duration: 0.1, delay: 0}}  className="outline outline-2 outline-purple flex items-center justify-center w-8 h-8 rounded-full overflow-hidden absolute sm:hidden ">{props.profilePic?<img src={`https://middlemanbackend.onrender.com${props?.profilePic}`}/>:<FaCamera className="text-xs"/>}</motion.div>
      <div className="flex gap-6 items-center">
        <NavLink to={'/notification'}><div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex relative"><FaBell/><div className="bg-purple w-2 h-2 absolute top-1 right-2 rounded-full"></div></div></NavLink>
        <NavLink to={'/setting'}><div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.5C14.4853 15.5 16.5 13.4853 16.5 11C16.5 8.51472 14.4853 6.5 12 6.5C9.51472 6.5 7.5 8.51472 7.5 11C7.5 13.4853 9.51472 15.5 12 15.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.5 11H19.5M5 7L6.5 3M18.5 7L17 3M5 15L6.5 19M18.5 15L17 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></div>
        </NavLink>
        <NavLink to={'/f&Q'}><div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex"><FaQuestion/></div></NavLink>
      </div>
    </div>
  )
}

export default Header