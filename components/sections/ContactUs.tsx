"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Building2, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const instituteAddress = "Jaypee Institute of Information Technology, Sector 128, Noida, Uttar Pradesh 201304";

export function ContactUs() {
  return (
    <section id="contact" className="py-12 md:py-14 lg:py-6 relative overflow-hidden border-t border-white/10 bg-[#04040b] min-h-[100svh] lg:min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,240,255,0.15),transparent_40%),radial-gradient(circle_at_88%_78%,rgba(255,77,0,0.14),transparent_42%),linear-gradient(160deg,rgba(0,0,0,0.6),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] opacity-15 pointer-events-none" />
      <motion.div
        className="absolute -left-24 top-24 h-52 w-52 rounded-full bg-[#00f0ff]/20 blur-[90px]"
        animate={{ y: [0, -20, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-20 h-56 w-56 rounded-full bg-[#ff4d00]/20 blur-[90px]"
        animate={{ y: [0, 18, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-3">
          <p className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-[#00f0ff]/80 uppercase mb-3">
            Navigation Grid Online
          </p>
          <div className="inline-flex flex-col items-center gap-2">
            <SectionHeading glowColor="cyan">CONTACT HQ</SectionHeading>
            <div className="h-[3px] w-40 rounded-full bg-[linear-gradient(90deg,#00f0ff_0%,#8dfbff_45%,#ff8a4b_100%)] shadow-[0_0_12px_rgba(0,240,255,0.55)]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch lg:min-h-[50vh]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Card className="h-full p-5 md:p-6 border-[#00f0ff]/35 bg-[linear-gradient(155deg,rgba(8,10,18,0.95),rgba(4,4,11,0.8))] shadow-[0_0_0_1px_rgba(0,240,255,0.12),0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-[#00ff66] shadow-[0_0_12px_rgba(0,255,102,0.9)]" />
              <div className="absolute right-10 top-6 h-3 w-3 rounded-full bg-[#ffea00] shadow-[0_0_12px_rgba(255,234,0,0.75)]" />

              <div className="inline-flex items-center gap-3 mb-5 border border-[#00f0ff]/40 bg-[#00f0ff]/12 px-4 py-2">
                <Building2 className="h-4 w-4 text-[#00f0ff]" />
                <span className="text-xs font-mono tracking-[0.2em] text-[#00f0ff] uppercase">Race Control Venue</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-orbitron tracking-[0.08em] text-white mb-3 uppercase leading-tight">
                Jaypee Institute of Information Technology
              </h3>

              <div className="mb-4 inline-flex flex-wrap gap-2">
                <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-white/15 text-white/70">Sector 128</span>
                <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-white/15 text-white/70">Noida</span>
                <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-white/15 text-white/70">Uttar Pradesh</span>
              </div>

              <div className="space-y-3 relative">
                <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-[#ff4d00]/0 via-[#ff4d00]/70 to-[#00ff66]/0" />

                <div className="flex items-start gap-4 pl-8 relative">
                  <MapPin className="h-5 w-5 text-[#ff4d00] mt-1 shrink-0 absolute left-0" />
                  <p className="text-white/85 leading-relaxed">{instituteAddress}</p>
                </div>

                <div className="flex items-start gap-4 pl-8 relative">
                  <Navigation className="h-5 w-5 text-[#00ff66] mt-1 shrink-0 absolute left-0" />
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Located in Sector 128, Noida, this campus hosts the Drone Wars arena with direct road connectivity and a high-energy race environment.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 justify-between">
                <span className="text-[10px] font-mono tracking-[0.28em] uppercase text-white/45">Coordinates: 28.545 N / 77.334 E</span>
                <a
                  href="https://maps.google.com/?q=Jaypee+Institute+of+Information+Technology+Sector+128+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono tracking-[0.15em] uppercase text-[#00f0ff] hover:text-white transition-colors border border-[#00f0ff]/35 px-4 py-2 bg-[#00f0ff]/8 hover:bg-[#00f0ff]/15"
                >
                  Open In Maps
                </a>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="h-full lg:min-h-[470px]"
          >
            <Card className="h-full p-2 md:p-3 border-[#ff4d00]/35 bg-[linear-gradient(160deg,rgba(18,9,7,0.82),rgba(6,7,14,0.82))] shadow-[0_0_0_1px_rgba(255,77,0,0.1),0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="relative h-[300px] md:h-[360px] lg:h-full overflow-hidden rounded-sm border border-white/15">
                <iframe
                  title="JIIT Sector 128 Noida Location Map"
                  src="https://www.google.com/maps?q=Jaypee+Institute+of+Information+Technology+Sector+128+Noida&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#00f0ff]/25" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(0,240,255,0.16),transparent_35%,transparent_70%,rgba(255,77,0,0.12))]" />
                <motion.div
                  className="pointer-events-none absolute left-6 top-6 h-4 w-4 rounded-full bg-[#ff4d00] shadow-[0_0_18px_rgba(255,77,0,0.85)]"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0.35, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="pointer-events-none absolute left-12 top-6 text-[10px] font-mono tracking-[0.2em] uppercase text-white/80 bg-black/40 px-2 py-1 border border-white/20">
                  Live Venue Map
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
            className="text-center mb-4"
          >
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -6 }}
            >
              <Card className="p-4 border-[#00f0ff]/35 bg-[linear-gradient(160deg,rgba(0,240,255,0.08),rgba(0,0,0,0.45))]">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00f0ff] mb-2">Coordinator</p>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-orbitron text-white whitespace-nowrap">Yasharth Singh</h3>
                    </div>
                  </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="p-4 border-[#ff4d00]/35 bg-[linear-gradient(160deg,rgba(255,77,0,0.08),rgba(0,0,0,0.45))]">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#ffb08a] mb-2">Coordinator</p>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-orbitron text-white whitespace-nowrap">Vaibhav Katariya</h3>
                    </div>
                  </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
