import { eq } from "drizzle-orm";
import React from "react"
import { ProductSlider } from "~/components/shop_page/product/ProductSlider";
import { Star } from "~/components/shop_page/product/Star";
import { BreadCrumbs } from "~/components/ui/Bread_crumbs";
import { Spinner } from "~/components/ui/Spinner";
import { cn } from "~/lib/utils";
import { db } from "~/server/db";
import { product, productImage, productsToCategories } from "~/server/db/schema";

const rating = 4.25
export default async function ProductPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    let ProductResult;
    const id = (await params).id

    try {
        ProductResult = (await db.select()
            .from(product)
            .leftJoin(productImage, eq(product.id, productImage.productId))
            .leftJoin(productsToCategories, eq(product.id, productsToCategories.productId))
            .where(eq(product.id, id))
            .groupBy(
                product.id, productImage.url,
                productImage.productId,
                productsToCategories.productCategoryId,
                productsToCategories.productId
            ))[0]
    } catch (e) {
        console.log(e)
    }

    if (!ProductResult?.product?.id) {
        return (
            <div className="h-dvh flex justify-center items-center">
                <Spinner />
            </div>
        )
    }

    return (
        <section id={id} >

            <BreadCrumbs links={["home", "shop", ProductResult.product.id]}
                className={cn("py-8 bg-background-muted", "px-[var(--px-xs)] sm:px-[var(--px-sm)] md:px-[var(--px-md)] lg:px-[var(--px-lg)]")} />

            <div className="flex flex-col md:flex-row gap-12 my-8 px-[var(--px-xs)] sm:px-[var(--px-sm)] md:px-[var(--px-md)] lg:px-[var(--px-lg)]">
                <div className="md:w-1/2">
                    <ProductSlider/>
                </div>
                <div className="md:w-1/2 mt-2">
                    <h2 className="text-lg">
                        {ProductResult.product.name}
                    </h2>
                    <span className="text-foreground-muted">₹{ProductResult.product.price}</span>
                    <div className="flex gap-1 items-center">
                        <p className="text-xs">{rating}</p>
                        <div className="flex gap-2 my-4">
                            {
                                [...Array(Math.floor(rating))].map((_, index) => {
                                    return (
                                        <ReviewStar star={1} key={index} />
                                    )
                                })
                            }
                            <ReviewStar star={rating - Math.floor(rating)} />
                        </div>
                    </div>
                    <p>
                        {ProductResult.product.description}
                    </p>
                </div>
            </div>
        </section >
    )
}

export function ReviewStar({ star }: { star: number }) {
    if (star > 0.5 && star < 1) {
        return (
            <Star width={12} pos="right" />
        )
    }

    if (star < 0.5 && star > 0) {
        return (
            <Star width={6} pos="left" />
        )
    }
    if (star === 0.5) {
        return <Star width={8} pos="left" />
    }

    return (
        <Star />
    )
}

