"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceTimeline() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-red-900/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl px-4 sm:px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.25)] mb-4 backdrop-blur-md">
            <span>💼</span>
            <span>My Experience</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
            Professional Career &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Work History
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Pengalaman dalam pengembangan sistem web enterprise, optimasi database, dan backend APIs.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-6 sm:p-7 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:border-red-500/30 transition-all space-y-4 shadow-xl"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-zinc-100">
                    {exp.role}
                  </h3>
                  <div className="text-xs text-red-400 font-medium mt-0.5">
                    {exp.company} • <span className="text-zinc-400">{exp.location}</span>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 font-mono px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_6px_#ef4444]" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-zinc-950/90 border border-zinc-800/80 text-[11px] font-mono text-zinc-300"
                  >
                    {tech}
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
