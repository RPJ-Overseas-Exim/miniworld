"use client"
import React from "react";
import Image from "next/image";

import { Pagination, Autoplay} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

export default function SwiperSlides(){
    const slideImages = [
        "/images/slides/slide_1.webp",
        "/images/slides/slide_2.webp",
        "/images/slides/slide_3.webp",
        "/images/slides/slide_4.webp"
    ]

     return (
        <Swiper
            className="w-full h-[300px] md:h-[350px]"
            loop={true}
            grabCursor={true}
            draggable={true}
            modules={[Pagination, Autoplay]}
            pagination={{clickable: true}}
            autoplay={{
                delay: 5000,
            }}
            slidesPerView={3}
        >
        {slideImages.map((value, index)=>(
            <SwiperSlide key={index} className="relative rounded-xl border-2 border-border-pink overflow-hidden">
                {/* filter section */}
                <div className="absolute w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
                
                {/* Image section */}
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
