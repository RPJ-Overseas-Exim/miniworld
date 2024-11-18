"use client"
import React from "react";
import Image from "next/image";

import { Pagination, EffectCube, Autoplay} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

export default function SwiperSlides(){
    const slideImages = [
        "/images/slides/slide_1.webp",
        "/images/slides/slide_2.webp",
        "/images/slides/slide_3.webp",
        "/images/slides/slide_4.webp"
    ]

     return (
        <Swiper
            className="w-[300px] h-[300px]"
            loop={true}
            grabCursor={true}
            modules={[Pagination, EffectCube, Autoplay]}
            navigation
            pagination={{clickable: true}}
            effect={"cube"}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
                delay: 5000,
            }}
        >
        {slideImages.map((value, index)=>(
            <SwiperSlide key={index}>
                <Image 
                    src={value}
                    alt="Slide image"
                    width={100}
                    height={100}
                    className="w-full h-full aspect-square"
                />
            </SwiperSlide>
        ))}
        </Swiper>
     )
}
