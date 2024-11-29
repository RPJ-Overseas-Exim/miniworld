"use client"
import { useSearchParams } from "next/navigation"
import React from "react"
import { CardButton } from "~/components/ui/Button";

interface FiltersType{
    category: string;
    ascending: boolean;
}

export function FilterBox(){
    const searchParams = useSearchParams()
    const [filters, setFilters] = React.useState<FiltersType>({
        category : "",
        ascending: true,
    })

    const handleFilters = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(filters.category)
        console.log("filter handle")
    }

    const handleFormFilter = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setFilters({...filters, [e.target.name]: e.target.value})
    }

    return (
        <div className="fixed z-[998] top-[70px] left-0 w-full h-full sm:static bg-background-muted sm:w-[250px] lg:w-[400px] h-full text-foreground-muted p-4">
            <form
                onSubmit={(e)=>handleFilters(e)}
                className="flex flex-col gap-y-4"
            >
                <div className="flex flex-col gap-y-2">
                    <label className="text-black">Category</label>
                    <select
                        className="px-4 py-2 rounded-lg"
                        onChange={(e)=>handleFormFilter(e)}
                        name="category"
                    >
                        <option value="">Select Category</option>
                        <option value="human">Human</option>
                        <option value="animal">Animal</option>
                        <option value="anime">Anime</option>
                        <option value="cartoon">Cartoon</option>
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-black">Ascending Order: </label>
                    <select
                        className="px-4 py-2 rounded-lg"
                        onChange={(e)=>handleFormFilter(e)}
                        name="ascending"
                    >
                        <option value="">Select Category</option>
                        <option value="human">Human</option>
                        <option value="animal">Animal</option>
                        <option value="anime">Anime</option>
                        <option value="cartoon">Cartoon</option>
                    </select>
                </div>


                <button type="submit" className="text-black">
                    <CardButton>
                        Filter
                    </CardButton>
                </button>
            </form>
        </div>
    )
}
