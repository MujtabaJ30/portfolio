"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Project } from "@/app/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectStatuses: Record<string, string> = {
  dealflow: "Concept / prototype",
  "whatsapp-dpdp": "Working prototype",
  "x-split": "Shipped product",
  "invoice-exception-handler": "Live MVP",
  "rapido-teardown": "Product teardown",
};

const cardLayouts = [
  {
    article: "lg:grid-cols-[1.12fr_0.88fr] lg:items-end",
    media: "aspect-[16/10]",
    details: "lg:pb-5",
  },
  {
    article: "lg:grid-cols-[0.82fr_1.18fr] lg:items-center",
    media: "aspect-[4/3] lg:order-2",
    details: "lg:order-1 lg:pr-10",
  },
  {
    article: "lg:grid-cols-[1fr_0.72fr] lg:items-start",
    media: "aspect-[3/2]",
    details: "lg:pt-10",
  },
  {
    article: "lg:grid-cols-[0.72fr_1.28fr] lg:items-center",
    media: "aspect-[4/3] lg:order-2",
    details: "lg:order-1 lg:pr-12",
  },
  {
    article: "lg:grid-cols-[1.25fr_0.75fr] lg:items-end",
    media: "aspect-[16/9]",
    details: "lg:order-2 lg:pb-8",
  },
] as const;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const layout = cardLayouts[index % cardLayouts.length];
  const status = projectStatuses[project.id] ?? "Product work";

  return (
    <article
      id={project.id}
      className={`grid gap-8 lg:gap-16 ${layout.article}`}
    >
      <Link
        href={`/work/${project.id}`}
        className={`group relative block overflow-hidden rounded-2xl border border-border bg-surface ${layout.media}`}
        aria-label={`Read the ${project.title} case study`}
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} project artifact`}
          fill
          sizes="(max-width: 1023px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5">
          <span className="rounded-full bg-bg/90 px-3 py-1.5 text-xs font-medium text-text backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full bg-bg/90 p-2.5 text-text backdrop-blur-sm transition-colors group-hover:bg-primary">
            <ArrowUpRight className="h-4 w-4" weight="bold" />
          </span>
        </div>
      </Link>

      <div className={`flex flex-col ${layout.details}`}>
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-primary">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <span>{status}</span>
        </div>
        <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2 text-lg text-muted">{project.subtitle}</p>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted">
          {project.stack.slice(0, 3).map((tech, techIndex) => (
            <span key={tech} className="inline-flex items-center gap-3">
              {techIndex > 0 && (
                <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden="true" />
              )}
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${project.id}`}
          className="group/case mt-8 inline-flex w-fit items-center gap-2 border-b border-text pb-1 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
        >
          Read case study
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover/case:translate-x-0.5 group-hover/case:-translate-y-0.5"
            weight="bold"
          />
        </Link>
      </div>
    </article>
  );
}
