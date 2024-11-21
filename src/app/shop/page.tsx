import React from "react"
import ImageSection from "~/components/shop_page/banner/image_section"
import FilterSection from "~/components/shop_page/filter/filter_section"
import ProductSection from "~/components/shop_page/products/products_section"
import BottomBannerSection from "~/components/shop_page/bottom_banner/bottom_banner_section"

export default function Shop(){
    return (
        <main className="flex flex-col">
            <ImageSection />
            <FilterSection />
            <ProductSection />
            <BottomBannerSection />
        </main>
    )
}

