"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [compactMode, setCompactMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px), (pointer: coarse)");
    const updateCompactMode = () => setCompactMode(mediaQuery.matches);

    updateCompactMode();
    mediaQuery.addEventListener("change", updateCompactMode);

    return () => mediaQuery.removeEventListener("change", updateCompactMode);
  }, []);

  const allowLoopAnimations = !prefersReducedMotion && !compactMode;

  return (
    <section className="relative h-screen md:h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Flight Protocol Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 md:mt-24 mb-1 md:mb-2 px-4 md:px-6 py-1.5 md:py-2 border border-white/10 bg-black/40 text-[8px] md:text-[10px] font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase text-white/70 flex items-center gap-2 md:gap-3 hover:border-primary/50 transition-colors"
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={allowLoopAnimations ? { opacity: [0.2, 1, 0.2] } : undefined}
                  transition={allowLoopAnimations ? { duration: 1.5, repeat: Infinity, delay: i * 0.2 } : undefined}
                  className="w-1 h-1 bg-primary rounded-full"
                />
              ))}
            </div>
            Flight Protocol Active // 2026
          </motion.div>

          {/* Main Title */}
          <div className="relative mb-4 md:mb-6 text-center w-full px-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-black text-white tracking-widest leading-tight"
            >
              <span className="relative inline-block whitespace-nowrap">
                DRON-O-WAR 1.0
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 h-0.5 md:h-1 bg-gradient-to-r from-primary to-accent"
                />
              </span>
            </motion.h1>
          </div>

          {/* Premium Event Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-2 md:gap-3 mb-3 md:mb-4"
          >
            <div className="w-[1px] h-4 md:h-6 bg-gradient-to-b from-transparent via-primary to-transparent" />

            {/* Event Title */}
            <div className="text-center">
              <p className="text-[9px] md:text-xs font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary mb-1 md:mb-2">
                Official Event
              </p>
              <p className="text-lg md:text-2xl font-orbitron font-bold text-white mb-1 tracking-wider">
                National Drone Championship
              </p>
              <p className="text-white/70 font-mono text-[9px] md:text-xs uppercase tracking-[0.15em]">
                Jaypee Institute of Information Technology Sector-128, Noida
              </p>
            </div>

            {/* Date & Time Badge */}
            <motion.div
              animate={
                allowLoopAnimations
                  ? { boxShadow: ["0 0 0 rgba(0,240,255,0)", "0 0 20px rgba(0,240,255,0.4)", "0 0 0 rgba(0,240,255,0)"] }
                  : undefined
              }
              transition={allowLoopAnimations ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : undefined}
              className="border border-primary/50 bg-gradient-to-r from-primary/10 to-accent/10 px-6 md:px-8 py-2 md:py-3 text-center backdrop-blur-sm"
            >
              <p className="text-[9px] md:text-[10px] font-mono tracking-[0.25em] uppercase text-white/60 mb-0.5">Event Date</p>
              <p className="text-xl md:text-2xl font-orbitron font-black text-primary tracking-wide">
                May 2-3, 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="relative"
            >
              <p className="text-[9px] md:text-[10px] font-mono tracking-[0.25em] uppercase text-white/55 mb-1">Prize Pool</p>
              <motion.p
                animate={
                  allowLoopAnimations
                    ? { textShadow: ["0 0 0 rgba(0,240,255,0)", "0 0 28px rgba(0,240,255,0.45)", "0 0 0 rgba(0,240,255,0)"] }
                    : undefined
                }
                transition={allowLoopAnimations ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" } : undefined}
                className="text-3xl sm:text-4xl md:text-6xl font-orbitron font-black tracking-[0.08em] text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#ffffff_42%,#ff9f66_100%)]"
              >
                ₹ 8,00,000 INR
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Premium Championship CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScIvVbyRIGsxU_j0lq65Iq6iGgTuINPF_o8Ti9IqIUOnCwtaw/viewform?usp=dialog", "_blank", "noopener,noreferrer")}
                className="relative group overflow-hidden px-6 md:px-8 py-2 md:py-2.5 border border-[#7dffe4]/70 bg-[linear-gradient(95deg,#00f0ff_0%,#59ffd0_46%,#00ffb3_100%)] text-[#021018] font-orbitron font-black text-[11px] md:text-xs tracking-[0.17em] uppercase shadow-[0_0_36px_rgba(0,255,179,0.45),inset_0_1px_0_rgba(255,255,255,0.45)] hover:shadow-[0_0_62px_rgba(0,255,179,0.72),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#08322b]" />
                  Register Now
                </span>
                <motion.div
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)]"
                  initial={{ x: "-130%" }}
                  animate={allowLoopAnimations ? { x: "320%" } : undefined}
                  transition={allowLoopAnimations ? { duration: 2.1, repeat: Infinity, ease: "linear" } : undefined}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative group overflow-hidden px-6 md:px-8 py-2 md:py-2.5 border border-primary/60 bg-black/30 text-primary font-orbitron font-bold text-[11px] md:text-xs tracking-[0.15em] uppercase shadow-[0_0_24px_rgba(0,240,255,0.22)] hover:text-white hover:border-primary transition-all duration-300"
              >
                <span className="relative z-10">Enter Arena</span>
                <motion.div
                  className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                />
              </motion.button>
            </div>
            <div className="mt-1 text-[9px] font-mono tracking-[0.15em] uppercase text-white/55">
              Limited Slots Available
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 opacity-20">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="w-6 h-[1px] bg-white" />
            <div className="font-mono text-[7px] uppercase tracking-widest text-white/50">DATA_{i+1}</div>
          </div>
        ))}
      </div>

      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-12 opacity-20 text-right">
        <div className="rotate-90 origin-right translate-x-8 translate-y-8 font-mono text-[7px] uppercase tracking-[0.4em] text-white">
          NET PROTOCOL
        </div>
      </div>
    </section>
  );
}