"use client"
import React, { useCallback, useEffect, useState } from "react"

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function ProductSlider({ productImages }: { productImages: { url: string | null, productId: string | null }[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [vEmblaRef, vEmblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [Autoplay()])
    const [activeIndex, setActiveIndex] = useState(0)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
        if (vEmblaApi) {
            vEmblaApi.scrollPrev()
            setActiveIndex(vEmblaApi.selectedScrollSnap())

        }
    }, [emblaApi, vEmblaApi])
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
        if (vEmblaApi) {
            vEmblaApi.scrollNext()
            setActiveIndex(vEmblaApi.selectedScrollSnap())
        }
    }, [emblaApi, vEmblaApi])

    useEffect(() => {
        vEmblaApi?.on("autoplay:select", () => {
            emblaApi?.scrollNext()
            setActiveIndex(vEmblaApi.selectedScrollSnap())
        })

        vEmblaApi?.on("pointerUp", () => {
            const slide = vEmblaApi.selectedScrollSnap()
            emblaApi?.scrollTo(slide)
            setActiveIndex(slide)
        })
        return () => {
            vEmblaApi?.off("autoplay:select", () => {
                console.log("autoplay:select offed")
            })
            vEmblaApi?.off("pointerUp", () => {
                console.log("pointerUp offed")
            })

        }
    }, [vEmblaApi, emblaApi])
    return (
        <div className="flex gap-2 items-start h-full">
            <div className="embla h-full w-3/12 relative">
                <div className="embla__viewport h-full" ref={vEmblaRef}>
                    <div className="h-full flex flex-col">
                        {
                            <Slides images={productImages} className="basis-[30%] my-2" activeIndex={activeIndex} />
                        }
                    </div>
                </div>
            </div>

            <div className="embla h-full w-full relative">
                <div className="embla__viewport h-full" ref={emblaRef}>
                    <div className="embla__container h-full">
                        {
                            <Slides images={productImages} />
                        }
                    </div>
                </div>
                <button className="embla__prev absolute left-2 top-0 h-full flex items-center" onClick={scrollPrev}>
                    <ChevronLeft />
                </button>

                <button className="embla__next absolute right-2 top-0 h-full flex items-center" onClick={scrollNext}>
                    <ChevronRight />
                </button>
            </div>

        </div>
    )
}

function Slides({
    images,
    className,
    activeIndex }
    :
    {
        images: { url: string | null, productId: string | null }[],
        className?: string, activeIndex?: number
    }) {
    return (
        <>
            {
                images?.map((image, index) => {

                    if (!image.url) {
                        return
                    }
                    return (
                        <div className={twMerge("shrink-0 grow-0 basis-full relative h-full opacity-md", className)}
                            key={index} style={{
                                opacity: activeIndex === undefined || activeIndex === index ? "1" : "0.4"
                            }}>
                            <Image src={image.url} alt="productSlide" fill className="object-cover object-center" />
                        </div>
                    )
                })
            }
        </>
    )
}
