export interface SocialLink {
  name: string;
  url: string;
  icon: "Github" | "Linkedin" | "Mail" | "Twitter" | "Globe";
  username: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  bio: string;
  detailedBio: string[];
  location: string;
  timezone: string;
  status: string;
  statusAvailable: boolean;
  avatarUrl: string;
  resumeUrl: string;
  email: string;
  phone: string;
  currentCompany: string;
  socialLinks: SocialLink[];
  education: {
    degree: string;
    institution: string;
    period: string;
  };
}

export interface SkillDetail {
  name: string;
  percentage: number;
  color: string;
}

export interface SkillColumn {
  id: string;
  title: string;
  accentDot: string;
  skills: SkillDetail[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
  metrics?: string;
  contributions?: { title: string; description: string }[];
  category: "Full Stack" | "Frontend & UI" | "Cloud & System" | "Mobile & Apps";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string[];
  technologies: string[];
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface PortfolioData {
  navItems: NavItem[];
  personal: PersonalInfo;
  techMarquee: {
    name: string;
    icon?: string;
  }[];
  projects: Project[];
  experiences: Experience[];
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    responseRate: string;
    directChat: string;
    terminalSnippet: string;
  };
  footer: {
    copyright: string;
    builtWith: string[];
    quote: string;
  };
}

export const portfolioData: PortfolioData = {
  navItems: [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],

  personal: {
    name: "Muhamad Ikhlas Ramadhan",
    initials: "MIR",
    role: "Web & Full-Stack Developer",
    tagline: "Developing robust enterprise web systems, REST APIs, and optimized database solutions.",
    bio: "Software Engineer based in Yogyakarta, Indonesia. Experienced in building enterprise internal systems (SKPISO, HRIS, CRM), custom web applications, and database optimizations with PHP, JavaScript, and SQL.",
    detailedBio: [
      "Software Engineer dengan pengalaman pengembangan aplikasi web full-stack dan backend menggunakan PHP, JavaScript/TypeScript, dan SQL.",
      "Berpengalaman membangun aplikasi enterprise internal dan REST API, mengelola database (MySQL, PostgreSQL), serta melakukan optimasi query dan maintenance sistem produksi.",
      "Memiliki pengalaman tambahan dalam eksplorasi teknologi modern seperti Go, React, Flutter, serta latar belakang IT Support yang memperkuat pemecahan masalah teknis.",
    ],
    location: "Yogyakarta, Indonesia",
    timezone: "UTC+7 (WIB)",
    status: "Available for projects & consulting",
    statusAvailable: true,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    resumeUrl: "#contact",
    email: "ikhlasrama16@gmail.com",
    phone: "+6282279403258",
    currentCompany: "PT. Jana Dharma Indonesia",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/ikhlasrama16",
        icon: "Github",
        username: "ikhlasrama16",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/muhamad-ikhlas-ramadhan-b5685222a",
        icon: "Linkedin",
        username: "muhamad-ikhlas-ramadhan",
      },
      {
        name: "Email",
        url: "mailto:ikhlasrama16@gmail.com",
        icon: "Mail",
        username: "ikhlasrama16@gmail.com",
      },
    ],
    education: {
      degree: "S1 Sistem Informasi",
      institution: "Universitas Ahmad Dahlan",
      period: "2019 — 2023",
    },
  },

  techMarquee: [
    { name: "PHP (Native & MVC)" },
    { name: "JavaScript / TypeScript" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "RESTful APIs" },
    { name: "HTML5 & CSS3" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Laravel" },
    { name: "Go (Golang)" },
    { name: "React" },
    { name: "Git & GitHub" },
    { name: "Linux Administration" },
    { name: "Postman" },
  ],

  projects: [
    {
      id: "skpiso-enterprise",
      title: "SKPISO · Sistem Sertifikasi Kompetensi",
      tagline: "Pengembangan fitur asesmen, honor asesor, dokumen kerja sama, dan audit internal pada aplikasi PHP native.",
      description: "Saya mengembangkan fitur SKPISO dari formulir asesmen dan pengelolaan asesor hingga dokumen kerja sama, audit internal, serta integrasi SIMCo dan CRM. Pekerjaan mencakup backend PHP, query MySQL, antarmuka web, dan cetak dokumen.",
      techStack: ["PHP Native", "JavaScript", "MySQL", "Bootstrap", "REST API"],
      contributions: [
        { title: "Formulir asesmen MUK", description: "Mengembangkan form pertanyaan pendukung observasi FR.IA.03, penyimpanan jawaban, dan hasil cetaknya. Saya juga menambahkan indikator status form, penyimpanan draft lokal, serta peringatan saat meninggalkan isian yang belum disimpan." },
        { title: "Honorarium asesor", description: "Menambahkan pengajuan honor ke API SIMCo beserta validasi data dan pembaruan status pembayaran. Pada rekap honor, saya mengganti pengambilan data asesor per program dengan query gabungan untuk mengurangi query berulang." },
        { title: "Dokumen kerja sama & tanda tangan", description: "Mengembangkan alur PKS dan SPKS, termasuk pratinjau, cetak PDF, tautan tanda tangan dengan token QR, serta tahapan paraf dan tanda tangan manajer, legal, dan direktur." },
        { title: "Verifikasi tempat uji kompetensi", description: "Menambahkan pengeditan checklist kelengkapan TUK, catatan verifikasi, tanda tangan verifikator, dan proses penyimpanannya." },
        { title: "Penilaian kinerja asesor", description: "Mengembangkan halaman ringkasan dan detail kinerja asesor, dengan perhitungan nilai pra-uji, pelaksanaan, pasca-uji, umpan balik peserta, dan tren penilaian." },
        { title: "Perluasan kompetensi asesor", description: "Membangun pengajuan dan persetujuan perluasan skema, pendaftaran ke MUK 2023, serta pembuatan agenda SIMCo dari pengajuan yang disetujui." },
        { title: "Audit internal & tindak lanjut temuan", description: "Membangun modul program audit, penugasan auditor, checklist, pencatatan temuan dan tindak lanjut, serta cetak dokumen audit untuk manajer dan auditor." },
        { title: "Kaji ulang manajemen", description: "Membangun pengelolaan agenda kaji ulang, peserta, bahan rapat dari data audit dan keluhan, keputusan, serta dokumen undangan dan notulen." },
        { title: "Dokumen sertifikasi", description: "Membangun halaman pemilihan program dan peserta, pemeriksaan ketersediaan formulir, pratinjau, dan penggabungan formulir terpilih menjadi PDF untuk diunduh." },
        { title: "API statistik & integrasi CRM", description: "Menambahkan endpoint statistik sertifikasi dan demografi dengan filter periode, serta pencarian program yang digunakan CRM untuk memilih program JDI." },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
      featured: true,
      metrics: "Sertifikasi kompetensi & operasional LSP",
      category: "Full Stack",
    },
    {
      id: "simcorporate-hris-crm",
      title: "SIMCorporate",
      tagline: "Pengembangan modul keuangan, manajemen aset, dan integrasi SKPISO pada platform internal perusahaan.",
      description: "Saya berkontribusi pada modul laporan keuangan, kontrol pembayaran SPM, rekening virtual, honor eksternal, manajemen aset, dan integrasi SKPISO. Pekerjaan mencakup backend PHP, query database, tampilan web, serta endpoint sinkronisasi.",
      techStack: ["PHP", "JavaScript", "SQL", "REST API"],
      contributions: [
        { title: "Laporan keuangan", description: "Mengembangkan laporan laba rugi dan buku besar, termasuk filter akun serta periode dan perhitungan saldo berjalan dari jurnal." },
        { title: "Kontrol pembayaran SPM", description: "Membangun halaman untuk melengkapi rekening dan tanggal pencairan, beserta riwayat perubahan data pembayaran." },
        { title: "Rekening virtual", description: "Mengembangkan pengelolaan saldo per lembaga serta memperbarui tampilan snapshot dan mutasi rekening." },
        { title: "Honor eksternal", description: "Menambahkan dukungan honor JDI pada modul multi-lembaga, memisahkan query sumber data, dan menampilkan status pembayaran." },
        { title: "Manajemen aset", description: "Membangun modul awal pendataan aset dan kategori, lalu menambahkan riwayat penggunaan, pembaruan lokasi dan penanggung jawab, serta statistik kondisi dan nilai pasar." },
        { title: "Integrasi SKPISO", description: "Membangun hub dengan kontrol akses dan rekap dokumen menunggu verifikasi. Menambahkan API sinkronisasi agenda ke kalender SIMCo, termasuk validasi waktu dan penanganan jadwal bentrok." },
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
      featured: true,
      metrics: "Kontribusi pada platform internal",
      category: "Full Stack",
    },
    {
      id: "hris-laravel",
      title: "HRIS Laravel",
      tagline: "Kontribusi pada payroll, absensi, penilaian karyawan, dan administrasi SDM di aplikasi Laravel.",
      description: "Saya mengembangkan fitur HRIS dengan Laravel dan Blade, termasuk slip gaji, rekap keterlambatan, kandidat Best Employee, pengelolaan kuota cuti, career plan, coaching, dan exit interview. Data operasional terhubung dengan SIMCo melalui API.",
      techStack: ["Laravel", "PHP", "Blade", "Bootstrap", "JavaScript", "SQL", "REST API"],
      contributions: [
        { title: "Payroll & slip gaji", description: "Mengembangkan tampilan slip untuk beberapa jenis karyawan, menyesuaikan perhitungan absensi serta komponen remunerasi, dan menambahkan unduhan PDF massal untuk slip yang sudah dikonfirmasi." },
        { title: "Rekap absensi", description: "Membangun rekap keterlambatan, menambahkan pemeringkatan kedatangan, dan mengembangkan endpoint laporan absensi. Saya juga memperbarui integrasi Fingerspot yang sudah ada." },
        { title: "Best Employee & Best Producer", description: "Menambahkan rekap kandidat dari SIMCo, filter dan pengurutan kandidat, serta penilaian direktur pada modul Best Employee." },
        { title: "Kuota cuti", description: "Membangun halaman pengelolaan kuota cuti karyawan dan menghubungkan pembacaan serta pembaruan kuota dengan API SIMCo." },
        { title: "Career plan", description: "Mengembangkan pembuatan dan pengeditan career plan, lalu menambahkan filter serta endpoint API untuk data per karyawan dan jenis dokumen." },
        { title: "Workload & logbook", description: "Menambahkan analisis beban kerja dan pembaruan hasil asesmen, serta ekspor logbook dengan validasi pilihan karyawan dan periode." },
        { title: "Coaching", description: "Memperbarui matriks coaching dengan filter rentang tanggal dan menambahkan pembuatan pertanyaan coaching melalui layanan AI serta background job." },
        { title: "Exit interview", description: "Membangun modul pencatatan exit interview, termasuk form, pengeditan data, model, dan migration database." },
      ],
      image: "",
      featured: false,
      category: "Full Stack",
    },
    {
      id: "crm-laravel",
      title: "CRM Laravel",
      tagline: "Pengembangan alur sales call, integrasi program JDI, dan rekap aktivitas marketing di aplikasi Laravel.",
      description: "Saya mengembangkan pencarian program JDI, pencatatan tagihan, pembuatan agenda ke SIMCo, rekap lead campaign, pengeditan artikel, dan API aktivitas digital marketing.",
      techStack: ["Laravel", "PHP", "Blade", "Bootstrap", "JavaScript", "SQL", "REST API"],
      contributions: [
        { title: "Pencarian program JDI", description: "Menghubungkan pencarian program dengan API JDI dan menyesuaikan pilihan program pada form penerimaan pengajuan sales call." },
        { title: "Tagihan & metode pembayaran", description: "Menyesuaikan alur pengajuan untuk program JDI, termasuk pencatatan ID program, referensi billing, total tagihan, dan metode pembayaran pada hasil sales call." },
        { title: "Agenda dari sales call", description: "Menambahkan form dan proses pembuatan agenda JDI ke SIMCo melalui API, termasuk jadwal, termin pembayaran, dan pengaitan agenda dengan hasil sales call serta kontak klien." },
        { title: "Rekap lead campaign", description: "Membangun rekap harian status lead per marketer berdasarkan rentang tanggal dan riwayat perubahan status, lalu menampilkannya pada halaman leads." },
        { title: "Pengelolaan artikel", description: "Menambahkan pengeditan dan penghapusan artikel, form dalam modal, validasi input, konfirmasi hapus, serta pembaruan tampilan pencarian dan filter website." },
        { title: "API aktivitas digital marketing", description: "Membangun endpoint daftar aktivitas dengan filter tanggal, detail jenis aktivitas, dan total poin per marketer, menggunakan data pengguna dari SIMCo." },
      ],
      image: "",
      featured: false,
      category: "Full Stack",
    },
    {
      id: "karirdijepang",
      title: "karirdijepang.id CMS & Job Portal",
      tagline: "Platform CMS portal karir dengan proteksi keamanan dan deployment terpadu",
      description: "Website portal informasi karir dan kesempatan kerja di Jepang. Mengimplementasikan struktur CMS dinamis, optimasi keamanan web, dan proses deployment ke server produksi.",
      techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://karirdijepang.id",
      githubUrl: "https://github.com/ikhlasrama16",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
      featured: true,
      metrics: "Live Production Portal",
      category: "Full Stack",
    },
    {
      id: "finance-api",
      title: "Finance Transaction & Notification API",
      tagline: "Backend REST API untuk pengelolaan notifikasi transaksi keuangan",
      description: "Backend REST API yang dibangun dengan Go dan PostgreSQL untuk pemrosesan data transaksi. Mengimplementasikan rule-based parser untuk mengubah payload notifikasi menjadi data transaksi tervalidasi.",
      techStack: ["Go (Golang)", "PostgreSQL", "REST API", "Docker", "Git"],
      githubUrl: "https://github.com/ikhlasrama16",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
      featured: false,
      metrics: "Transaction Parser API",
      category: "Cloud & System",
    },
    {
      id: "ppdb-smk-global-cendekia",
      title: "PPDB SMK Global Cendekia",
      tagline: "Portal Penerimaan Peserta Didik Baru online dengan alur pendaftaran terpadu",
      description: "Sistem informasi pendaftaran siswa baru berbasis web dengan antarmuka front-end responsif dan sistem verifikasi data pendaftar yang efisien.",
      techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "CSS3"],
      githubUrl: "https://github.com/ikhlasrama16",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
      featured: false,
      metrics: "Client Registration Portal",
      category: "Frontend & UI",
    },
  ],

  experiences: [
    {
      id: "exp-1",
      role: "IT Web Developer",
      company: "PT. Jana Dharma Indonesia",
      companyUrl: "#",
      location: "Yogyakarta, Indonesia",
      period: "09/2025 — Present",
      isCurrent: true,
      description: [
        "Mengembangkan dan memelihara berbagai aplikasi web internal untuk mendukung proses bisnis PT Jana Dharma Indonesia dan corporate group, termasuk SKPISO, SIMCorporate, HRIS, dan CRM.",
        "Membangun fitur dan enhancement aplikasi menggunakan PHP, JavaScript, MySQL/PostgreSQL, serta arsitektur REST API.",
        "Menangani siklus pengembangan end-to-end mulai dari analisis kebutuhan, implementasi fitur, desain database, debugging, hingga deployment dan maintenance sistem.",
        "Melakukan optimasi query database dan proses aplikasi, perbaikan bug, serta troubleshooting untuk meningkatkan performa, reliability, dan usability sistem.",
        "Berkolaborasi dengan tim lintas divisi dan stakeholder bisnis untuk menerjemahkan requirement menjadi solusi teknis yang efektif dan maintainable.",
      ],
      technologies: ["PHP", "JavaScript", "MySQL", "PostgreSQL", "REST API", "HRIS", "CRM", "SKPISO"],
    },
    {
      id: "exp-2",
      role: "Staff IT",
      company: "BPRS Bangun Drajat Warga",
      companyUrl: "#",
      location: "Yogyakarta, Indonesia",
      period: "03/2025 — 07/2025",
      isCurrent: false,
      description: [
        "Melakukan perakitan, instalasi, konfigurasi, serta upgrade hardware/software untuk mendukung kelancaran kebutuhan operasional pengguna.",
        "Menangani troubleshooting perangkat keras dan software serta memberikan IT technical support dan edukasi kepada pengguna.",
      ],
      technologies: ["IT Support", "Hardware Assembly", "Software Troubleshooting", "Network Config", "User Support"],
    },
    {
      id: "exp-3",
      role: "MT Programmer",
      company: "PT. Sedayu Sehat Teknologi",
      companyUrl: "#",
      location: "Yogyakarta, Indonesia",
      period: "02/2024 — 01/2025",
      isCurrent: false,
      description: [
        "Berkolaborasi dalam pengembangan website PPDB SMK Global Cendekia menggunakan framework Laravel, bertanggung jawab pada pengembangan dan desain front-end sesuai kebutuhan klien.",
        "Membangun website CMS karirdijepang.id menggunakan Laravel serta menangani aspek keamanan platform dan proses deployment ke server produksi.",
        "Mengikuti program pelatihan intensif React, Next.js, dan Redux untuk memperkuat kapabilitas pengembangan aplikasi web modern.",
      ],
      technologies: ["PHP", "Laravel", "React", "Next.js", "MySQL", "CMS", "Web Security"],
    },
  ],

  contact: {
    title: "Hubungi & Inisiasi Koneksi",
    subtitle: "Tertarik berkolaborasi, berdiskusi seputar pengembangan web & backend, atau memiliki peluang proyek? Mari terhubung.",
    email: "ikhlasrama16@gmail.com",
    phone: "+6282279403258",
    responseRate: "< 24 Jam Waktu Respons",
    directChat: "Tersedia via WhatsApp / Telegram",
    terminalSnippet: "ssh ikhlasrama@portfolio.dev -p 2026",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Muhamad Ikhlas Ramadhan. All rights reserved.`,
    builtWith: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Motion", "Lucide Icons"],
    quote: "Membangun solusi scalable, reliable, dan maintainable.",
  },
};
