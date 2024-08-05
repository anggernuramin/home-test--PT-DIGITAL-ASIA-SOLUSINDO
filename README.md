# Home Test - PT. DIGITAL ASIA SOLUSINDO

## Deskripsi

Proyek ini berisi dua fungsi untuk menyelesaikan soal Home Test dari PT. DIGITAL ASIA SOLUSINDO. Fungsi pertama mengolah data transaksi menjadi array berindeks, dan fungsi kedua mengolah data pengunjung dan transaksi menjadi rasio transaksi per pengunjung per hari.

## Persyaratan

Proyek ini menggunakan Node.js untuk menjalankan kode JavaScript. Pastikan Anda telah menginstal Node.js di sistem Anda. Anda dapat mengunduh dan menginstal Node.js dari [situs resmi Node.js](https://nodejs.org/).

## Struktur Proyek

```
.
├── data-mapping.js
├── data-visualization.js
├── README.md
```

## Instalasi

1. Clone repositori ini atau unduh file `data-mapping.js`, `data-visualization.js`, dan `README.md` ke direktori lokal Anda.

2. Buka terminal/command prompt dan arahkan ke direktori proyek.

## Cara Menjalankan

### Data Mapping

1. Buka file `data-mapping.js` untuk melihat dan menjalankan fungsi `processData`.

2. Jalankan perintah berikut di terminal untuk menjalankan script:

```bash
node data-mapping.js
```

3. Hasilnya akan dicetak ke console dalam format json.

### Data Visualization

1. Buka file `data-visualization.js` untuk melihat dan menjalankan fungsi `processDataVisualization`.

2. Jalankan perintah berikut di terminal untuk menjalankan script:

```bash
node data-visualization.js
```

3. Hasilnya akan dicetak ke console dalam format json.

## Penjelasan Solusi

Berikut adalah dua solusi untuk soal Home Test menggunakan JavaScript:

### Soal 1: Data Mapping
Langkah-langkah:
1. Mengelompokkan data berdasarkan branch dan posting_date.
2. Menghitung total grand_total untuk setiap grup.
3. Membuat struktur data sesuai dengan indentasi yang diminta.

### Soal 2: Data Visualization
Langkah-langkah:
1. Menggabungkan data_x dan data_y berdasarkan branch dan posting_date.
2. Menghitung rasio total_transactions per visitors untuk setiap branch dan posting_date.
