"use client"
import React from "react"
import { CrossIcon, House, Info, Menu, Phone, ShoppingBag } from "lucide-react"
import Link from "next/link"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function MenuBox(){
    {/* menubox functionality section */}
    

    {/* menubox animation section */}
    const menuBoxRef = React.useRef<HTMLDivElement>(null)
    const { contextSafe } = useGSAP()

    const showMenuBox = contextSafe(()=>{
        gsap.to(menuBoxRef.current, {
            x: "-100%",
            duration: 0.5,
            opacity: 1,
        })
    })

    const hideMenuBox = contextSafe(()=>{
        gsap.to(menuBoxRef.current, {
            x: "0%",
            duration: 0.5,
            opacity: 0,
        })
    })

    return (
        <div className="flex md:hidden">
            <button
                type="button"
                className="w-[28px] h-[28px] text-foreground-purple"
                onClick={showMenuBox}
            >
                <Menu />
            </button>

            <div
                ref={menuBoxRef}
                className="fixed top-0 left-[100%] w-full h-full z-[99] flex items-center justify-end bg-[url('/images/menu_bg.jpg')] bg-cover bg-right"
            >
                <div className="absolute w-full h-full bg-black opacity-20"></div>

                {/* close button */}
                <button
                type="button"
                onClick={hideMenuBox}
                className="rotate-[45deg] text-foreground-pink absolute top-5 right-5">
                    <CrossIcon fill="pink" width={38} height={38} />
                </button>
                
                {/* menu body */}
                <div className="px-4 py-2 z-[100]">
                    {/* navigation section */}
                    <div className="flex flex-col gap-y-[50px] text-foreground-pink font-bold text-[32px] pr-[50px]">
                        
                        <BlendButton>
                            <div className="flex gap-x-2 items-center">
                                <House className="" width={38} height={38} />
                                <Link href="/home" className="">Home</Link>
                            </div>
                        </BlendButton>

                        <BlendButton>
                            <div className="flex gap-x-2 items-center">
                                <ShoppingBag width={38} height={38} />
                                <Link href="/shop">Shop</Link>
                            </div>
                        </BlendButton>

                        <BlendButton>
                            <div className="flex gap-x-2 items-center">
                                <Info width={38} height={38} />
                                <Link href="/about">About</Link>
                            </div>
                        </BlendButton>

                        <BlendButton>
                            <div className="flex gap-x-2 items-center">
                                <Phone width={38} height={38} />
                                <Link href="/contact">Contact</Link>
                            </div>
                        </BlendButton>

                    </div>
                </div>
            </div>
        </div>
    )
}

interface BlendButtonProps{
    children: React.ReactNode,
}

export function BlendButton({children}:BlendButtonProps){
    return (
        <div className="relative px-6 py-3 font-bold text-white group">
            <span className="absolute w-full h-full bg-background-purple opacity-70 inset-0 -translate-x-1 -translate-y-1 transition-all duration-300 ease group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute w-full h-full bg-background-pink opacity-70 inset-0 translate-x-1 translate-y-1 transition-all duration-300 ease group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">
                {children}
            </span>
        </div>
    )
}
