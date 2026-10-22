"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { heroConfig, personalData } from "@/data/portfolioData";
import {
  ArrowUpRightIcon,
  MailIcon,
  CopyIcon,
  CheckIcon,
  TerminalIcon,
  GithubIcon,
  LinkedinIcon,
  FileTextIcon,
} from "./Icons";

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [copiedCode, setCopiedCode] = useState(false);

  const snippetProfile = `// developer.ts — Full-Stack Engineer Profile
export const engineer: Developer = {
  name: "${personalData.name}",
  role: "${personalData.role}",
  location: "${personalData.location}",
  status: "${personalData.status}",
  specialties: [
    "Frontend Component Architecture",
    "Scalable RESTful Backend APIs",
    "Document Database Modeling (MongoDB)",
    "AgriTech & Practical Problem Solving"
  ],
  stack: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
  openToCollaboration: true,
};`;

  const snippetStack = `{
  "coreTechnologies": {
    "frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    "backend": ["Node.js", "Express.js", "REST APIs"],
    "database": ["MongoDB", "Mongoose"],
    "auth": ["Better Auth", "JWT", "Session Management"],
    "tooling": ["Git", "GitHub", "Vercel", "Postman"]
  },
  "metrics": {
    "cleanArchitecture": true,
    "responsiveUX": true,
    "fastHydration": true
  }
}`;

  const currentCode = activeTab === "profile" ? snippetProfile : snippetStack;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[85vh] flex items-center pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24 overflow-hidden w-full max-w-full"
    >
      {/* Background ambient lighting and fine grid (bound to container width) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-rose-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic & Editorial Composition */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left min-w-0"
          >
            {/* Status & Identity Badge (Fully responsive on small screens) */}
            <div className="inline-flex max-w-full flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-zinc-900/90 border border-zinc-800/90 text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-200 font-medium">Full-Stack Web Developer</span>
              <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
              <span className="text-zinc-400 hidden sm:inline">{personalData.location}</span>
            </div>

            {/* Greeting & Main Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono font-medium text-rose-400 tracking-wide">
                {heroConfig.greeting}
              </p>
              <h1
                id="hero-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.16] break-words"
              >
                Building{" "}
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  modern web applications
                </span>{" "}
                with <span className="text-rose-500">clean architecture</span> &amp; purpose.
              </h1>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-sm sm:text-base text-zinc-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {heroConfig.introduction}
            </p>

            {/* Action Buttons (Stacked on mobile, row on tablet/desktop) */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <a
                href={heroConfig.primaryCta.href}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-[0_4px_16px_-2px_rgba(225,29,72,0.4)] hover:shadow-[0_6px_20px_-2px_rgba(225,29,72,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <span>{heroConfig.primaryCta.text}</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 shrink-0" />
              </a>

              <a
                href={heroConfig.secondaryCta.href}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <MailIcon className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{heroConfig.secondaryCta.text}</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-transparent hover:bg-zinc-900/60 border border-zinc-800/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <FileTextIcon className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Profiles and Core Technical Focus for instant recruiter scan */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-3">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mr-1">
                  Core Stack:
                </span>
                {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-zinc-400">
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Connect:
                </span>
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (opens in new tab)"
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub</span>
                </a>
                <span className="text-zinc-700" aria-hidden="true">•</span>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (opens in new tab)"
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-rose-500" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Crafted Interactive Developer IDE / Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="lg:col-span-5 w-full max-w-full min-w-0"
          >
            <div className="rounded-2xl border border-zinc-800/90 bg-[#101012] shadow-2xl overflow-hidden backdrop-blur-md w-full max-w-full min-w-0">
              {/* Window Header / Tab Bar */}
              <div className="flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141417] border-b border-zinc-800/80 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="hidden sm:flex items-center gap-1.5 pr-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" aria-hidden="true" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" aria-hidden="true" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" aria-hidden="true" />
                  </div>

                  {/* Interactive Tabs */}
                  <div className="flex items-center gap-1 min-w-0">
                    <button
                      type="button"
                      onClick={() => setActiveTab("profile")}
                      className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors shrink-0 ${
                        activeTab === "profile"
                          ? "bg-zinc-800 text-zinc-100 border border-zinc-700/60 shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <TerminalIcon className="w-3 h-3 text-rose-400 shrink-0" />
                      <span className="truncate">dev.ts</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("stack")}
                      className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors shrink-0 ${
                        activeTab === "stack"
                          ? "bg-zinc-800 text-zinc-100 border border-zinc-700/60 shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <span className="text-cyan-400 text-[10px] font-bold">{"{}"}</span>
                      <span className="truncate">stack.json</span>
                    </button>
                  </div>
                </div>

                {/* Copy Snippet Button (Accessible touch target) */}
                <button
                  type="button"
                  onClick={handleCopyCode}
                  aria-label="Copy code snippet to clipboard"
                  className="min-h-[32px] flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-400 hover:text-zinc-200 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 transition-colors shrink-0"
                >
                  {copiedCode ? (
                    <>
                      <CheckIcon className="w-3 h-3 text-rose-400 shrink-0" />
                      <span className="text-rose-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-3 h-3 text-zinc-400 shrink-0" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Editor Body with Horizontal Scroll containment */}
              <div className="p-3.5 sm:p-5 font-mono text-xs leading-relaxed text-zinc-300 bg-[#0c0c0e] overflow-x-auto w-full min-w-0 max-h-[340px]">
                {activeTab === "profile" ? (
                  <div className="space-y-0.5 min-w-max">
                    <div className="flex text-zinc-500 italic">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">1</span>
                      <span>{"// Mohammod Rifat Ahmed — Full-Stack Profile"}</span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">2</span>
                      <span>
                        <span className="text-rose-400">export const</span>{" "}
                        <span className="text-cyan-300">engineer</span>:{" "}
                        <span className="text-amber-300">Developer</span> = &#123;
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">3</span>
                      <span className="pl-4">
                        <span className="text-zinc-400">name:</span>{" "}
                        <span className="text-emerald-300">&quot;{personalData.name}&quot;</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">4</span>
                      <span className="pl-4">
                        <span className="text-zinc-400">role:</span>{" "}
                        <span className="text-emerald-300">&quot;{personalData.role}&quot;</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">5</span>
                      <span className="pl-4">
                        <span className="text-zinc-400">location:</span>{" "}
                        <span className="text-emerald-300">&quot;{personalData.location}&quot;</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">6</span>
                      <span className="pl-4">
                        <span className="text-zinc-400">focus:</span>{" "}
                        <span className="text-emerald-300">&quot;Modern Web &amp; Scalable Systems&quot;</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">7</span>
                      <span className="pl-4">
                        <span className="text-zinc-400">stack:</span> [
                        <span className="text-rose-300">&quot;Next.js&quot;</span>,{" "}
                        <span className="text-rose-300">&quot;React&quot;</span>,{" "}
                        <span className="text-cyan-300">&quot;Node&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Mongo&quot;</span>],
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">8</span>
                      <span className="pl-4">
                        <span className="text-zinc-400">availableForHire:</span>{" "}
                        <span className="text-amber-400">true</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">9</span>
                      <span>&#125;;</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-0.5 min-w-max">
                    <div className="flex text-zinc-500 italic">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">1</span>
                      <span>{"// Architecture & Stack Matrix"}</span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">2</span>
                      <span>&#123;</span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">3</span>
                      <span className="pl-4">
                        <span className="text-cyan-300">&quot;frontend&quot;</span>: [
                        <span className="text-emerald-300">&quot;React 19&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Next.js 15+&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;TypeScript&quot;</span>],
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">4</span>
                      <span className="pl-4">
                        <span className="text-cyan-300">&quot;backend&quot;</span>: [
                        <span className="text-emerald-300">&quot;Node.js&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Express.js&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;REST APIs&quot;</span>],
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">5</span>
                      <span className="pl-4">
                        <span className="text-cyan-300">&quot;database&quot;</span>: [
                        <span className="text-emerald-300">&quot;MongoDB&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Mongoose&quot;</span>],
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">6</span>
                      <span className="pl-4">
                        <span className="text-cyan-300">&quot;interests&quot;</span>: [
                        <span className="text-rose-300">&quot;AgriTech&quot;</span>,{" "}
                        <span className="text-rose-300">&quot;Real-Time Systems&quot;</span>],
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">7</span>
                      <span className="pl-4">
                        <span className="text-cyan-300">&quot;performance&quot;</span>:{" "}
                        <span className="text-amber-400">100</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-right select-none pr-3 text-zinc-600">8</span>
                      <span>&#125;</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-3.5 py-2 bg-[#141417] border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono gap-2">
                <div className="flex items-center gap-2 sm:gap-3 truncate">
                  <span className="flex items-center gap-1.5 text-zinc-300 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span>git:(main)</span>
                  </span>
                  <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">|</span>
                  <span className="text-zinc-400 hidden sm:inline truncate">0 errors</span>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-rose-400 font-semibold">
                    {activeTab === "profile" ? "TypeScript" : "JSON"}
                  </span>
                  <span className="text-zinc-500">UTF-8</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}