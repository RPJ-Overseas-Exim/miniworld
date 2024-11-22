import React from "react"

interface CategoryButtonProps{
    label: string;
    isActive: boolean;
    handleOnClick: (label: string)=>void;
}

export default function CategoryButton({label, isActive, handleOnClick}: CategoryButtonProps){
    return (
        <button
        type="button"
        onClick={()=> handleOnClick(label)}
        className={
            `${isActive
                ? "bg-background-pink text-white"
                : "bg-white text-foreground-pink"
            } px-2 py-1 rounded-lg text-sm`
        }
        >
            <span>{label}</span>
        </button>
    )
}
