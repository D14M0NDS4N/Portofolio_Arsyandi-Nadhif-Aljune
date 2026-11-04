import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer({ data }) {
  const { personal } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-[#060a14] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100 dark:border-slate-800/80">

          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <span className="font-mono font-black text-base">A</span>
              </div>
              <span className="font-mono font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Arsyandi<span className="text-slate-800 dark:text-slate-200">.dev</span>
              </span>
            </a>
            <p className="mt-2 text-sm max-w-sm text-slate-500 dark:text-slate-400">
              {personal.tagline}
            </p>

            {/* Social Icons in Footer */}
            <div className="flex items-center gap-2.5 mt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-teal-500 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-teal-500 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-teal-500 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-teal-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a href="#hero" className="hover:text-teal-500 transition-colors">Beranda</a>
            <a href="#about" className="hover:text-teal-500 transition-colors">Tentang</a>
            <a href="#skills" className="hover:text-teal-500 transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-teal-500 transition-colors">Proyek</a>
            <a href="#experience" className="hover:text-teal-500 transition-colors">Pengalaman</a>
            <a href="#certifications" className="hover:text-teal-500 transition-colors">Sertifikasi</a>
            <a href="#services" className="hover:text-teal-500 transition-colors">Layanan</a>
            <a href="#contact" className="hover:text-teal-500 transition-colors">Kontak</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-all text-xs font-semibold group shadow-sm"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Tech Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personal.fullName}. Hak Cipta Dilindungi.</p>
        </div>

      </div>
    </footer>
  );
}
