import React from "react"
import Link from "next/link"
import { ProductCard } from "./Product_Card"
import { ArrowButton } from "~/components/ui/Button"
import { poppinsBold, poppinsRegular } from "public/fonts/fonts"

export default function Products(){
    return (
        <section className="px-6 sm:px-8 md:px-10 space-y-8 z-[4]">
            {/* heading section */}
            <h2 className={`text-foreground-blue text-center font-bold text-[28px] md:text-[32px] drop-shadow-md ${poppinsBold.className}`}>
                Our Products
            </h2>
    
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

