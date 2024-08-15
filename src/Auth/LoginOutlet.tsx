import { Outlet } from "react-router-dom"

const LoginOutlet = () => {
  return (
    <div className="w-full h-full fixed">
        <Outlet/>
    </div>
  )
}

export default LoginOutlet