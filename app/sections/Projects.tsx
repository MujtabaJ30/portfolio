"use client";

import { projects } from "@/app/lib/data";
import { Project } from "@/app/types";
import { ProjectCard } from "@/app/components/ProjectCard";
import { ProjectModal } from "@/app/components/ProjectModal";
import { SectionReveal } from "@/app/components/SectionReveal";
import { useProjectModal } from "@/app/components/ProjectModalProvider";

export function Projects() {
  const { openProjectId, openProject, closeProject } = useProjectModal();

  const selectedProject: Project | null =
    projects.find((project) => project.id === openProjectId) || null;

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="mb-16 max-w-2xl">
          <p className="text-base font-medium text-primary">Projects</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
            Recent work
          </h2>
          <p className="mt-4 text-lg text-muted">
            Click a project to read the case study, or open the links directly.
          </p>
        </SectionReveal>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.1}>
              <ProjectCard
                project={project}
                index={index}
                onClick={() => openProject(project.id)}
              />
            </SectionReveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </section>
  );
}
