import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function RangeSection(){
    return (
        <section className="w-full space-y-4 sm:space-y-6">
            {/* heading section */}
            <div className="">
                <h2 className="text-foreground-blue text-center font-bold text-[24px] md:text-[32px]">Browse the Range</h2>
                <h3 className="text-zinc-500 text-center font-base text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>

            {/* cards section */}
            <div className="flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row justify-center items-center gap-x-4 px-4 py-4">
                <RangeCard src="/images/category/custom.svg" link="/custom" alt="Custom made miniatures" label="Custom" />
                <RangeCard src="/images/category/human.svg" link="/human" alt="Human miniatures" label="Human" />
                <RangeCard src="/images/category/pre-made.svg" link="/premade" alt="Pre made miniatures" label="Pre-made" />
            </div>
        </section>
    )
}

export interface RangeCardProps {
    src: string;
    alt: string;
    label: string;
    link: string;
    width?: number;
    height?: number;
}

export function RangeCard({src, alt, label, link, width=100, height=100}:RangeCardProps){
    return (
        <Link
        href={link}
        className="flex flex-col justify-center gap-y-2">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-[280px] h-[390px] sm:w-[300px] sm:h-[400px] md:w-[381px] md:h-[480px] rounded-lg object-cover"
            />

            <div className="text-xl text-black text-center font-semibold">
                {label}
            </div>
        </Link>
    )
}
