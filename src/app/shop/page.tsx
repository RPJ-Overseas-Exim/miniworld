import React from "react"
import ImageSection from "~/components/shop_page/banner/image_section"
import FilterSection from "~/components/shop_page/filter/filter_section"
import ProductSection from "~/components/shop_page/products/products_section"
import BottomBannerSection from "~/components/shop_page/bottom_banner/bottom_banner_section"
import PaginationSection from "~/components/shop_page/pagination/pagination_section"
import { getProductDetails } from "~/lib/actions/products_data"

export default async function Shop({
    searchParams
}: {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}){

    const {category, sortBy, ascending, page, maxPrice, minPrice, name} = await searchParams

    const {products, totalResult, returnResult} = await getProductDetails({
        limit: 25,
        category: category === "all" ? "" : category as string,
        orderBy: sortBy as string,
        ascending: ascending === "false" ? false : true,
        maxPrice: maxPrice ? parseInt(maxPrice as string) : 10000,
        minPrice: minPrice ? parseInt(minPrice as string) : 0,
        name: name as string,
        page: page ? parseInt(page as string) : 1,
    })

    return (
        <main className="flex flex-col">
            <ImageSection />
            <FilterSection limit={25} page={page ? Number(page) : 1} totalResultCount={totalResult} resultCount={returnResult} />
            <ProductSection
                products={products}
            />
            <PaginationSection
                page={page ? Number(page) : 1}
                totalResult={totalResult}
                limit={25}
            />
            <BottomBannerSection />
        </main>
    )
}

