"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, ChevronUp } from "lucide-react";
import Image from "next/image";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#bookkeeping", label: "Bookkeeping" },
  { href: "/services#accounting", label: "Accounting" },
  { href: "/services#tds-gst", label: "TDS & GST Compliance" },
  { href: "/services#startup-advisory", label: "Startup Advisory" },
  { href: "/services#outsourcing", label: "Outsourcing" },
];

export function Footer() {
  return (
    <footer className="relative bg-indigo-deep text-white overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column — Wider */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-6 group">
              <Image
                src="/logo.png"
                alt="Numerra Logo"
                width={354}
                height={128}
                className="w-auto h-10 md:h-14 brightness-0 invert opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs mb-6">
              Simplifying finance for growing businesses. Your trusted partner in
              accounting and compliance.
            </p>
            {/* Mini CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors duration-200 group/cta"
            >
              Start a conversation
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-[family-name:var(--font-body)] font-semibold tracking-[0.15em] uppercase text-white/60 mb-5 pb-2 border-b border-white/10">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group/link inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-all duration-200"
                  >
                    <span className="w-0 group-hover/link:w-2 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-[family-name:var(--font-body)] font-semibold tracking-[0.15em] uppercase text-white/60 mb-5 pb-2 border-b border-white/10">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group/link inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-all duration-200"
                  >
                    <span className="w-0 group-hover/link:w-2 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-[family-name:var(--font-body)] font-semibold tracking-[0.15em] uppercase text-white/60 mb-5 pb-2 border-b border-white/10">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:numerraconsulting@gmail.com"
                  className="group/contact flex items-center gap-3 text-sm text-white/90 hover:text-white transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/contact:bg-white/10 transition-colors duration-200">
                    <Mail size={14} className="shrink-0" />
                  </div>
                  numerraconsulting@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918660625301"
                  className="group/contact flex items-center gap-3 text-sm text-white/90 hover:text-white transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/contact:bg-white/10 transition-colors duration-200">
                    <Phone size={14} className="shrink-0" />
                  </div>
                  +91 86606 25301
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-white/90">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin size={14} className="shrink-0" />
                  </div>
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/80 font-[family-name:var(--font-body)]">
            © 2026 Numerra Consulting. All rights reserved.
          </p>
          {/* Back to top */}
          <button
            onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group/top inline-flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors duration-200"
          >
            Back to top
            <div className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center group-hover/top:border-white/20 group-hover/top:bg-white/5 transition-all duration-200">
              <ChevronUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
