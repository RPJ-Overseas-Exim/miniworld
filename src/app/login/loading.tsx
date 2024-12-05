import React from "react"

export default function Loading(){
    return (
    <div className="w-full h-[600px] border-2 border-black flex items-center justify-center">

        <div className="flex flex-col gap-4 items-center w-[90%] max-w-[700px]">
            <div className="text-2xl text-white">Loading...</div>

            <div className="border-2 border-linear-gradient from-blue-600 to-pink-600 w-[90%] h-10 rounded-xl p-2">
                <div className="bg-background-pink w-full h-full rounded-xl"></div>
            </div>
        </div>
        
    </div>
    )
}
