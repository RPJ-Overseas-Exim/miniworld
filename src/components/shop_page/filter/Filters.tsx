import React from "react"
import { SlidersHorizontal } from "lucide-react"

export interface FiltersProps{
    totalResultCount: number;
    resultCount: number;
    page: number;
    limit: number;
}

export default function Filters({totalResultCount, resultCount, page, limit}:FiltersProps){
    return (
        <div className="flex items-center gap-x-4">
            <button type="button">
                <SlidersHorizontal className="text-black" />
            </button>

            <h2 className="text-black text-base sm:text-xl">
                Filter
            </h2>

            <span className="hidden md:block text-sm border-l-2 border-black pl-4 whitespace-nowrap">
                Showing {(page-1)*limit + 1}-{(page-1)*limit + resultCount} of {totalResultCount} results
            </span>
        </div>
    )
}

export function FilterBox(){
    return (
        <div className="absolute top-0 left-0 bg-background-blue w-[400px] h-full">
        </div>
    )
}
