import { FaSearch } from "react-icons/fa"


const Header2 = () => {
  return (
    <div className="w-full z-10 bg-black px-3 sm:px-4 md:px-5 lg:px-3 flex items-center right lg:absolute right-0 top-0  justify-between fixed h-14 sm:h-16">
      <p>Chat</p>
      <div className="bg-black2 w-8 h-8 rounded-lg justify-center hover:transition-all hover:bg-black1 hover:cursor-pointer items-center text-white flex">
        <FaSearch/>
      </div>
    </div>
  )
}

export default Header2