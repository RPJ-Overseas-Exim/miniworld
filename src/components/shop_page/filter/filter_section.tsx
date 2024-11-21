"use client"
import { SlidersHorizontal } from "lucide-react"
import { poppinsRegular } from "public/fonts/fonts"
import React from "react"

export default function FilterSection(){
    return (
        <div className="sticky bg-[#F9F1E7] px-6 py-4">
            <div className={`flex text-black justify-between ${poppinsRegular.className} text-sm`}>

                {/* filter button */}
                <div className="flex items-center gap-x-4">
                    <button type="button">
                        <SlidersHorizontal className="text-black" />
                    </button>

                    <h2 className="text-black text-xl">
                        Filter
                    </h2>
                </div>


                {/* sort by section */}
                <div className="flex gap-x-2 items-center">
                    <h2 className="whitespace-nowrap">Sort by</h2>
                    <form>
                        <select className="p-2 rounded-lg">
                            <option>Price</option>
                            <option>like</option>
                        </select>
                        
                    </form>
                </div>

            </div>
        </div>
    )
}
