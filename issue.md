# [FEATURE] Implementasi Fitur Lupa Password (Reset Password)

**Tanggal Dibuat:** 2026-07-14  
**Prioritas:** Medium  
**Status:** `Open`  
**Label:** `backend`, `frontend`, `authentication`

---

## 📋 Deskripsi Fitur

Menambahkan fitur "Lupa Password" agar pengguna yang lupa kata sandi dapat mengatur ulang password mereka. 

---

## 🎯 Objektif & Kriteria Penerimaan (Acceptance Criteria)

Tolong lakukan hal berikut secara bertahap:

### 1. Alur & Halaman Frontend Baru
- [ ] Buat halaman baru `src/frontend/forgot-password.html` dan `src/frontend/forgot-password.css`.
- [ ] Samakan tema desainnya dengan `login.html` dan `register.html` (memakai logo Polibatam dan card putih rounded).
- [ ] Form ini hanya meminta input: `Email` pengguna yang terdaftar.
- [ ] Sediakan tombol **"Kirim Tautan Reset"** dan tautan untuk **"Kembali ke Login"**.

### 2. Fitur Kelanjutan (Reset Password Form - Statis)
- [ ] Jika email ditemukan (simulasi), arahkan pengguna ke halaman `src/frontend/reset-password.html` yang berisi form untuk memasukkan `Password Baru` dan `Konfirmasi Password Baru`.

### 3. Rencana API Endpoint di Backend (`src/index.ts`)
- [ ] Endpoint `POST /api/forgot-password`: Menerima input email, lalu mengecek menggunakan Drizzle ORM apakah email tersebut terdaftar di database.
- [ ] Endpoint `POST /api/reset-password`: Menerima password baru, lalu melakukan hash aman dengan `Bun.password.hash()` untuk memperbarui (update) kolom password user yang bersangkutan di MySQL.

### 4. Navigasi
- [ ] Hubungkan tautan teks "Lupa Password?" yang ada di file `src/frontend/login.html` agar mengarah ke rute `/forgot-password`.

---

## 💡 Referensi Teknis
- **File Backend Utama:** `src/index.ts`
- **File Tampilan Login:** `src/frontend/login.html`
- **Framework & Tools:** ElysiaJS, Drizzle ORM, MySQL Database, Bun Password Hashing.
