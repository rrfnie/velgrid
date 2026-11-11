import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Database,
  BarChart3,
  Smartphone,
  Laptop,
  MessageCircle,
  Sparkles,
  ExternalLink,
  Layers,
  Check,
  Zap
} from 'lucide-react';
import VelgridLogo from './VelgridLogo';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function LiveDesignEngineMockup() {
  const { isDark } = useTheme();
  const { isEn } = useLanguage();
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'

  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 select-none">
      {/* Top Window Bar: Traffic Light Dots, LIVE DESIGN ENGINE, & Color Palette Dots */}
      <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2">
        {/* Left: 🔴 🟡 🟢 Traffic Lights */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56] shadow-sm" />
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f] shadow-sm" />
        </div>

        {/* Center: (▷) LIVE DESIGN ENGINE */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-sky-400 truncate">
          <span className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border border-sky-400 flex items-center justify-center text-[8px] sm:text-[9px] text-sky-400 flex-shrink-0">
            ▶
          </span>
          <span className="truncate">LIVE DESIGN ENGINE</span>
        </div>

        {/* Right: 5 Color Palette Dots (🟢 🔵 🟣 🔴 🟡) */}
        <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
        </div>
      </div>

      {/* Main Split Body: Left Code Editor, Right Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
        {/* Left Side: VS Code Editor (Charcoal Background) */}
        <div className="lg:col-span-6 bg-[#25252b] p-4 sm:p-6 flex flex-col justify-between font-mono text-xs sm:text-sm border-b lg:border-b-0 lg:border-r border-slate-800 text-slate-300 overflow-hidden">
          <div>
            {/* File Tab */}
            <div className="inline-flex items-center gap-2 pb-2 mb-4 border-b border-slate-700/60 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-slate-300 font-semibold">build_config.ts</span>
            </div>

            {/* Code Body with Syntax Highlighting & Horizontal Scroll Safety */}
            <div className="space-y-3 leading-relaxed overflow-x-auto pb-2 scrollbar-thin">
              <p>
                <span className="text-sky-400">import</span> &#123;{' '}
                <span className="text-amber-300">Velgrid</span> &#125;{' '}
                <span className="text-sky-400">from</span>{' '}
                <span className="text-rose-400">'@velgrid/core'</span>;
              </p>

              <div className="pt-2">
                <p>
                  <span className="text-sky-400">async function</span>{' '}
                  <span className="text-yellow-300">launch</span>() &#123;
                </p>
                <div className="pl-6 space-y-1">
                  <p>
                    <span className="text-purple-400">const</span> app ={' '}
                    <span className="text-sky-400">await</span>{' '}
                    <span className="text-amber-300">Velgrid</span>.
                    <span className="text-sky-400">create</span>(&#123;
                  </p>
                  <div className="pl-6 space-y-0.5 text-xs">
                    <p>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-rose-400">'Velgrid'</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">primaryColor:</span>{' '}
                      <span className="text-rose-400">'#0ea5e9'</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">mission:</span>{' '}
                      <span className="text-rose-400">'Solusi Digital Semua Kalangan'</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">goal:</span>{' '}
                      <span className="text-rose-400">'Mempermudah Kebutuhan'</span>
                    </p>
                  </div>
                  <p>&#125;);</p>

                  <div className="pt-2">
                    <p className="text-slate-400">
                      app.<span className="text-yellow-300">render</span>();
                    </p>
                    <p>
                      <span className="text-sky-400">return</span>{' '}
                      <span className="text-rose-400">'System Online 🚀'</span>;
                    </p>
                  </div>
                </div>
                <p className="flex items-center">
                  <span>&#125;</span>
                  <span className="w-2 h-4 bg-sky-400 ml-1 animate-pulse" />
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Editor Bar */}
          <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>TypeScript 5.0 • Ready</span>
            </span>
            <span className="text-sky-400 font-semibold font-mono">UTF-8</span>
          </div>
        </div>

        {/* Right Side: Live Interactive Design Preview */}
        <div className="lg:col-span-6 bg-slate-950 p-3.5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          {/* Top Switcher: [ DESKTOP ] [ MOBILE ] */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center p-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm">
              <button
                onClick={() => setViewMode('desktop')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'desktop'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                DESKTOP
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'mobile'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                MOBILE
              </button>
            </div>
          </div>

          {/* Interactive Preview Canvas */}
          <div className="my-auto flex items-center justify-center">
            <AnimatePresence mode="wait">
              {viewMode === 'desktop' ? (
                /* Desktop Preview Window */
                <motion.div
                  key="desktop-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100"
                >
                  {/* Miniature Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <VelgridLogo variant="horizontal" size="xs" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-4 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
                      <span className="w-4 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    </div>
                  </div>

                  {/* Banner Mockup with Screen Wireframe & Floating White Logo Pill */}
                  <div className="mt-3 relative rounded-xl overflow-hidden border border-sky-500/30 bg-[#091528] text-center p-4">
                    {/* Background Digital Grid */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            'linear-gradient(to right, rgba(14, 165, 233, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.25) 1px, transparent 1px)',
                          backgroundSize: '16px 16px',
                        }}
                      />
                    </div>

                    {/* Radial Electric Blue Glow */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-32 bg-sky-500/30 blur-2xl pointer-events-none rounded-full" />

                    {/* Center Action Mockup */}
                    <div className="relative z-10 flex flex-col items-center justify-center py-2">
                      {/* Floating White Pill Badge with Official Velgrid Logo */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white shadow-xl shadow-sky-950/40 border border-slate-200/90 transition-transform cursor-pointer"
                      >
                        <VelgridLogo variant="horizontal" size="xs" theme="light" />
                      </motion.div>

                      {/* Electric Blue CTA Pill Button */}
                      <a
                        href={isEn ? "https://wa.me/6282183952772?text=Hello%20Velgrid!%20I%20am%20interested%20in%20the%20live%20design%20prototype%20and%20custom%20system." : "https://wa.me/6282183952772?text=Halo%20Velgrid!%20Saya%20tertarik%20dengan%20live%20design%20prototype%20dan%20sistem%20kustom%20ini."}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-extrabold text-[11px] tracking-wider uppercase shadow-lg shadow-sky-500/35 transition-all cursor-pointer group"
                      >
                        <span>EXPLORE SYSTEM</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>

                    {/* Miniature laptop base glow line */}
                    <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
                  </div>

                  {/* 2 Bottom Stat Feature Cards (Database & Analytics) */}
                  <div className="mt-3 grid grid-cols-2 gap-2.5">
                    <div className="bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center flex-shrink-0">
                        <Database className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-bold block truncate">Database</span>
                        <div className="w-10 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mt-0.5" />
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-bold block truncate">Analytics</span>
                        <div className="w-10 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mt-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Mobile Phone Preview Frame */
                <motion.div
                  key="mobile-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[240px] bg-white dark:bg-slate-900 rounded-3xl p-3 shadow-2xl border-2 border-slate-800 text-slate-900 dark:text-slate-100"
                >
                  {/* Phone Speaker Notch */}
                  <div className="w-14 h-3 bg-slate-950 rounded-full mx-auto mb-2.5 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                    <VelgridLogo variant="horizontal" size="xs" />
                    <span className="w-3 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                  </div>

                  {/* Mobile Banner */}
                  <div className="mt-2.5 rounded-xl bg-[#091528] p-3 text-center border border-sky-500/30 relative overflow-hidden">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-16 bg-sky-500/30 blur-xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white shadow-md border border-slate-200/90 mb-2">
                        <VelgridLogo variant="horizontal" size="xxs" theme="light" />
                      </div>
                      <a
                        href={isEn ? "https://wa.me/6282183952772?text=Hello%20Velgrid!%20I%20am%20interested%20in%20the%20mobile%20app%20live%20demo." : "https://wa.me/6282183952772?text=Halo%20Velgrid!%20Saya%20tertarik%20dengan%20live%20mobile%20app%20demo%20ini."}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-[9px] uppercase tracking-wider shadow-md shadow-sky-500/30 cursor-pointer transition-all"
                      >
                        OPEN APP
                      </a>
                    </div>
                  </div>

                  {/* Mini Cards */}
                  <div className="mt-2 space-y-1.5">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-[10px] font-semibold">
                      <span>Android & iOS</span>
                      <span className="text-sky-400 font-bold">60 FPS</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-[10px] font-semibold">
                      <span>Offline Sync</span>
                      <span className="text-sky-400 font-bold">Active</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Realtime Live Engine Status Bar */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>Realtime Live Preview</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-[9px] font-bold">
              <Zap className="w-3 h-3 text-sky-400" />
              <span>SYNCED 60FPS</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

