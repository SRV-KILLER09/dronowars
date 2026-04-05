"use client";

import { motion, AnimatePresence } from "framer-motion";
import { events, Event } from "@/lib/events";
import { useState } from "react";
import { MoreVertical, Circle, X } from "lucide-react";

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
              className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>

            <div className="min-h-screen py-24 px-6 md:px-16 lg:px-32 max-w-screen-2xl mx-auto flex flex-col">
              
              {/* Header Top matching reference */}
              <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-12">
                <span>Competitions</span>
                <span>/</span>
                <span>{selectedEvent.category}</span>
                <span>/</span>
                <span className="text-white">{selectedEvent.title}</span>
              </div>

              {/* Huge Title */}
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tighter mb-12 leading-none"
              >
                {selectedEvent.title.toUpperCase()}
              </motion.h2>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-white/60 font-sans font-light leading-relaxed tracking-wide max-w-4xl mb-24"
              >
                {selectedEvent.description}
              </motion.p>

              {/* Bottom Cards Row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full mt-auto"
              >
                {/* Visual Card */}
                <div className="group relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 bg-[#111]">
                  <div className="absolute top-6 left-6 z-10 font-mono text-primary/80 font-bold tracking-widest text-sm">
                    01
                  </div>
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${selectedEvent.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute flex flex-col justify-end p-8 inset-0 z-10">
                    <h3 className="font-mono text-sm tracking-[0.2em] text-white/50 uppercase mb-2">Focus</h3>
                    <ul className="space-y-1 font-sans text-sm md:text-base text-white/90 font-light">
                      {selectedEvent.skillsTested.slice(0, 3).map((skill, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Details Card */}
                <div className="group relative h-full min-h-[350px] rounded-2xl overflow-hidden border border-white/5 bg-[#111] p-8 md:p-10 flex flex-col">
                  <div className="absolute top-6 left-6 z-10 font-mono text-[#00f0ff]/80 font-bold tracking-widest text-sm">
                    02
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent pointer-events-none" />
                  
                  <div className="mt-8 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    {/* Prize Column */}
                    <div>
                       <h3 className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase mb-6">Prize Pool</h3>
                       <div className="text-3xl font-light text-[#00f0ff] mb-6 tracking-tight">
                         ₹{selectedEvent.prizePool.total}
                       </div>
                       <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                         Technical excellence and mission success are rewarded according to championship protocols.
                       </p>
                    </div>
                    
                    {/* Timeline Column */}
                    <div>
                      <h3 className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase mb-6">Timeline</h3>
                      <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-md">
                        <span className="font-orbitron font-bold text-primary tracking-[0.3em] text-sm">TBD</span>
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
