# Bukti kontribusi SIMCorporate

Sumber: repo lokal E:/laragon/www/simcorporate. Diperiksa read-only pada 30 September 2026. Repo SIMCorporate tidak diubah.

Attribution difilter melalui author ikhlasrama16, dengan email ikhlasrama16@gmail.com dan alamat noreply GitHub yang terkait. Repo memiliki banyak kontributor; keberadaan modul tidak dianggap sebagai bukti bahwa Ikhlas membangun seluruh modul. Pesan commit dibaca bersama diff dan source terkait, karena beberapa pesan menyebut implementasi baru padahal diff hanya memperbarui kode yang sudah ada.

| Kontribusi di portfolio | Commit author Ikhlas | Bukti source / diff |
| --- | --- | --- |
| Laporan laba rugi dan buku besar | 55f48ab29 | finance/app/controller/income_statement.php, ledger.php, model/Journal_model.php: query jurnal, filter akun/periode, saldo berjalan, dan view laporan |
| Kontrol pembayaran SPM | d0e0618a7 | finance/app/controller/spm_control.php dan views/spm_control/index.php baru; melengkapi rekening/tanggal cair dan menyimpan riwayat perubahan |
| Saldo per lembaga, snapshot dan mutasi rekening virtual | 2ef21c720, 8095d86e2 | finance/app/controller/rekening_virtual.php: saldo lembaga, snapshot dan mutasi. 8095d86e2 memperbarui controller existing, bukan menciptakan seluruh sistem rekening virtual |
| Honor eksternal JDI | 9bf1618b6 | finance/app/repositories/HonorEksternalRepository.php, controller/honor_eksternal.php, view dan JS: dukungan multi-lembaga, pemisahan data JDI, status pembayaran |
| Modul awal aset, kategori dan keuangan aset | 790f36b39 | File baru asset-management/app/core, controller, model dan view pada commit awal |
| Filter/riwayat aset, lokasi dan penanggung jawab | 76ee77b06, ef28cd835 | Riwayat Git author Ikhlas menyebut implementasi fitur; source asset-management/app/controller/asset.php mempunyai detail, riwayat, update_lokasi dan update_pj |
| Statistik kondisi dan nilai pasar aset | 5a97c3f42, c34a7ebf1 | Statistik, field kondisi, nilai pasar dan tanggal survei; diff c34a7ebf1 menambahkan statistik dan field nilai pasar |
| Hub SKPISO | 99472b5ad | hris/app/controller/skpiso.php: pemeriksaan akses, pengambilan data API dan rekap dokumen pending; view skpiso/hub.php baru |
| Sinkronisasi agenda SKPISO | 96269145f | hris/app/api/skpiso.php baru dan migration mapping; auth token, method POST, validasi waktu, deteksi bentrok, mapping agenda dan transaksi database |

## Batas lingkup

- HRIS (KPI/IKO, logbook, absensi, cuti, profil karyawan) dan CRM dipisahkan dari deskripsi SIMCo ini untuk ditelusuri tersendiri pada tahap berikutnya.
- Folder hris dalam repo SIMCorporate juga menyimpan fitur lintas aplikasi. Integrasi SKPISO dicantumkan sebagai integrasi di sisi SIMCo, bukan klaim kepemilikan seluruh SKPISO.
- Tidak memasukkan data pegawai, rekening, nilai pembayaran, credential, atau aturan khusus pengguna ke copy publik.
- Tidak menggunakan jumlah commit sebagai ukuran dampak, dan tidak membuat angka pengguna, performa, atau penghematan waktu.
- Copy portfolio menyebut kontribusi pada fitur, bukan pencipta seluruh platform.

## Gate copy

Hard Gate PASS: nama fitur mengikuti commit dan source, tanpa angka dampak atau testimonial baru. Purpose-Gate PASS: daftar fitur ditampilkan dalam accordion existing agar kartu tetap ringkas. Liveliness PASS: struktur visual existing dipertahankan, detail SIMCo menjadi spesifik terhadap pekerjaan pengguna. Quality Locks PASS: deskripsi suite generik diganti dengan kontribusi per fitur. Pengujian TypeScript/build dan pemeriksaan browser dicatat pada penyerahan hasil.
