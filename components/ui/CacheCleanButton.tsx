"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TrashIcon, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function CacheCleanButton() {
  const [showAlert, setShowAlert] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  const clearCache = async (showReload = true) => {
    setIsClearing(true);

    try {
      // Clear localStorage
      localStorage.clear();

      // Clear sessionStorage
      sessionStorage.clear();

      // Clear cookies
      document.cookie.split(";").forEach((c) => {
        const eqPos = c.indexOf("=");
        const name = eqPos > -1 ? c.substring(0, eqPos).trim() : c.trim();
        if (name) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
        }
      });

      // Clear service worker cache if available
      if ("caches" in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
      }

      setShowAlert(true);
      setIsClearing(false);

      // Auto-hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      if (showReload) {
        // Reload only for manual clears so the user gets a full refresh.
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.error("Error clearing cache:", error);
      setIsClearing(false);
    }
  };

  useEffect(() => {
    const autoClearFlag = "dronowars-cache-auto-cleared";

    if (typeof window === "undefined" || window.name.includes(autoClearFlag)) {
      return;
    }

    const timer = window.setTimeout(() => {
      window.name = `${window.name}|${autoClearFlag}`;
      void clearCache(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Cache Clear Button */}
      <motion.button
        onClick={() => void clearCache(true)}
        disabled={isClearing}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 left-5 z-[95] inline-flex items-center gap-2 border-2 border-orange-500/45 bg-[linear-gradient(145deg,rgba(255,122,66,0.2),rgba(200,80,40,0.15))] px-4 py-2.5 text-xs font-orbitron tracking-[0.18em] uppercase text-[#ffb380] shadow-[0_0_24px_rgba(255,122,66,0.2)] transition-all hover:border-orange-500/70 hover:text-white hover:shadow-[0_0_30px_rgba(255,122,66,0.35)] disabled:opacity-70"
      >
        <TrashIcon className="h-4 w-4" />
        {isClearing ? "Clearing..." : "Clear Cache"}
      </motion.button>

      {/* Success Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-20 left-5 z-[96] max-w-xs overflow-hidden border-2 border-orange-500/50 bg-[linear-gradient(135deg,rgba(255,122,66,0.15),rgba(255,122,66,0.08))] backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(255,122,66,0.25)]"
          >
            <div className="relative px-6 py-4">
              {/* Animated background glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "inset 0 0 20px rgba(255,122,66,0.1)",
                    "inset 0 0 40px rgba(255,122,66,0.2)",
                    "inset 0 0 20px rgba(255,122,66,0.1)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-2xl"
              />

              {/* Content */}
              <div className="relative flex items-start gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                </motion.div>

                <div>
                  <p className="font-orbitron text-sm font-bold text-white">
                    Cache Cleared Successfully
                  </p>
                  <p className="text-xs text-white/70 mt-1 font-mono">
                    All stored data has been removed. Page will refresh...
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 origin-left"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
