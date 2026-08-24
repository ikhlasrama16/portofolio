"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import ShapeGrid from "@/components/ShapeGrid";
import ShinyText from "@/components/ShinyText";
import {
  GithubIcon,
  LinkedinIcon,
  PhpIcon,
  LaravelIcon,
  GolangIcon,
  ReactIcon,
  NextjsIcon,
  TypescriptIcon,
  TailwindIcon,
  PostgresqlIcon,
  MysqlIcon,
  DockerIcon,
  GitIcon,
  LinuxIcon,
} from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { personal } = portfolioData;

  const github = personal.socialLinks.find((s) => s.icon === "Github");
  const linkedin = personal.socialLinks.find((s) => s.icon === "Linkedin");

  const coreStacks = [
    { name: "PHP (Native & Web)", icon: <PhpIcon className="w-3.5 h-3.5 text-indigo-400" />, glow: "hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]" },
    { name: "JavaScript / TypeScript", icon: <TypescriptIcon className="w-3.5 h-3.5 text-blue-400" />, glow: "hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]" },
    { name: "MySQL", icon: <MysqlIcon className="w-3.5 h-3.5 text-amber-400" />, glow: "hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]" },
    { name: "PostgreSQL", icon: <PostgresqlIcon className="w-3.5 h-3.5 text-sky-400" />, glow: "hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]" },
    { name: "RESTful APIs", icon: <span className="w-2 h-2 rounded-full bg-red-400" />, glow: "hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]" },
    { name: "Tailwind CSS", icon: <TailwindIcon className="w-3.5 h-3.5 text-teal-400" />, glow: "hover:border-teal-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)]" },
    { name: "Git & GitHub", icon: <GitIcon className="w-3.5 h-3.5 text-orange-500" />, glow: "hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]" },
    { name: "Linux Administration", icon: <LinuxIcon className="w-3.5 h-3.5 text-amber-300" />, glow: "hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]" },
    { name: "Laravel", icon: <LaravelIcon className="w-3.5 h-3.5 text-red-500" />, glow: "hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]" },
    { name: "React / Next.js", icon: <ReactIcon className="w-3.5 h-3.5 text-sky-400" />, glow: "hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]" },
    { name: "Go (Golang)", icon: <GolangIcon className="w-3.5 h-3.5 text-cyan-400" />, glow: "hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-36 pb-24 md:pt-48 md:pb-32 flex flex-col justify-center overflow-hidden min-h-[90vh]"
    >
      {/* React Bits: Interactive ShapeGrid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ShapeGrid
          speed={0.6}
          squareSize={46}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.08)"
          hoverFillColor="rgba(239, 68, 68, 0.4)"
          shape="hexagon"
          hoverTrailAmount={6}
        />
      </div>

      {/* Ambient background red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-red-600/15 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-4xl px-4 sm:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left"
        >
          {/* Status & Location Badge with ShinyText */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 backdrop-blur-md cursor-default shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
              </span>
              <ShinyText
                text="Available for projects & consulting"
                speed={3}
                color="#d4d4d8"
                shineColor="#ffffff"
              />
            </motion.div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Headline Greeting with ShinyText */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-3xl">
            I&apos;m {personal.name},{" "}
            <ShinyText
              text="Web & Full-Stack Developer."
              speed={3}
              color="#f87171"
              shineColor="#ffffff"
              spread={110}
            />
          </h1>

          {/* Subtitle (Refactored to accurately match actual daily stack) */}
          <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal">
            Software Engineer focused on developing enterprise web platforms (SKPISO, HRIS, CRM), RESTful APIs, and relational database optimization with <span className="text-zinc-200 font-medium">PHP, JavaScript & SQL</span>.
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-zinc-100 hover:bg-white text-zinc-950 shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-red-500/40 transition-all shadow-md"
              >
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>Get in Touch</span>
              </Link>
            </motion.div>

            <div className="flex items-center gap-2 ml-0 sm:ml-2">
              {github && (
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all shadow-md"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
              )}

              {linkedin && (
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all shadow-md"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Expanded Core Tech Stacks Bar with Interactive Spring Hover */}
          <div className="mt-14 pt-8 border-t border-zinc-900 w-full">
            <div className="text-xs font-mono text-zinc-500 mb-3 tracking-wider">
              CORE TECHNOLOGIES & STACK
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {coreStacks.map((stack, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-900 text-xs font-medium text-zinc-300 transition-all cursor-pointer select-none shadow-sm ${stack.glow}`}
                >
                  {stack.icon}
                  <span>{stack.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
