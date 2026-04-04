"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    <div className="fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[calc(100%-2rem)] md:max-w-7xl flex flex-col gap-2 z-50 pointer-events-none">
      <header
        className={`relative pointer-events-auto transition-all duration-500 rounded-[1.25rem] md:rounded-full border backdrop-blur-xl ${
          isDarkHero
            ? "bg-white/10 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "bg-white/80 border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        }`}
      >
        <div className="px-5 md:px-8 lg:px-10 py-3 flex items-center justify-between align-middle">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Numerra Logo"
            width={354}
            height={128}
            priority
            className={`w-auto h-8 md:h-10 transition-all duration-300 ${
              isDarkHero ? "brightness-0 invert opacity-90" : ""
            }`}
          />
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
          <a
            href="https://login.vishnusandassociates.in/me/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center justify-center px-4 py-2.5 rounded-full text-[13px] font-[family-name:var(--font-body)] font-semibold tracking-wide transition-all duration-300 border ${
              isDarkHero
                ? "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                : "border-indigo-deep/20 text-indigo-deep hover:bg-indigo-deep/5 hover:border-indigo-deep/40"
            }`}
          >
            Client Login
          </a>
          <Link
            href="/free-consultation"
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

      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`pointer-events-auto md:hidden rounded-[1.25rem] border backdrop-blur-xl p-2 ${
              isDarkHero
                ? "bg-[#111322]/95 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                : "bg-white/95 border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            }`}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[14px] font-[family-name:var(--font-body)] font-medium transition-all duration-200 ${
                      isDarkHero
                        ? isActive
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                        : isActive
                          ? "text-indigo-deep bg-indigo-deep/5"
                          : "text-text-secondary hover:text-indigo-deep hover:bg-indigo-deep/5"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <div className={`w-1.5 h-1.5 rounded-full ${isDarkHero ? "bg-white" : "bg-indigo-deep"}`} />
                    )}
                  </Link>
                );
              })}
              <div className={`mt-2 pt-2 flex flex-col gap-2 border-t ${isDarkHero ? "border-white/10" : "border-border/60"}`}>
                <a
                  href="https://login.vishnusandassociates.in/me/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-center px-4 py-3.5 rounded-xl border text-[14px] font-semibold transition-colors ${
                    isDarkHero
                      ? "border-white/20 text-white hover:bg-white/5"
                      : "border-indigo-deep/20 text-indigo-deep hover:bg-indigo-deep/5"
                  }`}
                >
                  Client Login
                </a>
                <Link
                  href="/free-consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-[14px] font-semibold shadow-lg ${
                    isDarkHero
                      ? "bg-white text-indigo-deep shadow-white/10"
                      : "bg-indigo-deep text-white shadow-indigo-deep/20"
                  }`}
                >
                  Book Consultation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
