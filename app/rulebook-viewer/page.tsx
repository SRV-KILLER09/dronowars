"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function RulebookViewerPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pdf = searchParams.get("pdf");
  const title = searchParams.get("title") || "Rulebook";

  if (!pdf) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-2xl font-bold mb-4">No Rulebook Provided</h1>
        <button
          className="px-6 py-2 rounded bg-[#ff4d00] text-white font-mono mt-4"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#181a20] to-[#0a0a0a] p-1 sm:p-4">
      <div className="relative w-full max-w-6xl bg-gradient-to-br from-[#181818] via-[#1a1a1a] to-[#0a0a0a] rounded-3xl shadow-[0_0_60px_10px_rgba(255,77,0,0.18)] border border-[#ff4d00]/40 p-0 sm:p-8 flex flex-col items-center animate-fadeIn">
        {/* Cross Button - larger touch area, mobile friendly */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/60 border border-[#ff4d00]/40 text-[#ff4d00] hover:bg-[#ff4d00] hover:text-white transition-colors shadow-lg text-2xl focus:outline-none focus:ring-2 focus:ring-[#ff4d00]/60 active:scale-95"
          aria-label="Close rulebook viewer"
          tabIndex={0}
          onClick={() => router.back()}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.back(); }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h1 className="w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-orbitron font-black mb-4 sm:mb-8 text-center uppercase tracking-[0.13em] drop-shadow-[0_2px_16px_rgba(255,77,0,0.18)] pt-8 sm:pt-10 pb-2 sm:pb-4 bg-gradient-to-b from-transparent via-[#181818]/60 to-transparent rounded-t-3xl">
          <span className="bg-gradient-to-r from-[#ff4d00] via-[#ff9f2f] to-[#ff4d00] bg-clip-text text-transparent">{title.toUpperCase()}</span>
          <span className="text-[#7fffd4] font-light">&nbsp;- RULEBOOK</span>
        </h1>
        <div className="w-full flex-1 flex items-center justify-center px-1 xs:px-2 sm:px-8 pb-4 sm:pb-8">
          <div className="w-full h-[60vh] xs:h-[65vh] sm:h-[72vh] md:h-[78vh] rounded-2xl overflow-hidden border-2 border-[#ff4d00]/30 shadow-[0_0_32px_2px_rgba(255,77,0,0.10)] bg-black/80 flex items-center justify-center">
            <iframe
              src={pdf}
              title="Rulebook PDF"
              className="w-full h-full rounded-xl border-none bg-black/60 shadow-lg"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
