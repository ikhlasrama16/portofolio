import { portfolioData } from "@/data/portfolio";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell section-space">
      <p className="eyebrow">03 / PENGALAMAN</p>
      <div className="section-heading">
        <h2>Pengalaman kerja</h2>
        <p>Peran dan pekerjaan saya di pengembangan web serta IT support.</p>
      </div>
      <div className="experience-list">
        {portfolioData.experiences.map((exp) => (
          <article key={exp.id} className="experience-row">
            <div className="experience-period">
              <span>{exp.period}</span>
              {exp.isCurrent && <span className="current-label">Saat ini</span>}
            </div>
            <div>
              <h3>{exp.role}</h3>
              <p className="company-name">{exp.company}</p>
              <ul>{exp.description.slice(0, exp.isCurrent ? 3 : 2).map((description) => <li key={description}>{description}</li>)}</ul>
              <div className="tech-tags">{exp.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
