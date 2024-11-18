"use client"
import React from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

export function HeroCard(){
    const heroCardRef = React.useRef<HTMLDivElement>(null)

    {/* card animation section */}
    useGSAP(()=>{
        gsap.from("#hero-card, #hero-card-details", {
            y: 20,
            duration: 0.4,
            opacity: 0,
            stagger: 1,
        })

        gsap.from("#hero-card-button",{
            opacity: 0,
            x: 20,
            duration: 0.7,
        })
    }, { scope: heroCardRef })

    {/* card functionality section */}
    const handleBuyNow = ()=>{
        console.log("Buy now clicked")
    }

    return (
        <div
        ref={heroCardRef}
        className="absolute bg-[rgba(0,0,0,0.3)] rounded-lg border px-6 py-8 w-[90%] max-w-[400px] lg:max-w-[500px] flex flex-col gap-y-5 sm:mr-5 lg:mr-12 backdrop-blur-sm">
            <div id="hero-card">
                <h3 className="text-xs md:text-base lg:text-lg text-white font-semibold">New Arrival</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground-pink font-bold whitespace-nowrap">Discover Our</h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground-pink font-bold whitespace-nowrap">New Collection</h2>
            </div>

            <p id="hero-card-details" className="text-white text-xs md:text-base lg:text-lg">
                    Bring Your Imagination to Life
                    Custom Miniatures, Crafted Just for You
                    Detail, Quality, and Personalization in Every Piece
            </p>

            <button
                id="hero-card-button"
                type="button"
                className="rounded-md px-3.5 py-2 m-1 relative border-2 font-medium border-border-pink group w-[max-content] overflow-hidden"
                onClick={()=>handleBuyNow()}
            >
                <span className="absolute w-64 h-0 group-hover:h-64 bg-background-pink top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-300 ease">
                </span>
                <span className="relative text-foreground-pink group-hover:text-white transition-all duration-300 ease">
                    Buy Now
                </span>
            </button>
        </div>
    )
}
