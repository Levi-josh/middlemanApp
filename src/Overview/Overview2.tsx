import Chat from "./Chat/Chat"
import { Outlet } from 'react-router-dom'
const Overview2 = () => {
return (
<div className="hidden lg:flex demo w-full h-screen">
<Outlet/>
<Chat/>
</div>
  )
}

export default Overview2