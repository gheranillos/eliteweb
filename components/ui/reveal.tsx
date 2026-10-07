"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Tag = "div" | "span" | "li" | "p";

const tags = {
  div: motion.div,
  span: motion.span,
  li: motion.li,
  p: motion.p,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = tags[as];

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={
        reduce ? { duration: 0 } : { duration: 0.75, ease, delay }
      }
    >
      {children}
    </Component>
  );
}
