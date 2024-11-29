"use client"
import React from "react"
import { useRouter, useSearchParams } from "next/navigation"

export interface PageButtonProps{
    page: number;
    totalPages: number;
}

export default function PageButton({page, totalPages}: PageButtonProps){
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentPage = searchParams.get("page") ?? "1"

    const handleClick=()=>{
        if(page > 0 && page <= totalPages){
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.set("page", String(page))
            router.push("/shop?"+newSearchParams.toString())
        }
    }

    return (
        <>
            {page > 0 && page<= totalPages && (<button type="button"
                    onClick={handleClick}
                    className={`${ currentPage === String(page)
                        ? "bg-background-pink"
                        : "bg-[#FAF3EA]"
                    } px-4 py-2 rounded-lg text-foreground`}
                >
                    {page}
                </button>
             )}
        </>
    )
}
