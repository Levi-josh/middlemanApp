import { useSearchParams} from "react-router-dom"
import {  useEffect } from "react"
import { useNavigate} from "react-router-dom"
// import { useDispatch } from 'react-redux';
// import { verifyAuth } from '../Feature/Redux';
// import { AppDispatch } from '../Feature/Store';

const Overview2 = () => {
  const [searchParams] = useSearchParams();
  const paramsId = searchParams.get('Userid');
  const paramsToken = searchParams.get('token');
  //  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  useEffect(() => {
    if(paramsToken){
      const mydata = { value:paramsToken, expiration: Date.now() + 86400000,Id:paramsId }; // Expires in 24 hours
      localStorage.setItem('myData', JSON.stringify(mydata));}
    const storedDataString = localStorage.getItem('myData');
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
    

return (
<div className=" w-full h-screen">
</div>
  )
}

export default Overview2