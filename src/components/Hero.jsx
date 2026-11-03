import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Mail, 
  MessageCircle,
  Code2,
  CheckCircle2,
  Terminal,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Hero({ data, onTriggerToast }) {
  const { personal } = data;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Dynamic typing effect for roles
  useEffect(() => {
    const currentRole = personal.roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(60);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.roles.length);
          setTypingSpeed(120);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, personal.roles, typingSpeed]);

  const handleDownloadCV = () => {
    // Interactive confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#14b8a6', '#06b6d4', '#3b82f6', '#f59e0b']
    });

    onTriggerToast('Memulai unduh Curriculum Vitae (CV) Arsyandi...', 'success');
    
    // Create dummy CV text or direct download link
    const element = document.createElement("a");
    const file = new Blob([
      `CURRICULUM VITAE - ${personal.fullName}\n` +
      `Bidang: ${personal.roles.join(', ')}\n` +
      `Email: ${personal.email}\n` +
      `WhatsApp: ${personal.whatsappDisplay}\n` +
      `Lokasi: ${personal.location}\n\n` +
      `Tentang:\n${personal.bio}\n\n` +
      `Keahlian Utama:\n- Frontend: React.js, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3, TypeScript\n- Backend: Node.js, Express, REST APIs, MySQL/PostgreSQL\n` +
      `Portfolio Website: https://arsyandi-portfolio.local\n`
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `CV_Arsyandi_WebDeveloper.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/15 to-blue-500/10 rounded-full blur-3xl pointer-events-none animate-blob -z-10" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000 -z-10" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/15 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-mono text-teal-600 dark:text-teal-400 font-medium flex items-center gap-2">
                <span>👋 Halo, Saya</span>
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personal.fullName}
              </h1>
              
              {/* Animated Typing Role */}
              <div className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold min-h-[48px] sm:min-h-[52px]">
                <span className="text-slate-700 dark:text-slate-300">Spesialis</span>
                <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent underline decoration-teal-500/40 decoration-wavy decoration-2">
                  {displayText}
                </span>
                <span className="w-1 h-7 sm:h-9 bg-teal-500 animate-pulse inline-block"></span>
              </div>
            </div>

            {/* Tagline & Bio description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personal.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Lihat Karya & Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-md shadow-black/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-teal-500" />
                <span>Unduh CV (Resume)</span>
              </button>
            </div>

            {/* Social Media Links & Fast Contact */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Temukan Saya:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-500 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-500 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-500 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-500 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${personal.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Contact"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-500 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Card & Floating Tech Stacks */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl transform rotate-3 scale-95" />

            {/* Main Interactive Developer Profile Card */}
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl">
              
              {/* Header inside card: Mac-style dots */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                  <Terminal className="w-3 h-3 text-teal-400" />
                  <span>arsyandi@portfolio:~$</span>
                </div>
              </div>

              {/* Avatar + Highlights */}
              <div className="pt-6 flex flex-col items-center text-center">
                
                {/* Glowing Avatar Frame */}
                <div className="relative mb-5">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-teal-400 via-cyan-500 to-blue-600 p-1 shadow-xl shadow-teal-500/20">
                    <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center overflow-hidden">
                      <div className="text-4xl sm:text-5xl font-mono font-bold bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
                        &lt;A/&gt;
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Mini Badge */}
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-lg bg-teal-500 text-white font-mono text-[11px] font-bold shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {personal.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-teal-600 dark:text-teal-400 font-mono mt-0.5">
                  React.js & Tailwind Specialist
                </p>

                {/* Code Snippet Box */}
                <div className="w-full mt-5 p-3.5 rounded-xl bg-slate-950 text-left font-mono text-xs text-slate-300 border border-slate-800 shadow-inner overflow-hidden">
                  <div className="text-teal-400 font-semibold mb-1">// Focus Stack</div>
                  <div className="text-slate-400">const dev = &#123;</div>
                  <div className="pl-4 text-emerald-400">cleanCode: <span className="text-cyan-300">true</span>,</div>
                  <div className="pl-4 text-emerald-400">framework: <span className="text-amber-300">'React.js'</span>,</div>
                  <div className="pl-4 text-emerald-400">styling: <span className="text-amber-300">'Tailwind CSS'</span>,</div>
                  <div className="pl-4 text-emerald-400">speed: <span className="text-amber-300">'100/100'</span></div>
                  <div className="text-slate-400">&#125;;</div>
                </div>

                {/* Key Stats Counter Grid */}
                <div className="w-full grid grid-cols-2 gap-3 mt-5">
                  {personal.stats.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                        {item.value}
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Floating Tech Badges around the Card */}
            <div className="hidden md:flex items-center gap-1.5 absolute -top-4 -left-6 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-teal-600 dark:text-teal-400 animate-float">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping inline-block" />
              <span>⚛️ React 18+</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 absolute -bottom-5 -right-4 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-cyan-600 dark:text-cyan-400 animate-float animation-delay-2000">
              <span>🎨 Tailwind CSS</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
