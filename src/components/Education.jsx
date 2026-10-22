"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/data/portfolioData";
import { GraduationCapIcon, CheckCircleIcon } from "./Icons";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
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
              04 / Academic &amp; Foundations
            </span>
          </div>

          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Education &amp; Engineering Learning Path
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Foundational computer science principles paired with rigorous, hands-on full-stack engineering practice and continuous self-directed learning.
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl space-y-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              className="p-6 sm:p-8 rounded-2xl bg-[#111113] border border-zinc-800/90 shadow-xl hover:border-zinc-700/80 transition-all duration-300 space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800" aria-hidden="true">
                    <GraduationCapIcon className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-xs font-mono text-rose-400 font-medium">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {item.period}
                  </span>
                  {item.status && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.status}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Key Takeaways & Competencies */}
              {item.keyTakeaways && (
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    Core Competencies &amp; Focus:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {item.keyTakeaways.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-zinc-300">
                        <CheckCircleIcon className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Badges Strip */}
              {item.badges && (
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-2">
                  {item.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}