"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** When true, the animation triggers immediately when the element enters the viewport (no margin threshold). Use for the first section below the hero to avoid visibility issues on smaller screens. */
  immediate?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  immediate = false,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={
        immediate
          ? { once: true, amount: 0 }
          : { once: true, margin: "-100px" }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
