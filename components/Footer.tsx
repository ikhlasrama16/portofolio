"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Jakarta",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-900 py-12 bg-[#090809]">
      <div className="max-w-4xl px-4 sm:px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span>© {new Date().getFullYear()} {personal.name}</span>
          <span className="text-zinc-700">•</span>
          <span>{personal.location}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-zinc-400">
            WIB (UTC+7): <span className="text-zinc-200">{time || "22:15"}</span>
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            title="Return to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
