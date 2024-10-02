import { FaArrowLeft} from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const Support = () => {
  return (
    <div className="w-full h-screen fixed bg-black flex text-white justify-center items-center">
    <NavLink to={'/'} relative="path"><FaArrowLeft className="absolute text-white top-7 left-7 sm:top-10 sm:left-10 "/></NavLink>
    <p>This feature is not ready yet!</p>
  </div>
  )
}

export default Support