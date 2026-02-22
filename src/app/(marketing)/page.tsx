import { HomeCta } from "@/components/marketing/home/home-cta";
import { HomeHero } from "@/components/marketing/home/home-hero";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <HomeHero />

      <HomeCta />
    </div>
  );
}
