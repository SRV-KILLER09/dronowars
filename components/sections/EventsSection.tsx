  "use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { events, Event } from "@/lib/events";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MoreVertical, Circle, X, FileText } from "lucide-react";
import { EventTimeline } from "./EventTimeline";

const categories = ["ALL", "COMPETITION", "EXHIBITION"] as const;

function EventPreviewCard({
  event,
  onSelect,
  shouldAnimate,
  index,
}: {
  event: Event;
  onSelect: (event: Event) => void;
  shouldAnimate: boolean;
  index: number;
}) {
  const [imageSrc, setImageSrc] = useState(event.image);
  const blurb = event.description.length > 74 ? `${event.description.slice(0, 74)}...` : event.description;

  useEffect(() => {
    setImageSrc(event.image);
  }, [event.image]);

  return (
    <motion.article
      layout={shouldAnimate}
      initial={shouldAnimate ? { opacity: 0, y: 30, scale: 0.98 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={shouldAnimate ? { duration: 0.48, delay: index * 0.08 } : { duration: 0 }}
      className="group relative w-full aspect-[3/4] min-h-[440px] overflow-hidden rounded-[14px] border border-white/15 bg-[linear-gradient(155deg,#111421_0%,#090a11_48%,#050608_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.55)] cursor-pointer"
      onClick={() => onSelect(event)}
    >
      {event.eligibilityNote && (
        <div className="pointer-events-none absolute left-0 top-0 z-20 flex h-11 w-[270px] origin-top-left -translate-x-14 translate-y-6 -rotate-45 items-center justify-center overflow-hidden border border-[#ffe08e]/80 bg-[linear-gradient(120deg,rgba(255,208,116,0.98),rgba(255,153,82,0.96)_58%,rgba(255,120,72,0.95))] px-3 text-center font-orbitron text-[10px] font-black uppercase leading-none tracking-[0.16em] text-[#2a1308] shadow-[0_14px_34px_rgba(255,168,74,0.45),0_0_0_1px_rgba(255,238,183,0.45)_inset]">
          <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)] opacity-40" />
          <span className="relative whitespace-nowrap">JIIT NOIDA STUDENTS ONLY</span>
        </div>
      )}

      <Image
        src={imageSrc}
        alt={event.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => {
          if (imageSrc !== "/event-obstacle-navigation.jpg") {
            setImageSrc("/event-obstacle-navigation.jpg");
          }
        }}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.18)_30%,rgba(0,0,0,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.16),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(255,255,255,0.05))]" />

      <div className="absolute left-4 top-4 z-10 inline-flex items-center border border-white/25 bg-black/30 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/85">
        {event.category}
      </div>

      <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] font-mono tracking-[0.35em] uppercase text-white/50">
        {event.category}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
        {event.eligibilityNote && (
          <div className="mb-3 inline-flex items-center gap-2 border border-[#ffd27a]/60 bg-[linear-gradient(120deg,rgba(255,170,60,0.22),rgba(255,210,122,0.12))] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#ffe0ad]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffb347]" />
            {event.eligibilityNote}
          </div>
        )}

        <h3 className="max-w-[90%] font-orbitron text-[1.55rem] leading-[1.05] font-black uppercase tracking-[0.045em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] md:text-[1.72rem]">
          {event.title}
        </h3>

        <p className="mt-3 max-w-[92%] font-mono text-[10px] uppercase leading-[1.55] tracking-[0.16em] text-white/70 md:text-[11px]">
          {blurb}
        </p>

        <div className="mt-4 flex items-center gap-3">
          {event.rulebookPdf ? (
            <a
              href={encodeURI(event.rulebookPdf)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(eventClick) => eventClick.stopPropagation()}
              className="inline-flex items-center gap-2 border border-white/20 bg-black/35 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/85 transition-colors duration-300 group-hover:bg-white/10"
              aria-label={`Open ${event.title} rulebook PDF`}
            >
              <FileText size={12} />
              Rulebook
            </a>
          ) : (
            <button
              type="button"
              className="border border-white/20 bg-black/35 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/85 transition-colors duration-300 group-hover:bg-white/10"
              aria-label={`View ${event.title} rulebook and details`}
            >
              Rulebook
            </button>
          )}
          <div className="h-px w-10 bg-white/25" />
        </div>

        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
          Reveal by 1st April, 2026
        </p>
      </div>
    </motion.article>
  );
}

export function EventsSection() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("ALL");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [compactMode, setCompactMode] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !compactMode && !prefersReducedMotion;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px), (pointer: coarse)");
    const updateCompactMode = () => setCompactMode(mediaQuery.matches);

    updateCompactMode();
    mediaQuery.addEventListener("change", updateCompactMode);

    return () => mediaQuery.removeEventListener("change", updateCompactMode);
  }, []);

  const filteredEvents = events.filter(
    (event) => activeCategory === "ALL" || event.category === activeCategory
  );

  return (
    <section id="events" className="pt-32 md:pt-40 pb-24 relative overflow-hidden bg-black scroll-mt-32">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Header matching image */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 mt-4 md:mt-8">
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

        {/* Grid matching provided visual reference */}
        <div className="flex flex-wrap justify-center gap-7 lg:gap-6 mb-6">
          {filteredEvents.slice(0, 3).map((event, index) => (
            <div key={event.slug} className="w-full md:w-[calc(50%-0.875rem)] lg:w-[calc(33.333%-1rem)]">
              <EventPreviewCard
                event={event}
                index={index}
                onSelect={setSelectedEvent}
                shouldAnimate={shouldAnimate}
              />
            </div>
          ))}
        </div>

        {/* Bottom rows for remaining cards */}
        <div className="mx-auto flex flex-wrap justify-center max-w-[1240px] gap-7 md:gap-8">
          {filteredEvents.slice(3).map((event, index) => (
            <div key={event.slug} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
              <EventPreviewCard
                event={event}
                index={index + 3}
                onSelect={setSelectedEvent}
                shouldAnimate={shouldAnimate}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Event Modal Overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 50 } : false}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            exit={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
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
                {selectedEvent.eligibilityNote && (
                  <div className="inline-flex items-center gap-2 border border-[#ffd27a]/60 bg-[linear-gradient(120deg,rgba(255,170,60,0.22),rgba(255,210,122,0.12))] px-3 py-1 text-[10px] md:text-xs font-mono uppercase tracking-[0.16em] text-[#ffe0ad]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ffb347]" />
                    {selectedEvent.eligibilityNote}
                  </div>
                )}
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
                className="w-full flex flex-col md:flex-row gap-8 md:gap-10 mt-auto"
              >
                {/* Rulebook Square Box with Preview */}
                <div className="group relative flex-1 min-w-[260px] max-w-[370px] aspect-square rounded-2xl overflow-hidden border border-[#ff4d00]/30 bg-[linear-gradient(145deg,rgba(255,77,0,0.10),rgba(0,240,255,0.08),rgba(10,12,20,0.96))] p-5 flex flex-col shadow-[0_8px_32px_rgba(255,77,0,0.10)] items-center justify-center">
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 border border-[#ff4d00]/40 bg-[linear-gradient(125deg,rgba(255,77,0,0.18),rgba(255,77,0,0.08))] px-3 py-1 text-[10px] font-mono tracking-[0.18em] uppercase text-[#ffd4c0]">
                    <span className="font-bold text-[#ff4d00]">01</span>
                    Rulebook
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,77,0,0.10),transparent_38%),radial-gradient(circle_at_10%_90%,rgba(0,240,255,0.07),transparent_40%)]" />
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    {selectedEvent.rulebookPdf ? (
                      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-y-auto rounded bg-black/30 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 shadow-[0_0_16px_2px_rgba(255,77,0,0.10)]">
                        <iframe
                          src={selectedEvent.rulebookPdf + '#toolbar=0&navpanes=0&scrollbar=0'}
                          title="Rulebook Preview"
                          className="w-full h-full border-none rounded-xl bg-black/60 shadow-lg pointer-events-none"
                          style={{ minHeight: '192px', maxHeight: '320px' }}
                          tabIndex={-1}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center text-white/70 font-mono text-sm p-6">
                        <FileText size={32} className="mx-auto mb-3 text-[#ff4d00]" />
                        Rulebook coming soon!
                      </div>
                    )}
                    {selectedEvent.rulebookPdf && (
                      <div className="w-full flex justify-center">
                        <button
                          className="mt-1 px-4 py-1.5 rounded bg-[#ff4d00] text-white font-mono text-xs uppercase tracking-widest shadow hover:bg-[#ff7a3d] transition-colors"
                          onClick={() => {
                            window.location.href = `/rulebook-viewer?pdf=${encodeURIComponent(selectedEvent.rulebookPdf)}&title=${encodeURIComponent(selectedEvent.title)}`;
                          }}
                        >
                          Expand PDF
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Square Box */}
                <div className="group relative flex-1 min-w-[260px] max-w-[370px] aspect-square rounded-2xl overflow-hidden border border-[#00f0ff]/20 bg-[linear-gradient(145deg,rgba(0,240,255,0.08),rgba(255,77,0,0.06),rgba(8,10,18,0.95))] p-5 flex flex-col shadow-[0_8px_32px_rgba(0,240,255,0.10)] items-center justify-center">
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 border border-[#00f0ff]/40 bg-[linear-gradient(125deg,rgba(0,240,255,0.24),rgba(0,240,255,0.1))] px-3 py-1 text-[10px] font-mono tracking-[0.18em] uppercase text-[#c8fcff]">
                    <span className="font-bold text-[#00f0ff]">02</span>
                    Mission Timeline
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(0,240,255,0.15),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(255,77,0,0.12),transparent_45%)]" />
                  <div className="w-full h-full flex flex-col items-center justify-center mt-6">
                    <div className="h-full w-full rounded-2xl border border-white/15 bg-[linear-gradient(145deg,rgba(12,16,28,0.72),rgba(6,8,16,0.72))] p-2 md:p-3 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] overflow-y-auto">
                      <EventTimeline timeline={selectedEvent.timeline} />
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