import { useSearchParams} from "react-router-dom"
import {  useEffect } from "react"
import { useNavigate} from "react-router-dom"
// import { useDispatch } from 'react-redux';
// import { verifyAuth } from '../Feature/Redux';
// import { AppDispatch } from '../Feature/Store';

const Overview2 = () => {
  const [searchParams] = useSearchParams();
  const loggedIn2 = searchParams.get('Userid');
  //  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const storedDataString = localStorage.getItem('myData');

  useEffect(() => {
    if (storedDataString) {
      // dispatch(verifyAuth)
      const storedData = JSON.parse(storedDataString);
      if (storedData && storedData.expiration < Date.now()) {
           localStorage.removeItem('myData');
      }
    } else {
     navigate('/landingPage')
    }  

    }, []);
console.log(`loggedIn2:${loggedIn2}`)
    

return (
<div className=" w-full h-screen">
</div>
  )
}

export default Overview2