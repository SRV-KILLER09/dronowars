"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Prizes() {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden bg-[#03030a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_22%,rgba(0,240,255,0.14),transparent_42%),radial-gradient(circle_at_82%_18%,rgba(255,77,0,0.14),transparent_40%)]" />
      <div className="container mx-auto px-4 z-10 text-center relative">
        <SectionHeading glowColor="primary">PRIZE POOL</SectionHeading>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-20 relative"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-4 py-1.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#c8fcff]">
            <Trophy className="h-3.5 w-3.5 text-[#00f0ff]" />
            Championship Reward Matrix
            <Sparkles className="h-3.5 w-3.5 text-[#ffb08a]" />
          </div>

          <motion.h2
            animate={{ textShadow: ["0 0 0 rgba(0,240,255,0)", "0 0 30px rgba(0,240,255,0.2)", "0 0 0 rgba(0,240,255,0)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-white tracking-tighter uppercase relative inline-block"
          >
            ₹8 LAKHS
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2" />
          </motion.h2>

          <p className="text-sm md:text-base text-[#00f0ff] font-mono tracking-[0.3em] mt-6 uppercase">Total Cash Prizes // Across 5 Events</p>
          <div className="mx-auto mt-4 h-px w-52 bg-gradient-to-r from-transparent via-[#ff4d00]/70 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          {/* Top 3 */}
          {[
            { id: "01", title: "FPV RACING", prize: "2 LAKHS", flagship: true },
            { id: "02", title: "PAYLOAD DELIVERY", prize: "1.6 LAKHS" },
            { id: "03", title: "AUTONOMOUS MISSION", prize: "1.6 LAKHS" }
          ].map((event) => (
            <Card key={event.id} className={`p-10 border-none h-[300px] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-300 hover:bg-white/5 group bg-[#080812] ${event.flagship ? "col-span-1 md:col-span-2 lg:col-span-1 border-t-2 border-t-[#00f0ff] shadow-[0_0_26px_rgba(0,240,255,0.12)]" : "border-t border-white/5"}`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,77,0,0.14),transparent_48%)]" />
              <div className="absolute top-0 right-0 p-4 font-mono text-white/5 text-2xl font-bold group-hover:text-white/10 transition-colors">[{event.id}]</div>
              <div className="relative z-10 text-center">
                <h3 className={`font-orbitron font-bold mb-4 uppercase tracking-[0.2em] ${event.flagship ? "text-2xl text-[#00f0ff] text-shadow-[0_0_10px_#00f0ff]" : "text-xl text-white/70"}`}>{event.title}</h3>
                <p className={`font-mono font-black tracking-tighter ${event.flagship ? "text-5xl text-white" : "text-4xl text-white/90"}`}>₹{event.prize}</p>
                {event.flagship && (
                  <div className="mt-6 px-4 py-1.5 bg-[#00f0ff]/5 border border-[#00f0ff]/20 text-[#00f0ff] text-[10px] font-mono uppercase tracking-[0.3em] inline-block">Flagship Arena</div>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>

        {/* Bottom 2 - Centered */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {[
            { id: "04", title: "OBSTACLE NAVIGATION", prize: "1.2 LAKHS" },
            { id: "05", title: "DRONE DESIGN", prize: "1.2 LAKHS" }
          ].map((event) => (
            <Card key={event.id} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] p-10 border-none h-[280px] flex flex-col justify-center items-center relative overflow-hidden transition-all hover:bg-white/5 group bg-[#080812] border-t border-white/5">
              <div className="absolute top-0 right-0 p-4 font-mono text-white/5 text-2xl font-bold group-hover:text-white/10 transition-colors">[{event.id}]</div>
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-orbitron font-bold text-white/70 mb-4 uppercase tracking-[0.2em]">{event.title}</h3>
                <p className="text-3xl text-white/90 font-mono font-black tracking-tighter">₹{event.prize}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
