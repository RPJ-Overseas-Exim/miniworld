import Image from "next/image"
import React from "react"

export function Star({width, pos}:{width?:number, pos?:string}) {
    return (
        <div className={`relative h-4`} style={{width:(width ?? 16)+ "px"}}>
            <Image
                src="/icons/star.svg"
                alt="review star"
                fill
                className="object-cover"
                style={{objectPosition: pos}}
            />
        </div>
    )
}
