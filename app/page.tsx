import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutEvent } from "@/components/sections/AboutEvent";
import { EventsSection } from "@/components/sections/EventsSection";
import { FAQs } from "@/components/sections/FAQs";
import { Prizes } from "@/components/sections/Prizes";
import { RegistrationCTA } from "@/components/sections/RegistrationCTA";
import { Footer } from "@/components/sections/Footer";
import { HomeDeferredSections } from "@/components/sections/HomeDeferredSections";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { ContactUs } from "@/components/sections/ContactUs";
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