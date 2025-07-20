import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='mt-7 md:mt-14 mb-10'>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/public/07.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/public/02.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/public/03.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/public/04.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/public/05.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/public/06.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/" alt="" /></SwiperSlide>
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/public/08.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='border-2 w-full h-48 md:h-[550px] opacity-75' src="/" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
