"use client"
import Link from "next/link";
import { poppinsBold } from "public/fonts/fonts";
import React, { useActionState } from "react"
import { SliderButton } from "~/components/ui/Button";
import { z } from "zod"
import { registerFormSchema } from "~/lib/types/User";
import { postUserData } from "~/server/actions/actions";
import CustomLabel from "~/components/login/customLabel"


export default function Register() {

    {/* functionality of register page */ }


    const handleSubmit = async (_: { success: boolean, message: string }, formData: FormData) => {

        const user: z.infer<typeof registerFormSchema> = {
            username: formData.get("username") as string,
            email: formData.get("email") as string,
            number: formData.get("number") as string,
        }

        const results = registerFormSchema.safeParse(user)

        if (results.error) {
            for (const [name, _] of Object.entries(results.error.formErrors.fieldErrors)) {
                switch (name) {
                    case "username":
                        return { success: false, message: "please enter a valid username" }
                    case "email":
                        return { success: false, message: "Please enter a valid email" }
                    case "number":
                        return { success: false, message: "Please enter a valid 10 digit number" }
                }
            }
        }

        const postUser = await postUserData(user)
        if(postUser){
            return {success:true, message: "Registration successful"}
        }
        return {success:false, message:"Registration failed"}
    }

    const [data, formAction, isPending] = useActionState(handleSubmit, { success: false, message: "" })

    return (
        <section className="min-h-[80vh] flex items-center justify-center py-4 gradient-background">
            <div className="border border-border-muted py-6 px-4 rounded-lg drop-shadow-lg bg-white">
                <form
                    id="register-form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        const form: HTMLFormElement | null = document.querySelector("#register-form")
                        if (form) {
                            formAction(new FormData(form))
                        }
                    }}
                    className="flex flex-col gap-y-6 sm:p-4 items-center"
                >
                    <h2 className={`${poppinsBold.className} text-3xl text-foreground-pink w-full`}>Register</h2>

                    <CustomLabel
                        label="Username"
                        labelFor="username"
                        inputType="text"
                        inputName="username"
                        inputId="username"
                        placeholder="Enter your username"
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

                    <p>
                        {data.success === false ? data.message : ""}
                    </p>

                    <button type="submit" className="w-full" disabled={isPending}>
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

