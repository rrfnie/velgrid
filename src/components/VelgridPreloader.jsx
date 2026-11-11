import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import VelgridLogo from './VelgridLogo';

export default function VelgridPreloader({ onComplete }) {
  useEffect(() => {
    // Splash screen singkat & super bersih (~600ms) tanpa garis loading
    const timer = setTimeout(() => {
      onComplete?.();
    }, 600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-white select-none px-4"
    >
      {/* Soft Ambient Radial Glow */}
      <div className="absolute w-64 h-64 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

      {/* Pure Centered Glowing Logo Emblem (Tanpa Garis / Progress Bar) */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative flex flex-col items-center"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 p-2.5 shadow-2xl shadow-sky-500/25 flex items-center justify-center relative">
            <VelgridLogo variant="icon" size="sm" theme="dark" />
          </div>
          {/* Subtle Outer Glowing Ring Pulse */}
          <span className="absolute -inset-1.5 rounded-2xl border border-sky-400/40 animate-ping opacity-60 pointer-events-none" />
          <span className="absolute -inset-1 rounded-2xl border border-sky-400/30 animate-pulse pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
}
