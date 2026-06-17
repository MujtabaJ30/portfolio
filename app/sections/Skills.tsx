"use client";

import { Compass, Code, Brain } from "@phosphor-icons/react";
import { skillGroups } from "@/app/lib/data";
import { SectionReveal } from "@/app/components/SectionReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string; weight?: string }>> = {
  Compass,
  Code,
  Brain,
};

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface/30 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="mb-16 max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-wide text-accent">
            Capabilities
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Skills across the product stack
          </h2>
          <p className="mt-4 text-lg text-muted">
            I work at the intersection of product strategy, technical execution,
            and AI-assisted workflows.
          </p>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <SectionReveal key={group.category} delay={index * 0.1}>
                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-accent/10 p-2.5 text-accent">
                      {Icon && <Icon className="h-6 w-6" weight="bold" />}
                    </div>
                    <h3 className="text-xl font-semibold text-text">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-3 text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
