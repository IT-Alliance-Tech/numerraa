import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-indigo-deep text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm font-[family-name:var(--font-body)]">
                N
              </div>
              <span className="text-xl font-[family-name:var(--font-display)] text-white tracking-tight">
                Numerra
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Simplifying finance for growing businesses. Your trusted partner in
              accounting and compliance.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-[family-name:var(--font-body)] font-semibold tracking-widest uppercase text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-[family-name:var(--font-body)] font-semibold tracking-widest uppercase text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-xs font-[family-name:var(--font-body)] font-semibold tracking-widest uppercase text-white/40 mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@numerra.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Mail size={16} className="shrink-0" />
                  hello@numerra.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Phone size={16} className="shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-white/60">
                  <MapPin size={16} className="shrink-0" />
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/40">
            © 2026 Numerra Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
