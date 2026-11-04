import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Eye, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Check
} from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function Certifications({ data }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const certs = data.certifications || [];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kredensial Terverifikasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sertifikasi Resmi <span className="bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">Masih Berlaku</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Dokumen sertifikasi keahlian profesional yang diakui secara resmi dan aktif berlaku, membuktikan kompetensi standar industri di bidang Web Development dan Data Analysis.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* 3-Column Certificate Cards Grid (Tanpa Tombol Filter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Certificate Photo Image Preview */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Floating "Masih Berlaku" Badge with glowing pulse */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span>Masih Berlaku</span>
                  </span>
                </div>

                {/* Validity Period on top right */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-slate-900/85 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                    {cert.validity || "Aktif"}
                  </span>
                </div>

                {/* Overlay Button on Hover: Pratinjau Foto */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold hover:scale-105 transition-all shadow-xl shadow-teal-500/30"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Lihat Foto Sertifikat</span>
                  </button>
                </div>

                {/* Title & Issuer text on image bottom */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-0.5">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  <h3 
                    onClick={() => setSelectedCert(cert)}
                    className="text-base font-bold text-white line-clamp-1 group-hover:text-teal-300 transition-colors cursor-pointer"
                  >
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Credential ID row */}
                  {cert.credentialId && (
                    <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-800 text-xs mb-3.5">
                      <span className="font-mono text-slate-400">ID Kredensial:</span>
                      <span className="font-mono font-bold text-teal-600 dark:text-teal-400 truncate">{cert.credentialId}</span>
                    </div>
                  )}

                  {/* Description snippet */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Tags & Action */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills?.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills?.length > 3 && (
                      <span className="px-2 py-1 rounded-lg text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-md shadow-teal-500/20 hover:shadow-teal-500/40 transition-all"
                  >
                    <span>Buka Foto & Detail Sertifikat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup for Certificate Lightbox */}
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
