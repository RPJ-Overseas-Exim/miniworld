import React from "react"
import Link from "next/link"
import { ArrowButton } from "~/components/ui/Button"
import { poppinsBold, poppinsRegular } from "public/fonts/fonts"
import { db } from "~/server/db"
import { type productType } from "~/lib/types/Product"
import { ProductList } from "~/components/ProductList"

export default async function Products() {
    let products: productType[] = [];
    try {
        products = await db.query.product.findMany({
            with: {
                productImageRelation: true,
            },
            limit:5,
        });
    } catch (e) {
        console.log(e)
    }
    return (
        <section className="px-6 sm:px-8 md:px-10 space-y-8 z-[4]">
            {/* heading section */}
            <h2 className={`text-foreground-blue text-center font-bold text-[28px] md:text-[32px] drop-shadow-md ${poppinsBold.className}`}>
                Our Products
            </h2>

            {/* cards section */}
            <ProductList products={products}/>

            {/* button section */}
            <div className="flex items-center justify-center">
                <Link
                    href="/products"
                    className="bg-white"
                >
                    <ArrowButton>
                        <div className={`${poppinsRegular.className} font-semibold lg:text-[1rem]`}>
                            Show More
                        </div>
                    </ArrowButton>
                </Link>
            </div>

        </section>
    )
}

