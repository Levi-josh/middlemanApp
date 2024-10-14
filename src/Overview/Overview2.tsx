import { useSearchParams} from "react-router-dom"
import {  useEffect } from "react"
import { useNavigate} from "react-router-dom"
// import { useDispatch,useSelector } from 'react-redux';
// import { verifyAuth } from '../Feature/Redux';
// import { AppDispatch, RootState  } from '../Feature/Store';

const Overview2 = () => {
  const [searchParams] = useSearchParams();
  const loggedIn2 = searchParams.get('loggedIn');
  const navigate = useNavigate()
  console.log(`loggin:${loggedIn2}` )

  useEffect(() => {
    const storedDataString = localStorage.getItem('myData');
    if (storedDataString) {
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