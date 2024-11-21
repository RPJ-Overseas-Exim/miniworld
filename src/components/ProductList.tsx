import React from "react"
import { ProductCard } from "~/components/home_page/products/Product_Card"
import { productType } from "~/lib/types/Product"

export function ProductList ({products}:{products:productType[]}){
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2">
            {
                products && products.map((product) => (
                    <ProductCard
                        key={product.id}
                        src={product?.productImageRelation[0]?.url || "/images/wip.png"}
                        alt=""
                        title={product.name ?? "Untitled"}
                        description={product.description ?? "No description"}
                        price={String(product.price)}
                    />
                ))
            }
        </div>
    )
}
