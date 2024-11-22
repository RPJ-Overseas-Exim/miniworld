import React from "react"
import { ProductList } from "~/components/ProductList";
import { productType } from "~/lib/types/Product";

export default async function ProductSection({
    products
}:{
    products: productType[]
}){

    return (
        <section className="px-4 py-6">
            <ProductList products={products} />
        </section>
    )
}
