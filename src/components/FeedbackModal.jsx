import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  X,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Building,
  User,
  Briefcase,
  AlertCircle,
  Heart
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

const PROJECT_TYPES = [
  { id: 'web-landing', idLabel: 'Landing Page & Web UMKM', enLabel: 'Landing Page & Business Web' },
  { id: 'mobile-app', idLabel: 'Aplikasi Mobile (Android / iOS)', enLabel: 'Mobile App (Android / iOS)' },
  { id: 'custom-web', idLabel: 'Sistem Web & Dashboard Admin', enLabel: 'Custom Web & Admin Dashboard' },
  { id: 'academic', idLabel: 'Tugas Akhir / Skripsi Mahasiswa', enLabel: 'Final Project / Campus System' },
  { id: 'uiux-proto', idLabel: 'Desain UI/UX & Prototipe Interaktif', enLabel: 'UI/UX Design & Prototype' },
  { id: 'other', idLabel: 'Lainnya / Konsultasi IT', enLabel: 'Other / IT Consultation' }
];

const RATING_DESCRIPTIONS = {
  id: {
    1: 'Kurang Puas 🙁',
    2: 'Cukup, ada catatan 🙂',
    3: 'Bagus & Sesuai Ekspektasi 👍',
    4: 'Sangat Bagus & Puas Sekali ✨',
    5: 'Luar Biasa Memuaskan & Melebihi Ekspektasi! 🔥'
  },
  en: {
    1: 'Needs Improvement 🙁',
    2: 'Fair, with notes 🙂',
    3: 'Good & Met Expectations 👍',
    4: 'Very Good & Great Quality ✨',
    5: 'Outstanding & Exceeded Expectations! 🔥'
  }
};

export default function FeedbackModal({ isOpen, onClose, onSubmitReview }) {
  const { isDark } = useTheme();
  const { isEn } = useLanguage();
  const { toast } = useToast();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0].id);
  const [comment, setComment] = useState('');

  // Touched state for realtime validation
  const [touched, setTouched] = useState({
    name: false,
    comment: false,
    rating: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation logic
  const isNameValid = name.trim().length >= 3;
  const isCommentValid = comment.trim().length >= 10;
  const isRatingValid = rating > 0;
  const isFormValid = isNameValid && isCommentValid && isRatingValid;

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleResetForm = () => {
    setRating(5);
    setHoverRating(0);
    setName('');
    setRole('');
    setCompany('');
    setProjectType(PROJECT_TYPES[0].id);
    setComment('');
    setTouched({ name: false, comment: false, rating: false });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    handleResetForm();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, comment: true, rating: true });

    if (!isFormValid) return;

    // Calculate initials
    const nameWords = name.trim().split(' ').filter(Boolean);
    const initials =
      nameWords.length >= 2
        ? (nameWords[0][0] + nameWords[1][0]).toUpperCase()
        : name.trim().slice(0, 2).toUpperCase();

    const selectedProj = PROJECT_TYPES.find((p) => p.id === projectType);

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim() || (isEn ? 'Client' : 'Klien'),
      roleEn: role.trim() || 'Client',
      company: company.trim() || (isEn ? 'Personal Project' : 'Proyek Pribadi'),
      initials: initials || 'VG',
      rating,
      tag: selectedProj ? selectedProj.idLabel : 'Solusi Digital',
      tagEn: selectedProj ? selectedProj.enLabel : 'Digital Solution',
      comment: comment.trim(),
      commentEn: comment.trim(),
      project: selectedProj ? selectedProj.idLabel : 'Custom Project',
      projectEn: selectedProj ? selectedProj.enLabel : 'Custom Project',
      isCustom: true,
      createdAt: new Date().toISOString()
    };

    onSubmitReview(newReview);
    setIsSubmitted(true);
    toast.success(
      isEn
        ? "Your review has been successfully submitted! Thank you so much! ✨"
        : "Ulasan dan kesanmu berhasil dikirim! Terima kasih banyak yaa 🥰✨",
      isEn ? "Feedback Saved" : "Ulasan Terkirim"
    );
  };

  const handleShareToWhatsApp = () => {
    const selectedProj = PROJECT_TYPES.find((p) => p.id === projectType);
    const starIcons = '⭐'.repeat(rating);
    const projectText = selectedProj ? selectedProj.idLabel : 'Proyek Velgrid';

    const message = `Halo Velgrid! Saya baru saja mengirimkan kesan & ulasan untuk Velgrid:\n\n` +
      `👤 Nama: ${name.trim()} (${role.trim() || 'Klien'} - ${company.trim() || 'Pribadi'})\n` +
      `🏷️ Proyek: ${projectText}\n` +
      `⭐ Rating: ${starIcons} (${rating}/5)\n\n` +
      `💬 Kesan & Ulasan:\n"${comment.trim()}"\n\n` +
      `Terima kasih banyak atas kerja sama dan hasil karya memuaskannya! 🚀`;

    siteConfig.openWhatsApp(message);
    handleClose();
  };

  if (!isOpen) return null;

  const currentRatingDesc =
    RATING_DESCRIPTIONS[isEn ? 'en' : 'id'][hoverRating || rating] || '';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border my-8 z-10 ${
            isDark
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Tutup form feedback"
            className={`absolute top-5 right-5 p-2 rounded-full transition cursor-pointer ${
              isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="text-left">
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border ${
                    isDark
                      ? 'bg-sky-950/80 border-sky-900/60 text-sky-300'
                      : 'bg-sky-50 border-sky-200 text-sky-700'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>{isEn ? 'Client Feedback' : 'Kesan & Ulasan Klien'}</span>
                </div>
                <h3 className="mt-3 text-xl sm:text-2xl font-extrabold tracking-tight">
                  {isEn ? 'Share Your Impression' : 'Bagikan Kesan & Pengalaman Anda'}
                </h3>
                <p
                  className={`mt-1.5 text-xs sm:text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {isEn
                    ? 'Your feedback helps us continuously improve and deliver high-standard digital products.'
                    : 'Kesan dan masukan Anda sangat berarti bagi tim Velgrid untuk terus memberikan kualitas terbaik.'}
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* 1. Rating Stars with dynamic caption */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                    {isEn ? 'Rating Kepuasan (Wajib)' : 'Tingkat Kepuasan (Wajib)'}
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => {
                            setRating(star);
                            setTouched((prev) => ({ ...prev, rating: true }));
                          }}
                          className="p-1 rounded-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer focus:outline-none"
                        >
                          <Star
                            className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                              (hoverRating || rating) >= star
                                ? 'fill-amber-400 text-amber-400'
                                : isDark
                                ? 'text-slate-700 hover:text-slate-500'
                                : 'text-slate-200 hover:text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs font-semibold text-amber-500 min-h-[18px]">
                    {currentRatingDesc}
                  </p>
                </div>

                {/* 2. Name & Role Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      {isEn ? 'Full Name *' : 'Nama Lengkap *'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder={isEn ? 'e.g. Bagas Setiawan' : 'Contoh: Bagas Setiawan'}
                        className={`w-full pl-9 pr-8 py-2.5 rounded-xl text-xs sm:text-sm border transition focus:outline-none ${
                          touched.name && !isNameValid
                            ? 'border-rose-500/80 focus:border-rose-500 bg-rose-500/5 text-slate-100'
                            : touched.name && isNameValid
                            ? 'border-emerald-500/80 focus:border-emerald-500 text-slate-100'
                            : isDark
                            ? 'bg-slate-800/80 border-slate-700 focus:border-sky-500 text-slate-100 placeholder-slate-400'
                            : 'bg-slate-50 border-slate-200 focus:border-sky-500 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                      {touched.name && (
                        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
                          {isNameValid ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-rose-500" />
                          )}
                        </div>
                      )}
                    </div>
                    {touched.name && !isNameValid && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <span>{isEn ? 'Name must be at least 3 characters.' : 'Nama minimal 3 karakter yaa.'}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      {isEn ? 'Role / Position' : 'Peran / Jabatan'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder={isEn ? 'e.g. Owner / Mahasiswa' : 'Contoh: Owner / Mahasiswa'}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs sm:text-sm border transition focus:outline-none ${
                          isDark
                            ? 'bg-slate-800/80 border-slate-700 focus:border-sky-500 text-slate-100 placeholder-slate-400'
                            : 'bg-slate-50 border-slate-200 focus:border-sky-500 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Company & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      {isEn ? 'Business / Campus Name' : 'Nama Usaha / Kampus'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={isEn ? 'e.g. Kafe Kopi / Personal' : 'Contoh: Kafe Kopi / Personal'}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs sm:text-sm border transition focus:outline-none ${
                          isDark
                            ? 'bg-slate-800/80 border-slate-700 focus:border-sky-500 text-slate-100 placeholder-slate-400'
                            : 'bg-slate-50 border-slate-200 focus:border-sky-500 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      {isEn ? 'Project Category' : 'Kategori Proyek'}
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className={`w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm border transition focus:outline-none cursor-pointer ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-slate-100 focus:border-sky-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-sky-500'
                      }`}
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type.id} value={type.id}>
                          {isEn ? type.enLabel : type.idLabel}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Impression & Feedback Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider">
                      {isEn ? 'Impression & Review *' : 'Kesan, Ulasan & Pengalaman *'}
                    </label>
                    <span
                      className={`text-[10px] font-mono ${
                        comment.length < 10
                          ? 'text-slate-400'
                          : comment.length > 450
                          ? 'text-amber-500'
                          : 'text-emerald-500'
                      }`}
                    >
                      {comment.length}/500
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      rows={3}
                      value={comment}
                      maxLength={500}
                      onChange={(e) => setComment(e.target.value)}
                      onBlur={() => handleBlur('comment')}
                      placeholder={
                        isEn
                          ? 'Share your experience working with Velgrid (e.g. speed, communication, result)...'
                          : 'Ceritakan pengalamanmu bersama tim Velgrid (kecepatan, keramahan tim, hasil sistem)...'
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border transition focus:outline-none resize-none ${
                        touched.comment && !isCommentValid
                          ? 'border-rose-500/80 focus:border-rose-500 bg-rose-500/5 text-slate-100'
                          : touched.comment && isCommentValid
                          ? 'border-emerald-500/80 focus:border-emerald-500 text-slate-100'
                          : isDark
                          ? 'bg-slate-800/80 border-slate-700 focus:border-sky-500 text-slate-100 placeholder-slate-400'
                          : 'bg-slate-50 border-slate-200 focus:border-sky-500 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                  {touched.comment && !isCommentValid && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <span>{isEn ? 'Review must be at least 10 characters.' : 'Kesan minimal 10 karakter yaa agar lebih bermakna.'}</span>
                    </p>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full sm:flex-1 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFormValid
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg shadow-sky-500/25 active:scale-95'
                        : isDark
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{isEn ? 'Submit Review' : 'Kirim Ulasan'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className={`w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm border transition cursor-pointer ${
                      isDark
                        ? 'border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {isEn ? 'Cancel' : 'Batal'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  {isEn ? 'Thank You for Your Feedback!' : 'Terima Kasih Banyak atas Kesanmu!'}
                </h3>
                <p
                  className={`mt-2 text-xs sm:text-sm max-w-sm mx-auto ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {isEn
                    ? `Your review from "${name}" has been recorded and added to Velgrid's showcase.`
                    : `Ulasan dan kesan dari "${name}" sudah berhasil tersimpan dan langsung tampil di halaman Velgrid.`}
                </p>
              </div>

              {/* Action: Share to WhatsApp or Finish */}
              <div className="pt-3 space-y-2.5 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleShareToWhatsApp}
                  className="w-full py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isEn ? 'Forward Review to WhatsApp' : 'Kirimkan Juga ke WhatsApp Velgrid'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs border transition cursor-pointer ${
                    isDark
                      ? 'border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {isEn ? 'Done & Close' : 'Selesai & Tutup'}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

