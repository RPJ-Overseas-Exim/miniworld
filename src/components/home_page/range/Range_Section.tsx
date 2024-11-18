import React from "react"
import { RangeCard } from "./Range_Card"

export default function RangeSection(){
    return (
        <section className="w-full space-y-4 sm:space-y-6">
            {/* heading section */}
            <div className="max-w-[85%] m-auto space-y-2 mt-4">
                <h2 className="text-foreground-blue text-center font-bold text-[24px] md:text-[32px]">Browse the Range</h2>
                <h3 className="text-zinc-500 text-center text-[18px]">Miniatures for Every Imagination—Unique, Detailed, and Crafted Just for You!</h3>
            </div>

            {/* cards section */}
            <div className="flex flex-row gap-x-2 flex-wrap items-center justify-center gap-y-4 py-6">
                <RangeCard
                    src="/images/category/custom.svg"
                    link="/custom"
                    alt="Custom made miniatures"
                    label="Custom"
                    description="Custom miniatures made to your exact vision—personalized, detailed, and uniquely yours!"
                />
                <RangeCard
                    src="/images/category/human.svg"
                    link="/human"
                    alt="Human miniatures"
                    label="Human"
                    description="Adorable, hand-crafted miniatures that look just like humans—perfectly detailed and full of charm!"
                />
                <RangeCard
                    src="/images/category/pre-made.svg"
                    link="/premade"
                    alt="Pre made miniatures"
                    label="Pre-made"
                    description="Bring your favorite anime character to life with this detailed, hand-crafted miniature!"
                />
            </div>
        </section>
    )
}

