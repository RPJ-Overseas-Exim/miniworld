"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CardButton } from "~/components/ui/Button"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export interface RangeCardProps {
    src: string;
    alt: string;
    label: string;
    description: string;
    link: string;
    width?: number;
    height?: number;
}

export function RangeCard({src, alt, label, description, link, width=100, height=100}:RangeCardProps){
    {/* Range card functional section */}
    const [showInfo, setShowInfo]= React.useState<boolean>(false)
    
    const handleMouseOver = ()=>{
        setShowInfo(true)
    }

    const handleMouseLeave = ()=>{
        setShowInfo(false)
    }   

    {/* Range card animation section */}
    const rangeCardRef = React.useRef<HTMLAnchorElement>(null)
    
    useGSAP(()=>{
        gsap.from(rangeCardRef.current, {
            y: 120,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: rangeCardRef.current,
                start: "top 80%",
                end: "top 79%",
                scrub: 2,
            }
        })
    })

    return (
        <Link
            ref={rangeCardRef}
            href={link}
            className="flex flex-col justify-center gap-y-4 relative"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >

            {/* section appears on hover */}
            <div className={`hidden md:${showInfo ? "flex" : "hidden"} items-center justify-center absolute w-full h-full bg-[#00000096] rounded-lg`}>
                <div className="w-4/5 flex flex-col justify-center items-start gap-y-4">
                    <CardButton>
                        <div className="text-white text-[1rem] font-bold">
                            {label}
                        </div>
                    </CardButton>

                    <div className="text-[2vh] lg:text-[1.3vw] flex justify-center text-[#ffffffba]">
                        <div className="w-10/12">
                            {description}
                        </div>
                    </div>
                </div>
            </div>

            {/* image section */}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-[150px] h-[220px] sm:w-[200px] sm:h-[290px] md:w-[230px] md:h-[320px] rounded-lg object-cover relative z-[-1]"
            />

            <div className="text-center text-zinc-600 text-xl font-bold md:hidden">
                {label}
            </div>
            
        </Link>
    )
}
