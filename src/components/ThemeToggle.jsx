import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', showLabel = false, size = 'md' }) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleTheme();
      }}
      type="button"
      aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
      title={isDark ? 'Aktifkan Mode Terang' : 'Aktifkan Mode Gelap'}
      className={`group select-none inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer active:scale-90 ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 shadow-sm'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-sm'
      } ${showLabel ? 'px-3 py-2 w-full justify-between' : 'p-2.5'} ${className}`}
    >
      <div className="flex items-center gap-2">
        <div className="relative w-4 h-4 flex items-center justify-center">
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 group-hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 -rotate-12 group-hover:rotate-0" />
          )}
        </div>
        {showLabel && (
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            {isDark ? 'Tema Gelap' : 'Tema Terang'}
          </span>
        )}
      </div>

      {showLabel && (
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
}
