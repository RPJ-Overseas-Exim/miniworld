import React from "react"
import { RangeCard } from "./Range_Card"
import { poppinsBold, poppinsRegular } from "public/fonts/fonts"

export default function RangeSection() {
    return (
        <section className="w-full space-y-4 sm:space-y-6 my-16">
            {/* heading section */}
            <div className="max-w-[85%] m-auto space-y-2 mt-4">
                <h2 className={`text-foreground-blue text-center text-[24px] md:text-[32px]
                    ${poppinsBold.className}`}>
                    Browse the Range
                </h2>
                <h3 className={`text-zinc-500 text-center text-[16px] lg:text-[20px]
                    ${poppinsRegular.className}`}>
                    Miniatures for Every Imagination—Unique, Detailed, and Crafted Just for You!
                </h3>
            </div>

            {/* cards section */}
            <div className="flex flex-row gap-x-2 flex-wrap items-center justify-center gap-y-4 py-6">
                <RangeCard
                    src="/images/category/custom.svg"
                    link="/custom"
                    alt="Custom made miniatures"
                    label="Custom">
                    &quot;Custom miniatures made to your exact vision—personalized,
                    detailed, and uniquely yours!&quot;
                </RangeCard>
                <RangeCard
                    src="/images/category/human.svg"
                    link="/human"
                    alt="Human miniatures"
                    label="Human">
                    &quot;Adorable, hand-crafted miniatures that look just like
                    humans—perfectly detailed and full of charm!&quot;
                </RangeCard>
                <RangeCard
                    src="/images/category/pre-made.svg"
                    link="/premade"
                    alt="Pre made miniatures"
                    label="Pre-made">
                    &quot;Bring your favorite anime character to life with this
                    detailed, hand-crafted miniature!&quot;
                </RangeCard>
            </div>
        </section>
    )
}

