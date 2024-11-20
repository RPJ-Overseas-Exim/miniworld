import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"
import MenuBox from "../ui/Menu_Box"
import { montserratVariable } from "public/fonts/fonts"

export default function Navbar() {

    return (
        <nav className="sticky top-0 left-0 w-full bg-white z-[99] flex items-center justify-center px-2 py-4 md:px-4 md:py-5 lg:px-6 ">
            <div className="w-full h-full flex flex-row justify-between items-center">
                {/* Logo section */}
                <Link
                    href="/"
                    className="flex gap-x-2 md:gap-x-5 items-center">
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
                <div className="hidden md:flex flex-row md:gap-x-12 lg:gap-x-16 ">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/shop">Shop</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>

                <div className="flex gap-x-4 items-center px-2">
                    {/* features icon section */}
                    <div className="hidden md:flex flex-row md:gap-x-6 lg:gap-x-8 text-foreground-purple items-center">
                        <div className="md:w-6 md:h-6 lg:w-7 lg:h-7">
                            <Search />
                        </div>
                        <div className="md:w-6 md:h-6 lg:w-7 lg:h-7">
                            <Link href="/cart">
                                <ShoppingCart />
                            </Link>
                        </div>
                    </div>

                    {/* Login button section */}
                    <Link href="/login"
                        className="px-4 py-2 text-white text-sm md:text-base bg-background-pink rounded-lg whitespace-nowrap"
                    >
                        Sign in
                    </Link>

                    {/* Menu icon section */}
                    <MenuBox />
                </div>
            </div>
        </nav>
    )
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="relative text-foreground-purple group overflow-x-hidden">
            {children}
            <div className="absolute bottom-0 left-0 transform translate-x-[-100%]
                duration-500 transition group-hover:transform group-hover:translate-x-full
                h-1 w-full rounded-full bg-foreground-purple"></div>
        </Link>
    )
}
