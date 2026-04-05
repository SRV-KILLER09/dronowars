/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() =>
    [...Array(20)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }))
  );
  const [cubes] = useState(() =>
    [...Array(6)].map(() => {
      const size = Math.floor(Math.random() * 90) + 70;
      return {
        left: Math.random() * 90,
        top: Math.random() * 80,
        size,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 4,
      };
    })
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,80,0,0.18),transparent_45%),radial-gradient(circle_at_75%_25%,rgba(0,255,140,0.12),transparent_50%),#03030a]" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(255,80,0,0.18),transparent_45%),radial-gradient(circle_at_75%_25%,rgba(0,255,140,0.12),transparent_50%),#03030a]">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.2),transparent_55%),radial-gradient(circle_at_center,transparent_0%,rgba(3,3,10,0.8)_75%)]" />

      {/* Perspective floor grid for a 3D arena feel */}
      <motion.div
        className="absolute left-[-20%] right-[-20%] top-[45%] bottom-[-30%] opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          transform: `perspective(1000px) rotateX(68deg) translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0) scale(1.2)`,
        }}
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]"
      />

      {/* Floating wireframe cubes */}
      <div className="absolute inset-0 [perspective:1200px]">
        {cubes.map((cube, i) => {
          const half = cube.size / 2;
          const faceClass =
            "absolute inset-0 border border-white/20 bg-white/[0.02] backdrop-blur-[1px]";

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                ["--cube-half" as string]: `${half}px`,
                width: cube.size,
                height: cube.size,
                left: `${cube.left}%`,
                top: `${cube.top}%`,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX: [18, 42, 18],
                rotateY: [0, 180, 360],
                rotateZ: [8, -8, 8],
                y: [0, -18, 0],
              }}
              transition={{
                duration: cube.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: cube.delay,
              }}
            >
              <div className={`${faceClass} cube-face-front`} />
              <div className={`${faceClass} cube-face-back`} />
              <div className={`${faceClass} cube-face-right`} />
              <div className={`${faceClass} cube-face-left`} />
              <div className={`${faceClass} cube-face-top`} />
              <div className={`${faceClass} cube-face-bottom`} />
            </motion.div>
          );
        })}
      </div>

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          initial={{
            x: p.x,
            y: p.y,
          }}
          animate={{
            y: [null, "-100%"],
            opacity: [0.2, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.22)_50%),linear-gradient(90deg,rgba(255,120,0,0.04),rgba(0,255,160,0.02),rgba(0,130,255,0.04))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
    </div>
  );
}
