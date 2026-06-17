"use client";

import { useState } from "react";
import { projects } from "@/app/lib/data";
import { Project } from "@/app/types";
import { ProjectCard } from "@/app/components/ProjectCard";
import { ProjectModal } from "@/app/components/ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-wide text-accent">
            Selected Work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Projects that show how I think
          </h2>
          <p className="mt-4 text-lg text-muted">
            Three projects spanning building, analyzing, and working with data.
            Click any card to read the full case study.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
