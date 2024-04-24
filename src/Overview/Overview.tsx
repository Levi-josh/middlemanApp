import Firstpage from "./Firstpage"
import Chat from "./Chat"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './swiper.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
const Overview = () => {
return (
<div className="w-full h-screen ">
<Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
  // navigation={true}
  // draggable={true}
  // pagination={{ clickable: true }}
  // loop={true}
//   autoplay={{
//   delay: 3000, // Autoplay delay in milliseconds
//   disableOnInteraction: false, // Allow manual navigation to stop autoplay
// }}

 className="bg-black2  text-white w-full h-full lg:hidden">
<SwiperSlide><Firstpage/></SwiperSlide> 
<SwiperSlide> <Chat/></SwiperSlide> 
<SwiperSlide><h1>middleman</h1></SwiperSlide> 
</Swiper>
</div>
  )
}

export default Overview