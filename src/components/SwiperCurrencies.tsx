import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow';

// init Swiper:


import abbreviations from '../resources/abbreviations.js'


export default function SwiperCurrencies({currencies}) {
  console.log(currencies)
  return (

       <Swiper
       effect={'coverflow'}
      className='w-[100vw] pt-1 pr-10 relative transition-all h-[90px]'
      spaceBetween={50}
      centeredSlides={true}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay:250
      }}
      coverflowEffect={{
        rotate: 1,
        stretch: 0,
        depth: 100,
        modifier: 3,
      }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay,  EffectCoverflow, Pagination, Navigation ]}
    >
    {
           Object.entries(currencies).map((entrie, i) => (
            <SwiperSlide key={i}  className=' min-w-[100px] p-1 min-h-full border-2 border-green-500 text-center rounded-md overflow-hidden backdrop-blur-sm sm:max-w-xs sm:min-w-[100px]'  > 
            <h3 className='font-bold '>{entrie[0]}</h3> 
            <h4 className='text-sm'>{abbreviations[entrie[0]]}</h4>
            <p>{entrie[1]}</p>
            
         </SwiperSlide>
          )) 
           }
    
    </Swiper>
  
  )
}
