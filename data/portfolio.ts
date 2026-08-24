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
      title: "SKPISO Enterprise Application",
      tagline: "Aplikasi internal manajemen audit mutu & proses bisnis corporate group",
      description: "Aplikasi internal untuk mendukung operasional PT Jana Dharma Indonesia dan corporate group. Mengembangkan alur bisnis digital, mengoptimasi query database relasional untuk efisiensi beban server, dan memastikan integritas data audit.",
      techStack: ["PHP", "JavaScript", "MySQL", "Bootstrap", "REST API"],
      githubUrl: "https://github.com/ikhlasrama16",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
      featured: true,
      metrics: "Enterprise Core System",
      category: "Full Stack",
    },
    {
      id: "simcorporate-hris-crm",
      title: "SIMCorporate, HRIS & CRM Suite",
      tagline: "Solusi terintegrasi manajemen SDM dan hubungan pelanggan korporat",
      description: "Pengembangan modul HRIS (Human Resource Information System) dan CRM (Customer Relationship Management) terpadu berbasis PHP dan MySQL/PostgreSQL untuk digitalisasi operasional karyawan dan klien korporat.",
      techStack: ["PHP", "JavaScript", "MySQL", "PostgreSQL", "REST API"],
      githubUrl: "https://github.com/ikhlasrama16",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
      featured: true,
      metrics: "Multi-Module ERP",
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
