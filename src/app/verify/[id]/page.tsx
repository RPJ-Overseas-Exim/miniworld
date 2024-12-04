"use client"
import { useParams} from "next/navigation"
import { poppinsBold } from "public/fonts/fonts"
import React, {  useActionState } from "react"
import { CustomLabel } from "~/app/register/CustomLabel"
import { SliderButton } from "~/components/ui/Button"
import { verifyOTP } from "~/server/actions/actions"


export default function page (){
    const path = useParams()

    async function handleSubmit(_:{success:boolean, message:string}, formData:FormData){
        const otp = formData.get("otp")
        if(otp){
            return await verifyOTP(path["id"] as string ?? "", Number(otp))
        }
        return {success:false, message:"OTP could not be verified"}
    }

    const [data, formAction, isPending] = useActionState(handleSubmit, { success: false, message: "" })

    return (
        <section className="min-h-[80vh] flex items-center justify-center py-4 gradient-background">
            <div className="border border-border-muted py-6 px-4 rounded-lg drop-shadow-lg bg-white">
                <form
                    id="verification-form"
                    action= {formAction}
                    className="flex flex-col gap-y-6 sm:p-4 items-center"
                >
                    <h2 className={`${poppinsBold.className} text-3xl text-foreground-pink w-full`}>Verify</h2>

                    <CustomLabel
                        label="OTP"
                        labelFor="otp"
                        inputType="number"
                        inputName="otp"
                        inputId="otp"
                        placeholder="Enter OTP sent to your email"
                    />

                    <p>
                        {data.success === false ? data.message : ""}
                    </p>

                    <button type="submit" className="w-full" disabled={isPending}>
                        <SliderButton>
                            <div className="font-semibold text-lg md:text-xl">
                                Submit
                            </div>
                        </SliderButton>
                    </button>
                </form>
            </div>
        </section>
    )
}
