import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme_preference');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Default to dark mode for a slick modern developer aesthetic
    return true;
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme_preference', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme_preference', 'light');
    }
  }, [darkMode]);

  const triggerToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-teal-500 selection:text-white">
      {/* Background Subtle Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-60" />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-grow">
          <Hero data={portfolioData} onTriggerToast={triggerToast} />
          <About data={portfolioData} />
          <Skills data={portfolioData} />
          <Projects data={portfolioData} />
          <Experience data={portfolioData} />
          <Services data={portfolioData} />
          <Testimonials data={portfolioData} />
          <Contact data={portfolioData} onTriggerToast={triggerToast} />
        </main>

        <Footer data={portfolioData} />
      </div>

      {/* Floating Global Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
