"use client"
import { poppinsRegular } from "public/fonts/fonts"
import React from "react"
import Categories from "./Categories"
import Filters from "./Filters"
import { useRouter, useSearchParams } from "next/navigation"

export interface FilterSectionProps{
    totalResultCount: number;
    resultCount: number;
    limit: number;
    page: number;
}

export default function FilterSection({
    totalResultCount, resultCount, limit, page
}:FilterSectionProps){
    return (
        <div className="bg-[#F9F1E7] px-6 py-4">
            <div className={`flex text-black justify-between ${poppinsRegular.className} text-sm`}>

                {/* filter button */}
                <Filters
                    totalResultCount={totalResultCount}
                    resultCount={resultCount}
                    limit={limit}
                    page={page}
                />

                {/* category buttons */}
                <Categories />

                {/* sort by section */}
                <SortBy />
                
            </div>
        </div>
    )
}

export function SortBy(){
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        const key = e.target.name
        const value = e.target.value

        const newFilter = new URLSearchParams(searchParams)
        newFilter.set(key, value)
        router.push("/shop?" + newFilter.toString())
    }

    return (
        <div>
            <form className="flex gap-x-2 sm:gap-x-4 items-center">
                <div className="flex items-center gap-x-2">
                    <h2 className="whitespace-nowrap">Sort by</h2>
                    
                    <select
                    onChange={(e)=>handleOnChange(e)}
                    className="p-1 sm:p-2 rounded-lg" name="sortBy">
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="likes">like</option>
                    </select>
                </div>

                <div className="flex items-center gap-x-2">
                    <h2 className="whitespace-nowrap">Inc</h2>
                
                    <select
                    onChange={(e)=>handleOnChange(e)}
                    className="p-1 sm:p-2 rounded-lg" name="ascending">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
