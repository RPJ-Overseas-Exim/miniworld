import { Trophy } from "lucide-react"
import { poppinsBold, poppinsRegular } from "public/fonts/fonts"
import React from "react"

export default function BottomBannerSection(){
    return (
        <section className="bg-[#FAF3EA] text-[#242424] p-8">
            <div className={`flex flex-wrap justify-between items-center ${poppinsRegular.className} gap-y-4`}>

                <div className="flex items-center justify-center gap-x-4">
                    <Trophy className="w-14 h-14" />
                    <div className="">
                        <h2 className="text-2xl font-semibold">High Quality</h2>
                        <h3 className="text-lg font-medium">Crafted from top materials</h3>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-x-4">
                    <Trophy className="w-14 h-14" />
                    <div className="">
                        <h2 className="text-2xl font-semibold">High Quality</h2>
                        <h3 className="text-lg font-medium">Crafted from top materials</h3>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-x-4">
                    <Trophy className="w-14 h-14" />
                    <div className="">
                        <h2 className="text-2xl font-semibold">High Quality</h2>
                        <h3 className="text-lg font-medium">Crafted from top materials</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
