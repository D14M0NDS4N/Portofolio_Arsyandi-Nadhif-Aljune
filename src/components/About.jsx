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
  Compass
} from 'lucide-react';

export default function About({ data }) {
  const { personal } = data;

  const values = [
    {
      icon: Code,
      title: "Clean & Maintainable Code",
      desc: "Menulis kode yang rapi, terstruktur, mudah dirawat, dan mematuhi best practice industri modern."
    },
    {
      icon: Zap,
      title: "Performa Cepat & Responsif",
      desc: "Optimal di semua ukuran layar (Mobile, Tablet, Desktop) dengan waktu muat halaman secepat kilat."
    },
    {
      icon: Sparkles,
      title: "Estetika & UI/UX Memikat",
      desc: "Memadukan fungsionalitas dengan desain antarmuka yang elegan, bersih, dan mudah digunakan pengguna."
    },
    {
      icon: HeartHandshake,
      title: "Komunikasi & Kolaborasi",
      desc: "Proaktif mendiskusikan kebutuhan proyek, transparan terhadap progress, dan responsif terhadap masukan."
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
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tentang <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Top Story & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Mengubah ide kreatif menjadi solusi website yang nyata, cepat, dan berdampak.
            </h3>
            <p>
              Saya memulai perjalanan di dunia pengembangan web dengan rasa ingin tahu yang mendalam tentang bagaimana teknologi dapat menyederhanakan kehidupan manusia. Selama bertahun-tahun bereksperimen dan membangun berbagai proyek, saya mengkhususkan diri pada pengembangan website modern dengan fokus utama di <strong className="text-teal-600 dark:text-teal-400">React.js, Tailwind CSS, dan ekosistem JavaScript modern</strong>.
            </p>
            <p>
              Bagi saya, web development bukan hanya sekadar merangkai baris kode, melainkan seni menciptakan pengalaman digital yang mulus bagi pengguna, serta memberikan nilai bisnis yang nyata bagi pemilik produk.
            </p>
            
            {/* Quick check points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Pengembangan Berbasis Komponen Reusable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Skor Optimasi SEO & Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Penerapan UI Pixel-Perfect dari Figma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Integrasi REST API & Realtime Data</span>
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
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  Terbukti & Berdedikasi
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Core Values 4-Card Grid */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Prinsip & Nilai Kerja Saya
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Standar yang selalu saya pegang teguh di setiap pengerjaan proyek.
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
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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

