import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const poppinsDisplay = Poppins({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppinsBody = Poppins({
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Numerra Consulting — Simplifying Finance for Growing Businesses",
  description:
    "From statutory compliance to strategic advisory — Numerra Consulting ensures your finances are always audit-ready, tax-optimized, and growth-aligned. Trusted by 500+ businesses across India.",
  keywords: [
    "Numerra Consulting",
    "bookkeeping",
    "accounting",
    "TDS compliance",
    "GST compliance",
    "startup advisory",
    "financial consulting",
    "Mumbai",
    "India",
  ],
  openGraph: {
    title: "Numerra Consulting — Simplifying Finance for Growing Businesses",
    description:
      "End-to-end financial services built for modern businesses. We handle the numbers so you can focus on growth.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppinsDisplay.variable} ${poppinsBody.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
