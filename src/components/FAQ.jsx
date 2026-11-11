import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';

const faqItems = [
  {
    q: 'Berapa lama waktu pengerjaan website dan aplikasi mobile di Velgrid?',
    a: 'Untuk Starter Web dan Landing Page UMKM, pengerjaan berkisar 2 hingga 4 hari kerja setelah materi terkumpul. Untuk Paket Bisnis (Company Profile), waktu pengerjaan 3 hingga 7 hari kerja. Sedangkan untuk Aplikasi Mobile (Android & iOS) dan Custom Web App, berkisar 1 hingga 3 minggu sesuai ruang lingkup modul.'
  },
  {
    q: 'Apakah biaya domain dan hosting sudah termasuk?',
    a: 'Untuk Paket Bisnis (Company Profile), domain resmi (.COM / .ID) dan cloud hosting cepat 1 tahun sudah termasuk gratis tanpa biaya tersembunyi. Untuk Paket Starter Web, sistem sudah include Cloud Serverless Hosting dan SSL HTTPS gratis selamanya (bebas biaya sewa server tahunan). Jika Anda ingin dibuatkan domain kustom (.COM/.ID) atau akun hosting cPanel pribadi terima beres 1 tahun penuh, tersedia opsi add-on hemat mulai 250rb-an!'
  },
  {
    q: 'Apakah saya bisa mengubah konten dan foto sendiri setelah website jadi?',
    a: 'Tentu saja! Pada paket yang dilengkapi Admin Panel (CMS), Anda dapat login dengan mudah dari laptop maupun ponsel untuk mengganti foto, mengubah teks harga, menambah artikel, dan memantau formulir kontak tanpa perlu paham koding.'
  },
  {
    q: 'Bagaimana alur dan sistem pembayarannya?',
    a: 'Sangat aman dan terstruktur. Setelah brief awal dan kesepakatan ruang lingkup, klien membayarkan DP (Down Payment) sebesar 40-50%. Sisa pelunasan hanya dilakukan setelah Anda menguji coba live staging demo dan sistem sudah 100% sesuai dengan ekspektasi Anda.'
  },
  {
    q: 'Apakah performa website dan aplikasi smartphone dijamin cepat?',
    a: 'Pasti! Kami menerapkan standar arsitektur modern berbasis React & Tailwind CSS untuk web (skor Google PageSpeed 90+ dan waktu muat di bawah 1 detik), serta Flutter / React Native untuk aplikasi mobile dengan animasi mulus 60 FPS.'
  },
  {
    q: 'Apakah saya mendapatkan seluruh berkas source code dan akses kepemilikan?',
    a: 'Ya, 100% hak milik Anda. Seluruh berkas source code mentah, database, akses akun, dan aset desain diserahkan seutuhnya saat sesi serah terima tanpa ada keterikatan lisensi rahasia atau sistem terkunci.'
  }
];

export default function FAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleConsult = () => {
    siteConfig.openWhatsApp(
      "Halo Velgrid! Saya ada pertanyaan lain yang belum tercantum di FAQ. Boleh tanya-tanya sebentar?"
    );
  };

  return (
    <section
      id="faq"
      className={`py-12 sm:py-16 relative scroll-mt-16 transition-colors duration-200 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50/70 text-slate-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${
              isDark
                ? 'bg-slate-800 border-slate-700 text-slate-300'
                : 'bg-white border-slate-200 text-slate-700 shadow-sm'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-sky-500" />
            <span>Tanya Jawab Seputar Velgrid</span>
          </div>
          <h2
            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Semua hal yang perlu Anda ketahui sebelum memesan layanan pembuatan web dan aplikasi mobile di Velgrid.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/90'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className={`w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold transition duration-150 cursor-pointer ${
                    isDark ? 'text-white hover:text-sky-400' : 'text-slate-900 hover:text-sky-600'
                  }`}
                >
                  <span className="text-sm sm:text-base pr-4">{item.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                      isOpen
                        ? 'transform rotate-180 bg-sky-500 text-white'
                        : isDark
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className={`px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed border-t pt-3.5 ${
                      isDark
                        ? 'text-slate-300 border-slate-800/80 bg-slate-950/40'
                        : 'text-slate-600 border-slate-100 bg-slate-50/50'
                    }`}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Question Prompt */}
        <div className="mt-12 text-center">
          <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Masih ada pertanyaan yang belum terjawab?{' '}
            <button
              onClick={handleConsult}
              className="text-sky-500 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Chat Langsung dengan Tim Velgrid
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
