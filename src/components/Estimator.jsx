import React, { useState, useMemo } from 'react';
import {
  Calculator,
  CheckSquare,
  Square,
  MessageCircle,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  Zap,
  Flame,
  Tag,
  Gift
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';

const BASE_PACKAGES = [
  {
    id: 'student-portfolio',
    name: 'Paket Mahasiswa & Personal CV',
    basePrice: 299000,
    originalPrice: 450000,
    tagline: 'Ideal untuk portofolio tugas akhir (TA), CV interaktif & rekruter',
    defaultFeatures: ['Showcase Portofolio & Skill', 'Download CV PDF', 'Hosting Vercel Gratis']
  },
  {
    id: 'landing-page',
    name: 'Landing Page UMKM & Usaha',
    basePrice: 499000,
    originalPrice: 699000,
    tagline: 'Ideal untuk kafe, resto, salon, jasa lokal & promosi produk',
    defaultFeatures: ['Landing Page Responsif Mobile', 'Tombol Order WA', 'Fast Loading']
  },
  {
    id: 'web-app',
    name: 'Custom Web Application',
    basePrice: 1499000,
    originalPrice: 1999000,
    tagline: 'Ideal untuk sistem pencatatan, e-voting, sistem arsip & portal data',
    defaultFeatures: ['Dashboard Admin', 'Autentikasi Login', 'Database Terstruktur']
  },
  {
    id: 'prototype',
    name: 'UI/UX & Interactive Prototype',
    basePrice: 350000,
    originalPrice: 500000,
    tagline: 'Ideal untuk validasi ide, tugas akhir, presentasi & uji alur antarmuka',
    defaultFeatures: ['Desain High-Fidelity', 'Live Staging Vercel', 'User Flow Interaktif']
  }
];

const ADDONS = [
  {
    id: 'catalog-wa',
    name: 'Katalog Produk / E-Menu Digital via WA',
    price: 150000,
    desc: 'Daftar produk/menu foto dengan tombol pilih item langsung kirim ke WhatsApp'
  },
  {
    id: 'maps-location',
    name: 'Integrasi Google Maps & Rute Toko',
    price: 75000,
    desc: 'Peta interaktif, petunjuk arah jalan, dan jam buka-tutup cabang'
  },
  {
    id: 'admin-dashboard',
    name: 'Admin Dashboard Manajemen Konten (CMS)',
    price: 450000,
    desc: 'Panel kontrol mudah untuk ubah teks, foto, harga, dan lihat statistik'
  },
  {
    id: 'domain-hosting',
    name: 'Setup Domain (.com / .id) & Cloud Hosting 1 Tahun',
    price: 300000,
    desc: 'Bantuan pendaftaran nama web, konfigurasi DNS, SSL HTTPS aman, & live server'
  },
  {
    id: 'seo-pro',
    name: 'Optimasi SEO & Google Search Console',
    price: 150000,
    desc: 'Pendaftaran ke Google agar website mudah ditemukan pelanggan saat mencari'
  },
  {
    id: 'multilingual',
    name: 'Fitur Multi-Bahasa (Bilingual ID / EN)',
    price: 200000,
    desc: 'Tombol switch bahasa untuk menjangkau wisatawan atau klien internasional'
  },
  {
    id: 'payment-qris',
    name: 'Integrasi Payment Gateway / QRIS Mockup',
    price: 350000,
    desc: 'Simulasi scan barcode QRIS atau integrasi Midtrans/Xendit untuk pembayaran'
  },
  {
    id: 'extra-maintenance',
    name: 'Garansi & Maintenance Ekstra 3 Bulan',
    price: 200000,
    desc: 'Pendampingan teknis prioritas, backup berkala, dan perbaikan gratis bila ada kendala'
  }
];

export default function Estimator({ selectedPackageId, onSelectPackage }) {
  const { isDark } = useTheme();
  const [activePackageId, setActivePackageId] = useState(
    selectedPackageId || 'landing-page'
  );
  const [selectedAddons, setSelectedAddons] = useState([
    'catalog-wa',
    'domain-hosting'
  ]);
  const [applyOpeningDiscount, setApplyOpeningDiscount] = useState(true);
  const [customNotes, setCustomNotes] = useState('');

  // Update if parent passes change
  React.useEffect(() => {
    if (selectedPackageId) {
      setActivePackageId(selectedPackageId);
    }
  }, [selectedPackageId]);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleReset = () => {
    setActivePackageId('landing-page');
    setSelectedAddons(['catalog-wa', 'domain-hosting']);
    setApplyOpeningDiscount(true);
    setCustomNotes('');
  };

  // Find active package object
  const currentPackage = useMemo(() => {
    return BASE_PACKAGES.find((pkg) => pkg.id === activePackageId) || BASE_PACKAGES[1];
  }, [activePackageId]);

  // Calculate pricing breakdown
  const {
    subtotalAmount,
    discountAmount,
    totalAmount,
    formattedSubtotal,
    formattedDiscount,
    formattedTotal,
    addonsList
  } = useMemo(() => {
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const found = ADDONS.find((a) => a.id === addonId);
      return sum + (found ? found.price : 0);
    }, 0);

    const subtotal = currentPackage.basePrice + addonsTotal;
    // 15% extra opening voucher discount
    const discount = applyOpeningDiscount ? Math.round(subtotal * 0.15) : 0;
    const total = subtotal - discount;

    const fmt = (num) =>
      new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      }).format(num);

    const list = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id))
      .filter(Boolean);

    return {
      subtotalAmount: subtotal,
      discountAmount: discount,
      totalAmount: total,
      formattedSubtotal: fmt(subtotal),
      formattedDiscount: fmt(discount),
      formattedTotal: fmt(total),
      addonsList: list
    };
  }, [currentPackage, selectedAddons, applyOpeningDiscount]);

  // Generate WhatsApp Message
  const handleOrderWhatsApp = () => {
    const formattedBase = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(currentPackage.basePrice);

    let message = `Halo Velgrid! Saya ingin memesan pembuatan website dengan rincian hasil kalkulator estimasi:\n\n`;
    message += `📦 Paket Dasar: ${currentPackage.name} (${formattedBase})\n`;

    if (addonsList.length > 0) {
      message += `🧩 Fitur Tambahan (${addonsList.length} item):\n`;
      addonsList.forEach((item) => {
        const itemPrice = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 0
        }).format(item.price);
        message += `   • ${item.name} (${itemPrice})\n`;
      });
    } else {
      message += `🧩 Fitur Tambahan: Belum ada (Paket Standar)\n`;
    }

    message += `\n📋 Subtotal: ${formattedSubtotal}\n`;

    if (applyOpeningDiscount) {
      message += `🎉 Kupon Promo: OPENINGVELGRID (Diskon Spesial 15% - Hemat ${formattedDiscount})\n`;
      message += `💰 Total Setelah Diskon: ${formattedTotal}\n`;
    } else {
      message += `💰 Total Biaya: ${formattedTotal}\n`;
    }

    if (customNotes.trim()) {
      message += `📝 Catatan Tambahan: "${customNotes.trim()}"\n`;
    }

    message += `\nMohon info ketersediaan slot pengerjaan dan cara klaim promo opening-nya ya. Terima kasih!`;

    siteConfig.openWhatsApp(message);
  };

  return (
    <section
      id="estimator"
      className={`py-20 relative scroll-mt-16 transition-colors duration-200 ${
        isDark ? 'bg-slate-950/90 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${
              isDark
                ? 'bg-sky-950/80 border-sky-900/60 text-sky-300'
                : 'bg-sky-100/80 border-sky-200/80 text-sky-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-sky-500" />
            <span>Kalkulator Transparan & Diskon Opening</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Hitung Estimasi Biaya Website Anda Sendiri
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Pilih paket dan centang fitur yang Anda butuhkan. Nikmati potongan ekstra diskon opening tanpa biaya tersembunyi!
          </p>
        </div>

        {/* Estimator Container Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Base Package Selection */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5 font-heading">
                  <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 flex items-center justify-center text-xs">
                    1
                  </span>
                  Pilih Paket Fondasi
                </span>
                <span className="text-xs text-slate-400">Pilih 1 paket utama</span>
              </div>

              <div className="mt-5 space-y-3">
                {BASE_PACKAGES.map((pkg) => {
                  const isSelected = activePackageId === pkg.id;
                  const priceStr = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0
                  }).format(pkg.basePrice);
                  const originalPriceStr = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0
                  }).format(pkg.originalPrice);

                  return (
                    <div
                      key={pkg.id}
                      onClick={() => {
                        setActivePackageId(pkg.id);
                        if (onSelectPackage) onSelectPackage(pkg.id);
                      }}
                      className={`cursor-pointer rounded-2xl p-4 transition-all border ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50/40 dark:bg-sky-950/60 ring-2 ring-sky-500/20'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/90'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                              isSelected
                                ? 'border-sky-600 bg-sky-600 text-white'
                                : 'border-slate-300 dark:border-slate-700'
                            }`}
                          >
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <div>
                            <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                              {pkg.name}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{pkg.tagline}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-[11px] text-slate-400 dark:text-slate-500 line-through block">
                            {originalPriceStr}
                          </span>
                          <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white font-heading">
                            {priceStr}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Feature Checkboxes */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5 font-heading">
                  <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 flex items-center justify-center text-xs">
                    2
                  </span>
                  Pilih Fitur Tambahan (Opsional)
                </span>
                <span className="text-xs text-slate-400">
                  {selectedAddons.length} terpilih
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const priceStr = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0
                  }).format(addon.price);

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer rounded-xl p-3.5 border transition-all ${
                        isChecked
                          ? 'border-sky-400 dark:border-sky-500/80 bg-sky-50/50 dark:bg-sky-950/60 text-slate-900 dark:text-white shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 text-sky-600 dark:text-sky-400 flex-shrink-0">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 fill-sky-600 dark:fill-sky-500 text-white" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-300 dark:text-slate-700" />
                          )}
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-bold leading-tight block">
                            {addon.name}
                          </span>
                          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                            {addon.desc}
                          </p>
                          <p className="mt-2 text-xs font-extrabold text-sky-700 dark:text-sky-400 font-heading">
                            +{priceStr}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Optional Custom Note */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Catatan Kebutuhan Khusus (Opsional):
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Misal: Butuh integrasi 3 cabang resto, reservasi meja, atau domain .my.id..."
                  rows={2}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Real-Time Price Summary */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl shadow-slate-950/20 border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-300 font-heading">
                    Ringkasan Estimasi
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition cursor-pointer"
                  title="Reset pilihan"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>

              {/* Selected Package Breakdown */}
              <div className="mt-5 space-y-3">
                <div className="flex items-start justify-between text-xs">
                  <div>
                    <span className="text-slate-400">Paket Fondasi:</span>
                    <p className="font-semibold text-slate-100 mt-0.5">
                      {currentPackage.name}
                    </p>
                  </div>
                  <span className="font-mono text-slate-200 whitespace-nowrap">
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 0
                    }).format(currentPackage.basePrice)}
                  </span>
                </div>

                {/* Selected Addons breakdown */}
                {addonsList.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-xs text-slate-400 mb-2">
                      Fitur Tambahan ({addonsList.length} item):
                    </p>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                      {addonsList.map((addon) => (
                        <div
                          key={addon.id}
                          className="flex items-center justify-between text-[11px] text-slate-300"
                        >
                          <span className="truncate max-w-[200px]">{addon.name}</span>
                          <span className="font-mono text-sky-300">
                            +{new Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                              maximumFractionDigits: 0
                            }).format(addon.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Subtotal & Promo Toggle */}
              <div className="mt-5 pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Subtotal Estimasi:</span>
                  <span className="font-mono text-slate-300">{formattedSubtotal}</span>
                </div>

                {/* Opening Voucher Toggle */}
                <div
                  onClick={() => setApplyOpeningDiscount(!applyOpeningDiscount)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    applyOpeningDiscount
                      ? 'bg-sky-950/40 border-sky-500/40 text-sky-200'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-white flex items-center gap-1.5">
                          Kupon: OPENINGVELGRID
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">
                            -15%
                          </span>
                        </p>
                        <p className="text-[11px] text-sky-300/80 mt-0.5">
                          Diskon Spesial Grand Opening (10 Klien Pertama)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {applyOpeningDiscount ? (
                        <span className="text-xs font-extrabold text-sky-400">
                          -{formattedDiscount}
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-500">Klaim</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Calculation Display */}
              <div className="mt-5 pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Total Estimasi Pengerjaan:
                </span>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent font-heading">
                    {formattedTotal}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  * Biaya fleksibel & dapat disesuaikan kembali saat sesi konsultasi.
                </p>
              </div>

              {/* Direct Order WhatsApp CTA */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleOrderWhatsApp}
                  className="w-full py-4 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white shadow-lg shadow-sky-500/25 active:scale-95 transition duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pesan Sesuai Estimasi via WhatsApp</span>
                </button>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Garansi & Transparansi:</span>
                  </div>
                  <p className="text-slate-400">
                    Kirim rincian ini ke WhatsApp Velgrid untuk langsung mengunci kuota promo diskon opening Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
