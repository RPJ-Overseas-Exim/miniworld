import React from "react"
import { poppinsBold, poppinsRegular } from "public/fonts/fonts"
import Link from "next/link"
import { ArrowButton } from "~/components/ui/Button"

export default function SloganDiv(){

    return (
        <div className="text-zinc-800 w-full md:w-1/2 flex items-center justify-center">
            <div className=" w-full md:w-2/3 flex flex-col gap-y-4 items-center md:items-start px-2 md:px-0">

                <h2 className={`details text-4xl lg:text-[2.5rem] font-bold text-center md:text-left text-foreground-muted ${poppinsBold.className}`}>
                    50+ Unique Miniatures inspirations
                </h2>
                <h3 className={`details text-xl lg:text-[1rem] text-center md:text-left text-foreground-muted ${poppinsRegular.className}`}>
                    Unleash Your Creativity, One Miniature at a Time!
                </h3>

                <Link href="/products" className="w-[max-content] bg-background-pink">
                    <ArrowButton>
                        <div className={`text-white ${poppinsRegular.className} font-semibold`}>Explore More</div>
                    </ArrowButton>
                </Link>

            </div>
        </div>
    )
}
