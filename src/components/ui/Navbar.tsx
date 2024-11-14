import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"
import MenuBox from "./Menu_Box"

export default function Navbar(){
    return (
        <nav className="fixed w-full bg-white z-[99] flex items-center justify-center px-[12px] py-[16px] md:px-[16px] md:py-[18px] lg:px-[20px] lg:py-[22px]">
            <div className="w-full h-full flex flex-row justify-between items-center">
                {/* Logo section */}
                <Link
                href="/"
                className="flex flex-row gap-x-[5px] items-center">
                    <Image
                        src="/images/logo.svg"
                        alt="Logo icon"
                        width={100}
                        height={100}
                        className="w-[40px] h-[28px] md:w-[55px] md:h-[38px] lg:w-[69px] lg:h-[47px]"
                    />
                    <h1 className="text-[24px] md:text-[28px] lg:text-[34px] text-foreground-pink font-bold font-monsterrat">Miniworld</h1>
                </Link>

                {/* Middle navigation section */}
                <div className="hidden md:flex flex-row md:gap-x-[60px] lg:gap-x-[75px] text-foreground-purple text-[16px]">
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                {/* features icon section */}
                <div className="hidden md:flex flex-row md:gap-x-[35px] lg:gap-x-[45px] text-foreground-purple items-center">
                    <div className="md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]">
                        <Search />
                    </div>
                    <div className="md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]">
                        <ShoppingCart />
                    </div>
                </div>

                {/* Menu icon section */}
                <MenuBox />
            </div>
        </nav>
    )
}
