import { FaAppStore, FaBell, FaQuestion } from "react-icons/fa6"



const Header = () => {
  return (
    <div className="flex bg-black2 h-14  justify-between items-center">
      <div className="bg-black h-8 w-32 rounded-lg pl-2 flex items-center">
        <h1>Middleman</h1>
      </div>
      <div className="flex gap-6 items-center">
        <div className="bg-black w-8 h-8 rounded-lg justify-center items-center flex"><FaAppStore/></div>
        <div className="bg-black w-8 h-8 rounded-lg justify-center items-center flex"><FaBell/></div>
        <div className="bg-black w-8 h-8 rounded-lg justify-center items-center flex"><FaQuestion/></div>
      </div>
    </div>
  )
}

export default Header