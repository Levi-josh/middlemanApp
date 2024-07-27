import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa6"


const Header2 = () => {
  const [search,setSearch] = useState(true)
  const handleSearch = () => {
    setSearch(prev=>!prev)
  }
  return (
    <div className="w-full z-10 bg-black  lg:w-103 xl:w-1025 px-3 sm:px-4 md:px-5 lg:px-3 flex items-center right  right-0 top-0  justify-between fixed h-14 sm:h-16">
      {search?<><p>Chat</p>
      <div className="bg-black2 w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex" onClick={handleSearch}>
        <FaSearch/>
      </div></>:
      <div className="flex items-center w-full gap-2 ">
      <FaArrowLeft onClick={handleSearch}/>
      <div className="w-full relative flex items-center">
      <input className="w-full h-8 sm:h-10 bg-black2  rounded-full outline-none pl-5 text-white placeholder:text-white" placeholder="search" autoFocus/>
      <div className="bg-black2 rounded-full flex justify-center items-center absolute right-0 w-102 h-full" >
        <FaSearch/>
      </div>
      </div>
      </div>
      }
    </div>
  )
}

export default Header2