import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"
import MenuBox from "../ui/Menu_Box"
import { montserratVariable } from "public/fonts/fonts"

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full bg-white z-[99] flex items-center justify-center px-6 py-4 md:px-4 md:py-5 lg:px-6 ">
            <div className="w-full h-full flex flex-row justify-between items-center">
                {/* Logo section */}
                <Link
                    href="/"
                    className="flex gap-x-5 items-center">
                    <div className="relative min-w-12 min-h-12 md:min-w-14 md:min-w-14 lg:min-w-16 lg:min-w-16">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo icon"
                            fill
                        />
                    </div>
                    <h1 className={"text-[24px] md:text-[28px] lg:text-[34px] text-foreground-pink font-bold " + montserratVariable.className}>Miniworld</h1>
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
