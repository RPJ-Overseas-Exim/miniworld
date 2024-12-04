"use client"
import React from "react"
import {Search} from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SearchBox(){
    const [query, setQuery] = React.useState<string>("")
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("name", query)
        router.push("/shop?"+newSearchParams.toString())
    }

    return (
        <div className="relative rounded-lg group bg-white">
            <div className="md:w-6 md:h-6 lg:w-7 lg:h-7 group">
                <Search />
            </div>

            <div className="absolute h-0 group-active:h-[max-content] group-hover:h-[max-content] right-0 group-hover:border border-border-muted group-hover:p-2 rounded-lg overflow-hidden transition-all duration-300 ease">
                <form onSubmit={(e)=>handleSearch(e)}>
                    <input
                        type="text"
                        placeholder="search for items"
                        className="px-4 py-2 rounded-lg border border-border-muted text-foreground"
                        value={query}
                        onChange={(e)=>handleChange(e)}
                    />

                    <div className="mt-2 text-white">
                        <button type="submit"
                            className="bg-background-pink p-2 rounded-lg w-full text-center"
                        >Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
