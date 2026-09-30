# Bukti kontribusi CRM Laravel

Sumber: E:/laragon/www/crmsimc, dibaca tanpa perubahan. Attribution berdasarkan author ikhlasrama16 dan diff implementasi. Manifest mencatat Laravel ^11.9, PHP ^8.2, Bootstrap dan Vite; tampilan terkait menggunakan Blade.

Checkout berada di 873ba65. Riwayat seluruh refs menyimpan commit lebih baru; pemeriksaan memakai git show langsung pada commit tersebut. Catatan ini membuktikan kontribusi kode, bukan status deployment atau keberadaan semua fitur pada checkout aktif.

| Kontribusi | Commit | Bukti |
| --- | --- | --- |
| Pencarian program JDI | 2f5bba1, 53b9981 | JdiApiClients, modal penerimaan pengajuan dan route pencarian program |
| Tagihan dan pembayaran | 59253a2, d5f24ec, eef85e7 | InvoiceController membedakan program JDI; hasil sales call, modal dan migration menyimpan data tagihan/pembayaran |
| Agenda JDI | 03ef7fe, 4ad70a3 | SalesCallResultController menambah form dan proses agenda, validasi tanggal/termin, pengiriman ke SIMCo serta pengaitan kontak |
| Rekap lead campaign | bb76251, 6ef04a3 | StatistikController menghitung status per marketer dari riwayat pada periode terpilih; tabel rekap dan penempatan pada halaman leads |
| Pengeditan dan penghapusan artikel | 78f80a1 | ArticleController menambah edit/update/destroy; Blade menambah modal dan tindakan terkait |
| API aktivitas digital marketing | 91fd957 | Controllers/API/DigitalMarketingActivitiesApiController, endpoint index/filter, eager loading aktivitas dan penjumlahan raw_points |

## Batas klaim

Pada 59253a2, method billing JDI menghasilkan UUID lokal, bukan bukti penerbitan invoice pada sistem eksternal. Copy dibatasi pada pencatatan referensi billing dan penyesuaian alur. Tidak mengklaim membangun seluruh CRM, integrasi pembayaran penuh, peningkatan konversi, atau dampak terukur. Tidak membaca credential, database maupun data klien. Repo CRM tidak diubah dan test CRM tidak dijalankan.

## Gate penambahan kartu

- Hard Gate PASS: klaim mengikuti diff, stack mengikuti manifest, tanpa angka rekaan.
- Purpose-Gate PASS: ringkasan singkat dengan detail fitur dalam accordion existing.
- Liveliness PASS: topik CRM dibedakan dari SIMCorporate dan HRIS.
- Quality Locks PASS: copy spesifik terhadap kontribusi, tanpa klaim kepemilikan seluruh produk.

Verifikasi portfolio dicatat pada penyerahan; gate ini terbatas pada tambahan konten CRM.
