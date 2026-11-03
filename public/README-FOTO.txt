PANDUAN MENAMBAHKAN FOTO PROFIL:
================================

1. Siapkan file foto Anda (format .jpg, .jpeg, atau .png).
2. Simpan file foto Anda di dalam folder ini:
   Portofolio_Arsyandi/public/foto-profil.jpg

3. Buka file data:
   Portofolio_Arsyandi/src/data/portfolioData.js

4. Pastikan bagian avatar terisi path tersebut:
   personal: {
     ...
     avatar: "/foto-profil.jpg",
     ...
   }

Foto akan otomatis tampil rapi di kartu profil hero dengan bingkai bercahaya, sudut membulat, dan efek zoom halus saat disentuh/di-hover kursor.

