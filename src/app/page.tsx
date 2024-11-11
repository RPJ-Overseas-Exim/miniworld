import TopNav from "~/components/ui/TopNav";
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="">
        <TopNav />
        <div className="relative">
            {/* background image */}
            <Image
                src="/images/hero-img.svg"
                alt="hero image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
            />
            
        </div>
    </main>
  );
}
