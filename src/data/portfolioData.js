// Data Portofolio & Showcase Velgrid (Web & Mobile Solutions)
// Didesain khusus dengan visual UI Mockup Digital modern tanpa foto mentah
// Mendukung dwi-bahasa (ID & EN)

export const portfolioCategories = [
  { id: "all", label: "Semua Proyek", labelEn: "All Projects" },
  { id: "web", label: "Website & Landing Page", labelEn: "Websites & Landing Pages" },
  { id: "mobile", label: "Aplikasi Mobile (Android/iOS)", labelEn: "Mobile Apps (Android/iOS)" },
  { id: "web-app", label: "Sistem & Web App Dinamis", labelEn: "Dynamic Systems & Web Apps" },
];

export const portfolioData = [
  {
    id: "e-sipat",
    title: "E-SIPAT — Pelayanan & Pengarsipan Digital",
    titleEn: "E-SIPAT — Digital Archiving & Public Service System",
    category: "web-app",
    categoryLabel: "Sistem & Web App",
    categoryLabelEn: "System & Web App",
    mockupType: "browser",
    mockupDomain: "esipat.instansi.go.id",
    accentColor: "sky",
    client: "Instansi Layanan Publik",
    clientEn: "Public Service Institution",
    period: "2024",
    summary:
      "Sistem otomasi surat menyurat, pengarsipan berkas dinas, dan dashboard statistik permohonan warga secara terpusat dan aman.",
    summaryEn:
      "Automated document correspondence, official archiving, and real-time public request analytics with secure centralized storage.",
    techStack: ["React", "Tailwind CSS", "PHP / Laravel", "MySQL"],
    metrics: "Efisiensi administrasi +70%, 1.200+ berkas terkelola",
    metricsEn: "Administrative efficiency +70%, 1,200+ archives managed",
    features: [
      "Dashboard admin dengan grafik permohonan real-time",
      "Sistem nomor surat otomatis & QR Code verifikasi",
      "Manajemen hak akses bertingkat (Operator, Verifikator, Pimpinan)",
      "Pencarian cerdas arsip berkas dinas dalam hitungan detik"
    ],
    featuresEn: [
      "Admin dashboard with real-time public request analytics",
      "Automatic registry numbering & QR Code verification",
      "Role-based multi-tier access control (Operator, Auditor, Executive)",
      "Intelligent indexing and instant document archive retrieval"
    ],
    demoUrl: "https://esipat-demo.vercel.app",
    isLive: true
  },
  {
    id: "velgrid-pos-mobile",
    title: "Velgrid POS — Kasir & Inventori Mobile",
    titleEn: "Velgrid POS — Mobile Cashier & Inventory System",
    category: "mobile",
    categoryLabel: "Aplikasi Mobile",
    categoryLabelEn: "Mobile Application",
    mockupType: "mobile",
    mockupDomain: "Velgrid POS App",
    accentColor: "emerald",
    client: "Retail & UMKM Modern",
    clientEn: "Modern Retail & Local Store",
    period: "2024",
    summary:
      "Aplikasi kasir mobile cross-platform (Android & iOS) dengan pemindai barcode kamera, pencatatan kas harian, dan cetak struk Bluetooth thermal.",
    summaryEn:
      "Cross-platform cashier app (Android & iOS) featuring built-in camera barcode scanning, daily revenue logs, and wireless Bluetooth thermal receipt printing.",
    techStack: ["Flutter", "Dart", "Firebase", "SQLite Local"],
    metrics: "Proses transaksi 3x lebih cepat, 100% offline-ready",
    metricsEn: "Transaction processing 3x faster, 100% offline-ready",
    features: [
      "Pemindaian barcode produk super responsif via kamera HP",
      "Koneksi printer thermal Bluetooth tanpa instalasi driver rumit",
      "Sinkronisasi data otomatis saat terhubung internet (Offline-First)",
      "Laporan laba kotor & omzet harian otomatis per shift kasir"
    ],
    featuresEn: [
      "Ultra-responsive product barcode scanning using phone camera",
      "Seamless Bluetooth thermal printer connection without extra drivers",
      "Automatic offline-first cloud data sync upon internet reconnect",
      "Automated gross profit & daily turnover reports per cashier shift"
    ],
    demoUrl: "https://pos-demo.velgrid.com",
    isLive: true
  },
  {
    id: "kopi-seduh-senja",
    title: "Kopi Seduh Senja — E-Menu & Landing Page Kafe",
    titleEn: "Kopi Seduh Senja — Digital E-Menu & Cafe Landing Page",
    category: "web",
    categoryLabel: "Website & Landing Page",
    categoryLabelEn: "Website & Landing Page",
    mockupType: "browser",
    mockupDomain: "seduhsenja.id",
    accentColor: "amber",
    client: "Kopi Seduh Senja F&B",
    clientEn: "Kopi Seduh Senja Coffee & Eatery",
    period: "2024",
    summary:
      "Landing page kafe dengan katalog menu digital visual aesthetic, filter kategori minuman/makanan, jam operasional, dan pemesanan meja via WhatsApp.",
    summaryEn:
      "Aesthetic cafe landing page with an interactive digital menu, flavor category filtering, operating hours, and instant table reservation via WhatsApp.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "WA API"],
    metrics: "Tingkat pembacaan menu naik +60% via scan QR meja",
    metricsEn: "Menu browse rate increased +60% via table QR codes",
    features: [
      "Katalog E-Menu digital responsif dengan foto estetik & filter rasa",
      "Keranjang belanja simpel untuk reservasi & pesanan take-away",
      "Format pesan WhatsApp otomatis dengan rincian harga akurat",
      "Galeri suasana kafe & integrasi titik Google Maps lokasi"
    ],
    featuresEn: [
      "Responsive digital E-Menu with aesthetic cards & flavor filters",
      "Frictionless cart for table reservations and takeaway orders",
      "Auto-formatted WhatsApp order messages with itemized pricing",
      "Atmospheric photography showcase & direct Google Maps navigation"
    ],
    demoUrl: "https://seduhsenja-cafe.vercel.app",
    isLive: true
  },
  {
    id: "siabsen-mobile",
    title: "SiAbsen — Presensi Karyawan & Geofencing GPS",
    titleEn: "SiAbsen — Employee Attendance & GPS Geofencing",
    category: "mobile",
    categoryLabel: "Aplikasi Mobile",
    categoryLabelEn: "Mobile Application",
    mockupType: "mobile",
    mockupDomain: "SiAbsen Mobile",
    accentColor: "indigo",
    client: "Perusahaan Logistik & Lapangan",
    clientEn: "Field Operations & Logistics Co.",
    period: "2024",
    summary:
      "Aplikasi absensi mobile dengan validasi radius lokasi GPS (anti fake GPS), swafoto wajah (selfie camera), dan rekapitulasi kehadiran otomatis.",
    summaryEn:
      "Enterprise attendance mobile app with high-precision GPS geofencing (anti-spoofing), facial selfie verification, and automated payroll reports.",
    techStack: ["React Native", "Expo", "Node.js REST", "PostgreSQL"],
    metrics: "Tingkat kedisiplinan 99.2%, cegah kecurangan absensi",
    metricsEn: "Discipline rate 99.2%, eliminated attendance fraud",
    features: [
      "Validasi radius koordinat GPS akurat dengan geofence kantor",
      "Verifikasi kehadiran berbasis swafoto kamera depan",
      "Pengajuan cuti, sakit, dan izin langsung dari genggaman HP",
      "Dashboard admin web untuk ekspor rekap gaji bulanan (payroll)"
    ],
    featuresEn: [
      "Precise office-radius GPS geofence coordinate verification",
      "Front-facing camera selfie timestamped presence check",
      "Direct mobile leave requests, illness notifications, and permits",
      "Web admin management dashboard for monthly payroll export"
    ],
    demoUrl: "https://siabsen-demo.velgrid.com",
    isLive: true
  },
  {
    id: "e-voting",
    title: "E-Voting — Pemilihan Suara Online Kampus",
    titleEn: "E-Voting — Campus Digital Ballot & Election Platform",
    category: "web-app",
    categoryLabel: "Sistem & Web App",
    categoryLabelEn: "System & Web App",
    mockupType: "browser",
    mockupDomain: "evoting.kampus.ac.id",
    accentColor: "blue",
    client: "Organisasi Kampus & BEM",
    clientEn: "University Student Union",
    period: "2024",
    summary:
      "Platform pemungutan suara online independen berbasis token rahasia satu kali pakai, penghitungan cepat real-time, dan audit trail perolehan suara.",
    summaryEn:
      "Tamper-proof online voting platform powered by single-use hashed tokens, encrypted real-time quick counts, and comprehensive audit logs.",
    techStack: ["React", "Node.js", "Tailwind CSS", "Chart.js"],
    metrics: "2.400+ pemilih aktif dengan 100% Zero Downtime",
    metricsEn: "2,400+ active voters with 100% zero downtime",
    features: [
      "Autentikasi token rahasia satu kali pakai anti duplikasi suara",
      "Grafik quick count real-time terenkripsi anti manipulasi",
      "Responsif diakses dari ponsel mahasiswa secara serentak",
      "Ekspor rekapitulasi berita acara PDF otomatis siap cetak"
    ],
    featuresEn: [
      "Single-use cryptographic voter token preventing ballot duplicates",
      "Tamper-resistant encrypted real-time vote tally visual charts",
      "High-concurrency mobile optimization for simultaneous student logins",
      "Automated official election certified PDF report generator"
    ],
    demoUrl: "https://evoting-bem.vercel.app",
    isLive: true
  },
  {
    id: "bagas-photocopy",
    title: "Bagas Digital Print — Profil & Estimasi Cetak Online",
    titleEn: "Bagas Digital Print — Online Quotation & Print Shop",
    category: "web",
    categoryLabel: "Website & Landing Page",
    categoryLabelEn: "Website & Landing Page",
    mockupType: "browser",
    mockupDomain: "bagasprint.com",
    accentColor: "cyan",
    client: "Bagas Percetakan Digital",
    clientEn: "Bagas Digital Printing",
    period: "2024",
    summary:
      "Website profil bisnis percetakan lengkap dengan simulasi kalkulator harga cetak dokumen otomatis, peta rute toko, dan tombol pemesanan WhatsApp.",
    summaryEn:
      "Commercial print shop profile website featuring an interactive cost calculator for document printing, store route directions, and direct WhatsApp ordering.",
    techStack: ["React", "Tailwind CSS", "Lucide Icons", "Google Maps API"],
    metrics: "Peningkatan pesanan pelanggan baru +45% via WhatsApp",
    metricsEn: "New customer orders increased +45% via WhatsApp",
    features: [
      "Kalkulator estimasi harga print/jilid otomatis sebelum order",
      "Direct click WhatsApp dengan format pemesanan rapi",
      "Integrasi titik lokasi Google Maps & jam operasional toko",
      "Kecepatan loading ultra-cepat & ramah layar ponsel"
    ],
    featuresEn: [
      "Real-time instant calculation for printing and binding costs",
      "Direct-to-WhatsApp ordering with pre-formatted specifications",
      "Google Maps store navigation & real-time business open/close hours",
      "Ultra-fast mobile loading optimized for neighborhood search"
    ],
    demoUrl: "https://bagas-print.vercel.app",
    isLive: true
  }
];
