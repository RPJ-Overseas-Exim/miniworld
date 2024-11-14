import HeroSection from "~/components/hero/HeroSection";
import RangeSection from "~/components/range/Range_Section";
import ProductSection from "~/components/products/Products";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-y-8 sm:gap-y-10">
        <HeroSection />
        <RangeSection />
        <ProductSection />
    </main>
  );
}
