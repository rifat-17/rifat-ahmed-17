// Personal Profile Data
export const personalData = {
  name: "Mohammod Rifat Ahmed",
  role: "Junior Full-Stack Web Developer",
  status: "Available for new opportunities",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  email: "rifatahmedf4@gmail.com",
  tagline: "Building modern web applications with clean architecture and practical problem solving.",
  bio: "Full-stack web developer specializing in React, Next.js, Node.js, and MongoDB. I focus on building responsive web applications and reliable REST APIs with clean architecture, accessible interfaces, and practical problem solving.",
  socials: {
    github: "https://github.com/rifat-17",
    linkedin: "https://www.linkedin.com/in/mohammod-rifat-ahmed/",
    email: "mailto:rifatahmedf4@gmail.com",
  },
  highlights: [
    { label: "Core Stack", value: "React • Next.js • Node.js • MongoDB" },
    { label: "Engineering Ethos", value: "Clean Architecture & Performance" },
    { label: "Domain Focus", value: "Web Applications & Scalable APIs" },
  ],
  interests: [
    "Full-Stack Web Architecture",
    "RESTful APIs & Database Modeling",
    "AgriTech & Practical Digital Solutions",
    "Component Design Systems & Accessibility",
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
  heading: "Let's connect.",
  supportingText:
    "I am actively seeking junior full-stack developer roles and web application projects. Feel free to reach out directly via email, GitHub, or LinkedIn.",
  email: "rifatahmedf4@gmail.com",
  github: "https://github.com/rifat-17",
  linkedin: "https://www.linkedin.com/in/mohammod-rifat-ahmed",
  location: "Dhaka, Bangladesh (Remote Available)",
};

// Categorized Skills Matrix Data
export const skillsMatrixCategories = [
  {
    id: "frontend",
    label: "Frontend",
    shortLabel: "Frontend",
    description: "Responsive, accessible, component-driven user interfaces and web applications.",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    id: "backend-db",
    label: "Backend & Database",
    shortLabel: "Backend",
    description: "RESTful APIs, server controllers, and document database storage.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "RESTful APIs" },
      { name: "Authentication" },
    ],
  },
  {
    id: "tools-deployment",
    label: "Tools ",
    shortLabel: "Tools",
    description: "Version control workflows, developer tools, and cloud deployment pipelines.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "VS Code" },
    ],
  },
];

// Flat skills for resume / quick lookups
export const primaryTechnologies = skillsMatrixCategories.flatMap((cat) =>
  cat.skills.map((s) => s.name)
);

// Featured Projects with Factual Metadata & Working Links
export const projectsData = [
  {
    id: "bazar-dor",
    number: "01",
    name: "BazarDor — বাজার দর",
    subtitle: "Daily Commodity & Market Price Tracking Platform",
    category: "Full-Stack Web App",
    route: "app/market-prices",
    description:
      "A daily commodity and market price tracking platform for consumers to monitor essential grocery prices, daily price trends, and shopping lists. Built with Next.js App Router, TypeScript, Tailwind CSS, and MongoDB.",
    architecture: [
      "Next.js App Router with Server Components for fast page loads",
      "Categorized daily market commodity catalog with price shift indicators",
      "MongoDB database modeling for commodity items and price records",
      "Responsive, bilingual interface tailored for mobile and desktop users",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
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
    subtitle: "Workout Tracking & Routine Planner",
    category: "Web Application",
    route: "app/routines",
    description:
      "A responsive workout tracking web application that allows users to browse exercises, log workout sessions, and organize custom training plans. Built with Next.js, React, TypeScript, and Tailwind CSS.",
    architecture: [
      "Custom workout routine builder and exercise set logger",
      "Workout plan manager with saved routines and exercise metrics",
      "Modular component structure with type-safe TypeScript interfaces",
      "Mobile-friendly dark UI optimized for gym environments",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fit-log-chi-six.vercel.app/",
    githubUrl: "https://github.com/rifat-17/fit-log",
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
    previewType: "fitness",
  },
  {
    id: "dev-stack",
    number: "03",
    name: "DevStack",
    subtitle: "Developer Tools & Resource Directory",
    category: "Frontend Web App",
    route: "src/catalog",
    description:
      "A curated web developer resource directory featuring categorized UI libraries, utility tools, and code snippets with client-side search. Built with React, TypeScript, Tailwind CSS, and DaisyUI.",
    architecture: [
      "Instant client-side search and category filtering for web development tools",
      "Interactive resource directory with direct documentation and source links",
      "Reusable component architecture styled with Tailwind CSS and DaisyUI",
      "Optimized production bundle deployed on Netlify",
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
  // { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
