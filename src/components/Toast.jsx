import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-fade-in-up">
      <div className={`p-4 rounded-2xl shadow-2xl border backdrop-blur-md flex items-start gap-3 ${
        isSuccess
          ? 'bg-slate-900/95 text-white border-teal-500/50 shadow-teal-500/10'
          : isError
          ? 'bg-slate-900/95 text-white border-rose-500/50 shadow-rose-500/10'
          : 'bg-slate-900/95 text-white border-slate-700 shadow-black/20'
      }`}>
        <div className="mt-0.5 shrink-0">
          {isSuccess && <CheckCircle2 className="w-5 h-5 text-teal-400" />}
          {isError && <AlertCircle className="w-5 h-5 text-rose-400" />}
          {!isSuccess && !isError && <Info className="w-5 h-5 text-cyan-400" />}
        </div>
        
        <div className="flex-1 text-sm font-medium leading-snug">
          {toast.message}
        </div>

        <button
          onClick={onClose}
          aria-label="Tutup notifikasi"
          className="text-slate-400 hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

