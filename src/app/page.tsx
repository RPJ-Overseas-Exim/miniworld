import HomeSection from "~/components/home/HomeSection";
import RangeSection from "~/components/range/Range_Section";
import Products from "~/components/products/Products";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-y-8 sm:gap-y-10">
        <HomeSection />
        <div className="flex flex-col gap-y-8 sm:gap-y-10">
            <RangeSection />
            <Products />
        </div>
    </main>
  );
}
