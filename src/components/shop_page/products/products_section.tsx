import React from "react"
import { ProductList } from "~/components/ProductList";
import {type productType } from "~/lib/types/Product";
import { FilterBox } from "./FilterBox";

export default async function ProductSection({
    products,
}:{
    products: productType[];
}){

    return (
        <section className="px-4 py-6 flex gap-0">
            <FilterBox />
            <ProductList products={products} />
        </section>
    )
}
