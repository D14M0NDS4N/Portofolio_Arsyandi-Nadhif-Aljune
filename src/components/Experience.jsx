import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Building2, Award } from 'lucide-react';

export default function Experience({ data }) {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Riwayat & Rekam Jejak</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pengalaman & <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Pendidikan</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Jejak karier profesional dan latar belakang akademis dalam mendalami dunia rekayasa perangkat lunak.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Pengalaman Kerja</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Pendidikan & Sertifikasi</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'experience' ? (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 dark:border-teal-500/20 space-y-10">
              {data.experiences.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform" />

                  {/* Card Container */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {item.role}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
                      <Building2 className="w-4 h-4 text-teal-500" />
                      <span>{item.company}</span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 dark:border-teal-500/20 space-y-10">
              {data.education.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform" />

                  {/* Card Container */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {item.degree}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
                      <Award className="w-4 h-4 text-cyan-500" />
                      <span>{item.institution}</span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
