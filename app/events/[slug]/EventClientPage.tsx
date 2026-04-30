"use client";

import { motion } from "framer-motion";
import { Event } from "@/lib/events";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Share2, FileText } from "lucide-react";
import { CacheCleanButton } from "@/components/ui/CacheCleanButton";

export function EventClientPage({ event }: { event: Event }) {
  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden">
      <CacheCleanButton />
      <div className="container mx-auto px-4 z-10 relative">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 font-mono text-sm uppercase tracking-widest group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Terminal
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px]" style={{ backgroundColor: `var(--color-${event.color})` }} />
              <span className="font-mono text-xs uppercase tracking-[.3em]" style={{ color: `var(--color-${event.color})` }}>
                Event Protocol // {event.slug.toUpperCase()}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl font-orbitron font-black text-white leading-tight uppercase mb-8"
            >
              {event.title.split(' ')[0]}<br/>
              <span className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent opacity-50">
                {event.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-8 mb-12"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 border border-white/10 rounded-none">
                  <Calendar size={20} className="text-white/60" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Date</p>
                  <p className="text-white font-mono">{event.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 border border-white/10 rounded-none">
                  <MapPin size={20} className="text-white/60" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Location</p>
                  <p className="text-white font-mono">{event.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white/60 font-mono leading-relaxed text-lg mb-12 max-w-xl"
            >
              {event.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Button size="lg" className="px-12" style={{ backgroundColor: `var(--color-${event.color})` }}>
                REGISTER AS PILOT
              </Button>
              {event.rulebookPdf ? (
                <div className="flex flex-col items-center">
                  <a
                    href={encodeURI(event.rulebookPdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-12 py-4 border border-white/20 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors uppercase tracking-widest font-orbitron text-sm font-bold"
                    aria-label={`Open ${event.title} rulebook PDF`}
                  >
                    <FileText size={16} />
                    RULEBOOK
                  </a>
                  <span className="text-[10px] font-mono text-white/50 mt-1.5 uppercase tracking-widest text-center">
                    PDF download
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Button size="lg" disabled className="px-12 border border-white/20 bg-white/5 text-white/50 cursor-not-allowed">
                    RULEBOOK
                  </Button>
                  <span className="text-[10px] font-mono text-white/50 mt-1.5 uppercase tracking-widest text-center">
                    Revealed by 25th APRIL, 2026
                  </span>
                </div>
              )}
              <button
                type="button"
                title="Share event"
                aria-label="Share event"
                className="p-4 border border-white/10 hover:bg-white/5 transition-colors text-white/60 hover:text-white shrink-0"
              >
                <Share2 size={24} />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Visual Accent */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative aspect-square lg:aspect-auto lg:h-[600px] border border-white/10 bg-white/5 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50" />
            
            {/* Geometric Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 opacity-50 m-8" style={{ borderColor: `var(--color-${event.color})` }} />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 opacity-50 m-8" style={{ borderColor: `var(--color-${event.color})` }} />
            
            {/* Animated Lines */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none"
              style={{ 
                backgroundImage: `repeating-linear-gradient(0deg, var(--color-${event.color}), var(--color-${event.color}) 1px, transparent 1px, transparent 20px)` 
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative">
                <div className="absolute -inset-20 blur-[100px] opacity-20 transition-opacity group-hover:opacity-40" style={{ backgroundColor: `var(--color-${event.color})` }} />
                <h2 className="text-[20vw] lg:text-[150px] font-orbitron font-black text-white/5 leading-none select-none">
                  {event.slug.split('-')[0].toUpperCase()}
                </h2>
              </div>
            </div>
            
            {/* Info Badge */}
            <div className="absolute bottom-12 right-12 p-6 glassmorphism border-white/10 max-w-[200px]">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-2">Network Status</p>
              <p className="text-xs font-mono text-white uppercase leading-tight">Secure Channel Established. Uplink sync at 5ghz.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
