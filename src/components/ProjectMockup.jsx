import React from 'react';
import {
  Globe,
  Smartphone,
  Lock,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  ShoppingBag,
  Camera,
  Coffee,
  Printer
} from 'lucide-react';

export default function ProjectMockup({ project, isModal = false }) {
  const { id, mockupType, mockupDomain, accentColor } = project;

  // 1. E-SIPAT (Sistem Administrasi Persuratan & Arsip)
  if (id === 'e-sipat') {
    return (
      <div className="w-full h-full bg-slate-950 text-slate-100 flex flex-col justify-between p-3.5 sm:p-4 select-none font-sans">
        {/* Browser Top Chrome */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[9px] sm:text-[10px]">
            <Lock className="w-2.5 h-2.5 text-emerald-400" />
            <span>{mockupDomain}</span>
          </div>
          <span className="text-[10px] text-sky-400 font-semibold">v2.4 Live</span>
        </div>

        {/* Dashboard Preview Body */}
        <div className="my-auto py-2 space-y-2.5">
          {/* Mini Stats Grid */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl">
              <span className="text-[9px] text-slate-400 block">Total Berkas</span>
              <span className="text-sm font-extrabold text-white">1.420</span>
              <span className="text-[8px] text-emerald-400 block font-semibold">+14% bln ini</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl">
              <span className="text-[9px] text-slate-400 block">Terverifikasi</span>
              <span className="text-sm font-extrabold text-sky-400">98.4%</span>
              <span className="text-[8px] text-slate-400 block">SLA 24 Jam</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl">
              <span className="text-[9px] text-slate-400 block">Disposisi</span>
              <span className="text-sm font-extrabold text-amber-400">18 Aktif</span>
              <span className="text-[8px] text-slate-400 block">Auto-Routing</span>
            </div>
          </div>

          {/* Table Snippet */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2 space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between text-slate-400 text-[9px] pb-1 border-b border-slate-800 font-medium">
              <span>Nomor Registrasi Surat</span>
              <span>Status Dokumen</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-200 font-mono text-[9px]">SK-Bupati/2024/098</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[8px] font-bold">
                ✓ Selesai
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-200 font-mono text-[9px]">Permohonan-Izin/312</span>
              <span className="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[8px] font-bold">
                ⏳ Verifikasi
              </span>
            </div>
          </div>
        </div>

        {/* Footer Pill */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Enkripsi Database SHA-256</span>
          </span>
          <span className="text-[9px] text-slate-500">Instansi Pemerintah</span>
        </div>
      </div>
    );
  }

  // 2. Velgrid POS Mobile (Aplikasi Kasir Mobile)
  if (id === 'velgrid-pos-mobile') {
    return (
      <div className="w-full h-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col justify-between p-3.5 select-none font-sans">
        {/* Mobile Status Bar & Dynamic Island */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1.5 border-b border-slate-800/80">
          <span className="font-bold text-white text-[10px]">09:41</span>
          <div className="w-16 h-3 bg-slate-800 rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          </div>
          <span className="text-[9px] font-bold text-sky-400">POS Offline-Ready</span>
        </div>

        {/* App Screen Content */}
        <div className="my-auto py-2 space-y-2.5">
          {/* Header Store */}
          <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-2 rounded-xl">
            <div>
              <span className="text-[9px] text-slate-400 block">Outlet Kasir 01</span>
              <span className="text-xs font-bold text-white">Kopi & Roti Kenangan</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-slate-400 block">Omzet Shift Ini</span>
              <span className="text-xs font-extrabold text-sky-400">Rp 2.450.000</span>
            </div>
          </div>

          {/* Product Items Mini Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-200 block">Iced Caramel</span>
                <span className="text-[9px] text-slate-400">Rp 22.000</span>
              </div>
              <span className="w-5 h-5 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs font-bold">
                +
              </span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-200 block">Butter Croissant</span>
                <span className="text-[9px] text-slate-400">Rp 18.000</span>
              </div>
              <span className="w-5 h-5 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs font-bold">
                +
              </span>
            </div>
          </div>

          {/* Action Checkout Button */}
          <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white flex items-center justify-between text-xs font-bold shadow-md shadow-sky-600/30">
            <span className="flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Checkout (3 Item)</span>
            </span>
            <span>Rp 62.000 →</span>
          </div>
        </div>

        {/* Bottom Hardware Support Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[9px] text-slate-400">
          <span>Thermal Bluetooth 58mm</span>
          <span className="text-sky-400 font-semibold">● Terhubung</span>
        </div>
      </div>
    );
  }

  // 3. Kopi Seduh Senja (Landing Page & E-Menu Kafe)
  if (id === 'kopi-seduh-senja') {
    return (
      <div className="w-full h-full bg-[#17120e] text-[#f5ede4] flex flex-col justify-between p-3.5 select-none font-sans">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-[#2d231b] text-[10px] text-[#c4b5a5]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#231b14] border border-[#382b20] text-[#e8ded1] font-mono text-[9px] sm:text-[10px]">
            <Lock className="w-2.5 h-2.5 text-amber-400" />
            <span>{mockupDomain}</span>
          </div>
          <span className="text-[10px] text-amber-400 font-semibold">Scan QR Menu</span>
        </div>

        {/* Content Showcase */}
        <div className="my-auto py-2 space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] text-amber-400 tracking-wider uppercase font-bold block">
                Signature Blend 2024
              </span>
              <h4 className="text-base font-extrabold tracking-tight text-white font-serif">
                Kopi Seduh Senja
              </h4>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
              ★ 4.9 Rating
            </span>
          </div>

          {/* Featured Menu Card */}
          <div className="bg-[#241c16] border border-[#3d2f23] rounded-2xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Es Kopi Gula Aren</span>
                <span className="text-[9px] text-[#b0a090]">Espresso + Aren Organik</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-extrabold text-amber-400 block">Rp 22.000</span>
              <span className="text-[9px] text-emerald-400 font-semibold">Tersedia</span>
            </div>
          </div>
        </div>

        {/* Footer Direct WhatsApp Button */}
        <div className="flex items-center justify-between pt-2 border-t border-[#2d231b] text-[10px]">
          <span className="text-[#a89888] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>Buka 10:00 - 23:00</span>
          </span>
          <span className="px-2 py-0.5 rounded-lg bg-emerald-500 text-white font-bold text-[9px]">
            Direct WA Checkout ↗
          </span>
        </div>
      </div>
    );
  }

  // 4. SiAbsen Mobile (Presensi GPS & Swafoto)
  if (id === 'siabsen-mobile') {
    return (
      <div className="w-full h-full bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-slate-100 flex flex-col justify-between p-3.5 select-none font-sans">
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1.5 border-b border-slate-800">
          <span className="font-bold text-white">07:45</span>
          <div className="w-16 h-3 bg-slate-800 rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          </div>
          <span className="text-indigo-400 font-semibold text-[9px]">GPS Locked</span>
        </div>

        {/* Presence Body */}
        <div className="my-auto py-2 space-y-2.5">
          {/* Geofence Status */}
          <div className="flex items-center justify-between bg-indigo-950/60 border border-indigo-900/60 p-2 rounded-xl">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-[9px] text-slate-300 block">Head Office Jakarta</span>
                <span className="text-[10px] font-bold text-emerald-400">✓ Dalam Radius 12 Meter</span>
              </div>
            </div>
            <span className="text-xs font-mono font-black text-white">07:45 WIB</span>
          </div>

          {/* Big Punch-In Clock Action */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 text-center space-y-1">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-bold">
              <CheckCircle2 className="w-2.5 h-2.5" />
              <span>Status: Tepat Waktu</span>
            </div>
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-500 flex items-center justify-center text-indigo-300">
                <Camera className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-extrabold text-white">Kamera Wajah Aktif</span>
            </div>
          </div>
        </div>

        {/* Footer Geotag Info */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[9px] text-slate-400">
          <span>Anti-Fake GPS Protected</span>
          <span className="text-indigo-400 font-semibold">SiAbsen v3.1</span>
        </div>
      </div>
    );
  }

  // 5. E-Voting (Pemilihan Online Kampus / BEM)
  if (id === 'e-voting') {
    return (
      <div className="w-full h-full bg-slate-950 text-slate-100 flex flex-col justify-between p-3.5 select-none font-sans">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[9px] sm:text-[10px]">
            <Lock className="w-2.5 h-2.5 text-blue-400" />
            <span>{mockupDomain}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE COUNT
          </span>
        </div>

        {/* Quick Count Visual */}
        <div className="my-auto py-2 space-y-2">
          {/* Paslon 01 */}
          <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl space-y-1">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-bold text-white">01. Arya & Nabila</span>
              <span className="font-extrabold text-sky-400">56.4% (1.354 Suara)</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-sky-400 h-full rounded-full" style={{ width: '56.4%' }} />
            </div>
          </div>

          {/* Paslon 02 */}
          <div className="bg-slate-900/90 border border-slate-800 p-2 rounded-xl space-y-1">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-bold text-slate-300">02. Fikri & Zahra</span>
              <span className="font-extrabold text-slate-400">43.6% (1.046 Suara)</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-slate-600 h-full rounded-full" style={{ width: '43.6%' }} />
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[9px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-400">
            <Lock className="w-3 h-3 text-sky-400" />
            <span>Token OTP 1x Pakai</span>
          </span>
          <span className="text-emerald-400 font-semibold">100% Zero Tampering</span>
        </div>
      </div>
    );
  }

  // 6. Bagas Digital Print (Kalkulator Cetak & UMKM)
  if (id === 'bagas-photocopy') {
    return (
      <div className="w-full h-full bg-slate-950 text-slate-100 flex flex-col justify-between p-3.5 select-none font-sans">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[9px] sm:text-[10px]">
            <Lock className="w-2.5 h-2.5 text-cyan-400" />
            <span>{mockupDomain}</span>
          </div>
          <span className="text-[10px] text-cyan-400 font-semibold">Kalkulator Aktif</span>
        </div>

        {/* Calculator Simulation */}
        <div className="my-auto py-2 space-y-2">
          <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400 flex items-center gap-1">
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print Warna A4 Art Paper</span>
              </span>
              <span className="text-white font-mono font-bold">100 Lembar</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-800">
              <span className="text-[9px] text-slate-400">Estimasi Biaya:</span>
              <span className="text-xs font-black text-cyan-400">Rp 75.000</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 text-[9px] text-slate-400">
            <span>✓ Siap Kirim / Ambil di Toko</span>
            <span className="text-emerald-400 font-bold">Buka Hari Ini</span>
          </div>
        </div>

        {/* Footer Order Button */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px]">
          <span className="text-slate-400 text-[9px]">Bagas Percetakan</span>
          <span className="px-2 py-0.5 rounded-lg bg-cyan-600 text-white font-bold text-[9px]">
            Kirim File WA ↗
          </span>
        </div>
      </div>
    );
  }

  // Fallback Generic Tech Mockup
  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 flex flex-col justify-between p-3.5 select-none font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        </div>
        <span className="font-mono text-[9px] text-slate-300">{mockupDomain || 'velgrid.com'}</span>
        <span className="text-sky-400 text-[9px]">Live Staging</span>
      </div>
      <div className="my-auto text-center py-4">
        <Sparkles className="w-6 h-6 text-sky-400 mx-auto mb-1" />
        <span className="text-xs font-bold text-white block">{project.title}</span>
        <span className="text-[10px] text-slate-400">{project.categoryLabel}</span>
      </div>
    </div>
  );
}

