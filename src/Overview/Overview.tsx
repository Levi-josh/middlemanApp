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
import {  useEffect } from "react"
import { useLocation} from "react-router-dom"
// import { useDispatch,useSelector } from 'react-redux';
// import { verifyAuth } from '../Feature/Redux';
// import {AppDispatch, RootState  } from '../Feature/Store';

// import Test from "./Test";
const Overview: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>();
  const { fromChat } = useChatContext();
  const [iconFill,setIconfill]=useState(true)
   const location = useLocation();
  // const [isAuthenticated,setIsAuthenticated]=useState(false)
  // const [user,setUser]=useState<any|null>()
  // const dispatch = useDispatch<AppDispatch>();
  // const isAuthenticated= useSelector((state: RootState) => state.mode.isAuthenticated);
  // const loading= useSelector((state: RootState) => state.mode.loading);
  // const navigate = useNavigate()
  // const [searchParams] = useSearchParams();
  // const loggedIn = localStorage.getItem('loggedIn')
useEffect(() => {
console.log(location)
const storedDataString = localStorage.getItem('myData');
if (storedDataString) {
  const storedData = JSON.parse(storedDataString);
  if (storedData && storedData.expiration > Date.now()) {
    console.log('still valid')
  } else {
    // Data has expired or is invalid
    localStorage.removeItem('myData');
  }
} else {
  console.log('not found')
}

}, [location]);

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
<div className="w-full   lg:hidden     h-full ">
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

</div>
 <div className="hidden lg:flex  w-full h-full">
{/* <Laptopfirstpg/> */}
<Firstpage/>
<Chat />
</div>
</div>
  )
}

export default Overview