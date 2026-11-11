import React, { useState } from 'react';
import { ArrowRight, X, Flame } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { t, isEn } = useLanguage();

  if (!isVisible) return null;

  const handleClaimPromo = () => {
    siteConfig.openWhatsApp(
      isEn
        ? "Hello Velgrid! I would like to claim the 20% Grand Opening discount for my system development (Web/Mobile). Are there slots still available?"
        : "Halo Velgrid! Saya mau klaim PROMO GRAND OPENING DISKON 20% untuk pembuatan sistem (Web/Mobile App). Apakah kuota slot diskonnya masih tersedia?"
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 text-white text-xs sm:text-sm font-semibold py-2 px-4 shadow-sm w-full relative z-30 border-b border-sky-600/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wide animate-pulse">
            <Flame className="w-3 h-3 fill-amber-950" />
            {t.promo.badge}
          </span>
          <p className="truncate text-slate-100 text-xs sm:text-sm">
            <span className="font-bold text-white">{t.promo.title}</span> {t.promo.desc} <span className="underline decoration-amber-300 font-extrabold text-amber-300">{t.promo.slots}</span>
          </p>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={handleClaimPromo}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-sky-800 font-bold text-[11px] sm:text-xs shadow-sm transition active:scale-95 cursor-pointer"
          >
            <span className="hidden sm:inline">{t.promo.claim}</span>
            <span className="sm:hidden">{t.promo.claimShort}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Tutup banner promo"
            className="p-1 rounded-md text-sky-200 hover:text-white hover:bg-sky-700/50 transition cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
