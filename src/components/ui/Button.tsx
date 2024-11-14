import React from "react"

interface ButtonProps{
    children: React.ReactNode,
}

export function TwoColorButton({children}:ButtonProps){
    return (
        <div className="relative px-6 py-3 font-bold text-white group">
            <span className="absolute w-full h-full bg-background-purple opacity-70 inset-0 -translate-x-1 -translate-y-1 transition-all duration-300 ease group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute w-full h-full bg-background-pink opacity-70 inset-0 translate-x-1 translate-y-1 transition-all duration-300 ease group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">
                {children}
            </span>
        </div>
    )
}

export function CardButton({children}: ButtonProps){
     return (
         <div className="relative px-6 py-3 group">
            <span className="absolute w-full h-full inset-0 bg-background-pink translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease"></span>
            <span className="absolute w-full h-full border-2 border-white inset-0 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease"></span>
            <span className="relative">
                {children}
            </span>
        </div>
     )
}

export function SliderButton({children}: ButtonProps){
    return (
        <div className="rounded-md px-3.5 py-2 m-1 relative border-2 font-medium border-border-pink group w-[max-content] overflow-hidden">
            <span className="absolute w-64 h-0 bg-background-pink top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-300 ease group-hover:h-64"></span>
            <span className="relative text-foreground-pink group-hover:text-white">
                {children}
            </span>
        </div>
    )
}
