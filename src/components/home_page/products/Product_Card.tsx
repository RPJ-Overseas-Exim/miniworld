"use client"
import React from "react"
import Image from "next/image"
import { Share2, Heart } from "lucide-react"
import { CardButton } from "~/components/ui/Button";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { poppinsRegular } from "public/fonts/fonts";
import { useRouter } from "next/navigation";
gsap.registerPlugin(ScrollTrigger)

export interface ProductCardProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    id?: string;
    title: string;
    description: string;
    price: string;
}

export function ProductCard({ src, alt, title, description, price, id=""}: ProductCardProps) {
    const [showInfo, setShowInfo] = React.useState<boolean>(false)
    const router = useRouter()

    {/* hovering effect handler functions */ }
    const handleMouseOver = () => {
        setShowInfo(true)
    }

    const handleMouseLeave = () => {
        setShowInfo(false)
    }

    {/* Product card animation section */ }
    const productCardRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
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


    {/* actions handler functions */ }
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        console.log("Add to cart clicked")
    }

    const handleProductShare = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        console.log("Product share clicked")
    }

    const handleProductLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        console.log("Product Like clicked")
    }

    const handleNavigate = () => {
        router.push(`/shop/${id}`)
    }


    return (
        <div
            ref={productCardRef}
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
            className="relative overflow-hidden bg-white cursor-pointer"
            onClick={handleNavigate}
        >
            {/* section on hover */}
            <div className={`${showInfo ? "absolute" : "hidden"} bg-[#00000076] w-full h-full flex items-center justify-center z-[2]`}>
                <div className="space-y-2 flex flex-col justify-center">
                    <button
                        type="button"
                        onClick={(e)=>handleAddToCart(e)}
                        className="text-white"
                    >
                        <CardButton>
                            Add to cart
                        </CardButton>
                    </button>

                    <div className="flex justify-center">
                        <div className="flex items-start gap-x-2">

                            <button
                                type="button"
                                className="text-white md:text-lg flex items-center gap-x-2 w-[max-content]"
                                onClick={(e)=>handleProductShare(e)}
                            >
                                <Share2 width={16} height={16} />
                                <span className="text-white">Share</span>
                            </button>

                            <button
                                type="button"
                                className="text-white md:text-lg flex items-center gap-x-2 w-[max-content]"
                                onClick={(e)=>handleProductLike(e)}
                            >
                                <Heart width={16} height={16} />
                                <span className="text-white">Like</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/* image section */}
            <div className="relative h-[70vw] max-h-[300px] z-[1]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover object-center"
                />
            </div>

            {/* card details section */}
            <div className={`w-full flex flex-col gap-y-2 text-foreground-muted py-4 px-2 ${poppinsRegular.className}`}>
                <div className="text-sm md:text-xl font-semibold">{title.split(" ").slice(0, 3).join(" ") + "..."}</div>
                <div className="text-xs md:text-base lg:text-[1rem] font-medium">{description.slice(0, 50) + "..."}</div>
                <div className="text-sm md:text-xl lg:text-[1.2rem] font-semibold">Rs. {price}</div>
            </div>
        </div>
    )
}
