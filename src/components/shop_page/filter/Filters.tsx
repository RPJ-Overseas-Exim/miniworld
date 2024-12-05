"use client"
import React from "react"
import { SlidersHorizontal } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";

export interface FiltersProps{
    totalResultCount: number;
    resultCount: number;
    page: number;
    limit: number;
}

export default function Filters({totalResultCount, resultCount, page, limit}:FiltersProps){
    const router = useRouter()
    const searchParams = useSearchParams()

    const  handleFilterBox = ()=>{
        const newSearchParams = new URLSearchParams(searchParams) 
        const filterValue = searchParams.get("filter") ?? ""
        newSearchParams.set("filter", filterValue == "true" ? "false" : "true")
        router.push("/shop?"+newSearchParams.toString())
    }

    return (
        <div className="flex items-center gap-x-4">
            <button type="button" onClick={handleFilterBox}>
                <SlidersHorizontal className="text-black" />
            </button>

            <h2 className="text-black text-base sm:text-xl">
                Filter
            </h2>

            <span className="hidden md:block text-sm border-l-2 border-black pl-4 whitespace-nowrap">
                Showing {(page-1)*limit + 1}-{Math.min((page-1)*limit + resultCount, totalResultCount)} of {totalResultCount} results
            </span>
        </div>
    )
}

