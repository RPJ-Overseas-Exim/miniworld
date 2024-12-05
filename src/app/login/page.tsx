"use client"
import React, { startTransition, useActionState } from "react"
import Link from "next/link"
import { poppinsBold } from "public/fonts/fonts"
import { SliderButton } from "~/components/ui/Button"
import CustomLabel from "~/components/login/customLabel"
import { useRouter } from "next/navigation"
import { loginFormSchema } from "~/lib/types/User"
import { type z } from "zod"
import { verifyEmail } from "~/server/actions/actions"

export default function Login(){
    {/* functionality section of login */}
    const router = useRouter()
    const handleSubmit = async (_: { success: boolean, message: string }, formData: FormData) => {

        const user: z.infer<typeof loginFormSchema> = {
            emailOrMobile: formData.get("emailOrNumber") as string,
        }

        const results = loginFormSchema.safeParse(user)

        if (results.error) {
            return { success: false, message: "Please enter a valid email" }
        }

        const verificationResp = await verifyEmail(user.emailOrMobile)
        if (verificationResp.success) {
            router.push("/verify/" + verificationResp?.userId || "")
            return { success: verificationResp.success, message: "Please Verify your email" }
        }
        return { success: verificationResp.success, message: "Please enter a valid email" }
    }

    const [data, formAction, isPending] = useActionState(handleSubmit, { success: false, message: "" })

    return (
        <section className="min-h-[80vh] flex items-center justify-center py-4 gradient-background">

            <div className="border border-border-muted py-6 px-4 rounded-lg drop-shadow-lg bg-white">
                <form
                    id="login-form"
                    onSubmit={(e)=>{
                        e.preventDefault()
                        const loginForm:HTMLFormElement | null = document.querySelector("#login-form")
                        if(loginForm){
                            startTransition(()=>{
                                formAction(new FormData(loginForm))
                            })
                        }
                    }}
                    className="flex flex-col gap-y-6 sm:p-4 items-center"
                >
                    <h2 className={`${poppinsBold.className} text-3xl text-foreground-pink w-full`}>Login</h2>

                    <CustomLabel
                        label="Email"
                        labelFor="email"
                        inputType="email"
                        inputName="emailOrNumber"
                        inputId="email"
                        placeholder="Enter your email"
                    />

                    { data.success ===false && data.message!=="" &&(
                        <p>
                            {data.message}
                        </p>
                    )}
                    
                    <button type="submit" className="w-full" disabled={isPending} >
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

