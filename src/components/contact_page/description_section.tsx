import { poppinsRegular } from "public/fonts/fonts"
import React from "react"

export default function ContactDescriptionSection(){
    return (
        <section className="py-10 space-y-4">
            <h2 className={`${poppinsRegular.className} font-bold text-4xl text-black text-center`}>Get In Touch With Us</h2>

            <h3 className={`${poppinsRegular.className} text-center text-foreground-muted max-w-[500px] w-[90%] m-auto`}>
            {"For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!"}
            </h3>
        </section>
    )
}
