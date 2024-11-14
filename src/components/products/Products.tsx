import React from "react"
import Link from "next/link"
import { ProductCard } from "./ProductCard"

export default function Products(){
    return (
        <section className="bg-white px-6 sm:px-8 md:px-10 space-y-8" >
            {/* heading section */}
            <h2 className="text-foreground-blue text-center font-bold text-[24px] md:text-[32px]">Our Products</h2>
    
            {/* cards section */}
            <div className="flex items-center justify-center flex-wrap w-full gap-2">
                <ProductCard
                    src="/images/product/product1.svg"
                    alt=""
                    title="Couple boat"
                    description="Couples on a romantic sites"
                    price="5000"
                />
                <ProductCard
                    src="/images/product/product1.svg"
                    alt=""
                    title="Couple boat"
                    description="Couples on a romantic sites"
                    price="5000"
                />
                <ProductCard
                    src="/images/product/product1.svg"
                    alt=""
                    title="Couple boat"
                    description="Couples on a romantic sites"
                    price="5000"
                />
                <ProductCard
                    src="/images/product/product1.svg"
                    alt=""
                    title="Couple boat"
                    description="Couples on a romantic sites"
                    price="5000"
                />
                <ProductCard
                    src="/images/product/product1.svg"
                    alt=""
                    title="Couple boat"
                    description="Couples on a romantic sites"
                    price="5000"
                />
                <ProductCard
                    src="/images/product/product1.svg"
                    alt=""
                    title="Couple boat"
                    description="Couples on a romantic sites"
                    price="5000"
                />
                <ProductCard
                    src="/images/product/product1.svg"
                    alt=""
                    title="Couple boat"
                    description="Couples on a romantic sites"
                    price="5000"
                />
            </div>

            {/* button section */}
            <div className="flex items-center justify-center">
                <Link 
                    href="/products"
                    className="cursor-pointer text-[16px] font-semibold text-foreground-pink px-10 py-2 border border-border-pink"
                >
                    Show More
                </Link>
            </div>
        </section>
    )
}

