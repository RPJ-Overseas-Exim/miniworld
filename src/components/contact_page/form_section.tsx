"use client"
import React from "react"
import { Phone, MapPin, Clock4 } from "lucide-react"
import { poppinsRegular } from "public/fonts/fonts"
import { SliderButton } from "../ui/Button"

interface formDetailsType{
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactFormSection(){
    const [formDetails, setFormDetails] = React.useState<formDetailsType>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleFormDetail = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(formDetails)
    }

    return (
        <section className={`flex justify-center text-black py-6 ${poppinsRegular.className}`}>
            <div className="w-[90%] max-w-[900px] flex flex-col md:flex-row gap-y-8 md:gap-y-0">
                <ContactDetailsSection />
                
                <form
                    className="flex flex-col gap-y-4 md:w-1/2"
                    onSubmit={(e)=>handleSubmit(e)}
                >

                    <div className="text-black flex flex-col gap-2">
                        <label htmlFor="name"
                            className="font-medium"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="p-2 rounded-lg border border-border-muted"
                            placeholder="Enter your name"
                            onChange={(e)=>handleFormDetail(e)}
                        />
                    </div>

                    <div className="text-black flex flex-col gap-2">
                        <label htmlFor="email"
                            className="font-medium"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="p-2 rounded-lg border border-border-muted"
                            placeholder="Enter your email address"
                            onChange={(e)=>handleFormDetail(e)}
                        />
                    </div>

                    <div className="text-black flex flex-col gap-2">
                        <label htmlFor="subject"
                            className="font-medium"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="p-2 rounded-lg border border-border-muted"
                            placeholder="Enter your subject"
                            onChange={(e)=>handleFormDetail(e)}
                        />
                    </div>

                    <div className="text-black flex flex-col gap-2">
                        <label htmlFor="message"
                            className="font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="p-2 rounded-lg border border-border-muted"
                            placeholder="Enter your message"
                            onChange={(e)=>handleFormDetail(e)}
                        />
                    </div>

                    <button type="submit" className=" w-[max-content]">
                        <SliderButton>
                            Submit
                        </SliderButton>
                    </button>

                </form>
            </div>
        </section>
    )
}

export function ContactDetailsSection(){
    return (
        <div className="space-y-6 md:w-1/2">

            {/* Address part */}
            <div className="flex gap-x-2 px-2">
                <div className="w-8 h-8 text-white">
                    <MapPin className="w-full h-full" fill="black" />
                </div>

                <div className="space-y-2 w-[80%]">
                    <h3 className={`${poppinsRegular.className} font-medium text-2xl`}>
                        Address
                    </h3>

                    <span className={`${poppinsRegular.className} text-foreground-muted`}>
                        {"236 5th SE Avenue, New York NY10000, United States"}
                    </span>
                </div>
            </div>


            {/* Phone part */}
            <div className="flex gap-x-2 px-2">
                <div className="w-8 h-8 text-white">
                    <Phone className="w-full h-full" fill="black" />
                </div>

                <div className="space-y-2 w-[80%]">
                    <h3 className={`${poppinsRegular.className} font-medium text-2xl`}>
                        Phone
                    </h3>

                    <span className={`${poppinsRegular.className} text-foreground-muted`}>
                        {"Mobile: +(84) 546-6789"}<br />
                        {"Hotline: +(84) 456-6789"}
                    </span>
                </div>
            </div>


            {/* Working Time part */}
            <div className="flex gap-x-2 px-2">
                <div className="w-8 h-8 text-white">
                    <Clock4 className="w-full h-full" fill="black" />
                </div>

                <div className="space-y-2 w-[80%]">
                    <h3 className={`${poppinsRegular.className} font-medium text-2xl`}>
                        Working Time
                    </h3>

                    <span className={`${poppinsRegular.className} text-foreground-muted`}>
                        {"Monday-Friday: 9:00 - 22:00"}<br />
                        {"Saturday-Sunday: 9:00 - 21:00"}
                    </span>
                </div>
            </div>

        </div>
    )
}
