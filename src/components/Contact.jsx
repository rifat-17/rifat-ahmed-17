"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactConfig } from "@/data/portfolioData";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowUpRightIcon,
  CopyIcon,
  CheckIcon,
} from "./Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactChannels = [
    {
      name: "Direct Email",
      label: "Email",
      value: contactConfig.email,
      href: `mailto:${contactConfig.email}`,
      icon: <MailIcon className="w-5 h-5 text-rose-500" />,
      actionText: "Send Email",
      canCopy: true,
      external: false,
      description: "Fast response within 24 hours",
    },
    {
      name: "GitHub",
      label: "GitHub",
      value: "github.com/rifat-17",
      href: contactConfig.github,
      icon: <GithubIcon className="w-5 h-5 text-zinc-300" />,
      actionText: "View Profile",
      canCopy: false,
      external: true,
      description: "Repositories & source code",
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      value: "mohammod-rifat-ahmed",
      href: contactConfig.linkedin,
      icon: <LinkedinIcon className="w-5 h-5 text-rose-400" />,
      actionText: "Connect",
      canCopy: false,
      external: true,
      description: "Professional network & background",
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
          className="max-w-3xl mb-12 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              04 / Contact
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            {contactConfig.heading}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            {contactConfig.supportingText}
          </p>
        </motion.div>

        {/* 3 Streamlined Contact Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactChannels.map((channel, idx) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              className="p-6 rounded-2xl bg-[#111113] border border-zinc-800/90 shadow-xl hover:border-zinc-700/80 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800" aria-hidden="true">
                    {channel.icon}
                  </div>
                  {channel.canCopy && (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address to clipboard"
                      className="min-h-[32px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                    >
                      {copiedEmail ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-rose-400" />
                          <span className="text-rose-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {channel.label}
                  </span>
                  <div className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors break-all">
                    {channel.value}
                  </div>
                  <p className="text-xs text-zinc-400 pt-1">
                    {channel.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/80">
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  aria-label={`Open ${channel.name}`}
                  className="w-full min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 group-hover:border-zinc-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  <span>{channel.actionText}</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location & Status Footnote */}
        <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Dhaka, Bangladesh (UTC+6) • Open to remote roles &amp; local opportunities</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}