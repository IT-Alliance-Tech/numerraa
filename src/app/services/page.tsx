import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services — Numerra Consulting",
  description:
    "End-to-end financial services built for modern businesses. Bookkeeping, Accounting, TDS & GST Compliance, Startup Advisory, and Outsourcing.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
