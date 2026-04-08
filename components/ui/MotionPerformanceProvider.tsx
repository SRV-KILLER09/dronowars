"use client";

import { MotionConfig, type ReducedMotionConfig } from "framer-motion";

export function MotionPerformanceProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion: ReducedMotionConfig = "always";

  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>;
}
