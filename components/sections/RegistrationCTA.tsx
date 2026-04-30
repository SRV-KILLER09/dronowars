"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function RegistrationCTA() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-b border-white/10 bg-[#03030a]">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-[length:20px_20px] pointer-events-none opacity-20" />
      <div className="container mx-auto px-4 z-10 text-center relative flex flex-col items-center">
        
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#00f0ff] mb-8" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6 tracking-tighter uppercase"
        >
          READY TO <span className="text-[#00f0ff]">RACE?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-12 font-mono tracking-widest uppercase"
        >
          JOIN THE ELITE PILOTS FROM AROUND THE WORLD. PROVE YOUR SKILLS ON THE ULTIMATE FPV RACING TRACK.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 px-6 py-4 rounded-xl border border-[#00f0ff]/30 bg-[#00f0ff]/5 backdrop-blur-sm relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-sm font-mono tracking-[0.2em] uppercase text-[#00f0ff]/70 mb-1">REGISTRATION DEADLINE</span>
            <span className="text-xl md:text-2xl font-orbitron font-black text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">1st MAY</span>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="sm:hidden w-full h-px bg-white/20"></div>
          
          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-sm font-mono tracking-[0.2em] uppercase text-[#00f0ff]/70 mb-1">ABSTRACT DEADLINE</span>
            <span className="text-xl md:text-2xl font-orbitron font-black text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">1st MAY</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button size="lg" variant="primary" className="px-12 py-5 text-lg">REGISTER NOW</Button>
          <Button size="lg" variant="secondary" className="px-12 py-5 text-lg">CONTACT US</Button>
        </motion.div>
      </div>
    </section>
  );
}
