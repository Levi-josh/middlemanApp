import { Outlet } from "react-router-dom"
import MktHearder from "../../Header/MktHearder"



const Market = () => {
  return (
    <div className="bg-black2 w-full h-screen">
        <MktHearder/>
        <Outlet/>
    </div>
  )
}

export default Market