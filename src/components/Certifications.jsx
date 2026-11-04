import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  Eye, 
  ShieldCheck, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink,
  Maximize2
} from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function Certifications({ data }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const certs = data.certifications || [];

  const handleCopyId = (e, id) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kredensial & Lisensi Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sertifikasi <span className="bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">Masih Berlaku</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Dokumen sertifikasi keahlian resmi dengan masa berlaku aktif, diterbitkan oleh lembaga dan institusi kredibel.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* 1. GAMBAR FOTO SERTIFIKAT */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-48 sm:h-44 overflow-hidden bg-slate-950 cursor-pointer border-b border-slate-100 dark:border-slate-800"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle dark vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Top Floating Badge "Masih Berlaku" */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-white shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      <span>Masih Berlaku</span>
                    </span>
                  </div>

                  {/* Hover Overlay Button to Open Image */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500 text-white text-xs font-bold shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Buka Foto</span>
                    </span>
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-5 space-y-3">
                  
                  {/* 2. TEKS (NAMA SERTIFIKASI) */}
                  <h3 
                    onClick={() => setSelectedCert(cert)}
                    className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    title={cert.title}
                  >
                    {cert.title}
                  </h3>

                  {/* 3. LEMBAGA PENERBIT */}
                  <div className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <Building2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <span className="font-semibold line-clamp-1">{cert.issuer}</span>
                  </div>

                  {/* 4. BERLAKU (TAHUN-TAHUN MISAL 3 TAHUN) */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      {cert.validity}
                    </span>
                  </div>

                  {/* 5. CREDENTIAL ID */}
                  {cert.credentialId && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between gap-1 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-[11px] font-mono">
                        <span className="text-slate-400 truncate">ID: {cert.credentialId}</span>
                        <button
                          onClick={(e) => handleCopyId(e, cert.credentialId)}
                          className="shrink-0 p-1 hover:text-teal-500 text-slate-400 transition-colors"
                          title="Salin ID Kredensial"
                        >
                          {copiedId === cert.credentialId ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* 6. KOLOM / TOMBOL BUKA FOTO */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-sm hover:shadow-md transition-all active:scale-98"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Buka Foto</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pure Photo Modal Lightbox (Tanpa Teks Menutupi) */}
        {selectedCert && (
          <CertificateModal
            certificate={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}

      </div>
    </section>
  );
}
