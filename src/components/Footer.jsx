import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUp
} from 'lucide-react';
import VelgridLogo from './VelgridLogo';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isEn } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    siteConfig.openWhatsApp(
      isEn
        ? "Hello Velgrid! I would like to consult about website/app development for my business. Could you share more details?"
        : "Halo Velgrid! Saya ingin konsultasi pembuatan website/aplikasi untuk kebutuhan saya. Boleh info detailnya?"
    );
  };

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 pt-10 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
            {/* Col 1: Brand Info with Official Logo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <VelgridLogo size="lg" theme="dark" />
              </div>

              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                {t.footer.about}
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                </span>
                <span className="font-semibold text-sky-400">{t.footer.statusAvailable}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{t.footer.statusFast}</span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {t.footer.quickNav}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#layanan" className="hover:text-sky-400 transition-colors">
                    {t.nav.services || 'Layanan'}
                  </a>
                </li>
                <li>
                  <a href="#harga" className="hover:text-sky-400 transition-colors">
                    {t.nav.pricing || 'Paket Harga'}
                  </a>
                </li>
                <li>
                  <a href="#portofolio" className="hover:text-sky-400 transition-colors">
                    {t.footer.navPortfolio}
                  </a>
                </li>
                <li>
                  <a href="#testimoni" className="hover:text-sky-400 transition-colors">
                    {t.footer.navTestimonials}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Channels */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {t.footer.contactHeading}
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <a
                    href="https://wa.me/6282183952772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors"
                  >
                    +62 821-8395-2772 (WhatsApp Official)
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email || 'teamvelgrid@gmail.com'}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {siteConfig.email || 'teamvelgrid@gmail.com'}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>{isEn ? 'Indonesia (Serving Clients Worldwide Online)' : 'Indonesia (Melayani Seluruh Wilayah Online)'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="flex items-center gap-1">
              © {new Date().getFullYear()} Velgrid. {t.footer.rights}
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <span>{isEn ? 'Back to Top' : 'Kembali ke Atas'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Action WhatsApp Button */}
      <div className="floating-wa-btn fixed bottom-6 right-6 z-50 group transition-all duration-300">
        <button
          onClick={handleWhatsApp}
          aria-label={isEn ? "Chat on WhatsApp Directly" : "Chat WhatsApp Langsung"}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-sky-400 active:scale-95 text-white shadow-xl shadow-sky-950/40 border border-sky-400/30 transition-all duration-300 cursor-pointer"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white text-blue-600" />
          <span className="font-bold text-xs sm:text-sm tracking-wide hidden sm:inline">
            {isEn ? 'Ask Velgrid' : 'Tanya Velgrid'}
          </span>
        </button>
      </div>
    </>
  );
}
