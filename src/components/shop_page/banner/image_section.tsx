import React from "react"
import PageHeader from "~/components/ui/Page_header"

export default function ImageSection(){
    return (
        <section>
            <div className="relative bg-[url('/images/shop/hero-img.svg')] min-h-[300px] bg-center bg-cover">
                {/* content section */}
                <PageHeader title="Shop" subtitle="Shop" />
            </div>
        </section>
    )
}

