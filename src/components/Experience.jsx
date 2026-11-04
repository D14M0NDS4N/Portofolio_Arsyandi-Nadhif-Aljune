import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Building2,
  MapPin,
  CheckCircle2,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function Experience({ data }) {
  const [activeTab, setActiveTab] = useState('magang');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak & Riwayat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Magang, Pelatihan & <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Pendidikan</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Pengalaman industri nyata di berbagai perusahaan teknologi, program akselerasi bergengsi, dan latar belakang akademis Teknik Informatika.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Tab Toggle: 3 Options */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('magang')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === 'magang'
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Pengalaman Magang</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'magang' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                {data.experiences?.length || 3}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('pelatihan')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === 'pelatihan'
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <Award className="w-4 h-4" />
              <span>Pengalaman Pelatihan</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'pelatihan' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                {data.trainings?.length || 7}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('pendidikan')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === 'pendidikan'
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Pendidikan</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-3xl mx-auto">

          {/* TAB 1: PENGALAMAN MAGANG */}
          {activeTab === 'magang' && (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 dark:border-teal-500/20 space-y-10 animate-fade-in">
              {data.experiences.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform" />

                  {/* Card Container */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                        {item.type || 'Magang'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3.5">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-teal-500" />
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{item.company}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-teal-500" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Achievements List */}
                    {item.achievements && (
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: PELATIHAN & SERTIFIKASI */}
          {activeTab === 'pelatihan' && (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 dark:border-teal-500/20 space-y-8 animate-fade-in">
              {data.trainings.map((item, idx) => (
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

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1 mb-3">
                      <Award className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{item.organizer}</span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PENDIDIKAN FORMAL */}
          {activeTab === 'pendidikan' && (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 dark:border-teal-500/20 space-y-8 animate-fade-in">
              {data.education.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-400 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform" />

                  {/* Card Container */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-teal-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.gpa && (
                        <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-sm">
                          {item.gpa}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-base font-semibold text-slate-700 dark:text-slate-200 mt-1 mb-4">
                      <GraduationCap className="w-5 h-5 text-teal-500" />
                      <span>{item.institution}</span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {item.areaOfInterest && (
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400 mb-2">
                          Area of Interest:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.areaOfInterest.split(', ').map((aoi, aIdx) => (
                            <span
                              key={aIdx}
                              className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 border border-slate-200 dark:border-slate-700"
                            >
                              {aoi}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
