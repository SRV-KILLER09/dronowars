"use client";

import { motion, AnimatePresence } from "framer-motion";
import { events, Event } from "@/lib/events";
import { useState } from "react";
import { MoreVertical, Circle, X } from "lucide-react";
import { EventTimeline } from "./EventTimeline";

const categories = ["ALL", "COMPETITION", "EXHIBITION"] as const;

export function EventsSection() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("ALL");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = events.filter(
    (event) => activeCategory === "ALL" || event.category === activeCategory
  );

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Header matching image */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <Circle size={48} className="text-white/20" />
              <div className="absolute w-2 h-2 bg-orange-500 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white tracking-widest uppercase">
              ARENAS OF EXCELLENCE
            </h2>
          </div>
          <div className="flex-1 h-[1px] bg-white/10 hidden md:block" />
        </div>

        {/* Filters matching image */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-8 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 group ${
                activeCategory === cat ? "text-black" : "text-white/50 hover:text-white"
              }`}
            >
              <div 
                className={`absolute inset-0 skew-x-[-20deg] border transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-[#C4A484] border-[#C4A484]" 
                    : "bg-white/5 border-white/10 group-hover:bg-white/10"
                }`}
              />
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Grid matching image card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.slice(0, 3).map((event, index) => (
              <motion.div
                key={event.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/5 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="block w-full h-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  {/* Vertical Label */}
                  <div className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center border-l border-white/10 bg-black/40 backdrop-blur-sm">
                    <span className="rotate-90 origin-center whitespace-nowrap font-mono text-[10px] tracking-[0.5em] text-white/40 uppercase">
                      {event.category}
                    </span>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 flex items-center gap-4">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[9px] tracking-widest text-white uppercase">
                      {event.category}
                    </div>
                    <MoreVertical size={16} className="text-white/40" />
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-orbitron font-black text-white leading-tight tracking-widest uppercase group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="mt-5 flex items-start gap-4">
                      <div className="w-8 h-[2px] bg-white/20 mt-2 shrink-0" />
                      <p className="text-xs font-mono text-white/60 uppercase tracking-[0.15em] leading-loose">
                        {event.description.length > 80 ? event.description.substring(0, 80) + "..." : event.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Row Centered */}
        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.slice(3).map((event, index) => (
              <motion.div
                key={event.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="group relative aspect-[4/5] w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/5 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="block w-full h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  <div className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center border-l border-white/10 bg-black/40 backdrop-blur-sm">
                    <span className="rotate-90 origin-center whitespace-nowrap font-mono text-[10px] tracking-[0.5em] text-white/40 uppercase">
                      {event.category}
                    </span>
                  </div>

                  <div className="absolute top-6 left-6 flex items-center gap-4">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[9px] tracking-widest text-white uppercase">
                      {event.category}
                    </div>
                    <MoreVertical size={16} className="text-white/40" />
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 text-left">
                    <h3 className="text-2xl font-orbitron font-black text-white leading-tight tracking-widest uppercase group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="mt-5 flex items-start gap-4">
                      <div className="w-8 h-[2px] bg-white/20 mt-2 shrink-0" />
                      <p className="text-xs font-mono text-white/60 uppercase tracking-[0.15em] leading-loose">
                        {event.description.length > 80 ? event.description.substring(0, 80) + "..." : event.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Event Modal Overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[100] bg-[#0c0c0c] overflow-y-auto"
          >
            {/* Fixed Close Button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event popup"
              title="Close"
              className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>

            <div className="min-h-screen py-24 px-6 md:px-16 lg:px-32 max-w-screen-2xl mx-auto flex flex-col">
              
              {/* Header Top matching reference */}
              <div className="mb-12 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 border border-[#00f0ff]/35 bg-[linear-gradient(120deg,rgba(0,240,255,0.12),rgba(255,77,0,0.1))] px-3 py-1 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#c8fcff] shadow-[0_0_20px_rgba(0,240,255,0.14)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                  Pilot Briefing
                </div>
                <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono text-white/45 uppercase tracking-[0.2em]">
                  <span>Competitions</span>
                  <span>/</span>
                  <span>{selectedEvent.category}</span>
                  <span>/</span>
                  <span className="text-white">{selectedEvent.title}</span>
                </div>
              </div>

              {/* Huge Title */}
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-transparent bg-clip-text bg-[linear-gradient(135deg,#ffffff_0%,#c9fbff_35%,#ffcfb8_75%,#ffffff_100%)] tracking-tight mb-5 leading-none drop-shadow-[0_0_22px_rgba(0,240,255,0.16)]"
              >
                {selectedEvent.title.toUpperCase()}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scaleX: 0.96 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.16, duration: 0.35 }}
                className="mb-12 h-px w-full max-w-3xl bg-gradient-to-r from-[#00f0ff]/70 via-[#ff9f6a]/65 to-transparent"
              />

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative max-w-5xl mb-24 overflow-hidden border border-white/15 bg-[linear-gradient(145deg,rgba(0,240,255,0.08),rgba(255,77,0,0.06),rgba(10,12,20,0.86))] px-6 py-6 md:px-8 md:py-7 shadow-[0_16px_45px_rgba(0,0,0,0.45)]"
              >
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff9f6a]/70 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
                <div className="relative z-10 text-base md:text-xl font-sans leading-relaxed tracking-wide">
                  {(selectedEvent.longDescription ?? selectedEvent.description)
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={`${selectedEvent.slug}-para-${index}`}
                        className={`mb-5 last:mb-0 ${index === 0 ? "text-[#e5feff]" : "text-[#ffd8c5]"}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </motion.div>

              {/* Bottom Cards Row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full mt-auto"
              >
                {/* Visual Card */}
                <div className="group relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_20px_55px_rgba(0,0,0,0.45)]">
                  <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 border border-[#ff7a3d]/45 bg-[linear-gradient(125deg,rgba(255,122,61,0.32),rgba(255,122,61,0.12))] px-3 py-1 text-[10px] font-mono tracking-[0.18em] uppercase text-[#ffd4c0]">
                    <span className="font-bold text-[#ff5f1f]">01</span>
                    Focus Matrix
                  </div>
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${selectedEvent.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,240,255,0.15),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(255,77,0,0.18),transparent_38%)]" />
                  <div className="absolute flex flex-col justify-end p-8 inset-0 z-10">
                    <h3 className="font-mono text-xs md:text-sm tracking-[0.28em] text-[#c7f9ff] uppercase mb-3">Flight Skills Tested</h3>
                    <ul className="space-y-2 font-sans text-sm md:text-[1.05rem] text-white/95 font-light">
                      {selectedEvent.skillsTested.slice(0, 3).map((skill, i) => (
                        <li key={i} className="flex items-center gap-3 rounded-lg bg-black/30 px-3 py-2 backdrop-blur-sm border border-white/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a2a] shadow-[0_0_10px_rgba(255,106,42,0.8)]" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/70 to-transparent" />
                </div>

                {/* Details Card */}
                <div className="group relative h-full min-h-[330px] rounded-3xl overflow-hidden border border-[#00f0ff]/20 bg-[linear-gradient(145deg,rgba(0,240,255,0.08),rgba(255,77,0,0.06),rgba(8,10,18,0.95))] p-6 md:p-8 flex flex-col shadow-[0_20px_55px_rgba(0,0,0,0.4)]">
                  <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 border border-[#00f0ff]/40 bg-[linear-gradient(125deg,rgba(0,240,255,0.24),rgba(0,240,255,0.1))] px-3 py-1 text-[10px] font-mono tracking-[0.18em] uppercase text-[#c8fcff]">
                    <span className="font-bold text-[#00f0ff]">02</span>
                    Mission Intel
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(0,240,255,0.15),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(255,77,0,0.12),transparent_45%)]" />
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/70 to-transparent" />
                  
                  <div className="mt-9 flex-1 grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-6 lg:gap-8 items-stretch">
                    {/* Prize Column */}
                      <div className="flex flex-col justify-center">
                       <h3 className="font-mono text-xs tracking-[0.24em] text-[#ffe0cf] uppercase mb-5">Prize Pool</h3>
                        <div className="w-full max-w-full whitespace-nowrap text-[clamp(2rem,5.4vw,3.2rem)] leading-none font-light text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#84fff0_45%,#ffab7b_100%)] mb-3 tracking-normal drop-shadow-[0_0_18px_rgba(0,240,255,0.18)]">
                         ₹{selectedEvent.prizePool.total}
                       </div>
                       <p className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/25 px-3 py-2 font-mono text-[10px] text-white/80 uppercase tracking-[0.16em]">
                         <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                         Total Prize Pool
                       </p>
                    </div>
                    
                    {/* Timeline Column */}
                    <div className="flex flex-col justify-center">
                      <div className="h-full rounded-2xl border border-white/15 bg-[linear-gradient(145deg,rgba(12,16,28,0.72),rgba(6,8,16,0.72))] p-3 md:p-4 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                         <EventTimeline timeline={selectedEvent.timeline} />
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
