import { poppinsRegular } from "public/fonts/fonts"
import React from "react"
import AboutBottomBannerSection from "~/components/about_page/bottom_banner"
import AboutImageSection from "~/components/about_page/Image_section"
import AboutMiddleSection from "~/components/about_page/middle_section"

export default function AboutPage(){
    return (
        <div>
            <AboutImageSection />

            <h2 className={`${poppinsRegular.className} font-bold text-4xl text-black text-center pt-10`}>
                About Us
            </h2>

            <div className="m-auto flex flex-col lg:flex-row py-10">
                <div className="w-full flex items-center justify-center">
                    <AboutMiddleSection />
                </div>

                <div className="w-[90%] m-auto text-foreground-muted">
                    <h3 className={`${poppinsRegular.className} text-lg text-center md:text-left flex flex-col gap-y-2`}>
                        <span>{"Welcome to Miniworld, where the world of miniatures comes to life! We are a passionate team dedicated to bringing you the finest selection of handcrafted, high-quality miniatures for every collector, hobbyist, and enthusiast. Whether you're building your dream dollhouse, adding character to a model railroad, or creating a tiny world of your own, we have something special for you."}</span>

                        <span>{"Our shop offers a wide range of meticulously crafted miniatures, including dollhouses, furniture, figurines, accessories, and unique decorative items. Each piece is carefully selected for its craftsmanship, creativity, and attention to detail, ensuring that it meets the highest standards of quality and realism."}</span>

                        <span>{"At Miniworld, we believe that the magic is in the details. That’s why we strive to provide our customers with an exceptional shopping experience, offering not only a diverse collection of miniatures but also personalized advice and guidance to help you find exactly what you’re looking for."}</span>

                        <span>{"Whether you’re a seasoned collector or just starting your miniature journey, we’re here to inspire and support your passion for the miniature world. Thank you for choosing us, and we hope you enjoy exploring our collection as much as we enjoy curating it!"}</span>
                    </h3>
                </div>
            </div>

            <AboutBottomBannerSection />
        </div>
    )
}
