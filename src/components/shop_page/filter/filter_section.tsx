"use client"
import { poppinsRegular } from "public/fonts/fonts"
import React from "react"
import Categories from "./Categories"
import Filters from "./Filters"

export default function FilterSection(){
    return (
        <div className="bg-[#F9F1E7] px-6 py-4">
            <div className={`flex text-black justify-between ${poppinsRegular.className} text-sm`}>

                {/* filter button */}
                <Filters />

                {/* category buttons */}
                <Categories />

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

