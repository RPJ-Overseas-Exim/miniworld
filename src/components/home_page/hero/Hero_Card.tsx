"use client"
import React from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { montserratVariable, poppinsBold, poppinsRegular } from "public/fonts/fonts"

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
        className="absolute bg-[rgba(0,0,0,0.3)] rounded-lg border px-6 py-8 w-[90%] max-w-[400px] lg:max-w-[500px] flex flex-col gap-y-5 sm:mr-5 lg:mr-12 backdrop-blur-md">
            <div id="hero-card" >
                <h3 
                    className={`text-xs md:text-base lg:text-[1rem] text-white font-semibold ${poppinsRegular.className} drop-shadow-md`}
                >
                    New Arrival
                </h3>

                <h2
                    className={`text-3xl md:text-4xl lg:text-[3.2rem] text-foreground-pink font-bold ${montserratVariable.className} whitespace-nowrap drop-shadow-md leading-[35px] lg:leading-[65px]`}
                >
                    Discover Our
                </h2>

                <h2
                    className={`text-3xl md:text-4xl lg:text-[3.2rem] text-foreground-pink font-bold ${montserratVariable.className} whitespace-nowrap drop-shadow-md leading-[35px] lg:leading-[65px]`}
                >
                    New Collection
                </h2>
            </div>

            <p
                id="hero-card-details"
                className={`text-white text-xs md:text-base lg:text-[16px] font-medium ${poppinsRegular.className} letter-spacing-0 lg:leading-[24px]`}
            >
                Bring Your Imagination to Life
                Custom Miniatures, Crafted Just for You
                Detail, Quality, and Personalization in Every Piece
            </p>

            <button
                id="hero-card-button"
                type="button"
                className="rounded-md px-6 py-3 lg:px-[4.5rem] lg:py-[1.5625rem] w-[max-content] bg-background-pink"
                onClick={()=>handleBuyNow()}
            >
                <span className={"font-bold text-[12px] lg:text-[16px] text-white uppercase " + poppinsBold.className}>
                    Buy Now
                </span>
            </button>
        </div>
    )
}
