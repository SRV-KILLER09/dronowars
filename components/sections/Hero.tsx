"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen md:h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Flight Protocol Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 md:mt-20 mb-3 md:mb-4 px-4 md:px-6 py-1.5 md:py-2 border border-white/10 bg-black/40 text-[8px] md:text-[10px] font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase text-white/70 flex items-center gap-2 md:gap-3 hover:border-primary/50 transition-colors"
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
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
                DRON-O-WAR
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
            className="flex flex-col items-center gap-3 md:gap-4 mb-6 md:mb-8"
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
                JIIT Wish Town Campus, Noida
              </p>
            </div>

            {/* Date & Time Badge */}
            <motion.div
              animate={{ boxShadow: ["0 0 0 rgba(0,240,255,0)", "0 0 20px rgba(0,240,255,0.4)", "0 0 0 rgba(0,240,255,0)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="border border-primary/50 bg-gradient-to-r from-primary/10 to-accent/10 px-6 md:px-8 py-2 md:py-3 text-center backdrop-blur-sm"
            >
              <p className="text-[9px] md:text-[10px] font-mono tracking-[0.25em] uppercase text-white/60 mb-0.5">Event Date</p>
              <p className="text-xl md:text-2xl font-orbitron font-black text-primary tracking-wide">
                May 2-3, 2026
              </p>
            </motion.div>

            <div className="w-[1px] h-4 md:h-6 bg-gradient-to-b from-transparent via-primary to-transparent" />
          </motion.div>

          {/* Premium Championship CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col items-center gap-2 md:gap-3"
          >
            <div className="text-center text-[8px] md:text-[10px] font-mono tracking-[0.25em] uppercase text-white/50">
              Register Now For The Championship
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group overflow-hidden px-8 md:px-12 py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent text-black font-orbitron font-bold text-xs md:text-sm tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-all duration-300"
            >
              <span className="relative z-10">Enter Arena</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                initial={false}
              />
            </motion.button>
            <div className="text-[8px] font-mono tracking-[0.15em] uppercase text-white/40">
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
