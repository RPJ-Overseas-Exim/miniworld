"use client"
import React from "react"

export default function Categories(){
    return (
        <div className="w-full hidden lg:flex px-4 py-2 flex-row items-center gap-x-2">
            <CategoryButton>
                <div>All</div>
            </CategoryButton>

            <CategoryButton>
                <div>Human</div>
            </CategoryButton>

            <CategoryButton>
                <div>Animals</div>
            </CategoryButton>

            <CategoryButton>
                <div>Cars</div>
            </CategoryButton>

            <CategoryButton>
                <div>Anime</div>
            </CategoryButton>
        </div>
    )
}

interface CategoryButtonProps{
    children: React.ReactNode;
}

export function CategoryButton({children}:CategoryButtonProps){
    return (
        <button type="button" className="bg-background-pink px-2 py-1 rounded-lg text-sm text-white">
            {children}
        </button>
    )
}
