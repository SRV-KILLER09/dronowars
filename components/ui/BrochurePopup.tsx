"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BookOpen, CalendarDays, Mail, MapPin, Phone, Trophy, X } from "lucide-react";
import { events } from "@/lib/events";

export function BrochurePopup() {
  const [open, setOpen] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !compactMode;
  const featuredEvents = events.slice(0, 4);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px), (pointer: coarse)");
    const updateCompactMode = () => setCompactMode(mediaQuery.matches);

    updateCompactMode();
    mediaQuery.addEventListener("change", updateCompactMode);

    return () => mediaQuery.removeEventListener("change", updateCompactMode);
  }, []);

  useEffect(() => {
    const hasSeenKey = "dronowars-brochure-seen";
    let timer: number | null = null;
    let idleCallbackId: number | null = null;

    try {
      const hasSeen = window.localStorage.getItem(hasSeenKey) === "1";
      if (hasSeen) {
        return;
      }

      const openBrochure = () => {
        timer = window.setTimeout(() => {
          setOpen(true);
          window.localStorage.setItem(hasSeenKey, "1");
        }, compactMode ? 1600 : 700);
      };

      if (typeof window.requestIdleCallback === "function") {
        idleCallbackId = window.requestIdleCallback(openBrochure, { timeout: 2000 });
      } else {
        openBrochure();
      }

      return () => {
        if (timer !== null) {
          window.clearTimeout(timer);
        }

        if (idleCallbackId !== null && typeof window.cancelIdleCallback === "function") {
          window.cancelIdleCallback(idleCallbackId);
        }
      };
    } catch {
      return;
    }
  }, [compactMode]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open brochure"
        className={`fixed bottom-5 right-5 z-[95] inline-flex items-center gap-2 border border-[#00f0ff]/45 bg-[linear-gradient(145deg,rgba(0,240,255,0.2),rgba(8,12,20,0.95))] px-4 py-2.5 text-xs font-orbitron tracking-[0.18em] uppercase text-[#d7fcff] shadow-[0_0_24px_rgba(0,240,255,0.3)] transition-all hover:border-[#00f0ff]/70 hover:text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <BookOpen className="h-4 w-4" />
        Brochure
      </button>

      <AnimatePresence>
        {open && (
        <motion.div
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={shouldAnimate ? { opacity: 1 } : undefined}
          exit={shouldAnimate ? { opacity: 0 } : undefined}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(1,2,8,0.82)] backdrop-blur-sm px-4"
        >
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 24, scale: 0.975 } : false}
            animate={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : undefined}
            exit={shouldAnimate ? { opacity: 0, y: 16, scale: 0.98 } : undefined}
            transition={shouldAnimate ? { duration: 0.4, ease: "easeOut" } : undefined}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden border border-white/20 bg-[linear-gradient(155deg,rgba(4,8,18,0.96),rgba(3,4,12,0.94))] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
          >
            <button
              type="button"
              aria-label="Close brochure"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-black/55 text-white/80 hover:text-white hover:border-[#00f0ff]/50 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_28%,rgba(0,240,255,0.24),transparent_36%),radial-gradient(circle_at_88%_76%,rgba(255,77,0,0.23),transparent_38%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:38px_38px] opacity-20 pointer-events-none" />
            <div className="pointer-events-none absolute left-8 right-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/60 to-transparent" />

            <div className="relative z-10 p-6 md:p-10">
              <div className="flex flex-col gap-6 border-b border-white/10 pb-7">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full border border-white/25 bg-white/95 shrink-0 shadow-[0_0_18px_rgba(0,240,255,0.25)]">
                      <Image
                        src="/jiit-logo.png"
                        alt="Jaypee Institute of Information Technology"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-[#00f0ff] mb-1">DronoWar 2026</p>
                      <h1 className="text-3xl md:text-5xl font-orbitron font-black uppercase leading-[0.95] tracking-[0.12em] text-white">
                        Dronowar
                      </h1>
                      <p className="mt-1 text-[10px] md:text-xs font-mono tracking-[0.16em] uppercase text-white/65">
                        In association with
                      </p>
                      <p className="text-xs md:text-sm text-[#9ff8ff] font-mono tracking-[0.08em] uppercase">
                        Jaypee Institute of Information Technology
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={shouldAnimate ? { boxShadow: ["0 0 0 rgba(0,240,255,0)", "0 0 18px rgba(0,240,255,0.28)", "0 0 0 rgba(0,240,255,0)"] } : undefined}
                    transition={shouldAnimate ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" } : undefined}
                    className="self-start md:self-auto border border-[#00f0ff]/40 bg-[linear-gradient(140deg,rgba(0,240,255,0.2),rgba(0,240,255,0.06))] px-4 py-2 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[#bffbff] whitespace-nowrap"
                  >
                    May 2-3, 2026
                  </motion.div>
                </div>

                <div className="relative overflow-hidden border border-[#ff4d00]/35 bg-[linear-gradient(140deg,rgba(255,77,0,0.16),rgba(0,240,255,0.1))] p-4 md:p-6 text-center shadow-[0_0_26px_rgba(255,77,0,0.12)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,159,47,0.18),transparent_45%)]" />
                  <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb08a]/70 to-transparent" />
                  <div className="inline-flex items-center gap-2 border border-[#ffb08a]/30 bg-[#ffb08a]/10 px-3 py-1 text-[10px] md:text-xs font-mono tracking-[0.22em] uppercase text-[#ffd6c8] mb-3">
                    <Trophy className="h-4 w-4 text-[#ffb08a]" />
                    Total Prize Pool
                  </div>
                  <motion.p
                    initial={shouldAnimate ? { opacity: 0.4, scale: 0.96 } : false}
                    animate={
                      shouldAnimate
                        ? {
                            opacity: 1,
                            scale: [1, 1.03, 1],
                            filter: [
                              "drop-shadow(0 0 0px rgba(0,240,255,0))",
                              "drop-shadow(0 0 16px rgba(0,240,255,0.25))",
                              "drop-shadow(0 0 0px rgba(0,240,255,0))",
                            ],
                          }
                        : undefined
                    }
                    transition={shouldAnimate ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" } : undefined}
                    className="text-4xl md:text-7xl font-orbitron font-black tracking-[0.08em] text-transparent bg-clip-text bg-[linear-gradient(90deg,#ff4d00_0%,#ff9f2f_45%,#00f0ff_100%)]"
                  >
                    Rs. 8,00,000
                  </motion.p>
                  <p className="text-[10px] md:text-xs font-mono tracking-[0.18em] uppercase text-white/70 mt-4">
                    Aerial Racing. Precision. Prestige.
                  </p>
                  <div className="pointer-events-none absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative border border-[#00f0ff]/25 bg-[linear-gradient(165deg,rgba(0,240,255,0.08),rgba(0,0,0,0.2))] p-4 overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/70 to-transparent" />
                  <p className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#00f0ff] mb-3">Events</p>
                  <div className="space-y-2">
                    {featuredEvents.map((event) => (
                      <div key={event.slug} className="border border-white/15 bg-black/30 px-3 py-2 text-[11px] text-white/85 font-mono uppercase tracking-[0.12em]">
                        {event.title}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative border border-[#ff4d00]/25 bg-[linear-gradient(165deg,rgba(255,77,0,0.07),rgba(0,0,0,0.2))] p-4 overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff4d00]/70 to-transparent" />
                  <p className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#ffb08a] mb-3">Location</p>
                  <div className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                    <MapPin className="h-4 w-4 text-[#ff4d00] mt-1 shrink-0" />
                    <p>Jaypee Institute of Information Technology, Sector 128, Noida, Uttar Pradesh 201304</p>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 border border-white/15 bg-black/30 px-2.5 py-1.5 text-[10px] font-mono tracking-[0.16em] uppercase text-white/75">
                    <CalendarDays className="h-4 w-4 text-[#00f0ff]" />
                    May 2-3, 2026
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative border border-[#9ff8ff]/25 bg-[linear-gradient(165deg,rgba(0,240,255,0.05),rgba(255,77,0,0.08))] p-4 overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#9ff8ff]/70 to-transparent" />
                  <p className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#9ff8ff] mb-3">Contact Us</p>
                  <div className="space-y-3 text-sm text-white/85">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#00f0ff]" />
                      <span>contact@dronotics.in</span>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Jaypee+Institute+of+Information+Technology+Sector+128+Noida"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#9ff8ff]/35 bg-[#9ff8ff]/10 px-2.5 py-1.5 text-[10px] font-mono tracking-[0.14em] uppercase text-[#c9fdff] hover:text-white hover:bg-[#9ff8ff]/20 transition-colors"
                    >
                      <MapPin className="h-3 w-3" />
                      Open Venue Map
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-7">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScIvVbyRIGsxU_j0lq65Iq6iGgTuINPF_o8Ti9IqIUOnCwtaw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-[#00f0ff]/60 bg-[linear-gradient(150deg,rgba(0,240,255,0.28),rgba(0,240,255,0.12))] text-[#d8fcff] text-xs md:text-sm font-orbitron tracking-[0.2em] uppercase hover:bg-[linear-gradient(150deg,rgba(0,240,255,0.4),rgba(0,240,255,0.2))] hover:text-white transition-colors shadow-[0_0_22px_rgba(0,240,255,0.28)]"
                >
                  Register Now
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-8 py-3.5 border border-[#ff4d00]/55 bg-[linear-gradient(150deg,rgba(255,77,0,0.24),rgba(255,77,0,0.1))] text-[#ffe4da] text-xs md:text-sm font-orbitron tracking-[0.2em] uppercase hover:bg-[linear-gradient(150deg,rgba(255,77,0,0.34),rgba(255,77,0,0.16))] hover:text-white transition-colors shadow-[0_0_18px_rgba(255,77,0,0.2)]"
                >
                  Enter Arena
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
