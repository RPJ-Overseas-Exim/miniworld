import HomeCard from "~/components/home/HomeCard";
import RangeSection from "~/components/range/Range_Section";
import Products from "~/components/products/Products";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-y-8 sm:gap-y-10">
        <section className="relative flex items-center justify-end min-h-[400px] md:h-[450px] lg:h-[600px] bg-[url('/images/hero-img.svg')] bg-cover bg-center">
            <HomeCard />
        </section>
        <div className="flex flex-col gap-y-8 sm:gap-y-10">
            <RangeSection />
            <Products />
        </div>
    </main>
  );
}
