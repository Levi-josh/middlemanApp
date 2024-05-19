import Firstpage from "./Firstpage/Firstpage"
import Chat from "./Chat/Chat"
import SwiperCore from 'swiper';
// import Laptopfirstpg from "./Firstpage/Laptopfirstpg";
import { Outlet } from 'react-router-dom'
import  { useRef} from 'react';
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
// import Test from "./Test";
const Overview: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>();
 

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
      } else {
        swiper.allowSlidePrev = true;
      }

      if (isAtEnd) {
        swiper.allowSlideNext = false;
      } else {
        swiper.allowSlideNext = true;
      }
    }
  };
return (
<div className="w-full  fixed overflow-auto  h-screen">
 {/* small screen */}
<Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  spaceBetween={0}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
    handleSlideChange();
  }}
  scrollbar={{ draggable: true }}
  onSlideChange={handleSlideChange}
  slidesPerView={1}
 className="  text-white bg-black2  w-full h-full lg:hidden">
<SwiperSlide><Firstpage/></SwiperSlide> 
<SwiperSlide> <Chat/></SwiperSlide> 
</Swiper>
{/* large screen  */}
<div className="hidden lg:flex bg-black2 w-full h-screen">
<Outlet/>
<Chat/>
</div>
<Footer goToSlide={goToSlide}/>
</div>
  )
}

export default Overview