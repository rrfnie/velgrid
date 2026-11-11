// Data Layanan & Paket Investasi Sistem Velgrid (Web, Mobile & Maintenance)
// Diformulasikan esensial, jelas, transparan, dan mendukung dwi-bahasa (ID & EN)

export const pricingCategories = [
  { id: 'web', label: 'WEB', name: 'Web Development' },
  { id: 'mobile', label: 'MOBILE', name: 'Mobile App' },
  { id: 'maintenance', label: 'MAINTENANCE', name: 'Maintenance & Support' },
];

const plansId = {
  web: [
    {
      id: 'starter-web',
      category: 'web',
      tier: 'STARTER',
      title: 'Starter Web',
      originalPrice: '499k',
      price: '399k',
      priceSuffix: '/start',
      discountBadge: 'DISKON 20% (HEMAT 100RB)',
      isPopular: false,
      tagline: 'Landing page modern & cepat untuk portofolio, produk, atau tugas akhir.',
      timeline: '2 - 4 Hari Kerja',
      features: [
        'Website Landing Page Lengkap (Profil, Layanan, Portofolio & Kontak)',
        'Desain Modern & Responsif Prima (HP, Tablet & Laptop)',
        'Tombol Chat & Order WhatsApp Langsung',
        'Cloud Hosting Cepat & SSL HTTPS Aman',
        '100% Hak Milik Source Code & Garansi Bebas Bug'
      ],
      ctaText: 'Klaim Diskon 20% Starter Web',
      whatsappMessage:
        'Halo Velgrid! Saya tertarik klaim Promo 20% untuk Paket Starter Web (399k). Boleh konsultasi rancangannya?'
    },
    {
      id: 'company-profile',
      category: 'web',
      tier: 'PROFESIONAL',
      badge: 'BEST CHOICE',
      title: 'Company Profile',
      originalPrice: '1.85M',
      price: '1.48M+',
      priceSuffix: '/start',
      discountBadge: 'HEMAT 370RB (20%)',
      isPopular: true,
      tagline: 'Website multi-halaman lengkap untuk profil usaha, komunitas, atau instansi.',
      timeline: '3 - 7 Hari Kerja',
      features: [
        'Multi-Halaman (Beranda, Profil, Layanan, Kontak)',
        'Gratis Domain (.COM / .ID) & Hosting 1 Tahun',
        'Dashboard Admin untuk Kelola Konten Sendiri',
        'Formulir Kontak & Integrasi WhatsApp',
        'Optimasi Kecepatan & Garansi 30 Hari'
      ],
      ctaText: 'Klaim Diskon 20% Profesional',
      whatsappMessage:
        'Halo Velgrid! Saya tertarik klaim Promo 20% untuk Paket Profesional: Company Profile (1.48M+). Boleh diskusi konsep websitenya?'
    },
    {
      id: 'custom-web-app',
      category: 'web',
      tier: 'CUSTOM',
      title: 'Custom Web App',
      originalPrice: 'Penawaran Khusus',
      price: 'Custom',
      priceSuffix: '',
      discountBadge: 'DISKON 20% OPENING',
      isPopular: false,
      tagline: 'Sistem aplikasi web & database khusus sesuai alur kebutuhan Anda.',
      timeline: '1 - 3 Minggu Kerja',
      features: [
        'Sistem Kustom Sesuai Alur & Kebutuhan Anda',
        'Database Terstruktur & Manajemen Multi-User',
        'Integrasi API, WhatsApp & Notifikasi Otomatis',
        'Uji Coba Demo (Live Staging) Sebelum Pelunasan',
        '100% Hak Milik Source Code & Garansi Prioritas'
      ],
      ctaText: 'Konsultasi Custom Web App',
      whatsappMessage:
        'Halo Velgrid! Saya ingin konsultasi pembuatan Custom Web App dengan Promo Opening 20%. Boleh jadwalkan diskusi teknisnya?'
    }
  ],

  mobile: [
    {
      id: 'starter-mobile',
      category: 'mobile',
      tier: 'STARTER',
      title: 'Starter Mobile App',
      originalPrice: '990k',
      price: '790k',
      priceSuffix: '/start',
      discountBadge: 'DISKON 20% (HEMAT 200RB)',
      isPopular: false,
      tagline: 'Aplikasi Android ringan untuk ide produk, tugas akhir, atau prototipe.',
      timeline: '3 - 7 Hari Kerja',
      features: [
        'Aplikasi Android Siap Pakai (File APK Siap Pasang)',
        'Tampilan Antarmuka Modern, Bersih & Ringan',
        'Database Lokal / Sinkronisasi Online',
        '100% Source Code Penuh (Flutter / React Native)',
        'Panduan Instalasi & Garansi Bebas Bug 14 Hari'
      ],
      ctaText: 'Klaim Diskon 20% Starter Mobile',
      whatsappMessage:
        'Halo Velgrid! Saya mau klaim Promo 20% untuk Paket Starter Mobile App (790k). Boleh dibantu rancangannya?'
    },
    {
      id: 'business-mobile',
      category: 'mobile',
      tier: 'PROFESIONAL',
      badge: 'BEST CHOICE',
      title: 'Pro Mobile App',
      originalPrice: '2.95M',
      price: '2.35M+',
      priceSuffix: '/start',
      discountBadge: 'HEMAT 600RB (20%)',
      isPopular: true,
      tagline: 'Aplikasi smartphone lengkap untuk layanan order, kasir POS, atau sistem operasional.',
      timeline: '1 - 2 Minggu Kerja',
      features: [
        'Aplikasi Multiplatform (Bisa Android & iOS)',
        'Sinkronisasi Data Cloud Realtime & API',
        'Dashboard Web Admin untuk Kelola Data dari Laptop',
        'Integrasi Notifikasi & Tombol WhatsApp',
        'Garansi Pemeliharaan & Dukungan 30 Hari'
      ],
      ctaText: 'Klaim Diskon 20% Pro Mobile',
      whatsappMessage:
        'Halo Velgrid! Saya mau klaim Promo 20% untuk Paket Pro Mobile App (2.35M+). Boleh info detail alurnya?'
    },
    {
      id: 'custom-mobile',
      category: 'mobile',
      tier: 'CUSTOM',
      title: 'Custom Mobile App',
      originalPrice: 'Penawaran Khusus',
      price: 'Custom',
      priceSuffix: '',
      discountBadge: 'DISKON 20% OPENING',
      isPopular: false,
      tagline: 'Aplikasi mobile skala penuh siap rilis ke Play Store & App Store.',
      timeline: '2 - 4 Minggu Kerja',
      features: [
        'Sistem Mobile Kustom Penuh Sesuai Kebutuhan',
        'Arsitektur Database & Backend Skala Besar',
        'Integrasi Payment Gateway & Fitur Lanjutan',
        'Bantuan Penerbitan ke Google Play & App Store',
        'Garansi Pemeliharaan & Dukungan Prioritas'
      ],
      ctaText: 'Konsultasi Custom Mobile App',
      whatsappMessage:
        'Halo Velgrid! Kami memiliki kebutuhan Custom Mobile App skala penuh dengan Promo Opening 20%. Boleh jadwalkan sesi konsultasi?'
    }
  ],

  maintenance: [
    {
      id: 'basic-care',
      category: 'maintenance',
      tier: 'STARTER',
      title: 'Basic Care',
      originalPrice: '199k',
      price: '149k',
      priceSuffix: '/bln',
      discountBadge: 'DISKON 25% (HEMAT 50RB)',
      isPopular: false,
      tagline: 'Pemeliharaan website & aplikasi dasar agar selalu online, aman, dan lancar.',
      timeline: 'Monitoring 24/7 & Respon < 4 Jam',
      features: [
        'Backup Data Rutin Mingguan ke Cloud Aman',
        'Monitoring Keaktifan Website (Uptime Check 24/7)',
        'Pembaruan Konten Ringan (Teks, Banner & Foto)',
        'Cek Keamanan Rutin & Pembaruan SSL HTTPS',
        'Dukungan Konsultasi Teknis via WhatsApp'
      ],
      ctaText: 'Langganan Basic Care',
      whatsappMessage:
        'Halo Velgrid! Saya tertarik berlangganan Paket Basic Care Maintenance (149k/bln) untuk merawat web/aplikasi saya. Boleh info ketentuannya?'
    },
    {
      id: 'pro-support',
      category: 'maintenance',
      tier: 'PROFESIONAL',
      badge: 'BEST CHOICE',
      title: 'Pro Active Support',
      originalPrice: '499k',
      price: '349k',
      priceSuffix: '/bln',
      discountBadge: 'DISKON 30% (HEMAT 150RB)',
      isPopular: true,
      tagline: 'Perawatan sistem berkala, optimasi kecepatan, dan prioritas perbaikan bug darurat.',
      timeline: 'Prioritas Respon Cepat < 1 Jam',
      features: [
        'Semua fitur Paket Basic Care termasuk',
        'Optimasi Kecepatan Loading & Kinerja Database',
        'Perbaikan Bug / Error Darurat Prioritas Cepat',
        'Update Versi Library, Plugin & Patch Keamanan',
        'Laporan Bulanan Performa & Saran Optimasi'
      ],
      ctaText: 'Langganan Pro Support',
      whatsappMessage:
        'Halo Velgrid! Saya ingin berlangganan Paket Pro Active Support (349k/bln) untuk pemeliharaan rutin sistem saya. Boleh diskusi detailnya?'
    },
    {
      id: 'custom-maintenance',
      category: 'maintenance',
      tier: 'CUSTOM',
      title: 'Enterprise SLA',
      originalPrice: 'Penawaran Khusus',
      price: 'Custom',
      priceSuffix: '',
      discountBadge: 'SLA KUSTOM & STANDBY',
      isPopular: false,
      tagline: 'Standby engineer khusus untuk sistem berskala besar, traffic tinggi, atau instansi.',
      timeline: 'Standby SLA Khusus & On-Call 24/7',
      features: [
        'Engineer Standby Khusus untuk Sistem Anda',
        'Perjanjian Tingkat Layanan (SLA) Resmi Terjamin',
        'Arsitektur Cloud, Server Scaling & Penanganan Crash',
        'Penanganan Permintaan Fitur & Modifikasi Rutin',
        'Dukungan Panggilan Darurat Langsung & Prioritas VIP'
      ],
      ctaText: 'Konsultasi Dedicated SLA',
      whatsappMessage:
        'Halo Velgrid! Kami membutuhkan layanan Dedicated SLA Maintenance kustom untuk sistem kami. Boleh jadwalkan sesi diskusi SLA?'
    }
  ]
};

const plansEn = {
  web: [
    {
      id: 'starter-web',
      category: 'web',
      tier: 'STARTER',
      title: 'Starter Web',
      originalPrice: '499k',
      price: '399k',
      priceSuffix: '/start',
      discountBadge: '20% OFF (SAVE 100K)',
      isPopular: false,
      tagline: 'Modern, ultra-fast landing page for portfolio, product showcase, or final project.',
      timeline: '2 - 4 Business Days',
      features: [
        'Complete Landing Page (Profile, Services, Portfolio & Contact)',
        'Modern & Responsive Layout (Mobile, Tablet & Laptop)',
        'Direct WhatsApp Order & Consultation Button',
        'Fast Cloud Hosting & Secure SSL HTTPS',
        '100% Full Source Code Ownership & Bug-Free Warranty'
      ],
      ctaText: 'Claim 20% Off Starter Web',
      whatsappMessage:
        'Hello Velgrid! I want to claim the 20% Promo for Starter Web (399k). Can we consult on the design?'
    },
    {
      id: 'company-profile',
      category: 'web',
      tier: 'PROFESIONAL',
      badge: 'BEST CHOICE',
      title: 'Company Profile',
      originalPrice: '1.85M',
      price: '1.48M+',
      priceSuffix: '/start',
      discountBadge: 'SAVE 370K (20%)',
      isPopular: true,
      tagline: 'Full multi-page website for business profiles, organizations, or agencies.',
      timeline: '3 - 7 Business Days',
      features: [
        'Multi-Page (Home, About, Services, Contact)',
        'Free Custom Domain (.COM / .ID) & 1-Year Cloud Hosting',
        'Admin Dashboard to Manage Content Easily',
        'Lead Contact Form & WhatsApp Integration',
        'Speed Optimization & 30-Day Technical Warranty'
      ],
      ctaText: 'Claim 20% Off Professional',
      whatsappMessage:
        'Hello Velgrid! I want to claim the 20% Promo for Professional: Company Profile (1.48M+). Can we discuss the concept?'
    },
    {
      id: 'custom-web-app',
      category: 'web',
      tier: 'CUSTOM',
      title: 'Custom Web App',
      originalPrice: 'Special Offer',
      price: 'Custom',
      priceSuffix: '',
      discountBadge: '20% OPENING PROMO',
      isPopular: false,
      tagline: 'Bespoke web application and database tailored to your exact business workflow.',
      timeline: '1 - 3 Business Weeks',
      features: [
        'Custom Architecture Tailored to Your Specific Workflow',
        'Structured Database & Multi-User Role Management',
        'API Integration, Automated WhatsApp & Email Notifications',
        'Live Staging Demo on Your Phone Before Final Settlement',
        '100% Full Source Code Ownership & Priority Warranty'
      ],
      ctaText: 'Consult Custom Web App',
      whatsappMessage:
        'Hello Velgrid! We need a Custom Web App with the 20% Opening Promo. Can we schedule a technical discussion?'
    }
  ],

  mobile: [
    {
      id: 'starter-mobile',
      category: 'mobile',
      tier: 'STARTER',
      title: 'Starter Mobile App',
      originalPrice: '990k',
      price: '790k',
      priceSuffix: '/start',
      discountBadge: '20% OFF (SAVE 200K)',
      isPopular: false,
      tagline: 'Lightweight Android app for product ideas, academic thesis, or early prototype.',
      timeline: '3 - 7 Business Days',
      features: [
        'Ready-to-Install Android App (APK File Ready)',
        'Modern, Clean & Fast Mobile User Interface',
        'Local Database / Real-time Cloud Sync',
        '100% Full Source Code (Flutter / React Native)',
        'Installation Guide & 14-Day Bug-Free Warranty'
      ],
      ctaText: 'Claim 20% Off Starter Mobile',
      whatsappMessage:
        'Hello Velgrid! I want to claim the 20% Promo for Starter Mobile App (790k). Can we discuss the requirements?'
    },
    {
      id: 'business-mobile',
      category: 'mobile',
      tier: 'PROFESIONAL',
      badge: 'BEST CHOICE',
      title: 'Pro Mobile App',
      originalPrice: '2.95M',
      price: '2.35M+',
      priceSuffix: '/start',
      discountBadge: 'SAVE 600K (20%)',
      isPopular: true,
      tagline: 'Full smartphone app for ordering, mobile POS cashier, or operational management.',
      timeline: '1 - 2 Business Weeks',
      features: [
        'Cross-Platform App (Ready for Android & iOS)',
        'Realtime Cloud Database Sync & Custom APIs',
        'Web Admin Dashboard to Manage Data from Laptop',
        'Push Notifications & Direct WhatsApp Order Buttons',
        'Maintenance Warranty & 30-Day Support'
      ],
      ctaText: 'Claim 20% Off Pro Mobile',
      whatsappMessage:
        'Hello Velgrid! I want to claim the 20% Promo for Pro Mobile App (2.35M+). Can you share the workflow details?'
    },
    {
      id: 'custom-mobile',
      category: 'mobile',
      tier: 'CUSTOM',
      title: 'Custom Mobile App',
      originalPrice: 'Special Offer',
      price: 'Custom',
      priceSuffix: '',
      discountBadge: '20% OPENING PROMO',
      isPopular: false,
      tagline: 'Full-scale mobile application ready for publication on Play Store & App Store.',
      timeline: '2 - 4 Business Weeks',
      features: [
        'Fully Custom Mobile System Architecture',
        'Scalable Database & Robust Backend Infrastructure',
        'Payment Gateway Integration & Advanced Features',
        'Publishing Assistance to Google Play & Apple App Store',
        'Priority Maintenance Warranty & Standby Support'
      ],
      ctaText: 'Consult Custom Mobile App',
      whatsappMessage:
        'Hello Velgrid! We require a full-scale Custom Mobile App with the 20% Opening Promo. Can we schedule a consultation?'
    }
  ],

  maintenance: [
    {
      id: 'basic-care',
      category: 'maintenance',
      tier: 'STARTER',
      title: 'Basic Care',
      originalPrice: '199k',
      price: '149k',
      priceSuffix: '/mo',
      discountBadge: '25% OFF (SAVE 50K)',
      isPopular: false,
      tagline: 'Essential website & application care to stay online, secure, and error-free.',
      timeline: '24/7 Monitoring & < 4h Response',
      features: [
        'Weekly Automated Cloud Database & File Backups',
        '24/7 Uptime Health Monitoring (Stay Active Always)',
        'Light Content Updates (Text, Banners & Photo Swaps)',
        'Routine Security Audit & HTTPS SSL Renewal',
        'Technical Consultation & Support via WhatsApp'
      ],
      ctaText: 'Subscribe Basic Care',
      whatsappMessage:
        'Hello Velgrid! I want to subscribe to the Basic Care Maintenance package (149k/mo) for my site. Could you share the terms?'
    },
    {
      id: 'pro-support',
      category: 'maintenance',
      tier: 'PROFESIONAL',
      badge: 'BEST CHOICE',
      title: 'Pro Active Support',
      originalPrice: '499k',
      price: '349k',
      priceSuffix: '/mo',
      discountBadge: '30% OFF (SAVE 150K)',
      isPopular: true,
      tagline: 'Regular performance tuning, speed optimization, and emergency bug fixing.',
      timeline: 'Priority Fast Response < 1 Hour',
      features: [
        'All features in Basic Care included',
        'Loading Speed Optimization & Database Tuning',
        'Priority Emergency Bug & Error Fixing',
        'Regular Library, Plugin & Security Patch Updates',
        'Monthly Performance Report & Optimization Advice'
      ],
      ctaText: 'Subscribe Pro Support',
      whatsappMessage:
        'Hello Velgrid! I want to subscribe to Pro Active Support (349k/mo) for ongoing system maintenance. Can we discuss the details?'
    },
    {
      id: 'custom-maintenance',
      category: 'maintenance',
      tier: 'CUSTOM',
      title: 'Enterprise SLA',
      originalPrice: 'Special Offer',
      price: 'Custom',
      priceSuffix: '',
      discountBadge: 'CUSTOM STANDBY SLA',
      isPopular: false,
      tagline: 'Dedicated standby engineers for large-scale systems, high-traffic apps, or organizations.',
      timeline: 'Dedicated SLA & 24/7 On-Call Support',
      features: [
        'Dedicated Standby Engineer for Your Platform',
        'Legally Guaranteed Service Level Agreement (SLA)',
        'Cloud Scaling, Server Monitoring & Crash Resolution',
        'Routine Feature Enhancements & Custom Modifications',
        'Direct Emergency Hotline & VIP Priority Support'
      ],
      ctaText: 'Consult Enterprise SLA',
      whatsappMessage:
        'Hello Velgrid! We require a custom Dedicated SLA Maintenance plan for our systems. Can we schedule an SLA consultation?'
    }
  ]
};

export const pricingPlans = {
  // Default for direct access
  web: plansId.web,
  mobile: plansId.mobile,
  maintenance: plansId.maintenance,
  id: plansId,
  en: plansEn
};

// Nilai Tambah & Komitmen Kualitas Velgrid
export const servicesValueProps = {
  title: "Komitmen Kualitas & Keamanan Klien",
  subtitle: "Setiap proyek di Velgrid dilindungi standar eksekusi profesional tanpa biaya terselubung",
  points: [
    {
      title: "Transparansi Biaya",
      desc: "Tanpa biaya tersembunyi. Ruang lingkup, milestone, dan estimasi disepakati di awal secara tertulis."
    },
    {
      title: "Free Live Staging Demo",
      desc: "Uji coba langsung prototipe sistem di smartphone Anda sebelum melakukan pelunasan akhir."
    },
    {
      title: "100% Hak Milik Klien",
      desc: "Seluruh berkas kode sumber, akun hosting, dan aset diserahkan utuh kepada Anda tanpa ketergantungan sepihak."
    },
    {
      title: "Garansi Bebas Bug",
      desc: "Pendampingan pasca-peluncuran dan perbaikan cepat bila ditemukan kendala teknis."
    }
  ]
};
