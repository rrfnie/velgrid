import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import ProjectMockup from './ProjectMockup';
import {
  ExternalLink,
  Tag,
  TrendingUp,
  CheckCircle,
  Eye,
  X,
  Laptop,
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export default function Portfolio() {
  const { isDark } = useTheme();
  const { t, isEn } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Filter projects by category
  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleOpenDemo = (project, e) => {
    e.stopPropagation();
    setActiveProjectModal(project);
  };

  const handleWhatsAppConsult = (projectTitle) => {
    siteConfig.openWhatsApp(
      isEn
        ? `Hello Velgrid! I am interested in the portfolio project "${projectTitle}". Can we discuss building a website/app with a similar concept?`
        : `Halo Velgrid! Saya tertarik dengan portofolio proyek "${projectTitle}". Boleh diskusi pembuatan website/aplikasi dengan konsep serupa?`
    );
  };

  return (
    <section
      id="portofolio"
      className={`py-12 sm:py-16 relative scroll-mt-16 transition-colors duration-200 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50/60 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${
              isDark
                ? 'bg-sky-950/80 border-sky-900/60 text-sky-300'
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>{t.portfolio.badge}</span>
          </div>
          <h2
            className={`mt-2.5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t.portfolio.heading}
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t.portfolio.desc}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const label = isEn ? (cat.labelEn || cat.label) : cat.label;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25'
                    : isDark
                    ? 'bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Framer Motion Animation */}
        <motion.div layout className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveProjectModal(project)}
                className={`group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-sky-500/50'
                    : 'bg-white border-slate-200/90 hover:border-sky-400'
                }`}
              >
                <div>
                  {/* Visual UI Mockup Screen (Desain Antarmuka Digital) */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                    <ProjectMockup project={project} />

                    {/* Top Floating Category Badge */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold shadow-md backdrop-blur border ${
                          isDark
                            ? 'bg-slate-900/90 border-slate-700 text-sky-400'
                            : 'bg-slate-900/90 border-slate-800 text-sky-300'
                        }`}
                      >
                        {isEn ? (project.categoryLabelEn || project.categoryLabel) : project.categoryLabel}
                      </span>
                    </div>

                    {/* Bottom Client Badge */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs pointer-events-none">
                      <span className="font-semibold text-[11px] text-slate-300 drop-shadow bg-slate-950/70 px-2 py-0.5 rounded-md backdrop-blur">
                        {isEn ? (project.clientEn || project.client) : project.client}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-sky-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm backdrop-blur">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        Live Staging
                      </span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-5 sm:p-6">
                    <h3
                      className={`text-lg font-bold group-hover:text-sky-500 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {isEn ? (project.titleEn || project.title) : project.title}
                    </h3>

                    <p
                      className={`mt-2 text-xs sm:text-sm line-clamp-2 leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {isEn ? (project.summaryEn || project.summary) : project.summary}
                    </p>

                    {/* Impact Metric */}
                    <div
                      className={`mt-4 p-2.5 rounded-xl flex items-center gap-2 text-xs font-medium border ${
                        isDark
                          ? 'bg-sky-950/60 border-sky-900/40 text-sky-300'
                          : 'bg-sky-50/70 border-sky-100 text-sky-900'
                      }`}
                    >
                      <TrendingUp className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      <span className="line-clamp-1">
                        {isEn ? (project.metricsEn || project.metrics) : project.metrics}
                      </span>
                    </div>

                    {/* Tech Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`text-[11px] px-2.5 py-0.5 rounded-md font-medium border ${
                            isDark
                              ? 'bg-slate-800 text-slate-300 border-slate-700'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div
                  className={`px-5 py-3.5 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark
                      ? 'border-slate-800 bg-slate-900/60'
                      : 'border-slate-100 bg-slate-50/80'
                  }`}
                >
                  <button
                    onClick={(e) => handleOpenDemo(project, e)}
                    className="text-sky-500 hover:text-sky-400 flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Detail & Staging' : 'Detail & Staging'}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppConsult(isEn ? (project.titleEn || project.title) : project.title);
                    }}
                    className={`flex items-center gap-1 transition cursor-pointer font-semibold ${
                      isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{isEn ? 'Consult Concept' : 'Konsultasi Konsep'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Show More Projects */}
        {filteredProjects.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-200 cursor-pointer active:scale-95 shadow-sm ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <span>{showAll ? t.portfolio.showLess : `${t.portfolio.showAll} (${filteredProjects.length})`}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showAll ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}

        {/* Interactive Staging Modal with Framer Motion */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 15 }}
                transition={{ duration: 0.22 }}
                className={`rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border transition-all duration-200 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-100'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                {/* Modal Header */}
                <div
                  className={`p-5 border-b flex items-center justify-between ${
                    isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">
                      {isEn ? (activeProjectModal.categoryLabelEn || activeProjectModal.categoryLabel) : activeProjectModal.categoryLabel}
                    </span>
                    <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {isEn ? (activeProjectModal.titleEn || activeProjectModal.title) : activeProjectModal.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className={`p-1.5 rounded-xl cursor-pointer ${
                      isDark
                        ? 'hover:bg-slate-800 text-slate-400'
                        : 'hover:bg-slate-100 text-slate-500'
                    }`}
                    aria-label={t.portfolio.modal.close}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
                  {/* Visual UI Mockup Screen in Modal */}
                  <div className="rounded-2xl overflow-hidden h-60 bg-slate-950 border border-slate-800 shadow-inner">
                    <ProjectMockup project={activeProjectModal} isModal={true} />
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isEn ? 'Solution Overview' : 'Deskripsi Solusi'}
                    </h5>
                    <p
                      className={`mt-1 text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {isEn ? (activeProjectModal.summaryEn || activeProjectModal.summary) : activeProjectModal.summary}
                    </p>
                  </div>

                  {/* Key Features in Project */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isEn ? 'Key Engineering Features' : 'Cakupan Fitur Unggulan'}
                    </h5>
                    <div className="mt-2 space-y-1.5">
                      {(isEn ? (activeProjectModal.featuresEn || activeProjectModal.features) : activeProjectModal.features).map((feat, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-2 text-xs ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          <CheckCircle className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Details */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isEn ? 'Technologies Used' : 'Teknologi yang Digunakan'}
                    </h5>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {activeProjectModal.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2.5 py-1 rounded-lg font-medium border ${
                            isDark
                              ? 'bg-slate-800 text-slate-200 border-slate-700'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div
                  className={`p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
                    isDark
                      ? 'border-slate-800 bg-slate-950/60'
                      : 'border-slate-100 bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs text-sky-500 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
                    <span>{isEn ? (activeProjectModal.metricsEn || activeProjectModal.metrics) : activeProjectModal.metrics}</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleWhatsAppConsult(isEn ? (activeProjectModal.titleEn || activeProjectModal.title) : activeProjectModal.title)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-sky-200" />
                      <span>{isEn ? 'Consult Similar Concept' : 'Konsultasi Konsep Serupa'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
