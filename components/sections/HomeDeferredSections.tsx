"use client";

import dynamic from "next/dynamic";

const AboutEvent = dynamic(() => import("@/components/sections/AboutEvent").then((m) => m.AboutEvent));

const EventsSection = dynamic(() => import("@/components/sections/EventsSection").then((m) => m.EventsSection));

const FAQs = dynamic(() => import("@/components/sections/FAQs").then((m) => m.FAQs));

const Prizes = dynamic(() => import("@/components/sections/Prizes").then((m) => m.Prizes));

const ContactUs = dynamic(() => import("@/components/sections/ContactUs").then((m) => m.ContactUs));

const Footer = dynamic(() => import("@/components/sections/Footer").then((m) => m.Footer));

export function HomeDeferredSections() {
  return (
    <>
      <AboutEvent />
      <EventsSection />
      <FAQs />
      <Prizes />
      <ContactUs />
      <Footer />
    </>
  );
}
