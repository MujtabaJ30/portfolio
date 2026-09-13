"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { heroContent, projects } from "@/app/lib/data";
import { smoothScrollTo } from "@/app/lib/scroll";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroProject = projects[0];

  const handleViewWork = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    await smoothScrollTo("#projects", 700);
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:min-h-[calc(100dvh-72px)] lg:px-12 lg:pb-14 lg:pt-32"
    >
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(420px,1.06fr)] lg:gap-16">
        <div className="max-w-[680px]">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.14em] text-muted"
          >
            <span className="text-primary">{heroContent.role} / builder</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Open to product roles
            </span>
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-7 max-w-[14ch] text-balance text-[clamp(3.6rem,5.5vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.04em] text-text"
          >
            I make product <span className="text-primary">decisions visible.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-7 max-w-[34rem] text-lg leading-8 text-muted sm:text-xl sm:leading-9"
          >
            I turn fuzzy product problems into decisions people can use, then build enough to find out if they work.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={handleViewWork}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-text px-5 text-sm font-medium text-bg transition-colors hover:bg-primary hover:text-text"
            >
              See the work
              <ArrowDown className="h-4 w-4" weight="bold" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-text transition-colors hover:border-text hover:bg-surface-hover"
            >
              <DownloadSimple className="h-4 w-4" weight="bold" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-8 flex items-center gap-3 text-sm text-muted"
          >
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <span>Research, systems, and software.</span>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative lg:pb-8"
        >
          <Link
            href={`/work/${heroProject.id}`}
            className="group block"
            aria-label={`Read the ${heroProject.title} case study`}
          >
            <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={heroProject.thumbnail}
                  alt="DealFlow mobile creator deal workflow"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-bg/90 px-3 py-1.5 text-xs font-medium text-text backdrop-blur-sm">
                  01 / 05
                </span>
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                    Product concept
                  </p>
                  <p className="mt-1 text-base font-medium text-text">{heroProject.title}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-text transition-colors group-hover:text-primary">
                  Read case study
                  <ArrowUpRight className="h-4 w-4" weight="bold" />
                </span>
              </figcaption>
            </figure>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            A portfolio built from product problems, not personal branding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
