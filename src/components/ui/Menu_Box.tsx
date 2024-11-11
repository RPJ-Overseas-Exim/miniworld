"use client"
import React from "react"
import { Menu } from "lucide-react"

export default function MenuBox(){
    return (
        <div className="flex md:hidden">
            <button
                type="button"
                className="w-[28px] h-[28px] text-foreground-purple"
                onClick={()=>console.log("menu clicked")}
            >
                <Menu />
            </button>
        </div>
    )
}
