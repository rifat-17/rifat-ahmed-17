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
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleComposeMail = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contactConfig.email}?subject=${encodeURIComponent(
      subject || "Web Development Opportunity / Inquiry"
    )}&body=${encodeURIComponent(message || "Hi Rifat, I came across your portfolio...")}`;
    window.location.href = mailtoUrl;
  };

  const contactMethods = [
    {
      name: "Direct Email",
      value: contactConfig.email,
      href: `mailto:${contactConfig.email}`,
      icon: <MailIcon className="w-4 h-4 text-rose-500" />,
      actionText: "Send Mail",
      canCopy: true,
      external: false,
      note: "Primary channel • Responds within 24h",
    },
    {
      name: "GitHub Profile",
      value: "github.com/rifat-17",
      href: contactConfig.github,
      icon: <GithubIcon className="w-4 h-4 text-zinc-300" />,
      actionText: "View Repos",
      canCopy: false,
      external: true,
      note: "Active repositories & source code",
    },
    {
      name: "LinkedIn Network",
      value: "mohammod-rifat-ahmed",
      href: contactConfig.linkedin,
      icon: <LinkedinIcon className="w-4 h-4 text-rose-500" />,
      actionText: "Connect",
      canCopy: false,
      external: true,
      note: "Professional networking & updates",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Contact Channels */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  05 / Get In Touch
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
            </div>

            {/* Channels Cards */}
            <div className="space-y-3 pt-2">
              {contactMethods.map((method) => (
                <div
                  key={method.name}
                  className="p-4 sm:p-5 rounded-xl bg-[#111113] border border-zinc-800/90 hover:border-zinc-700/80 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800" aria-hidden="true">
                      {method.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase text-zinc-400">
                          {method.name}
                        </span>
                        {method.canCopy && (
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            aria-label="Copy email address"
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400 hover:text-white bg-zinc-800 border border-zinc-700/60 transition-colors"
                          >
                            {copiedEmail ? (
                              <>
                                <CheckIcon className="w-2.5 h-2.5 text-rose-400" />
                                <span className="text-rose-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <CopyIcon className="w-2.5 h-2.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5 break-all">
                        {method.value}
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">
                        {method.note}
                      </div>
                    </div>
                  </div>

                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    aria-label={`Open ${method.name}`}
                    className="min-h-[44px] min-w-[44px] p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Quick Direct Message Composer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111113] border border-zinc-800/90 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                    Direct Email Composer
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  via Default Mail Client
                </span>
              </div>

              <form onSubmit={handleComposeMail} className="space-y-4">
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full-Stack Developer Role / Project Consultation"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-zinc-800 text-base sm:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message Summary
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a brief overview of your team, project, or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-zinc-800 text-base sm:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500 transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-[0_4px_16px_-2px_rgba(225,29,72,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  <MailIcon className="w-4 h-4" />
                  <span>Open Email in Client</span>
                </button>
              </form>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-zinc-500 font-mono">
                  Prefer direct copy? <button type="button" onClick={handleCopyEmail} className="text-rose-400 hover:underline">{contactConfig.email}</button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}