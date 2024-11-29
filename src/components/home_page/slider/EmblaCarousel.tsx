import React from 'react'
import Image from "next/image"
import { type EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import SlideDetails from './Slider_details'

type PropType = {
    slides: string[];
    options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((link, index) => (
                        <div className="embla__slide" key={index}>
                            <div className={selectedIndex === index ? "embla__slide__container__active" : "embla__slide__container"}>
                                <Image
                                    src={link}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-center object-cover"
                                />

                                <div className={selectedIndex === index
                                    ? "absolute top-0 left-0 w-full h-full"
                                    : "hidden"
                                }>
                                    <div className="w-full h-full flex flex-col items-center justify-end py-10">
                                        <SlideDetails />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>


            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel

