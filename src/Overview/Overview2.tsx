import { useSearchParams} from "react-router-dom"
import {  useEffect } from "react"
import { useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { verifyAuth } from '../Feature/Redux';
import { AppDispatch } from '../Feature/Store';

const Overview2 = () => {
  const [searchParams] = useSearchParams();
  const loggedIn2 = searchParams.get('loggedIn');
   const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  console.log(`loggin:${loggedIn2}` )

  useEffect(() => {
    const storedDataString = localStorage.getItem('myData');
    if (storedDataString) {
      dispatch(verifyAuth)
      const storedData = JSON.parse(storedDataString);
      if (storedData && storedData.expiration < Date.now()) {
           localStorage.removeItem('myData');
      }
    } else {
     navigate('/landingPage')
    }
    
    }, []);

return (
<div className=" w-full h-screen">
</div>
  )
}

export default Overview2