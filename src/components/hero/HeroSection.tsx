"use client"
import React from "react"
import { HeroCard } from "./HeroCard"

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
                pinSpacing: false,
                scrub: 1,
                start: "top 100px"
            }
        })
    })

    return (
        <section
            ref={heroSectionRef}
            className="mt-[100px] relative flex items-center justify-end bg-[url('/images/hero-img.svg')] min-h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center z-[-1]"
        >
            {/* hero card section */}
            <HeroCard />
        </section>
    )
}


