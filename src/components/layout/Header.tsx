"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/* Pages with dark indigo gradient heroes — nav text should be white */
const darkHeroPages = ["/services", "/about", "/contact"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkHero = darkHeroPages.includes(pathname) && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm font-[family-name:var(--font-body)] ${isDarkHero ? "bg-white/20 backdrop-blur-sm" : "bg-indigo-deep"}`}>
            N
          </div>
          <span className={`text-xl font-[family-name:var(--font-display)] tracking-tight transition-colors duration-300 ${isDarkHero ? "text-white" : "text-indigo-deep"}`}>
            Numerra
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isDarkHero
                    ? isActive
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                    : isActive
                      ? "text-indigo-deep bg-indigo-deep/5"
                      : "text-text-secondary hover:text-indigo-deep hover:bg-indigo-deep/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute inset-0 rounded-full border ${isDarkHero ? "border-white/20" : "border-indigo-deep/20"}`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 shadow-lg ${
              isDarkHero
                ? "bg-white text-indigo-deep hover:bg-gold hover:text-white shadow-white/10"
                : "bg-indigo-deep text-white hover:bg-indigo-dark shadow-indigo-deep/20"
            }`}
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isDarkHero ? "text-white hover:bg-white/10" : "hover:bg-border-light"}`}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-border"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-indigo-deep bg-indigo-deep/5"
                        : "text-text-secondary hover:text-indigo-deep hover:bg-indigo-deep/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-indigo-deep text-white text-sm font-medium text-center"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
