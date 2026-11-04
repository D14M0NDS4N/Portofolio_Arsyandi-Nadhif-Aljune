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
  Layers,
  User
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Hero({ data, onTriggerToast }) {
  const { personal } = data;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [imageError, setImageError] = useState(false);

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

    onTriggerToast('Mengunduh CV ATS - Arsyandi Nadhif Aljune...', 'success');

    // Generate comprehensive ATS CV matching the user's PDF
    const atsCVContent =
      `ARSYANDI NADHIF ALJUNE
${personal.email} | ${personal.whatsapp} | ${personal.linkedin}

================================================================================
RINGKASAN PROFIL
================================================================================
${personal.bio}

================================================================================
PENDIDIKAN
================================================================================
Universitas Logistik dan Bisnis Internasional               September, 2023 - November, 2026
Diploma III Teknik Informatika - IPK 3,57
• Berfokus pada pengembangan web menggunakan HTML, CSS, dan JavaScript, serta penerapan Kecerdasan Buatan (Artificial Intelligence) dan Data Science.
• Mendalami pemrograman web, analisis data, serta pengembangan solusi teknologi yang ramah pengguna.
• Menyelesaikan berbagai proyek praktis berbasis data dan pengembangan sistem untuk memecahkan masalah nyata.
Area of Interest: Full Stack Developer, UI/UX Design, Web Development, Data Science, Machine Learning

================================================================================
PENGALAMAN MAGANG
================================================================================
1. Web Frontend Intern                                     April, 2026 - Juli, 2026
   PT. Educa Sisfomedia Indonesia (Educa Studio) - Salatiga, Jawa Tengah
   • Berhasil menyelesaikan proyek pengembangan halaman arahan (landing page) untuk sebuah Usaha Kecil dan Menengah (UKM) selama 3 bulan.
   • Merancang dan membangun antarmuka situs web serta fitur-fitur interaktifnya menggunakan HTML, CSS, dan JavaScript.
   • Menerapkan kerangka kerja Bootstrap untuk memastikan tata letak yang sepenuhnya responsif, serta mengintegrasikan Scrollspy bersama AOS (Animate On Scroll) guna menciptakan pengalaman menggulir yang dinamis dan menarik bagi pengguna.

2. Frontend Engineer Intern                                Februari, 2023 - Mei, 2023
   PT. Digdaya Olah Teknologi Indonesia - Malang, Jawa Timur
   • Mengembangkan dan mengoptimalkan antarmuka pengguna menggunakan HTML, CSS, dan JavaScript, serta memastikan desain yang responsif untuk berbagai perangkat.
   • Membangun dasbor dinamis untuk pengelolaan data pelanggan, yang dilengkapi dengan tabel interaktif dan grafik visual menggunakan React.js, sehingga meningkatkan efisiensi pengelolaan data sebesar 30%.

3. 3D Architectural Visualizer Intern                      Juli, 2021 - September, 2021
   CV. Esa Rekayasa Teknologi - Cimahi, Jawa Barat
   • Membuat pemodelan 3D dan visualisasi bangunan ruko menggunakan SketchUp dan Lumion.
   • Belajar mendesain objek 3D arsitektur, membuat animasi bangunan, serta mengedit video presentasi proyek.
   • Melakukan pemodelan 3D bangunan, membuat animasi render menggunakan Lumion, dan menyunting video hasil proyek dengan Adobe Premiere.

================================================================================
PENGALAMAN PELATIHAN & SERTIFIKASI
================================================================================
• Data Analyst                                             September, 2026 - November, 2026
  Mix Academy Batch 3
  - Mempelajari teknik pengolahan, pembersihan, dan analisis data bisnis.
  - Menguasai pembuatan laporan serta visualisasi data untuk evaluasi dan strategi usaha.
  - Mengembangkan keterampilan analitis dalam memecahkan masalah operasional dan pemasaran UMKM.

• Data Scientist Cohort                                    Februari, 2026 - Juli, 2026
  Coding Camp 2026 powered by DBS Foundation, Indonesia
  - Mempelajari pengolahan, pembersihan, dan analisis data (Data Wrangling & Exploratory Data Analysis).
  - Menguasai pembuatan model Machine Learning dan statistik menggunakan Python.
  - Mengembangkan proyek nyata dan kapabilitas problem solving berbasis data melalui capstone project.

• Web Frontend dengan Bootstrap                            April, 2026 - April, 2026
  PT. Educa Sisfomedia Indonesia (Educa Studio) - Salatiga, Jawa Tengah
  - Memahami penggunaan komponen dan sistem grid Bootstrap.
  - Membuat desain halaman web yang responsive di berbagai ukuran layar.
  - Mengembangkan keterampilan praktis pengembangan frontend untuk proyek web dan landing page.

• Front-End and Backend Developer Cohort                   Februari, 2025 - Juli, 2025
  Coding Camp 2025 powered by DBS Foundation, Indonesia
  - Mempelajari pengembangan frontend yang interaktif dan responsif untuk aplikasi web.
  - Menguasai pengembangan backend, manajemen database, serta integrasi API.
  - Mengembangkan kemampuan pemrograman web secara utuh dari sisi klien hingga peladen (full-stack).

• Coding For Disability Program - JavaScript Course        Agustus, 2024 - Oktober, 2024
  Educourse.id
  - Mempelajari dasar pemrograman JavaScript, struktur data, operator, kondisi, dan perulangan (loop).
  - Menguasai pembuatan function, objek, serta kelas dalam JavaScript.
  - Menerapkan ilmu dalam proyek pembuatan aplikasi To-Do List serta dasar pengelolaan domain dan hosting.

• Web Development Deaf to Dev                              Mei, 2024 - Mei, 2024
  Deaf to Dev x Tokopedia Academy
  - Mempelajari dasar struktur halaman web menggunakan HTML dan styling dengan CSS.
  - Menguasai penggunaan framework Bootstrap untuk mempercepat desain antarmuka.
  - Mengembangkan proyek praktis berupa pembuatan website portofolio pribadi yang responsif.

• Junior Web Programming                                   Juli, 2022 - Desember, 2022
  Yayasan Plan International Indonesia
  - Mempelajari dasar struktur halaman web menggunakan HTML.
  - Menguasai penataan gaya dan tata letak tampilan web menggunakan CSS.
  - Menerapkan materi ke dalam proyek pembuatan web untuk menampilkan hasil karya mandiri.

================================================================================
KETERAMPILAN TEKNIS
================================================================================
• Frontend Development : HTML, CSS, JavaScript, Dart, React.js, Bootstrap, Tailwind CSS
• Backend Development  : MySQL, PostgreSQL, Python, CodeIgniter, PHP, Node.js
• UI/UX Design         : Figma, Draw.io, Canva
• Data Analyst         : Microsoft Excel, SQL, Google Colab, Google Sheets

================================================================================
KETERAMPILAN NON-TEKNIS (SOFT SKILLS)
================================================================================
Manajemen Waktu | Kolaborasi | Adaptasi | Berpikir Kritis | Pemecahan Masalah | Kerja Sama Tim | Komunikasi Visual dan Tertulis

================================================================================
BAHASA
================================================================================
• Bahasa Indonesia - (Fasih)
• Bahasa Isyarat   - (Fasih)
• Bahasa Inggris   - (Dasar)
`;

    const element = document.createElement("a");
    const file = new Blob([atsCVContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `CV_ATS_Arsyandi_Nadhif_Aljune.txt`;
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
                <span className="text-slate-700 dark:text-slate-300">Role</span>
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
                  <span>massandi2010@gmail.com</span>
                </div>
              </div>

              {/* Avatar + Highlights */}
              <div className="pt-6 flex flex-col items-center text-center">

                {/* Glowing Avatar Photo Frame */}
                <div className="relative mb-5 group">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-teal-400 via-cyan-500 to-blue-600 p-1 shadow-xl shadow-teal-500/25 ring-4 ring-teal-500/10 dark:ring-teal-500/20">
                    <div className="w-full h-full rounded-[14px] bg-slate-900 overflow-hidden relative flex items-center justify-center">
                      {imageError || !personal.avatar ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-teal-400 p-2 text-center">
                          <User className="w-12 h-12 text-teal-400/80 mb-1" />
                          <span className="text-[10px] font-mono text-slate-400">Foto Profil</span>
                        </div>
                      ) : (
                        <img
                          src={personal.avatar}
                          alt={personal.fullName || personal.name}
                          onError={() => setImageError(true)}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      {/* Subtle hover vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Floating Mini Badge */}
                  <div className="absolute -bottom-3 -right-6 px-2.5 py-1 rounded-lg bg-teal-500 text-white font-mono text-[11px] font-bold shadow-md flex items-center gap-1">
                    <span>Disabilitas Tuli</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {personal.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-teal-600 dark:text-teal-400 font-mono mt-0.5">
                  Frontend Developer & Data Analyst
                </p>

                {/* Code Snippet Box */}
                <div className="w-full mt-5 p-3.5 rounded-xl bg-slate-950 text-left font-mono text-xs text-slate-300 border border-slate-800 shadow-inner overflow-hidden">
                  <div className="text-teal-400 font-semibold mb-1">// Profil Pengembang</div>
                  <div className="text-slate-400">const arsyandi = &#123;</div>
                  <div className="pl-4 text-emerald-400">alumnus: <span className="text-amber-300">'D3 Teknik Informatika (ULBI)'</span>,</div>
                  <div className="pl-4 text-emerald-400">ipk: <span className="text-cyan-300">'3.57'</span>,</div>
                  <div className="pl-4 text-emerald-400">spesialisasi: <span className="text-amber-300">'Frontend Developer'</span>,</div>
                  <div className="pl-4 text-emerald-400">orientasiDetail: <span className="text-cyan-300">true</span></div>
                  <div className="text-slate-400">&#125;;</div>
                </div>
              </div>

            </div>

            {/* Floating Tech Badges around the Card */}
            <div className="hidden md:flex items-center gap-1.5 absolute -top-4 -left-6 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-teal-600 dark:text-teal-400 animate-float">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping inline-block" />
              <span>⚛️ React.JS</span>
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
