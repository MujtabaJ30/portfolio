"use client";

import { Compass, Code, Brain, IconProps } from "@phosphor-icons/react";
import { skillGroups } from "@/app/lib/data";
import { SectionReveal } from "@/app/components/SectionReveal";

const iconMap: Record<string, React.ComponentType<IconProps>> = {
  Compass,
  Code,
  Brain,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-surface/30 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="mb-16 max-w-2xl">
          <p className="text-base font-medium text-accent">Capabilities</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
            Skills across the product stack
          </h2>
          <p className="mt-4 text-lg text-muted">
            Product sense, technical fluency, and AI tools. I pick the right mix
            for the problem instead of forcing the same playbook every time.
          </p>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <SectionReveal key={group.category} delay={index * 0.1}>
                <div className="h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded bg-accent/10 p-2 text-accent">
                      {Icon && <Icon className="h-5 w-5" weight="bold" />}
                    </div>
                    <h3 className="text-xl font-semibold text-text">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded border border-border bg-bg px-2.5 py-1 text-sm text-muted"
                      >
                        {skill}
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
