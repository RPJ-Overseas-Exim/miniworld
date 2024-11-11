"use client"
import React from "react"
import { CrossIcon, House, Info, Menu, Phone, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function MenuBox(){
    const [showMenu, setShowMenu] = React.useState<boolean>(false)

    const OpenMenu = ()=>{
        setShowMenu(true)
    }
    const CloseMenu = ()=>{
        setShowMenu(false)
    }

    return (
        <div className="flex md:hidden">
            <button
                type="button"
                className="w-[28px] h-[28px] text-foreground-purple"
                onClick={OpenMenu}
            >
                <Menu />
            </button>

            <div
                className={`${showMenu ? "flex": "hidden"} absolute top-0 right-0 w-full h-full z-[99] flex items-center justify-end bg-[url("/images/menu_bg.jpg")] bg-cover bg-right`}
            >
                <div className="absolute w-full h-full bg-black opacity-50"></div>
                {/* close button */}
                <button
                type="button"
                onClick={CloseMenu}
                className="rotate-[45deg] text-foreground-pink absolute top-5 right-5">
                    <CrossIcon fill="pink" width={38} height={38} />
                </button>
                
                {/* menu body */}
                <div className="px-4 py-2 z-[100]">
                    {/* navigation section */}
                    <div className="flex flex-col gap-y-[50px] text-foreground-pink font-bold text-[32px] pr-[50px]">
                        <div className="flex gap-x-2 items-center">
                            <House className="" width={38} height={38} />
                            <Link href="/home" className="">Home</Link>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <ShoppingBag width={38} height={38} />
                            <Link href="/shop">Shop</Link>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <Info width={38} height={38} />
                            <Link href="/about">About</Link>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <Phone width={38} height={38} />
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}