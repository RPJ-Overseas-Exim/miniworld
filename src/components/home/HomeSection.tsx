"use client"
import React from "react"
import Image from "next/image"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function HomeSection(){

    return (
        <section
            className="relative flex items-center justify-end "
        >
            
            {/* background image */}
            <Image
                src="/images/hero-img.svg"
                alt="hero image"
                width={100}
                height={100}
                className="min-h-[400px] w-full h-full object-cover"
            />

            {/* hero card section */}
            <HomeCard />
        </section>
    )
}

export function HomeCard(){
    useGSAP(()=>{
        gsap.from("#hero-card, #hero-card-details", {
            y: 20,
            duration: 0.8,
            opacity: 0,
            stagger: 1,
        })

        gsap.from("#hero-card-button",{
            opacity: 0,
            x: 20,
            duration: 2,
        })
    }, [])

    return (
        <div className="absolute bg-[rgba(0,0,0,0.3)] rounded-lg border px-6 py-8 w-[90%] max-w-[400px] lg:max-w-[500px] flex flex-col gap-y-5 mr-5 lg:mr-12">
            <div id="hero-card">
                <h3 className="text-xs md:text-base lg:text-lg text-white font-semibold">New Arrival</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground-pink font-bold whitespace-nowrap">Discover Our</h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground-pink font-bold whitespace-nowrap">New Collection</h2>
            </div>

            <p id="hero-card-details" className="text-white text-xs md:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <button
                id="hero-card-button"
                type="button"
                className="px-4 py-2 bg-background-pink rounded-lg w-[max-content] font-semibold text-white text-base md:text-lg lg:text-xl"
                onClick={()=>console.log("Buy now clicked")}
            >Buy Now</button>
        </div>
    )
}
