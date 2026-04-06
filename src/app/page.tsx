"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Scale, Building2, FileCheck, Gavel, BarChart3, BookOpen, Calculator, FileSpreadsheet, Lightbulb, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { SovereignCTA } from "@/components/ui/SovereignCTA";

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
    image: "/images/service_bookkeeping.png",
    title: "Bookkeeping",
    description: "Accurate, timely records so you always know where you stand.",
  },
  {
    num: "02",
    icon: Calculator,
    image: "/images/service_accounting.png",
    title: "Accounting",
    description: "Full-service accounting tailored to your business needs.",
  },
  {
    num: "03",
    icon: FileSpreadsheet,
    image: "/images/service_tax.png",
    title: "TDS & GST Compliance",
    description: "Stress-free tax filing and regulatory compliance.",
  },
  {
    num: "04",
    icon: Lightbulb,
    image: "/images/service_startup.png",
    title: "Startup Advisory",
    description: "Strategic financial guidance for early-stage companies.",
  },
  {
    num: "05",
    icon: Users,
    image: "/images/service_outsourcing.png",
    title: "Outsourcing",
    description: "Scale your finance team without the overhead.",
  },
];

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);

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
                  href="/free-consultation"
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
                  src="/images/hero_real.jpeg"
                  alt="Real corporate business meeting consulting"
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

      {/* ==================== COMPLIANCE AWARENESS — Asymmetric Layout ==================== */}
      <section className="py-20 lg:py-32" id="compliance">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Sovereign Staggered Layout for Compliance Cards */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Anchor Column (Sticky) */}
            <div className="lg:w-[45%] flex flex-col">
              <div className="sticky top-32">
                <AnimatedSection>
                  <Badge variant="gold">Did You Know?</Badge>
                  <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
                    Accounting Isn&apos;t Optional.{" "}
                    <span className="gradient-text">It&apos;s the Law.</span>
                  </h2>
                  <p className="mt-4 text-lg text-text-secondary leading-relaxed mb-10">
                    Whether you&apos;re a freelancer, startup, or established enterprise
                    — Indian law requires you to maintain proper financial records.
                  </p>
                </AnimatedSection>

                {/* Featured Anchor Card */}
                <AnimatedSection delay={0.1}>
                  {(() => {
                    const FeaturedIcon = complianceCards[0].icon;
                    return (
                      <div className="group relative overflow-hidden rounded-3xl bg-indigo-deep p-8 lg:p-10 text-white transition-all duration-500 shadow-2xl shadow-indigo-deep/30">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-x-1/4 translate-y-1/4" />

                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                              <FeaturedIcon size={24} className="text-gold" />
                            </div>
                            <span className="text-[10px] font-[family-name:var(--font-body)] font-bold tracking-widest uppercase text-gold">
                              {complianceCards[0].badge}
                            </span>
                          </div>
                          <h3 className="text-2xl font-[family-name:var(--font-display)] text-white mb-4 leading-tight">
                            {complianceCards[0].title}
                          </h3>
                          <p className="text-white/80 leading-relaxed text-sm">
                            {complianceCards[0].description}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </AnimatedSection>
              </div>
            </div>

            {/* Right Ledger Column (Staggered Waterfall) */}
            <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Left staggered column (Items 2, 4, 6) */}
              <div className="flex flex-col gap-6 lg:gap-8">
                {complianceCards.filter((_, i) => i !== 0 && i % 2 !== 0).map((card, idx) => (
                  <AnimatedSection key={card.title} delay={0.2 + idx * 0.1}>
                    <div 
                      className="group p-8 rounded-3xl bg-white transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-indigo-deep/10" 
                      style={{ boxShadow: '0 20px 60px -15px rgba(7,2,53,0.05)' }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-indigo-deep/5 flex items-center justify-center shrink-0 group-hover:bg-indigo-deep/10 transition-all duration-300">
                          <card.icon size={22} className="text-indigo-deep" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-[family-name:var(--font-body)] font-bold tracking-widest uppercase text-gold-dark/80 group-hover:text-gold-dark transition-colors duration-300">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-display)] text-text-primary mb-3 group-hover:text-indigo-deep transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              
              {/* Right staggered column (Items 3, 5) */}
              <div className="flex flex-col gap-6 lg:gap-8 lg:mt-16">
                {complianceCards.filter((_, i) => i !== 0 && i % 2 === 0).map((card, idx) => (
                  <AnimatedSection key={card.title} delay={0.3 + idx * 0.1}>
                    <div 
                      className="group p-8 rounded-3xl bg-white transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-indigo-deep/10" 
                      style={{ boxShadow: '0 20px 60px -15px rgba(7,2,53,0.05)' }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-indigo-deep/5 flex items-center justify-center shrink-0 group-hover:bg-indigo-deep/10 transition-all duration-300">
                          <card.icon size={22} className="text-indigo-deep" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-[family-name:var(--font-body)] font-bold tracking-widest uppercase text-gold-dark/80 group-hover:text-gold-dark transition-colors duration-300">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-display)] text-text-primary mb-3 group-hover:text-indigo-deep transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

          </div>

          {/* Mobile compliance CTA */}
          <AnimatedSection className="mt-10 text-center lg:hidden">
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

      {/* ==================== SERVICES PREVIEW — Bento Mosaic ==================== */}
      <section className="py-20 lg:py-32 bg-surface" id="services-preview">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-14 lg:mb-16">
            <Badge>What We Do</Badge>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
              Comprehensive Financial Services
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Everything your business needs to stay compliant, profitable, and
              growth-ready.
            </p>
          </AnimatedSection>

          {/* Interactive Sticky Media Split Layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Side: Sticky Media Viewer */}
            <div className="w-full lg:w-5/12 h-[400px] lg:h-[600px] lg:sticky lg:top-32 rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-border/50 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {/* Subtle gradient so the image isn't too raw */}
                  <div className="absolute inset-0 bg-indigo-deep/5 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Icon corresponding to active service */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-8 left-8 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl text-gold"
                  >
                    {(() => {
                      const ActiveIcon = services[activeService].icon;
                      return <ActiveIcon size={32} strokeWidth={1.5} />;
                    })()}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Interactive List */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <div className="space-y-0">
                {services.map((service, index) => {
                  const isActive = activeService === index;
                  return (
                    <div
                      key={service.title}
                      onMouseEnter={() => setActiveService(index)}
                      className="group cursor-pointer py-8 lg:py-10 border-b border-border/60 last:border-0 relative"
                    >
                      {/* Interactive subtle line indicator */}
                      <div className={`absolute left-[-24px] top-0 bottom-0 w-[4px] bg-indigo-deep transition-all duration-500 ease-out ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} />

                      <div className={`flex gap-6 lg:gap-8 transition-all duration-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-40 hover:opacity-70'}`}>
                        {/* Number */}
                        <div className="shrink-0 text-3xl font-[family-name:var(--font-display)] text-gold-dark/60 pt-1">
                          {service.num}
                        </div>
                        
                        {/* Content */}
                        <div>
                          <h3 className={`text-2xl lg:text-4xl font-[family-name:var(--font-display)] mb-4 transition-colors duration-500 ${isActive ? 'text-indigo-deep' : 'text-text-primary'}`}>
                            {service.title}
                          </h3>
                          
                          {/* Animated Description expansion on larger screens, just color fade on mobile */}
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 lg:max-h-40 lg:opacity-100'}`}>
                            <p className="text-text-secondary leading-relaxed lg:text-lg max-w-xl">
                              {service.description}
                            </p>
                            
                            <div className={`mt-6 flex items-center gap-2 font-semibold tracking-wider text-sm uppercase transition-all duration-500 ${isActive ? 'text-gold opacity-100 translate-y-0' : 'text-transparent opacity-0 translate-y-4'}`}>
                              <Link href="/services" className="inline-flex items-center gap-2 hover:text-indigo-deep transition-colors">
                                Explore <ArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
          </div>

          {/* View All */}
          <AnimatedSection delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-indigo-deep text-white text-sm font-semibold hover:bg-indigo-dark shadow-lg shadow-indigo-deep/20 hover:shadow-xl hover:-translate-y-px transition-all duration-300"
              >
                View All Services
                <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ==================== BOTTOM CTA ==================== */}
      <SovereignCTA
        badgeText="Your Growth Partner"
        title="Stop Worrying About Compliance."
        description="Partner with Numerra and get back to building your business — while we ensure every number is in its place."
        buttonText="Schedule a Free Consultation"
        buttonHref="/free-consultation"
      />
    </>
  );
}
