"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolioData";
import { MenuIcon, CloseIcon, FileTextIcon } from "./Icons";

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Track scroll position to update navbar border and active link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Personal Monogram & Identity */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-white shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg p-1"
            aria-label="Mohammod Rifat Ahmed Homepage"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-700/80 text-xs font-mono font-bold text-rose-400 group-hover:border-rose-500/50 transition-colors">
              R
            </span>
            <span className="font-mono tracking-wider text-zinc-100 group-hover:text-white transition-colors text-sm font-semibold">
              RIFAT<span className="text-rose-500">.</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span>Available</span>
            </span>
          </a>

          {/* Desktop Navigation Links with animated active pill (Active at lg: 1024px+) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-zinc-900/80 px-2 py-1.5 rounded-full border border-zinc-800/90 backdrop-blur-md shadow-inner"
          >
            {navLinks.map((link) => {
              const linkId = link.href.replace("#", "");
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-zinc-800 border border-zinc-700/60 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Area: Resume + Let's Talk (Active at lg: 1024px+) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <FileTextIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-[0_2px_12px_-2px_rgba(225,29,72,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile & Tablet Actions (0px to 1023px) */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={onOpenResume}
              aria-label="View Resume Summary"
              className="min-h-[44px] px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <FileTextIcon className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span className="hidden xs:inline">Resume</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#09090b]/98 backdrop-blur-2xl border-t border-zinc-800/80 z-40 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 text-xs text-zinc-400">
                <span className="font-mono uppercase tracking-wider">Navigation</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Available for Hire
                </span>
              </div>

              <nav aria-label="Mobile Navigation Links" className="space-y-1.5">
                {navLinks.map((link) => {
                  const linkId = link.href.replace("#", "");
                  const isActive = activeSection === linkId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all ${
                        isActive
                          ? "text-white bg-zinc-900 border border-zinc-700/80 font-semibold shadow-sm"
                          : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="font-mono text-xs text-zinc-600">→</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 pb-6 border-t border-zinc-800 space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-lg shadow-rose-950/40"
              >
                Let&apos;s Talk
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              >
                <FileTextIcon className="w-4 h-4 text-zinc-400" />
                <span>View Full Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}