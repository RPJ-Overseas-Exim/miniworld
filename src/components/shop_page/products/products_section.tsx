import React from "react"
import { ProductList } from "~/components/ProductList";
import { productType } from "~/lib/types/Product";

interface ProductSectionProps{
    products: productType[];
}

export default function ProductSection({products}: ProductSectionProps){
    return (
        <section className="px-4 py-6">
            <ProductList products={products} />
        </section>
    )
}
