import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  RotateCcw,
  Sparkles,
  Zap,
  ShieldCheck,
  MessageCircle,
  Laptop,
  Smartphone
} from 'lucide-react';
import VelgridLogo from './VelgridLogo';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

// 5 Color Themes inspired by Futura Link
export const COLOR_THEMES = [
  {
    id: 'emerald',
    name: 'Emerald Teal',
    hex: '#10b981',
    bgClass: 'bg-[#10b981]',
    glow: 'rgba(16, 185, 129, 0.4)',
    accentText: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/15',
    badgeBorder: 'border-emerald-500/30'
  },
  {
    id: 'blue',
    name: 'Electric Blue',
    hex: '#3b82f6',
    bgClass: 'bg-[#3b82f6]',
    glow: 'rgba(59, 130, 246, 0.4)',
    accentText: 'text-blue-400',
    badgeBg: 'bg-blue-500/15',
    badgeBorder: 'border-blue-500/30'
  },
  {
    id: 'purple',
    name: 'Violet Purple',
    hex: '#8b5cf6',
    bgClass: 'bg-[#8b5cf6]',
    glow: 'rgba(139, 92, 246, 0.4)',
    accentText: 'text-purple-400',
    badgeBg: 'bg-purple-500/15',
    badgeBorder: 'border-purple-500/30'
  },
  {
    id: 'rose',
    name: 'Neon Rose',
    hex: '#ec4899',
    bgClass: 'bg-[#ec4899]',
    glow: 'rgba(236, 72, 153, 0.4)',
    accentText: 'text-pink-400',
    badgeBg: 'bg-pink-500/15',
    badgeBorder: 'border-pink-500/30'
  },
  {
    id: 'amber',
    name: 'Amber Gold',
    hex: '#f59e0b',
    bgClass: 'bg-[#f59e0b]',
    glow: 'rgba(245, 158, 11, 0.4)',
    accentText: 'text-amber-400',
    badgeBg: 'bg-amber-500/15',
    badgeBorder: 'border-amber-500/30'
  }
];

export default function LiveDesignEngineMockup() {
  const { isDark } = useTheme();
  const { isEn } = useLanguage();
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'
  const [activeTheme, setActiveTheme] = useState(COLOR_THEMES[0]); // default: Emerald Teal (#10b981)

  // Live Typing Code Animation Engine
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Dynamic TypeScript Code with Active Theme Hex
  const codeLines = useMemo(() => [
    {
      rawText: "import { Velgrid } from '@velgrid/core';",
      render: () => (
        <p>
          <span className="text-sky-400">import</span> &#123;{' '}
          <span className="text-amber-300 font-semibold">Velgrid</span> &#125;{' '}
          <span className="text-sky-400">from</span>{' '}
          <span className="text-rose-400">'@velgrid/core'</span>;
        </p>
      )
    },
    {
      rawText: "async function launch() {",
      className: "pt-2",
      render: () => (
        <p className="pt-2">
          <span className="text-sky-400">async function</span>{' '}
          <span className="text-yellow-300">launch</span>() &#123;
        </p>
      )
    },
    {
      rawText: "  const app = await Velgrid.create({",
      className: "pl-6",
      render: () => (
        <p className="pl-6">
          <span className="text-purple-400">const</span> app ={' '}
          <span className="text-sky-400">await</span>{' '}
          <span className="text-amber-300">Velgrid</span>.
          <span className="text-sky-400">create</span>(&#123;
        </p>
      )
    },
    {
      rawText: "    name: 'Velgrid',",
      className: "pl-12 text-xs",
      render: () => (
        <p className="pl-12 text-xs">
          <span className="text-slate-400">name:</span>{' '}
          <span className="text-rose-400">'Velgrid'</span>,
        </p>
      )
    },
    {
      rawText: `    primaryColor: '${activeTheme.hex}',`,
      className: "pl-12 text-xs",
      render: () => (
        <p className="pl-12 text-xs transition-colors duration-300">
          <span className="text-slate-400">primaryColor:</span>{' '}
          <span
            className="font-bold underline decoration-dotted transition-colors duration-300"
            style={{ color: activeTheme.hex }}
          >
            '{activeTheme.hex}'
          </span>,
        </p>
      )
    },
    {
      rawText: "    uiStyle: 'Premium Modern'",
      className: "pl-12 text-xs",
      render: () => (
        <p className="pl-12 text-xs">
          <span className="text-slate-400">uiStyle:</span>{' '}
          <span className="text-rose-400">'Premium Modern'</span>
        </p>
      )
    },
    {
      rawText: "  });",
      className: "pl-6",
      render: () => (
        <p className="pl-6">&#125;);</p>
      )
    },
    {
      rawText: "  app.render();",
      className: "pl-6 pt-2 text-slate-400",
      render: () => (
        <p className="pl-6 pt-2 text-slate-400">
          app.<span className="text-yellow-300">render</span>();
        </p>
      )
    },
    {
      rawText: "  return 'System Online 🚀';",
      className: "pl-6",
      render: () => (
        <p className="pl-6">
          <span className="text-sky-400">return</span>{' '}
          <span className="text-rose-400">'System Online 🚀'</span>;
        </p>
      )
    },
    {
      rawText: "}",
      render: () => (
        <p>&#125;</p>
      )
    }
  ], [activeTheme]);

  const handleRestartTyping = () => {
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsTypingComplete(false);
  };

  const handleSelectTheme = (theme) => {
    setActiveTheme(theme);
    // Restart typing or re-run launch animation
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsTypingComplete(false);
  };

  useEffect(() => {
    if (isTypingComplete) {
      // Loop re-typing naturally every 8s
      const loopTimer = setTimeout(() => {
        handleRestartTyping();
      }, 8000);
      return () => clearTimeout(loopTimer);
    }

    const currentLine = codeLines[currentLineIndex];
    if (!currentLine) return;

    if (currentCharIndex < currentLine.rawText.length) {
      const char = currentLine.rawText[currentCharIndex];
      let delay = 22;
      if (char === ',' || char === ';') delay = 80;
      if (char === '{' || char === '}') delay = 65;

      const timer = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      if (currentLineIndex < codeLines.length - 1) {
        const nextLineTimer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 60);
        return () => clearTimeout(nextLineTimer);
      } else {
        setIsTypingComplete(true);
      }
    }
  }, [currentLineIndex, currentCharIndex, isTypingComplete, codeLines]);

  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 select-none">
      {/* Top Window Bar: Traffic Light Dots, LIVE DESIGN ENGINE, & 5 Color Palette Buttons */}
      <div className="px-3.5 sm:px-5 py-2.5 sm:py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2">
        {/* Left: 🔴 🟡 🟢 Traffic Lights */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56] shadow-sm" />
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f] shadow-sm" />
        </div>

        {/* Center: (▷) LIVE DESIGN ENGINE */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-slate-300">
          <span
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center text-[8px] sm:text-[9px] font-black transition-colors duration-300"
            style={{
              border: `1.5px solid ${activeTheme.hex}`,
              color: activeTheme.hex
            }}
          >
            ▶
          </span>
          <span className="tracking-wider">LIVE DESIGN ENGINE</span>
        </div>

        {/* Right: 5 Interactive Color Palette Buttons (Klik untuk ganti warna & kodingan!) */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {COLOR_THEMES.map((theme) => {
            const isSelected = activeTheme.id === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => handleSelectTheme(theme)}
                title={`Pilih Warna ${theme.name} (${theme.hex})`}
                aria-label={`Ubah warna ke ${theme.name}`}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-200 cursor-pointer ${theme.bgClass} ${
                  isSelected
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-125 shadow-md'
                    : 'opacity-70 hover:opacity-100 hover:scale-110'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Main Split Body: Left Code Editor, Right Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* Left Side: VS Code Editor (Charcoal Background) */}
        <div className="lg:col-span-6 bg-[#25252b] p-4 sm:p-6 flex flex-col justify-between font-mono text-xs sm:text-sm border-b lg:border-b-0 lg:border-r border-slate-800 text-slate-300 overflow-hidden">
          <div>
            {/* File Tab Bar with Interactive Replay */}
            <div className="flex items-center justify-between pb-2 mb-4 border-b border-slate-700/60">
              <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                <span
                  className="w-2 h-2 rounded-full animate-pulse transition-colors duration-300"
                  style={{ backgroundColor: activeTheme.hex }}
                />
                <span className="text-slate-300 font-semibold">build_config.ts</span>
                <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">• TypeScript</span>
              </div>

              <button
                onClick={handleRestartTyping}
                title="Ketik Ulang Animasi Koding"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Replay</span>
              </button>
            </div>

            {/* Code Body with Real-time Typing Effect & Syntax Highlighting */}
            <div className="space-y-1.5 leading-relaxed overflow-x-auto pb-2 scrollbar-thin min-h-[290px]">
              {codeLines.map((lineItem, idx) => {
                // 1. Baris yang sudah selesai diketik: tampil penuh dengan warna syntax
                if (idx < currentLineIndex) {
                  return <div key={idx}>{lineItem.render()}</div>;
                }

                // 2. Baris yang sedang diketik secara live:
                if (idx === currentLineIndex) {
                  if (isTypingComplete) {
                    return (
                      <div key={idx} className="flex items-center">
                        {lineItem.render()}
                        <span
                          className="w-2 h-4 ml-1 animate-pulse"
                          style={{ backgroundColor: activeTheme.hex }}
                        />
                      </div>
                    );
                  }
                  return (
                    <div key={idx} className={lineItem.className || ''}>
                      <p className="flex items-center">
                        <span className="text-slate-300">
                          {lineItem.rawText.slice(0, currentCharIndex)}
                        </span>
                        <span
                          className="inline-block w-2 h-4 ml-0.5 animate-pulse"
                          style={{ backgroundColor: activeTheme.hex }}
                        />
                      </p>
                    </div>
                  );
                }

                // 3. Baris yang belum tiba gilirannya diketik
                return null;
              })}
            </div>
          </div>

          {/* Bottom Editor Bar */}
          <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              {isTypingComplete ? (
                <>
                  <span
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: activeTheme.hex }}
                  />
                  <span
                    className="font-medium transition-colors duration-300"
                    style={{ color: activeTheme.hex }}
                  >
                    ⚡ Compiled in 24ms • Ready
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: activeTheme.hex }}
                  />
                  <span className="text-slate-300 font-medium font-mono">
                    typing ln {currentLineIndex + 1}, col {currentCharIndex + 1}...
                  </span>
                </>
              )}
            </span>
            <span
              className="font-semibold font-mono transition-colors duration-300"
              style={{ color: activeTheme.hex }}
            >
              UTF-8
            </span>
          </div>
        </div>

        {/* Right Side: Live Interactive Design Preview (Warna Berganti Sesuai Tombol Palet!) */}
        <div className="lg:col-span-6 bg-slate-950 p-3.5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          {/* Top Switcher: [ DESKTOP ] [ MOBILE ] */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center p-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm">
              <button
                onClick={() => setViewMode('desktop')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'desktop'
                    ? 'text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={{
                  backgroundColor: viewMode === 'desktop' ? activeTheme.hex : 'transparent'
                }}
              >
                DESKTOP
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'mobile'
                    ? 'text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={{
                  backgroundColor: viewMode === 'mobile' ? activeTheme.hex : 'transparent'
                }}
              >
                MOBILE
              </button>
            </div>
          </div>

          {/* Device Mockup Canvas with Color Theming */}
          <div className="flex-1 flex items-center justify-center p-2 relative">
            <AnimatePresence mode="wait">
              {viewMode === 'desktop' ? (
                /* Desktop Live Preview Mockup */
                <motion.div
                  key="desktop-mockup"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[420px] bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl p-4 overflow-hidden relative transition-colors duration-300"
                >
                  {/* Subtle Glow Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <VelgridLogo variant="horizontal" size="xs" theme="dark" />
                    </div>
                    {isTypingComplete ? (
                      <span
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border flex items-center gap-1 transition-all duration-300 font-bold"
                        style={{
                          backgroundColor: `${activeTheme.hex}18`,
                          borderColor: `${activeTheme.hex}45`,
                          color: activeTheme.hex
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: activeTheme.hex }}
                        />
                        Live Online
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        Compiling...
                      </span>
                    )}
                  </div>

                  {/* Mockup Hero Card with Dynamic Ambient Color Glow */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/80 text-center relative overflow-hidden">
                    <div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 w-52 h-36 blur-3xl pointer-events-none rounded-full transition-all duration-500 opacity-60"
                      style={{ backgroundColor: activeTheme.hex }}
                    />
                    <p
                      className="text-[11px] font-black uppercase tracking-widest transition-colors duration-300"
                      style={{ color: activeTheme.hex }}
                    >
                      {activeTheme.name}
                    </p>
                    <h4 className="mt-1.5 text-base sm:text-lg font-extrabold text-white font-heading">
                      Wujudkan Solusi Digital
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 max-w-[260px] mx-auto">
                      Website & Aplikasi Mobile Berkecepatan Tinggi
                    </p>

                    {/* Centered Pill Button with Active Color Theme (Mirip Tombol Hijau Futura!) */}
                    <div className="mt-3.5 flex items-center justify-center gap-2">
                      <a
                        href={isEn ? "https://wa.me/6282183952772?text=Hello%20Velgrid!%20I%20am%20interested%20in%20the%20live%20design%20prototype." : "https://wa.me/6282183952772?text=Halo%20Velgrid!%20Saya%20tertarik%20dengan%20live%20design%20prototype%20ini."}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-all duration-300 inline-flex items-center gap-1.5 active:scale-95 cursor-pointer hover:brightness-110"
                        style={{
                          backgroundColor: activeTheme.hex,
                          boxShadow: `0 4px 14px ${activeTheme.hex}40`
                        }}
                      >
                        <span>VELGRID SYSTEM</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* 3 Metric Cards with Dynamic Color Accent */}
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <p className="text-[10px] text-slate-400">Kecepatan</p>
                      <p
                        className="text-xs font-bold transition-colors duration-300"
                        style={{ color: activeTheme.hex }}
                      >
                        0.8s
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <p className="text-[10px] text-slate-400">PageSpeed</p>
                      <p
                        className="text-xs font-bold transition-colors duration-300"
                        style={{ color: activeTheme.hex }}
                      >
                        99+
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <p className="text-[10px] text-slate-400">Garansi</p>
                      <p className="text-xs font-bold text-slate-200">Bebas Bug</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Mobile Live Preview Mockup */
                <motion.div
                  key="mobile-mockup"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[240px] bg-slate-900 rounded-3xl p-3 shadow-2xl border-2 border-slate-800 text-slate-100"
                >
                  {/* Speaker notch */}
                  <div className="w-16 h-1 rounded-full bg-slate-700 mx-auto mb-3" />

                  {/* App Screen inside phone with Color Glow */}
                  <div className="p-3 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 text-center relative overflow-hidden">
                    <div
                      className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-16 blur-xl pointer-events-none opacity-50 transition-all duration-500"
                      style={{ backgroundColor: activeTheme.hex }}
                    />
                    <VelgridLogo variant="icon" size="xs" theme="dark" className="mx-auto mb-2" />
                    <p className="text-[11px] font-extrabold text-white">Velgrid Mobile</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Flutter & React Native 60 FPS</p>
                    <div className="mt-3">
                      <a
                        href={isEn ? "https://wa.me/6282183952772?text=Hello%20Velgrid!%20I%20am%20interested%20in%20the%20mobile%20app%20live%20demo." : "https://wa.me/6282183952772?text=Halo%20Velgrid!%20Saya%20tertarik%20dengan%20live%20mobile%20app%20demo%20ini."}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-3 rounded-lg text-[10px] font-bold text-white transition inline-flex items-center justify-center gap-1 active:scale-95 cursor-pointer hover:brightness-110"
                        style={{
                          backgroundColor: activeTheme.hex,
                          boxShadow: `0 3px 10px ${activeTheme.hex}40`
                        }}
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-2 text-center text-[10px] text-slate-500">
                    Touch & Scroll Responsive
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Live Preview Bar with Active Theme Name */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: activeTheme.hex }}
              />
              <span className="text-slate-300">
                Theme: <strong style={{ color: activeTheme.hex }}>{activeTheme.hex}</strong>
              </span>
            </span>
            <span className="text-slate-500 text-[10px]">Real-time Sync</span>
          </div>
        </div>
      </div>
    </div>
  );
}
