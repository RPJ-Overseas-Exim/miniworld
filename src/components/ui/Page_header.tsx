import React from "react"
import Image from "next/image"
import { poppinsRegular } from "public/fonts/fonts"
import { ChevronRight } from "lucide-react"

interface PageHeaderProps{
    title: string;
    subtitle: string;
}

export default function PageHeader({title, subtitle}: PageHeaderProps){
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
            <div className="flex justify-center">
                <Image
                    src="icons/page_header_logo.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-16 h-16"
                />
            </div>

            <h2 className={`${poppinsRegular.className} font-medium text-4xl md:text-5xl text-center`}>
                {title}
            </h2>

            <h3 className={`${poppinsRegular.className} font-medium text-sm md:text-base text-center flex justify-center`}>
                <span>Home</span>
                <span><ChevronRight /></span>
                <span>{subtitle}</span>
            </h3>
        </div>
    )
}

