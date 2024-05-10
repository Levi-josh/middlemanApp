import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './swiper.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

const Test = () => {
return (
<div className='bg-red-400 w-full h-106'>
<Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
  scrollbar={true}
  onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
 className="  text-white  h-full lg:hidden">
<SwiperSlide><div>Test1</div></SwiperSlide> 
<SwiperSlide><div>Test2</div></SwiperSlide> 
</Swiper>
</div>
  )
}

export default Test