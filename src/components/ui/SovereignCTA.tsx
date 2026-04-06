import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export interface SovereignCTAProps {
  badgeText: string;
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  buttonHref: string;
  className?: string; // To allow custom section padding like pb-20 pt-0
}

export function SovereignCTA({
  badgeText,
  title,
  description,
  buttonText,
  buttonHref,
  className = "pb-20 pt-8 lg:pb-32 lg:pt-12 relative mt-4 lg:mt-8", // Reduced top padding
}: SovereignCTAProps) {
  return (
    <section className={className}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#070235] py-12 px-8 lg:py-16 lg:px-12 text-center shadow-[0_30px_80px_-15px_rgba(7,2,53,0.4)] border border-white/10 group">
            {/* Dynamic Abstract Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gold/20 rounded-full blur-[80px] group-hover:scale-110 group-hover:bg-gold/30 transition-all duration-1000 ease-out" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-1000 ease-out" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                {badgeText}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-[family-name:var(--font-display)] text-white leading-tight mb-4 group-hover:scale-[1.02] transition-transform duration-700">
                {title}
              </h2>
              <p className="text-sm lg:text-base text-white/70 max-w-xl mx-auto leading-relaxed mb-8">
                {description}
              </p>
              <Link
                href={buttonHref}
                {...(buttonHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="relative w-auto inline-flex items-center gap-3 px-8 py-3.5 lg:px-10 rounded-full bg-gold text-[#070235] font-bold text-sm tracking-wide overflow-hidden group/btn shadow-[0_0_40px_-10px_rgba(123,88,4,0.4)] transition-all duration-300 hover:shadow-[0_0_60px_-10px_rgba(123,88,4,0.6)] hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {buttonText}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </span>
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-white/30 translate-x-[-150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
