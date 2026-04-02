"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] py-2.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm font-[family-name:var(--font-body)] transition-all duration-300 ${
              isDarkHero
                ? "bg-white/15 backdrop-blur-sm group-hover:bg-white/25"
                : "bg-indigo-deep group-hover:bg-indigo-dark shadow-sm"
            }`}
          >
            N
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-xl font-[family-name:var(--font-display)] tracking-tight transition-colors duration-300 ${
                isDarkHero ? "text-white" : "text-indigo-deep"
              }`}
            >
              Numerra
            </span>
            {/* Gold dot accent */}
            <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isDarkHero ? "bg-gold/60" : "bg-gold"}`} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-[13px] font-[family-name:var(--font-body)] font-medium tracking-wide uppercase transition-all duration-200 ${
                  isDarkHero
                    ? isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                    : isActive
                      ? "text-indigo-deep"
                      : "text-text-secondary hover:text-indigo-deep"
                }`}
              >
                {link.label}
                {/* Active / hover underline indicator */}
                {isActive ? (
                  <motion.div
                    layoutId="nav-underline"
                    className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${
                      isDarkHero ? "bg-gold" : "bg-indigo-deep"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isDarkHero ? "bg-white/30" : "bg-indigo-deep/20"}`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-[family-name:var(--font-body)] font-semibold tracking-wide transition-all duration-300 ${
              isDarkHero
                ? "bg-white text-indigo-deep hover:bg-gold hover:text-white shadow-lg shadow-white/10 hover:shadow-gold/20"
                : "bg-indigo-deep text-white hover:bg-indigo-dark shadow-lg shadow-indigo-deep/20 hover:shadow-indigo-deep/30 hover:-translate-y-px"
            }`}
          >
            Book Consultation
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-200 ${
              isDarkHero
                ? "text-white hover:bg-white/10"
                : "text-text-primary hover:bg-indigo-deep/5"
            }`}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border/60"
          >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-indigo-deep bg-indigo-deep/5"
                        : "text-text-secondary hover:text-indigo-deep hover:bg-indigo-deep/5"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-deep" />
                    )}
                  </Link>
                );
              })}
              <div className="mt-3 pt-3 border-t border-border/60">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-indigo-deep text-white text-sm font-semibold shadow-lg shadow-indigo-deep/20"
                >
                  Book Consultation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
