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
import { useNavigate } from "react-router-dom"


// import Test from "./Test";
const Overview: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>();
  const { fromChat } = useChatContext();
  const [iconFill,setIconfill]=useState(true)
  const Id = localStorage.getItem('Id')
  const navigate = useNavigate()
   useEffect(()=>{
    if (!Id) {
      navigate('/landingPage')
    }
    console.log(Id)

  },[])

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
{Id && <div className="w-full   lg:hidden     h-full ">
 {/* small screen */}

<Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  spaceBetween={0}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
    console.log(swiper)
    handleSlideChange();
  }}
  onSlideChange={handleSlideChange}
  slidesPerView={1}
  initialSlide={fromChat?1:0}
 className="  text-white  w-full h-full ">
<SwiperSlide ><Firstpage/></SwiperSlide> 
<SwiperSlide> <Chat /></SwiperSlide> 
</Swiper>

{/* large screen  */}

<Footer goToSlide={goToSlide}iconFill={iconFill} />

</div>}
{Id && <div className="hidden lg:flex  w-full h-full">
{/* <Laptopfirstpg/> */}
<Firstpage/>
<Chat />
</div>}
</div>
  )
}

export default Overview