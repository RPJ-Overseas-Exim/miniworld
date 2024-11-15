import React from "react"
import HeroSection from "~/components/home_page/hero/Hero_Section";
import RangeSection from "~/components/home_page/range/Range_Section";
import ProductSection from "~/components/home_page/products/Product_Section";
import SliderSection from "~/components/home_page/slider/Slider_Section"

export default function HomePage() {
  return (
    <main className="flex flex-col">
        <HeroSection />
        <RangeSection />
        <div className="flex flex-col gap-y-8 sm:gap-y-10 bg-gradient-to-b from-blue-400 via-white to-pink-900 pt-10">
            <ProductSection />
            <SliderSection />
        </div>
    </main>
  );
}
