"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalData } from "@/data/portfolioData";
import { ArrowUpRightIcon, CheckCircleIcon, SparklesIcon } from "./Icons";

export default function AboutMe() {
  const principles = [
    {
      title: "Clean, Component-Driven Code",
      desc: "Architecting modular, maintainable UI systems in React & Next.js that scale without technical debt.",
    },
    {
      title: "Full-Stack Synchronization",
      desc: "Bridging responsive client-side interfaces with structured REST APIs, JWT/auth flows, and MongoDB storage.",
    },
    {
      title: "Real-World Impact & AgriTech",
      desc: "Passionate about applying software engineering to tangible problems like commodity pricing and agricultural efficiency.",
    },
  ];

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
              01 / Engineering Background
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Turning ideas into{" "}
            <span className="text-rose-400">resilient, practical</span> web systems.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            A developer who balances clean design aesthetics with solid backend fundamentals and thoughtful problem solving.
          </p>
        </motion.div>

        {/* Bento-Inspired Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Story Card (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-8 p-5 sm:p-7 md:p-8 rounded-2xl bg-[#111113] border border-zinc-800/90 shadow-xl flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300 w-full min-w-0"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Developer Narrative
                </span>
                <span className="text-xs font-mono text-rose-400">
                  Dhaka, Bangladesh • Remote Ready
                </span>
              </div>

              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                {personalData.bio}
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed">
                I enjoy the entire journey of product building—from conceptualizing clean layouts and writing accessible, responsive components to designing database schemas and structuring RESTful endpoints. My goal is always to deliver software that is both visually polished and architecturally reliable.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800/60">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Frontend</div>
                <div className="text-sm font-semibold text-zinc-200">React &amp; Next.js</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Component systems, Tailwind, SSR</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800/60">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Backend</div>
                <div className="text-sm font-semibold text-zinc-200">Node &amp; Express</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">REST APIs, JWT &amp; Auth flows</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800/60">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Database</div>
                <div className="text-sm font-semibold text-zinc-200">MongoDB</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Mongoose models &amp; aggregations</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Principles & Quick Facts (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6 w-full min-w-0"
          >
            {/* Principles Box */}
            <div className="p-6 rounded-2xl bg-[#111113] border border-zinc-800/90 shadow-xl space-y-4 hover:border-zinc-700/80 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 pb-2 border-b border-zinc-800/80">
                <SparklesIcon className="w-3.5 h-3.5 text-rose-500" />
                <span>How I Work</span>
              </div>

              <ul className="space-y-4 text-xs list-none p-0 m-0">
                {principles.map((p, idx) => (
                  <li key={idx} className="space-y-1">
                    <div className="font-semibold text-zinc-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                      <span>{p.title}</span>
                    </div>
                    <p className="text-zinc-400 pl-3.5 leading-relaxed">
                      {p.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats / Highlights Pill Card */}
            <div className="p-5 rounded-2xl bg-[#141418] border border-zinc-800/90 shadow-md">
              <div className="flex items-center justify-between text-xs text-zinc-400 pb-3 border-b border-zinc-800">
                <span className="font-mono uppercase tracking-wider">Fast Response</span>
                <span className="text-emerald-400 font-mono">Open to Connect</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Have an opportunity?</div>
                  <div className="text-xs text-zinc-400">Let&apos;s discuss how I can contribute.</div>
                </div>
                <a
                  href="#contact"
                  className="p-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-colors"
                  aria-label="Contact Rifat"
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}