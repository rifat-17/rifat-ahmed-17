"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsMatrixCategories } from "@/data/portfolioData";
import { CodeIcon, ServerIcon, TerminalIcon } from "./Icons";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Domains" },
    { id: "frontend", label: "Frontend" },
    { id: "backend-db", label: "Backend & Database" },
    { id: "tools-deployment", label: "Tools" },
  ];

  const getCategoryIcon = (id) => {
    switch (id) {
      case "frontend":
        return <CodeIcon className="w-4 h-4 text-rose-500" />;
      case "backend-db":
        return <ServerIcon className="w-4 h-4 text-rose-500" />;
      case "tools-deployment":
        return <TerminalIcon className="w-4 h-4 text-rose-500" />;
      default:
        return <CodeIcon className="w-4 h-4 text-rose-500" />;
    }
  };

  const visibleCategories =
    activeTab === "all"
      ? skillsMatrixCategories
      : skillsMatrixCategories.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
          className="max-w-3xl mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              02 / Technical Skills
            </span>
          </div>

          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Technical Stack
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Languages, frameworks, libraries, and developer tools organized by domain.
          </p>
        </motion.div>

        {/* Filter Navigation Bar with Framer Motion pill */}
        <div
          role="tablist"
          aria-label="Filter skills by technical domain"
          className="inline-flex max-w-full flex-wrap p-1 rounded-xl bg-zinc-950 border border-zinc-800/90 mb-10 gap-1"
        >
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls="skills-matrix-panel"
                onClick={() => setActiveTab(tab.id)}
                className={`relative min-h-[40px] px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                  isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-tab-pill"
                    className="absolute inset-0 rounded-lg bg-rose-600 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div id="skills-matrix-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`grid gap-6 ${
                visibleCategories.length === 1
                  ? "grid-cols-1 lg:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {visibleCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-6 sm:p-7 rounded-2xl bg-[#111113] border border-zinc-800/90 shadow-xl flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300"
                >
                  <div>
                    {/* Category Title & Badge */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800" aria-hidden="true">
                          {getCategoryIcon(cat.id)}
                        </div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {cat.label}
                        </h3>
                      </div>
                    </div>

                    {/* Category Summary */}
                    <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Clean Categorized Skills List */}
                    <div className="space-y-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group p-2.5 sm:p-3 rounded-xl bg-[#141418] border border-zinc-800/70 hover:border-zinc-700 hover:bg-[#18181d] transition-all flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70 group-hover:bg-rose-500 transition-colors shrink-0" />
                            <span className="text-xs font-mono font-semibold text-zinc-200 group-hover:text-white transition-colors truncate">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}