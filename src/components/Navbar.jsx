import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import VelgridLogo from './VelgridLogo';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { isDark } = useTheme();
  const { t, isEn } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hilangkan floating WA button saat mobile menu terbuka agar tidak tabrakan/dobel
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-nav-open');
    } else {
      document.body.classList.remove('mobile-nav-open');
    }
    return () => {
      document.body.classList.remove('mobile-nav-open');
    };
  }, [isOpen]);

  const navLinks = [
    { label: t.nav.services, href: '#layanan' },
    { label: t.nav.pricing || (isEn ? 'Pricing' : 'Paket Harga'), href: '#harga' },
    { label: t.nav.portfolio, href: '#portofolio' },
    { label: t.nav.testimonials, href: '#testimoni' },
  ];

  const handleWhatsApp = () => {
    siteConfig.openWhatsApp(
      isEn
        ? "Hello Velgrid! I would like to consult about website/app development. Could you share more details?"
        : "Halo Velgrid! Saya ingin konsultasi mengenai pembuatan website/aplikasi untuk kebutuhan saya. Boleh info detailnya?"
    );
  };

  return (
    <nav
      className={`w-full transition-all duration-200 select-none ${
        isDark
          ? 'bg-slate-950/95 text-slate-100 border-b border-slate-800/80'
          : 'bg-white/95 text-slate-900 border-b border-slate-200/80'
      } backdrop-blur-md ${scrolled ? 'shadow-md py-2.5' : 'py-3 sm:py-3.5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Velgrid */}
          <a
            href="#"
            className="flex items-center group cursor-pointer"
            aria-label="Velgrid Beranda"
          >
            <VelgridLogo variant="horizontal" size="sm" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-150 py-1 ${
                  isDark
                    ? 'text-slate-300 hover:text-sky-400'
                    : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA & Language/Theme Toggle Desktop */}
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle />

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 active:scale-95 transition-all duration-150 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>{t.nav.consultWA}</span>
            </button>
          </div>

          {/* Mobile Actions: Language + Theme Toggle di samping Hamburger */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer active:scale-95 ${
                isDark
                  ? 'border-slate-800 text-slate-200 hover:bg-slate-900'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
              aria-label={isOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            className={`md:hidden mt-3 pt-2 pb-3 space-y-1.5 backdrop-blur-md rounded-2xl p-3 shadow-xl border ${
              isDark
                ? 'bg-slate-900/95 border-slate-800 text-slate-100'
                : 'bg-white/95 border-slate-200 text-slate-900'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isDark
                    ? 'text-slate-200 hover:bg-slate-800 hover:text-sky-400'
                    : 'text-slate-700 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className={`pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 transition shadow-sm cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-sky-200" />
                <span>{t.nav.consultWA} (0821-8395-2772)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
