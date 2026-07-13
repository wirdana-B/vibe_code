# [FEATURE] Halaman "Profil & Manajemen Akses"

**Tanggal Dibuat:** 2026-07-13  
**Prioritas:** Medium  
**Status:** `Open`  
**Label:** `enhancement`, `frontend`, `ui`

---

## 📋 Deskripsi Fitur

Tambahkan halaman baru **"Pengaturan Profil & Akun"** yang dapat diakses melalui menu navigasi utama di seluruh halaman aplikasi. Halaman ini berfungsi sebagai pusat pengelolaan identitas pengguna dan simulasi manajemen hak akses (role) di dalam sistem Monitoring Robot.

---

## 🎯 Tujuan & Latar Belakang

Saat ini, aplikasi hanya menampilkan nama pengguna secara statis di Navbar (`Operator - Wirdana`) tanpa ada halaman khusus untuk melihat detail profil, mengubah data akun, atau mengelola hak akses. Fitur ini diperlukan untuk:

1. Memberikan pengalaman pengguna yang lebih lengkap dan profesional.
2. Menyediakan titik tunggal (*single point of control*) untuk manajemen akun.
3. Mensimulasikan alur manajemen role **Admin** vs **User Biasa** sebagai dasar pengembangan sistem autentikasi selanjutnya.

---

## ✅ Kriteria Penerimaan (Acceptance Criteria)

Halaman dianggap selesai jika memenuhi seluruh kriteria berikut:

- [ ] Halaman dapat diakses melalui rute `/profile`.
- [ ] Tampilan konsisten dengan halaman-halaman yang sudah ada (Navbar, Sub-Nav, warna, font `Inter`, card putih dengan `border-radius` dan `box-shadow`).
- [ ] Menampilkan informasi profil pengguna secara statis (foto, nama, email, role).
- [ ] Terdapat tombol/form statis untuk aksi **"Edit Profil"** dan **"Ganti Password"**.
- [ ] Terdapat komponen interaktif untuk simulasi **toggle/switch role** antara `User Biasa` dan `Admin`.
- [ ] Terdapat tombol **"Logout"** berwarna merah (*danger*) yang mengarahkan pengguna kembali ke halaman Login (`/`).
- [ ] Menu navigasi (Sub-Nav) di **semua halaman frontend** diperbarui untuk menyertakan tautan ke halaman Profile.

---

## 🖼️ Spesifikasi Desain & UI

### 1. Layout & Header Halaman

| Elemen | Detail |
|---|---|
| **Judul Halaman** | "Pengaturan Profil & Akun" |
| **Ikon Halaman** | `fa-solid fa-user-gear` (FontAwesome) |
| **Deskripsi Sub-judul** | "Kelola informasi pribadi, keamanan akun, dan hak akses Anda." |
| **Wrapper Konten** | Card/panel putih bersih, `border-radius: 12px`, `box-shadow: 0 4px 16px rgba(0,0,0,0.07)` (konsisten dengan `.panel-card` di `history.css`) |
| **Background Halaman** | `#f8fafc` (konsisten dengan `--bg-color` di `dashboard.css`) |

---

### 2. Komponen A — Informasi Profil Statis

Kartu yang menampilkan ringkasan identitas pengguna yang sedang login.

| Sub-Elemen | Detail |
|---|---|
| **Foto Profil** | Avatar besar (~80px), menampilkan ikon `fa-solid fa-user` atau inisial nama dalam lingkaran berwarna biru primer (`#2563eb`). |
| **Nama Pengguna** | Teks tebal, ukuran besar. Contoh nilai: `Wirdana` |
| **Email** | Teks muted. Contoh nilai: `wirdana@polibatam.ac.id` |
| **Role Saat Ini** | Badge/pill berwarna biru untuk `Admin` atau abu-abu untuk `User Biasa`. Nilai awal: `Operator` |

---

### 3. Komponen B — Pengaturan Akun (Aksi Statis)

Dua tombol/item aksi sebagai placeholder visual (belum terhubung ke backend):

- **Tombol "Edit Profil"** — Tampilan sekunder (outline), ikon `fa-solid fa-pen-to-square`.
- **Tombol "Ganti Password"** — Tampilan sekunder (outline), ikon `fa-solid fa-lock`.

> **Catatan:** Tombol-tombol ini **bersifat statis** untuk saat ini. Tidak perlu modal atau form fungsional. Dapat ditampilkan sebagai baris item pengaturan (setting row) dengan ikon, label, dan chevron (`fa-chevron-right`).

---

### 4. Komponen C — Manajemen Role (Simulasi Interaktif)

Komponen khusus yang mensimulasikan perubahan hak akses pengguna secara visual (tanpa API call ke server).

| Elemen | Detail |
|---|---|
| **Judul Seksi** | "Manajemen Hak Akses" dengan ikon `fa-solid fa-shield-halved` |
| **Kontrol Utama** | Sebuah `<select>` dropdown ATAU toggle switch dengan dua opsi: `User Biasa` dan `Admin` |
| **Perilaku Interaktif** | Ketika opsi diubah, badge Role Saat Ini pada Komponen A ikut berubah secara dinamis via JavaScript DOM manipulation (tanpa reload halaman). |
| **Peringatan Visual** | Banner/teks kecil berwarna kuning/oranye: "Perubahan role hanya bersifat simulasi dan tidak disimpan ke server." |

---

### 5. Komponen D — Tombol Logout

| Elemen | Detail |
|---|---|
| **Posisi** | Bagian paling bawah halaman, dalam container card tersendiri atau sebagai baris terakhir. |
| **Label** | `Keluar dari Akun` |
| **Ikon** | `fa-solid fa-right-from-bracket` |
| **Warna Normal** | `background: #ef4444` (sesuai `--status-red` di `dashboard.css`), teks putih. |
| **Warna Hover** | `background: #dc2626` (sedikit lebih gelap, dengan transisi smooth). |
| **Aksi onclick** | Navigasi ke `/` (halaman Login). |

---

## 🔧 Rencana Perubahan File (Scope of Changes)

### File Baru

| File | Deskripsi |
|---|---|
| `src/frontend/profile.html` | Markup HTML lengkap untuk halaman Profil & Manajemen Akses, termasuk inline `<script>` untuk logika role toggle. |
| `src/frontend/profile.css` | Stylesheet khusus halaman Profile, mengikuti pola penamaan CSS yang sudah ada. |

### File yang Dimodifikasi

| File | Perubahan yang Diperlukan |
|---|---|
| `src/index.ts` | Tambah 2 route baru: `.get("/profile", ...)` untuk HTML dan `.get("/profile.css", ...)` untuk CSS. |
| `src/frontend/dashboard.html` | Tambah `<a href="/profile">` dengan ikon `fa-user-gear` di dalam blok `<div class="sub-nav">`. |
| `src/frontend/history.html` | Tambah `<a href="/profile">` dengan ikon `fa-user-gear` di dalam blok `<div class="sub-nav">`. |
| `src/frontend/monitoring-posisi.html` | Tambah `<a href="/profile">` dengan ikon `fa-user-gear` di dalam blok `<div class="sub-nav">`. |
| `src/frontend/monitoring-battery.html` | Tambah `<a href="/profile">` dengan ikon `fa-user-gear` di dalam blok `<div class="sub-nav">`. |

---

## 💡 Catatan Teknis & Referensi Implementasi

| Aspek | Detail |
|---|---|
| **Backend** | Elysia (Bun) — route baru didaftarkan dengan pola `.get(path, () => Bun.file(...))` di `src/index.ts`. |
| **CSS Design Tokens** | Gunakan variabel `:root` yang ada di `dashboard.css` (`--primary-color`, `--bg-color`, `--status-red`, dll.). |
| **Referensi Struktur HTML** | Gunakan `history.html` sebagai template utama (Navbar + Sub-Nav + `page-header` + `panel-card`). |
| **JavaScript** | Vanilla JS murni, inline `<script>` — konsisten dengan pola halaman yang sudah ada. Tidak ada library tambahan. |
| **Ikon** | FontAwesome 6.4.0 — sudah di-load via CDN di semua halaman. |
| **Font** | Inter dari Google Fonts — sudah di-load via CDN di semua halaman. |

---

## 🔗 File Terkait

- `src/frontend/login.html` — Target redirect tombol Logout.
- `src/frontend/dashboard.html` — Referensi struktur Navbar & Sub-Nav.
- `src/frontend/history.html` — Referensi terbaik untuk `page-header` dan `panel-card`.
- `src/index.ts` — Lokasi pendaftaran route baru.
- `src/frontend/dashboard.css` — Sumber design tokens (variabel CSS).
