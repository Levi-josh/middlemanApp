import { FaKey } from "react-icons/fa"


const Verify = () => {
  return (
    <div className="flex flex-col items-center pt-32 gap-7 w-full h-full px-4">
      <div className="w-16 h-16 rounded-full bg-purple   flex justify-center items-center"><FaKey className="text-white text-2xl"/></div>
      <p className="text-white text-center">Input your password to proof that you are the buyer</p>
      <div className="flex items-center gap-3">
        <input type="text" className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-purple" autoFocus={true} />
        <input type="text" className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-purple"/>
        <input type="text" className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-purple"/>
        <input type="text" className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-purple"/>
        <input type="text" className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-purple"/>
        <input type="text" className="w-10 h-10 rounded-md outline-none bg-black text-white text-center border-2 border-solid border-purple"/>
      </div>
    </div>
  )
}

export default Verify