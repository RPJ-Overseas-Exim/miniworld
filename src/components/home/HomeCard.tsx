"use client"
import React from "react"

export default function HomeCard(){
return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] rounded-lg border px-6 py-4 w-[90%] max-w-[400px] flex flex-col gap-y-5">
        <div>
            <h3 className="text-xs md:text-base text-white font-semibold">New Arrival</h3>
            <h2 className="text-3xl md:text-4xl text-foreground-pink font-bold whitespace-nowrap">Discover Our</h2>
            <h2 className="text-3xl md:text-4xl text-foreground-pink font-bold whitespace-nowrap">New Collection</h2>
        </div>

        <p className="text-white text-xs md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <button
            type="button"
            className="px-4 py-2 bg-background-pink rounded-lg w-[max-content] font-semibold text-white text-base md:text-lg"
            onClick={()=>console.log("Buy now clicked")}
        >Buy Now</button>
    </div>
)
}
