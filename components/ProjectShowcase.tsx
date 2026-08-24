"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function ProjectShowcase() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full Stack", "Cloud & System", "Frontend & UI"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            <span>🚀</span>
            <span>Featured Projects</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
            Crafted with passion &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Modern Tech
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Kumpulan proyek backend API, aplikasi enterprise internal, dan sistem web yang telah saya bangun.
          </p>

          {/* Filter Pills with Animated Background */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-zinc-900/70 border border-zinc-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filter === cat ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 rounded-full bg-red-600 shadow-md shadow-red-950/60 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/40 backdrop-blur-md transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
              >
                {/* Image Preview */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[11px] font-medium text-zinc-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-red-400 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors ml-auto"
                      >
                        <span>Live Website</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
