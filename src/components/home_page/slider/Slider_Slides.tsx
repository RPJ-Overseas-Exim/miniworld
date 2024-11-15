"use client"
import React from "react";

import {Navigation, Pagination, EffectCube, Autoplay} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

export default function SwiperSlides(){
     return (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
          grabCursor={true}
          modules={[Navigation, Pagination, EffectCube, Autoplay]}
          navigation
          pagination={{clickable: true}}
          effect={"cube"}
          cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
          className="my-swiper h-[300px]"
        > 
            {[1, 2, 3, 5].map((value, index)=>(
                <SwiperSlide key={index}>{value}</SwiperSlide>
            ))}
        </Swiper>
     )
}
