"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

// Popup content component (reusable)
export function WhatsAppPopupContent({ open, onClose, shouldAnimate }: { open: boolean; onClose: () => void; shouldAnimate: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={shouldAnimate ? { opacity: 1 } : undefined}
          exit={shouldAnimate ? { opacity: 0 } : undefined}
          transition={shouldAnimate ? { duration: 0.3 } : undefined}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(1,2,8,0.9)] backdrop-blur-lg px-4"
          onClick={onClose}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.cos(i * 45) * 150, 0],
                  y: [0, Math.sin(i * 45) * 150, 0],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 5 + i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-1.5 h-1.5 bg-[#25D366] rounded-full"
                style={{
                  left: `50%`,
                  top: `50%`,
                  filter: "blur(1px)",
                  marginLeft: `-${Math.cos(i * 45) * 150}px`,
                  marginTop: `-${Math.sin(i * 45) * 150}px`,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={shouldAnimate ? { opacity: 0, scale: 0.7, y: 50 } : false}
            animate={shouldAnimate ? { opacity: 1, scale: 1, y: 0 } : undefined}
            exit={shouldAnimate ? { opacity: 0, scale: 0.7, y: 50 } : undefined}
            transition={shouldAnimate ? { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 70 } : undefined}
            className="relative w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Outer glow layers */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#25D366]/40 via-[#25D366]/20 to-[#25D366]/40 blur-2xl opacity-60 animate-pulse" />
            <div className="absolute -inset-0.5 rounded-3xl bg-[radial-gradient(circle_at_30%_40%,rgba(37,211,102,0.3),transparent_60%)] blur-xl" />

            {/* Main card with premium styling */}
            <div className="relative border-2 border-[#25D366]/50 bg-[linear-gradient(135deg,rgba(37,211,102,0.08),rgba(25,160,80,0.05))] backdrop-blur-2xl rounded-3xl shadow-[0_40px_120px_rgba(37,211,102,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]">
              {/* Animated inner border glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "inset 0 0 20px rgba(37,211,102,0.1)",
                    "inset 0 0 40px rgba(37,211,102,0.25)",
                    "inset 0 0 20px rgba(37,211,102,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-3xl"
              />

              {/* Top accent line */}
              <motion.div
                animate={{ scaleX: [0.3, 1, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-[#25D366] to-transparent rounded-full"
              />

              {/* Close button */}
              <motion.button
                type="button"
                aria-label="Close popup"
                onClick={onClose}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-5 top-5 z-20 inline-flex h-10 w-10 items-center justify-center border-2 border-[#25D366]/50 bg-[rgba(37,211,102,0.12)] text-white/80 hover:text-white hover:border-[#25D366] hover:bg-[rgba(37,211,102,0.25)] transition-all duration-300 rounded-full"
              >
                <X size={20} />
              </motion.button>

              {/* Content */}
              <div className="relative px-8 py-12 text-center">
                {/* Icon with premium glow */}
                <motion.div
                  initial={shouldAnimate ? { scale: 0, rotate: -180, opacity: 0 } : false}
                  animate={shouldAnimate ? { scale: 1, rotate: 0, opacity: 1 } : undefined}
                  transition={shouldAnimate ? { duration: 0.7, delay: 0.2, type: "spring", stiffness: 70 } : undefined}
                  className="mb-8 inline-flex h-24 w-24 items-center justify-center"
                >
                  {/* Rotating outer ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#25D366]/60 border-r-[#25D366]/40"
                  />
                  {/* Pulsing inner glow */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 30px rgba(37,211,102,0.4), inset 0 0 30px rgba(37,211,102,0.15)",
                        "0 0 60px rgba(37,211,102,0.7), inset 0 0 40px rgba(37,211,102,0.3)",
                        "0 0 30px rgba(37,211,102,0.4), inset 0 0 30px rgba(37,211,102,0.15)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-[#25D366]/40 bg-[linear-gradient(135deg,rgba(37,211,102,0.1),rgba(37,211,102,0.02))]"
                  />
                  <MessageCircle size={48} className="text-[#25D366] relative z-10" strokeWidth={1.5} />
                </motion.div>

                {/* Main heading with gradient */}
                <motion.div
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                  animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                  transition={shouldAnimate ? { duration: 0.6, delay: 0.35 } : undefined}
                >
                  <h3 className="mb-3 text-2xl md:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-[linear-gradient(135deg,#25D366_0%,#00ff88_50%,#25D366_100%)]">
                    WhatsApp Group
                  </h3>
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={shouldAnimate ? { opacity: 0, scaleX: 0 } : false}
                  animate={shouldAnimate ? { opacity: 1, scaleX: 1 } : undefined}
                  transition={shouldAnimate ? { duration: 0.5, delay: 0.45 } : undefined}
                  className="mb-6 h-1 bg-gradient-to-r from-transparent via-[#25D366]/50 to-transparent"
                />

                {/* Main message */}
                <motion.div
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                  animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                  transition={shouldAnimate ? { duration: 0.6, delay: 0.5 } : undefined}
                >
                  <p className="mb-2 text-base text-white/90 font-mono">The link will be shared</p>
                  <p className="mb-6 text-xl md:text-2xl font-orbitron font-bold text-[#25D366]">very soon...</p>
                </motion.div>

                {/* Animated loading dots */}
                <motion.div
                  initial={shouldAnimate ? { opacity: 0 } : false}
                  animate={shouldAnimate ? { opacity: 1 } : undefined}
                  transition={shouldAnimate ? { duration: 0.6, delay: 0.6 } : undefined}
                  className="mb-8 flex justify-center gap-3"
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      animate={
                        shouldAnimate
                          ? {
                              y: [0, -12, 0],
                              boxShadow: [
                                "0 0 0px rgba(37,211,102,0.3)",
                                "0 0 15px rgba(37,211,102,0.8)",
                                "0 0 0px rgba(37,211,102,0.3)",
                              ],
                            }
                          : undefined
                      }
                      transition={shouldAnimate ? { duration: 1.2, delay: 0.65 + dot * 0.15, repeat: Infinity } : undefined}
                      className="h-3 w-3 rounded-full bg-gradient-to-br from-[#25D366] to-[#00d95f]"
                    />
                  ))}
                </motion.div>

                {/* Subtext */}
                <motion.p
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                  animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                  transition={shouldAnimate ? { duration: 0.6, delay: 0.7 } : undefined}
                  className="mb-8 text-sm text-white/70 font-mono"
                >
                  Stay tuned for updates!
                </motion.p>

                {/* Action buttons */}
                <motion.div
                  initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                  animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                  transition={shouldAnimate ? { duration: 0.6, delay: 0.8 } : undefined}
                  className="flex flex-col gap-3"
                >
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl border border-[#25D366]/40 bg-[rgba(37,211,102,0.12)] text-[#25D366] font-mono text-sm font-semibold hover:bg-[rgba(37,211,102,0.25)] hover:border-[#25D366]/70 transition-all duration-300"
                  >
                    Got It
                  </button>
                  <button
                    onClick={() => {
                      try {
                        window.localStorage.setItem("dronowars-whatsapp-dismissed", "1");
                      } catch {
                        // Ignore storage errors
                      }
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-xl border border-white/20 bg-[rgba(255,255,255,0.05)] text-white/70 font-mono text-sm font-semibold hover:bg-[rgba(255,255,255,0.1)] hover:text-white/90 transition-all duration-300"
                  >
                    Don&apos;t show again
                  </button>
                </motion.div>

                {/* Bottom accent */}
                <motion.div
                  animate={{ scaleX: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-[#25D366]/40 to-transparent rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
