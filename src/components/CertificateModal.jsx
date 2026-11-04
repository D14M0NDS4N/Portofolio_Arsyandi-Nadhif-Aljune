import React, { useEffect } from 'react';
import { X, ExternalLink, ZoomIn } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Dark Ambient Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Pure Image Lightbox Container (Tanpa Teks Panjang) */}
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center z-10 animate-fade-in">
        
        {/* Top Minimal Toolbar */}
        <div className="w-full flex items-center justify-between pb-3 px-2 text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-sm sm:text-base font-bold truncate max-w-md">
              {certificate.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold backdrop-blur-md"
              title="Buka gambar di tab baru"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Ukuran Asli</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Tutup foto sertifikat"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-600 text-slate-200 hover:text-white transition-colors backdrop-blur-md"
              title="Tutup (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pure Certificate Image Box */}
        <div className="relative w-full max-h-[82vh] flex items-center justify-center overflow-auto rounded-2xl bg-slate-900 border border-slate-700/60 shadow-2xl p-2 sm:p-3">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-h-[78vh] w-auto max-w-full object-contain rounded-xl shadow-lg transition-transform duration-300"
          />
        </div>

        {/* Minimal Footer Info */}
        <div className="pt-2 text-[11px] font-mono text-slate-400 text-center">
          Klik di luar atau tekan tombol ESC untuk menutup
        </div>

      </div>
    </div>
  );
}
