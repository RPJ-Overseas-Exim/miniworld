"use client"
import React from "react"
import { HeroCard } from "./Hero_Card"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

export default function HeroSection(){
    const heroSectionRef = React.useRef<HTMLTableSectionElement>(null)
    {/* herosection animation section */}
    useGSAP(()=>{
        gsap.to(heroSectionRef.current,{
            scrollTrigger: {
                trigger: heroSectionRef.current,
                pin: true,
                scrub: 1,
                start: "top 60px",
                end: "bottom 70px",
            }
        })
    })

    return (
        <section
            ref={heroSectionRef}
            className="relative flex items-center justify-center sm:justify-end
            bg-[url('/images/hero-img.svg')] h-full min-h-[350px] md:h-[450px]
            lg:h-[550px] bg-cover bg-center z-[1]"
        >
            {/* hero card section */}
            <HeroCard />
        </section>
    )
}


