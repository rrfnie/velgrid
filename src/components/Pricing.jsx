import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingCategories, pricingPlans } from '../data/servicesData';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Clock,
  Flame,
  Tag,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Pricing() {
  const { isDark } = useTheme();
  const { t, lang, isEn } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('web');

  const plansGroup = pricingPlans[lang] || pricingPlans.id;
  const currentPlans = plansGroup[activeCategory] || plansGroup.web;

  const handleSelectPlan = (plan) => {
    siteConfig.openWhatsApp(plan.whatsappMessage);
  };

  return (
    <section
      id="harga"
      className={`py-14 sm:py-20 relative scroll-mt-16 transition-colors duration-200 ${
        isDark ? 'bg-slate-950/80 text-slate-100' : 'bg-slate-50/80 text-slate-900'
      }`}
    >
      {/* Anchor alias so #pricing also scrolls directly here */}
      <div id="pricing" className="absolute -top-24" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title on Left & Tab Switcher on Right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2">
          {/* Left Title, Promo Badge & Subtitle */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 dark:text-rose-400">
              <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>{t.services.promoBadge}</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {isEn ? 'Transparent Pricing Plans' : 'Paket Investasi & Harga'}
            </h2>
            <p
              className={`mt-2 sm:mt-3 text-sm sm:text-base max-w-xl font-normal ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {t.services.desc}
            </p>
          </div>

          {/* Right Category Pill Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900 border border-slate-800 shadow-sm self-start md:self-auto">
            {pricingCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative border ${
                  plan.isPopular
                    ? isDark
                      ? 'bg-gradient-to-b from-sky-950/40 to-slate-900/95 border-sky-500/50 shadow-xl shadow-sky-950/30 ring-1 ring-sky-500/30'
                      : 'bg-gradient-to-b from-sky-50/60 to-white border-sky-400 shadow-xl shadow-sky-100 ring-1 ring-sky-400/30'
                    : isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/30">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Tier & Title */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold tracking-wider uppercase ${
                        plan.isPopular ? 'text-sky-500' : isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {plan.tier}
                    </span>
                    {plan.timeline && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400">
                        <Clock className="w-3 h-3" />
                        {plan.timeline}
                      </span>
                    )}
                  </div>

                  <h3 className={`mt-2 text-xl sm:text-2xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {plan.title}
                  </h3>

                  <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-5 pb-5 border-b border-slate-800/80 dark:border-slate-800">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-slate-400">Rp</span>
                      <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span className="text-xs text-slate-400 font-medium">{plan.priceSuffix}</span>
                      )}
                    </div>

                    {/* Original Price / Discount Badge */}
                    <div className="mt-1.5 flex items-center gap-2">
                      {plan.originalPrice && (
                        <span className="text-xs line-through text-slate-500">
                          Rp {plan.originalPrice}
                        </span>
                      )}
                      {plan.discountBadge && (
                        <span className="text-[10px] font-bold text-rose-500 px-2 py-0.5 rounded-md bg-rose-500/10">
                          {plan.discountBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-5 space-y-3">
                    <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {isEn ? 'Included Features:' : 'Fitur Unggulan:'}
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 px-5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg shadow-sky-500/25 active:scale-95'
                        : isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 active:scale-95'
                        : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-95'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Ownership & Peace-of-Mind Guarantee Footer */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-xs sm:text-sm ${
              isDark
                ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                : 'bg-white border-slate-200 text-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>
              {isEn
                ? '100% Full Code Ownership • Free Bug Warranty • Free Staging Demo Before Payment'
                : '100% Hak Milik Kode • Garansi Bebas Bug • Live Demo Sebelum Pelunasan'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

