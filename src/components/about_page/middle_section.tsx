import React from "react"
import Image from "next/image"

export default function AboutMiddleSection(){
    return (
        <div className="px-6 lg:pt-6 pb-6 w-full h-full flex items-start justify-center">
            <div className="max-w-[700px] w-full overflow-hidden rounded-lg">
                <Image
                    src="/images/about/about.jpg"
                    alt="about image"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </div>
    )
}
