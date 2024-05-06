import { FaAppStore, FaBell, FaQuestion } from "react-icons/fa6"
import { motion } from 'framer-motion'


const Header = (props:any) => {
  console.log(props.scrollPosition)
  return (
    <div className="flex bg-black2 px-3 w-full fixed sm:static h-14 sm:h-16  justify-between items-center">
      <motion.div initial={{x:'100%'}} animate={{x:props.scrollPosition==128?'-120%':0}} transition={{type:'tween',duration: 0.1, delay: 0}} className="bg-black h-8 w-32 rounded-lg pl-2 flex items-center">
      <h1 className={`text-white ${props.scrollPosition==128?'hidden':'block'}`}>Middleman</h1>
      </motion.div>
      <div className="flex gap-6 items-center">
        <div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex"><FaAppStore/></div>
        <div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex"><FaBell/></div>
        <div className="bg-black w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex"><FaQuestion/></div>
      </div>
    </div>
  )
}

export default Header