"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/logo";
import { Wordmark } from "@/components/ui/wordmark";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col items-center justify-center px-6"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 1.1, ease }}
      >
        <Logo priority alt="Símbolo cromado de Élite Prod" />
      </motion.div>

      <motion.div
        className="flex flex-col items-center text-center"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reduce ? { duration: 0 } : { duration: 0.9, ease, delay: 0.18 }
        }
      >
        <h1>
          <Wordmark className="text-[clamp(2.15rem,7vw,5.25rem)]" />
        </h1>
        <p className="mt-6 max-w-md text-sm tracking-wide text-mute md:text-base">
          {site.hero.line}
        </p>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <span className="size-1.5 bg-accent" aria-hidden="true" />
        <span className="mt-3 block h-10 w-px bg-line" aria-hidden="true" />
        <span className="sr-only">Desplaza para continuar</span>
      </div>
    </section>
  );
}
