import { FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"


const Withdraw = () => {
  return (
    <div className="w-full h-screen bg-black flex text-white justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-3 left-3"/></NavLink>
    <p>This feature is not ready yet!</p>
</div>
  )
}

export default Withdraw