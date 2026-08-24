"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Server,
  Layers,
  Database,
  Wrench,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export default function BentoGridSkills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skillDomains = [
    {
      id: "backend",
      title: "Backend & Web Architecture",
      icon: <Server className="w-5 h-5 text-red-400" />,
      tagline: "Pengembangan backend modular, REST API, dan sistem enterprise internal.",
      skills: [
        { name: "PHP (Native & Web)", experience: "Primary Stack", note: "Aplikasi internal korporat (SKPISO, HRIS, CRM)" },
        { name: "RESTful API Architecture", experience: "Production Ready", note: "Desain endpoint modular & integrasi data" },
        { name: "Node.js / Express", experience: "Intermediate", note: "Asynchronous backend & lightweight services" },
        { name: "PHP Frameworks (Laravel)", experience: "Familiar", note: "CMS portal & MVC application architecture" },
      ],
    },
    {
      id: "database",
      title: "Databases & Infrastructure",
      icon: <Database className="w-5 h-5 text-rose-400" />,
      tagline: "Perancangan database relasional, optimasi performa query & administrasi server.",
      skills: [
        { name: "MySQL", experience: "Advanced", note: "Relational modeling, indexing & query tuning" },
        { name: "PostgreSQL", experience: "Advanced", note: "Complex queries & transactional integrity" },
        { name: "Linux Server Administration", experience: "Proficient", note: "VPS configuration, CLI maintenance & SSL" },
        { name: "Docker", experience: "Proficient", note: "Containerized development & basic deployments" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend & UI Engineering",
      icon: <Layers className="w-5 h-5 text-orange-400" />,
      tagline: "Membangun tampilan web responsif, interaktif, dan modern.",
      skills: [
        { name: "JavaScript & DOM Manipulation", experience: "Advanced", note: "Vanilla JS, dynamic UI & client-side logic" },
        { name: "HTML5 & CSS3 / Styling", experience: "Advanced", note: "Semantic structure & responsive layouts" },
        { name: "Tailwind CSS & Bootstrap", experience: "Advanced", note: "Utility-first & component design systems" },
        { name: "React & Next.js", experience: "Proficient", note: "Modern component architecture & SPA" },
      ],
    },
    {
      id: "tools",
      title: "Tools, Testing & IT Support",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      tagline: "Troubleshooting perangkat lunak/keras, API testing, dan version control.",
      skills: [
        { name: "Git & GitHub", experience: "Advanced", note: "Version control & collaborative workflows" },
        { name: "Hardware & IT Support", experience: "Advanced", note: "Hardware diagnostics & network configuration" },
        { name: "Postman & API Testing", experience: "Advanced", note: "Testing collections, payloads & endpoint verification" },
        { name: "Flutter & Dart", experience: "Familiar", note: "Cross-platform mobile client exploration" },
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Domains" },
    { id: "backend", label: "Backend & Web" },
    { id: "database", label: "Databases & Linux" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "tools", label: "Tools & Support" },
  ];

  const displayedDomains =
    activeCategory === "all"
      ? skillDomains
      : skillDomains.filter((d) => d.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-red-900/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl px-4 sm:px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold text-red-400 mb-4 shadow-[0_0_20px_rgba(239,68,68,0.2)] backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-red-400" />
            <span>TECHNICAL ARSENAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
            Specialized Stacks &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-orange-400">
              Domain Mastery
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Eksplorasi mendalam teknologi dan kerangka kerja yang saya gunakan dalam membangun sistem produksi nyata.
          </p>

          {/* Filter Pills with Animated Pill Indicator */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-zinc-900/70 border border-zinc-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat.id ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-red-600 shadow-md shadow-red-950/60 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Domain Cards Grid with Motion */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedDomains.map((domain) => (
              <motion.div
                key={domain.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:border-red-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-2xl bg-zinc-950 border border-zinc-800/80 group-hover:border-red-500/40 transition-colors">
                      {domain.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-100 group-hover:text-red-400 transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {domain.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Skills Breakdown */}
                  <div className="mt-5 space-y-2.5">
                    {domain.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-2xl bg-zinc-950/70 border border-zinc-800/70 hover:border-zinc-700 flex items-center justify-between gap-3 transition-colors"
                      >
                        <div>
                          <div className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <span>{skill.name}</span>
                          </div>
                          <div className="text-[11px] text-zinc-400 mt-0.5 pl-3">
                            {skill.note}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-red-950/60 border border-red-800/40 text-red-300 whitespace-nowrap">
                          {skill.experience}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{domain.skills.length} core technologies</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Production Ready
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
