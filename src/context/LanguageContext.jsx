import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  id: {
    nav: {
      pricing: 'Paket Harga',
      services: 'Layanan',
      portfolio: 'Portofolio',
      workflow: 'Alur Kerja',
      testimonials: 'Testimoni',
      faq: 'FAQ',
      consultWA: 'Konsultasi WA',
      langLabel: 'Bahasa Indonesia'
    },
    promo: {
      badge: 'Opening',
      title: 'Diskon 20%',
      desc: 'Semua Layanan! Sisa Slot:',
      slots: '3 Slot',
      claim: 'Klaim Diskon 20%',
      claimShort: 'Klaim 20%'
    },
    hero: {
      pill: 'SOLUSI NYATA',
      headline1: 'Wujudkan Ide.',
      headline2: 'Solusi untuk Semua.',
      subtext: 'Partner rekayasa teknologi dan solusi digital untuk semua kalangan — dari mahasiswa, UMKM, personal creator, hingga instansi. Kami wujudkan ide dan kebutuhan digital Anda menjadi nyata dengan proses mudah dan harga transparan.',
      ctaPrimary: 'Konsultasi Gratis via WA',
      ctaSecondary: 'Lihat Paket Layanan',
      badge1: 'Spesialis Web & Mobile',
      badge2: 'Free Live Staging Demo',
      badge3: '100% Hak Milik Kode & Aset',
      badge4: 'Garansi Bebas Bug'
    },
    marquee: {
      ecosystem: 'Arsitektur Web & Mobile Apps berstandar industri, ultra-cepat & siap produksi'
    },
    services: {
      promoBadge: 'Opening Promo: Diskon 20% Terbatas',
      heading: 'Investasi Solusi Digital',
      desc: 'Bukan sekadar fitur rumit — kami merancang sistem tepat guna untuk semua kalangan (mahasiswa, personal, UMKM, hingga instansi) dengan harga transparan dan garansi kepuasan.',
      ownershipPill: 'Sistem Siap Pakai & Terima Beres',
      ownershipDesc: '100% Hak Milik Klien • Bebas Biaya Bulanan Wajib • Garansi Bebas Bug & Pendampingan 30 Hari',
      maintenanceNotice: 'Layanan Tambahan (Opsional): Duduk manis dan serahkan urusan update berkala, backup rutin, dan pemeliharaan teknis ke tim Velgrid.',
      timelineWeb: 'Estimasi pengerjaan:',
      timelineMaintenance: 'Dukungan & SLA:',
      ctaSuffix: 'via WA'
    },
    portfolio: {
      badge: 'Showcase & Portofolio',
      heading: 'Hasil Karya & Solusi Nyata Velgrid',
      desc: 'Eksplorasi antarmuka website dan aplikasi mobile yang kami kembangkan dengan arsitektur bersih, performa tinggi, dan konversi order terbukti.',
      catAll: 'Semua Proyek',
      catWeb: 'Website & Landing Page',
      catMobile: 'Aplikasi Mobile (Android/iOS)',
      catWebApp: 'Sistem & Web App Dinamis',
      keyFeatures: 'Solusi & Fitur Utama:',
      viewInteractiveDemo: 'Lihat Demo Interaktif',
      consultSimilar: 'Konsultasi Konsep Serupa via WA',
      showAll: 'Lihat Semua Proyek',
      showLess: 'Tampilkan Lebih Sedikit',
      modal: {
        close: 'Tutup Preview',
        challengeSolution: 'Tantangan & Solusi Teknis:',
        results: 'Hasil & Dampak:',
        techUsed: 'Teknologi yang Digunakan:',
        liveDemo: 'Buka Live Demo'
      }
    },
    testimonials: {
      badge: 'Validasi & Feedback Nyata',
      heading: 'Apa Kata Klien yang Telah Menggunakan Velgrid?',
      desc: 'Kepercayaan klien UMKM, pemilik kafe, instansi dinas, dan mahasiswa adalah bukti komitmen kami terhadap kualitas, kecepatan, dan kepuasan hasil.',
      ratingAvg: '5.0 / 5.0 Rating Rata-Rata',
      satisfiedClients: '100% Klien Puas',
      addReviewBtn: 'Beri Kesan & Ulasan',
      verifiedProject: 'Proyek Terverifikasi',
      showAll: 'Lihat Semua Ulasan',
      showLess: 'Tampilkan Lebih Sedikit',
      ctaTitle: 'Punya Ide atau Kebutuhan Digital yang Ingin Diwujudkan?',
      ctaDesc: 'Diskusikan konsep Anda langsung dengan tim developer Velgrid. Gratis konsultasi awal dan rekomendasi arsitektur terbaik.',
      ctaButton: 'Konsultasikan Kebutuhan Anda via WA'
    },
    footer: {
      about: 'Brand penyedia layanan pembuatan website, aplikasi mobile, sistem informasi, dan konsultasi IT untuk semua kalangan (mahasiswa, personal, UMKM, instansi). Cepat, berkinerja tinggi, dan transparan.',
      statusAvailable: 'Available for new projects',
      statusFast: 'Fast Response',
      quickNav: 'Navigasi Cepat',
      navServices: 'Paket Layanan (Web, Mobile & Maintenance)',
      navPortfolio: 'Portofolio & Live Demo',
      navTestimonials: 'Testimoni Klien',
      contactHeading: 'Kontak & Konsultasi Resmi',
      operatingHours: 'Jam Operasional: Setiap Hari (08.00 - 22.00 WIB)',
      rights: 'Hak Cipta Dilindungi.'
    },
    workflow: {
      badge: 'Alur Pengerjaan Terstruktur',
      heading: 'Dari Kebutuhan Anda Menjadi Solusi Digital Nyata',
      desc: 'Kami tidak cuma menulis kode, tapi memahami apa yang Anda butuhkan — baik untuk tugas akhir/skripsi, portofolio personal, maupun sistem usaha. Transparan, cepat, dan bisa diuji coba langsung di HP.'
    },
    faq: {
      badge: 'Tanya Jawab Seputar Velgrid',
      heading: 'Pertanyaan yang Sering Diajukan',
      desc: 'Semua hal yang perlu Anda ketahui sebelum memesan layanan pembuatan web dan aplikasi mobile di Velgrid.'
    }
  },
  en: {
    nav: {
      pricing: 'Pricing',
      services: 'Services',
      portfolio: 'Portfolio',
      workflow: 'Workflow',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      consultWA: 'Consult WA',
      langLabel: 'English'
    },
    promo: {
      badge: 'Opening',
      title: 'Special 20% Off',
      desc: 'All Services! Remaining Slots:',
      slots: '3 Slots',
      claim: 'Claim 20% Discount',
      claimShort: 'Claim 20%'
    },
    hero: {
      pill: 'REAL SOLUTIONS',
      headline1: 'Crafting Ideas.',
      headline2: 'Solutions for Everyone.',
      subtext: 'Modern digital technology partner for everyone — from students and creators to local businesses and organizations. We transform your ideas and digital needs into reality with simplicity and transparent pricing.',
      ctaPrimary: 'Free Consultation on WA',
      ctaSecondary: 'Explore Service Plans',
      badge1: 'Web & Mobile Specialists',
      badge2: 'Free Live Staging Demo',
      badge3: '100% Full Code Ownership',
      badge4: 'Bug-Free Warranty'
    },
    marquee: {
      ecosystem: 'Industry-grade, ultra-fast & production-ready web and mobile architecture'
    },
    services: {
      promoBadge: 'Grand Opening: 20% Off Limited',
      heading: 'Digital Solution Plans',
      desc: 'Beyond complex features — we build purpose-driven digital systems for all needs (academic, personal, business, to organizations) with transparent pricing and guaranteed satisfaction.',
      ownershipPill: 'Ready-to-Use & Done-for-You Systems',
      ownershipDesc: '100% Full Client Ownership • No Mandatory Monthly Fees • 30-Day Bug-Free Warranty & Free Support',
      maintenanceNotice: 'Optional Add-on Service: Sit back and let the Velgrid team handle regular updates, cloud backups, and technical maintenance.',
      timelineWeb: 'Estimated delivery:',
      timelineMaintenance: 'Support & SLA:',
      ctaSuffix: 'via WA'
    },
    portfolio: {
      badge: 'Showcase & Portfolio',
      heading: 'Selected Works & Real Solutions by Velgrid',
      desc: 'Explore modern web and mobile applications engineered with clean architecture, high performance, and proven conversion.',
      catAll: 'All Projects',
      catWeb: 'Websites & Landing Pages',
      catMobile: 'Mobile Apps (Android/iOS)',
      catWebApp: 'Dynamic Systems & Web Apps',
      keyFeatures: 'Key Features & Solutions:',
      viewInteractiveDemo: 'Live Interactive Demo',
      consultSimilar: 'Consult Similar Concept via WA',
      showAll: 'View All Projects',
      showLess: 'Show Less',
      modal: {
        close: 'Close Preview',
        challengeSolution: 'Engineering Challenge & Solution:',
        results: 'Results & Impact:',
        techUsed: 'Technologies Used:',
        liveDemo: 'Open Live Demo'
      }
    },
    testimonials: {
      badge: 'Verified Client Feedback',
      heading: 'What Our Clients Say About Velgrid',
      desc: 'Trust from local businesses, cafe owners, agencies, and students is proof of our commitment to quality, speed, and real results.',
      ratingAvg: '5.0 / 5.0 Average Rating',
      satisfiedClients: '100% Satisfied Clients',
      addReviewBtn: 'Share Your Experience',
      verifiedProject: 'Verified Project',
      showAll: 'View All Reviews',
      showLess: 'Show Less',
      ctaTitle: 'Have a Digital Idea or Project You Want to Build?',
      ctaDesc: 'Discuss your requirements directly with our engineering team. Free initial consultation and architecture recommendations.',
      ctaButton: 'Consult Your Needs via WA'
    },
    footer: {
      about: 'Technology partner providing website development, mobile apps, information systems, and IT consulting for everyone (students, creators, businesses, institutions). Fast, high-performance, and transparent.',
      statusAvailable: 'Available for new projects',
      statusFast: 'Fast Response',
      quickNav: 'Quick Navigation',
      navServices: 'Service Plans (Web, Mobile & Maintenance)',
      navPortfolio: 'Portfolio & Live Demo',
      navTestimonials: 'Client Testimonials',
      contactHeading: 'Official Contact & Inquiries',
      operatingHours: 'Operating Hours: Everyday (08:00 - 22:00 WIB / UTC+7)',
      rights: 'All Rights Reserved.'
    },
    workflow: {
      badge: 'Structured Engineering Workflow',
      heading: 'From Your Needs to Real Digital Solutions',
      desc: 'We do not just write code — we understand your exact goals, whether for academic thesis, personal portfolio, or business systems. Transparent, rapid, and testable on your phone.'
    },
    faq: {
      badge: 'Velgrid Knowledge Base',
      heading: 'Frequently Asked Questions',
      desc: 'Everything you need to know before initiating your web and mobile app development project with Velgrid.'
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('velgrid_lang');
      if (saved === 'en' || saved === 'id') return saved;
    } catch (e) {}
    return 'id'; // default Indonesian
  });

  useEffect(() => {
    try {
      localStorage.setItem('velgrid_lang', lang);
      document.documentElement.lang = lang;
    } catch (e) {}
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const t = translations[lang] || translations.id;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, isEn: lang === 'en', t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: 'id',
      isEn: false,
      toggleLanguage: () => {},
      t: translations.id
    };
  }
  return context;
}
