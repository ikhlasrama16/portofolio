import { MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { personal } = portfolioData;
  return <section id="hero" className="hero-section section-shell">
    <div className="hero-copy">
      <div className="eyebrow"><span className="status-dot" />{personal.statusAvailable ? "Terbuka untuk proyek & kolaborasi" : "Web developer · Yogyakarta"}</div>
      <p className="hero-intro">Halo, saya</p>
      <h1>Ikhlas Ramadhan.<br /><span className="accent-text">Web Developer.</span></h1>
      <p className="hero-description">Saya mengembangkan aplikasi internal seperti HRIS dan CRM, portal web, serta REST API. Sehari-hari saya bekerja dengan PHP, JavaScript, dan SQL.</p>
      <div className="action-row"><a className="primary-button" href="#projects">Lihat proyek</a><a className="secondary-button" href="#contact">Hubungi saya</a></div>
      <div className="hero-location"><MapPin size={15} /> {personal.location}<span>·</span> Backend hingga deployment</div>
    </div>
    <aside className="hero-note" aria-label="Pekerjaan saat ini">
      <div className="note-top"><span className="mono-label">SAAT INI</span></div>
      <p className="note-title">IT Web Developer</p>
      <p className="work-company">{personal.currentCompany}</p>
      <p className="work-description">Mengembangkan dan memelihara SKPISO, SIMCorporate, HRIS, dan CRM untuk operasional perusahaan.</p>
      <a className="text-link" href="#experience">Lihat pengalaman kerja</a>
    </aside>
  </section>;
}
