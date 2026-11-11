import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import VelgridLogo from './VelgridLogo';

export default function VelgridPreloader({ onComplete }) {
  useEffect(() => {
    // Kunci scroll halaman saat splash screen berlangsung & reset scroll ke puncak
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      onComplete?.();
    }, 750);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } }}
      className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-full w-screen h-full h-screen h-[100dvh] min-h-[100dvh] z-[99999] flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden m-0 p-4 touch-none"
    >
      {/* Soft Ambient Radial Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

      {/* Pure Centered Glowing Brand Container */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center justify-center text-center"
      >
        {/* Official Velgrid Brand Logo */}
        <div className="relative px-2">
          <VelgridLogo variant="horizontal" size="lg" theme="dark" />
        </div>

        {/* Sleek Minimalist Loading Progress Bar */}
        <div className="w-36 sm:w-44 h-1 bg-slate-800/90 rounded-full overflow-hidden mt-6 relative shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          />
        </div>

        {/* Elegant Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-3 text-[11px] font-semibold tracking-widest uppercase text-slate-400"
        >
          Digital Engineering
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
