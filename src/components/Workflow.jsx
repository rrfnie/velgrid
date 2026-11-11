import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  PlayCircle,
  Sliders,
  Rocket,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const steps = [
  {
    step: '01',
    title: 'Brief & Requirements',
    subtitle: 'Konsultasi & Pengumpulan Bahan',
    desc: 'Kami mendengarkan visi dan kebutuhan Anda, menganalisis struktur halaman yang dibutuhkan, dan mengumpulkan materi yang diperlukan.',
    icon: FileText,
    duration: 'Hari ke-1',
    highlight: 'Gratis Sesi Diskusi'
  },
  {
    step: '02',
    title: 'Free Staging / Live Demo',
    subtitle: 'Pembuatan Draft Demo Nyata',
    desc: 'Kami merancang prototipe live di URL staging (Vercel/TasteWP) agar Anda bisa langsung mencoba klik, navigasi, dan tampilan tanpa risiko.',
    icon: PlayCircle,
    duration: 'Hari ke 2 - 3',
    highlight: 'Bisa Diuji Langsung di HP'
  },
  {
    step: '03',
    title: 'Refinement & Testing',
    subtitle: 'Penyelarasan & Uji Responsif',
    desc: 'Menyesuaikan masukan/revisi dari Anda, optimasi skor kecepatan loading (Google PageSpeed), serta pengecekan kelancaran tombol pesan WhatsApp.',
    icon: Sliders,
    duration: 'Hari ke-4',
    highlight: 'Garansi Bebas Bug'
  },
  {
    step: '04',
    title: 'Handover & Launching',
    subtitle: 'Go-Live ke Domain Utama',
    desc: 'Penghubungan ke domain resmi (.com / .id), penyerahan akun & source code penuh, serta panduan singkat pengelolaan website.',
    icon: Rocket,
    duration: 'Hari ke-5',
    highlight: 'Aset 100% Milik Anda'
  }
];

export default function Workflow() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const handleConsult = () => {
    siteConfig.openWhatsApp(
      "Halo Velgrid! Saya ingin konsultasi alur pengerjaan website/aplikasi untuk kebutuhan saya. Bagaimana langkah awalnya?"
    );
  };

  return (
    <section
      id="alur-kerja"
      className={`py-12 sm:py-16 relative scroll-mt-16 transition-colors duration-200 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${
              isDark
                ? 'bg-sky-950/80 border-sky-900/60 text-sky-300'
                : 'bg-blue-50 border-blue-100 text-blue-700'
            }`}
          >
            <span>{t.workflow.badge}</span>
          </div>
          <h2
            className={`mt-2.5 text-3xl sm:text-4xl font-extrabold tracking-tight font-heading ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t.workflow.heading}
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t.workflow.desc}
          </p>
        </div>

        {/* Timeline Steps Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group border ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-sky-500/50 hover:shadow-xl'
                    : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-lg'
                }`}
              >
                {/* Step Number Top Badge */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-3xl font-black font-mono transition-colors ${
                        isDark ? 'text-slate-800 group-hover:text-sky-500/30' : 'text-slate-200 group-hover:text-sky-500/30'
                      }`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 border ${
                        isDark
                          ? 'bg-sky-950/80 text-sky-300 border-sky-900/50'
                          : 'bg-sky-50 text-sky-700 border-sky-100'
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      {item.duration}
                    </span>
                  </div>

                  {/* Icon Box */}
                  <div className="mt-4 w-12 h-12 rounded-xl bg-slate-900 text-sky-400 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className={`mt-4 text-base font-bold font-heading ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-500 mt-0.5">
                    {item.subtitle}
                  </p>

                  <p
                    className={`mt-2.5 text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Highlight Tag Bottom */}
                <div
                  className={`mt-6 pt-3 border-t flex items-center gap-1.5 text-[11px] font-bold ${
                    isDark ? 'border-slate-800 text-sky-400' : 'border-slate-100 text-sky-600'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Bottom Trust Guarantee */}
        <div
          className={`mt-8 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5 border ${
            isDark
              ? 'bg-slate-900/80 border-slate-800'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className={`text-base font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                100% Garansi Kepuasan & Uji Coba Tanpa Risiko
              </h4>
              <p
                className={`text-xs sm:text-sm mt-0.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Kami buatkan dulu link staging gratis. Anda bayar pelunasan hanya ketika sistem sudah sesuai dengan ekspektasi Anda.
              </p>
            </div>
          </div>

          <button
            onClick={handleConsult}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 active:scale-95 transition shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Mulai Konsultasi Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
