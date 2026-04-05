"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "IS THERE A QUALIFYING TO BE ABLE TO PARTICIPATE IN THE RACE?", a: "Details about qualifying will be updated soon." },
  { q: "IS THERE A LIMIT ON PRACTICE?", a: "Practice limits are defined in the rulebook." },
  { q: "ARE LEDS MANDATORY?", a: "Yes, addressable LEDs are required as per specifications." },
  { q: "WHAT IS THE RACE FORMAT?", a: "The race format includes qualifiers, semi-finals, and finals." },
  { q: "WHAT IS HOLESHOT?", a: "Holeshot is the first checkpoint in the track layout." },
  { q: "HOW DO I SET UP EVERYTHING FOR THE SPEC RACE IN BETAFLIGHT?", a: "We will provide a detailed Betaflight setup guide before the event." }
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(0,240,255,0.16),transparent_36%),radial-gradient(circle_at_82%_18%,rgba(255,138,75,0.14),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="container mx-auto px-4 z-10 relative max-w-5xl">
        <div className="flex justify-center mb-4">
          <SectionHeading glowColor="primary">FAQs</SectionHeading>
        </div>

        <p className="mx-auto mb-12 max-w-2xl text-center text-sm md:text-base text-white/65 font-mono tracking-wide">
          Everything you need before entering the arena. Expand each protocol for race-ready details.
        </p>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                openIndex === idx
                  ? "border-[#00f0ff]/45 bg-[linear-gradient(145deg,rgba(0,240,255,0.12),rgba(255,138,75,0.08),rgba(7,10,18,0.88))] shadow-[0_14px_34px_rgba(0,0,0,0.35)]"
                  : "border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.02),rgba(5,8,14,0.7))] hover:border-[#00f0ff]/35"
              }`}
            >
              <button 
                className="w-full px-6 py-5 md:px-7 md:py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-4">
                  <span className={`inline-flex h-7 min-w-7 items-center justify-center rounded-md border px-2 font-mono text-[11px] transition-colors ${openIndex === idx ? "border-[#00f0ff]/45 bg-[#00f0ff]/15 text-[#c7fbff]" : "border-white/15 bg-white/5 text-[#00f0ff]/60"}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={`font-orbitron text-sm md:text-base tracking-[0.12em] uppercase pr-8 transition-colors ${openIndex === idx ? "text-white" : "text-white/85 group-hover:text-white"}`}>
                    {faq.q}
                  </span>
                </div>
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${openIndex === idx ? "border-[#00f0ff]/45 bg-[#00f0ff]/15" : "border-white/15 bg-white/5"}`}>
                  <ChevronDown className={`flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#00f0ff]' : 'text-[#00f0ff]/55'}`} />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="relative mx-6 md:mx-7 mb-5 overflow-hidden rounded-xl border border-[#00f0ff]/20 bg-[linear-gradient(135deg,rgba(0,240,255,0.12),rgba(255,138,75,0.08),rgba(3,6,12,0.88))] px-5 py-4 text-sm leading-relaxed shadow-[0_8px_22px_rgba(0,0,0,0.3)]">
                      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,#00f0ff_0%,#ff9f66_100%)]" />
                      <p className="pl-3 font-mono text-white/90 tracking-[0.02em]">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
