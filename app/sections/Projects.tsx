import { projects } from "@/app/lib/data";
import { ProjectCard } from "@/app/components/ProjectCard";
import { SectionReveal } from "@/app/components/SectionReveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="px-5 pb-28 pt-12 sm:px-8 lg:px-12 lg:pb-40 lg:pt-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionReveal className="mb-20 max-w-3xl lg:mb-28">
          <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-text sm:text-5xl lg:text-7xl">
            Five projects, one way of working.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            Get close to the real constraint, make the trade-off explicit, and build the smallest useful thing.
          </p>
        </SectionReveal>

        <div className="space-y-24 lg:space-y-36">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
