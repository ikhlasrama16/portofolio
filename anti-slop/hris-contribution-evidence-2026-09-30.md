# Bukti kontribusi HRIS Laravel

Sumber: E:/laragon/www/hris, read-only. Attribution: commit author ikhlasrama16. Tidak mengubah repo HRIS, menjalankan migration, atau membaca data pegawai dan credential.

Repo ini berbeda dari SIMCorporate dan SKPISO PHP native. composer.json mencatat Laravel ^11.9, PHP ^8.2, Inertia ^2.0, DomPDF dan PhpSpreadsheet. package.json mencatat Bootstrap, React, Inertia dan Vite. AGENTS.md menjelaskan frontend hybrid dengan Blade dominan; fitur kontribusi yang diperiksa di sini memakai banyak view Blade. Karena itu kartu memakai Laravel, PHP, Blade, Bootstrap, JavaScript, SQL dan REST API, tanpa mengklaim seluruh fitur dikerjakan dengan React.

| Kontribusi | Commit author Ikhlas | Bukti |
| --- | --- | --- |
| Slip gaji dan perhitungan absensi | 73f141f0, 9f312aba, 43add90b | Template slip per jenis karyawan; penyesuaian AttendancePayrollService dan PayslipRunController; PDF massal untuk slip dikonfirmasi pada PayslipController, template PDF dan route |
| Rekap keterlambatan dan laporan absensi | 07cb6fc4, 645deda3, b6fd70a1 | Rekap Blade dan route; tambahan method AttendanceService/API; ranking keterlambatan, kedatangan mendekati batas, dan datang awal |
| Perubahan Fingerspot | 9df4b7cc | Diff hanya 6 penambahan dan 3 penghapusan di service existing. Copy menyebut memperbarui integrasi, bukan membangun Fingerspot dari awal |
| Best Employee / Best Producer | ceb47b3e, 074c2563, e4f45fd9 | SimcoClient/SimcoService dan view kandidat; pengurutan; request, model, service, migration, route dan test penilaian direktur |
| Kuota cuti | eb085873 | CutiController, SimcoClient, SimcoService, Blade dan route baru; getEmployeeLeaveData/updateLeaveQuota ada pada source |
| Career plan | 25f15f19, 2ee14cc0, 022c07aa | Pembuatan/pengeditan; controller API, Resource, repository, service dan route; endpoint per karyawan/legacy ID/jenis dokumen |
| Workload | 7baa302f | Tambahan analyzeWorkload/update analysis di service, controller, model, kolom asesmen dan view |
| Ekspor logbook | 5b6aca0d | ActivityController, ExportLogbookRequest, view dan route |
| Coaching | 222c359f, ccd1c08d | Matriks dengan filter tanggal; CoachingAiService, GenerateScheduleQuestionsJob, view, route dan unit test |
| Exit interview | b4439a73 | Controller, model, migration, form, list dan route baru |

## Batas attribution

Pesan 3e35a3d3 menyebut implementasi payroll menyeluruh, tetapi diff memperbarui controller/service/template existing. Tidak dipakai sebagai bukti kepemilikan seluruh payroll. Keberadaan test di commit tidak berarti test HRIS dijalankan pada tugas portfolio ini. Data dan angka dampak tidak dibuat-buat. CRM belum ditelusuri.

## Gate untuk penambahan kartu

- Hard Gate PASS: kontribusi mengikuti commit dan source; Laravel dikonfirmasi manifest; tidak ada data pegawai atau statistik rekaan.
- Purpose-Gate PASS: daftar fitur menggunakan accordion existing agar ringkasan kartu tetap singkat.
- Liveliness PASS: kartu HRIS berdiri sendiri dengan detail SDM; hierarki visual existing dipertahankan.
- Quality Locks PASS: copy menyebut pekerjaan per fitur dan membedakan perubahan lanjutan dari pembangunan modul baru.

Verifikasi portfolio: ESLint file yang diubah, TypeScript, build produksi dan pembukaan accordion HRIS di browser. Hasil aktual dicatat pada penyerahan.
