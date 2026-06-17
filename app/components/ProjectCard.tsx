"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Project } from "@/app/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
        isReversed ? "lg:text-right" : ""
      }`}
    >
      <button
        onClick={onClick}
        className={`relative order-1 overflow-hidden rounded-xl border border-border bg-surface lg:order-none ${
          isReversed ? "lg:order-2" : ""
        }`}
        aria-label={`Open case study for ${project.title}`}
      >
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            width={1200}
            height={750}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-bg/80 p-2 text-text opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" weight="bold" />
        </div>
      </button>

      <div className={`order-2 lg:order-none ${isReversed ? "lg:order-1" : ""}`}>
        <p className="font-mono text-sm uppercase tracking-wide text-accent">
          {project.tagline}
        </p>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-text">
          {project.title}
        </h3>
        <p className="mt-1 text-lg text-muted">{project.subtitle}</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={onClick}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Read case study
          <ArrowUpRight className="h-4 w-4" weight="bold" />
        </button>
      </div>
    </article>
  );
}
