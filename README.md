# Panduan Instalasi - Node.js Small Architecture

Ini adalah panduan instalasi untuk proyek \"Node.js Small Architecture\". Ikuti langkah-langkah di bawah ini untuk menginstal dan menjalankan proyek ini di lingkungan pengembangan Anda.

## Persyaratan Sistem

Sebelum memulai, pastikan sistem Anda memenuhi persyaratan berikut:

- Node.js (versi 12 atau yang lebih baru)
- NPM (Node Package Manager)
- Git (opsional)

## Langkah 1: Mengunduh Proyek

Anda dapat mengunduh proyek ini dengan menjalankan perintah berikut di terminal atau menggunakan Git:

<pre><code>git clone https://github.com/nanangNSL/node-js-small-architecture.git</code></pre>

## Langkah 2: Menginstal Dependensi

Setelah Anda berhasil mengunduh proyek, masuk ke direktori proyek dan jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

<pre><code> cd node-js-small-architecture </pre></code>
<pre><code> npm install </pre></code>

## Langkah 3: Konfigurasi

Proyek ini menggunakan file `.env` untuk mengatur konfigurasi. Buat file `.env` di direktori proyek dan tambahkan konfigurasi yang diperlukan. Anda dapat menggunakan file `.env.example` sebagai template. Ubah nama file `.env.example` menjadi `.env` dan sesuaikan nilainya sesuai kebutuhan Anda.

## Langkah 4: Menjalankan Proyek

Setelah Anda selesai mengatur konfigurasi, Anda dapat menjalankan proyek dengan perintah berikut:

<pre><code>npm start</pre></code>

Proyek akan dijalankan pada port yang ditentukan dalam konfigurasi.

## Catatan Tambahan

- Jika Anda ingin menjalankan tes, Anda dapat menggunakan perintah `npm test`.
- Pastikan port yang digunakan tidak sedang digunakan oleh aplikasi lain di sistem Anda.
- Anda dapat mengakses proyek melalui browser dengan alamat `http://localhost:port`, dengan `port` yang sesuai dengan konfigurasi Anda.

Selamat menggunakan proyek \"Node.js Small Architecture\"! Jika Anda memiliki pertanyaan atau masalah, jangan ragu untuk menghubungi pengembang."
