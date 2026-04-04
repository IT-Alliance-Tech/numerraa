import type { Metadata } from "next";
import { ConsultationContent } from "./ConsultationContent";

export const metadata: Metadata = {
  title: "Free Strategy Session — Numerra Consulting",
  description:
    "Schedule a free strategy session with Numerra Consulting. Get personalized insights and business clarity from our industry experts.",
};

export default function ConsultationPage() {
  return <ConsultationContent />;
}
