import React from "react"
import Image from "next/image"
import { poppinsRegular } from "public/fonts/fonts"
import { ChevronRight } from "lucide-react"

export default function ImageSection(){
    return (
        <section>
            <div className="relative">
                {/* image of background */}
                <Image
                    src="/images/shop/hero-img.svg"
                    alt="Shop hero image"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover object-center min-h-[300px]"
                />

                {/* content section */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                    <h2 className={`${poppinsRegular.className} font-medium text-4xl md:text-5xl text-center`}>
                        Shop
                    </h2>

                    <h3 className={`${poppinsRegular.className} font-medium text-sm md:text-base text-center flex justify-center`}>
                        <span>Home</span>
                        <span><ChevronRight /></span>
                        <span>Shop</span>
                    </h3>
                </div>
            </div>
        </section>
    )
}

