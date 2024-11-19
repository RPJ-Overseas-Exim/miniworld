"use client"
import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { Pagination, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { poppinsBold, poppinsRegular } from "public/fonts/fonts";

export default function SwiperSlides(){
    const slideImages = [
        "/images/slides/slide_1.webp",
        "/images/slides/slide_2.webp",
        "/images/slides/slide_3.webp",
        "/images/slides/slide_4.webp"
    ]

    return (
        <Swiper 
           modules = {[Pagination, Autoplay]} 
           loop={true}
           grabCursor={true}
           draggable={true}
           breakpoints={{
               640: {
                   slidesPerView: 2,
                   centeredSlides: false,
               },
               1280: {
                   slidesPerView: 3,
                   centeredSlides: false,
               }
           }}
           centeredSlides={true}
           pagination={{clickable: true}}
        >
            {slideImages.map((value, index)=>(
                <SwiperSlide key={index} >
                    <Slide value={value} />
                </SwiperSlide>
            ))}
        </Swiper>
     )
}

interface SlideProps{
    value: string;
}

export function Slide({value}:SlideProps){

    return (
        <div className="w-full h-full">
            <div className="relative">
                <div className="card-info absolute w-full h-full items-end p-4">
                    <SlideDetails />

                    <div className="w-10 h-10 bg-background-pink p-2 cursor-pointer">
                        <ArrowRightIcon className="w-full h-full" />
                    </div>
                </div>
            
                {/* background Image */}
                <Image 
                    src={value}
                    alt={"Image"}
                    width={100}
                    height={100}
                    className="w-full h-full object-center object-cover"
                />
            </div>
        </div>
    )
}

export function SlideDetails(){
    return (
        <div className="bg-[#ffffff72] backdrop-blur-sm min-w-[] w-[217px] h-[135px] flex items-center justify-center">
            <div className="text-foreground-muted">
                <h2 className={`${poppinsRegular.className} font-semibold text-[1.1rem] text-center`}>
                    01 - Miniature
                </h2>

                <h2 className={`${poppinsBold.className} text-[1.8rem] text-center`}>
                    Creative Miniature
                </h2>
            </div>
        </div>
    )
}
