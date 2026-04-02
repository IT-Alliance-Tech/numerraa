import type { Metadata } from "next";
import { ContactContent } from "@/app/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Numerra Consulting",
  description:
    "Have a question or ready to get started? We'd love to hear from you. Contact Numerra Consulting today.",
};

export default function ContactPage() {
  return <ContactContent />;
}
