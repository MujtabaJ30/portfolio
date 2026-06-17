"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Project } from "@/app/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const linkItems = [
    { key: "live", label: "Live Demo", href: project.links.live },
    { key: "github", label: "GitHub", href: project.links.github },
    { key: "drive", label: "Project Drive", href: project.links.drive },
    { key: "ppt", label: "Presentation", href: project.links.ppt },
  ].filter((item) => item.href);

  return (
    <motion.div
      key="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-bg/90 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        key="modal-panel"
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative my-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-bg/80 p-2 text-text backdrop-blur-sm transition-colors hover:bg-bg hover:text-primary"
          aria-label="Close case study"
        >
          <X className="h-5 w-5" weight="bold" />
        </button>

        <div className="aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            width={1200}
            height={675}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-10">
          <p className="font-mono text-sm uppercase tracking-wide text-primary">
            {project.tagline}
          </p>
          <h2
            id="project-modal-title"
            className="mt-2 text-3xl font-semibold tracking-tight text-text sm:text-4xl"
          >
            {project.title}
          </h2>
          <p className="mt-1 text-lg text-muted">{project.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {linkItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary/50 hover:bg-surface hover:text-primary"
              >
                {item.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  weight="bold"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            <CaseSection title="Role">
              <p className="text-muted">{project.role}</p>
            </CaseSection>

            <CaseSection title="Problem">
              <p className="text-muted">{project.problem}</p>
            </CaseSection>

            <CaseSection title="Approach">
              <p className="text-muted">{project.approach}</p>
            </CaseSection>

            <CaseSection title="Process">
              <ul className="space-y-2">
                {project.process.map((step, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {step}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Results">
              <ul className="space-y-2">
                {project.results.map((result, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {result}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Trade-offs">
              <p className="text-muted">{project.tradeoffs}</p>
            </CaseSection>

            <CaseSection title="Key Learning">
              <p className="text-muted">{project.learning}</p>
            </CaseSection>
          </div>

          {project.images.length > 1 && (
            <div className="mt-12">
              <h3 className="mb-4 text-lg font-semibold text-text">
                Screenshots
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.slice(1).map((image, i) => (
                  <figure
                    key={i}
                    className="overflow-hidden rounded-xl border border-border"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={500}
                      className="h-auto w-full object-cover"
                    />
                    {image.caption && (
                      <figcaption className="border-t border-border bg-bg px-3 py-2 text-xs text-muted">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="mb-3 font-mono text-sm uppercase tracking-wide text-text">
        {title}
      </h3>
      <div className="leading-relaxed">{children}</div>
    </section>
  );
}
