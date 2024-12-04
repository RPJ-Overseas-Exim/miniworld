import { Handshake, Trophy, Truck } from "lucide-react"
import { poppinsRegular } from "public/fonts/fonts"
import React from "react"

export default function AboutBottomBannerSection(){
    return (
        <section className="bg-[#FAF3EA] text-[#242424] p-8">
            <div className={`flex flex-wrap justify-center md:justify-between items-center ${poppinsRegular.className} gap-y-6`}>

                <div className="flex items-center justify-around md:justify-center gap-x-4 w-full md:w-auto">
                    <Trophy className="w-14 h-14" />
                    <div className="px-4 md:px-0">
                        <h2 className="text-xl md:text-2xl font-semibold">High Quality</h2>
                        <h3 className="text-base md:text-lg font-medium">Crafted from top materials</h3>
                    </div>
                </div>

                <div className="flex items-center justify-around md:justify-center gap-x-4 w-full md:w-auto">
                    <Truck className="w-14 h-14" />
                    <div className="px-4 md:px-0">
                        <h2 className="text-xl md:text-2xl font-semibold">Free shipping</h2>
                        <h3 className="text-base md:text-lg font-medium">Crafted from top materials</h3>
                    </div>
                </div>

                <div className="flex items-center justify-around md:justify-center gap-x-4 w-full md:w-auto">
                    <Handshake className="w-14 h-14" />
                    <div className="px-4 md:px-0">
                        <h2 className="text-xl md:text-2xl font-semibold">24/7 Support</h2>
                        <h3 className="text-base md:text-lg font-medium">Crafted from top materials</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
