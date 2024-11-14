import React from "react"
import { RangeCard } from "./Range_Card"

export default function RangeSection(){
    return (
        <section className="bg-white w-full space-y-4 sm:space-y-6 z-[4]">
            {/* heading section */}
            <div className="">
                <h2 className="text-foreground-blue text-center font-bold text-[24px] md:text-[32px]">Browse the Range</h2>
                <h3 className="text-zinc-500 text-center font-base text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>

            {/* cards section */}
            <div className="flex flex-row flex-wrap gap-y-6 sm:gap-y-2 justify-center items-center gap-x-4 px-4 py-4">
                <RangeCard src="/images/category/custom.svg" link="/custom" alt="Custom made miniatures" label="Custom" />
                <RangeCard src="/images/category/human.svg" link="/human" alt="Human miniatures" label="Human" />
                <RangeCard src="/images/category/pre-made.svg" link="/premade" alt="Pre made miniatures" label="Pre-made" />
            </div>
        </section>
    )
}

