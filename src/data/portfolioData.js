export const portfolioData = {
  personal: {
    name: "Arsyandi",
    fullName: "M. Arsyandi",
    roles: [
      "Full-Stack Web Developer",
      "React & Frontend Specialist",
      "UI/UX Enthusiast",
      "Creative Problem Solver"
    ],
    tagline: "Membangun Aplikasi Web Modern, Cepat, dan Menawan.",
    bio: "Halo! Saya Arsyandi, seorang Web Developer yang bersemangat dalam merancang dan mengembangkan pengalaman digital yang intuitif, responsif, dan berkinerja tinggi. Berpengalaman dalam ekosistem JavaScript modern seperti React.js, Tailwind CSS, serta arsitektur backend yang scalable.",
    location: "Indonesia",
    status: "Tersedia untuk Proyek Freelance & Full-time",
    email: "arsyandi.dev@gmail.com",
    whatsapp: "+6281234567890",
    whatsappDisplay: "+62 812-3456-7890",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    stats: [
      { label: "Tahun Pengalaman", value: "3+" },
      { label: "Proyek Selesai", value: "25+" },
      { label: "Klien Puas", value: "18+" },
      { label: "Tingkat Kepuasan", value: "99%" },
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", level: 92, category: "Frontend", icon: "Atom" },
      { name: "JavaScript (ES6+)", level: 90, category: "Frontend", icon: "Code2" },
      { name: "Tailwind CSS", level: 95, category: "Frontend", icon: "Paintbrush" },
      { name: "HTML5 & CSS3", level: 95, category: "Frontend", icon: "Layout" },
      { name: "TypeScript", level: 82, category: "Frontend", icon: "FileCode" },
      { name: "Next.js", level: 85, category: "Frontend", icon: "Globe" },
      { name: "Redux / Zustand", level: 84, category: "Frontend", icon: "Boxes" }
    ],
    backend: [
      { name: "Node.js", level: 85, category: "Backend", icon: "Server" },
      { name: "Express.js", level: 86, category: "Backend", icon: "Cpu" },
      { name: "RESTful APIs", level: 92, category: "Backend", icon: "Network" },
      { name: "PHP / Laravel", level: 80, category: "Backend", icon: "Layers" },
      { name: "PostgreSQL", level: 82, category: "Backend", icon: "Database" },
      { name: "MySQL", level: 85, category: "Backend", icon: "Database" },
      { name: "MongoDB", level: 78, category: "Backend", icon: "Database" }
    ],
    tools: [
      { name: "Git & GitHub", level: 90, category: "Tools", icon: "GitBranch" },
      { name: "Vite & Webpack", level: 88, category: "Tools", icon: "Zap" },
      { name: "Figma (UI Design)", level: 85, category: "Tools", icon: "PenTool" },
      { name: "Postman", level: 88, category: "Tools", icon: "Send" },
      { name: "Docker Basics", level: 72, category: "Tools", icon: "Container" },
      { name: "VS Code & Terminal", level: 95, category: "Tools", icon: "Terminal" },
      { name: "Vercel / Netlify", level: 92, category: "Tools", icon: "Cloud" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Platform E-Commerce Modern & Dashboard",
      category: "Full-Stack",
      categorySlug: "fullstack",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      description: "Platform toko daring lengkap dengan keranjang belanja interaktif, integrasi pembayaran, manajemen inventaris realtime, dan dashboard admin analitik.",
      features: [
        "Sistem Autentikasi Pengguna & Role Admin",
        "Keranjang Belanja Realtime & Checkout",
        "Dashboard Analisis Penjualan dengan Grafik Interaktif",
        "Pencarian & Filter Produk Berkecepatan Tinggi"
      ],
      techStack: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Zustand"],
      liveUrl: "https://example.com/ecommerce-demo",
      githubUrl: "https://github.com/arsyandi/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "SaaS Task & Project Management App",
      category: "Web App",
      categorySlug: "webapp",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      description: "Aplikasi manajemen tugas tim dengan fitur drag-and-drop Kanban board, pelacak waktu pengerjaan, notifikasi otomatis, dan integrasi kalender.",
      features: [
        "Interactive Drag & Drop Kanban Boards",
        "Real-time Kolaborasi Tim",
        "Tracking Progress & Estimasi Waktu Proyek",
        "Dark Mode & Kustomisasi Tema Workspace"
      ],
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "Express.js", "Socket.io"],
      liveUrl: "https://example.com/task-app",
      githubUrl: "https://github.com/arsyandi/task-management",
      featured: true
    },
    {
      id: 3,
      title: "FinTech Dashboard & Crypto Tracker",
      category: "Frontend",
      categorySlug: "frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      description: "Dashboard keuangan futuristik dengan visualisasi grafik harga mata uang kripto dan saham secara live stream, kalkulator profit, dan manajemen portofolio.",
      features: [
        "Live Market Data API Integration",
        "Grafik Interaktif Recharts & Canvas",
        "Konversi Mata Uang Otomatis",
        "Responsive Mobile-first Design"
      ],
      techStack: ["React.js", "Tailwind CSS", "Chart.js", "REST API", "Lucide Icons"],
      liveUrl: "https://example.com/fintech-dashboard",
      githubUrl: "https://github.com/arsyandi/fintech-crypto-dashboard",
      featured: true
    },
    {
      id: 4,
      title: "Portal Berita & Media Kreatif Kontemporer",
      category: "Web App",
      categorySlug: "webapp",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
      description: "Portal publikasi artikel dan majalah digital modern dengan CMS headless, optimasi SEO sempurna, bookmark artikel, dan sistem komentar interaktif.",
      features: [
        "Server-Side Rendering untuk Skor SEO 100",
        "Fitur Mode Baca Bersih (Reader Mode)",
        "Social Share & Bookmark Artikel",
        "Performa Lighthouse 98+"
      ],
      techStack: ["Next.js", "Tailwind CSS", "Markdown / MDX", "Tailwind Typography"],
      liveUrl: "https://example.com/news-portal",
      githubUrl: "https://github.com/arsyandi/creative-media-portal",
      featured: false
    },
    {
      id: 5,
      title: "Landing Page Restoran Mewah & Reservasi",
      category: "Frontend",
      categorySlug: "frontend",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      description: "Website landing page berdesain elegan untuk fine-dining restaurant dengan animasi scroll mewah, menu digital interaktif, dan formulir reservasi meja.",
      features: [
        "Smooth Parallax Scroll & Micro-interactions",
        "Digital Menu dengan Filter Diet & Alergi",
        "Formulir Reservasi Meja dengan Validasi Instan",
        "Integrasi Google Maps API"
      ],
      techStack: ["HTML5", "CSS3 / Tailwind", "JavaScript ES6", "Framer Motion Look"],
      liveUrl: "https://example.com/restaurant-luxury",
      githubUrl: "https://github.com/arsyandi/restaurant-landing",
      featured: false
    },
    {
      id: 6,
      title: "Design System & Komponen UI Library",
      category: "UI/UX",
      categorySlug: "uiux",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      description: "Koleksi komponen UI modern, reusable, dan accessible (a11y) yang dirancang di Figma lalu diimplementasikan ke dalam komponen React murni.",
      features: [
        "40+ Reusable UI Components",
        "Aksesibilitas WCAG AA Compliance",
        "Dokumentasi Interaktif Storybook Style",
        "Dukungan Penuh Light & Dark Mode"
      ],
      techStack: ["React.js", "Tailwind CSS", "Figma", "Radix UI Primitives"],
      liveUrl: "https://example.com/ui-library",
      githubUrl: "https://github.com/arsyandi/ui-component-library",
      featured: false
    }
  ],

  experiences: [
    {
      period: "2023 - Sekarang",
      role: "Lead Frontend Developer / Freelancer",
      company: "Independen / Remote Studio",
      type: "Full-Time & Kontrak",
      description: "Memimpin perancangan dan pengembangan antarmuka web modern untuk berbagai klien domestik dan mancanegara. Mengoptimalkan performa halaman hingga 40% lebih cepat menggunakan React dan Tailwind CSS."
    },
    {
      period: "2022 - 2023",
      role: "Frontend Web Developer",
      company: "Tech Creative Digital Agency",
      type: "Full-Time",
      description: "Membangun lebih dari 15+ website landing page, sistem manajemen inventaris, dan portal web responsif. Berkolaborasi erat dengan tim UI/UX designer dan Backend engineer."
    },
    {
      period: "2021 - 2022",
      role: "Junior Web Developer & Intern",
      company: "Solusi Media Kreasi",
      type: "Magang & Junior",
      description: "Mengembangkan komponen antarmuka menggunakan HTML, CSS, JavaScript dan React. Melakukan refactoring kode legacy ke standar modern serta debugging antarmuka di berbagai browser."
    }
  ],

  education: [
    {
      period: "2019 - 2023",
      degree: "Sarjana Ilmu Komputer / Teknik Informatika",
      institution: "Universitas Terkemuka",
      description: "Fokus pada Rekayasa Perangkat Lunak, Algoritma Pemrograman, dan Interaksi Manusia & Komputer (HCI). Lulus dengan predikat Sangat Memuaskan."
    },
    {
      period: "2022",
      degree: "Sertifikasi Profesional React & Web Development",
      institution: "Platform Pembelajaran Global & Dicoding",
      description: "Menyelesaikan program intensif Frontend Web Developer Expert dan arsitektur aplikasi berbasis komponen React."
    }
  ],

  services: [
    {
      id: "web-dev",
      title: "Frontend Web Development",
      description: "Pembuatan website interaktif, modern, dan sangat responsif menggunakan React.js dan Tailwind CSS dengan standar kode bersih dan terstruktur.",
      icon: "Code2",
      deliverables: ["Single Page Applications (SPA)", "Interactive Landing Pages", "Web Dashboards", "Cross-Browser Testing"]
    },
    {
      id: "full-stack",
      title: "Full-Stack Development",
      description: "Pengembangan solusi web terintegrasi dari antarmuka pengguna hingga REST API dan database yang aman serta scalable.",
      icon: "Layers",
      deliverables: ["Custom REST API Integration", "Database Architecture", "User Authentication & Authorization", "Admin Management Systems"]
    },
    {
      id: "ui-ux",
      title: "UI/UX Design to Code",
      description: "Mengonversi desain Figma atau Adobe XD menjadi kode HTML/CSS/React yang presisi piksel (pixel-perfect) dan ramah perangkat bergerak.",
      icon: "Palette",
      deliverables: ["Pixel-Perfect Conversion", "Micro-Interactions & Animations", "Responsive Mobile-First View", "Accessible UI Standards"]
    },
    {
      id: "optimization",
      title: "Optimasi Performa & SEO",
      description: "Memaksimalkan kecepatan load website, efisiensi ukuran bundle, dan penerapan kaidah SEO on-page agar website muncul optimal di mesin pencari.",
      icon: "Gauge",
      deliverables: ["Core Web Vitals Improvement", "SEO Metadata Setup", "Asset & Image Optimization", "Lighthouse Score 95+"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Budi Santoso",
      role: "CEO, TechNova Startup",
      content: "Bekerja sama dengan Arsyandi sangat memuaskan! Website landing page produk kami selesai tepat waktu dengan desain yang modern dan performa sangat gesit. Konversi pengunjung kami naik 35% setelah peluncuran.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Siti Rahmawati",
      role: "Product Owner, Creative Agency",
      content: "Kemampuan Arsyandi dalam mengimplementasikan desain Figma ke React + Tailwind luar biasa rapi. Setiap animasi dan detail interaksi terasa sangat halus. Pasti akan bekerja sama lagi di proyek berikutnya!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Kevin Pratama",
      role: "Founder, KulinerKita",
      content: "Website restoran kami mendapat banyak pujian dari pelanggan. Tampilan di smartphone sangat cepat dan elegan. Sangat komunikatif dan solutif dalam menangani revisi.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ]
};
