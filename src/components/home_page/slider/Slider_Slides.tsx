"use client"
import React from "react";
import Image from "next/image";

import {Navigation, Pagination, EffectCube, Autoplay} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

export default function SwiperSlides(){
     return (
        <Swiper
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
              shadowOffset: 0,
              shadowScale: 0.14,
            }}
          className="my-swiper h-[300px]"
        > 
            {["/images/slides/slide_1.webp", "/images/slides/slide_2.webp", "/images/slides/slide_3.webp", "/images/slides/slide_4.webp"].map((value, index)=>(
                <SwiperSlide key={index}>
                    <Image
                        src={value}
                        alt=""
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
     )
}
