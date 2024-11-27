import React from "react"
import { poppinsRegular } from "public/fonts/fonts"

interface CustomLabelProps {
    label: string;
    labelFor: string;
    inputType: string;
    inputName: string;
    inputId: string;
    placeholder: string;
}

export function CustomLabel({
    label, labelFor, inputType, inputName, inputId, placeholder
}: CustomLabelProps) {
    return (
        <div className="flex flex-col gap-y-2">
            <label
                htmlFor={labelFor}
                className={`text-base sm:text-lg ${poppinsRegular.className} font-bold text-[#8a8787]`}
            >
                {label}
            </label>

            <div className={`${poppinsRegular.className}`}>
                <input
                    type={inputType}
                    name={inputName}
                    id={inputId}
                    placeholder={placeholder}
                    className="text-sm sm:text-base w-full h-full px-4 py-2 font-semibold border border-border-muted rounded-lg w-full"
                />
            </div>
        </div>
    )
}
