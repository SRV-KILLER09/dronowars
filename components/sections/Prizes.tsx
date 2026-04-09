"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Prizes() {
  return (
    <section id="prizes" className="py-14 md:py-16 relative overflow-hidden bg-[#03030a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_22%,rgba(0,240,255,0.14),transparent_42%),radial-gradient(circle_at_82%_18%,rgba(255,77,0,0.14),transparent_40%)]" />
      <div className="container mx-auto px-4 z-10 text-center relative">
        <SectionHeading glowColor="primary">CASH PRIZE</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 mb-8 relative"
        >
          <div className="mx-auto mb-5 flex flex-col md:flex-col lg:flex-row items-center justify-center gap-3 md:gap-4">
            <div className="inline-flex items-center gap-2 border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-4 py-1.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#c8fcff]">
              <Trophy className="h-3.5 w-3.5 text-[#00f0ff]" />
              Championship Reward Matrix
              <Sparkles className="h-3.5 w-3.5 text-[#ffb08a]" />
            </div>

            <motion.h2
              animate={{ textShadow: ["0 0 0 rgba(0,240,255,0)", "0 0 30px rgba(0,240,255,0.2)", "0 0 0 rgba(0,240,255,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black text-white tracking-tighter uppercase relative inline-block whitespace-nowrap leading-none"
            >
              ₹8 LAKHS
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2" />
            </motion.h2>
          </div>

          <p className="text-xs md:text-sm text-[#00f0ff] font-mono tracking-[0.24em] mt-4 uppercase">Total Cash Prizes // Across 5 Events</p>
          <div className="mx-auto mt-3 h-px w-44 bg-gradient-to-r from-transparent via-[#ff4d00]/70 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto p-12 border border-white/5 bg-[#080812] relative overflow-hidden group rounded-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05),transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="font-orbitron font-bold text-white/50 text-sm md:text-base mb-6 tracking-[0.3em] uppercase">
              Championship Status
            </h3>
            <div className="flex flex-col gap-4 text-left md:text-center items-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
              <p className="text-white/70 font-mono text-xs md:text-sm leading-relaxed max-w-2xl uppercase tracking-widest">
                The National Drone Championship features 5 high-stakes arenas where pilots compete for glory and substantial rewards. Focus on technical excellence and precision maneuvering to claim your share of the massive cash prize.
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
