# 🚀 Velmora Tech — Official Landing Page & Web Platform

Modern, ultra-cepat, dan konversi-tinggi platform web untuk **Velmora Tech** (Penyedia solusi web & konsultasi IT untuk UMKM, instansi, & perorangan).

Dibangun sesuai spesifikasi **Product Requirement Document (PRD) v1.2.0** menggunakan arsitektur **React SPA + Tailwind CSS + Lucide Icons**.

---

## ✨ Fitur Utama Sesuai PRD

1. **Hero Section (`<Hero />`)**
   - Headline modern dengan gradien khas Tailwind (`from-blue-600 via-sky-500 to-cyan-400`).
   - Mockup UI interaktif dengan tab *Live Preview* & *Keunggulan Kode*.
   - Direct Click CTA WhatsApp & tombol scroll kalkulator estimasi.
   - Indikator kecepatan loading (< 0.8s) & 100% Mobile Responsive.

2. **Pilihan Layanan & Transparansi Biaya (`<Services />`)**
   - 3 Paket Layanan: **Landing Page Business / UMKM**, **Custom Web Application**, dan **UI/UX & Interactive Prototyping**.
   - Price Transparency Notice yang memisahkan biaya murni jasa teknis dari domain & cloud hosting tahunan.
   - Tombol seleksi terintegrasi otomatis ke *Cost Estimator*.

3. **Portofolio & Showcase Interaktif (`<Portfolio />`)**
   - Filter kategori dinamis berbasis React state (`all`, `landing-page`, `web-app`, `demo`).
   - Proyek unggulan: *E-SIPAT*, *Landing Page Bagas Photocopy*, *Sistem E-Voting Mahasiswa*, *E-Menu Kopi Seduh Senja*, dan *Velmora SaaS UI Prototype*.
   - Modal detail interaktif untuk melihat fitur teknis, metrik dampak, dan tombol uji coba demo.

4. **Kalkulator Estimasi Biaya Real-Time (`<Estimator />`)**
   - Pemilihan paket fondasi + checkbox fitur tambahan (+Katalog WA, +Google Maps, +Admin CMS, +Setup Domain & Hosting, +SEO Pro, dsb.).
   - Kalkulasi harga instan dengan format Rupiah (`Intl.NumberFormat`).
   - Tombol **"Pesan Sesuai Estimasi via WhatsApp"** yang otomatis meng-generate rincian pesan WhatsApp lengkap & rapi.

5. **Alur Kerja Terstruktur (`<Workflow />`)**
   - 4 Tahap visual: *Brief & Requirements* ➔ *Free Staging / Live Demo* ➔ *Refinement & Testing* ➔ *Handover & Launching*.
   - Durasi kerja transparan dan jaminan garansi perbaikan bug.

6. **FAQ Accordion (`<FAQ />`)**
   - Menjawab 6 pertanyaan krusial klien seputar hosting, domain, CMS editability, waktu pengerjaan, dan kepemilikan source code.

7. **Footer & Quick Access (`<Footer />`)**
   - Indikator live status "Available for new projects" dengan animasi pulsing dot hijau.
   - Floating WhatsApp Button di pojok kanan bawah (`fixed bottom-6 right-6`).

---

## 🛠️ Struktur Direktori Proyek

```text
Velmora Tech/
├── dist/                   # Production build bundle
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navbar & mobile dropdown
│   │   ├── Hero.jsx        # Hero headline & interactive preview mockup
│   │   ├── Services.jsx    # 3 layanan & transparansi harga
│   │   ├── Portfolio.jsx   # Filter portofolio & modal showcase
│   │   ├── Estimator.jsx   # Real-time dynamic cost calculator
│   │   ├── Workflow.jsx    # 4 langkah alur pengerjaan
│   │   ├── FAQ.jsx         # Accordion pertanyaan umum
│   │   └── Footer.jsx      # Footer info & floating WA button
│   ├── data/
│   │   ├── portfolioData.js # Dataset portofolio & kategori
│   │   └── servicesData.js  # Dataset paket layanan & rincian fitur
│   ├── App.jsx             # Main layout & state coordinator
│   ├── main.jsx            # React root mount
│   └── index.css           # Tailwind base & custom styles
├── index.html              # HTML shell & Google Fonts (Plus Jakarta Sans)
├── package.json
├── tailwind.config.js
├── vite.config.js
└── prd.text                # Dokumen PRD acuan
```

---

## 💻 Cara Menjalankan Secara Lokal

### 1. Menjalankan Mode Development
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:5173` untuk melihat tampilan live dengan Hot Module Replacement (HMR).

### 2. Membangun untuk Production (Build)
```bash
npm run build
```
Hasil build siap upload akan tersimpan di dalam folder `/dist`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📱 Kontak Resmi & WhatsApp

- **WhatsApp Resmi:** `+62 821-8395-2772` (`6282183952772`)
- **Email:** `contact@velmoratech.com`
- Terpusat di file konfigurasi: `src/config/siteConfig.js`

