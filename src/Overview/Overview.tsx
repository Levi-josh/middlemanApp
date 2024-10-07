import Firstpage from "./Firstpage/Firstpage"
import Chat from "./Chat/Chat"
import SwiperCore from 'swiper';
// import Laptopfirstpg from "./Firstpage/Laptopfirstpg"
import  { useRef, useState, } from 'react';
// import { useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './swiper.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import Footer from "../Footer/Footer";
import { useChatContext  } from './Chat/ChatContext'
// import {  useEffect } from "react"
// import { useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
// import { verifyAuth } from '../Feature/Redux';
import {  RootState  } from '../Feature/Store'; 


// import Test from "./Test";
const Overview: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>();
  const { fromChat } = useChatContext();
  const [iconFill,setIconfill]=useState(true)
  // const [isAuthenticated,setIsAuthenticated]=useState(false)
  // const [user,setUser]=useState<any|null>()
  // const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated= useSelector((state: RootState) => state.mode.error);
  // const navigate = useNavigate()
  // const [searchParams] = useSearchParams();
  // const loggedIn = localStorage.getItem('loggedIn')
  // const navigate = useNavigate()
  //  useEffect(()=>{
  //   // if (isErrorr) {
  //   //   navigate('/landingPage')
  //   // }
  //   const checkAuth = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3500/auth/verify', {
  //         method: 'GET',
  //         credentials: 'include', // Include cookies in the request
  //       });

  //       if (response.ok) {
  //         const data = await response.json()
  //         setUser(data)
  //         setIsAuthenticated(true); // Set authenticated to true if valid
  //       } else {
  //         throw new Error('Not authenticated');
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       setIsAuthenticated(false); // Set to false on error
  //       if (location.pathname !== '/landingPage') {
  //         navigate('/landingPage');
  //       }
  //     }
  //   };

  //   checkAuth();
  // },[])



  // useEffect(() => {
    //   if (loggedIn) {
    //  setIsAuthenticated(true)}
    //   if (!loggedIn) {
    //       if (location.pathname !== '/landingPage') {
    //       navigate('/landingPage');
    //     }}
    //   if (loggedIn) {
    //     localStorage.removeItem('loggedIn')
    //       if (location.pathname !== '/landingPage') {
    //       navigate('/landingPage');
    //     }
    //   }
  //     if (!isError) {
  //    setIsAuthenticated(true)
  //   }else{
  //       if (location.pathname !== '/landingPage') {
  //     navigate('/landingPage');
  //     }}
  // }, [isError]);

const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      const isAtBeginning = swiper.isBeginning;
      const isAtEnd = swiper.isEnd;
      if (isAtBeginning) {
        swiper.allowSlidePrev = false;
        setIconfill(true)
      } else {
        swiper.allowSlidePrev = true;
      }

      if (isAtEnd) {
        swiper.allowSlideNext = false;
        setIconfill(false)
      } else {
        swiper.allowSlideNext = true;
      }
    }
  };

return (
<div className="w-full h-screen fixed      bg-black2">
{isAuthenticated && <div className="w-full   lg:hidden     h-full ">
 {/* small screen */}

<Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  spaceBetween={0}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
    handleSlideChange();
  }}
  onSlideChange={handleSlideChange}
  slidesPerView={1}
  initialSlide={fromChat?1:0}
 className="  text-white  w-full h-full ">
<SwiperSlide ><Firstpage/></SwiperSlide> 
<SwiperSlide> <Chat  /></SwiperSlide> 
</Swiper>

{/* large screen  */}

<Footer goToSlide={goToSlide}iconFill={iconFill} />

</div>}
{isAuthenticated && <div className="hidden lg:flex  w-full h-full">
{/* <Laptopfirstpg/> */}
<Firstpage/>
<Chat />
</div>}
</div>
  )
}

export default Overview