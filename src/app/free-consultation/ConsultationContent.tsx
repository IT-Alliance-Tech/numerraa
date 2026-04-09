"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { Clock, UserCheck, Zap, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

const sessionFeatures = [
  { icon: Clock, text: "30-Minute Session" },
  { icon: UserCheck, text: "Expert Guidance" },
  { icon: Zap, text: "Action Plan" },
  { icon: ShieldCheck, text: "No-Obligation" },
];

const bulletPoints = [
  "Business clarity",
  "Top strategies",
  "Quick wins",
  "Personal roadmap",
];

export function ConsultationContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-bg">
        {/* Subtle Background Accents */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-10 left-[-10%] w-96 h-96 bg-indigo-deep/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[-10%] w-[30rem] h-[30rem] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Content */}
            <AnimatedSection className="w-full lg:w-5/12 flex flex-col justify-center lg:sticky lg:top-32">
              <span className="self-start">
                <Badge variant="teal">COMPLIMENTARY SESSION</Badge>
              </span>
              
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-[3rem] font-[family-name:var(--font-display)] text-indigo-deep leading-[1.1] tracking-tight">
                Strategy<br />
                <span className="text-teal">Session</span>
              </h1>
              
              <p className="mt-6 text-sm lg:text-base text-text-secondary leading-relaxed max-w-sm">
                Transform your business trajectory with personalized insights from industry experts.
              </p>

              {/* Grid of features */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sessionFeatures.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-border/60 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-indigo-deep/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-deep/5 flex items-center justify-center shrink-0">
                      <feature.icon size={18} className="text-indigo-deep" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-semibold text-text-primary">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <div className="mt-10 space-y-3 pl-2">
                {bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-deep" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* Footer Trust Indicator */}
              <div className="mt-12 flex items-center gap-4 pt-8 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-indigo-deep border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                  N
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Trusted by <span className="text-indigo-deep font-bold">500+</span> businesses
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content - Calendly Embed */}
            <AnimatedSection delay={0.2} className="w-full lg:w-7/12">
              <div className="mb-6">
                <h2 className="text-xl lg:text-2xl font-[family-name:var(--font-display)] text-text-primary">
                  Book Your <span className="text-indigo-deep">Free Session</span>
                </h2>
                <p className="mt-2 text-text-secondary">
                  Select a time that works for you
                </p>
              </div>

              {/* Calendly Widget Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_-15px_rgba(7,2,53,0.1)] border border-border/50">
                {mounted ? (
                  <InlineWidget
                    url="https://calendly.com/numerraconsulting/30min"
                    styles={{
                      height: "700px",
                      width: "100%",
                      borderRadius: "1.5rem",
                    }}
                    pageSettings={{
                      backgroundColor: "ffffff",
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: "070235", // indigo-deep hex equivalent or similar
                      textColor: "1f2937",
                    }}
                  />
                ) : (
                  <div className="w-full h-[700px] flex items-center justify-center bg-gray-50/50">
                    <div className="w-8 h-8 border-2 border-indigo-deep/20 border-t-indigo-deep rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>
    </>
  );
}
