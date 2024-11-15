import React from "react"
import HeroSection from "~/components/hero/Hero_Section";
import RangeSection from "~/components/range/Range_Section";
import ProductSection from "~/components/products/Product_Section";
import SliderSection from "~/components/slider/Slider_Section"

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
