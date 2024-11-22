"use client"
import React from "react"
import { useRouter, useSearchParams } from "next/navigation";
import CategoryButton from "./Category_button";

export default function Categories(){
    const router = useRouter()
    const searchParams = useSearchParams()
    const [category, setCategory] = React.useState<string>(searchParams.get("category") ?? "")

    const handleOnClick = (label: string)=>{
       setCategory(label)
       const filterParams = new URLSearchParams(searchParams)
       filterParams.set("category", label.toLowerCase())
       router.push("/shop?"+ filterParams.toString())
    }

    return (
        <div className="w-full hidden lg:flex px-4 py-2 flex-row items-center gap-x-2">
            <CategoryButton label="All" isActive={searchParams.get("category") === "all" || category === ""} handleOnClick={handleOnClick} />
            <CategoryButton label="Human" isActive={searchParams.get("category")=== "human"} handleOnClick={handleOnClick}  />
            <CategoryButton label="Animal" isActive={searchParams.get("category") === "animal"} handleOnClick={handleOnClick}  />
            <CategoryButton label="Anime" isActive={searchParams.get("category") === "anime"} handleOnClick={handleOnClick}  />
            <CategoryButton label="Cartoon" isActive={searchParams.get("category") === "cartoon"} handleOnClick={handleOnClick}  />
        </div>
    )
}

