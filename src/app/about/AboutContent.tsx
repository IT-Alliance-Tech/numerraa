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
  { icon: Users, value: "500+", label: "Clients Served", color: "text-indigo-deep" },
  { icon: Clock, value: "10+", label: "Years Experience", color: "text-gold-dark" },
  { icon: Building2, value: "50+", label: "Industries Covered", color: "text-teal" },
  { icon: TrendingUp, value: "98%", label: "Client Retention", color: "text-indigo-deep" },
];

const foundations = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower startups and growing businesses with reliable, transparent, and modern financial services that drive informed decision-making.",
    color: "bg-indigo-deep/5",
    iconColor: "text-indigo-deep",
    borderColor: "border-indigo-deep/10",
    accent: "bg-indigo-deep",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most trusted financial partner for emerging businesses across India, setting new standards in accounting excellence.",
    color: "bg-teal/5",
    iconColor: "text-teal",
    borderColor: "border-teal/10",
    accent: "bg-teal",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, precision, and client-first thinking guide everything we do. We believe great finance is the foundation of great business.",
    color: "bg-gold/5",
    iconColor: "text-gold-dark",
    borderColor: "border-gold/10",
    accent: "bg-gold",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Deep Expertise",
    description:
      "Over a decade of experience across industries, from SaaS startups to established SMEs. Our subject matter experts understand the nuances of your specific industry and regulatory landscape.",
  },
  {
    icon: UsersRound,
    title: "Dedicated Teams",
    description:
      "A qualified team of CAs, accountants, and compliance experts at your service. Personalized attention from consultants who treat your business growth as their own primary objective.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description:
      "We don't just crunch numbers — we become an extension of your business. A relationship built on radical transparency and a commitment to long-term sustainable growth.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Dark gradient background — matches Services page */}
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

      {/* ==================== OUR STORY ==================== */}
      <section className="py-12 lg:py-16">
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative p-6 lg:p-8 rounded-2xl bg-surface border border-border hover:border-indigo-deep/15 hover:shadow-lg transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-indigo-deep/5 flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                  <div className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== WHAT DRIVES US ==================== */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-bg to-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <Badge variant="teal">Our Foundation</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
              What Drives Us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {foundations.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div
                  className={`h-full p-7 lg:p-8 rounded-2xl border ${item.borderColor} ${item.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}
                    >
                      <item.icon size={22} className={item.iconColor} />
                    </div>
                    <div className={`h-[2px] w-8 rounded-full ${item.accent} opacity-30`} />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <Badge variant="gold">Our Edge</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
              Why Choose Us
            </h2>
            <p className="mt-3 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              More than accountants — we&apos;re strategic partners invested in
              your success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="group h-full p-7 lg:p-8 rounded-2xl bg-surface border border-border hover:border-indigo-deep/20 hover:shadow-xl hover:shadow-indigo-deep/5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <item.icon size={26} className="text-gold-dark" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl indigo-gradient p-10 lg:p-16 text-center">
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
