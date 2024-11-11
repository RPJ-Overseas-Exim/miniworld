"use client"
import React from "react"

export default function HomeCard(){
return (
    <div className="absolute md:right-[30px] bg-[rgba(0,0,0,0.3)] rounded-lg border px-6 py-4 max-w-[400px] flex flex-col gap-y-5">
        <div>
            <h3 className="text-white font-semibold">New Arrival</h3>
            <h2 className="text-foreground-pink font-bold text-4xl whitespace-nowrap">Discover Our</h2>
            <h2 className="text-foreground-pink font-bold text-4xl whitespace-nowrap">New Collection</h2>
        </div>

        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <button
            type="button"
            className="px-6 py-4 bg-background-pink rounded-lg w-[max-content]"
            onClick={()=>console.log("Buy now clicked")}
        >Buy Now</button>
    </div>
)
}
