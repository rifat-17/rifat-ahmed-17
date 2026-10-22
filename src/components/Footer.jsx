"use client";

import React from "react";
import { personalData, navLinks } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] py-12 text-xs text-zinc-500 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-mono font-bold tracking-wider text-sm text-zinc-200">
                RIFAT<span className="text-rose-500">.</span>
              </span>
              <span className="text-zinc-700" aria-hidden="true">•</span>
              <span className="text-xs text-zinc-400">{personalData.role}</span>
            </div>
            <p className="text-zinc-500 text-[11px] font-mono">
              Crafting thoughtful digital experiences from Dhaka, Bangladesh.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-rose-500" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 font-mono text-[11px] transition-colors"
            >
              ↑ Top
            </button>
          </div>
        </div>

        {/* Bottom Credits Strip */}
        <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-600">
          <p>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </p>
          <p>
            Designed with Next.js 15, React 19, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}