"use client";

import Link from "next/link";
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        
        {/* Association Section with JIIT Logo */}
        <div className="flex flex-col items-center mb-16 border-b border-white/5 pb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
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
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#00205B] mb-2">
                JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, NOIDA
              </h1>
              <p className="text-[#00205B] text-sm font-semibold">
                (Deemed to be a University under section 3 of UGC Act 1956)
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans mb-12">
          <div className="md:col-span-2">
            <Link href="#" className="inline-block mb-6">
              <span className="text-3xl font-orbitron font-bold uppercase tracking-widest text-white">DRONO<span className="text-[#00f0ff] ml-1">WAR</span></span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed font-mono">
              National Drone Championship hosting multiple arenas of aerial and autonomous excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-orbitron font-bold tracking-widest mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="#" className="hover:text-[#00f0ff] transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#00f0ff] transition-colors">About Us</Link></li>
              <li><Link href="#structure" className="hover:text-[#00f0ff] transition-colors">Specifications</Link></li>
              <li><Link href="#prizes" className="hover:text-[#00f0ff] transition-colors">Prizes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-orbitron font-bold tracking-widest mb-6">CONTACT</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>contact@dronotics.in</li>
              <li className="whitespace-nowrap">Yasharth Singh: +91 8448173449</li>
              <li className="whitespace-nowrap">Vaibhav Katariya: +91 7015000239</li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00f0ff]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff]"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00f0ff]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff]"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00f0ff]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff]"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00f0ff]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff]"><Youtube size={18} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-white/40 text-xs py-6 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Drone Wars International League. All rights reserved.</p>
          <p>Made with love by Ansh Mahajan & Shourya Singh</p>
        </div>
      </div>
    </footer>
  );
}
