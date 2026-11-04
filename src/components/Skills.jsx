import React, { useState, useMemo } from 'react';
import {
  Code2,
  Layers,
  Wrench,
  Search,
  Cpu,
  Atom,
  Paintbrush,
  Layout,
  FileCode,
  Globe,
  Boxes,
  Server,
  Network,
  Database,
  GitBranch,
  Zap,
  PenTool,
  Send,
  Container,
  Terminal,
  Cloud
} from 'lucide-react';

const iconMap = {
  Atom,
  Code2,
  Paintbrush,
  Layout,
  FileCode,
  Globe,
  Boxes,
  Server,
  Cpu,
  Network,
  Layers,
  Database,
  GitBranch,
  Zap,
  PenTool,
  Send,
  Container,
  Terminal,
  Cloud
};

export default function Skills({ data }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allSkills = useMemo(() => {
    return [
      ...(data.skills.frontend || []),
      ...(data.skills.backend || []),
      ...(data.skills.dataAnalyst || []),
      ...(data.skills.uiuxdesign || []),
      ...(data.skills.tools || [])
    ];
  }, [data.skills]);

  const filteredSkills = useMemo(() => {
    let result = allSkills;

    if (activeTab === 'frontend') {
      result = data.skills.frontend || [];
    } else if (activeTab === 'backend') {
      result = data.skills.backend || [];
    } else if (activeTab === 'dataAnalyst') {
      result = data.skills.dataAnalyst || [];
    } else if (activeTab === 'uiuxdesign') {
      result = data.skills.uiuxdesign || [];
    } else if (activeTab === 'tools') {
      result = data.skills.tools || [];
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeTab, searchQuery, allSkills, data.skills]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Keahlian & Penguasaan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tech Stack & <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Kumpulan teknologi, bahasa pemrograman, dan alat modern yang saya gunakan untuk mewujudkan website berkinerja tinggi.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {[
              { id: 'all', label: 'Semua Stack', count: allSkills.length },
              { id: 'frontend', label: 'Frontend', count: data.skills.frontend?.length || 0 },
              { id: 'backend', label: 'Backend & DB', count: data.skills.backend?.length || 0 },
              { id: 'dataAnalyst', label: 'Data Analyst', count: data.skills.dataAnalyst?.length || 0 },
              { id: 'uiuxdesign', label: 'UI/UX Designer', count: data.skills.uiuxdesign?.length || 0 },
              { id: 'tools', label: 'Tools', count: data.skills.tools?.length || 0 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${activeTab === tab.id
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
                  }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari keahlian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white placeholder-slate-400"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-lg hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            Tidak ditemukan keahlian yang cocok dengan "{searchQuery}".
          </div>
        )}

        {/* Tech Stack Banner Highlights */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-slate-900/10 border border-teal-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Fokus Utama Pengembangan: React & Tailwind CSS
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                Kombinasi React.js untuk logika komponen modular dinamis dan Tailwind CSS untuk antarmuka yang cepat serta konsisten adalah senjata utama saya.
              </p>
            </div>
            <a
              href="#projects"
              className="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-teal-500 hover:bg-teal-600 shadow-md shadow-teal-500/20 transition-all"
            >
              Lihat Contoh Implementasi
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

