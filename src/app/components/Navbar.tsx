"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Define links array to keep the code DRY and easy to map over
  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Competencies", href: "#competencies" },
    { name: "Education", href: "#education" },
  ];

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 backdrop-blur-md bg-white/80 border-b border-purple-100 dark:bg-[#0b0514]/70 dark:border-purple-900/30 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tighter flex items-center gap-2 relative z-50"
            onClick={handleLinkClick}
          >
            Arafat
            <span className="text-purple-600 dark:text-purple-400/70">
              Sunny
            </span>
          </Link>

          {/* Desktop Links with Animated Hover Pill */}
          <div className="hidden md:flex items-center gap-2 font-medium text-sm text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 transition-colors hover:text-purple-600 dark:hover:text-purple-300"
              >
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="desktop-nav-hover"
                    className="absolute inset-0 bg-purple-100 dark:bg-purple-900/40 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/01615887503"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 text-white text-xs md:text-sm font-semibold hover:bg-purple-700 dark:hover:bg-purple-500 transition-all duration-300 shadow-md shadow-purple-600/20 dark:shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-slate-900 dark:text-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleLinkClick}
              className="fixed inset-0 z-40 bg-slate-900/20 dark:bg-[#0b0514]/60 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-64 z-40 bg-white dark:bg-[#0b0514] border-l border-purple-100 dark:border-purple-900/30 shadow-2xl flex flex-col md:hidden pt-24 px-6"
            >
              <div className="flex flex-col gap-4 font-medium text-lg text-slate-700 dark:text-slate-300">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="py-3 border-b border-slate-100 dark:border-slate-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/01615887503"
                  target="_blank"
                  onClick={handleLinkClick}
                  className="flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 dark:hover:bg-purple-500 transition-all duration-300 shadow-md shadow-purple-600/20 dark:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}