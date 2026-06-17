"use client";

import { ArrowDown, LinkedinLogo } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Button } from "@/app/components/Button";
import { heroContent, contactLinks } from "@/app/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-20">
      <motion.div
        className="mx-auto w-full max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-3xl">
          <motion.p
            variants={itemVariants}
            className="mb-4 font-mono text-sm uppercase tracking-wide text-accent"
          >
            {heroContent.role}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl font-semibold tracking-tight text-text md:text-6xl lg:text-7xl"
          >
            {heroContent.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {heroContent.philosophy}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href="#projects"
              icon={<ArrowDown className="h-4 w-4" weight="bold" />}
            >
              {heroContent.cta}
            </Button>

            <Button
              href={contactLinks.linkedin}
              variant="secondary"
              icon={<LinkedinLogo className="h-4 w-4" weight="bold" />}
            >
              LinkedIn
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-6 font-mono text-sm text-muted"
          >
            <a
              href={`mailto:${contactLinks.email}`}
              className="transition-colors hover:text-accent"
            >
              {contactLinks.email}
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
