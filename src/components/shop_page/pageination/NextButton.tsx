"use client"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"

export interface NextButtonProps{
    nextPage: number;
    totalPages: number;
}

export default function NextButton({
    nextPage, totalPages
}: NextButtonProps){
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleClick=()=>{
        if (nextPage <= totalPages){
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.set("page", String(nextPage))
            router.push("/shop?"+newSearchParams.toString())
        }
    }

    return (
        <button type="button"
            onClick={handleClick}
            className="bg-[#FAF3EA] px-4 py-2 rounded-lg text-foreground"
        >
            Next
        </button>
    )
}
