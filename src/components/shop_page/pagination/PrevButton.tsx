"use client"
import { useRouter, useSearchParams } from "next/navigation";
import React from "react"

export interface PrevButtonProps{
    prevPage: number;
}

export default function PrevButton({
    prevPage
}: PrevButtonProps){
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleClick = ()=>{
        if(prevPage > 0){
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.set("page", String(prevPage))
            router.push("/shop?" + newSearchParams.toString())
        }
    }

    return (
        <button type="button"
            onClick={handleClick}
            className="bg-[#FAF3EA] px-4 py-2 rounded-lg text-foreground"
        >
            Prev
        </button>
    )
}
