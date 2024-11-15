import React from "react"
import Link from "next/link"
import { ArrowButton } from "~/components/ui/Button"
import Slides from "./Slider_Slides"

export default function SliderSection(){
    return (
        <section className="w-11/12 flex flex-col md:flex-row items-center justify-center m-auto">
            {/* left section */}
            <div className="text-black w-full md:w-1/2 flex items-center justify-center">
                <div className=" w-full md:w-2/3 flex flex-col gap-y-4 items-center md:items-start">

                    <h2 className="text-4xl font-bold text-center md:text-left">50+ Unique Miniatures inspirations</h2>
                    <h3 className="text-xl text-center md:text-left">Unleash Your Creativity, One Miniature at a Time!</h3>

                    <Link href="/products" className="w-[max-content]">
                        <ArrowButton>
                            <div>Show More</div>
                        </ArrowButton>
                    </Link>

                </div>
            </div>

            {/* right side slider section */}
            <div className="w-full md:w-1/2 py-6">
                <Slides />
            </div>
            
        </section>
    )
}
