import { Outlet } from "react-router-dom"

const LoginOutlet = () => {
  return (
    <div className="fixed w-full h-full">
        <Outlet/>
    </div>
  )
}

export default LoginOutlet