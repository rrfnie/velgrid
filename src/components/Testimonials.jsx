import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import {
  Star,
  Quote,
  CheckCircle2,
  MessageSquare,
  MessageSquarePlus,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import FeedbackModal from './FeedbackModal';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { isDark } = useTheme();
  const { t, isEn } = useLanguage();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load reviews from initial data + custom saved reviews from localStorage
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('velgrid_custom_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...testimonialsData];
        }
      }
    } catch (e) {}
    return testimonialsData;
  });

  const handleAddReview = (newReview) => {
    setReviews((prev) => {
      const updated = [newReview, ...prev];
      try {
        const customReviews = updated.filter((r) => r.isCustom);
        localStorage.setItem('velgrid_custom_reviews', JSON.stringify(customReviews));
      } catch (e) {}
      return updated;
    });
  };

  const handleWhatsApp = () => {
    siteConfig.openWhatsApp(
      isEn
        ? "Hello Velgrid! I read the verified client reviews and testimonials. Can I schedule a free consultation for my website/app?"
        : "Halo Velgrid! Saya melihat review dan testimoni dari klien Velgrid. Boleh saya konsultasi untuk kebutuhan website/aplikasi saya?"
    );
  };

  // Default display 6 reviews (2 rows of 3), toggle to show all
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 6);

  return (
    <section
      id="testimoni"
      className={`py-14 sm:py-20 relative scroll-mt-16 overflow-hidden transition-colors duration-200 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50/70 text-slate-900'
      }`}
    >
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 blur-3xl pointer-events-none rounded-full -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/10 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${
              isDark
                ? 'bg-sky-950/80 border-sky-900/60 text-sky-300'
                : 'bg-sky-50 border-sky-200 text-sky-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2
            className={`mt-2.5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t.testimonials.heading}
          </h2>

          <p
            className={`mt-2.5 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t.testimonials.desc}
          </p>

          {/* Action Row: Rating Trust Bar & Prominent "Beri Kesan & Ulasan" Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Trust Pill */}
            <div
              className={`inline-flex items-center justify-center gap-3 py-2 px-5 rounded-2xl border text-xs sm:text-sm shadow-sm ${
                isDark
                  ? 'bg-slate-900/90 border-slate-800 text-slate-200'
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.testimonials.ratingAvg}
              </span>
              <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>•</span>
              <span className="text-sky-500 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t.testimonials.satisfiedClients}
              </span>
            </div>

            {/* Tombol Opsi 2: Buka Modal Pop-up Beri Ulasan (Khas Warna Velgrid) */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-sky-100" />
              <span>{t.testimonials.addReviewBtn}</span>
            </button>
          </div>
        </div>

        {/* Clean, Spacious & Symmetrical Testimonials Grid (Testimoni Resmi Velgrid) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {displayedReviews.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 group border ${
                isDark
                  ? 'bg-slate-900/90 border-slate-800 hover:border-sky-500/40'
                  : 'bg-white border-slate-200/90 hover:border-sky-300'
              }`}
            >
              <div>
                {/* Top Quote & Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote
                    className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                      isDark ? 'text-slate-100/90' : 'text-slate-800'
                    }`}
                  />
                </div>

                {/* Badge Category Tag & New Review Tag */}
                <div className="mt-3.5 flex items-center gap-1.5 flex-wrap">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                      isDark
                        ? 'bg-sky-950/80 text-sky-300 border-sky-900/50'
                        : 'bg-sky-50 text-sky-700 border-sky-100'
                    }`}
                  >
                    {isEn ? (item.tagEn || item.tag) : item.tag}
                  </span>
                  {item.isCustom && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-500/15 text-sky-400 border border-sky-500/30">
                      <Sparkles className="w-2.5 h-2.5 text-sky-400" />
                      <span>{isEn ? 'New Feedback' : 'Kesan Baru'}</span>
                    </span>
                  )}
                </div>

                {/* Review Comment Text */}
                <p
                  className={`mt-3.5 text-sm sm:text-base leading-relaxed italic ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  "{isEn ? (item.commentEn || item.comment) : item.comment}"
                </p>
              </div>

              {/* Author & Business Info */}
              <div
                className={`mt-6 pt-4 border-t flex items-center gap-3 ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <h4 className={`text-xs sm:text-sm font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.name}
                  </h4>
                  <p
                    className={`text-[11px] font-medium leading-tight truncate ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {isEn ? (item.roleEn || item.role) : item.role}, {item.company}
                  </p>
                  <p className="text-[10px] text-sky-500 font-semibold mt-0.5 truncate">
                    {isEn ? 'Project: ' : 'Proyek: '}{isEn ? (item.projectEn || item.project) : item.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Show More Reviews */}
        {reviews.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-200 cursor-pointer active:scale-95 shadow-sm ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <span>{showAllReviews ? t.testimonials.showLess : `${t.testimonials.showAll} (${reviews.length})`}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAllReviews ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}

        {/* CTA to Consult */}
        <div className="mt-12 text-center">
          <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {isEn ? 'Want your idea or project to be our next success story? ' : 'Ingin ide atau proyek Anda menjadi cerita sukses berikutnya? '}
            <button
              onClick={handleWhatsApp}
              className="text-sky-500 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              {isEn ? 'Start Free Consultation Now' : 'Mulai Konsultasi Gratis Sekarang'}
            </button>
          </p>
        </div>
      </div>

      {/* Interactive Modal Pop-up (Opsi 2) */}
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </section>
  );
}
