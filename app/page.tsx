import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutEvent } from "@/components/sections/AboutEvent";
import { EventsSection } from "@/components/sections/EventsSection";
import { Specifications } from "@/components/sections/Specifications";
import { FAQs } from "@/components/sections/FAQs";
import { Prizes } from "@/components/sections/Prizes";
import { RegistrationCTA } from "@/components/sections/RegistrationCTA";
import { Footer } from "@/components/sections/Footer";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { ContactUs } from "@/components/sections/ContactUs";
import { BrochurePopup } from "@/components/ui/BrochurePopup";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BrochurePopup />
      <BackgroundGrid />
      <Navbar />
      <Hero />
      <AboutEvent />
      <EventsSection />
      <Specifications />
      <FAQs />
      <Prizes />
      <ContactUs />
      <Footer />
    </main>
  );
}
