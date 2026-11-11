import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function LanguageToggle({ className = '', showLabel = false }) {
  const { lang, toggleLanguage, isEn } = useLanguage();
  const { isDark } = useTheme();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleLanguage();
      }}
      type="button"
      aria-label="Toggle Language English / Indonesian"
      title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
      className={`group select-none inline-flex items-center justify-center gap-1.5 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shadow-sm'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-sm'
      } ${showLabel ? 'px-3 py-2 w-full justify-between' : 'px-2.5 py-1.5'} ${className}`}
    >
      <div className="flex items-center gap-1.5">
        <Globe className="w-3.5 h-3.5 text-sky-500 transition-transform duration-300 group-hover:rotate-45" />
        <span className="text-xs font-bold font-mono uppercase tracking-wider">
          {lang.toUpperCase()}
        </span>
      </div>
      {showLabel && (
        <span className="text-xs font-semibold text-slate-400">
          {isEn ? 'English' : 'Bahasa Indonesia'}
        </span>
      )}
    </button>
  );
}

