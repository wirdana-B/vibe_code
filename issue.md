# [FEATURE] Implementasi Fitur Pendaftaran Akun (Register)

**Tanggal Dibuat:** 2026-07-14  
**Prioritas:** High  
**Status:** `Open`  
**Label:** `backend`, `frontend`, `database`, `authentication`

---

## 📋 Deskripsi Fitur

Saya sudah berhasil mengintegrasikan database untuk fitur Login. Sekarang, tolong bantu saya mengimplementasikan fitur pendaftaran akun baru (Register) karena tombol "Daftar di sini" pada halaman `src/frontend/login.html` belum berfungsi.

---

## 🎯 Objektif & Kriteria Penerimaan (Acceptance Criteria)

Tolong lakukan hal berikut secara bertahap:

### 1. Buat Halaman Frontend Register
- [ ] Buat file baru bernama `src/frontend/register.html` dan `src/frontend/register.css` (samakan tema desainnya dengan `login.html` yang bersih memakai logo PoliBatam).
- [ ] Form register harus meminta input:
  - Nama Lengkap
  - Email
  - Password
  - Konfirmasi Password

### 2. Daftarkan Rute Tampilan di Backend (`src/index.ts`)
- [ ] Tambahkan rute `GET /register` untuk menyajikan file `src/frontend/register.html`.
- [ ] Tambahkan rute `GET /register.css` untuk membaca file styling-nya.

### 3. Buat API Endpoint `/api/register` (POST) di `src/index.ts`
- [ ] Validasi input body: pastikan nama, email, dan password terisi, serta pastikan password cocok dengan konfirmasi password.
- [ ] Cek ke database menggunakan Drizzle ORM apakah email tersebut sudah terdaftar di tabel `users`. Jika sudah ada, kembalikan pesan error.
- [ ] Jika email masih baru, lakukan hash password yang aman menggunakan `await Bun.password.hash(password)`.
- [ ] Simpan data user baru tersebut ke dalam tabel `users` dengan default role: `'user'`.

### 4. Hubungkan Interaksi Frontend ke API
- [ ] Pastikan di `login.html`, tautan "Daftar di sini" diarahkan ke rute `/register`.
- [ ] Di `register.html`, tambahkan script `fetch()` POST ke `/api/register` agar ketika registrasi sukses, user langsung diarahkan secara otomatis ke halaman `/login`.

---

## 💡 Referensi Teknis
- **File Backend Utama:** `src/index.ts`
- **File Tampilan Login:** `src/frontend/login.html`
- **Framework & Tools:** ElysiaJS, Drizzle ORM, MySQL Database, Bun Password Hashing.
