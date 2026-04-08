"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AboutEvent = dynamic(() => import("@/components/sections/AboutEvent").then((m) => m.AboutEvent), {
  ssr: false,
});

const EventsSection = dynamic(() => import("@/components/sections/EventsSection").then((m) => m.EventsSection), {
  ssr: false,
});

const FAQs = dynamic(() => import("@/components/sections/FAQs").then((m) => m.FAQs), {
  ssr: false,
});

const Prizes = dynamic(() => import("@/components/sections/Prizes").then((m) => m.Prizes), {
  ssr: false,
});

const ContactUs = dynamic(() => import("@/components/sections/ContactUs").then((m) => m.ContactUs), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/sections/Footer").then((m) => m.Footer), {
  ssr: false,
});

export function HomeDeferredSections() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) {
    return null;
  }

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
