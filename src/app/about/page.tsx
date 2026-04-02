import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us — Numerra Consulting",
  description:
    "A consulting firm built on trust, expertise, and a passion for helping businesses grow. Learn about our mission, vision, and values.",
};

export default function AboutPage() {
  return <AboutContent />;
}
