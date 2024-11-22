"use client"
import React, { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation";
import CategoryButton from "./Category_button";

export default function Categories(){
    const router = useRouter()
    const searchParams = useSearchParams()
    const [category, setCategory] = React.useState<string>("")

    const handleOnClick = (label: string)=>{
       const filterParams = new URLSearchParams(searchParams)
       filterParams.set("category", label.toLowerCase())
       setCategory(label)
       router.push("/shop?"+filterParams.toString())
    }

    useEffect(()=>{
        setCategory(searchParams.get("category") as string)
    }, [searchParams])

    return (
        <div className="w-full hidden lg:flex px-4 py-2 flex-row items-center gap-x-2">
            <CategoryButton label="All" isActive={category === "all" || category === ""} handleOnClick={handleOnClick} />
            <CategoryButton label="Human" isActive={category === "human"} handleOnClick={handleOnClick}  />
            <CategoryButton label="Animal" isActive={category === "animal"} handleOnClick={handleOnClick}  />
            <CategoryButton label="Anime" isActive={category === "anime"} handleOnClick={handleOnClick}  />
            <CategoryButton label="Cartoon" isActive={category === "cartoon"} handleOnClick={handleOnClick}  />
        </div>
    )
}

