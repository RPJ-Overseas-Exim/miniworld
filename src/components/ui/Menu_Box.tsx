"use client"
import React from "react"
import { CrossIcon, House, Info, Menu, Phone, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { TwoColorButton } from "./Button"

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
                    <div className="flex flex-col gap-y-[50px] text-foreground-pink font-bold text-[28px] pr-[50px]">
                        
                        {/* Home button */}
                        <Link href="/" onClick={hideMenuBox}>
                            <TwoColorButton>
                                <div className="flex gap-x-2 items-center">
                                    <House className="" width={38} height={38} />
                                    <div>Home</div>
                                </div>
                            </TwoColorButton>
                        </Link>

                        {/* Shop button */}
                        <Link href="/shop" onClick={hideMenuBox}>
                            <TwoColorButton>
                                <div className="flex gap-x-2 items-center">
                                    <ShoppingBag width={38} height={38} />
                                    <div>Shop</div>
                                </div>
                            </TwoColorButton>
                        </Link>

                        {/* About button */}
                        <Link href="/about" onClick={hideMenuBox}>
                            <TwoColorButton>
                                <div className="flex gap-x-2 items-center">
                                    <Info width={38} height={38} />
                                    <div>About</div>
                                </div>
                            </TwoColorButton>
                        </Link>

                        {/* Contact button */}
                        <Link href="/contact" onClick={hideMenuBox}>
                            <TwoColorButton>
                                <div className="flex gap-x-2 items-center">
                                    <Phone width={38} height={38} />
                                    <div>Contact</div>
                                </div>
                            </TwoColorButton>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

