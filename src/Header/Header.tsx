import { FaAppStore, FaBell, FaQuestion } from "react-icons/fa6"
import { motion } from 'framer-motion'
import pfp from '../assets/IMG-20230507-WA0018.jpg'
import { NavLink } from "react-router-dom"

const Header = (props:any) => {
  console.log(props.scrollPosition)
  return (
    <div className="flex bg-black2 overflow-hidden px-3 sm:px-5 lg:px-0 w-full fixed sm:static h-14 sm:h-16  justify-between items-center">
      <motion.div  animate={{x:props.scrollPosition>=82?'-120%':0}} transition={{type:'tween',duration: 0.1, delay: 0}} className="bg-black h-8 w-32 rounded-lg pl-2 flex items-center">
      <h1 className={`text-white ${props.scrollPosition==128?'hidden':'block'}`}>Middleman</h1>
      </motion.div>
      <motion.div animate={{y:props.scrollPosition>=82?0:'150%'}} transition={{type:'tween',duration: 0.1, delay: 0}}  className="outline outline-2 outline-purple w-8 h-8 rounded-full overflow-hidden absolute sm:hidden "><img src={pfp}/></motion.div>
      <div className="flex gap-6 items-center">
      <NavLink to={'/notification'}><div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex relative"><FaBell/><div className="bg-purple w-2 h-2 absolute top-1 right-2 rounded-full"></div></div></NavLink>
        <div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex"><FaAppStore/></div>
        <NavLink to={'/landingPage'}><div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex"><FaQuestion/></div></NavLink>
      </div>
    </div>
  )
}

export default Header