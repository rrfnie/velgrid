import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ToastProvider } from './context/ToastContext';
import VelgridPreloader from './components/VelgridPreloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStackMarquee from './components/TechStackMarquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function MainApp() {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Initial Loading Animation Velgrid (Preloader) */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <VelgridPreloader key="velgrid-preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className={`min-h-screen flex flex-col font-sans selection:bg-sky-500 selection:text-white transition-colors duration-200 overflow-x-hidden w-full max-w-full ${
          isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
        }`}
      >
        {/* Sticky Header: Clean Modern Navbar */}
        <header className="sticky top-0 z-40 w-full overflow-x-clip">
          <Navbar />
        </header>

        {/* Main Content Sections (Mirip Futura Link Versi Velgrid) */}
        <main className="flex-1 overflow-x-hidden w-full max-w-full">
          {/* 1. Hero Section with Live Design Engine Code Mockup */}
          <Hero />

          {/* 2. Infinite Tech Stack Marquee (Running continuous ticker) */}
          <TechStackMarquee />

          {/* 3. Core Services / Arsitektur Layanan */}
          <Services />

          {/* 4. Portfolio / Karya Unggulan */}
          <Portfolio />

          {/* 5. Pricing Plans / Investasi Sistem */}
          <Pricing />

          {/* 6. Testimonials & Client Feedback */}
          <Testimonials />
        </main>

        {/* 7. Footer / Lokasi & Kontak */}
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <MainApp />
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
