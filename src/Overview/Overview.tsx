import Firstpage from "./Firstpage/Firstpage"
import Chat from "./Chat/Chat"
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
const Overview = () => {
return (
<div className="w-full h-screen fixed ">
 {/* small screen */}
<Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
 className="bg-black2  text-white w-full h-full lg:hidden">
<SwiperSlide><Firstpage/></SwiperSlide> 
<SwiperSlide> <Chat/></SwiperSlide> 
</Swiper>
{/* large screen  */}
<div className="hidden lg:flex bg-black2 w-full h-screen">
<Firstpage/>
<Chat/>
</div>
<Footer/>
</div>
  )
}

export default Overview