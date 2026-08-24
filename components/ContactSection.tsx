"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import ShinyText from "@/components/ShinyText";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const { contact, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const github = personal.socialLinks.find((s) => s.icon === "Github");
  const linkedin = personal.socialLinks.find((s) => s.icon === "Linkedin");

  return (
    <section id="contact" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Subtle deep crimson ambient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/8 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl px-4 sm:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl shadow-2xl shadow-black/80 text-center overflow-hidden group"
        >
          {/* Subtle top red glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950/80 border border-red-500/30 text-xs font-medium text-zinc-300 mb-6 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
            <span>Open for new projects & full-time roles</span>
          </div>

          {/* Sigma Classy Headline with ShinyText */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-[1.12]">
            Let&apos;s build something{" "}
            <ShinyText
              text="exceptional."
              speed={2.5}
              color="#f87171"
              shineColor="#ffffff"
              spread={120}
            />
          </h2>

          <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Have a project in mind, need backend architecture consultation, or looking for a full-stack engineer? Reach out directly.
          </p>

          {/* Primary Big Email Action Box */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            {/* Direct Email Action Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${contact.email}`}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs sm:text-sm font-semibold transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] group/btn"
            >
              <Mail className="w-4 h-4 text-red-600" />
              <span>{contact.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.a>

            {/* Quick Copy Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-all"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Secondary Channels & Socials */}
          <div className="mt-8 pt-8 border-t border-zinc-800/60 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            {/* WhatsApp Direct */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/6282279403258`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800 hover:border-red-500/40 text-zinc-300 hover:text-white transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </motion.a>

            {/* GitHub */}
            {github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800 hover:border-red-500/40 text-zinc-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </motion.a>
            )}

            {/* LinkedIn */}
            {linkedin && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800 hover:border-red-500/40 text-zinc-300 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
