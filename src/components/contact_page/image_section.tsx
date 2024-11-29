import React from "react"
import PageHeader from "../ui/Page_header"

export default function ImageSection(){
    return (
        <section>
            <div className="relative bg-[url('/images/contact/hero_img.svg')] min-h-[300px] bg-center bg-cover">
                {/* content section */}
                <PageHeader title="Contact" subtitle="Contact" />
            </div>
        </section>
    )
}
