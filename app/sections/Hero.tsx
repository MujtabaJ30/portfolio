"use client";

import { ArrowDown, LinkedinLogo } from "@phosphor-icons/react";
import { Button } from "@/app/components/Button";
import { heroContent, contactLinks } from "@/app/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-wide text-accent">
            {heroContent.role}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-text md:text-6xl lg:text-7xl">
            {heroContent.name}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {heroContent.philosophy}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href="#projects"
              icon={<ArrowDown className="h-4 w-4" weight="bold" />}
            >
              {heroContent.cta}
            </Button>

            <Button
              href={contactLinks.linkedin}
              variant="secondary"
              icon={<LinkedinLogo className="h-4 w-4" weight="bold" />}
            >
              LinkedIn
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 font-mono text-sm text-muted">
            <a
              href={`mailto:${contactLinks.email}`}
              className="hover:text-accent transition-colors"
            >
              {contactLinks.email}
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-border pt-6 text-xs text-muted md:left-12 md:right-12 lg:left-20 lg:right-20">
        <span className="font-mono uppercase tracking-wide">
          Based in Ahmedabad, India
        </span>
        <span className="font-mono uppercase tracking-wide">
          Open to PM roles
        </span>
      </div>
    </section>
  );
}
