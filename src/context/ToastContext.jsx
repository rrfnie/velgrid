import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, AlertCircle, X, Sparkles, Copy } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ message, title = '', type = 'success', duration = 3500 }) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, title, type }]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = {
    success: (message, title = '') => addToast({ message, title, type: 'success' }),
    info: (message, title = '') => addToast({ message, title, type: 'info' }),
    copy: (message, title = '') => addToast({ message, title, type: 'copy' }),
    error: (message, title = '') => addToast({ message, title, type: 'error' })
  };

  return (
    <ToastContext.Provider value={{ toast, addToast, removeToast }}>
      {children}

      {/* Floating Toast Notification Container */}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        <AnimatePresence mode="popLayout">
          {toasts.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto rounded-2xl shadow-xl border backdrop-blur-md p-3.5 flex items-start gap-3 bg-slate-900/95 border-slate-700/80 text-white"
            >
              {/* Icon based on type */}
              <div className="mt-0.5 flex-shrink-0">
                {item.type === 'success' && (
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
                {item.type === 'copy' && (
                  <div className="w-7 h-7 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Copy className="w-4 h-4" />
                  </div>
                )}
                {item.type === 'info' && (
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
                {item.type === 'error' && (
                  <div className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Message text */}
              <div className="flex-1 min-w-0 pr-1">
                {item.title && (
                  <h4 className="text-xs font-bold text-white leading-tight mb-0.5">
                    {item.title}
                  </h4>
                )}
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {item.message}
                </p>
              </div>

              {/* Dismiss button */}
              <button
                type="button"
                onClick={() => removeToast(item.id)}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Tutup notifikasi"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      toast: {
        success: () => {},
        info: () => {},
        copy: () => {},
        error: () => {}
      },
      addToast: () => {},
      removeToast: () => {}
    };
  }
  return context;
}

