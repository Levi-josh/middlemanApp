import { FaAppStore, FaBell, FaQuestion } from "react-icons/fa6"



const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1>Middleman</h1>
      </div>
      <div className="flex justify-between items-center">
        <div><FaAppStore/></div>
        <div><FaBell/></div>
        <div><FaQuestion/></div>
      </div>
    </div>
  )
}

export default Header