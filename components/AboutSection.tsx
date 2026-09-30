import { portfolioData } from "@/data/portfolio";
const domains = [
  { number: "01", title: "Aplikasi web & API", text: "Mengembangkan alur bisnis, modul aplikasi internal, dan integrasi REST API.", stack: "PHP / Laravel / JavaScript", proof: "SKPISO, HRIS & CRM" },
  { number: "02", title: "Database & performa", text: "Merancang data relasional, menjaga integritas transaksi, dan mengoptimasi query.", stack: "MySQL / PostgreSQL", proof: "Sistem enterprise & Finance API" },
  { number: "03", title: "Antarmuka & deployment", text: "Membangun antarmuka responsif dan menangani deployment serta maintenance sistem.", stack: "Tailwind / Bootstrap / Git / Linux", proof: "Portal karir & PPDB" },
];
export default function AboutSection() {
  const { personal } = portfolioData;
  return <section id="about" className="section-shell section-space about-section">
    <div className="about-intro"><div><p className="eyebrow">02 / TENTANG & KEAHLIAN</p><h2>Tentang saya</h2></div><div className="about-bio"><p>Saya {personal.name}, web developer di Yogyakarta. Pekerjaan saya mencakup pengembangan fitur aplikasi, integrasi API, dan optimasi query database. Saya juga menangani deployment serta maintenance sistem produksi.</p><p className="education-line">{personal.education.degree} · {personal.education.institution}</p></div></div>
    <div className="expertise-grid">{domains.map((domain) => <article key={domain.number} className="expertise-item"><span className="mono-label accent-text">/{domain.number}</span><h3>{domain.title}</h3><p>{domain.text}</p><div className="expertise-stack">{domain.stack}</div><a href="#projects" className="text-link">Proyek terkait: {domain.proof}</a></article>)}</div>
    <p className="exploration-note">Eksplorasi tambahan: Go, React / Next.js, Docker, dan Flutter.</p>
  </section>;
}
