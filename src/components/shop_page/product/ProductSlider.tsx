"use client"
import React from "react"

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export function ProductSlider({ productImages }: { productImages: { url: string | null, productId: string | null }[] }) {
    const [emblaRef] = useEmblaCarousel({loop:true}, [Autoplay()])
    return (
        <div className="embla h-full" ref={emblaRef}>
            <div className="embla__container h-full">
                {
                    <Slides images={productImages} />
                }
            </div>
        </div>
    )
}

function Slides({ images }: { images: { url: string | null, productId: string | null }[] }) {
    return (
        <>
            {
                images && images.map((image, index) => {
                    if (!image.url) {
                        return
                    }
                    return (
                        <div className="embla__slide relative h-full" key={index}>
                            <Image src={image.url} alt="productSlide" fill  className="object-cover object-center"/>
                        </div>
                    )
                })
            }
        </>
    )
}
