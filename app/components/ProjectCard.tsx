"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  GithubLogo,
  Globe,
  PresentationChart,
  Folder,
} from "@phosphor-icons/react";
import { Project } from "@/app/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const linkConfig: {
  key: keyof Project["links"];
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "live",
    label: "Live Demo",
    icon: <Globe className="h-3.5 w-3.5" weight="bold" />,
  },
  {
    key: "github",
    label: "GitHub",
    icon: <GithubLogo className="h-3.5 w-3.5" weight="bold" />,
  },
  {
    key: "drive",
    label: "Drive",
    icon: <Folder className="h-3.5 w-3.5" weight="bold" />,
  },
  {
    key: "ppt",
    label: "Deck",
    icon: <PresentationChart className="h-3.5 w-3.5" weight="bold" />,
  },
];

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <article
      id={project.id}
      className={`group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
        isReversed ? "lg:text-right" : ""
      }`}
    >
      <button
        onClick={onClick}
        className={`relative order-1 overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/30 lg:order-none ${
          isReversed ? "lg:order-2" : ""
        }`}
        aria-label={`Open case study for ${project.title}`}
      >
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            width={1200}
            height={750}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-bg/80 p-2 text-text opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" weight="bold" />
        </div>
      </button>

      <div className={`order-2 lg:order-none ${isReversed ? "lg:order-1" : ""}`}>
        <p className="text-sm font-medium text-primary">{project.tagline}</p>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-text">
          {project.title}
        </h3>
        <p className="mt-1 text-lg text-muted">{project.subtitle}</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className={`mt-6 flex flex-wrap items-center gap-3 ${
            isReversed ? "lg:justify-end" : ""
          }`}
        >
          {linkConfig
            .filter((item) => project.links[item.key])
            .map((item) => (
              <a
                key={item.key}
                href={project.links[item.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 rounded border border-border bg-surface px-3 py-1.5 text-sm text-text transition-colors hover:border-primary/50 hover:bg-surface-hover hover:text-primary"
              >
                {item.icon}
                {item.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  weight="bold"
                />
              </a>
            ))}

          <button
            onClick={onClick}
            className="group/case inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            Read case study
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover/case:translate-x-0.5 group-hover/case:-translate-y-0.5"
              weight="bold"
            />
          </button>
        </div>
      </div>
    </article>
  );
}
