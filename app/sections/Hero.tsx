"use client";

import Image from "next/image";
import {
  ArrowDown,
  LinkedinLogo,
  DownloadSimple,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Button } from "@/app/components/Button";
import { heroContent, contactLinks, projects } from "@/app/lib/data";
import { useProjectModal } from "@/app/components/ProjectModalProvider";

function AnimatedName({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.1 + index * 0.03,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function AnimatedParagraph({ text }: { text: string }) {
  return (
    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
      {text.split(" ").map((word, index) => (
        <span key={index} className="mr-[0.25em] inline-block overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5 + index * 0.015,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

const teaserItems = [
  { id: "ai-prd-generator", label: "Prototype work" },
  { id: "rapido-teardown", label: "Product sense" },
  { id: "olist-sql-analytics", label: "SQL and Data work" },
];

export function Hero() {
  const { openProject } = useProjectModal();

  const handleTeaserClick = (id: string) => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      openProject(id);
    }, 600);
  };

  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-24 pb-24 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-4 text-base font-medium text-primary md:text-lg"
          >
            {heroContent.role}
          </motion.p>

          <h1 className="text-5xl font-semibold tracking-tight text-text md:text-6xl lg:text-7xl">
            <AnimatedName text={heroContent.name} />
          </h1>

          <AnimatedParagraph text={heroContent.philosophy} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              {heroContent.cta}
              <ArrowDown className="h-4 w-4" weight="bold" />
            </a>

            <Button
              href="/resume.pdf"
              variant="secondary"
              icon={<DownloadSimple className="h-4 w-4" weight="bold" />}
              download
            >
              Download Resume
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.35,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-muted"
          >
            <a
              href={`mailto:${contactLinks.email}`}
              className="transition-colors hover:text-primary"
            >
              {contactLinks.email}
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="hidden lg:grid gap-4"
        >
          {teaserItems.map((item) => {
            const project = projects.find((p) => p.id === item.id);
            if (!project) return null;

            return (
              <button
                key={item.id}
                onClick={() => handleTeaserClick(item.id)}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-3 text-left transition-colors hover:border-primary/50 hover:bg-surface-hover"
              >
                <div className="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between pr-2">
                  <div>
                    <p className="text-sm font-medium text-primary">
                      {item.label}
                    </p>
                    <p className="text-base font-medium text-text">
                      {project.title}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted transition-colors group-hover:text-primary"
                    weight="bold"
                  />
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
