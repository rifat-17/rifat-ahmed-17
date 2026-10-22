"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-rose-950 selection:text-rose-200">
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Stream */}
      <main id="main-content" className="relative">
        {/* 00: Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 01: About Me Section */}
        <AboutMe />

        {/* 02: Skills Section */}
        <Skills />

        {/* 03: Projects Section */}
        <Projects />

        {/* 04: Education & Foundation Section */}
        <Education />

        {/* 05: Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessible Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
