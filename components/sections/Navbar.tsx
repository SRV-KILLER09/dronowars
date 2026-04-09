"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#events" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Prizes", href: "#prizes" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/30 ${isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="w-full px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#" className="flex items-center gap-3 group max-w-[68%] md:max-w-none pr-4">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#00f0ff]/45 to-[#ff4d00]/35 blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-11 w-11 md:h-12 md:w-12 overflow-hidden rounded-full border border-white/25 bg-white/90">
                <Image
                  src="/jiit-logo.png"
                  alt="JIIT Noida Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="min-w-0">
              <span className="block text-xl md:text-2xl font-orbitron font-bold uppercase tracking-[0.2em] text-white leading-tight whitespace-nowrap">
                DRON-O-<span className="text-primary ml-1">WAR 1.0</span>
              </span>
              <span className="hidden sm:block text-[10px] md:text-xs font-mono tracking-[0.16em] uppercase text-white/65 whitespace-nowrap">
                <span className="text-[#00f0ff]">Jaypee Institute Of Information Technology</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-orbitron text-white/50 hover:text-primary uppercase tracking-widest transition-colors">
                {link.name}
              </Link>
            ))}
          </div>



          <button className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 origin-top p-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-orbitron text-white hover:text-primary uppercase tracking-widest p-2" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}

        </motion.div>
      )}
    </motion.nav>
  );
}
