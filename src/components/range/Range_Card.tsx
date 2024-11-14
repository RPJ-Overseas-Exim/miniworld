"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export interface RangeCardProps {
    src: string;
    alt: string;
    label: string;
    link: string;
    width?: number;
    height?: number;
}

export function RangeCard({src, alt, label, link, width=100, height=100}:RangeCardProps){
    {/* Range card animation section */}
    const rangeCardRef = React.useRef<HTMLAnchorElement>(null)
    
    useGSAP(()=>{
        gsap.from(rangeCardRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: rangeCardRef.current,
                start: "top 80%",
                end: "bottom 110%",
                toggleActions: "restart none none reverse",
            }
        })
    })

    return (
        <Link
        ref={rangeCardRef}
        href={link}
        className="flex flex-col justify-center gap-y-2 transition-all duration-300 ease transform hover:scale-2">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-[200px] h-[270px] sm:w-[280px] sm:h-[350px] md:w-[350px] md:h-[420px] rounded-lg object-cover"
            />

            <div className="text-xl text-black text-center font-semibold">
                {label}
            </div>
        </Link>
    )
}
