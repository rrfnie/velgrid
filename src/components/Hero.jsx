import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import VelgridLogo from './VelgridLogo';
import LiveDesignEngineMockup from './LiveDesignEngineMockup';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { isDark } = useTheme();
  const { t, isEn } = useLanguage();

  const handleWhatsApp = (topic = "Website & Mobile App") => {
    siteConfig.openWhatsApp(
      isEn
        ? `Hello Velgrid! I am interested in consulting about ${topic}. Can we schedule a free consultation session and see a live staging demo?`
        : `Halo Velgrid! Saya tertarik konsultasi pembuatan ${topic} untuk kebutuhan saya. Boleh jadwalkan sesi konsultasi gratis & lihat live staging demo-nya?`
    );
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`relative overflow-hidden pt-6 pb-8 md:pt-10 md:pb-12 transition-colors duration-200 ${
        isDark
          ? 'bg-slate-950 text-slate-100'
          : 'bg-white text-slate-900'
      }`}
    >
      {/* Subtle Grid Pattern (Linear/Vercel Aesthetic - Anti AI-Slop) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-40"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)'
            : 'radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Top Glow (Velgrid Signature Sky Blue & Royal Blue Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-sky-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Pill (Velgrid Signature White & Electric Blue Pill) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-lg border border-slate-200/90 select-none transition-transform hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <VelgridLogo variant="horizontal" size="xs" theme="light" />
            <span className="text-slate-300 font-light text-xs">|</span>
            <span className="text-sky-600 font-black text-[11px] tracking-widest uppercase">
              {t.hero.pill}
            </span>
          </div>
        </motion.div>

        {/* Main Headline (Velgrid Signature White & Vibrant Electric Blue Typography) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1
            className={`text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.08] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            <span>{t.hero.headline1}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {t.hero.headline2}
            </span>
          </h1>

          <p
            className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t.hero.subtext}
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => handleWhatsApp('Konsultasi Proyek')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 active:scale-95 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer group"
            >
              <MessageCircle className="w-5 h-5 text-sky-100 group-hover:scale-110 transition-transform" />
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('layanan')}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base active:scale-95 shadow-sm hover:shadow transition-all duration-200 cursor-pointer border ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300/80'
              }`}
            >
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Quality Trust Badges */}
          <div
            className={`mt-6 pt-4 border-t flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-600'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span>{t.hero.badge1}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span>{t.hero.badge2}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span>{t.hero.badge3}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span>{t.hero.badge4}</span>
            </div>
          </div>
        </motion.div>

        {/* Live Design Engine Showcase with Code Editor & Split Preview (Persis Screenshot Futura) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 sm:mt-10 max-w-5xl mx-auto"
        >
          <LiveDesignEngineMockup />
        </motion.div>
      </div>
    </section>
  );
}
