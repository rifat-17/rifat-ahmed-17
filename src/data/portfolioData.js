// Personal Profile Data
export const personalData = {
  name: "Mohammod Rifat Ahmed",
  role: "Full-Stack Web Developer",
  status: "Available for new opportunities",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  email: "rifatahmedf4@gmail.com",
  tagline: "Building modern, scalable web applications with clean architecture and practical problem solving.",
  bio: "I'm a full-stack web developer passionate about turning ideas into high-performance, intuitive digital experiences. My core focus lies in crafting responsive, accessible user interfaces while engineering robust backend APIs and scalable document databases. I bring a strong appetite for problem-solving, clean code aesthetics, and emerging web technologies—with a particular interest in impactful AgriTech solutions.",
  socials: {
    github: "https://github.com/rifat-17",
    linkedin: "https://www.linkedin.com/in/mohammod-rifat-ahmed/",
    email: "mailto:rifatahmedf4@gmail.com",
  },
  highlights: [
    { label: "Core Stack", value: "React • Next.js • Node • Mongo" },
    { label: "Engineering Ethos", value: "Clean Architecture & Performance" },
    { label: "Domain Interest", value: "Web Apps & AgriTech Systems" },
    { label: "Current Focus", value: "Full-Stack TypeScript & Scalable APIs" },
  ],
  interests: [
    "Modern Full-Stack Web Architecture",
    "AgriTech & Practical Digital Solutions",
    "Scalable REST APIs & Data Modeling",
    "Design Systems & Micro-Interactions",
  ],
};

// Hero Section Configuration
export const heroConfig = {
  showAvailability: true,
  availabilityText: "Available for roles & projects",
  greeting: "Hello, world! I'm Mohammod Rifat Ahmed",
  mainHeadline: "Crafting scalable web applications with clean architecture.",
  introduction:
    "Full-stack web developer specializing in React, Next.js, Node.js, and MongoDB. Focused on building responsive, human-centered interfaces backed by reliable server architecture and thoughtful engineering.",
  primaryCta: {
    text: "View Featured Work",
    href: "#projects",
  },
  secondaryCta: {
    text: "Get In Touch",
    href: "#contact",
  },
};

// Contact Section Configuration
export const contactConfig = {
  heading: "Let's build something remarkable together.",
  supportingText:
    "Whether you're looking for a full-stack developer to join your team, need a modern web application built from scratch, or simply want to chat about tech—my inbox is always open.",
  email: "rifatahmedf4@gmail.com",
  github: "https://github.com/rifat-17",
  linkedin: "https://www.linkedin.com/in/mohammod-rifat-ahmed",
  location: "Dhaka, Bangladesh (Remote Available)",
};

// Categorized Skills Matrix Data
export const skillsMatrixCategories = [
  {
    id: "frontend",
    label: "Frontend Engineering",
    shortLabel: "Frontend",
    description: "Building responsive, accessible, component-driven user interfaces with modern frameworks.",
    skills: [
      { name: "React", level: "Core", note: "Component Architecture & Hooks" },
      { name: "Next.js", level: "Core", note: "App Router & SSR/SSG" },
      { name: "TypeScript", level: "Proficient", note: "Type Safety & Interfaces" },
      { name: "JavaScript", level: "Advanced", note: "ESNext & Async Patterns" },
      { name: "Tailwind CSS", level: "Advanced", note: "Design Systems & Responsive Layouts" },
      { name: "HTML5 / CSS3", level: "Advanced", note: "Semantic Structure & Modern CSS" },
    ],
  },
  {
    id: "backend-db",
    label: "Backend & Database",
    shortLabel: "Backend",
    description: "Designing RESTful APIs, business logic controllers, and schema-driven document storage.",
    skills: [
      { name: "Node.js", level: "Proficient", note: "Event-driven Server Runtime" },
      { name: "Express.js", level: "Proficient", note: "Middleware & Route Handlers" },
      { name: "MongoDB", level: "Proficient", note: "Document Modeling & Aggregations" },
      { name: "RESTful APIs", level: "Proficient", note: "CRUD Architecture & JSON Endpoints" },
      { name: "Better Auth", level: "Working", note: "Session & Role Management" },
    ],
  },
  {
    id: "tools-deployment",
    label: "Tools & Deployment",
    shortLabel: "Tools & DevOps",
    description: "Version control workflows, cloud hosting pipelines, and modern developer tooling.",
    skills: [
      { name: "Git", level: "Advanced", note: "Branching & Version Control" },
      { name: "GitHub", level: "Advanced", note: "Collaborative Workflows & PRs" },
      { name: "Vercel", level: "Proficient", note: "Continuous Deployment & Edge Hosting" },
      { name: "Netlify", level: "Proficient", note: "Frontend Hosting & CI/CD" },
      { name: "Postman", level: "Proficient", note: "API Testing & Documentation" },
      { name: "VS Code", level: "Advanced", note: "Productivity & Debugging Setup" },
    ],
  },
];

// Flat skills for resume / quick lookups
export const primaryTechnologies = skillsMatrixCategories.flatMap((cat) =>
  cat.skills.map((s) => s.name)
);

// Featured Projects with Rich Metadata & Architectural Context
export const projectsData = [
  {
    id: "bazar-dor",
    number: "01",
    name: "BazarDor — বাজার দর",
    subtitle: "Real-time Commodity & Market Price Intelligence Platform",
    category: "Full-Stack Web App",
    route: "api/market-prices/bazar-dor",
    description:
      "A comprehensive market-price tracking platform designed to bring transparency to essential daily commodity prices. Features verified community reporting, localized price comparisons across markets, and role-based authentication.",
    architecture: [
      "App Router with Server Components for fast content delivery",
      "Better Auth session integration for secure price reporting",
      "MongoDB database modeling with price history tracking",
      "Bilingual interface designed for local consumer clarity",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "MongoDB"],
    liveUrl: "https://bazar-dor-beryl.vercel.app/",
    githubUrl: "https://github.com/rifat-17/Bazar-Dor",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
    previewType: "market",
  },
  {
    id: "fit-log",
    number: "02",
    name: "FitLog",
    subtitle: "Minimalist Workout Tracking & Routine Management System",
    category: "Fitness & Productivity",
    route: "app/routines/workout-tracker",
    description:
      "A fast, responsive web application for planning, executing, and logging personal fitness routines. Provides progressive overload tracking, exercise history, and session metrics with a friction-free mobile interface.",
    architecture: [
      "Optimistic UI updates for seamless workout set logging",
      "Modular exercise database with volume calculation",
      "Type-safe state management with TypeScript interfaces",
      "Mobile-first responsive UX tailored for gym environments",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fit-log-git-main-rifat-17.vercel.app/",
    githubUrl: "https://github.com/rifat-17/fit-log",
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
    previewType: "fitness",
  },
  {
    id: "dev-stack",
    number: "03",
    name: "DevStack",
    subtitle: "Developer Resources Directory & Component Sandbox",
    category: "Developer Tooling",
    route: "src/catalog/developer-resources",
    description:
      "A curated resource discovery platform engineered for web developers. Organizes modern UI libraries, utility functions, code snippets, and design references into an easily searchable, interactive dashboard.",
    architecture: [
      "Interactive category filtering and instant client search",
      "Reusable component library built with React & DaisyUI",
      "Fast client-side hydration and accessible keyboard navigation",
      "Clean UI tokens with high-contrast developer theme",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    liveUrl: "https://a05-devstack.netlify.app/",
    githubUrl: "https://github.com/rifat-17/A05-DevStack-Project",
    accent: "from-purple-500/20 via-rose-500/10 to-transparent",
    badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10",
    previewType: "devstack",
  },
];

// Academic & Professional Studies
export const educationData = [
  {
    degree: "Computer Science & Engineering Fundamentals",
    institution: "Academic Education & Specialized Web Track",
    period: "2023 — Present",
    status: "Ongoing",
    description:
      "Intensive coursework covering algorithms, data structures, software architecture, modern JavaScript ecosystems, and full-stack software development best practices.",
    keyTakeaways: [
      "Full-stack web application development with React, Node.js, and MongoDB",
      "System design principles, database normalization, and RESTful APIs",
      "Responsive design, modern CSS architecture, and accessibility standards",
      "Version control workflows, test-driven debugging, and team collaboration",
    ],
    badges: ["Full-Stack Architecture", "JavaScript Ecosystem", "Database Design", "AgriTech Systems"],
  },
];

// Navigation Links
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
