import React from 'react';
import { 
  Code2, 
  Layers, 
  Palette, 
  Gauge, 
  Check, 
  ArrowRight,
  Headphones
} from 'lucide-react';

const serviceIcons = {
  Code2,
  Layers,
  Palette,
  Gauge
};

export default function Services({ data }) {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>Solusi & Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Layanan Yang Saya <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Tawarkan</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Membantu bisnis, agensi, dan individu menciptakan identitas digital berkelas melalui solusi rekayasa web terkini.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.services.map((service) => {
            const Icon = serviceIcons[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                      Cakupan / Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <Check className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 group-hover:text-teal-500 hover:underline"
                  >
                    <span>Konsultasikan Proyek Ini</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

