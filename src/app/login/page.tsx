"use client"
import React from "react"
import Link from "next/link"
import { poppinsBold } from "public/fonts/fonts"
import { SliderButton } from "~/components/ui/Button"
import CustomLabel from "~/components/login/customLabel"

export default function Login(){
    {/* functionality section of login */}
    const handleSubmit = ()=>{
        console.log("handle submission of form")
    }

    return (
        <section className="min-h-[80vh] flex items-center justify-center py-4 gradient-background">
            <div className="border border-border-muted py-6 px-4 rounded-lg drop-shadow-lg bg-white">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-6 sm:p-4 items-center"
                >
                    <h2 className={`${poppinsBold.className} text-3xl text-foreground-pink w-full`}>Login</h2>

                    <CustomLabel
                        label="Email"
                        labelFor="email"
                        inputType="email"
                        inputName="email"
                        inputId="email"
                        placeholder="Enter your email"
                    />
                    
                    <button type="submit" className="w-full" >
                        <SliderButton>
                            <div className="font-semibold text-lg md:text-xl w-full">
                                Login
                            </div>
                        </SliderButton>
                    </button>

                    <Link
                        href="/register"
                        className="text-foreground-muted text-center"
                    >
                        {"Don't"} have an account ? <span className="text-foreground-blue">Register</span> 
                    </Link>
                </form>
            </div>
        </section>
    )
}

