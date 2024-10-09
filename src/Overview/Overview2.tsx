import { useSearchParams} from "react-router-dom"
import {  useEffect } from "react"
import { useNavigate} from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import { verifyAuth } from '../Feature/Redux';
import { AppDispatch, RootState  } from '../Feature/Store';

const Overview2 = () => {
  const [searchParams] = useSearchParams();
  const loggedIn2 = searchParams.get('loggedIn');
  const dispatch = useDispatch<AppDispatch>();
  const isError= useSelector((state: RootState) => state.mode.error);
  const navigate = useNavigate()
   const loggedIn = localStorage.getItem('loggedIn')
  console.log(`loggin:${loggedIn2}` )
  console.log(isError )

useEffect(() => {
  dispatch(verifyAuth());
}, [dispatch]);
useEffect(() => {
  if (!loggedIn) {
    if (location.pathname !== '/landingPage') {
    navigate('/landingPage');
  }
}}, [loggedIn]);
// useEffect(() => {
//   if(isError){
//     localStorage.removeItem('loggedIn')
//   }
// }, [isError]);
return (
<div className=" w-full h-screen">
</div>
  )
}

export default Overview2