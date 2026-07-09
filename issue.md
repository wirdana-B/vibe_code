# Issue: Pembuatan Frontend Halaman Dashboard Sistem Monitoring

## Deskripsi
Pembuatan antarmuka pengguna (UI) untuk halaman Dashboard Sistem Monitoring Robot. Halaman ini berfokus pada simulasi antarmuka pemantauan kondisi robot secara statis di sisi frontend, tanpa integrasi API secara langsung.

## Spesifikasi Desain & Komponen Visual

### 1. Struktur Layout Dashboard
- **Topbar/Navbar**:
  - Berada di bagian atas dengan desain modern.
  - Menampilkan logo instansi (Polibatam) bersanding dengan judul "Sistem Monitoring Robot".
  - Di sebelah kanan menampilkan informasi pengguna yang sedang aktif (misal: "Operator - Wirdana") beserta tombol "Keluar" (Logout) kecil untuk kembali ke halaman awal.
- **Latar Belakang**: Abu-abu sangat muda (light gray / soft off-white) agar terlihat premium dan *clean*.

### 2. Komponen Monitoring Utama (Grid Layout)
- **Card Posisi Robot**:
  - Menampilkan teks informasi posisi (contoh: "Robot AGV-01: Zona Perakitan (X: 12.5, Y: 8.2)").
  - Dilengkapi dengan indikator visual dekoratif seperti peta grid sederhana atau ikon robot.
- **Card Status Battery (Baterai)**:
  - Menampilkan persentase baterai robot saat ini (contoh: "Battery: 85%").
  - Terdapat indikator progress bar dengan ketentuan:
    - **Hijau**: Baterai di atas 50%.
    - **Kuning**: Baterai antara 20% hingga 50%.
    - **Merah Berkedip**: Baterai di bawah 20% (menggunakan animasi CSS *blinking*).

### 3. Interaksi Tombol (Flow Navigasi)
- Halaman Login sebelumnya dimodifikasi: jika pengguna berhasil masuk (melewati validasi), maka halaman diarahkan (*redirect*) ke Dashboard.
- Menekan tombol "Keluar" pada Navbar di Dashboard akan membawa pengguna kembali ke halaman Login.

## File yang Diubah dan Dibuat
- `issue.md` (Baru / Timpa)
- `src/frontend/dashboard.html` (Baru)
- `src/frontend/dashboard.css` (Baru)
- `src/frontend/login.html` (Diperbarui)
- `src/index.ts` (Diperbarui untuk routing frontend)
