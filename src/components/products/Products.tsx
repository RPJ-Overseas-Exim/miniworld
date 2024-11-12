import React from "react"
import Image from "next/image"

export default function Products(){
    return (
        <section className="px-6 sm:px-8 md:px-10 space-y-8" >
            {/* heading section */}
            <h2 className="text-foreground-blue text-center font-bold text-[24px] md:text-[32px]">Our Products</h2>

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
        </section>
    )
}

export interface ProductCardProps {
   src: string;
   alt: string;
   width?: number;
   height?: number;
   title: string;
   description: string;
   price: string;
}

export function ProductCard({src, alt, title, description, price, width=100, height=100}: ProductCardProps){
    return (
        <div className="w-[150px] h-[280px] sm:w-[200px] sm:h-[320px] md:w-[220px] md:h-[400px] lg:w-[285px] lg:h-[446px] rounded overflow-hidden border border-zinc-300">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full"
            />
            <div className="w-full flex flex-col gap-y-2 text-black py-4 px-2">
                <div className="text-base md:text-xl font-bold">{title}</div>
                <div className="text-xs md:text-base font-semibold text-zinc-500">{description}</div>
                <div className="text-base md:text-xl font-medium text-zinc-700">Rs. {price}</div>
            </div>
        </div>
    )
}
