import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HomeDeferredSections } from "@/components/sections/HomeDeferredSections";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { BrochurePopup } from "@/components/ui/BrochurePopup";
import { CacheCleanButton } from "@/components/ui/CacheCleanButton";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BrochurePopup />
      <CacheCleanButton />
      <BackgroundGrid />
      <Navbar />
      <Hero />
      <HomeDeferredSections />
    </main>
  );
}
