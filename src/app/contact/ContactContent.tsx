"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { SovereignCTA } from "@/components/ui/SovereignCTA";

const faqs = [
  {
    question: "How quickly can you onboard my business?",
    answer:
      "We typically complete onboarding within 5-7 business days, depending on the complexity of your financial setup.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with businesses at every stage — from early-stage startups to well-established SMEs.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve clients across IT, e-commerce, healthcare, manufacturing, professional services, and more.",
  },
  {
    question: "Can I switch from my current accountant mid-year?",
    answer:
      "Absolutely. We handle the transition seamlessly, including collecting records from your previous provider.",
  },
];

const trustPoints = [
  { icon: Shield, text: "Trusted by 100+ businesses" },
  { icon: Clock, text: "Average 24-Hour Response Time" },
  { icon: Sparkles, text: "98% Client Satisfaction" },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-border last:border-b-0 transition-all duration-300 ${isOpen ? 'faq-item-open' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <div className="flex items-center gap-4 pr-4">
          <span className="text-xs font-[family-name:var(--font-body)] font-bold text-indigo-deep/30 shrink-0">
            0{index + 1}
          </span>
          <span className="text-base font-medium text-text-primary group-hover:text-indigo-deep transition-colors">
            {question}
          </span>
        </div>
        <ChevronDown
          size={20}
          className={`text-text-secondary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-5" : "max-h-0"
          }`}
      >
        <p className="text-sm text-text-secondary leading-relaxed pl-10">{answer}</p>
      </div>
    </div>
  );
}

export function ContactContent() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/Numerraconsulting@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
          _subject: `New Lead from Numerra Website: ${formData.name}`,
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again or contact us directly.");
      setFormStatus("idle");
    }
  };

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 indigo-gradient -z-10" />

        {/* Geometric mesh pattern overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>

        {/* Glowing orbs */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-2/3 w-48 h-48 bg-indigo-deep rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge variant="light">Reach Out</Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-white leading-tight">
            Contact Us
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to get started? We&apos;d love to hear from
            you.
          </p>

          {/* Trust indicators — inside hero */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {trustPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-center gap-2 text-white/60"
              >
                <point.icon size={16} className="text-gold" />
                <span className="text-sm font-medium">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FORM + CONTACT INFO ==================== */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left Column: Form — with gold accent border */}
            <AnimatedSection className="w-full lg:w-3/5" immediate>
              <div className="relative p-7 lg:p-10 rounded-3xl bg-surface border border-border shadow-md overflow-hidden">
                {/* Gold accent bar on left */}
                <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-gold via-gold/60 to-transparent hidden lg:block" />

                <h2 className="text-2xl font-[family-name:var(--font-display)] text-text-primary mb-2">
                  Send us a message
                </h2>
                <p className="text-sm text-text-secondary mb-6">
                  Fill in the details below and we&apos;ll get back to you within 24 hours.
                </p>

                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-14 h-14 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] text-text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-text-secondary">
                      Thank you for reaching out. We&apos;ll get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Full Name{" "}
                        <span className="text-text-secondary/60">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-bg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-indigo-deep/20 focus:border-indigo-deep/50 transition-all font-[family-name:var(--font-body)]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-text-primary mb-2"
                        >
                          Email{" "}
                          <span className="text-text-secondary/60">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-5 py-3.5 rounded-xl border border-border bg-bg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-indigo-deep/20 focus:border-indigo-deep/50 transition-all font-[family-name:var(--font-body)]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-text-primary mb-2"
                        >
                          Phone{" "}
                          <span className="text-text-secondary/60">
                            (optional)
                          </span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-5 py-3.5 rounded-xl border border-border bg-bg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-indigo-deep/20 focus:border-indigo-deep/50 transition-all font-[family-name:var(--font-body)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Message{" "}
                        <span className="text-text-secondary/60">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs..."
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-bg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-indigo-deep/20 focus:border-indigo-deep/50 transition-all font-[family-name:var(--font-body)] resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-deep text-white font-medium text-sm hover:bg-indigo-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {formStatus === "submitting" ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Right Column: Contact Info — Unified Surface */}
            <AnimatedSection className="w-full lg:w-2/5" delay={0.15} immediate>
              <div className="lg:sticky lg:top-28 space-y-6">
                <div>
                  <h2 className="text-3xl font-[family-name:var(--font-display)] text-text-primary mb-3">
                    Get in Touch
                  </h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    Prefer to reach out directly? Contact us through any of the
                    channels below.
                  </p>
                </div>

                {/* Unified contact info card */}
                <div className="rounded-2xl bg-surface border border-border overflow-hidden">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-5 hover:bg-bg transition-colors duration-200 border-b border-border">
                    <div className="w-11 h-11 bg-indigo-deep/5 text-indigo-deep rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-text-secondary mb-0.5 uppercase tracking-wider font-[family-name:var(--font-body)]">
                        Email
                      </h3>
                      <a
                        href="mailto:numerraconsulting@gmail.com"
                        className="text-base font-medium text-text-primary hover:text-indigo-deep transition-colors break-all"
                      >
                        numerraconsulting@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 p-5 hover:bg-bg transition-colors duration-200 border-b border-border">
                    <div className="w-11 h-11 bg-gold/10 text-gold-dark rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-text-secondary mb-0.5 uppercase tracking-wider font-[family-name:var(--font-body)]">
                        Phone
                      </h3>
                      <a
                        href="tel:+918660625301"
                        className="text-base font-medium text-text-primary hover:text-gold-dark transition-colors"
                      >
                        +91 86606 25301
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-center gap-4 p-5 hover:bg-bg transition-colors duration-200 border-b border-border">
                    <div className="w-11 h-11 bg-teal/10 text-teal rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium text-text-secondary mb-0.5 uppercase tracking-wider font-[family-name:var(--font-body)]">
                        Office
                      </h3>
                      <p className="text-base font-medium text-text-primary">
                        Indiranagar, Bangalore, Karnataka
                      </p>
                    </div>
                  </div>

                  {/* Office Hours — same surface */}
                  <div className="p-5 bg-indigo-deep/[0.02]">
                    <h3 className="text-sm font-medium text-text-primary mb-3 flex items-center gap-2">
                      <Clock size={16} className="text-indigo-deep" />
                      Office Hours
                    </h3>
                    <div className="space-y-1.5 text-sm text-text-secondary">
                      <div className="flex justify-between">
                        <span>Monday – Friday</span>
                        <span className="font-medium text-text-primary">9:00 AM – 6:00 PM IST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium text-text-primary">10:00 AM – 2:00 PM IST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-text-secondary">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-8 lg:py-12 bg-gradient-to-b from-bg to-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {/* Left — Heading */}
            <AnimatedSection className="w-full lg:w-5/12">
              <div className="lg:sticky lg:top-32">
                <Badge variant="teal">Common Questions</Badge>
                <h2 className="mt-5 text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-text-primary leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Quick answers to help you understand how we work and what to expect.
                </p>

                {/* Decorative */}
                <div className="mt-6 hidden lg:flex items-center gap-3">
                  <div className="w-12 h-[2px] bg-teal/40 rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-teal/30" />
                </div>
              </div>
            </AnimatedSection>

            {/* Right — FAQ items */}
            <AnimatedSection delay={0.1} className="w-full lg:w-7/12">
              <div className="p-6 lg:p-8 rounded-2xl bg-surface border border-border">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      {/* ==================== BOTTOM CTA ==================== */}
      <SovereignCTA
        badgeText="Free Consultation"
        title="Ready to Simplify Your Finances?"
        description="Book a free consultation and discover how Numerra can help your business thrive."
        buttonText="Schedule a Call"
        buttonHref="/free-consultation"
      />
    </>
  );
}
