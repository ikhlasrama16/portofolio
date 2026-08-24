"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Server,
  Shield,
  Database,
  Layers,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  const { personal } = portfolioData;

  const coreFocusAreas = [
    {
      icon: <Server className="w-5 h-5 text-red-500" />,
      title: "Web Systems & RESTful APIs",
      description: "Pengembangan backend web dan REST API berbasis PHP dan JavaScript yang terstruktur, andal, dan modular.",
      tags: ["PHP", "JavaScript", "REST APIs", "Node.js"],
    },
    {
      icon: <Shield className="w-5 h-5 text-rose-500" />,
      title: "Enterprise Systems & Digitalization",
      description: "Pengembangan dan pemeliharaan aplikasi internal korporat seperti SKPISO, SIMCorporate, HRIS, dan CRM.",
      tags: ["Enterprise ERP", "HRIS", "CRM", "Business Workflows"],
    },
    {
      icon: <Database className="w-5 h-5 text-orange-500" />,
      title: "Database & Query Optimization",
      description: "Perancangan skema relasional, optimasi query, dan indexing pada MySQL & PostgreSQL untuk efisiensi sistem.",
      tags: ["MySQL", "PostgreSQL", "Query Optimization", "Indexing"],
    },
    {
      icon: <Layers className="w-5 h-5 text-red-400" />,
      title: "Frontend UI & Multi-Platform",
      description: "Antarmuka web responsif dengan modern CSS, Tailwind, serta eksplorasi aplikasi modern dengan React dan Flutter.",
      tags: ["HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "React"],
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden border-t border-zinc-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-red-600/8 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl px-4 sm:px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold text-red-400 mb-3 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE FOCUS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Engineering Clean, Scalable &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-orange-400">
                Reliable Systems
              </span>
            </h2>
          </div>

          {/* Minimal Education Tag */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 shrink-0">
            <GraduationCap className="w-4 h-4 text-red-400" />
            <span>{personal.education.institution} • {personal.education.degree}</span>
          </div>
        </motion.div>

        {/* 4 Pillars of Core Competency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {coreFocusAreas.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/40 hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-zinc-950 border border-zinc-800/80 group-hover:border-red-500/40 group-hover:scale-110 transition-all shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-zinc-100 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-800/80 text-[11px] font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
