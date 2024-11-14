import React from "react"
import Link from "next/link"
import { ProductCard } from "./Product_Card"

export default function Products(){
    return (
        <section className="bg-white px-6 sm:px-8 md:px-10 space-y-8 z-[4]" >
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
                <Link href="/products"
            className="relative inline-flex items-center px-8 py-2 overflow-hidden text-lg font-medium text-foreground-pink border-2 border-border-pink rounded-full hover:text-white group hover:bg-gray-50">
                <span
                className="absolute left-0 block w-full h-0 transition-all bg-background-pink opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span
                className="absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                        </path>
                    </svg>
                </span>

                <span className="relative">Show More</span>
            </Link>
            </div>

            
        </section>
    )
}

