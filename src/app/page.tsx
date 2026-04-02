"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Shield, Scale, Building2, FileCheck, Gavel, BarChart3, BookOpen, Calculator, FileSpreadsheet, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { StatCounter } from "@/components/ui/StatCounter";

const complianceCards = [
  {
    icon: Scale,
    badge: "INCOME TAX ACT",
    title: "Mandatory Under Income Tax",
    description:
      "Section 44AA of the Income Tax Act mandates every business and professional to maintain proper books of accounts. Non-compliance can lead to penalties up to ₹25,000.",
  },
  {
    icon: FileSpreadsheet,
    badge: "GST LAW",
    title: "Required Under GST",
    description:
      "Every registered taxpayer must maintain accounts and records under Section 35 of the CGST Act. Failure to comply can attract penalties of ₹25,000 or 100% of tax evaded.",
  },
  {
    icon: Building2,
    badge: "COMPANIES ACT",
    title: "Companies Act Compliance",
    description:
      "Section 128 of the Companies Act 2013 requires every company to maintain books of account on an accrual basis. Directors face imprisonment for non-compliance.",
  },
  {
    icon: FileCheck,
    badge: "TAX AUDIT",
    title: "Tax Audit Readiness",
    description:
      "Businesses exceeding ₹1 Cr turnover (₹10 Cr with digital transactions) must get accounts audited under Section 44AB. Unaudited books attract a 0.5% penalty of turnover.",
  },
  {
    icon: Gavel,
    badge: "LEGAL PROTECTION",
    title: "Avoid Legal Consequences",
    description:
      "Improper books can lead to best judgment assessments by tax authorities, disallowance of expenses, and even prosecution under tax evasion provisions.",
  },
  {
    icon: BarChart3,
    badge: "BUSINESS INTELLIGENCE",
    title: "Beyond Compliance — Business Clarity",
    description:
      "Proper accounting isn't just a legal checkbox. It's the foundation for cash flow visibility, investor readiness, loan approvals, and data-driven business decisions.",
  },
];

const services = [
  {
    num: "01",
    icon: BookOpen,
    image: "/images/service_bookkeeping_1775100257285.png",
    title: "Bookkeeping",
    description: "Accurate, timely records so you always know where you stand.",
  },
  {
    num: "02",
    icon: Calculator,
    image: "/images/service_accounting_1775100277375.png",
    title: "Accounting",
    description: "Full-service accounting tailored to your business needs.",
  },
  {
    num: "03",
    icon: FileSpreadsheet,
    image: "/images/service_tax_1775100295551.png",
    title: "TDS & GST Compliance",
    description: "Stress-free tax filing and regulatory compliance.",
  },
  {
    num: "04",
    icon: Lightbulb,
    image: "/images/service_startup_1775100365785.png",
    title: "Startup Advisory",
    description: "Strategic financial guidance for early-stage companies.",
  },
  {
    num: "05",
    icon: Users,
    image: "/images/service_outsourcing_1775100389693.png",
    title: "Outsourcing",
    description: "Scale your finance team without the overhead.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative flex items-start overflow-hidden bg-white">
        {/* Subtle background accents */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-deep/[0.03] rounded-full blur-3xl translate-x-1/3" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gold/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-32 pb-16 lg:pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column — Text */}
            <div>
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="gold">Trusted by 100+ Clients in India</Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-display)] text-text-primary leading-[1.08] tracking-tight"
              >
                Your Business Grows. We Handle the{" "}
                <em className="gradient-text not-italic" style={{ fontStyle: "italic" }}>
                  Numbers.
                </em>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 text-base lg:text-lg text-text-secondary max-w-lg leading-relaxed"
              >
                From statutory compliance to strategic financial advisory, we
                provide the intelligence your business needs to scale with
                confidence.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-deep text-white font-[family-name:var(--font-body)] font-semibold text-xs tracking-widest uppercase hover:bg-indigo-dark transition-all duration-300 shadow-xl shadow-indigo-deep/20 hover:shadow-2xl hover:shadow-indigo-deep/30 hover:-translate-y-0.5"
                  id="hero-cta-primary"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-text-primary font-[family-name:var(--font-body)] font-semibold text-xs tracking-widest uppercase hover:border-indigo-deep/30 hover:bg-indigo-deep/5 transition-all duration-300"
                  id="hero-cta-secondary"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Right Column — Abstract Sculpture Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-indigo-deep/10">
                <Image
                  src="/images/hero_sculpture.png"
                  alt="Abstract sculptural form representing precision and structure"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="py-10 lg:py-14 bg-indigo-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-white">100+</p>
              <p className="mt-1 text-xs font-[family-name:var(--font-body)] tracking-widest uppercase text-white/50">Corporate Clients</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-white">500+</p>
              <p className="mt-1 text-xs font-[family-name:var(--font-body)] tracking-widest uppercase text-white/50">Audits Led</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-gold">₹250Cr+</p>
              <p className="mt-1 text-xs font-[family-name:var(--font-body)] tracking-widest uppercase text-white/50">Asset Portfolio Managed</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-white">Zero</p>
              <p className="mt-1 text-xs font-[family-name:var(--font-body)] tracking-widest uppercase text-white/50">Compliance Defaults</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMPLIANCE AWARENESS ==================== */}
      <section className="py-20 lg:py-32" id="compliance">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="gold">Did You Know?</Badge>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
              Accounting Isn&apos;t Optional.{" "}
              <span className="gradient-text">It&apos;s the Law.</span>
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Whether you&apos;re a freelancer, startup, or established enterprise
              — Indian law requires you to maintain proper financial records.
            </p>
          </AnimatedSection>

          {/* Compliance Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="group h-full p-6 lg:p-8 rounded-2xl bg-surface border border-border hover:border-indigo-deep/20 hover:shadow-xl hover:shadow-indigo-deep/5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-deep/5 flex items-center justify-center group-hover:bg-indigo-deep/10 transition-colors">
                      <card.icon
                        size={20}
                        className="text-indigo-deep"
                      />
                    </div>
                    <span className="text-[10px] font-[family-name:var(--font-body)] font-bold tracking-widest uppercase text-gold-dark">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-display)] text-text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Compliance CTA */}
          <AnimatedSection className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 border border-gold/20">
              <Shield size={18} className="text-gold-dark" />
              <p className="text-sm font-medium text-gold-dark">
                Don&apos;t risk penalties. Let Numerra keep your books compliant
                and audit-ready.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== SERVICES PREVIEW ==================== */}
      <section className="py-20 lg:py-32 bg-surface" id="services-preview">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <Badge>What We Do</Badge>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
              Comprehensive Financial Services
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Everything your business needs to stay compliant, profitable, and
              growth-ready.
            </p>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <Link href="/services" className="block group h-full">
                  <div className="h-full rounded-2xl border border-border bg-bg hover:bg-surface hover:border-indigo-deep/20 hover:shadow-xl hover:shadow-indigo-deep/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div className="relative h-48 w-full bg-indigo-deep/5">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
                      <div className="absolute bottom-4 left-6 flex items-center justify-center w-12 h-12 rounded-xl bg-surface/90 backdrop-blur shadow-sm border border-white/10 group-hover:bg-indigo-deep group-hover:border-transparent transition-all duration-300 z-10">
                        <service.icon size={22} className="text-indigo-deep group-hover:text-white transition-colors" />
                      </div>
                      <span className="absolute top-4 right-4 text-xs font-[family-name:var(--font-body)] font-bold text-white/50 bg-black/20 px-2 py-1 rounded backdrop-blur">
                        {service.num}
                      </span>
                    </div>
                    <div className="p-6 lg:p-8 flex-grow flex flex-col">
                      <h3 className="text-xl font-[family-name:var(--font-display)] text-text-primary mb-3 group-hover:text-indigo-deep transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <div className="mt-5 flex items-center gap-1 text-sm font-medium text-indigo-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl indigo-gradient p-12 lg:p-20 text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-white leading-tight">
                  Stop Worrying About Compliance.
                </h2>
                <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Partner with Numerra and get back to building your business —
                  while we ensure every number is in its place.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-deep font-semibold text-sm hover:bg-gold hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                  id="home-bottom-cta"
                >
                  Schedule a Free Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
