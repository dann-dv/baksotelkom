# PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Proyek:** Website Landing Page "Bakso Telkom"
**Dokumen Versi:** 1.0
**Tanggal:** 6 Oktober 2026

## 1. Pendahuluan
### 1.1 Ringkasan Proyek
Proyek ini bertujuan untuk membangun sebuah *landing page* bagi usaha kuliner "Bakso Telkom". Website ini berfungsi sebagai brosur digital premium yang memberikan informasi operasional, menarik minat pengunjung melalui visual yang kuat, dan mengarahkan konversi langsung melalui WhatsApp.

### 1.2 Tujuan
*   Meningkatkan *brand awareness* Bakso Telkom di ranah digital.
*   Menyajikan informasi krusial (jam operasional, lokasi, kontak) secara mudah dan cepat.
*   Memberikan pengalaman visual yang tak terlupakan melalui desain elegan, minimalis, dan animasi (motion) 3D.
*   Memastikan website berjalan dengan aman (secure) dan minim bug (high performance).

## 2. Spesifikasi Desain & Estetika (UI/UX)
### 2.1 Tema & Konsep Visual
*   **Gaya Desain:** Elegan, Modern, dan Minimalis. Penggunaan *white space* (ruang kosong) yang cukup untuk memberikan kesan premium.
*   **Motion 3D:** Setiap pergantian bagian (*section/page*) akan dilengkapi transisi 3D yang halus. Elemen utama (seperti mangkuk bakso) berupa aset 3D interaktif yang bergerak mengikuti kursor (*parallax 3D effect*).

### 2.2 Palet Warna (Soft Palette)
Menggunakan referensi dari [Color Hunt](https://colorhunt.co/palette/4684329ad872ffef91ffa02e):
*   **#FFEF91 (Soft Cream):** Digunakan sebagai warna *background* utama website agar mata pengunjung nyaman (tema *soft*).
*   **#468432 (Forest Green):** Digunakan untuk teks utama, tombol (*button*), dan aksen penekanan agar terlihat elegan.
*   **#9AD872 (Soft Light Green):** Digunakan sebagai warna latar belakang sekunder, elemen dekoratif, atau *hover effects*.
*   **#FFA02E (Warm Orange):** Digunakan untuk *Call to Action* (CTA), ikon bintang/rating, atau *highlight* pesan agar mencolok namun tetap harmonis.

### 2.3 Tipografi
*   **Heading:** *Playfair Display* atau *Lora* (memberikan sentuhan elegan dan kuliner klasik).
*   **Body Text:** *Poppins* atau *Montserrat* (modern, bersih, dan mudah dibaca).

## 3. Struktur Halaman (Sitemap & Content)
Landing page berjenis *Single Page Application* (SPA) dengan navigasi *scroll* yang mulus (Smooth Scrolling).

**Section 1: Hero Section (Beranda)**
*   **Visual:** Model 3D mangkuk Bakso Telkom yang berputar lambat dan interaktif saat di-hover kursor.
*   **Teks:** *Headline* menarik (Contoh: "Sajian Autentik, Cita Rasa Klasik – Bakso Telkom Klaten").
*   **CTA:** Tombol "Pesan Sekarang" (mengarahkan langsung ke WhatsApp).

**Section 2: Tentang & Keunggulan**
*   **Visual:** Transisi 3D melipat (fold) atau *fade-in scale*.
*   **Konten:** Cerita singkat mengenai kualitas daging, kuah kaldu, dan kebersihan warung.

**Section 3: Menu Favorit**
*   **Visual:** Kartu menu dengan efek *3D tilt* (memiring jika terkena kursor mouse).
*   **Konten:** Foto/ilustrasi menu utama.

**Section 4: Info Operasional & Lokasi**
*   **Waktu Buka:**
    *   Senin: 10.00 – 20.00 WIB
    *   Selasa: 10.00 – 20.00 WIB
    *   Rabu: 10.00 – 20.00 WIB
    *   Kamis: 10.00 – 20.00 WIB
    *   Jumat: 10.00 – 20.00 WIB
    *   Sabtu: 10.00 – 20.00 WIB
    *   **Minggu: TUTUP**
*   **Alamat:** Jl. Solo-Jogja No.KM. 9, Dusun 2, Tegalyoso, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57424.
*   **Visual:** Integrasi Peta (Google Maps Embed) dengan frame desain membulat (*rounded border*) dan pin 3D di peta.

**Section 5: Footer & Kontak**
*   **Kontak Pemilik:** 0821-3757-1407 (Dilengkapi link API WhatsApp: `wa.me/6282137571407`).
*   **Teks:** Hak cipta dan tautan media sosial.

## 4. Persyaratan Teknis (Tech Stack)
*   **Framework Frontend:** Next.js (React) atau Vue/Nuxt.js untuk performa dan SEO yang maksimal.
*   **Animasi & 3D:** Three.js digabungkan dengan React Three Fiber (R3F) atau GSAP.
*   **Styling:** TailwindCSS untuk memastikan desain minimalis dengan penerapan warna yang presisi.
*   **Hosting:** Vercel atau Netlify dengan CDN.

## 5. Standar Keamanan & Performa (Security & QA)
### 5.1 Keamanan (Security)
*   **Enkripsi SSL/TLS (HTTPS):** Wajib diaktifkan untuk mengenkripsi data pengunjung.
*   **HTTP Security Headers:** Menerapkan *Content Security Policy (CSP)*, `X-Frame-Options`, dan `Strict-Transport-Security` untuk mencegah celah XSS dan Clickjacking.
*   **DDoS Protection:** Menggunakan Cloudflare untuk menyembunyikan IP *server* asli dan mencegah website tumbang karena serangan *bot*.
*   **Keamanan Eksternal Link:** Tautan ke WA menggunakan atribut `rel="noopener noreferrer"`.

### 5.2 Quality Assurance (Bug Minimization)
*   **Responsive Design:** Website tidak boleh pecah (*bug layout*) di HP, Tablet, maupun Desktop (pendekatan *Mobile-first*).
*   **Optimasi Aset 3D:** Model 3D (`.gltf` / `.glb`) wajib dikompresi (di bawah 3MB) agar tidak memperlambat *loading*. Gunakan efek *loading spinner* saat aset dimuat.
*   **Performa:** Menargetkan skor > 90 pada Google Lighthouse (Performance, Accessibility, Best Practices, SEO).
*   **Cross-Browser:** Harus berjalan mulus di Chrome, Safari, Firefox, dan Edge.

## 6. Kriteria Keberhasilan (Acceptance Criteria)
1. Website berhasil memuat seluruh aset visual (termasuk 3D) di bawah 3 detik.
2. Palet warna dari Color Hunt diaplikasikan secara akurat dan harmonis.
3. Seluruh informasi (Jam buka, Alamat, No. HP) ditampilkan dengan benar tanpa *typo*.
4. CTA WhatsApp berfungsi 100% dan mengarah ke nomor yang tepat.
5. Website lulus uji keamanan dasar dan skor performa tinggi.