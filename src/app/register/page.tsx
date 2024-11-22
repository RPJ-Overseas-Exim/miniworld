"use client"
import Link from "next/link";
import { poppinsBold } from "public/fonts/fonts";
import React from "react"
import { SliderButton } from "~/components/ui/Button";
import CustomLabel from "~/components/login/customLabel";

export default function Register(){
    {/* functionality of register page */}
    const handleSubmit = ()=>{
        
    }

    return (
        <section className="min-h-[80vh] flex items-center justify-center py-4 gradient-background">
            <div className="border border-border-muted py-6 px-4 rounded-lg drop-shadow-lg bg-white">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-6 sm:p-4 items-center"
                >
                    <h2 className={`${poppinsBold.className} text-3xl text-foreground-pink w-full`}>Register</h2>

                    <CustomLabel
                        label="Name"
                        labelFor="name"
                        inputType="text"
                        inputName="name"
                        inputId="name"
                        placeholder="Enter your name"
                    />

                    <CustomLabel
                        label="Email"
                        labelFor="email"
                        inputType="email"
                        inputName="email"
                        inputId="email"
                        placeholder="Enter your email"
                    />
                    
                    <CustomLabel
                        label="Number"
                        labelFor="number"
                        inputType="number"
                        inputName="number"
                        inputId="number"
                        placeholder="Enter your number"
                    />

                    <button type="submit" className="w-full">
                        <SliderButton>
                            <div className="font-semibold text-lg md:text-xl">
                                Register
                            </div>
                        </SliderButton>
                    </button>

                    <Link
                        href="/login"
                        className="text-foreground-muted text-center"
                    >
                        Already have an account ? <span className="text-foreground-blue">Login</span> 
                    </Link>
                </form>
            </div>
        </section>
    )
}

