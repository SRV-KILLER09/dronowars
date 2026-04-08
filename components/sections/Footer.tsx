"use client";

import Link from "next/link";
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        
        {/* Association Section with JIIT Logo */}
        <div className="flex flex-col items-center mb-10 border-b border-white/15 pb-12">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#00f0ff]/35 bg-[linear-gradient(90deg,rgba(0,240,255,0.14),rgba(255,122,66,0.14))] px-5 py-2 shadow-[0_0_26px_rgba(0,240,255,0.12)]">
            <span className="h-2 w-2 rounded-full bg-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.9)]" />
            <p className="text-[11px] sm:text-xs font-orbitron uppercase tracking-[0.28em] text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#9dfbe3_45%,#ff9f66_100%)]">
              In Association With
            </p>
            <span className="h-2 w-2 rounded-full bg-[#ff8a4b] shadow-[0_0_12px_rgba(255,138,75,0.9)]" />
          </div>
          <div className="flex flex-col items-center gap-6 w-full text-center">
            {/* JIIT Logo */}
            <div className="shrink-0">
              <div className="w-40 h-40 relative">
                <Image
                  src="/jiit-logo.png"
                  alt="JIIT Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Text Section */}
            <div className="w-full max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, NOIDA
              </h1>
              <p className="text-white/75 text-sm font-semibold">
                (Deemed to be a University under section 3 of UGC Act 1956)
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans mb-12">
          <div className="md:col-span-2">
            <Link href="#" className="inline-block mb-6">
              <span className="text-3xl font-orbitron font-bold uppercase tracking-widest text-white">DRONO<span className="text-[#00f0ff] ml-1">WAR</span></span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed font-mono">
              National Drone Championship hosting multiple
              <span className="block mt-1 text-base font-orbitron font-semibold uppercase tracking-[0.14em] text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#8dffdf_45%,#ff8a4b_100%)]">
                Arenas of Excellence
              </span>
            </p>
          </div>
          
          <div>
            <h4 className="text-[#9dfbff] font-orbitron font-bold tracking-widest mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-[#9ed8de] text-sm">
              <li><Link href="#" className="hover:text-[#00f0ff] transition-colors">Home</Link></li>
              <li><Link href="#events" className="hover:text-[#00f0ff] transition-colors">Events</Link></li>
              <li><Link href="#about" className="hover:text-[#00f0ff] transition-colors">About</Link></li>
              <li><Link href="#faq" className="hover:text-[#00f0ff] transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-[#00f0ff] transition-colors">Contact</Link></li>
              <li><Link href="#prizes" className="hover:text-[#00f0ff] transition-colors">Prizes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#ffd0b3] font-orbitron font-bold tracking-widest mb-6">CONTACT</h4>
            <ul className="space-y-3 text-[#ffc9ad]/85 text-sm">
              <li>contact@dronotics.in</li>
              <li>Yasharth Singh: +91 8448173449</li>
              <li className="whitespace-nowrap">Vaibhav Katariya: +91 7015000239</li>
              <li className="pt-4 flex gap-4">
                <a href="#" aria-label="Twitter" title="Twitter" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff8a4b]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#ff8a4b]/50 text-white hover:text-[#ffb07d]"><Twitter size={18} /></a>
                <a href="#" aria-label="LinkedIn" title="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff8a4b]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#ff8a4b]/50 text-white hover:text-[#ffb07d]"><Linkedin size={18} /></a>
                <a href="#" aria-label="Instagram" title="Instagram" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff8a4b]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#ff8a4b]/50 text-white hover:text-[#ffb07d]"><Instagram size={18} /></a>
                <a href="#" aria-label="YouTube" title="YouTube" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff8a4b]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#ff8a4b]/50 text-white hover:text-[#ffb07d]"><Youtube size={18} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center py-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex justify-center">
            <p className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-[#00f0ff]/30 bg-[linear-gradient(120deg,rgba(0,240,255,0.15),rgba(129,255,227,0.12),rgba(255,138,75,0.18))] px-5 py-2 text-[11px] sm:text-xs font-orbitron tracking-[0.14em] uppercase shadow-[0_0_28px_rgba(0,240,255,0.2)] w-fit">
              <span className="text-[#b9ffff]">&copy; 2026</span>
              <span className="text-white">DRONO-O-WAR 1.0</span>
              <span className="text-[#ffd0b3]">JIIT Noida.</span>
              <span className="text-[#aef0ff]">All rights reserved.</span>
            </p>
          </div>
          <div className="flex justify-center">
            <p className="inline-flex w-fit max-w-max flex-wrap items-center justify-center gap-2 rounded-full border border-[#00f0ff]/35 bg-[linear-gradient(135deg,rgba(0,240,255,0.10),rgba(255,122,66,0.12))] px-4 py-2 text-[11px] sm:text-xs font-orbitron tracking-[0.08em] text-white/90 shadow-[0_0_30px_rgba(0,240,255,0.12)]">
              <span className="text-white/75">Made with</span>
              <span className="text-[#ff5f7a] animate-pulse">❤️</span>
              <span className="text-white/75">by</span>
              <a
                href="https://www.linkedin.com/in/ansh-mahajan-46115a267/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#7fffe8_45%,#ff9f66_100%)] hover:brightness-125 transition"
              >
                Ansh Mahajan
              </a>
              <span className="text-white/60">|</span>
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#7fffe8_45%,#ff9f66_100%)]">Shourya Singh</span>
              <span className="text-white/60">|</span>
              <a
                href="https://www.linkedin.com/in/vardaan-saxena-b4b4a4365/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#7fffe8_45%,#ff9f66_100%)] hover:brightness-125 transition"
              >
                Vardaan Saxena
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
