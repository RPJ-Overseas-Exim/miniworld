import { eq } from "drizzle-orm";
import React from "react"
import { ProductSlider } from "~/components/shop_page/product/ProductSlider";
import ReviewStar from "./ReviewStar";
import { BreadCrumbs } from "~/components/ui/Bread_crumbs";
import { Spinner } from "~/components/ui/Spinner";
import { type productType } from "~/lib/types/Product";
import { cn } from "~/lib/utils";
import { db } from "~/server/db";
import { product, productImage, productsToCategories } from "~/server/db/schema";

export default async function ProductPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    let ProductResult:productType = {
        id:null,
        name:null,
        description:null,
        price:null,
        likes:null,
        rating:null
    };
    const id = (await params).id

    try {
        const queryResult = await db.select()
            .from(product)
            .leftJoin(productImage, eq(product.id, productImage.productId))
            .leftJoin(productsToCategories, eq(product.id, productsToCategories.productId))
            .where(eq(product.id, id))
            .groupBy(
                product.id, productImage.url,
                productImage.productId,
                productsToCategories.productCategoryId,
                productsToCategories.productId
            )
        if(queryResult[0]?.product){
            const { id, name, description, price, likes, rating } = queryResult[0]?.product
            ProductResult = {id, name, description, price, likes, rating} 
            ProductResult.productImageRelation = [{url: queryResult[0]?.product_image?.url ?? "/images/wip.png", productId: id}]

            queryResult.forEach(result=>{
                if(ProductResult.productImageRelation){
                    ProductResult.productImageRelation.push({url:result?.product_image?.url ?? null, productId:result.product.id})
                }
            })
        }

    } catch (e) {
        console.log(e)
    }

    if (!ProductResult.id) {
        return (
            <div className="h-dvh flex justify-center items-center">
                <Spinner />
            </div>
        )
    }

    return (
        <section id={id} >
            <BreadCrumbs links={["home", "shop", ProductResult.id ?? "product"]}
                className={cn("py-8 bg-background-muted", "px-[var(--px-xs)] sm:px-[var(--px-sm)] md:px-[var(--px-md)] lg:px-[var(--px-lg)]")} />

            <div className="flex flex-col md:flex-row gap-12 my-8 px-[var(--px-xs)] sm:px-[var(--px-sm)] md:px-[var(--px-md)] lg:px-[var(--px-lg)]">
                <div className="md:w-1/2 h-64 max-w-lg">
                    <ProductSlider productImages={ProductResult.productImageRelation ?? []}/>
                </div>
                <div className="md:w-1/2 mt-2">
                    <h2 className="text-lg">
                        {ProductResult.name}
                    </h2>
                    <span className="text-foreground-muted">₹{ProductResult.price}</span>
                    <div className="flex gap-1 items-center">
                        <p className="text-xs">{ProductResult.rating}</p>
                        <div className="flex gap-2 my-4">
                            {
                                [...Array(4)].map((_, index) => {
                                    return (
                                        <ReviewStar star={Math.floor((ProductResult.rating ?? 0)/(index + 1))} key={index} />
                                    )
                                })
                            }
                            <ReviewStar star={(ProductResult.rating ?? 0) - Math.floor(ProductResult.rating ?? 0)} />
                        </div>
                    </div>
                    <p>
                        {ProductResult.description}
                    </p>
                </div>
            </div>
        </section >
    )
}
