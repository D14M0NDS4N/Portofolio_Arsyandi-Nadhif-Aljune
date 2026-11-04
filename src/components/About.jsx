import React from 'react';
import {
  Code,
  Zap,
  Sparkles,
  Users,
  CheckCircle,
  Layers,
  ShieldCheck,
  HeartHandshake,
  Compass,
  Palette,
  Eye,
  Languages,
  CheckCircle2
} from 'lucide-react';

export default function About({ data }) {
  const { personal } = data;

  const values = [
    {
      icon: Palette,
      title: "Kepekaan Estetika Seni Rupa",
      desc: "Latar belakang di bidang Seni Rupa memperkuat kepekaan rasa dalam merancang antarmuka (UI/UX) yang harmonis, proporsional, dan elegan."
    },
    {
      icon: Eye,
      title: "Pembelajar Visual & Berorientasi Detail",
      desc: "Sebagai seorang Tuli dengan kemampuan belajar visual yang kuat, saya sangat tekun, adaptif, teliti, dan fokus pada detail antarmuka pengguna."
    },
    {
      icon: Code,
      title: "Frontend & Analisis Data Terintegrasi",
      desc: "Menguasai pengembangan frontend web modern (React, Tailwind, Bootstrap) yang didukung oleh kapabilitas pemrosesan data (Python, SQL, EDA)."
    },
    {
      icon: HeartHandshake,
      title: "Solusi Digital yang Inklusif",
      desc: "Berdedikasi menciptakan aksesibilitas teknologi yang inklusif, responsif di segala perangkat, dan bermanfaat nyata bagi masyarakat luas."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">

      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profil & Latar Belakang</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tentang <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Top Story & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              Frontend Developer & Data Analyst berlatar belakang Seni Rupa dengan ketekunan visual tinggi.
            </h3>

            <p className="text-sm sm:text-base">
              Lulusan <strong className="text-teal-600 dark:text-teal-400">Diploma III Teknik Informatika (IPK 3,57)</strong> dari Universitas Logistik dan Bisnis Internasional yang memiliki keahlian dalam pengembangan web frontend dan analisis data.
            </p>

            <p className="text-sm sm:text-base">
              Memiliki latar belakang di bidang <strong className="text-slate-900 dark:text-white">Seni Rupa</strong> yang memperkuat kepekaan desain antarmuka (UI/UX) dan estetika visual. Sebagai seorang Tuli dengan kemampuan belajar visual yang kuat, saya dikenal sebagai pribadi yang tekun, adaptif, serta berorientasi pada detail.
            </p>

            <p className="text-sm sm:text-base">
              Siap berkontribusi secara profesional dalam membangun solusi digital yang responsif, inklusif, dan bermanfaat bagi masyarakat.
            </p>

            {/* Quick check points from CV */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Frontend (React, Bootstrap, Tailwind)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Backend (PHP, CodeIgniter, MySQL)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Analisis Data (Python, SQL, Excel, EDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Desain UI/UX (Figma, Canva, Draw.io)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats Display */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {personal.stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/70 shadow-lg shadow-black/5 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Soft Skills & Languages Section */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Non-Technical Skills */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                <Users className="w-4 h-4" />
                <span>Keterampilan Non-Teknis (Soft Skills)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personal.softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-teal-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                <Languages className="w-4 h-4" />
                <span>Penguasaan Bahasa</span>
              </div>
              <div className="space-y-3">
                {personal.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-sm"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.name}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Core Values 4-Card Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Karakter & Keunggulan Saya
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Nilai tambah unik yang membedakan dedikasi kerja saya dalam setiap proyek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/40 dark:hover:border-teal-500/40 shadow-md hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
