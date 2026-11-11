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
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
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

        {/* Main Content Sections */}
        <main className="flex-1 overflow-x-hidden w-full max-w-full">
          {/* Hero Section with Live Design Engine Split Mockup */}
          <Hero />

          {/* Infinite Tech Stack Marquee (Running left continuous ticker) */}
          <TechStackMarquee />

          {/* Core Services: Capabilities (Web, Mobile, IoT, UI/UX) */}
          <Services />

          {/* Pricing Plans: Transparent Packages & Investment */}
          <Pricing />

          {/* Portfolio & Showcase Section */}
          <Portfolio />

          {/* Testimonials & Client Feedback (Social Proof) */}
          <Testimonials />
        </main>

        {/* Footer & Floating WhatsApp */}
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
