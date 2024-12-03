"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { poppinsRegular } from "public/fonts/fonts";
import React from "react"
import { CardButton, SliderButton } from "~/components/ui/Button";

interface FiltersType{
    category: string;
    ascending: string;
    orderBy: string;
    minPrice: number;
    maxPrice: number;
}

export function FilterBox(){
    const searchParams = useSearchParams()
    const router = useRouter()
    const [filters, setFilters] = React.useState<FiltersType>({
        category : searchParams.get("category") ?? "",
        ascending: searchParams.get("ascending") ?? "",
        orderBy: searchParams.get("sortBy") ?? "",
        minPrice: searchParams.get("minPrice") ? parseInt(searchParams.get("minPrice") as string) : 0,
        maxPrice: searchParams.get("maxPrice") ? parseInt(searchParams.get("maxPrice") as string) : 10000,
    })

    const handleFormFilter = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>)=>{
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }

    const handleFilters = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const newSearchParams = new URLSearchParams(searchParams)

        if (filters.category.length > 0){
            newSearchParams.set("category", filters.category)
        }
        if (filters.ascending.length > 0){
            newSearchParams.set("ascending", filters.ascending)
        }
        if (filters.orderBy.length > 0){
            newSearchParams.set("sortBy", filters.orderBy)
        }
        if(filters.maxPrice){
            newSearchParams.set("maxPrice", `${filters.maxPrice}`)
        }
        if(filters.minPrice){
            newSearchParams.set("minPrice", `${filters.minPrice}`)
        }

        router.push("/shop?"+newSearchParams.toString())
    }

    const closeFilter = ()=>{
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("filter", "false")
        router.push("/shop?"+newSearchParams.toString())
    }

    return (
        <>
        {searchParams.get("filter")=="true" && (<div
            className={`${poppinsRegular.className} fixed z-[98] top-[70px] left-0 w-full h-full sm:static bg-background-muted sm:w-[250px] lg:w-[400px] h-full text-foreground-muted p-4`}
        >
            <form
                onSubmit={(e)=>handleFilters(e)}
                className="flex flex-col gap-y-4"
            >
                <div className="flex flex-col gap-y-2">
                    <label className="text-black"
                        htmlFor="category"
                    >Category</label>
                    <select
                        className="px-4 py-2 rounded-lg"
                        onChange={(e)=>handleFormFilter(e)}
                        name="category"
                        id="category"
                    >
                        <option value="">Select Category</option>
                        <option value="human">Human</option>
                        <option value="animal">Animal</option>
                        <option value="anime">Anime</option>
                        <option value="cartoon">Cartoon</option>
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-black"
                        htmlFor="ascending"
                    >Ascending Order: </label>
                    <select
                        className="px-4 py-2 rounded-lg"
                        onChange={(e)=>handleFormFilter(e)}
                        name="ascending"
                        id="ascending"
                    >
                        <option value="">Select Category</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-black"
                        htmlFor="orderBy"
                    >Sort by: </label>
                    <select
                        className="px-4 py-2 rounded-lg"
                        onChange={(e)=>handleFormFilter(e)}
                        name="orderBy"
                        id="orderBy"
                    >
                        <option value="">Select Category</option>
                        <option value="price">Price</option>
                        <option value="name">Name</option>
                        <option value="likes">Likes</option>
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-black"
                        htmlFor="range"
                    >Price range: </label>

                    <div className="flex gap-x-2">
                        <div className="flex items-center gap-x-2">
                            <span>Min</span>
                            <input
                                type="number"
                                className="input-min w-16 md:w-12 lg:w-16 px-2 py-1 rounded-lg"
                                value={filters.minPrice}
                                name="minPrice"
                                id="minPrice"
                                onChange={(e)=>handleFormFilter(e)}
                            />
                        </div>

                        <span className="text-xl">-</span>

                        <div className="flex items-center gap-x-2">
                            <label htmlFor="maxPrice">Max</label>
                            <input
                                type="number"
                                className="input-max w-16 md:w-12 lg:w-16 px-2 py-1 rounded-lg"
                                value={filters.maxPrice}
                                name="maxPrice"
                                id="maxPrice"
                                onChange={(e)=>handleFormFilter(e)}
                            />
                        </div>
                    </div>

                    <div className="">
                        <div className=""></div>
                    </div>

                    <div className="">
                        <input
                            type="range"
                            min="100"
                            max="10000"
                            step="100"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={(e)=>handleFormFilter(e)}
                            className="w-full"
                        />
                        <input
                            type="range"
                            min="100"
                            max="10000"
                            step="100"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={(e)=>handleFormFilter(e)}
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="flex gap-x-4">
                    <button
                        type="submit"
                        className="text-black w-1/2"
                    >
                        <SliderButton>
                            Filter
                        </SliderButton>
                    </button>

                    <button
                        type="button"
                        className="text-black w-1/2"
                        onClick={closeFilter}
                    >
                        <SliderButton>
                            Close
                        </SliderButton>
                    </button>
                </div>
            </form>
        </div>)
        }
        </>
    )
}
