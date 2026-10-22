"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalData } from "@/data/portfolioData";
import { ArrowUpRightIcon } from "./Icons";

export default function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 relative"
    >
      {/* Subtle section transition accent */}
      <div className="section-divider mb-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              01 / About Me
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Turning ideas into{" "}
            <span className="text-rose-400">clean, practical</span> web systems.
          </h2>
        </motion.div>

        {/* Streamlined Recruiter-Friendly Card */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="p-6 sm:p-8 md:p-9 rounded-2xl bg-[#111113] border border-zinc-800/90 shadow-xl space-y-6 hover:border-zinc-700/80 transition-all duration-300 w-full min-w-0"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-zinc-800/80">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Developer Background
              </span>
              <span className="text-xs font-mono text-rose-400">
                {personalData.location} • Remote Available
              </span>
            </div>

            {/* Single Concise Paragraph */}
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              {personalData.bio}
            </p>

            {/* Core Stack Pillars */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800/60">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Frontend</div>
                <div className="text-sm font-semibold text-zinc-200">React &amp; Next.js</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Component systems, TypeScript, Tailwind</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800/60">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Backend</div>
                <div className="text-sm font-semibold text-zinc-200">Node.js &amp; Express</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">REST APIs, route handlers, auth flows</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800/60">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Database</div>
                <div className="text-sm font-semibold text-zinc-200">MongoDB</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Document modeling, CRUD queries</div>
              </div>
            </div>

            {/* Opportunity Status Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-zinc-300">Open to junior full-stack &amp; frontend roles</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-medium transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}