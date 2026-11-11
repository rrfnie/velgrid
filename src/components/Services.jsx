import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Database,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { isDark } = useTheme();
  const { isEn } = useLanguage();

  const servicesList = [
    {
      id: 'web-landing',
      icon: Globe,
      iconBg: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
      badge: 'Solusi Web',
      badgeEn: 'Web Solution',
      title: 'Website & Landing Page',
      titleEn: 'Websites & Landing Pages',
      desc: 'Company profile bisnis, landing page promosi produk & UMKM, E-Menu kafe, serta portofolio interaktif dengan loading di bawah 1 detik dan tombol WhatsApp langsung.',
      descEn: 'Business company profiles, modern SME landing pages, cafe E-Menus, and interactive portfolios loading under 1 second with direct WhatsApp order integration.',
      highlights: ['React & Tailwind', 'Skor PageSpeed 90+', 'Tombol Chat WA', 'Desain Responsif Prima']
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
      badge: 'Solusi Mobile',
      badgeEn: 'Mobile Solution',
      title: 'Aplikasi Mobile (Android & iOS)',
      titleEn: 'Mobile Apps (Android & iOS)',
      desc: 'Aplikasi kasir (POS), presensi GPS geofencing, dan katalog mobile berbasis Flutter & React Native dengan performa mulus 60 FPS dan dukungan offline-first.',
      descEn: 'Mobile POS cashier systems, GPS geofencing attendance, and catalog apps engineered with Flutter & React Native featuring buttery-smooth 60 FPS animations.',
      highlights: ['Flutter & React Native', 'Android & iOS Siap Pasang', 'Printer Thermal Bluetooth', 'Offline-First Ready']
    },
    {
      id: 'custom-web-app',
      icon: Database,
      iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
      badge: 'Solusi Sistem',
      badgeEn: 'System Solution',
      title: 'Custom Web App & Sistem Informasi',
      titleEn: 'Custom Web Apps & Dashboards',
      desc: 'Sistem pengarsipan digital instansi (E-SIPAT), platform e-voting mahasiswa, serta dashboard admin CMS untuk mengelola operasional bisnis tanpa ribet koding.',
      descEn: 'Digital archiving portals, campus e-voting platforms, and centralized admin CMS dashboards to effortlessly manage business operations without code.',
      highlights: ['Dashboard Admin CMS', 'Hak Akses Bertingkat', 'Database Terstruktur', 'Garansi Bebas Bug']
    }
  ];

  const handleConsultServices = (serviceName) => {
    siteConfig.openWhatsApp(
      isEn
        ? `Hello Velgrid! I am interested in consulting about ${serviceName} service for my project. Could you share more details?`
        : `Halo Velgrid! Saya tertarik konsultasi mengenai layanan ${serviceName} untuk kebutuhan saya. Boleh info detail dan rekomendasinya?`
    );
  };

  return (
    <section
      id="layanan"
      className={`py-14 sm:py-20 relative scroll-mt-16 transition-colors duration-200 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${
              isDark
                ? 'bg-sky-950/80 border-sky-900/60 text-sky-300'
                : 'bg-sky-50 border-sky-200 text-sky-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>{isEn ? 'Core Capabilities' : 'Layanan Utama'}</span>
          </div>

          <h2
            className={`mt-2.5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {isEn ? 'Tailored Digital Solutions by Velgrid' : 'Layanan Rekayasa Digital Velgrid'}
          </h2>

          <p
            className={`mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {isEn
              ? 'Partnering with students, creators, local businesses, and institutions to engineer fast, robust, and purpose-driven digital products.'
              : 'Partner teknologi untuk mahasiswa, UMKM, kreator, hingga instansi. Kami menghadirkan website dan aplikasi smartphone modern dengan proses mudah dan harga transparan.'}
          </p>
        </div>

        {/* 3 Core Services Cards Grid (Fokus, Simetris & Berkelas) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                onClick={() => handleConsultServices(service.title)}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between border shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    : 'bg-white border-slate-200/90 hover:border-sky-300 hover:shadow-sky-50'
                }`}
              >
                <div>
                  {/* Top Squircle Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-105 ${service.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/80">
                      {isEn ? service.badgeEn : service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-6 text-xl sm:text-2xl font-extrabold tracking-tight group-hover:text-sky-500 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {isEn ? service.titleEn : service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {isEn ? service.descEn : service.desc}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.highlights.map((h, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${
                          isDark
                            ? 'bg-slate-800/80 text-slate-300 border-slate-700/80'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Arrow Link */}
                <div className="mt-7 pt-4 border-t border-slate-800/50 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-500 group-hover:text-sky-400 transition-colors">
                  <span>{isEn ? 'Consult This Service' : 'Konsultasikan Layanan Ini'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Guarantee: Hosting & Domain Included As A Benefit */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-xs sm:text-sm ${
              isDark
                ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>
              {isEn
                ? 'Turnkey Guarantee: Free cloud hosting, SSL HTTPS security, and custom domain setup included in all projects!'
                : 'Jaminan Terima Beres: Gratis cloud hosting cepat, SSL HTTPS aman, dan setup domain resmi sudah include di setiap proyek! ✨'}
            </span>
          </div>
        </div>

        {/* Quick Link to Pricing Section below */}
        <div className="mt-6 text-center">
          <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {isEn ? 'Looking for transparent investment packages and promo discounts? ' : 'Mau lihat paket harga dan klaim promo diskon opening? '}
            <a
              href="#harga"
              className="text-sky-500 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{isEn ? 'Check Transparent Pricing Plans' : 'Lihat Daftar Paket Harga Lengkap'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
