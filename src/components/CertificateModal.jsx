import React, { useEffect, useState } from 'react';
import { X, Award, ExternalLink, Calendar, CheckCircle, Copy, Check, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [copied, setCopied] = useState(false);

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

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 animate-fade-in-up">
        
        {/* Header Preview Image with Certificate Glow */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Tutup popup"
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Badge & Title Overlay */}
          <div className="absolute bottom-5 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-teal-500 text-white shadow-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Terverifikasi Resmi</span>
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/80 text-teal-300 border border-slate-700 backdrop-blur-md">
                {certificate.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {certificate.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Issuer & Period Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Penyelenggara / Penerbit:
              </span>
              <div className="flex items-center gap-2 mt-1 font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                <Award className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{certificate.issuer}</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Waktu Pelaksanaan:
              </span>
              <div className="flex items-center gap-2 mt-1 font-semibold text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{certificate.period}</span>
              </div>
            </div>
          </div>

          {/* Credential ID */}
          {certificate.credentialId && (
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono text-slate-500 dark:text-slate-400">Credential ID:</span>
                <span className="font-mono font-bold text-teal-600 dark:text-teal-400">{certificate.credentialId}</span>
              </div>
              <button
                onClick={handleCopyId}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-xs hover:text-teal-500 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin ID</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
              Materi & Kompetensi Yang Dikuasai
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {certificate.description}
            </p>
          </div>

          {/* Skills Acquired */}
          {certificate.skills && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 font-semibold">
                Keahlian Yang Disertifikasi:
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 border border-slate-200 dark:border-slate-700"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-teal-500" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-md transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Buka Gambar Ukuran Penuh</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Tutup
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
