"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { SectionIndex } from "@/components/ui/section-index";

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const reduce = useReducedMotion();

  return (
    <Section id={site.process.id} labelledBy="proceso-title">
      <SectionIndex
        index={site.process.index}
        title={site.process.title}
        id="proceso-title"
      />
      <p className="mb-16 max-w-md text-base leading-relaxed text-mute md:mb-20">
        {site.process.intro}
      </p>

      <motion.div
        className="relative"
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <span
          className="absolute top-1 bottom-1 left-0 w-px bg-line md:hidden"
          aria-hidden="true"
        />
        <motion.span
          className="absolute top-1 bottom-1 left-0 w-px origin-top bg-accent md:hidden"
          variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }}
          transition={reduce ? { duration: 0 } : { duration: 1.15, ease }}
          aria-hidden="true"
        />
        <span
          className="absolute top-[7px] right-0 left-0 hidden h-px bg-line md:block"
          aria-hidden="true"
        />
        <motion.span
          className="absolute top-[7px] right-0 left-0 hidden h-px origin-left bg-accent md:block"
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
          transition={reduce ? { duration: 0 } : { duration: 1.15, ease }}
          aria-hidden="true"
        />

        <ol className="grid list-none grid-cols-1 gap-14 p-0 md:grid-cols-4 md:gap-8">
          {site.process.steps.map((step, index) => (
            <li key={step.title} className="relative pl-8 md:pl-0 md:pt-12">
              <span className="font-condensed text-sm tracking-[0.22em] text-mute">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-3xl leading-none tracking-[0.06em] text-ink">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </Section>
  );
}
