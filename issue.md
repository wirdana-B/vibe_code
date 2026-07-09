# Project Implementation Plan: ElysiaJS + Drizzle + MySQL Backend

## Overview
This document outlines the high-level steps to set up a new backend service using Bun, ElysiaJS, Drizzle ORM, and MySQL.

## Technical Stack
- **Runtime**: Bun
- **Framework**: ElysiaJS
- **ORM**: Drizzle ORM
- **Database**: MySQL

## Implementation Steps

### 1. Project Initialization
- Initialize a new Bun project in this directory.
- Install the main dependencies: `elysia`, `drizzle-orm`, dan `mysql2`.
- Install the development dependencies: `bun-types`, `drizzle-kit`.

### 2. Database Configuration & Schema
- Setup file `.env` untuk menyimpan `DATABASE_URL` koneksi MySQL.
- Buat konfigurasi Drizzle (`drizzle.config.ts`).
- Definisikan file skema database dasar (misal `src/db/schema.ts`) dengan setidaknya satu tabel contoh (misalnya tabel `users`).
- Buat file koneksi database (misal `src/db/index.ts`) untuk menghubungkan Drizzle dengan instance MySQL.

### 3. API Setup (ElysiaJS)
- Buat entry point aplikasi utama (misal `src/index.ts`).
- Inisialisasi server ElysiaJS.
- Buat endpoint dasar (misalnya route `GET /` untuk health check) dan pastikan berjalan lancar.
- Integrasikan route Elysia dengan fungsi database untuk memastikan Drizzle dapat melakukan query (Contoh: endpoint untuk mengambil semua *users*).

### 4. Scripts & Migrations Setup
- Tambahkan script pada `package.json` untuk mempermudah development:
  - `dev`: Menjalankan server lokal menggunakan `bun --watch`.
  - `db:generate`: Untuk menghasilkan file migrasi database via Drizzle Kit.
  - `db:push`: Untuk mendorong skema ke database MySQL (atau `db:migrate`).

## Catatan Tambahan
- Gunakan TypeScript secara *default* karena Bun dan Elysia sangat mendukung ekosistem ini.
- Fokus pada struktur yang fungsional dan modular (pisahkan *routes*, *database schema*, dan *handlers* jika memungkinkan, tapi tidak perlu terlalu kompleks di tahap awal).
- Pastikan untuk melakukan *testing* koneksi database sebelum lanjut ke logic yang lebih rumit.
