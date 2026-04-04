"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  UsersRound,
  Handshake,
  TrendingUp,
  Users,
  Building2,
  Clock,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

const stats = [
  { value: "500+", label: "Clients Served", color: "text-white" },
  { value: "10+", label: "Years Experience", color: "text-gold" },
  { value: "50+", label: "Industries Covered", color: "text-white" },
  { value: "98%", label: "Client Retention", color: "text-gold" },
];

const foundations = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower startups and growing businesses with reliable, transparent, and modern financial services that drive informed decision-making.",
    iconColor: "text-indigo-deep",
    accentColor: "bg-indigo-deep",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most trusted financial partner for emerging businesses across India, setting new standards in accounting excellence.",
    iconColor: "text-teal",
    accentColor: "bg-teal",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, precision, and client-first thinking guide everything we do. We believe great finance is the foundation of great business.",
    iconColor: "text-gold-dark",
    accentColor: "bg-gold",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Deep Expertise",
    description:
      "Over a decade of experience across industries, from SaaS startups to established SMEs. Our subject matter experts understand the nuances of your specific industry and regulatory landscape.",
    num: "01",
  },
  {
    icon: UsersRound,
    title: "Dedicated Teams",
    description:
      "A qualified team of CAs, accountants, and compliance experts at your service. Personalized attention from consultants who treat your business growth as their own primary objective.",
    num: "02",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description:
      "We don't just crunch numbers — we become an extension of your business. A relationship built on radical transparency and a commitment to long-term sustainable growth.",
    num: "03",
  },
];

export function AboutContent() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 indigo-gradient -z-10" />

        {/* Geometric grid pattern overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        {/* Glowing orbs */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-deep rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge variant="light">Who We Are</Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-white leading-tight">
            About Numerra
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            A consulting firm built on trust, expertise, and a passion for
            helping businesses grow.
          </p>

          {/* Decorative gold accent line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-12 h-px bg-white/20" />
          </div>
        </div>
      </section>

      {/* ==================== OUR STORY — Classic Two Column Layout ==================== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Visual */}
            <AnimatedSection className="w-full lg:w-5/12">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                    alt="Numerra Modern Office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-deep/10 mix-blend-multiply pointer-events-none" />

                  {/* Floating Brand Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-surface/90 backdrop-blur-md shadow-lg flex flex-col items-center justify-center gap-3 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-indigo-deep flex items-center justify-center text-white text-xl font-[family-name:var(--font-display)] shadow-md">
                      N
                    </div>
                    <p className="text-sm text-text-secondary italic leading-relaxed font-medium text-center">
                      &ldquo;Simplifying finance for growing businesses&rdquo;
                    </p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gold/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-indigo-deep/5 rounded-full -z-10" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection className="w-full lg:w-7/12" delay={0.15}>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Numerra Consulting was founded with a simple belief: every
                    growing business deserves access to world-class financial
                    expertise, without the complexity and overhead of traditional
                    firms.
                  </p>

                  {/* Pull Quote */}
                  <div className="pull-quote">
                    Every growing business deserves world-class financial expertise.
                  </div>

                  <p>
                    What began as a small practice serving local startups has
                    grown into a trusted consulting firm supporting hundreds of
                    businesses across India. Our approach combines deep domain
                    knowledge with modern tools and processes.
                  </p>
                  <p>
                    Today, Numerra serves a diverse portfolio of clients — from
                    bootstrapped founders to well-funded startups — all united by
                    a need for clarity, compliance, and financial confidence.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR — Full-width Inline Strip ==================== */}
      <section className="py-12 lg:py-16 bg-indigo-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-4 lg:gap-6">
                  <div className="text-center">
                    <div className={`text-3xl lg:text-4xl font-[family-name:var(--font-display)] ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-[family-name:var(--font-body)] tracking-widest uppercase text-white/50">
                      {stat.label}
                    </div>
                  </div>
                  {/* Gold divider — hide on last item */}
                  {index < stats.length - 1 && (
                    <div className="hidden lg:block w-px h-12 bg-white/10 ml-6" />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== WHAT DRIVES US — Full-width Stacked Bands ==================== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge variant="teal">Our Foundation</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
              What Drives Us
            </h2>
          </AnimatedSection>

          {/* Full-width stacked items with left accent */}
          <div className="space-y-0">
            {foundations.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className={`group relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 py-10 lg:py-12 ${index !== foundations.length - 1 ? 'border-b border-border' : ''}`}>
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-10 lg:top-12 w-[3px] h-12 rounded-full ${item.accentColor} opacity-40 group-hover:opacity-100 group-hover:h-16 transition-all duration-500`} />

                  {/* Icon */}
                  <div className="pl-6 sm:pl-8 shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-${item.accentColor === 'bg-indigo-deep' ? 'indigo-deep' : item.accentColor === 'bg-teal' ? 'teal' : 'gold'}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon size={28} className={item.iconColor} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pl-6 sm:pl-0 flex-grow max-w-2xl">
                    <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-display)] text-text-primary mb-3 group-hover:text-indigo-deep transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed lg:text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Large index number on the right */}
                  <span className="hidden lg:block text-7xl font-[family-name:var(--font-display)] text-text-primary/[0.04] leading-none shrink-0 self-center">
                    0{index + 1}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US — Split Sidebar Layout ==================== */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-bg to-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Sidebar — Sticky heading */}
            <AnimatedSection className="w-full lg:w-5/12">
              <div className="lg:sticky lg:top-32">
                <Badge variant="gold">Our Edge</Badge>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
                  Why Choose Us
                </h2>
                <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                  More than accountants — we&apos;re strategic partners invested in
                  your success.
                </p>

                {/* Decorative element */}
                <div className="mt-8 hidden lg:flex items-center gap-3">
                  <div className="w-16 h-[2px] bg-gold rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-gold/40" />
                  <div className="w-8 h-[2px] bg-gold/30 rounded-full" />
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column — Stacked items with dividers */}
            <div className="w-full lg:w-7/12 space-y-0">
              {whyChooseUs.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.12}>
                  <div className={`group flex gap-5 py-8 lg:py-10 ${index !== whyChooseUs.length - 1 ? 'border-b border-border' : ''}`}>
                    {/* Number + Icon */}
                    <div className="shrink-0 flex flex-col items-center gap-3">
                      <span className="text-xs font-[family-name:var(--font-body)] font-bold tracking-widest text-gold-dark/60">
                        {item.num}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon size={24} className="text-gold-dark" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl lg:text-2xl font-[family-name:var(--font-display)] text-text-primary mb-3 group-hover:text-indigo-deep transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl indigo-gradient diagonal-pattern p-10 lg:p-16 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-white leading-tight">
                  Let&apos;s Work Together
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
                  Ready to experience finance without the friction? We&apos;d
                  love to hear from you.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-deep font-semibold text-sm hover:bg-gold hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                  id="about-cta"
                >
                  Get in Touch
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
