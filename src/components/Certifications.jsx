import React, { useState, useMemo } from 'react';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Eye, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Building2
} from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function Certifications({ data }) {
  const [filter, setFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = data.certifications || [];

  const categories = [
    { id: 'all', label: 'Semua Sertifikasi' },
    { id: 'data', label: 'Data Science & Analytics' },
    { id: 'web', label: 'Web Development' },
  ];

  const filteredCerts = useMemo(() => {
    if (filter === 'all') return certs;
    if (filter === 'data') {
      return certs.filter(c => c.category.toLowerCase().includes('data'));
    }
    if (filter === 'web') {
      return certs.filter(c => 
        c.category.toLowerCase().includes('web') || 
        c.category.toLowerCase().includes('frontend') || 
        c.category.toLowerCase().includes('programming')
      );
    }
    return certs;
  }, [filter, certs]);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Lisensi & Kredensial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sertifikasi & <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Pelatihan Resmi</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Bukti pencapaian kompetensi profesional dari program bergengsi seperti DBS Foundation, Tokopedia Academy, Mix Academy, Educourse, dan Plan International.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificate Cards in a Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-teal-500/50 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Certificate Image Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                
                {/* Overlay with Hover Actions */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 text-white text-xs font-bold hover:bg-teal-400 hover:scale-105 transition-all shadow-lg"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Lihat Sertifikat</span>
                  </button>
                </div>

                {/* Top Badge: Verified & Category */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-teal-500 text-white shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>

                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-slate-900/85 text-teal-300 border border-slate-700/80 backdrop-blur-md shadow-md">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Period Badge */}
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-teal-500" />
                    <span>{cert.period}</span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedCert(cert)}
                    className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors cursor-pointer flex items-center justify-between gap-2"
                  >
                    <span>{cert.title}</span>
                    <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-teal-500" />
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-2">
                    <Award className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Tags & Action */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills?.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills?.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold bg-teal-500/10">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 hover:bg-teal-500 hover:text-white transition-all"
                  >
                    <span>Buka Rincian Sertifikat</span>
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
