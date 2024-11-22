import React from "react"
import { poppinsRegular } from "public/fonts/fonts"
import { ChevronRight } from "lucide-react"

export default function ImageSection(){
    return (
        <section>
            <div className="relative bg-[url('/images/shop/hero-img.svg')] min-h-[300px] object-center object-cover">
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

