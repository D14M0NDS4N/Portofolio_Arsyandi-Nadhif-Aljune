import React, { useState, useMemo } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Eye,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';

export default function Projects({ data }) {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'frontend', label: 'Web Frontend' },
    { id: 'webapp', label: 'Web Application' },
    { id: 'data', label: 'Data Science & Analyst' },
    { id: 'uiux', label: 'UI/UX Designer' },
  ];

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return data.projects;
    return data.projects.filter(p => p.categorySlug === filter);
  }, [filter, data.projects]);

  // Fungsi helper untuk mendapatkan slug logo tech stack
  const getTechSlug = (name) => {
    const map = {
      // Frontend & Frameworks
      "ReactJS": "react",
      "React (TypeScript)": "react",
      "JavaScript": "javascript",
      "TypeScript": "typescript",
      "HTML": "html5",
      "CSS": "css3",
      "Tailwind CSS": "tailwindcss",
      "Bootstrap": "bootstrap",
      "UI/UX Design": "figma",
      "Figma": "figma",

      // Backend & APIs
      "Python": "python",
      "FastAPI": "fastapi",
      "Express.js": "express",
      "Node.js": "nodedotjs",
      "PHP": "php",
      "CodeIgniter": "codeigniter",
      "RESTful API": "postman",

      // Data Science, ML & AI
      "Data Analysis": "pandas",
      "Data Visualization": "tableau",
      "Streamlit": "streamlit",
      "Machine Learning": "scikitlearn",
      "TensorFlow": "tensorflow",
      "OpenCV": "opencv",
      "MediaPipe": "google",
      "PySpark": "apachespark",
      "Google Gemini API": "googlegemini",
      "Artificial Intelligence (AI)": "openai",
      "Clustering": "python",
      "Classification": "python",
      "Jupyter notebook / Google Colabs": "jupyter",

      // Database & Storage
      "Neon Database": "postgresql",
      "PostgreSQL": "postgresql",
      "MySQL": "mysql",
      "MariaDB": "mariadb",

      // DevOps, Tools & Version Control
      "Git": "git",
      "GitHub": "github",
      "Docker": "docker",
      "VS Code": "visualstudiocode",
      "Dashboard Development": "metabase"
    };
    if (map[name]) return map[name];
    return name.toLowerCase().replace(/\s+/g, '').replace(/\./g, '').replace(/\(/g, '').replace(/\)/g, '');
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Karya Terpilih</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Portofolio & <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Proyek</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Berikut beberapa proyek web unggulan yang telah saya kerjakan dengan fokus pada performa, arsitektur bersih, dan pengalaman pengguna memuaskan.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${filter === cat.id
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30 scale-105'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-teal-500/40 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-800 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Overlay with buttons on hover */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-3 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:scale-110 transition-all shadow-lg"
                    title="Detail Proyek"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 hover:scale-110 transition-all shadow-lg"
                    title="Kunjungi Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 hover:scale-110 transition-all shadow-lg"
                    title="Kode GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Badge Category */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-bold bg-slate-900/80 text-teal-400 backdrop-blur-md border border-slate-700 shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors cursor-pointer flex items-center justify-between gap-2"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-teal-500" />
                  </h3>

                  {/* Deskripsi dengan tinggi konsisten (tepat 2 baris) */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 max-h-16 overflow-hidden">
                    {project.techStack.map((tech, idx) => {
                      const slug = getTechSlug(tech);
                      return (
                        <span
                          key={idx}
                          title={tech}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-teal-500 transition-colors"
                        >
                          <img
                            src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`}
                            alt={tech}
                            className="w-3.5 h-3.5 shrink-0 dark:invert"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          <span className="whitespace-nowrap">{tech}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detail preview */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}