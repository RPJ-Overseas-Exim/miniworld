"use client"
import React from "react";

import { poppinsBold, poppinsRegular } from "public/fonts/fonts";
import EmblaCarousel from "./EmblaCarousel";
import "./embla.css"

export default function SwiperSlides(){
    const slideImages = [
        "/images/slides/hq1.jpg",
        "/images/slides/hq2.jpg",
        "/images/slides/hq4.jpg",
        "/images/slides/hq5.jpg",
        "/images/slides/hq6.jpg"
    ]

    return (
        <div className="w-full h-full px-2">
            <EmblaCarousel slides={slideImages} options={{loop: true, align: "start" }} />
        </div>
     )
}

export function SlideDetails(){
    return (
        <div className="bg-[#ffffff72] backdrop-blur-md min-w-[] w-[217px] h-[135px] flex items-center justify-center">
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
