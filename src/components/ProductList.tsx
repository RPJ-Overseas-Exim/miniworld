import React from "react"
import { object } from "zod"
import { ProductCard } from "~/components/home_page/products/Product_Card"
import { productType } from "~/lib/types/Product"

export function ProductList ({products}:{products:productType[]}){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2">
            {
                products && products.map((product) => (
                    <ProductCard
                        key={product.id}
                        src={product?.productImageRelation?.[0]?.url ?? "/images/wip.png"}
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

export function ShopProductList ({products}:{products: Record<string, productType>}){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2">
            {
                products && Object.keys(products).map((key, _) => (
                    <ProductCard
                        key={products[key]?.id as string}
                        src={products[key]?.productImageRelation?.[0]?.url ?? "/images/wip.png"}
                        alt=""
                        title={products[key]?.name ?? "Untitled"}
                        description={products[key]?.description ?? "No description"}
                        price={String(products[key]?.price)}
                    />
                ))
            }
        </div>
    )
}
