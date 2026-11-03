import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Send } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero', id: 'hero' },
    { name: 'Tentang', href: '#about', id: 'about' },
    { name: 'Keahlian', href: '#skills', id: 'skills' },
    { name: 'Proyek', href: '#projects', id: 'projects' },
    { name: 'Pengalaman', href: '#experience', id: 'experience' },
    { name: 'Layanan', href: '#services', id: 'services' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/85 dark:bg-[#080d1a]/85 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-teal-950/20 border-b border-slate-200/80 dark:border-slate-800/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 via-teal-400 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="font-mono font-black text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-lg bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent group-hover:brightness-110">
                Arsyandi<span className="text-slate-800 dark:text-slate-200">.dev</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-teal-600 dark:text-teal-400 font-semibold'
                      : 'text-slate-600 hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-teal-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle tema gelap/terang"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform hover:rotate-90" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* CTA Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-md shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle tema"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu navigasi"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl animate-fade-in-up">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold'
                        : 'text-slate-600 hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Hubungi Saya</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

