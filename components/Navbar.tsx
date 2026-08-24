"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const github = portfolioData.personal.socialLinks.find((s) => s.icon === "Github");
  const linkedin = portfolioData.personal.socialLinks.find((s) => s.icon === "Linkedin");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-4xl transition-all duration-300 rounded-full border px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between ${
          scrolled
            ? "bg-zinc-950/85 backdrop-blur-md border-zinc-800 shadow-xl shadow-black/60 shadow-red-950/10"
            : "bg-zinc-900/60 backdrop-blur-md border-zinc-800/80"
        }`}
      >
        {/* Name / Logo */}
        <Link
          href="#hero"
          className="text-sm font-semibold text-zinc-100 hover:text-red-400 transition-colors flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
          <span>Ikhlas Ramadhan</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {portfolioData.navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-xs font-medium text-zinc-400 hover:text-red-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action / Socials */}
        <div className="hidden md:flex items-center gap-3">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-red-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-red-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-red-400"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-4 shadow-xl md:hidden z-50 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {portfolioData.navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-red-400 hover:bg-zinc-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-zinc-800 mt-1 flex items-center justify-between">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 text-xs font-semibold bg-red-600 hover:bg-red-500 text-white rounded-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
