import React from "react";
import { poppinsBold, poppinsRegular } from "public/fonts/fonts";

export default function SlideDetails(){
    return (
        <div className="bg-[#ffffff72] backdrop-blur-md min-w-[] w-[217px] h-[135px] flex items-center justify-center">
            <div className="text-foreground-muted">
                <h2 className={`${poppinsRegular.className} font-semibold text-[1.1rem] text-center`}>
                    01 - Miniature
                </h2>

                <h2 className={`${poppinsBold.className} text-[1.8rem] text-center`}>
                    Creative Miniature
                </h2>
            </div>
        </div>
    )
}
