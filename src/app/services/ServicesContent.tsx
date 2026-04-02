"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calculator, FileSpreadsheet, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

const services = [
  {
    id: "bookkeeping",
    num: "01",
    icon: BookOpen,
    image: "/images/service_bookkeeping_1775100257285.png",
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
    image: "/images/service_accounting_1775100277375.png",
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
    image: "/images/service_tax_1775100295551.png",
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
    image: "/images/service_startup_1775100365785.png",
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
    image: "/images/service_outsourcing_1775100389693.png",
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
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-white leading-tight">
            Our Services
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            End-to-end financial services built for modern businesses. We handle
            the numbers so you can focus on growth.
          </p>
        </div>
      </section>

      {/* ==================== SERVICE BLOCKS ==================== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <AnimatedSection key={service.id} delay={0.1}>
                <div
                  id={service.id}
                  className={`flex flex-col ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
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
                    <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-text-primary mb-4">
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
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg via-surface to-gold/5 border border-border p-12 lg:p-20 text-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-deep/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
                  Need a Custom Solution?
                </h2>
                <p className="mt-5 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
                  Every business is unique. Let&apos;s discuss how we can tailor
                  our services to your specific needs.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-deep text-white font-semibold text-sm hover:bg-indigo-dark transition-all duration-300 shadow-xl shadow-indigo-deep/20 hover:shadow-2xl hover:-translate-y-0.5"
                  id="services-cta"
                >
                  Let&apos;s Talk
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
