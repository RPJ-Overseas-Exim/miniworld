"use client"
import React from "react"
import Image from "next/image"
import { Share2, Heart } from "lucide-react"
import { CardButton } from "~/components/ui/Button";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export interface ProductCardProps {
   src: string;
   alt: string;
   width?: number;
   height?: number;
   title: string;
   description: string;
   price: string;
}

export function ProductCard({src, alt, title, description, price, width=100, height=100}: ProductCardProps){
    const [showInfo, setShowInfo] = React.useState<boolean>(false)

    {/* hovering effect handler functions */}
    const handleMouseOver = ()=>{
        setShowInfo(true)
    }

    const handleMouseLeave = ()=>{
        setShowInfo(false)
    }

    {/* Product card animation section */}
    const productCardRef = React.useRef<HTMLDivElement>(null)
    
    useGSAP(()=>{
        gsap.from(productCardRef.current, {
            y: 120,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: productCardRef.current,
                start: "top 81%",
                end: "top 80%",
                scrub: 2,
            }
        })
    })


    {/* actions handler functions */}
    const handleAddToCart = ()=>{
        console.log("Add to cart clicked")
    }

    const handleProductShare = ()=>{
        console.log("Product share clicked")
    }

    const handleProductLike = ()=>{
        console.log("Product Like clicked")
    }

    
    return (
        <div
            ref={productCardRef}
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
            className="relative w-[150px] h-[280px] sm:w-[200px] sm:h-[320px] md:w-[220px] md:h-[400px] lg:w-[285px] lg:h-[446px] overflow-hidden bg-white"
        >
            {/* section on hover */}
            <div className={`${showInfo ? "absolute": "hidden"} bg-[#00000076] w-full h-full flex items-center justify-center`}>
                <div className="space-y-2">
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className="text-white"
                    >
                        <CardButton>
                            Add to cart
                        </CardButton>
                    </button>

                    <div className="flex justify-center">
                        <div className="flex flex-col items-start gap-y-[2px]">
                            
                            <button
                                type="button"
                                className="text-white md:text-lg flex items-center gap-x-2 w-[max-content]"
                                onClick={handleProductShare}
                            >
                                <Share2 width={16} height={16} />
                                <span className="text-white">Share</span>
                            </button>

                            <button
                                type="button"
                                className="text-white md:text-lg flex items-center gap-x-2 w-[max-content]"
                                onClick={handleProductLike}
                            >
                                <Heart width={16} height={16} />
                                <span className="text-white">Like</span>
                            </button>
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
                className="w-full"
            />

            {/* card details section */}
            <div className="w-full flex flex-col gap-y-2 text-black py-4 px-2">
                <div className="text-base md:text-xl font-bold">{title}</div>
                <div className="text-xs md:text-base font-semibold text-zinc-500">{description}</div>
                <div className="text-base md:text-xl font-medium text-zinc-700">Rs. {price}</div>
            </div>
        </div>
    )
}
