import React from "react"
import ImageSection from "~/components/shop_page/banner/image_section"
import FilterSection from "~/components/shop_page/filter/filter_section"
import ProductSection from "~/components/shop_page/products/products_section"
import BottomBannerSection from "~/components/shop_page/bottom_banner/bottom_banner_section"
import { getProductData } from "~/lib/actions/products_data"

export default async function Shop({
    searchParams
}: {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}){

    const {category, sortBy, ascending} = await searchParams

    const products = await getProductData({
        limit: 12,
        withImages: true,
        withCategories: true,
        orderBy: sortBy as string,
        ascending: ascending === "false" ? false : true,
    })

    return (
        <main className="flex flex-col">
            <ImageSection />
            <FilterSection />
            <ProductSection products={products} />
            <BottomBannerSection />
        </main>
    )
}

