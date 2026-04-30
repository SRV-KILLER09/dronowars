"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [compactMode, setCompactMode] = useState(false);
  const allowLoopAnimations = !prefersReducedMotion;

  return (
    <section className="relative min-h-[70vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-10 md:pb-14">
      <div className="container mx-auto px-4 w-full relative z-[60]">
        <div className="flex flex-col items-center text-center relative">


          <div className="relative mb-3 md:mb-4 text-center w-full px-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-white tracking-widest leading-tight"
            >
              <span className="relative inline-block whitespace-nowrap">
                DRON-O-WAR 1.0
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8, ease: 'circOut' }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 h-0.5 md:h-1 bg-gradient-to-r from-primary to-accent"
                />
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-2 md:gap-3 mb-3 md:mb-4"
          >
            <div className="w-[1px] h-4 md:h-6 bg-gradient-to-b from-transparent via-primary to-transparent" />

            <div className="text-center">
              <p className="text-[9px] md:text-xs font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary mb-1 md:mb-2">
                Official Event
              </p>
              <p className="text-base md:text-xl font-orbitron font-bold text-white mb-1 tracking-wider">
                National Drone Championship
              </p>
              <p className="text-white/70 font-mono text-[9px] md:text-xs uppercase tracking-[0.15em]">
                Jaypee Institute of Information Technology Sector-128, Noida
              </p>
            </div>

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
              <p className="text-base md:text-xl font-orbitron font-black text-primary tracking-wide">
                May 2-3, 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="relative"
            >
              <p className="text-[9px] md:text-[10px] font-mono tracking-[0.25em] uppercase text-white/55 mb-1">Cash Prize</p>
              <motion.p
                animate={
                  allowLoopAnimations
                    ? { textShadow: ["0 0 0 rgba(0,240,255,0)", "0 0 28px rgba(0,240,255,0.45)", "0 0 0 rgba(0,240,255,0)"] }
                    : undefined
                }
                transition={allowLoopAnimations ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" } : undefined}
                className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-black tracking-[0.08em] text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#ffffff_42%,#ff9f66_100%)]"
              >
                ₹ 8,00,000 INR
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <motion.div
              animate={
                allowLoopAnimations
                  ? {
                    boxShadow: [
                      "0 0 15px rgba(244,63,94,0.4), inset 0 0 0px rgba(244,63,94,0)",
                      "0 0 80px rgba(244,63,94,1), inset 0 0 25px rgba(244,63,94,0.6)",
                      "0 0 15px rgba(244,63,94,0.4), inset 0 0 0px rgba(244,63,94,0)"
                    ],
                    scale: [1, 1.06, 1],
                    borderColor: ["rgba(239,68,68,0.5)", "rgba(255,50,50,1)", "rgba(239,68,68,0.5)"]
                  }
                  : undefined
              }
              transition={allowLoopAnimations ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" } : undefined}
              className="relative group flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-5 py-3 md:px-8 md:py-4 rounded-xl border-2 border-red-500/60 bg-red-950/40 backdrop-blur-md mt-2 z-[60]"
            >
              <div className="absolute inset-0 rounded-xl bg-[linear-gradient(90deg,rgba(244,63,94,0.1)_0%,rgba(249,115,22,0.1)_50%,rgba(244,63,94,0.1)_100%)] opacity-100"></div>

              <div className="flex items-center gap-2 relative z-10">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]"></span>
                </span>
                <span className="text-[9px] md:text-xs font-orbitron font-bold tracking-[0.13em] md:tracking-[0.18em] uppercase text-red-100">
                  Registration Deadline <span className="text-white font-black text-red-400 drop-shadow-[0_0_12px_rgba(244,63,94,1)]">1st May</span>
                </span>
              </div>

              <div className="hidden sm:block w-px h-6 bg-red-500/50"></div>
              <div className="sm:hidden w-full h-px bg-red-500/50"></div>

              <div className="flex items-center gap-2 relative z-10">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
                </span>
                <span className="text-[9px] md:text-xs font-orbitron font-bold tracking-[0.13em] md:tracking-[0.18em] uppercase text-orange-100">
                  Abstract Deadline: <span className="text-white font-black text-orange-400 drop-shadow-[0_0_12px_rgba(249,115,22,1)]">1st May</span>
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <motion.button
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScIvVbyRIGsxU_j0lq65Iq6iGgTuINPF_o8Ti9IqIUOnCwtaw/viewform?usp=dialog", "_blank", "noopener,noreferrer")}
                className="relative group overflow-hidden px-6 md:px-8 py-2 md:py-2.5 border border-[#7dffe4]/70 bg-[linear-gradient(95deg,#00f0ff_0%,#59ffd0_46%,#00ffb3_100%)] text-[#021018] font-orbitron font-black text-[11px] md:text-xs tracking-[0.17em] uppercase shadow-[0_0_36px_rgba(0,255,179,0.45),inset_0_1px_0_rgba(255,255,255,0.45)] hover:shadow-[0_0_62px_rgba(0,255,179,0.72),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#08322b]" />
                  Register Now
                </span>
                <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] opacity-40" />
              </motion.button>
              <motion.button
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

      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 opacity-20">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="w-6 h-[1px] bg-white" />
            <div className="font-mono text-[7px] uppercase tracking-widest text-white/50">DATA_{i + 1}</div>
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
