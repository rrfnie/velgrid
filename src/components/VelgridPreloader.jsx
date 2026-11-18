import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VelgridLogo from './VelgridLogo';
import { Sparkles, Terminal } from 'lucide-react';

export default function VelgridPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ENGINE...');

  useEffect(() => {
    // Lock scroll while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    // Smooth High-Tech Progress Counter
    const startTime = Date.now();
    const duration = 1200; // 1.2s smooth boot sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (rawProgress < 30) {
        setStatusText('INITIALIZING CORE ENGINE...');
      } else if (rawProgress < 65) {
        setStatusText('COMPILING DESIGN SYSTEM...');
      } else if (rawProgress < 95) {
        setStatusText('SYNCHRONIZING INTERFACE...');
      } else {
        setStatusText('SYSTEM ONLINE • READY 🚀');
      }

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete?.();
        }, 250);
      }
    }, 20);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(6px)',
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-full max-w-full h-full h-[100dvh] min-h-[100dvh] z-[99999] flex flex-col items-center justify-center bg-[#020617] text-white select-none overflow-hidden m-0 p-4 touch-none"
    >
      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(rgba(14, 165, 233, 0.25) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Dual Pulsing Neon Ambient Glows */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-blue-600/20 via-sky-500/20 to-cyan-400/10 blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none -translate-y-8" />

      {/* Central Content Box */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-sm px-6"
      >
        {/* Glowing Logo Housing */}
        <div className="relative mb-6">
          {/* Subtle Outer Rotating Ring */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 opacity-30 blur-md animate-spin [animation-duration:8s]" />
          <div className="relative px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl flex items-center justify-center">
            <VelgridLogo variant="horizontal" size="md" theme="dark" />
          </div>
        </div>

        {/* High-Tech Monospace Percentage & Status Log */}
        <div className="w-64 sm:w-72">
          {/* Top Status & Percentage Counter */}
          <div className="flex items-center justify-between text-xs font-mono font-bold mb-2">
            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] sm:text-[11px] tracking-wider uppercase truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="truncate">{statusText}</span>
            </div>
            <span className="text-cyan-400 text-xs sm:text-sm font-black tracking-tight ml-2">
              {progress}%
            </span>
          </div>

          {/* Futuristic Glowing Progress Bar */}
          <div className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden relative border border-slate-700/60 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            >
              {/* Leading Sparkle Dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#38bdf8]" />
            </motion.div>
          </div>

          {/* Bottom Micro Details */}
          <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-slate-600" />
              <span>v1.0.0</span>
            </span>
            <span className="tracking-widest uppercase text-slate-400">
              Digital Studio
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
