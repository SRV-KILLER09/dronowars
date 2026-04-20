"use client";

import { AnimatePresence, motion } from "framer-motion";

export function WhatsAppPopupContent({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 130, damping: 16 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md p-[1px] rounded-xl bg-gradient-to-br from-[#00f0ff]/50 via-[#22c55e]/30 to-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
          >
            {/* PANEL */}
            <div className="relative bg-[#040911] border border-cyan-400/30 rounded-xl px-6 py-7 text-center overflow-hidden">

              {/* glow */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-52 h-52 bg-green-400/20 blur-[120px]" />

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white/40 hover:text-white text-sm"
              >
                ✕
              </button>

              {/* LOGO */}
              <img
                src="/jiit-logo.png"
                alt="JIIT"
                className="h-14 mx-auto mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              />

              {/* TITLE */}
              <h1 className="font-[Orbitron] text-2xl tracking-widest text-white font-bold">
                DRON-O-WAR 1.0
              </h1>

              <h2 className="font-[Orbitron] text-lg mt-2 font-semibold bg-gradient-to-r from-[#22c55e] to-[#00f0ff] bg-clip-text text-transparent">
                Join the WhatsApp Group
              </h2>

              {/* divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent my-4" />

              {/* CONTENT */}
              <div className="space-y-4 font-[Rajdhani] text-sm">

                <p className="text-white/80 font-medium">
                  Want to join the official WhatsApp group?
                </p>

                <p className="text-white/90 font-semibold">
                  <span className="text-green-400">Step 1:</span>{" "}
                  Register for the event below
                </p>

                {/* CTA */}
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://docs.google.com/forms/d/e/1FAIpQLScIvVbyRIGsxU_j0lq65Iq6iGgTuINPF_o8Ti9IqIUOnCwtaw/viewform")
                  }
                  className="mt-2 px-6 py-2.5 rounded-md font-bold text-sm text-black bg-gradient-to-r from-[#22c55e] to-[#00f0ff] hover:scale-105 transition shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                >
                  REGISTER NOW
                </button>

                <p className="text-white/90 font-semibold">
                  <span className="text-green-400">Step 2:</span>{" "}
                  After payment, you’ll be added to the group
                </p>

                {/* TAGLINE */}
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] via-[#00f0ff] to-[#22c55e] text-base">
                  Connect. Compete. Conquer!
                </p>

                {/* animated dots */}
                <div className="flex justify-center gap-3 mt-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_12px_#22c55e] animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>

                <p className="text-white/50 text-sm mt-2 font-medium">
                  Stay tuned for updates!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
