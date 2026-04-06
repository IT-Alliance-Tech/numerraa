"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calculator, FileSpreadsheet, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { SovereignCTA } from "@/components/ui/SovereignCTA";

const services = [
  {
    id: "bookkeeping",
    num: "01",
    icon: BookOpen,
    image: "/images/service_bookkeeping.png",
    title: "Bookkeeping",
    description:
      "Maintain clean, accurate financial records with our dedicated bookkeeping services. We handle day-to-day transaction recording, bank reconciliation, and financial reporting so you can focus on running your business.",
    features: [
      "Daily transaction recording",
      "Bank & credit card reconciliation",
      "Monthly financial statements",
      "Accounts payable & receivable",
    ],
  },
  {
    id: "accounting",
    num: "02",
    icon: Calculator,
    image: "/images/service_accounting.png",
    title: "Accounting",
    description:
      "Full-cycle accounting services tailored to your industry and business size. From chart of accounts setup to year-end financial statements, we provide comprehensive accounting support.",
    features: [
      "Financial statement preparation",
      "Budget planning & analysis",
      "Cash flow management",
      "Year-end closing & reporting",
    ],
  },
  {
    id: "tds-gst",
    num: "03",
    icon: FileSpreadsheet,
    image: "/images/service_tax.png",
    title: "TDS & GST Compliance",
    description:
      "Navigate India's complex tax landscape with confidence. Our experts ensure timely filing, accurate computation, and full compliance with TDS and GST regulations.",
    features: [
      "GST registration & filing",
      "TDS computation & returns",
      "Input tax credit optimization",
      "Compliance audit support",
    ],
  },
  {
    id: "startup-advisory",
    num: "04",
    icon: Lightbulb,
    image: "/images/service_startup.png",
    title: "Startup Advisory",
    description:
      "Strategic financial guidance for founders and early-stage companies. We help you set up the right financial foundation, plan fundraising, and make data-driven decisions.",
    features: [
      "Financial modelling",
      "Fundraising support",
      "Entity structuring",
      "Investor reporting",
    ],
  },
  {
    id: "outsourcing",
    num: "05",
    icon: Users,
    image: "/images/service_outsourcing.png",
    title: "Outsourcing Services",
    description:
      "Scale your finance operations without the overhead of a full in-house team. Our outsourcing solutions give you access to experienced professionals at a fraction of the cost.",
    features: [
      "Dedicated finance team",
      "Flexible engagement models",
      "Process automation",
      "Quality assurance & review",
    ],
  },
];

export function ServicesContent() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 indigo-gradient -z-10" />
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge variant="light">Our Expertise</Badge>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-white leading-tight">
            Our Services
          </h1>
          <p className="mt-5 text-sm lg:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            End-to-end financial services built for modern businesses. We handle
            the numbers so you can focus on growth.
          </p>
        </div>
      </section>

      {/* ==================== SERVICE BLOCKS ==================== */}
      <section className="pt-20 pb-4 lg:pt-28 lg:pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <AnimatedSection key={service.id} delay={0.1}>
                <div
                  id={service.id}
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-10 lg:gap-16 items-center scroll-mt-24`}
                >
                  {/* Visual */}
                  <div className="w-full lg:w-5/12">
                    <div
                      className={`relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-indigo-deep/10 bg-indigo-deep/5`}
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} visualization`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover"
                        priority={index < 2}
                      />
                      {/* Gradient Overlay for subtle blending */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-deep/30 to-transparent pointer-events-none" />

                      {/* Icon Badge Overlay */}
                      <div className="absolute bottom-6 left-6 w-14 h-14 bg-surface/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                        <service.icon size={28} className="text-gold" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-7/12">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-deep/5 text-xs font-[family-name:var(--font-body)] font-bold text-indigo-deep mb-4">
                      {service.num}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-display)] text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg border border-border"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-teal shrink-0"
                          />
                          <span className="text-sm font-medium text-text-primary">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ==================== CUSTOM SOLUTION CTA ==================== */}
      <SovereignCTA
        badgeText="Your Needs, Our Strategy"
        title="Need a Custom Solution?"
        description="Every business is unique. Let's discuss how we can tailor our financial services to exactly match your operational needs."
        buttonText="Let's Build Together"
        buttonHref="/free-consultation"
        className="pb-20 lg:pb-32 pt-0 lg:pt-0 relative mt-4 lg:mt-8"
      />
    </>
  );
}
