"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/portfolioData";
import {
  ExternalLinkIcon,
  GithubIcon,
  InfoIcon,
} from "./Icons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Render stylized interactive UI Mockups for each project
  const renderProjectMockup = (project) => {
    if (project.previewType === "market") {
      return (
        <div className="p-3.5 bg-[#0d0d10] border-b border-zinc-800/80 font-mono text-[11px] select-none">
          {/* Mock Browser/App Bar */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-800/60">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-zinc-300 font-semibold">BazarDor / Intelligence</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              Kawran Bazar • Live
            </span>
          </div>

          {/* Commodity Mini Price Stream */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
            <div className="p-2 rounded-lg bg-[#141418] border border-zinc-800/70">
              <div className="text-[10px] text-zinc-400 truncate">Miniket Rice 1kg</div>
              <div className="text-xs font-bold text-zinc-100 mt-0.5">৳ 72.00</div>
              <div className="text-[9px] text-rose-400">▲ +1.4%</div>
            </div>
            <div className="p-2 rounded-lg bg-[#141418] border border-zinc-800/70">
              <div className="text-[10px] text-zinc-400 truncate">Deshi Onion 1kg</div>
              <div className="text-xs font-bold text-zinc-100 mt-0.5">৳ 110.00</div>
              <div className="text-[9px] text-emerald-400">▼ -2.1%</div>
            </div>
            <div className="p-2 rounded-lg bg-[#141418] border border-zinc-800/70 hidden sm:block">
              <div className="text-[10px] text-zinc-400 truncate">Potato 1kg</div>
              <div className="text-xs font-bold text-zinc-100 mt-0.5">৳ 55.00</div>
              <div className="text-[9px] text-zinc-500">— 0.0%</div>
            </div>
          </div>
        </div>
      );
    }

    if (project.previewType === "fitness") {
      return (
        <div className="p-3.5 bg-[#0d0d10] border-b border-zinc-800/80 font-mono text-[11px] select-none">
          {/* Mock Workout Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-800/60">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-zinc-300 font-semibold">FitLog / Push Day A</span>
            </div>
            <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
              ⏱ 00:42:15
            </span>
          </div>

          {/* Active Exercises List */}
          <div className="space-y-1.5">
            <div className="p-1.5 px-2 rounded-lg bg-[#141418] border border-zinc-800/70 flex items-center justify-between">
              <div className="text-[11px] text-zinc-300">Barbell Bench Press</div>
              <div className="text-[10px] text-cyan-300 font-semibold">4 sets • 80 kg ✓</div>
            </div>
            <div className="p-1.5 px-2 rounded-lg bg-[#141418] border border-zinc-800/70 flex items-center justify-between">
              <div className="text-[11px] text-zinc-300">Incline DB Press</div>
              <div className="text-[10px] text-zinc-400">3 sets • 26 kg ✓</div>
            </div>
          </div>
        </div>
      );
    }

    // Default: DevStack
    return (
      <div className="p-3.5 bg-[#0d0d10] border-b border-zinc-800/80 font-mono text-[11px] select-none">
        {/* Mock Dev Header */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-800/60">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-zinc-300 font-semibold">DevStack / Snippets &amp; UI</span>
          </div>
          <span className="text-[10px] text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">
            120+ Curated
          </span>
        </div>

        {/* Code Snippet Card */}
        <div className="p-2 rounded-lg bg-[#141418] border border-zinc-800/70">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 pb-1 border-b border-zinc-800/50">
            <span>useLocalStorage.ts</span>
            <span className="text-purple-400">⌘K Search</span>
          </div>
          <div className="text-[10px] text-zinc-300 font-mono pt-1">
            <span className="text-rose-400">const</span> [val, setVal] = useStorage(key, init);
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
              03 / Selected Work
            </span>
          </div>

          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Featured Projects
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Web applications built with Next.js, React, TypeScript, and MongoDB.
          </p>
        </motion.div>

        {/* 3 Bespoke Developer Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              className="group rounded-2xl bg-[#111113] border border-zinc-800/90 overflow-hidden shadow-xl hover:border-zinc-700/80 hover:shadow-2xl hover:shadow-rose-950/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual UI Preview Mockup */}
                {renderProjectMockup(project)}

                {/* Card Header & Metadata */}
                <div className="p-6 pb-2 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-rose-500">
                      #{project.number}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors tracking-tight">
                      {project.name}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-medium text-zinc-400 mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech Stack + Actions */}
              <div className="p-6 pt-4 space-y-4">
                {/* Tech Tags */}
                <div>
                  <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-900 text-zinc-300 border border-zinc-800/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Links Bar */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit live demo for ${project.name}`}
                      className="min-h-[40px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub source code for ${project.name}`}
                      className="min-h-[40px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="min-h-[40px] min-w-[40px] p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 border border-zinc-800/80 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                    title="View Architectural Details"
                    aria-label={`View detailed architecture for ${project.name}`}
                  >
                    <InfoIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Architectural Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}