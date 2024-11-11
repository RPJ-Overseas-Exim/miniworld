import HomeCard from "~/components/home/HomeCard";

export default function HomePage() {
  return (
    <main className="">
        <div className="relative flex items-center justify-center md:justify-end min-h-[400px] md:h-[450px] lg:h-[600px] bg-[url('/images/hero-img.svg')] bg-cover bg-center">
            <HomeCard />
        </div>
    </main>
  );
}
