import React from "react"
import PrevButton from "./PrevButton";
import NextButton from "./NextButton"
import PageButton from "./PageButton";

export interface PaginationSectionProps{
    totalResult: number;
    page: number;
    limit: number;
}

export default function PaginationSection({
    page,
    totalResult,
    limit
}: PaginationSectionProps){
    return (
        <div className="text-black py-4 flex items-center justify-center">
            <div className="flex gap-x-6 items-center">
                <PrevButton
                    prevPage={(page - 1)}
                />
                    
                <PageButton page={page - 1} totalPages={totalResult / limit} />
                <PageButton page={page} totalPages={totalResult / limit} />
                <PageButton page={page + 1} totalPages={totalResult / limit} />

                <NextButton
                    nextPage={(page + 1)}
                    totalPages = {totalResult / limit}
                />
            </div>
        </div>
    )
}


