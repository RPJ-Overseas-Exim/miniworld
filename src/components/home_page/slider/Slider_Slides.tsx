"use client"
import React from "react";

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

