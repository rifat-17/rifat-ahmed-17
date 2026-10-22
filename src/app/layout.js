import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://rifat-portfolio.vercel.app"),
  title: {
    default: "Mohammod Rifat Ahmed | Full-Stack Web Developer",
    template: "%s | Mohammod Rifat Ahmed",
  },
  description:
    "Portfolio of Mohammod Rifat Ahmed — Full-Stack Web Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB. Explore production applications, architectural highlights, and core engineering skills.",
  keywords: [
    "Mohammod Rifat Ahmed",
    "Full-Stack Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "TypeScript",
    "Tailwind CSS",
    "AgriTech",
    "Web Application Architecture",
  ],
  authors: [{ name: "Mohammod Rifat Ahmed", url: "https://github.com/rifat-17" }],
  creator: "Mohammod Rifat Ahmed",
  publisher: "Mohammod Rifat Ahmed",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rifat-portfolio.vercel.app",
    siteName: "Mohammod Rifat Ahmed — Full-Stack Developer Portfolio",
    title: "Mohammod Rifat Ahmed | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. Building responsive, human-centered web apps with clean architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammod Rifat Ahmed | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. Building modern web applications with clean architecture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#09090b] text-zinc-100 selection:bg-rose-950 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}
