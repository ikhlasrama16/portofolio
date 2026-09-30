"use client";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, ArrowRight, LockKeyhole } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

type ProjectStory = { context: string; contribution: string; outcome: string; topics: string[] };
const stories: Record<string, ProjectStory> = {
  "skpiso-enterprise": {
    context: "SKPISO adalah aplikasi PHP native untuk sertifikasi kompetensi dan operasional lembaga sertifikasi profesi. Saya mengembangkan fitur pada aplikasi yang sudah berjalan bersama tim.",
    contribution: "Saya mengerjakan form asesmen, honor asesor, dokumen kerja sama, dan modul audit, termasuk integrasi data ke SIMCo dan CRM.",
    outcome: "Kontribusi pada proses sertifikasi, administrasi asesor, dan pengelolaan mutu LSP.",
    topics: ["Asesmen & asesor", "Dokumen & tanda tangan", "Audit & integrasi API"],
  },
  "simcorporate-hris-crm": {
    context: "SIMCorporate adalah platform internal perusahaan yang mencakup keuangan, aset, dan integrasi aplikasi operasional.",
    contribution: "Saya mengembangkan fitur pada modul keuangan dan aset, serta menghubungkan SKPISO dengan SIMCo melalui API.",
    outcome: "Fitur pelaporan, pencatatan riwayat pembayaran, pendataan aset, dan sinkronisasi agenda tersedia di platform internal.",
    topics: ["Keuangan & pembayaran", "Manajemen aset", "Integrasi SKPISO"],
  },
  "hris-laravel": {
    context: "Aplikasi HRIS berbasis Laravel untuk pengelolaan data dan proses SDM perusahaan. Modul yang saya kerjakan banyak menggunakan Blade dan Bootstrap, dengan integrasi data SIMCo melalui API.",
    contribution: "Saya mengembangkan fitur pada payroll, absensi, penilaian karyawan, dan administrasi SDM.",
    outcome: "Fitur HRIS tersedia sebagai bagian dari aplikasi Laravel yang dikembangkan bersama tim.",
    topics: ["Payroll & absensi", "Penilaian karyawan", "Administrasi SDM"],
  },
  "crm-laravel": {
    context: "Aplikasi CRM berbasis Laravel untuk proses sales dan marketing perusahaan. Kontribusi saya mencakup backend, tampilan Blade dan Bootstrap, serta integrasi API JDI dan SIMCo.",
    contribution: "Saya mengembangkan fitur sales call, rekap aktivitas marketing, pengelolaan artikel, dan integrasi antar aplikasi.",
    outcome: "Pengembangan fitur CRM sebagai bagian dari pekerjaan bersama tim.",
    topics: ["Sales call & agenda", "Integrasi JDI & SIMCo", "Aktivitas marketing"],
  },
  "karirdijepang": {
    context: "Portal informasi karir dan kesempatan kerja di Jepang.",
    contribution: "Saya membangun CMS dengan Laravel, menangani keamanan web, dan melakukan deployment ke server produksi.",
    outcome: "Portal karir dengan konten yang dapat dikelola melalui CMS.",
    topics: ["CMS Laravel", "Deployment"],
  },
  "finance-api": {
    context: "Payload notifikasi keuangan perlu diubah menjadi data transaksi yang terstruktur.",
    contribution: "Saya membangun REST API dengan Go dan PostgreSQL serta parser berbasis aturan untuk memvalidasi data notifikasi.",
    outcome: "API memproses payload notifikasi menjadi data transaksi tervalidasi.",
    topics: ["Notifikasi", "Parser & API", "Transaksi"],
  },
  "ppdb-smk-global-cendekia": {
    context: "Portal pendaftaran siswa baru dengan alur verifikasi data pendaftar.",
    contribution: "Saya berkolaborasi dalam pengembangan portal Laravel dan bertanggung jawab pada desain serta implementasi frontend.",
    outcome: "Antarmuka web responsif untuk pendaftaran calon siswa.",
    topics: ["Frontend responsif", "Formulir pendaftaran"],
  },
};
const categories = ["Semua", "Full Stack", "Cloud & System", "Frontend & UI"];

export default function ProjectShowcase() {
  const [filter, setFilter] = useState("Semua");
  const projects = portfolioData.projects.filter((project) => filter === "Semua" || project.category === filter);
  return (
    <section id="projects" className="section-shell section-space projects-section">
      <p className="eyebrow">01 / PROYEK</p>
      <div className="section-heading">
        <h2>Proyek yang saya kerjakan</h2>
        <p>Aplikasi internal, portal web, dan backend API. Berikut konteks proyek dan kontribusi saya.</p>
      </div>
      <div className="project-filters" aria-label="Filter kategori proyek">
        {categories.map((category) => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
      </div>
      <div className="project-grid">
        {projects.map((project) => {
          const story = stories[project.id];
          const mainProject = project.id === "skpiso-enterprise";
          const internal = mainProject || project.id === "simcorporate-hris-crm" || project.id === "hris-laravel" || project.id === "crm-laravel";
          const finance = project.id === "finance-api";
          return (
            <article className={"project-card" + (mainProject ? " featured-project" : "")} key={project.id}>
              <div className="project-visual">
                <div className="visual-top"><span className="mono-label">{finance ? "ALUR PEMROSESAN" : "BAGIAN YANG SAYA KERJAKAN"}</span><span className="visual-type">{project.category}</span></div>
                {finance ? (
                  <div className="system-flow">{story.topics.map((step, index) => (
                    <div className="flow-group" key={step}>
                      <div className="flow-node"><span>{step}</span></div>
                      {index < story.topics.length - 1 && <ArrowRight className="flow-arrow" size={16} aria-hidden="true" />}
                    </div>
                  ))}</div>
                ) : (
                  <ul className="project-topics">{story.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                )}
                {mainProject && <p className="featured-contribution">{story.contribution}</p>}
                {finance && <p className="visual-caption">Diagram konsep pemrosesan data</p>}
              </div>
              <div className="project-content">
                <div className="project-status">{internal ? <><LockKeyhole size={13} /> Sistem internal</> : project.liveUrl ? "Website publik" : "Proyek pengembangan"}</div>
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
                <div className="tech-tags">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <details className="project-details">
                  <summary>{project.contributions ? "Fitur yang saya kerjakan" : "Konteks & kontribusi"} <ChevronDown size={16} /></summary>
                  {project.contributions ? (
                    <dl>
                      <dt>Konteks proyek</dt><dd>{story.context}</dd>
                      {project.contributions.map((contribution) => <div key={contribution.title}><dt>{contribution.title}</dt><dd>{contribution.description}</dd></div>)}
                    </dl>
                  ) : <dl><dt>Konteks</dt><dd>{story.context}</dd><dt>Kontribusi saya</dt><dd>{story.contribution}</dd><dt>Hasil implementasi</dt><dd>{story.outcome}</dd></dl>}
                </details>
                {project.liveUrl && <a className="project-live text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Kunjungi website <ArrowUpRight size={16} /></a>}
              </div>
            </article>
          );
        })}
      </div>
      {projects.length === 0 && <p className="project-footnote">Belum ada proyek di kategori ini. Pilih Semua untuk melihat proyek lainnya.</p>}
      <p className="project-footnote" role="status">{projects.length} proyek ditampilkan</p>
    </section>
  );
}
