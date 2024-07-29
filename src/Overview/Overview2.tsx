import Chat from "./Chat/Chat"
import { Outlet } from 'react-router-dom'
// import { useState, useEffect } from "react"
const Overview2 = () => {

return (
<div className="hidden lg:flex bg-black2 w-full h-screen">
<Outlet/>
<Chat />
</div>
  )
}

export default Overview2