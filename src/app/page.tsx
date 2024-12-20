import React from "react"
import HeroSection from "~/components/home_page/hero/Hero_Section";
import RangeSection from "~/components/home_page/range/Range_Section";
import ProductSection from "~/components/home_page/products/Product_Section";
import SliderSection from "~/components/home_page/slider/Slider_Section"

export default async function HomePage() {

  return (
    <main className="flex flex-col">
        <HeroSection />
        <div className="home-gradient z-[4]">
            <RangeSection />
            <div className="flex flex-col gap-y-16 ">
                <ProductSection />
                <SliderSection />
            </div>
        </div>
    </main>
  );
}
