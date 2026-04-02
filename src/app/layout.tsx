import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
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
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
