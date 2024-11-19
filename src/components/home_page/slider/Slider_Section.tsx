import React from "react"
import Slides from "./Slider_Slides"
import SloganDiv from "./Slider_slogan_div"

export default function SliderSection(){
    return (
        <section className="flex items-center flex-col md:flex-row py-14 gap-4">
            <SloganDiv />

            <Slides />
        </section>
    )
}

