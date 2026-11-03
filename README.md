# 🌟 Portofolio Web Landing Page - Arsyandi

Landing page website portofolio modern, responsif, dan interaktif yang dibangun menggunakan **HTML5**, **CSS3**, **JavaScript (ES6+)**, **React.js**, dan **Tailwind CSS**.

---

## ✨ Fitur Unggulan

1. **Desain Modern & Responsif**:
   - Tampilan adaptif sempurna di layar Smartphone, Tablet, Laptop, hingga Desktop monitor lebar.
   - Dukungan tema **Dark Mode** & **Light Mode** otomatis dengan penyimpanan preferensi pengguna di LocalStorage.
   - Efek Glassmorphism, grid pattern background bertekstur, serta aksen glowing yang halus.

2. **Hero Section Interaktif**:
   - Efek animasi ketik dinamis (*dynamic typewriter*) untuk berbagai spesialisasi/role pekerjaan.
   - Status badge aktif (*Available for hire / freelance*).
   - Tombol cepat untuk menjelajahi proyek dan unduh CV/Resume instan dengan animasi selebrasi *confetti*.
   - Kartu profil developer bergaya terminal dengan kode snippet interaktif dan metrik pencapaian.

3. **Tentang Saya (About Section)**:
   - Narasi profil profesional, nilai kerja (*Core Values*), dan ringkasan metrik statistik (Pengalaman, Proyek Selesai, Kepuasan Klien).

4. **Keahlian & Tech Stack (Skills Section)**:
   - Filter kategori keahlian: **Frontend**, **Backend & Database**, serta **Tools & DevOps**.
   - Kolom pencarian keahlian (*live search filter*).
   - Indikator persentase penguasaan teknologi dengan animasi *progress bar*.

5. **Karya & Proyek Terpilih (Projects Section)**:
   - Filter tab berdasarkan kategori proyek (*All, Full-Stack, Web App, Frontend, UI/UX*).
   - Hover preview card dengan tombol Live Demo, GitHub Repository, dan Detail Modal.
   - **Interactive Modal Popup**: Menampilkan tangkapan layar, deskripsi lengkap, daftar fitur utama, dan daftar teknologi yang digunakan.

6. **Pengalaman & Pendidikan (Experience Section)**:
   - Garis waktu vertikal (*vertical timeline*) yang rapi dengan switch tab antara riwayat pekerjaan dan latar belakang pendidikan/sertifikasi.

7. **Layanan (Services Section)**:
   - Kartu layanan terperinci mencakup Frontend Web Development, Full-Stack Solutions, UI/UX to Code, hingga Optimasi Performa & SEO lengkap dengan checklist *deliverables*.

8. **Ulasan Klien (Testimonials Section)**:
   - Kartu ulasan dan testimoni dengan rating bintang 5, kutipan rekomendasi, dan foto klien.

9. **Kontak & Formulir Interaktif (Contact Section)**:
   - Kartu kontak langsung: WhatsApp, Email (dengan tombol *1-Click Copy*), dan Domisili.
   - Formulir pesan interaktif dengan validasi input, status pengiriman, notifikasi toast feedback, serta efek *confetti*.

---

## 🛠️ Tech Stack & Dependensi

- **Core**: [React 18](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Cara Menjalankan Proyek

Pastikan Node.js (versi 18 ke atas) sudah terpasang di komputer Anda.

### 1. Menjalankan Server Pengembangan (Development):
```bash
npm run dev
```
Buka browser di alamat: `http://localhost:3000` (atau port yang tertera di terminal).

### 2. Membangun Versi Produksi (Production Build):
```bash
npm run build
```
Hasil file yang telah dioptimasi dan diminifikasi akan berada di dalam folder `dist/`.

### 3. Menguji Hasil Build (Preview):
```bash
npm run preview
```

---

## 📁 Struktur Direktori

```
Portofolio_Arsyandi/
├── dist/                     # File hasil kompilasi production
├── node_modules/             # Dependensi npm
├── public/                   # Asset publik
├── src/
│   ├── components/           # Komponen React modular
│   │   ├── About.jsx         # Bagian tentang saya & nilai kerja
│   │   ├── Contact.jsx       # Formulir kontak & info WhatsApp/Email
│   │   ├── Experience.jsx    # Garis waktu pengalaman & pendidikan
│   │   ├── Footer.jsx        # Footer & tombol kembali ke atas
│   │   ├── Hero.jsx          # Hero section, bio, typewriter effect, CV download
│   │   ├── Navbar.jsx        # Navigasi sticky, tema toggle, mobile drawer
│   │   ├── ProjectModal.jsx  # Popup modal detail proyek
│   │   ├── Projects.jsx      # Grid proyek dan filter kategori
│   │   ├── Services.jsx      # Layanan dan cakupan kerja
│   │   ├── Skills.jsx        # Filter tech stack dan bar tingkat penguasaan
│   │   ├── SocialIcons.jsx   # Ikon SVG vektor (GitHub, LinkedIn, Instagram)
│   │   ├── Testimonials.jsx  # Testimoni & rating klien
│   │   └── Toast.jsx         # Notifikasi mengambang global
│   ├── data/
│   │   └── portfolioData.js  # File pusat data portofolio (MUDAH DIUBAH)
│   ├── App.jsx               # Komponen utama aplikasi
│   ├── index.css             # Konfigurasi Tailwind, scrollbar, efek glass
│   └── main.jsx              # Entry point React DOM
├── index.html                # Dokumen HTML utama & font Google
├── package.json              # Konfigurasi dependensi & script npm
├── postcss.config.js         # Konfigurasi PostCSS
├── tailwind.config.js        # Kustomisasi tema & warna Tailwind CSS
├── vite.config.js            # Konfigurasi Vite dev server
└── README.md                 # Dokumentasi proyek
```

---

## ✏️ Cara Mengubah Konten Portofolio Anda

Semua data teks, informasi pribadi, tautan media sosial, daftar proyek, pengalaman kerja, keahlian, dan layanan tersimpan secara terpusat dan rapi di dalam satu file:

👉 `src/data/portfolioData.js`

Cukup buka file tersebut dan ubah nilai-nilainya sesuai data pribadi Anda, seperti:
- `personal.name` & `personal.fullName`: Nama Anda
- `personal.roles`: Daftar role yang akan berganti pada animasi ketik di bagian Hero
- `personal.email` & `personal.whatsapp`: Kontak Anda
- `personal.github`, `personal.linkedin`, `personal.instagram`: Tautan profil Anda
- `projects`: Menambah atau mengubah portofolio proyek Anda beserta screenshot dan linknya.
- `skills`: Menambah keahlian dan persentase penguasaan teknologi Anda.

