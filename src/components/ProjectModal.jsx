"use client";

import React, { useEffect } from "react";
import { CloseIcon, ExternalLinkIcon, GithubIcon, CheckCircleIcon } from "./Icons";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-[#111113] p-4 sm:p-6 md:p-8 shadow-2xl text-zinc-100 m-3 sm:m-4">
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-zinc-800 pb-4 sm:pb-5 gap-2">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <span>{project.category}</span>
              <span className="text-zinc-600" aria-hidden="true">•</span>
              <span>Project #{project.number || "01"}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.name}
            </h2>
            {project.subtitle && (
              <p className="text-xs font-mono text-zinc-400">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-6 text-sm text-zinc-300">
          {/* Detailed Overview */}
          <div className="p-4 rounded-xl bg-[#141418] border border-zinc-800/80">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Overview &amp; Purpose
            </h3>
            <p className="leading-relaxed text-zinc-200 text-xs sm:text-sm">
              {project.description}
            </p>
          </div>

          {/* Architectural Decisions & Features */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Key Architectural Highlights
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm list-none p-0 m-0">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project.technologies || []).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-md shadow-rose-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>Visit Live Application</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-200 underline"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
