"use client";

import React, { useEffect } from "react";
import { CloseIcon, DownloadIcon, CheckCircleIcon } from "./Icons";
import { personalData, primaryTechnologies } from "@/data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-[#111113] p-4 sm:p-6 md:p-8 shadow-2xl text-zinc-200 m-3 sm:m-4">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-zinc-800 pb-4 sm:pb-5 gap-2">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Developer Summary
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {personalData.name}
            </h2>
            <p className="text-xs font-medium text-rose-400 mt-0.5">
              {personalData.role}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              title="Print or Save as PDF"
            >
              <DownloadIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden xs:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Close modal"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="mt-6 space-y-6 text-sm text-zinc-300">
          {/* Summary */}
          <div className="rounded-lg bg-[#141417] p-4 border border-zinc-800/80">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Professional Focus
            </h3>
            <p className="leading-relaxed text-zinc-300 text-xs sm:text-sm">{personalData.bio}</p>
          </div>

          {/* Primary Technologies */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Primary Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {primaryTechnologies.map((tech) => (
                <span
                  key={typeof tech === "string" ? tech : tech.name}
                  className="px-3 py-1 rounded text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-200"
                >
                  {typeof tech === "string" ? tech : tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Key Areas of Interest
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {personalData.interests.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Contact Details */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
            <div>
              <span>Email: </span>
              <a href={`mailto:${personalData.email}`} className="text-rose-400 hover:underline">
                {personalData.email}
              </a>
            </div>
            <div>
              <span>GitHub: </span>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:underline"
              >
                github.com/rifat-17
              </a>
            </div>
            <div>
              <span>LinkedIn: </span>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:underline"
              >
                linkedin.com/in/mohammod-rifat-ahmed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
